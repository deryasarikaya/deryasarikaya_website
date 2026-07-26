import { Resend } from 'resend';
import { validateContact } from '../src/lib/contact.js';

interface ApiRequest {
  method?: string;
  body?: unknown;
  headers: Record<string, string | string[] | undefined>;
  socket?: { remoteAddress?: string };
}
interface ApiResponse {
  status(code: number): ApiResponse;
  json(body: unknown): void;
  setHeader(name: string, value: string): void;
}

const attempts = new Map<string, { count: number; reset: number }>();

function allowed(ip: string): boolean {
  const now = Date.now();
  const current = attempts.get(ip);
  if (!current || current.reset < now) {
    attempts.set(ip, { count: 1, reset: now + 60_000 });
    return true;
  }
  if (current.count >= 5) return false;
  current.count += 1;
  return true;
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });
  const ip = String(req.headers['x-forwarded-for'] ?? req.socket?.remoteAddress ?? 'unknown').split(
    ',',
  )[0];
  if (!allowed(ip))
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });

  const result = validateContact(req.body);
  if (result.valid === false)
    return res.status(400).json({ error: 'Invalid form data.', fields: result.errors });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from)
    return res.status(503).json({ error: 'Contact delivery is not configured in this preview.' });

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: result.data.email,
      subject: `Portfolio enquiry from ${result.data.name}`,
      text: `Name: ${result.data.name}\nEmail: ${result.data.email}\nLanguage: ${result.data.language}\n\n${result.data.message}`,
    });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: 'Message delivery failed.' });
  }
}

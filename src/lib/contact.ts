export const contactLimits = { name: 100, email: 254, message: 3000 } as const;
export interface ContactInput {
  name: string;
  email: string;
  message: string;
  language: 'de' | 'en';
  company?: string;
}
export type ValidationResult =
  { valid: true; data: ContactInput } | { valid: false; errors: Record<string, string> };

export function validateContact(input: unknown): ValidationResult {
  const data = (typeof input === 'object' && input ? input : {}) as Record<string, unknown>;
  const name = String(data.name ?? '').trim();
  const email = String(data.email ?? '').trim();
  const message = String(data.message ?? '').trim();
  const language = data.language === 'en' ? 'en' : 'de';
  const company = String(data.company ?? '').trim();
  const errors: Record<string, string> = {};
  if (company) errors.form = 'Request rejected.';
  if (name.length < 2 || name.length > contactLimits.name)
    errors.name = 'Please enter a valid name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > contactLimits.email)
    errors.email = 'Please enter a valid email address.';
  if (message.length < 10 || message.length > contactLimits.message)
    errors.message = 'Please enter a message between 10 and 3000 characters.';
  return Object.keys(errors).length
    ? { valid: false, errors }
    : { valid: true, data: { name, email, message, language, company } };
}

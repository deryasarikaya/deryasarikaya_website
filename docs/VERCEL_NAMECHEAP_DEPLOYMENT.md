# Vercel and Namecheap deployment

This guide deliberately does not change DNS and does not hardcode DNS values, because Vercel supplies the authoritative records for each project and they can change.

## Create the preview deployment

1. Import `deryasarikaya/deryasarikaya_website` into Derya's Vercel account.
2. Leave framework detection on Astro. Confirm build command `pnpm build` and output directory `dist`.
3. Keep `master` as the production branch. Deploy `astro-rebuild` as a preview branch until the rebuild is approved.
4. Use Node.js 22 and the repository's pinned pnpm version.
5. Add only the environment variables required for the intended preview:
   - `PUBLIC_SITE_URL=https://deryasarikaya.ai`
   - `OPENAI_API_KEY` only to enable model-backed guide responses
   - `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` only after email verification
6. Deploy and verify every route, function response, security header, asset, sitemap, and the PDF link.

Without service credentials, the preview remains usable: the guide uses curated local answers and the contact page clearly states that direct delivery is inactive.

## Connect `deryasarikaya.ai` after approval

1. Add `deryasarikaya.ai` and the chosen `www` behavior in Vercel's project domain settings.
2. Copy the exact DNS records Vercel displays for this project.
3. In Namecheap Advanced DNS, compare each current record before editing. Preserve mail-related MX, SPF, DKIM, and DMARC records.
4. Add or replace only the web records needed by Vercel. Do not guess A, AAAA, CNAME, or verification values from a tutorial.
5. Wait for Vercel's domain verification and TLS certificate status to become valid.
6. Verify apex and `www` redirect consistently, canonical URLs use HTTPS, and no redirect loop exists.

## Preserve the current site

Do not point the public domain at the rebuild while it is only a preview. Keep the current production records documented and retain a rollback plan. DNS should change only after design approval, legal completion, verified contact/email behavior, and a successful production build.

## Production checklist

- draft PR reviewed; `master` still untouched until approval
- final legal text inserted and noindex decision reviewed
- professional mailbox can send and receive
- Resend sender and contact form tested, or form remains intentionally disabled
- OpenAI guide tested with its production key, or fallback mode intentionally retained
- 21 static routes and four serverless method/error paths checked
- responsive screenshots and automated tests clean
- final Vercel preview approved on real devices
- Namecheap record backup saved
- Vercel production deployment succeeds before DNS cutover
- DNS and TLS verified after cutover; rollback records remain available

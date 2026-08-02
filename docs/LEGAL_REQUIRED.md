# Legal information required before production

Status: launch blocker. The current legal pages are clearly marked drafts, carry `noindex, nofollow`, and are excluded from the sitemap. They are architecture previews, not legal advice or finished declarations.

Have qualified German counsel or a suitable legal service prepare and verify the final German text, then obtain an appropriate English version. At minimum, confirm the following before removing `noindex`.

## Legal notice / Impressum

- Derya's full legal name and a valid serviceable postal address
- the legally required contact route(s)
- the correct legal basis and wording for the actual activity and status
- whether VAT ID, professional register, supervisory authority, or other details apply
- responsibility for editorial content, if applicable
- dispute-resolution information, if applicable at launch time

Do not infer an address, company form, tax number, registration, or professional designation from the portfolio.

## Privacy policy

Document the services actually enabled at production:

- Vercel hosting, request logs, server location/transfer basis, retention, and processor terms
- the contact form fields, purpose, legal basis, retention/deletion process, recipients, and data-subject rights
- Resend as email delivery processor, including transfer and retention details
- OpenAI API processing for guide questions if `OPENAI_API_KEY` is configured, including the chosen data settings and transfer basis
- direct email handling by the selected mailbox provider
- technically necessary local storage used only to remember the selected language
- security/rate-limiting logs or platform logs that exist in the deployed configuration

The current implementation adds no analytics, advertising pixels, third-party font calls, database, or persistent chat history. Recheck that this remains true immediately before launch.

## Launch verification

1. Insert approved text in both language routes.
2. Update the visible draft labels and descriptions.
3. Remove `noindex` only after legal approval.
4. Include the legal routes in the sitemap only if counsel recommends indexing them.
5. Configure the real service providers and processor agreements.
6. Send test form and guide requests and verify the policy describes the observed network behavior.
7. Record an owner and date for future legal reviews.

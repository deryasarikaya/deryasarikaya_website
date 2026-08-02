# Set up `info@deryasarikaya.ai`

Owning a Namecheap domain does not automatically provide a working mailbox. Email hosting is a separate service. The address is shown on the preview as planned, but its activation has not been confirmed.

## Choose a mailbox provider

Two suitable options are:

- Google Workspace, for Gmail-based business mail and administration
- Zoho Mail, for a lighter business-mail setup

Compare current pricing, region, retention, support, aliases, and data-processing terms before choosing. Follow the selected provider's current domain-verification wizard rather than copying historical record values.

## Configure without disrupting the website

1. Create the provider account and add `deryasarikaya.ai`.
2. Add the exact verification TXT record supplied by the provider in Namecheap Advanced DNS.
3. Create the `info` mailbox. Optionally add `derya@deryasarikaya.ai` as an alias only after deciding where it should deliver.
4. Replace email MX records only with the exact prioritized values from the provider.
5. Add one valid SPF TXT policy that includes every legitimate sender. Do not create multiple competing SPF records.
6. Generate and publish the provider's DKIM selector and public key.
7. Add DMARC at `_dmarc.deryasarikaya.ai`. Begin with a monitored policy appropriate to the provider's guidance, review reports, then strengthen the policy when all legitimate senders align.
8. Preserve Vercel web records; web hosting and mail records serve different purposes.

## Verify

- send from `info@deryasarikaya.ai` to external Gmail and Outlook accounts
- reply from both providers and confirm reception
- inspect message headers for SPF, DKIM, and DMARC pass results
- test spam placement and the display name
- verify the optional alias in both directions
- document recovery methods and mailbox ownership

## Activate the website contact path

After mailbox verification:

1. verify `CONTACT_FROM_EMAIL` as a Resend sender/domain
2. set `CONTACT_TO_EMAIL` to the confirmed recipient
3. add `RESEND_API_KEY` only in Vercel's encrypted environment settings
4. deploy the preview and send several legitimate test enquiries
5. verify reply-to behavior, error behavior, rate limits, and delivery logs
6. update the privacy policy to describe the final mailbox, Vercel, and Resend configuration
7. change the preview wording only after successful end-to-end delivery

Never commit provider keys, DNS secrets, or mailbox credentials.

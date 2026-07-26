# Derya Sarikaya — personal portfolio

A bilingual personal portfolio for Derya Sarikaya, AI Solutions Engineer and Technical AI Consultant. The site is a statically generated Astro application with two optional Vercel functions: a curated Portfolio Guide and a Resend-backed contact form.

The portfolio itself has no Flask, Gunicorn, Render, database, analytics, or external font dependency.

## Architecture

- Astro 7 and TypeScript for 21 statically generated pages
- German and English routes backed by typed copy and separate content collections
- locally bundled Fraunces, Manrope, and JetBrains Mono variable fonts
- responsive Astro image optimization to AVIF and WebP
- minimal framework-free browser JavaScript for navigation, terminal, guide, and form behavior
- Vercel functions in `api/chat.ts` and `api/contact.ts`
- Vitest unit coverage and Playwright browser/visual coverage

Astro 7 discovers the content collections from `src/content.config.ts`. The two collections intentionally use separate German and English folders so slugs can remain equivalent without ID collisions.

## Routes

German lives under `/de/`; English lives under `/en/`. `/` redirects permanently to `/de/`. Route equivalents are declared centrally in `src/data/routes.ts`, which also drives the language switch, canonical URLs, and hreflang metadata.

## Local development

Requirements: Node.js 22.12 or newer and pnpm 11.9.

```bash
pnpm install
pnpm exec playwright install chromium
pnpm dev
```

Copy `.env.example` to `.env` only when testing optional integrations. Never commit real values.

| Variable             | Purpose                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| `OPENAI_API_KEY`     | Enables the Responses API Portfolio Guide; without it the curated local fallback remains functional. |
| `RESEND_API_KEY`     | Enables contact delivery.                                                                            |
| `CONTACT_TO_EMAIL`   | Verified recipient for enquiries.                                                                    |
| `CONTACT_FROM_EMAIL` | Resend-verified sender.                                                                              |
| `PUBLIC_SITE_URL`    | Canonical production origin; defaults to `https://deryasarikaya.ai`.                                 |

## Quality commands

```bash
pnpm format:check
pnpm check
pnpm test
pnpm build
pnpm test:browser
pnpm screenshots
pnpm test:all
```

Screenshots are saved to `docs/screenshots/` at 1440 × 1000 and 390 × 844.

## Editing content and assets

- general bilingual copy: `src/data/de.ts` and `src/data/en.ts`
- web CV: `src/data/cv.de.ts` and `src/data/cv.en.ts`
- case studies: `src/content/projects/de/` and `src/content/projects/en/`
- curated guide facts: `src/data/portfolioKnowledge.ts`
- project screenshots: import approved images in `src/assets/images/projects/` and render them through Astro's `Picture` component
- English CV: replace `public/cv/Derya_Sarikaya_CV_EN.pdf` without changing its public path
- future German CV: add the verified file and explicitly implement a German-only download link; no German PDF is currently fabricated or offered

Only the supplied laptop-and-coconut portrait is used on the website. Do not reintroduce the legacy tablet photo, comic artwork, or generated portraits.

## Optional integrations

### Portfolio Guide

The browser always has a deterministic, curated fallback. With `OPENAI_API_KEY`, `api/chat.ts` uses the OpenAI Responses API and strict typed functions that can only retrieve local public portfolio facts. It uses no arbitrary browsing or persistent history, and falls back locally on service errors.

### Contact form

The form validates on the client and server, includes a honeypot and in-memory rate limiting, and persists no messages. It honestly reports preview mode until all three Resend/contact variables are configured. Activate it only after the professional mailbox and sender domain are verified.

## Vercel and release readiness

`vercel.json` contains the static output, function limits, and security headers. See `docs/VERCEL_NAMECHEAP_DEPLOYMENT.md`, `docs/EMAIL_SETUP_NAMECHEAP.md`, and `docs/LEGAL_REQUIRED.md` before production launch.

The legal pages are intentionally draft-labelled, noindexed, and excluded from the sitemap. The project is technically preview-ready but not legally production-ready.

## Branch strategy

- `legacy-flask` preserves the old Flask site.
- `astro-rebuild` contains this rebuild and is the pull-request branch.
- `master` must not be changed or merged until review, legal completion, and launch approval.

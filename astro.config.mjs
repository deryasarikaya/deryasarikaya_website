import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || 'https://deryasarikaya.ai';

export default defineConfig({
  site,
  devToolbar: { enabled: false },
  output: 'static',
  trailingSlash: 'always',
  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith('/de/impressum/') &&
        !page.endsWith('/de/datenschutz/') &&
        !page.endsWith('/en/legal-notice/') &&
        !page.endsWith('/en/privacy/'),
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de-DE', en: 'en-US' },
      },
    }),
  ],
  vite: {
    server: { strictPort: true },
  },
});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical production URL. davidweis.com currently redirects to Compass;
  // update this if the site launches on a different domain.
  site: process.env.SITE_URL || 'https://davidweis.com',
  // Preview deployments (GitHub Pages project site) set SITE_BASE=/repo-name.
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'never',
  build: {
    // A handful of static pages: inline the CSS so nothing render-blocking
    // stands between the HTML and first paint (Lighthouse: 800 ms on mobile).
    inlineStylesheets: 'always',
  },
  // The Projects showcase became the Experience section; keep the old link alive.
  redirects: {
    '/projects': '/experience',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/privacy-policy'),
    }),
  ],
});

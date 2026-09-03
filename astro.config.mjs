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
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});

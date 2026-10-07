// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const site = process.env.SITE_URL || 'https://davidweis.com';
const base = process.env.SITE_BASE || '/';

/**
 * Image sitemap: list each page's photos (everything under /images/ except
 * logos and marks) so search engines find them without crawling. Reads the
 * built HTML, which is on disk by the time the sitemap is written.
 */
let outDir;
const pageImages = (pageUrl) => {
  const route = new URL(pageUrl).pathname.slice(base.replace(/\/$/, '').length).replace(/^\/|\/$/g, '');
  const file = fileURLToPath(new URL(route ? `${route}/index.html` : 'index.html', outDir));
  if (!existsSync(file)) return [];
  const seen = new Map();
  for (const [tag] of readFileSync(file, 'utf8').matchAll(/<img\b[^>]*>/g)) {
    const src = tag.match(/\ssrc="([^"]+)"/)?.[1];
    const alt = tag.match(/\salt="([^"]*)"/)?.[1];
    if (!src || !alt || !src.includes('/images/') || /logo|roof-mark|lockup/.test(src)) continue;
    seen.set(src, { url: new URL(src, site).href, caption: alt.replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"') });
  }
  return [...seen.values()];
};

// https://astro.build/config
export default defineConfig({
  // Canonical production URL. davidweis.com currently redirects to Compass;
  // update this if the site launches on a different domain.
  site,
  // Preview deployments (GitHub Pages project site) set SITE_BASE=/repo-name.
  base,
  trailingSlash: 'never',
  build: {
    // A handful of static pages: inline the CSS so nothing render-blocking
    // stands between the HTML and first paint (Lighthouse: 800 ms on mobile).
    inlineStylesheets: 'always',
  },
  // The Projects showcase became the Experience section; keep the old link alive.
  redirects: {
    '/projects': '/experience',
    // David's suggested URL for the 444 W Stevens story (2026-10-05 brief).
    '/projects/444-w-stevens-palm-springs': '/experience/444-w-stevens',
  },
  integrations: [
    {
      name: 'out-dir',
      hooks: { 'astro:config:done': ({ config }) => { outDir = config.outDir; } },
    },
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/privacy-policy'),
      serialize: (item) => {
        const img = pageImages(item.url);
        return img.length ? { ...item, img } : item;
      },
    }),
  ],
});

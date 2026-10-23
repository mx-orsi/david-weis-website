/**
 * Prefix a root-relative path with the configured `base`.
 * Production builds use base "/" so this is a no-op; preview deployments
 * (e.g. GitHub Pages project sites) set SITE_BASE and every internal link
 * and asset path picks it up.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  const joined = `${base}${path}`;
  return joined === '' ? '/' : joined;
}

/** True when the site is built for a non-root preview location. */
export const isPreviewBuild = base !== '';

/**
 * True when the build must stay out of search and analytics: every preview,
 * plus a production build with SITE_NOINDEX=1 (the Cloudflare pages.dev
 * project before launch day; remove the variable at launch).
 */
export const isHiddenBuild = isPreviewBuild || (typeof process !== 'undefined' && process.env?.SITE_NOINDEX === '1');

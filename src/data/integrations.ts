/**
 * Third-party service IDs. Both values end up in public HTML, so they are not
 * secrets and live here rather than only in a .env file: the GitHub Actions
 * preview build and the Cloudflare production build then pick them up
 * without extra setup. An environment variable of the same name overrides
 * the value here for a one-off build.
 *
 * Leave a value empty to keep that service off:
 * - formEndpoint empty: the contact form opens the visitor's email app, and the
 *   guide form offers that as a clearly labeled email option.
 * - gaMeasurementId empty: no analytics tag is rendered anywhere.
 */
export const integrations = {
  /** Formspree form URL, e.g. https://formspree.io/f/abcdwxyz */
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '',
  /** Google Analytics 4 measurement ID, e.g. G-ABC123XYZ. Only rendered on production builds. */
  gaMeasurementId: import.meta.env.PUBLIC_GA_ID || '',
} as const;

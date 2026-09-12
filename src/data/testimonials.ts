/**
 * Testimonials.
 *
 * Two sources, merged at build time:
 *   1. src/data/testimonials.json — hand-curated entries (e.g. a Google review
 *      Max adds by hand). These render first. The file starts EMPTY and must
 *      only ever contain real, attributable quotes. Never write placeholder or
 *      sample text into it.
 *   2. David's RealSatisfied feed, read at build time by src/lib/realsatisfied.ts.
 *
 * If both come back empty the component renders the ratings strip only; if the
 * ratings are missing too it renders nothing at all. No carousel, no lorem.
 */
import localEntries from './testimonials.json';
import {
  getRealSatisfied,
  isPublishable,
  REALSATISFIED_PROFILE,
  type Ratings,
  type Testimonial,
  type TestimonialSource,
} from '../lib/realsatisfied';

export type { Ratings, Testimonial, TestimonialSource };
export { REALSATISFIED_PROFILE };

/** Section copy. */
export const testimonialsMeta = {
  eyebrow: 'Client reviews',
  title: 'In their words',
  /** Label under the ratings strip. */
  verifiedLabel: 'Verified by RealSatisfied',
  profileUrl: REALSATISFIED_PROFILE,
} as const;

/**
 * Fallback ratings, used only when the feed cannot be reached. David's
 * RealSatisfied profile showed 5.0 across the board in September 2026; update
 * this if the profile changes and the feed is ever unavailable at build time.
 */
export const fallbackRatings: Ratings = {
  overall: 5,
  satisfaction: 5,
  performance: 5,
  recommendation: 5,
};

/**
 * Feed reviews to leave out, by their `guid` (visible in the feed XML). Use
 * this instead of editing quote text — nothing in the feed is ever rewritten.
 * "4ce4tkQU", "2723kkQU" and "b8d2XkQU" need no entry: they name a unit
 * address, so the reader drops them automatically.
 */
export const excludedIds: readonly string[] = [
  // Mark W, San Diego (Buyer). Mark is David's husband and partner on the
  // properties in the Experience section, so it does not read as independent
  // client feedback. Left out until David says otherwise; delete this line to
  // show it. See CLIENT-QUESTIONS.md.
  '7a21loHO',
];

export const sourceLabels: Record<TestimonialSource, string> = {
  realsatisfied: 'RealSatisfied verified',
  google: 'Google review',
};

/** Shape of an entry in testimonials.json. */
interface LocalTestimonial {
  quote: string;
  author: string;
  context?: string;
  date?: string;
  source?: TestimonialSource;
}

function normalizeLocal(entry: LocalTestimonial): Testimonial | undefined {
  const quote = (entry.quote ?? '').trim();
  if (!quote || !isPublishable(quote)) return undefined;
  return {
    quote: quote.split(/\n+/).map((p) => p.trim()).filter(Boolean),
    author: entry.author?.trim() || 'Client',
    context: entry.context?.trim() || undefined,
    date: entry.date,
    source: entry.source ?? 'google',
  };
}

function fingerprint(t: Testimonial): string {
  return t.quote.join(' ').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function chars(t: Testimonial): number {
  return t.quote.join(' ').length;
}

export interface TestimonialsData {
  ratings?: Ratings;
  items: Testimonial[];
  /** True when the feed answered; false when the fallback ratings are showing. */
  live: boolean;
}

/**
 * Build-time data for the component.
 *
 * @param limit  how many quotes to render (2 on the home band, 4 on About).
 * @param prefer 'concise' picks the shortest quotes, which keeps the home
 *               band tight; 'recent' keeps newest first. Selection only —
 *               quote text is never trimmed or edited.
 */
export async function getTestimonials(
  limit: number,
  prefer: 'recent' | 'concise' = 'recent',
): Promise<TestimonialsData> {
  const feed = await getRealSatisfied();

  const local = (localEntries as LocalTestimonial[])
    .map(normalizeLocal)
    .filter((t): t is Testimonial => Boolean(t));

  // Some reviews appear twice in the feed, once per city (RealSatisfied files
  // one per transaction side). Show each piece of writing once.
  const seen = new Set(local.map((t) => fingerprint(t)));
  const remote = feed.testimonials
    .filter((t) => !t.id || !excludedIds.includes(t.id))
    .filter((t) => {
      const key = fingerprint(t);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
  if (prefer === 'concise') remote.sort((a, b) => chars(a) - chars(b));

  // Local entries render first, then the feed.
  const items = [...local, ...remote].slice(0, limit);

  return { ratings: feed.ratings ?? fallbackRatings, items, live: Boolean(feed.ratings) };
}

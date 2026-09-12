/**
 * RealSatisfied feed reader — build time only.
 *
 * WORKING ENDPOINT (verified 2026-09-12):
 *   https://rss.realsatisfied.com/rss/agent/David-Weis   → 200, application/xml
 * Also verified working (same payload, different host):
 *   https://www.realsatisfied.com/rss/agent/David-Weis   → 200
 * Verified NOT working:
 *   https://rss.realsatisfied.com/rss/agent/David-Weis/page=1 → 404
 *
 * The feed is RSS 2.0 with a `realsatisfied:` namespace. The channel carries
 * the ratings (integer percentages) and each <item> is one review: <title>
 * is "Name, City ST", <description> is the review text, <pubDate> the date and
 * <realsatisfied:source> is either "RealSatisfied" or "Google".
 *
 * This module is imported from component frontmatter, so the fetch happens
 * during `astro build` (and once per dev server request). Nothing ships to the
 * browser: no third-party JS, no layout shift, and the site keeps working when
 * RealSatisfied is slow or down. A failure never fails the build — it logs a
 * warning and the component falls back to src/data/testimonials.json plus the
 * ratings constant in src/data/testimonials.ts.
 */

export const REALSATISFIED_VANITY = 'David-Weis';
export const REALSATISFIED_PROFILE = `https://www.realsatisfied.com/real-estate-agent/${REALSATISFIED_VANITY}`;

/**
 * Tried in order; the first one returning valid XML wins.
 * Set REALSATISFIED_FEED (space-separated) to override — used to rehearse the
 * feed-down and feed-empty builds before a release. See README.
 */
const OVERRIDE = import.meta.env.REALSATISFIED_FEED as string | undefined;
const FEED_URLS = OVERRIDE
  ? OVERRIDE.split(/\s+/).map((u) => u.trim()).filter(Boolean)
  : [
      `https://rss.realsatisfied.com/rss/agent/${REALSATISFIED_VANITY}`,
      `https://rss.realsatisfied.com/rss/agent/${REALSATISFIED_VANITY}/page=1`,
      `https://www.realsatisfied.com/rss/agent/${REALSATISFIED_VANITY}`,
    ];

const TIMEOUT_MS = 8000;

export type TestimonialSource = 'realsatisfied' | 'google';

export interface Testimonial {
  /** Verbatim review text, one entry per paragraph. Never edited. */
  quote: string[];
  /** Stable feed id, so a single review can be excluded by hand. */
  id?: string;
  /** First name plus last initial, e.g. "Justin A." */
  author: string;
  /** "Seller · Palm Springs, CA" — from the feed, never an address. */
  context?: string;
  /** ISO date, used for ordering. */
  date?: string;
  source: TestimonialSource;
}

export interface Ratings {
  /** 0–5, one decimal. */
  overall: number;
  satisfaction: number;
  performance: number;
  recommendation: number;
  /** Number of completed surveys behind the scores, when the feed reports it. */
  responses?: number;
}

export interface FeedResult {
  ratings?: Ratings;
  testimonials: Testimonial[];
  /** The endpoint that answered, for logging. */
  endpoint?: string;
}

/* -- XML helpers (the feed is small and well-formed; no parser dependency) -- */

function tag(xml: string, name: string): string | undefined {
  const m = xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i'));
  return m ? m[1] : undefined;
}

function decode(s: string): string {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&amp;/g, '&');
}

function text(xml: string, name: string): string | undefined {
  const raw = tag(xml, name);
  if (raw === undefined) return undefined;
  const out = decode(raw).trim();
  return out === '' ? undefined : out;
}

function percentToStars(pct: number | undefined): number | undefined {
  if (pct === undefined || !Number.isFinite(pct)) return undefined;
  return Math.round((pct / 20) * 10) / 10;
}

function num(xml: string, name: string): number | undefined {
  const v = text(xml, name);
  if (v === undefined) return undefined;
  const n = Number(v);
  return Number.isFinite(n) ? n : undefined;
}

/* -- privacy + presentation rules from the build brief -- */

/**
 * Reviews that name a property are skipped rather than edited: the brief
 * forbids showing addresses, and a real quote must never be rewritten.
 */
const ADDRESS_RE =
  /(\b\d{2,6}\s+[A-Z0-9][\w.'-]*(?:\s+[A-Z0-9][\w.'-]*){0,4}\s+(?:Road|Rd|Street|St|Avenue|Ave|Boulevard|Blvd|Drive|Dr|Lane|Ln|Court|Ct|Circle|Cir|Place|Pl|Way|Terrace|Ter|Trail|Highway|Hwy|Parkway|Pkwy)\b)|(\b(?:Unit|Apt|Suite|Ste)\s*#?\s*\d+\b)|(#\s?\d{2,})/i;

/** Emails, phone numbers and postal-looking fragments never render either. */
const CONTACT_RE = /([\w.+-]+@[\w-]+\.[\w.]+)|(\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4})/;

export function isPublishable(quote: string): boolean {
  return !ADDRESS_RE.test(quote) && !CONTACT_RE.test(quote);
}

/**
 * "Justin Adamson, San Diego" → "Justin A."
 * Full names are never shown even though the feed publishes them.
 */
export function initialize(rawName: string): string {
  const name = rawName.replace(/\s+/g, ' ').trim();
  if (!name) return 'Client';
  const parts = name.split(' ').filter(Boolean);
  const first = parts[0];
  if (parts.length === 1) return first.replace(/\.$/, '') + '.';
  const lastInitial = parts[parts.length - 1][0].toUpperCase();
  return `${first} ${lastInitial}.`;
}

/** Feed <title> is "Name, City ST" or "Name, City, ST". */
function splitTitle(title: string): { name: string; place?: string } {
  const i = title.indexOf(',');
  if (i === -1) return { name: title.trim() };
  return { name: title.slice(0, i).trim(), place: title.slice(i + 1).trim() || undefined };
}

const ROLES: Record<string, string> = {
  buyer: 'Buyer',
  seller: 'Seller',
  landlord: 'Landlord',
  tenant: 'Tenant',
  /** RealSatisfied's "Peer" = someone who referred a client rather than transacting. */
  peer: 'Referral',
};

function buildContext(customerType: string | undefined, place: string | undefined): string | undefined {
  const role = customerType ? ROLES[customerType.toLowerCase()] : undefined;
  return [role, place].filter(Boolean).join(' · ') || undefined;
}

/**
 * Split the review into paragraphs. Line breaks are layout, not content: a
 * fragment too short to be a sentence (some reviews end with a stray ".") is
 * joined back onto the previous paragraph. The words are never changed.
 */
function paragraphs(body: string): string[] {
  const out: string[] = [];
  for (const raw of body.split(/\n+/)) {
    const part = raw.trim();
    if (!part) continue;
    if (out.length > 0 && part.length < 4) out[out.length - 1] = `${out[out.length - 1]}${part}`;
    else out.push(part);
  }
  return out;
}

function parseFeed(xml: string): FeedResult {
  const channel = tag(xml, 'channel') ?? xml;
  const head = channel.split('<item>')[0];

  const satisfaction = percentToStars(num(head, 'realsatisfied:overall_satisfaction'));
  const performance = percentToStars(num(head, 'realsatisfied:performance_rating'));
  const recommendation = percentToStars(num(head, 'realsatisfied:recommendation_rating'));
  const responses = num(head, 'realsatisfied:responseCount');

  let ratings: Ratings | undefined;
  if (satisfaction !== undefined && performance !== undefined && recommendation !== undefined) {
    const overall = Math.round(((satisfaction + performance + recommendation) / 3) * 10) / 10;
    ratings = { overall, satisfaction, performance, recommendation, responses };
  }

  const showTestimonials = num(head, 'realsatisfied:show_testimonials');
  const items = showTestimonials === 0 ? [] : [...channel.matchAll(/<item>([\s\S]*?)<\/item>/g)];

  const testimonials: Testimonial[] = [];
  for (const [, item] of items) {
    const body = text(item, 'description');
    const title = text(item, 'title');
    if (!body || !title) continue;
    if (!isPublishable(body)) continue;

    const { name, place } = splitTitle(title);
    const pub = text(item, 'pubDate');
    const parsed = pub ? new Date(pub) : undefined;
    const source: TestimonialSource = /google/i.test(text(item, 'realsatisfied:source') ?? '')
      ? 'google'
      : 'realsatisfied';

    testimonials.push({
      id: text(item, 'guid'),
      quote: paragraphs(body),
      author: initialize(name),
      context: buildContext(text(item, 'realsatisfied:customer_type'), place),
      date: parsed && !Number.isNaN(parsed.valueOf()) ? parsed.toISOString() : undefined,
      source,
    });
  }

  return { ratings, testimonials };
}

let cached: Promise<FeedResult> | undefined;

/**
 * Fetch and normalize the feed once per build. Resolves to an empty result on
 * any failure (network error, timeout, non-XML body) after logging a warning.
 */
export function getRealSatisfied(): Promise<FeedResult> {
  cached ??= (async (): Promise<FeedResult> => {
    for (const url of FEED_URLS) {
      try {
        const res = await fetch(url, {
          signal: AbortSignal.timeout(TIMEOUT_MS),
          headers: { accept: 'application/rss+xml, application/xml, text/xml' },
        });
        if (!res.ok) continue;
        const xml = await res.text();
        if (!/<rss[\s>]/i.test(xml) || !/<channel[\s>]/i.test(xml)) continue;
        const parsed = parseFeed(xml);
        console.info(
          `[realsatisfied] ${url} → ${parsed.testimonials.length} publishable testimonial(s)` +
            (parsed.ratings ? `, ratings ${parsed.ratings.overall}/5` : ', no ratings'),
        );
        return { ...parsed, endpoint: url };
      } catch (err) {
        console.warn(`[realsatisfied] ${url} failed: ${(err as Error).message}`);
      }
    }
    console.warn('[realsatisfied] no feed reachable — falling back to local testimonials data');
    return { testimonials: [] };
  })();
  return cached;
}

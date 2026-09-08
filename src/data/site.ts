/**
 * Single source of truth for agent details, markets, navigation and external links.
 * Copy here was reconciled against David's Compass profile (davidweis.com redirects
 * to https://www.compass.com/agents/david-weis/) on 2026-09-01.
 */

export const siteUrl = 'https://davidweis.com';

export const agent = {
  name: 'David Weis',
  firstName: 'David',
  /** Current title per Compass profile. Earlier mockup copy said "Realtor®" only. */
  title: 'Broker Associate | REALTOR®',
  titleShort: 'Broker Associate',
  brokerage: 'Compass',
  brokerageUrl: 'https://www.compass.com',
  /** Compass California broker license, per David's 2026-09-04 email */
  brokerageDre: '01527365',
  dre: '02196688',
  phone: '619-518-9246',
  phoneHref: 'tel:+16195189246',
  phoneE164: '+1-619-518-9246',
  /** Per David's 2026-09 email: the only public address (Compass address removed). */
  email: 'david@davidweis.com',
  office: {
    name: 'Compass La Jolla',
    street: '7863 Girard Ave, Suite 210',
    city: 'La Jolla',
    state: 'CA',
    zip: '92037',
  },
  headshot: {
    src: '/images/david-weis-compass-real-estate-agent-san-diego-palm-springs-big-bear.jpg',
    alt: 'David Weis, Compass Broker Associate and REALTOR® serving San Diego, Palm Springs and Big Bear Lake, California',
    width: 480,
    height: 480,
  },
  /** Primary outbound property-search destination (Compass agent profile with listings). */
  compassProfile: 'https://www.compass.com/agents/david-weis/',
  /** David's short-term rentals are managed through this separate business (not Compass). */
  vacationRentals: {
    name: 'Celebrity Vacation Homes',
    url: 'https://celebrityvacationhomes.com',
    markets: 'San Diego and Palm Springs',
  },
  social: {
    instagram: 'https://www.instagram.com/david.weis.realtor/',
    linkedin: 'https://www.linkedin.com/in/davidweis/',
    facebook: 'https://www.facebook.com/people/David-Weis-Realtor/100086990077161/',
  },
} as const;

/** Footer legal block, wording supplied by David on 2026-09-04. */
export const legal = {
  officeLine: `${agent.brokerage} | ${agent.office.street}, ${agent.office.city}, ${agent.office.state} ${agent.office.zip}`,
  brokerLine: `${agent.brokerage} | CA DRE #${agent.brokerageDre} | Equal Housing Opportunity`,
  disclaimer:
    'Compass is a real estate broker licensed by the State of California and abides by Equal Housing Opportunity laws. License Number 01527365. All material presented herein is intended for informational purposes only and is compiled from sources deemed reliable but has not been verified. Changes in price, condition, sale, or withdrawal may be made without notice. No statement is made as to the accuracy of any description. All measurements and square footages are approximate.',
} as const;

export type MarketSlug = 'san-diego' | 'palm-springs' | 'big-bear';

export interface Market {
  slug: MarketSlug;
  /** Region label shown as the tracked eyebrow, e.g. "Coastal" */
  region: string;
  name: string;
  /** Short name used in buttons and links */
  shortName: string;
  tagline: string;
  /** Small pill label, no trailing period */
  pill: string;
  blurb: string;
  bullets: readonly string[];
  href: string;
  /** Compass consumer search pre-filtered to this area */
  searchHref: string;
  image: { src: string; alt: string };
  /** CSS custom property token for the accent dot */
  accent: string;
  /** Keywords for meta descriptions / headings on the market page */
  keywords: readonly string[];
}

export const markets: readonly Market[] = [
  {
    slug: 'san-diego',
    region: 'Coastal',
    name: 'San Diego',
    shortName: 'San Diego',
    tagline: 'Coast to Kensington, from the inside',
    pill: 'Coastal Luxury',
    blurb:
      "My office is in La Jolla and home is Kensington, and I work all of Greater San Diego. I own and manage three short-term rentals here, in Mission Beach, Ocean Beach and Kensington, so I know the coastal and metro markets as an owner, not just an agent. I'm rooted in the community as a garden club member, chapter leader for Gay 4 Good, a regular in two local running groups, and host of annual fundraisers for local causes.",
    bullets: [
      'La Jolla, coastal and metro neighborhoods',
      'Move-up buyers, second homes, condos and short-term rentals',
      'Investment and 1031 exchange guidance',
    ],
    href: '/san-diego',
    searchHref: 'https://www.compass.com/homes-for-sale/san-diego-ca/',
    image: {
      src: '/images/placeholders/san-diego-la-jolla-coastline-placeholder.svg',
      alt: 'Placeholder for a photo of the La Jolla coastline in San Diego, California',
    },
    accent: 'var(--coastal)',
    keywords: ['San Diego', 'La Jolla', 'coastal', 'condos', '1031 exchange'],
  },
  {
    slug: 'palm-springs',
    region: 'Desert',
    name: 'Palm Springs',
    shortName: 'Palm Springs',
    tagline: 'Mid-century, luxury and vacation rentals',
    pill: 'Desert Luxury',
    blurb:
      'I helped my husband complete Querencia Palms, a condo conversion that brought a new community to Palm Springs: Phases I and II sold out, every escrow opened at full price, and the first Phase III unit is already in escrow at full ask. I also own a six-bedroom vacation rental here and co-developed The Cole Hotel. I represent Vista Las Palmas at the monthly ONE-PS meetings (Organized Neighborhoods of Palm Springs), sit on its Neighborhoods of Distinction Awards committee and the Vista Las Palmas Neighbors Foundation board, and belong to the Desert Business Association.',
    bullets: [
      'Mid-century, luxury and STR-friendly areas',
      'Condo conversion and hotel project experience',
      'Wealth-building through desert real estate',
    ],
    href: '/palm-springs',
    searchHref: 'https://www.compass.com/homes-for-sale/palm-springs-ca/',
    image: {
      src: '/images/placeholders/palm-springs-desert-mid-century-placeholder.svg',
      alt: 'Placeholder for a photo of a mid-century modern home against the San Jacinto Mountains in Palm Springs, California',
    },
    accent: 'var(--desert)',
    keywords: ['Palm Springs', 'mid-century', 'vacation rental', 'Vista Las Palmas', 'Querencia Palms'],
  },
  {
    slug: 'big-bear',
    region: 'Mountain',
    name: 'Big Bear Lake',
    shortName: 'Big Bear',
    tagline: 'Cabins, second homes and rental strategy',
    pill: 'Mountain Cabins',
    blurb:
      'Our cabin near Big Bear Mountain Resort was the first home I ever bought on my own, so I know the first-time buyer process from the inside, and my husband and I rebuilt it ourselves. I have since helped cabin sellers here get a great price, and I stay closely connected with local vacation rental owners, so clients get an inside track on rental trends and opportunities.',
    bullets: [
      'Luxury cabins and character homes',
      'First-time buyers and second homes with optional rental use',
      'Practical guidance from an actual cabin owner',
    ],
    href: '/big-bear',
    searchHref: 'https://www.compass.com/homes-for-sale/big-bear-lake-ca/',
    image: {
      src: '/images/placeholders/big-bear-lake-mountain-cabin-placeholder.svg',
      alt: 'Placeholder for a photo of a cabin among pines above Big Bear Lake, California',
    },
    accent: 'var(--mountain)',
    keywords: ['Big Bear Lake', 'cabins', 'second homes', 'vacation rental'],
  },
] as const;

export function getMarket(slug: MarketSlug): Market {
  const m = markets.find((x) => x.slug === slug);
  if (!m) throw new Error(`Unknown market: ${slug}`);
  return m;
}

export const nav = [
  { label: 'San Diego', href: '/san-diego' },
  { label: 'Palm Springs', href: '/palm-springs' },
  { label: 'Big Bear', href: '/big-bear' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
] as const;

/** Short bio, condensed from the Compass profile (source of truth). */
export const bio = {
  headline: 'Owner. Operator. Neighbor.',
  intro:
    "I bring a relationship-driven, client-focused approach to real estate across San Diego, Palm Springs and Big Bear. Since 2018 I've owned and managed investment properties in all three markets, so the advice I give comes from actually holding, renovating and operating the kinds of homes my clients are considering.",
  facts: [
    {
      label: 'Since 2018',
      text: 'Owner and manager of investment properties across San Diego, Palm Springs and Big Bear',
    },
    {
      label: 'The Cole Hotel',
      text: 'Co-developed with my husband and ran as General Manager, earning five-star ratings across every platform',
    },
    {
      label: 'Finance background',
      text: 'Former Personal Banker with securities and insurance licensing, bringing financial strategy to every transaction',
    },
    {
      label: 'Celebrity Vacation Homes',
      text: 'My short-term rentals in San Diego and Palm Springs are managed through Celebrity Vacation Homes, a separate business from my brokerage work with Compass',
      href: 'https://celebrityvacationhomes.com',
    },
    {
      label: '50+ moves',
      text: 'Originally from Oregon and relocated more than fifty times, so I know the buying and selling experience from every side',
    },
  ],
} as const;

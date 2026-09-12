/**
 * Single source of truth for agent details, markets, navigation and legal copy.
 * Copy comes from the approved copy deck (September 2026). When the deck,
 * David's emails and the Compass profile disagree, David's decisions win.
 * Edit copy here, never in components.
 */
import type { Photo } from './types';

export const siteUrl = 'https://davidweis.com';

export const agent = {
  name: 'David Weis',
  firstName: 'David',
  /** Plain string for metadata and alt text; render as text through Title.astro so the ® is set small. */
  title: 'Broker Associate | REALTOR®',
  titleShort: 'Broker Associate',
  brokerage: 'Compass',
  brokerageUrl: 'https://www.compass.com',
  /** Compass California broker license, per David's 2026-09-04 email. */
  brokerageDre: '01527365',
  dre: '02196688',
  /** Display format from the copy deck footer. */
  phone: '619.518.9246',
  phoneHref: 'tel:+16195189246',
  phoneE164: '+1-619-518-9246',
  email: 'david@davidweis.com',
  /** Office per David's 2026-09 review. Shown on the Contact page and in structured data. */
  office: {
    name: 'Compass La Jolla',
    street: '7863 Girard Ave, Suite 210',
    city: 'La Jolla',
    state: 'CA',
    zip: '92037',
  },
  /** Hero portrait: 4:5 crop of David's original photo (source in assets-source/), 1000px plus a -500 variant. */
  headshot: {
    src: '/images/david-weis-compass-real-estate-agent-san-diego-palm-springs-big-bear.jpg',
    alt: 'David Weis, Compass Broker Associate and REALTOR® serving San Diego, Palm Springs and Big Bear, California',
    width: 1000,
    height: 1250,
  },
  /** Outbound destination for "View all listings on Compass" (Compass has no embeddable IDX). */
  compassProfile: 'https://www.compass.com/agents/david-weis/',
  /** David's short-term rentals run through this separate business, not Compass. */
  vacationRentals: {
    name: 'Celebrity Vacation Homes',
    url: 'https://celebrityvacationhomes.com',
    note: 'Independently operated. Compass is not involved in rentals.',
  },
} as const;

export type SocialIcon = 'instagram' | 'linkedin' | 'youtube';
export interface SocialLink {
  name: string;
  icon: SocialIcon;
  /** Leave empty until the URL is confirmed; the footer skips entries without one. */
  href: string;
}

/** Footer order per the copy deck: Instagram · LinkedIn · YouTube. */
export const social: readonly SocialLink[] = [
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/david.weis.realtor/' },
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/davidweis/' },
  // TODO: David's YouTube channel URL is pending (see CLIENT-QUESTIONS.md).
  { name: 'YouTube', icon: 'youtube', href: '' },
];

/** Footer legal block, wording from the copy deck (David's 2026-09-04 disclosure). */
export const legal = {
  brokerLine: `${agent.brokerage} — CA DRE #${agent.brokerageDre} — Equal Housing Opportunity`,
  disclaimer:
    'Compass is a real estate broker licensed by the State of California and abides by Equal Housing Opportunity laws. All material presented herein is intended for informational purposes only and is compiled from sources deemed reliable but has not been verified. Changes in price, condition, sale or withdrawal may be made without notice. No statement is made as to the accuracy of any description. All measurements and square footages are approximate.',
  copyright: `© ${new Date().getFullYear()} ${agent.name}. All rights reserved.`,
} as const;

export type MarketSlug = 'san-diego' | 'palm-springs' | 'big-bear';

export interface Market {
  slug: MarketSlug;
  name: string;
  href: string;
  /** Compass consumer search pre-filtered to this area (outbound, new tab). */
  searchHref: string;
  /** Home page, section 3 */
  homeBlurb: string;
  homeCta: string;
  /** Market page closing CTA label */
  propertiesCta: string;
  image: Photo;
  /** Keywords for structured data and internal search hints */
  keywords: readonly string[];
}

export const markets: readonly Market[] = [
  {
    slug: 'san-diego',
    name: 'San Diego',
    href: '/san-diego',
    searchHref: 'https://www.compass.com/homes-for-sale/san-diego-ca/',
    homeBlurb:
      'Coastal homes, historic neighborhoods, urban living and investment properties all exist within a few miles of one another. My experience here includes personal residences, renovation projects, short-term rentals and client representation.',
    homeCta: 'Explore San Diego',
    propertiesCta: 'Explore San Diego Properties',
    image: {
      suggestion: 'La Jolla coastline in late-afternoon light',
      src: '/images/la-jolla-cove-san-diego-real-estate.jpg',
      alt: 'La Jolla Cove and the La Jolla village shoreline in San Diego, California',
      width: 1600,
      height: 1200,
      hasSmall: true,
    },
    keywords: ['San Diego', 'La Jolla', 'Kensington', 'Mission Beach', 'Ocean Beach'],
  },
  {
    slug: 'palm-springs',
    name: 'Palm Springs',
    href: '/palm-springs',
    searchHref: 'https://www.compass.com/homes-for-sale/palm-springs-ca/',
    homeBlurb:
      'Palm Springs became home through hospitality, real estate and community. From operating a boutique hotel to marketing a condominium conversion, owning vacation property and representing buyers and sellers, this is a market I have experienced from nearly every side.',
    homeCta: 'Explore Palm Springs',
    propertiesCta: 'Explore Palm Springs Properties',
    image: {
      suggestion: 'Mid-century home with the San Jacinto Mountains behind it',
      src: '/images/palm-springs-mid-century-home-real-estate.jpg',
      alt: 'White mid-century modern home with palm trees and desert landscaping in Palm Springs, California',
      width: 1600,
      height: 1200,
      hasSmall: true,
    },
    keywords: ['Palm Springs', 'mid-century', 'vacation rental', 'condominium conversion'],
  },
  {
    slug: 'big-bear',
    name: 'Big Bear',
    href: '/big-bear',
    searchHref: 'https://www.compass.com/homes-for-sale/big-bear-lake-ca/',
    homeBlurb:
      'Big Bear began as an escape and quickly became another chapter in our real estate story. Owning, rebuilding and operating property in the mountains has given me firsthand experience with vacation homes, mountain construction, seasonal demand and second-home ownership.',
    homeCta: 'Explore Big Bear',
    propertiesCta: 'Explore Big Bear Properties',
    image: {
      suggestion: 'Cabin in the pines with Big Bear Lake beyond',
      src: '/images/big-bear-lake-cabin-real-estate.jpg',
      alt: 'Cabin among boulders and pines on the shore of Big Bear Lake, California',
      width: 1600,
      height: 1200,
      hasSmall: true,
    },
    keywords: ['Big Bear', 'Big Bear Lake', 'cabins', 'second homes', 'mountain property'],
  },
] as const;

export function getMarket(slug: MarketSlug): Market {
  const m = markets.find((x) => x.slug === slug);
  if (!m) throw new Error(`Unknown market: ${slug}`);
  return m;
}

/** Global final CTA, rendered before the footer on every page. */
export const finalCta = {
  title: 'Real estate rarely gives you only one option.',
  body: "Let's understand yours.",
  cta: { label: 'Work With David', href: '/contact' },
} as const;

/** Primary nav button, desktop and mobile. */
export const navCta = { label: 'Work With David', href: '/contact' } as const;

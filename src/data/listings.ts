/**
 * Properties page content.
 *
 * Compass IDX embeds are not available for third-party sites, so the page is
 * a hybrid: a manually maintained "Featured Listings" grid plus a prominent
 * link out to David's Compass listings. Toggle either half with `show*` below;
 * the page and its components handle any combination.
 *
 * Every entry here is a labeled placeholder until David supplies listings.
 * To add a real listing: copy an entry, fill the fields, set `placeholder`
 * to false and add a photo `src`. To retire it, move it to `selectedSales`.
 */
import { agent } from './site';
import type { MarketSlug } from './site';
import type { Photo } from './types';

export type ListingStatus = 'For Sale' | 'Pending' | 'Sold';

export interface Listing {
  id: string;
  address: string;
  city: string;
  market: MarketSlug;
  /** Display string, e.g. "$1,250,000". Leave the placeholder text until confirmed. */
  price: string;
  beds: string;
  baths: string;
  sqft: string;
  status: ListingStatus;
  photo: Photo;
  /** Compass listing page for "View Property". Falls back to David's Compass profile. */
  href?: string;
  /** Clearly marks sample cards; remove when the real listing is entered. */
  placeholder?: boolean;
}

export const propertiesConfig = {
  showFeaturedListings: true,
  showCompassLink: true,
  showSelectedSales: true,
  compassListingsUrl: agent.compassProfile,
} as const;

export const properties = {
  seo: {
    title: 'Properties | David Weis',
    description:
      'Homes represented by Compass Broker Associate David Weis across San Diego, Palm Springs and Big Bear, with a link to all current listings on Compass.',
  },
  hero: {
    eyebrow: 'Properties',
    title: 'Current Opportunities',
    intro:
      'Homes I represent across San Diego, Palm Springs and Big Bear. Each property receives an individual strategy built around the property itself, its likely buyer and the story that makes it worth seeing.',
  },
  forSale: {
    title: 'For Sale',
    cardCta: 'View Property',
    empty: 'New listings are added here as they come to market. Every current listing is always available on Compass.',
  },
  compass: {
    title: 'View all listings on Compass',
    body: 'Every property I represent is live on Compass, with full details, photography and showing requests.',
    cta: 'View all listings on Compass',
  },
  sold: {
    title: 'Selected Sales',
    intro: 'A selection of properties represented across my markets.',
    cta: { label: 'Talk About Selling', href: '/contact' },
  },
} as const;

const placeholderPhoto = (suggestion: string): Photo => ({ suggestion });

export const featuredListings: readonly Listing[] = [
  {
    id: 'placeholder-1',
    address: 'Listing address',
    city: 'San Diego',
    market: 'san-diego',
    price: 'Price',
    beds: '—',
    baths: '—',
    sqft: '—',
    status: 'For Sale',
    photo: placeholderPhoto('Primary listing photo'),
    placeholder: true,
  },
  {
    id: 'placeholder-2',
    address: 'Listing address',
    city: 'Palm Springs',
    market: 'palm-springs',
    price: 'Price',
    beds: '—',
    baths: '—',
    sqft: '—',
    status: 'For Sale',
    photo: placeholderPhoto('Primary listing photo'),
    placeholder: true,
  },
  {
    id: 'placeholder-3',
    address: 'Listing address',
    city: 'Big Bear Lake',
    market: 'big-bear',
    price: 'Price',
    beds: '—',
    baths: '—',
    sqft: '—',
    status: 'For Sale',
    photo: placeholderPhoto('Primary listing photo'),
    placeholder: true,
  },
];

export const selectedSales: readonly Listing[] = [
  {
    id: 'sold-placeholder-1',
    address: 'Sold property',
    city: 'San Diego',
    market: 'san-diego',
    price: 'Represented buyer or seller',
    beds: '—',
    baths: '—',
    sqft: '—',
    status: 'Sold',
    photo: placeholderPhoto('Exterior of the sold property'),
    placeholder: true,
  },
  {
    id: 'sold-placeholder-2',
    address: 'Sold property',
    city: 'Palm Springs',
    market: 'palm-springs',
    price: 'Represented buyer or seller',
    beds: '—',
    baths: '—',
    sqft: '—',
    status: 'Sold',
    photo: placeholderPhoto('Exterior of the sold property'),
    placeholder: true,
  },
  {
    id: 'sold-placeholder-3',
    address: 'Sold property',
    city: 'Big Bear Lake',
    market: 'big-bear',
    price: 'Represented buyer or seller',
    beds: '—',
    baths: '—',
    sqft: '—',
    status: 'Sold',
    photo: placeholderPhoto('Exterior of the sold property'),
    placeholder: true,
  },
];

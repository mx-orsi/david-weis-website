/**
 * Properties page content, organized per David's 2026-09-28 brief:
 *
 *   For Sale        David's active listings
 *   In Escrow       his listings under contract, with the exact status
 *   Selected Sales  closed transactions, maintained by hand in sales.ts
 *
 * Nothing here is a placeholder. A section with no entries shows its `empty`
 * line and the Compass link instead of sample cards.
 *
 * CURRENT LISTINGS ARE MANUAL until an MLS feed is approved (IDXcellent from
 * TheMLS/GPSR is the first candidate). Two ways to fill them:
 *   1. Paste the IDXcellent iframe address into `currentListingsEmbed.src`.
 *      The embed then renders above the hand-entered cards and updates itself.
 *   2. Add entries to `activeListings` / `escrowListings` below. These do NOT
 *      update themselves: price and status must be edited here when they change.
 * When a listing closes, move its story into sales.ts; do not delete it.
 * Never list a buyer-side escrow here. Buyer-side sales are added to sales.ts
 * after closing, once David approves them.
 */
import { agent } from './site';
import type { MarketSlug } from './site';
import type { Photo } from './types';

/** "Active Under Contract" and "Pending" are different MLS statuses; keep them distinct. */
export type ListingStatus = 'For Sale' | 'Active Under Contract' | 'Pending';

export interface Listing {
  id: string;
  address: string;
  city: string;
  market: MarketSlug;
  /** Display string, e.g. "$1,250,000". */
  price: string;
  beds: string;
  baths: string;
  sqft: string;
  status: ListingStatus;
  /** Shown when David shares the listing, e.g. "Co-listed with …". */
  note?: string;
  photo: Photo;
  /** Compass or MLS listing page for "View Property". Falls back to David's Compass profile. */
  href?: string;
}

export const propertiesConfig = {
  compassListingsUrl: agent.compassProfile,
} as const;

/**
 * MLS-provided own-listings embed (IDXcellent). Empty `src` hides it.
 *
 * Tested 2026-10-02 with David's GPSR (Palm Springs) widget,
 * https://www.themls.com/IDXNET/Default.aspx?wid=vziW4yIowkMNhVSTsVWo1Zi9No39RVG%2bgg7kmFtBGp0EQL
 * It loads, but is not embedded yet because: it opens on a map search that
 * says "No Listings Found" (his listings are behind its Inventory tab, sold
 * ones included); it is a fixed 933px wide and overflows a phone by 559px;
 * and it covers Palm Springs only. See CLIENT-QUESTIONS.md.
 */
export const currentListingsEmbed = {
  src: '',
  title: "David Weis's current listings",
  /** TheMLS caps the frame at 1024 × 768. */
  maxWidth: 1024,
  height: 768,
} as const;

export const properties = {
  seo: {
    title: 'Properties | David Weis',
    description:
      'Homes represented by Compass Broker Associate David Weis across San Diego, Palm Springs and Big Bear: current listings, properties in escrow and selected sales.',
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
  escrow: {
    title: 'In Escrow',
    cardCta: 'View Property',
    empty: 'Listings under contract appear here with their current status.',
  },
  compass: {
    title: 'View all listings on Compass',
    body: 'Every property I represent is live on Compass, with full details, photography and showing requests.',
    cta: 'View all listings on Compass',
  },
  sold: {
    title: 'Selected Sales',
    intro: 'A selection of properties represented across my markets.',
    storiesCta: { label: 'Sales Experience', href: '/sales' },
    cardCta: 'Read the story',
    cta: { label: 'Talk About Selling', href: '/sell' },
  },
} as const;

/** David's active listings. Empty until he confirms the list (see CLIENT-QUESTIONS.md). */
export const activeListings: readonly Listing[] = [];

/** David's listings under contract. Listing side only. */
export const escrowListings: readonly Listing[] = [];

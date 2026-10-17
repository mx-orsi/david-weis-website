/**
 * Guides: evergreen planning articles that support search (David's 2026-10-16
 * email). Each guide is one entry here and renders at /guides/<slug> through
 * GuidePage.astro; the /guides index, the footer link and the "Planning
 * guides" teaser on market and service pages all read this list, so adding a
 * guide is a data edit only.
 *
 * Copy is David's, verbatim from his handoff file (assets-source/emails/
 * 2026-10-16-relocation-guides). His bracketed [Resource n] labels are
 * replaced by inline links on the organization he names, as he asked.
 * Paragraphs may contain [label](href) links (see src/lib/inline.ts).
 */
import type { MarketSlug } from './site';
import type { Photo } from './types';

export interface GuideSection {
  /** Anchor for the jump links. Keep stable once published. */
  id: string;
  heading: string;
  paragraphs: readonly string[];
}

export interface GuideChoice {
  title: string;
  body: string;
}

export interface Guide {
  slug: string;
  /** Short label for the breadcrumb, cards and the index. */
  crumb: string;
  eyebrow: string;
  /** The full question, rendered as the page's only H1. */
  title: string;
  seo: { title: string; description: string };
  /** ISO date the guide went live. Update `reviewed` only after a genuine review. */
  published: string;
  reviewed?: string;
  /** Market and service pages that should link to this guide. */
  markets: readonly MarketSlug[];
  services: readonly ('buy' | 'sell')[];
  /** One sentence for cards and the index. */
  summary: string;
  intro: readonly string[];
  /** A pair shown side by side under the intro (stacked on phones). */
  images: readonly [Photo, Photo];
  choices?: { heading: string; items: readonly GuideChoice[] };
  sections: readonly GuideSection[];
  faqs: { heading: string; items: readonly { q: string; a: string }[] };
  /** Internal links under the guide: area pages, seller resources and related FAQs. */
  related: { heading: string; links: readonly { label: string; href: string }[] };
  inquiry: {
    heading: string;
    body: readonly string[];
    /** Primary button, used at the top of the page and on the form. */
    primary: string;
    secondary: { label: string; href: string };
    /** Fixed metadata sent with every request from this guide. */
    source: string;
    location: string;
    interest: string;
  };
  footnote: string;
}

const sanDiego: Photo = {
  suggestion: 'Downtown San Diego from the bay at sunset',
  src: '/images/markets/san-diego-downtown-skyline-sunset.jpg',
  alt: 'The downtown San Diego skyline across the bay at sunset',
  width: 2400,
  height: 1330,
  hasSmall: true,
};

const palmSprings: Photo = {
  suggestion: 'Wind turbines with the snow-capped San Jacinto Mountains behind',
  src: '/images/markets/palm-springs-wind-turbines-san-jacinto-mountains.jpg',
  alt: 'Wind turbines outside Palm Springs with the snow-capped San Jacinto Mountains behind them',
  width: 2400,
  height: 1666,
  hasSmall: true,
  position: 'center 68%',
};

export const guides: readonly Guide[] = [
  {
    slug: 'sell-san-diego-buy-palm-springs',
    crumb: 'Sell in San Diego, buy in Palm Springs',
    eyebrow: 'Guide · San Diego to Palm Springs',
    title: 'Selling in San Diego and buying in Palm Springs: what should you plan first?',
    seo: {
      title: 'Sell in San Diego, Buy in Palm Springs | David Weis',
      description:
        'Plan your San Diego sale and Palm Springs purchase with a clear timeline, cost checklist, condo and HOA questions, and guidance from David Weis.',
    },
    published: '2026-10-16',
    markets: ['san-diego', 'palm-springs'],
    services: ['sell', 'buy'],
    summary: 'Financing, the order of the two transactions and a realistic move window, planned before the dates are set.',
    intro: [
      'Start with your financing, the order of the two transactions, and a realistic move window. Those decisions shape what you can offer in Palm Springs and the terms you can accept in San Diego.',
      'My work across both markets lets me look at the move as a whole. The goal is to protect your position on each property while giving you room to make a good decision.',
    ],
    images: [sanDiego, palmSprings],
    // Optional summary from his instructions (Part 2, section 2). The card
    // text condenses his section 2 sentences; the full explanation stays below.
    choices: {
      heading: 'Three ways to sequence the move',
      items: [
        { title: 'Sell first', body: 'A clearer picture of your proceeds. You may need somewhere to stay if your next home is not ready.' },
        { title: 'Buy first', body: 'An easier physical move. You fund the purchase and may carry both properties for a while.' },
        { title: 'Coordinate both', body: 'A purchase contingent on your sale connects the two, if the seller accepts those terms.' },
      ],
    },
    sections: [
      {
        id: 'set-the-numbers',
        heading: '1. Set the numbers before the dates',
        paragraphs: [
          'Estimate what your San Diego sale could leave you after mortgage payoff, selling expenses, and any negotiated credits. Work from a realistic range.',
          'Then have your lender review two scenarios: buying after your sale closes and buying while you still own your current home. Confirm available cash, qualification, monthly costs, and reserves. Include taxes, insurance, HOA dues, and any land-lease payment in the Palm Springs budget.',
          'If taxes could materially affect your proceeds, get your tax adviser involved before committing to the sequence.',
        ],
      },
      {
        id: 'which-comes-first',
        heading: '2. Choose which transaction comes first',
        paragraphs: [
          'Selling first gives you a clearer picture of available proceeds and can simplify purchase financing. The tradeoff is finding somewhere to stay if your next home is not ready.',
          'Buying first may make the physical move easier. It also means funding the purchase and carrying both properties if your sale takes longer than expected. Any bridge financing or equity-based strategy needs lender review, including cost, eligibility, and repayment requirements.',
          'A purchase contingent on selling your current home can connect the transactions, if the seller accepts those terms. That protection depends on the written agreement and its deadlines.',
          'Choose the route you can support if one closing is delayed. Test the budget against a lower sale price or longer overlap before making an offer.',
        ],
      },
      {
        id: 'prepare-the-sale',
        heading: '3. Prepare the San Diego sale early',
        paragraphs: [
          'While you explore Palm Springs, get the sale ready: pricing, necessary preparation, photography, disclosures, and a launch plan.',
          "Gather relevant repair records, permits, warranties, and HOA information early. Identify questions that could slow a buyer's review.",
          'When offers arrive, look beyond price. Financing, contingencies, closing dates, and possession terms all affect how reliably the sale can support your next purchase. A strong offer should work with the broader move.',
        ],
      },
      {
        id: 'the-palm-springs-property',
        heading: '4. Look closely at the Palm Springs property',
        paragraphs: [
          "For a condo or HOA property, review the governing documents, budget, reserves, assessments, meeting minutes, insurance, and any litigation or major planned work. Confirm maintenance responsibilities and restrictions that matter to your use. [California DRE's guidance](https://www.dre.ca.gov/Newsroom/DRE_Updates/2026_08_21_Common_Interest_Dev.html) explains why this review deserves attention.",
          'If the home is on leased land, have the actual lease and title documents reviewed for the remaining term, payments, increases, transfer requirements, and lender acceptance. Confirm any required approvals with escrow and the appropriate lease administrator. [Agua Caliente Realty and Trust Services](https://www.aguacaliente.org/realty-services) is a resource for applicable tribal and allotted trust-land transactions.',
          "If rental use matters, verify the address, jurisdiction, HOA restrictions, and current permit eligibility. An existing rental listing does not establish your rights as a new owner. Start with the [City of Palm Springs' rental requirements](https://www.palmspringsca.gov/government/departments/special-program-compliance/vacation-rentals-1098) for properties within the city.",
        ],
      },
      {
        id: 'one-calendar',
        heading: '5. Put both transactions on one calendar',
        paragraphs: [
          'Track inspection and document-review periods, financing, appraisal, contingency deadlines, closing, and possession together. Your lender and escrow teams should confirm how sale proceeds will reach the purchase and when funds will be available.',
          'If your sale depends on securing a replacement home, discuss that protection before accepting an offer. If your purchase depends on the sale, address it in the purchase terms.',
          'Treat removing a contingency as a decision with consequences. Understand what remains unresolved and what could happen to your deposit before proceeding.',
        ],
      },
      {
        id: 'the-gap-and-insurance',
        heading: '6. Plan for the gap and arrange insurance early',
        paragraphs: [
          'Price temporary housing, storage, and a second move before you need them. Verify availability for your actual dates and leave room for a delay.',
          'A seller rent-back may help, if agreed in writing and acceptable to the lender and insurers. Clarify possession, payment, deposits, responsibility, and the move-out date.',
          "Start insurance shopping early for the specific property. Confirm coverage, cost, and the effective date before relying on it in your closing plan. Review the [California Department of Insurance's guidance](https://www.insurance.ca.gov/01-consumers/105-type/95-guides/03-res/res-ins-guide.cfm).",
        ],
      },
    ],
    faqs: {
      heading: 'Common questions',
      items: [
        {
          q: 'Should I list before looking in Palm Springs?',
          a: 'Begin researching both markets together. Decide when to list after reviewing your financing, sale preparation, and willingness to use temporary housing.',
        },
        {
          q: 'Can I make an offer before my home sells?',
          a: 'Potentially. Your lender must confirm the financing, and any home-sale contingency needs to be negotiated with the seller.',
        },
        {
          q: 'Can both properties close on the same day?',
          a: 'It may be possible, but funding and recording must align. Have escrow confirm the sequence and keep a backup plan.',
        },
        {
          q: 'Can I rent out my Palm Springs home later?',
          a: 'Verify that for the specific property before buying. Local rules, HOA restrictions, lease terms, and permit availability can affect your options.',
        },
      ],
    },
    related: {
      heading: 'More on this site',
      links: [
        { label: 'Selling with David', href: '/sell' },
        { label: 'Buying with David', href: '/buy' },
        { label: 'San Diego', href: '/san-diego' },
        { label: 'Palm Springs', href: '/palm-springs' },
        { label: 'Selling in one market and buying in another', href: '/faq#sell-in-one-market-buy-in-another' },
        { label: 'Fee land and leased land in Palm Springs', href: '/palm-springs/faq#fee-land-vs-leased-land' },
        { label: 'Palm Springs vacation rental eligibility', href: '/palm-springs/faq#vacation-rental-eligibility' },
      ],
    },
    inquiry: {
      heading: "Let's plan around your move month",
      body: [
        "Tell me your target move month, where you're selling in San Diego, and what you want in Palm Springs. We can start with the sequence and the questions that need answers.",
        'Already working with an agent? Let me know so we can respect that relationship and clarify my role.',
      ],
      primary: 'Plan My Move',
      // His "Explore Palm Springs Homes" link. The home search is not live yet
      // (iHomeFinder pending), so it goes to the Palm Springs page, where David
      // stays the contact. Point it at the search once that exists.
      secondary: { label: 'Explore Palm Springs Homes', href: '/palm-springs' },
      source: 'San Diego to Palm Springs guide',
      location: 'Palm Springs',
      interest: 'Relocating',
    },
    footnote:
      'General planning information. Financing, taxes, insurance, contract terms, and property-use requirements depend on your circumstances and the specific property. Consult the appropriate professionals before committing.',
  },
];

export const guideHref = (g: Guide) => `/guides/${g.slug}`;

export const guidesFor = (key: MarketSlug | 'buy' | 'sell') =>
  guides.filter((g) => (g.markets as readonly string[]).includes(key) || (g.services as readonly string[]).includes(key));

/** Index page copy. */
export const guidesIndex = {
  seo: {
    title: 'Real Estate Guides | David Weis',
    description:
      'Planning guides from David Weis for buying and selling across San Diego, Palm Springs and Big Bear, written from experience in all three markets.',
  },
  eyebrow: 'Guides',
  title: 'Planning guides',
  intro: 'Practical guides for moves that involve more than one decision, written from my work across San Diego, Palm Springs and Big Bear.',
  teaserHeading: 'Planning guides',
  readLabel: 'Read the guide',
} as const;

export const formatGuideDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

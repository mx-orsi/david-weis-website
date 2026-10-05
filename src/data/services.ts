/**
 * "Buy with David" (/buy) and "Sell with David" (/sell), from David's
 * 2026-09-28 implementation brief. Copy is his, verbatim. Rendered by
 * src/components/ServicePage.astro.
 *
 * Rules from the brief that the copy must keep honoring:
 *  - David advises, coordinates, markets and represents. He is never described
 *    as providing moving services, performing repairs or acting as a contractor.
 *  - Homes.com Platinum is not an award and gets no page of its own, no
 *    platform-wide performance claims and no guarantees. Matterport is the
 *    3D-tour technology, not a separate service.
 *  - Nothing may imply that a renovation, added unit, rental use or projected
 *    return was guaranteed or approved.
 *  - The buyer-representation FAQ wording stays as written (California
 *    buyer-broker agreement rules).
 */
import { agent } from './site';
import type { Cta, Photo } from './types';

export interface ServiceSection {
  heading: string;
  paragraphs: readonly string[];
  /** Highlighted subsection inside the section (Homes.com Platinum). */
  highlight?: { eyebrow: string; title: string; paragraphs: readonly string[]; note: string };
}

export interface ServiceCard {
  /** Slug in sales.ts; the card links to that story. */
  sale: string;
  title: string;
  kicker: string;
  /** One string per paragraph. */
  body: readonly string[];
}

export interface ServicePageContent {
  slug: 'buy' | 'sell';
  seo: { title: string; description: string };
  /** Page name, shown as the eyebrow above the headline. */
  name: string;
  title: string;
  intro: readonly string[];
  primary: Cta;
  secondary: Cta;
  supporting: string;
  sections: readonly ServiceSection[];
  practice: { heading: string; cards: readonly ServiceCard[]; cardCta: string };
  faqs: readonly { q: string; a: string }[];
  closing: { title: string; body: string; cta: Cta };
  /** Lead image under the opener, and a portrait of David farther down the page. */
  photos: { lead: Photo; portrait: Photo };
}

const callOrText: Cta = { label: 'Call or Text David', href: agent.phoneHref };

export const sell: ServicePageContent = {
  slug: 'sell',
  seo: {
    title: 'Sell with David Weis | San Diego, Palm Springs & Big Bear',
    description:
      'Selling in San Diego, Palm Springs or Big Bear with Compass Broker Associate David Weis: a practical preparation plan, professional photography and video, purposeful marketing and an advocate through closing.',
  },
  name: 'Sell with David',
  title: 'Make the property stand out. Make the decisions count.',
  intro: [
    'Selling a property is rarely just about putting it on the market. It is deciding what to improve, what to leave alone, how to present it, and which offer actually moves you toward your next chapter.',
    'I bring the perspective of someone who has owned, renovated, operated, and marketed property, alongside the experience of representing sellers through both straightforward sales and the ones that require a little more persistence.',
    'My goal is to make your property look exceptional, keep unnecessary expenses out of the process, and position you for the strongest possible price and terms.',
  ],
  primary: { label: 'Discuss Your Property', href: '/contact?interest=Selling' },
  secondary: callOrText,
  supporting:
    'Start with a complimentary, no-pressure consultation. You don’t have to be ready to list to have a useful conversation.',
  sections: [
    {
      heading: 'A practical plan before anything goes on the market',
      paragraphs: [
        'Not every property needs a renovation to sell well. Sometimes the right answer is a few targeted improvements, thoughtful styling, and excellent photography. Sometimes a more substantial change deserves consideration. And sometimes spending more simply does not make sense.',
        'I walk through the property with you, discuss its condition and presentation, and help prioritize what is worth addressing. We can also evaluate whether staging would meaningfully improve how buyers experience the space.',
        'The point is not to spend for the sake of spending. It is to make informed choices about where your time and money are most useful.',
      ],
    },
    {
      heading: 'Hands-on coordination. The right people doing the work.',
      paragraphs: [
        'Preparing a property can involve several moving parts. I help coordinate the appropriate vendors, scheduling, and preparation so the process feels organized rather than overwhelming.',
        'Cleaning, repairs, staging, moving, and other specialist work remain with the appropriate service providers. We discuss the scope and any seller-paid costs before work is authorized.',
        'You have someone staying involved and paying attention, without being left to figure out every step on your own.',
      ],
    },
    {
      heading: 'Presentation that gives buyers a reason to look closer',
      paragraphs: [
        'I cover professional photography and videography because the first impression of your property deserves more than a few quick photos.',
        'From there, I build the marketing around what makes the property compelling: its architecture, setting, outdoor space, improvements, or the way the rooms work together. The writing and visuals should help buyers understand the home, not bury it beneath a collection of familiar adjectives.',
        'My experience building and marketing The Cole Hotel, and later bringing Querencia Palms to market, taught me how much thoughtful presentation can contribute to the way a property is understood.',
      ],
      highlight: {
        eyebrow: 'An additional investment in your listing',
        title: 'Homes.com Platinum',
        paragraphs: [
          'My Homes.com Platinum membership adds another layer to my listing marketing, including access to Matterport 3D tours for eligible properties.',
          'These interactive tours give buyers an opportunity to explore the layout, revisit rooms, and spend more time understanding the property before or after an in-person visit.',
        ],
        note: 'Tour availability and eligibility are subject to the Homes.com program.',
      },
    },
    {
      heading: 'Pricing with a reason behind it',
      paragraphs: [
        'A good pricing conversation should leave you understanding the recommendation, not simply looking at a number.',
        'I consider comparable sales, competing properties, condition, presentation, and your priorities. We discuss how the asking price supports the launch strategy and what buyer response tells us once the property is on the market.',
        'The goal is to make decisions deliberately, rather than react to every showing or quiet weekend.',
      ],
    },
    {
      heading: 'An offer is the beginning of another negotiation',
      paragraphs: [
        "The highest price is important, but it is not the only consideration. Financing, contingencies, timing, requested concessions, and the buyer's ability to perform all deserve attention.",
        'I help you compare the full picture, negotiate with your priorities in mind, and stay involved through inspections, appraisal, and closing.',
        'When something changes, you should understand what happened, what your options are, and what I recommend doing next.',
      ],
    },
  ],
  practice: {
    heading: 'What that has looked like in practice',
    cardCta: 'Read the Sale Story',
    cards: [
      {
        sale: '3712-third-ave-unit-3',
        title: '3712 Third Avenue',
        kicker: 'Comparing the opportunity, not just the price.',
        body: ['Co-listed with Ken Pecus, this property received multiple offers within five days and closed in a two-week escrow. Clear offer comparisons helped the seller evaluate the choices in front of them.'],
      },
      {
        sale: '10782-dabney-dr-unit-9',
        title: '10782 Dabney Drive',
        kicker: 'A setback did not become the end of the story.',
        body: ['When the first buyers did not perform, we returned to market and secured another buyer within three days, getting the sale moving again.'],
      },
      {
        sale: '5300-e-waverly-dr-unit-c13',
        title: '5300 E. Waverly Drive',
        // Revised by David 2026-09-28: the full result is $7,650 ($5,000 for the
        // escrow extension plus $2,650 from the commission renegotiation).
        kicker: "Protecting the seller's bottom line.",
        body: [
          'A challenging escrow required more than patience. I negotiated $5,000 for the seller in exchange for extending escrow, then secured another $2,650 through a commission renegotiation.',
          'That meant $7,650 in additional value to the seller while keeping the transaction moving toward closing. Getting the sale completed mattered. So did protecting what the seller would walk away with.',
        ],
      },
    ],
  },
  faqs: [
    {
      q: 'Do I need to renovate or stage before selling?',
      a: 'Not necessarily. We will evaluate the property, discuss its likely buyers, and decide which improvements or staging options are worth considering. I do not recommend spending money simply to make the preparation process look more elaborate.',
    },
    {
      q: 'What marketing costs do you cover?',
      a: 'I cover professional photography and videography. Matterport 3D tours are available through my Homes.com Platinum membership for eligible properties. Repairs, staging, and other preparation expenses are discussed separately so you understand and approve any seller-paid costs.',
    },
  ],
  closing: {
    title: "Let's start with your property, not a sales pitch.",
    body: 'Tell me what you own, what you are considering, and what you would like the next chapter to look like. We will talk through the options from there.',
    cta: { label: 'Discuss Your Property', href: '/contact?interest=Selling' },
  },
  photos: {
    lead: {
      suggestion: "A strong current property image from David's listing photography",
      src: '/images/querencia-interiors/querencia-palms-open-concept-living-room-david-weis.jpg',
      alt: 'A renovated Querencia Palms living room in Palm Springs, a blue leather sofa and walnut credenza in front of a bold mural',
      width: 2400,
      height: 1800,
      hasSmall: true,
      position: 'center 30%',
    },
    portrait: {
      suggestion: 'Current professional portrait of David (no eXp branding)',
      src: '/images/david-weis-compass-real-estate-agent-san-diego-palm-springs-big-bear.jpg',
      alt: 'David Weis, Compass Broker Associate and REALTOR®',
      width: 1000,
      height: 1250,
    },
  },
};

export const buy: ServicePageContent = {
  slug: 'buy',
  seo: {
    title: 'Buy with David Weis | San Diego, Palm Springs & Big Bear',
    description:
      'Buying in San Diego, Palm Springs or Big Bear with Compass Broker Associate David Weis: a focused search, an honest look beyond the listing and thoughtful representation through closing.',
  },
  name: 'Buy with David',
  title: 'The right home. A clear plan for getting there.',
  intro: [
    'Buying a property can be exciting, personal, and occasionally overwhelming. You may know exactly what you are looking for, or you may need someone to help you work out what matters most.',
    'I help buyers across San Diego, Palm Springs, and Big Bear look beyond the photographs, understand their options, and make decisions with both the property and the bigger picture in mind.',
    'My job is not to talk you into a home. It is to help you decide whether it makes sense for you, then represent you thoughtfully through the purchase.',
  ],
  primary: { label: 'Plan Your Purchase', href: '/contact?interest=Buying' },
  secondary: callOrText,
  supporting: 'Your initial consultation is complimentary. We can start wherever you are in the process.',
  sections: [
    {
      heading: 'Start with the life you want the property to support',
      paragraphs: [
        'A primary residence, a weekend escape, and an investment property can require very different decisions. Sometimes one home is expected to do all three.',
        'We start with your priorities, budget, timing, and the compromises you are comfortable making. I also want to understand what you are unsure about.',
        'That conversation helps us focus the search and gives us something more useful than a checklist when it is time to compare properties.',
      ],
    },
    {
      heading: 'Look beyond the listing',
      paragraphs: [
        'Ownership has taught me to ask questions that do not always appear in the marketing.',
        'How much work are you prepared to take on? What ongoing costs need closer attention? Does the layout actually suit the way you live? Are you relying on rental income or a future improvement that needs further investigation?',
        'I help identify the questions, review the available information with you, and bring in the appropriate professionals when a decision requires specialized advice. An attractive property deserves a thoughtful evaluation, not an automatic yes.',
      ],
    },
    {
      heading: 'A search without pressure',
      // Revised by David 2026-10-04; his contractions are kept as written.
      paragraphs: [
        'Sometimes buyers know immediately when a property feels right. Other times, it takes seeing a few homes, comparing the tradeoffs, and talking things through before the answer becomes clear.',
        'I listen, refine the search, and give you my perspective along the way. If I see something I think is a great fit, I’ll tell you why. If I see something that concerns me, I’ll tell you that too.',
        'I would rather help you walk away from the wrong property than talk you into one just to get a deal done.',
      ],
    },
    {
      heading: 'Negotiate the opportunity in front of us',
      paragraphs: [
        'Every purchase has its own circumstances. A competitive listing may require a decisive approach. Another property may call for patience, further investigation, or knowing when to step back.',
        'I help you evaluate price and terms, understand the tradeoffs, and build an offer around your priorities.',
        'If inspections or new information change the picture, we revisit the strategy. The goal is not simply to get an offer accepted. It is to remain thoughtful about what you are agreeing to buy.',
      ],
    },
    {
      heading: 'Stay clear on the details through closing',
      paragraphs: [
        'Once you are in escrow, the questions become more specific.',
        'I help coordinate the process, track important dates, and work through disclosures, inspection findings, and other transaction information with you. For a condominium, that includes paying attention to the available HOA information and issues that may affect ownership.',
        'Where the questions involve lending, insurance, construction, legal matters, or taxes, I help you identify the right professional to consult.',
        'You should know what still needs to be resolved before making the next decision.',
      ],
    },
  ],
  practice: {
    heading: 'Experience applied to real purchases',
    cardCta: 'Read the Purchase Story',
    cards: [
      {
        sale: '7068-belden-st',
        title: '7068 Belden Street',
        kicker: 'Knowing when to step back.',
        body: ['We continued exploring other options while keeping communication open with the listing agent. Weeks later, we were able to return to negotiations and reach an agreement.'],
      },
      {
        sale: '4420-voltaire-st',
        title: '4420 Voltaire Street',
        // Revised by David 2026-09-28: no "representing my husband" in the preview;
        // alternative uses are possibilities explored, never approved options.
        kicker: 'Seeing the potential. Negotiating the reality.',
        body: [
          'An investment property needs to make sense beyond the asking price. I helped evaluate renovation potential, projected resale value, and potential alternative uses.',
          'When inspections uncovered additional repair costs, I negotiated a $40,000 price reduction, bringing those findings directly into the purchase negotiation. The opportunity was still there, but the price needed to reflect the work ahead.',
        ],
      },
      {
        sale: '1111-e-palm-canyon-dr-344',
        title: 'Ocotillo Lodge',
        kicker: 'Finding a property that worked personally and financially.',
        body: ['This search involved a meaningful life transition as well as investment considerations. We took the time to find a midcentury retreat with the potential to support both.'],
      },
    ],
  },
  faqs: [
    {
      q: 'Can we talk before I am ready to buy?',
      a: 'Absolutely. A useful first conversation can help you understand your priorities and what to prepare before beginning a serious search.',
    },
    {
      q: 'How does working together begin?',
      a: 'We start with a complimentary consultation. Before touring properties together as your buyer representative, we review the representation agreement, the services involved, negotiable compensation, and the agreed terms so you understand how we will work together.',
    },
  ],
  closing: {
    title: 'You don’t need every answer before we talk.',
    body: 'Tell me what you are considering, what you are excited about, and what is giving you pause. That is a good place to begin.',
    cta: { label: 'Plan Your Purchase', href: '/contact?interest=Buying' },
  },
  photos: {
    lead: {
      suggestion: 'Relevant property photography (no friends or event guests labeled as clients)',
      src: '/images/sierra-chalet/sierra-chalet-big-bear-exterior-after-01-david-weis.jpg',
      alt: 'A renovated mountain home in Big Bear, gray and blue siding among pine and oak trees',
      width: 2048,
      height: 1365,
      hasSmall: true,
    },
    portrait: {
      suggestion: 'Current professional portrait of David',
      src: '/images/about/david-weis-compass-broker-associate-querencia-palms-entry-portrait.jpg',
      alt: 'David Weis in a black shirt walking through the entry at Querencia Palms in Palm Springs',
      width: 960,
      height: 1200,
      hasSmall: true,
    },
  },
};

export const services = { buy, sell } as const;

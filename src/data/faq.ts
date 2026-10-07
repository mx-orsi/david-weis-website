/**
 * FAQ system, from David's 2026-10-06 "FAQ Pages" brief. One record per
 * question; the hub (/faq), the three market guides (/<market>/faq), the hub
 * directory, the market-page previews and the Buy/Sell links are all
 * generated from this file, so an answer is edited in exactly one place.
 *
 * Copy is David's, verbatim (first person, contractions kept). Rules from the
 * brief: no promises (availability, stress-free, guaranteed approvals, returns
 * or prices); no current rates, fees or statistics; regulatory answers carry a
 * small "Official guidance" link to the primary source; FAQ or QAPage schema
 * is NOT added (Google dropped FAQ rich results in May 2026); each page has
 * its own title, description and canonical.
 *
 * `id` is the stable anchor (edit wording freely, never the id). `sources`
 * hold the official page an answer relies on; `reviewed` is the internal
 * per-answer review date and is only displayed once `showReviewed` is true.
 */
import type { MarketSlug } from './site';

export type FaqPageSlug = 'faq' | MarketSlug;

export interface FaqSource {
  /** Shown as the link text ("Official guidance" or the source's name). */
  label: string;
  url: string;
}

export interface FaqItem {
  /** Stable anchor id, e.g. "fee-land-vs-leased-land". */
  id: string;
  page: FaqPageSlug;
  category: string;
  question: string;
  /** One string per paragraph; may contain [label](href) links. */
  answer: readonly string[];
  /** One-line summary for the directory, previews and search results. Falls back to the first sentence. */
  excerpt?: string;
  sources?: readonly FaqSource[];
  /** Regulatory answer: flag for periodic review. */
  regulatory?: boolean;
  /** Internal review date (YYYY-MM-DD). */
  reviewed: string;
}

export interface FaqPageMeta {
  slug: FaqPageSlug;
  path: string;
  eyebrow: string;
  title: string;
  intro: readonly string[];
  seo: { title: string; description: string };
  /** Market pages: closing block with the contact and properties links. */
  closing?: { heading: string; text: string; primary: string; secondary: string };
}

/** Set true once David has reviewed the answers for publication; shows "Last reviewed" on the pages. */
export const showReviewed = false;

/** Visible author line on every FAQ page. */
export const faqAuthorLine = 'David Weis · Broker Associate · Compass · CA DRE #02196688';

/** Short note near the bottom of each guide. */
export const faqNote =
  'These answers provide general information and explain my approach. Requirements and property conditions vary. We’ll verify the details relevant to your property and involve the appropriate lending, insurance, legal, tax, or construction professionals when needed.';

export const faqPages: readonly FaqPageMeta[] = [
  {
    slug: 'faq',
    path: '/faq',
    eyebrow: 'Buying · Selling · Working together',
    title: 'Real estate questions, answered.',
    intro: [
      'Buying, selling, or deciding what to do with a property usually starts with questions. Some are about the process. Others are about the home, the neighborhood, or whether you’re ready to make a move.',
      'Here are answers to questions about how I work and how I help clients across San Diego, Palm Springs, and Big Bear. For questions about your situation, we can start with a complimentary conversation.',
    ],
    seo: {
      title: 'Real Estate FAQs | David Weis',
      description:
        'Answers to questions about working with David Weis, buying and selling property, marketing, representation, and ownership in San Diego, Palm Springs, and Big Bear.',
    },
  },
  {
    slug: 'san-diego',
    path: '/san-diego/faq',
    eyebrow: 'Local knowledge · San Diego',
    title: 'San Diego real estate FAQs',
    intro: [
      'A coastal property, an older character home, and a condominium can present very different ownership questions. These answers cover details worth investigating before making a San Diego real estate decision.',
    ],
    seo: {
      title: 'San Diego Real Estate FAQs | David Weis',
      description:
        'San Diego real estate FAQs covering neighborhoods, condos, Mello-Roos, property taxes, vacation rentals, ADUs, older homes, and selling with David Weis.',
    },
    closing: {
      heading: 'Have a question about a specific San Diego property?',
      text: 'An address and a little context are often the best place to start.',
      primary: 'Ask David About San Diego',
      secondary: 'Explore San Diego Properties',
    },
  },
  {
    slug: 'palm-springs',
    path: '/palm-springs/faq',
    eyebrow: 'Local knowledge · Palm Springs',
    title: 'Palm Springs real estate FAQs',
    intro: [
      'Palm Springs offers more than one kind of ownership experience. Land tenure, architecture, rental rules, outdoor living, and ongoing maintenance all deserve attention. These are some of the questions I help buyers and sellers work through.',
    ],
    seo: {
      title: 'Palm Springs Real Estate FAQs | David Weis',
      description:
        'Palm Springs real estate FAQs covering fee land, land leases, financing, vacation rentals, condos, midcentury homes, casitas, and selling your property.',
    },
    closing: {
      heading: 'Let’s look at the property behind the question.',
      text: 'A land lease, rental plan, or renovation idea deserves more than a general answer. Send me the address and what you’re considering.',
      primary: 'Ask David About Palm Springs',
      secondary: 'Explore Palm Springs Properties',
    },
  },
  {
    slug: 'big-bear',
    path: '/big-bear/faq',
    eyebrow: 'Local knowledge · Big Bear',
    title: 'Big Bear real estate FAQs',
    intro: [
      'A mountain home can be a retreat, a personal project, an investment, or a combination of all three. I want clients to understand the practical side of ownership as clearly as the view from the deck.',
    ],
    seo: {
      title: 'Big Bear Real Estate FAQs | David Weis',
      description:
        'Big Bear real estate FAQs covering cabin ownership, rental permits, city and county rules, insurance, winter access, lakefront property, and mountain-home maintenance.',
    },
    closing: {
      heading: 'A cabin should fit your plans, not just your weekend.',
      text: 'Tell me whether you’re considering a personal retreat, a move, or an investment, and we can work through the right questions.',
      primary: 'Ask David About Big Bear',
      secondary: 'Explore Big Bear Properties',
    },
  },
];

/** Hub: the market navigation cards. */
export const faqMarketCards: readonly { slug: MarketSlug; name: string; text: string; button: string }[] = [
  { slug: 'san-diego', name: 'San Diego', text: 'Neighborhoods, coastal ownership, condos, property taxes, vacation rentals, and renovation potential.', button: 'San Diego FAQs' },
  { slug: 'palm-springs', name: 'Palm Springs', text: 'Fee land, land leases, vacation rentals, midcentury homes, casitas, and desert ownership.', button: 'Palm Springs FAQs' },
  { slug: 'big-bear', name: 'Big Bear', text: 'Mountain homes, insurance, winter access, vacation rentals, lakefront property, and cabin ownership.', button: 'Big Bear FAQs' },
];

/** Hub: directory and closing block labels. */
export const faqHubUi = {
  directoryTitle: 'Explore questions by market',
  searchLabel: 'Search questions',
  searchPlaceholder: 'Try “land lease” or “vacation rental”',
  noResults: 'No questions match that. Try another word, or ask David directly.',
  expandAll: 'Expand all',
  collapseAll: 'Collapse all',
  closing: {
    heading: 'Still have a question?',
    text: 'You don’t need every answer before we talk. Tell me what you’re considering and what you’d like to understand better.',
    button: 'Ask David',
    callLabel: 'Call or text',
    emailLabel: 'Email',
  },
  allLabel: { 'san-diego': 'All San Diego FAQs', 'palm-springs': 'All Palm Springs FAQs', 'big-bear': 'All Big Bear FAQs' } as Record<MarketSlug, string>,
} as const;

/** Market pages: the three-question preview before the closing invitation. */
export const faqMarketPreviews: Record<MarketSlug, { heading: string; ids: readonly string[] }> = {
  'san-diego': { heading: 'Questions worth asking before you buy or sell.', ids: ['condo-review', 'vacation-rental-eligibility', 'adu-or-garage-conversion'] },
  'palm-springs': { heading: 'Understand the ownership, not just the address.', ids: ['fee-land-vs-leased-land', 'leasehold-financing', 'vacation-rental-eligibility'] },
  'big-bear': { heading: 'The practical side of mountain ownership.', ids: ['big-bear-lake-vs-big-bear-city', 'homeowners-insurance', 'winter-access'] },
};

/** Buy / Sell pages: related answers (page + id). */
export const faqServiceLinks: Record<'buy' | 'sell', { heading: string; items: readonly { page: FaqPageSlug; id: string }[] }> = {
  buy: {
    heading: 'Questions buyers ask',
    items: [
      { page: 'faq', id: 'buyer-representation-agreement' },
      { page: 'faq', id: 'how-commissions-are-determined' },
      { page: 'faq', id: 'buying-or-selling-from-out-of-town' },
      { page: 'san-diego', id: 'condo-review' },
      { page: 'palm-springs', id: 'fee-land-vs-leased-land' },
      { page: 'big-bear', id: 'homeowners-insurance' },
    ],
  },
  sell: {
    heading: 'Questions sellers ask',
    items: [
      { page: 'faq', id: 'marketing-and-what-you-pay-for' },
      { page: 'faq', id: 'renovate-or-stage-before-selling' },
      { page: 'faq', id: 'how-you-determine-value' },
      { page: 'faq', id: 'estimated-seller-proceeds' },
      { page: 'faq', id: 'sell-renovate-rent-or-keep' },
    ],
  },
};

const DRE = { label: 'California Department of Real Estate', url: 'https://www.dre.ca.gov/Consumers/ConsumerAlert_20241114_Changes_to_Real_Estate_Representation.html' };
/** DRE booklet "Living in a California Common Interest Development" (RE 39), for the HOA answers. */
const DRE_CID = { label: 'California Department of Real Estate', url: 'https://dre.ca.gov/files/pdf/re39.pdf' };
const R = '2026-10-06';

export const faqItems: readonly FaqItem[] = [
  // ── Hub: Working with David ─────────────────────────────────────────────
  {
    id: 'working-across-three-markets',
    page: 'faq',
    category: 'Working with David',
    question: 'How do you serve three markets without spreading yourself too thin?',
    answer: [
      'I’m regularly in San Diego, Palm Springs, and Big Bear through my real estate work, the four vacation rentals I manage, and my community involvement. These are places where I spend my life, not markets I visit only when a listing comes along.',
      'The important part is how I manage the work. I plan around my clients’ appointments and transaction deadlines, and I’m selective about what I take on. When additional local support is needed, I have trusted agents I can call on while remaining your primary point of contact.',
      'I know when to say no to another project. My priority is providing a five-star experience through preparation, communication, and follow-through, while taking as much unnecessary stress off your plate as possible.',
    ],
    reviewed: R,
  },
  {
    id: 'work-directly-with-you',
    page: 'faq',
    category: 'Working with David',
    question: 'Will I work directly with you?',
    answer: [
      'Yes. You work directly with me on the strategy, decisions, and negotiations that shape your transaction.',
      'Trusted colleagues and service providers may assist with specific tasks or local coverage when appropriate. You’ll know who is helping and why. Having support should make the process smoother, not leave you wondering who is responsible.',
    ],
    reviewed: R,
  },
  {
    id: 'complimentary-consultation',
    page: 'faq',
    category: 'Working with David',
    question: 'Is the initial consultation complimentary?',
    answer: [
      'Absolutely. You don’t need to be ready to list or have a home picked out.',
      'We can talk about your goals, timing, concerns, and what you’re considering. Sometimes that leads to a plan for moving forward. Sometimes it helps you decide what to work on first. There’s no pressure to turn the conversation into an immediate transaction.',
    ],
    reviewed: R,
  },
  {
    id: 'first-time-buyers-smaller-properties',
    page: 'faq',
    category: 'Working with David',
    question: 'Do you work with first-time buyers and smaller properties?',
    answer: [
      'Yes. I work with first-time buyers, condo buyers, homeowners, second-home purchasers, and investors.',
      'The size of the purchase doesn’t determine how important it is to the person making it. My experience with renovations, hospitality, and investment properties gives me additional perspectives, but the starting point is always your situation and what you need.',
    ],
    reviewed: R,
  },
  {
    id: 'buying-or-selling-from-out-of-town',
    page: 'faq',
    category: 'Working with David',
    question: 'Can you help when I’m buying or selling from out of town?',
    answer: [
      'Yes. We can organize much of the planning and communication remotely, with scheduled property visits, video walkthroughs where appropriate, and coordination with local professionals.',
      'For buyers, I explain what a video shows and what still deserves an in-person visit or professional inspection. For sellers, I help coordinate preparation and access so you aren’t managing every appointment from another city.',
    ],
    reviewed: R,
  },
  // ── Hub: Representation and the process ─────────────────────────────────
  {
    id: 'buyer-representation-agreement',
    page: 'faq',
    category: 'Representation and the process',
    question: 'Do I need to sign an agreement before touring homes with you?',
    answer: [
      'Before we tour properties together with me acting as your buyer’s representative, we review and sign the appropriate buyer-representation agreement.',
      'It explains the services, scope, duration, and agreed compensation. I’ll walk you through it so you understand the arrangement. That is different from visiting an open house where the hosting agent is acting solely for the seller.',
    ],
    sources: [DRE],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'how-commissions-are-determined',
    page: 'faq',
    category: 'Representation and the process',
    question: 'How are real estate commissions determined?',
    answer: [
      'Commissions are negotiable; there is no legally fixed standard rate.',
      'We discuss services and compensation before entering into a representation agreement. For buyers, we can also discuss requesting a seller contribution toward the agreed brokerage compensation, but that contribution isn’t automatic.',
      'You should understand the arrangement and potential costs in writing, rather than discover them halfway through the transaction.',
    ],
    sources: [DRE],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'sell-in-one-market-buy-in-another',
    page: 'faq',
    category: 'Representation and the process',
    question: 'Can you help me sell in one market and buy in another?',
    answer: [
      'Yes. Working across San Diego, Palm Springs, and Big Bear can be particularly useful when your move involves two of those markets.',
      'We plan the sale and purchase together, including financing, available funds, timing, possession, and possible temporary housing. The goal is to understand how the transactions affect one another before committing to deadlines that may be difficult to meet.',
    ],
    reviewed: R,
  },
  // ── Hub: Selling and property decisions ─────────────────────────────────
  {
    id: 'marketing-and-what-you-pay-for',
    page: 'faq',
    category: 'Selling and property decisions',
    question: 'What marketing do you provide, and what do you pay for?',
    answer: [
      'I cover professional photography and videography. My Homes.com Platinum membership also provides access to Matterport 3D tours for eligible properties.',
      'The wider plan is tailored to the home and may include property-specific storytelling, online exposure, agent outreach, printed materials, and open houses or events where appropriate.',
      'Repairs, staging, and other seller-paid preparation costs are discussed separately before anything is authorized. My goal is exceptional presentation without unnecessary spending.',
    ],
    reviewed: R,
  },
  {
    id: 'renovate-or-stage-before-selling',
    page: 'faq',
    category: 'Selling and property decisions',
    question: 'Do I need to renovate or stage before selling?',
    answer: [
      'Not necessarily. We start by identifying what would meaningfully improve the property’s presentation and what is unlikely to justify the expense.',
      'Sometimes cleaning, editing the furnishings, and targeted repairs are enough. Other properties benefit from staging or more substantial preparation.',
      'I provide guidance and help coordinate appropriate professionals. I don’t expect every seller to undertake a renovation, and I don’t want preparing to sell to become another full-time job for you.',
    ],
    reviewed: R,
  },
  {
    id: 'how-you-determine-value',
    page: 'faq',
    category: 'Selling and property decisions',
    question: 'How do you determine what my property is worth?',
    answer: [
      'I consider recent comparable sales, competing listings, condition, location, improvements, and how your property compares with the alternatives buyers are considering.',
      'I want you to understand the reasoning behind my recommendation, including the strengths we can emphasize and the factors buyers may question. Pricing should be a conversation supported by evidence, not simply a number handed to you.',
    ],
    reviewed: R,
  },
  {
    id: 'estimated-seller-proceeds',
    page: 'faq',
    category: 'Selling and property decisions',
    question: 'Can you help estimate what I’ll receive after selling?',
    answer: [
      'Yes. We can prepare an estimated seller net sheet using an anticipated sale price, loan payoff information, transaction expenses, and proposed credits or concessions.',
      'It’s a planning tool, not a guarantee of final proceeds. Escrow’s closing statement establishes the final transaction figures. Questions about income or capital-gains taxes should be reviewed separately with your tax adviser.',
    ],
    reviewed: R,
  },
  {
    id: 'sell-renovate-rent-or-keep',
    page: 'faq',
    category: 'Selling and property decisions',
    question: 'What if I’m not sure whether to sell, renovate, rent, or keep the property?',
    answer: [
      'That is a worthwhile conversation to have before committing to a sale.',
      'We can compare your goals, preparation costs, carrying expenses, rental feasibility, and the practical demands of continuing to own the property.',
      'I’ve faced those decisions with properties in my own life. That doesn’t make every answer obvious, but it means I understand why “just sell it” or “just rent it” is rarely enough analysis.',
    ],
    reviewed: R,
  },

  // ── San Diego ───────────────────────────────────────────────────────────
  {
    id: 'choosing-a-neighborhood',
    page: 'san-diego',
    category: 'Local knowledge',
    question: 'How do I choose the right San Diego neighborhood?',
    answer: [
      'Start with how you want to live: your commute, preferred home type, parking needs, outdoor space, access to activities, and budget.',
      'I help you compare those priorities against actual properties rather than assume one neighborhood is right for everyone. Visiting at different times also helps you evaluate the surroundings for yourself.',
      'My firsthand experience includes [Kensington](/experience/kensington-canyon), [Ocean Beach](/experience/vista-voltaire), and [Mission Beach](/experience/belmont-beach-house), alongside client representation elsewhere in the region.',
    ],
    reviewed: R,
  },
  {
    id: 'mello-roos',
    page: 'san-diego',
    category: 'Local knowledge',
    question: 'What is Mello-Roos, and how do I know whether a home has it?',
    answer: [
      'Mello-Roos is a special tax associated with a Community Facilities District. It is separate from HOA dues and can affect your total ownership costs.',
      'We review the property’s tax information and title documents, then obtain district-specific details about the amount, potential increases, and duration. The county provides a parcel-based process for identifying the applicable district and finding its information.',
    ],
    sources: [{ label: 'San Diego County Assessor/Recorder/County Clerk', url: 'https://www.sdarcc.gov/content/arcc/home/divisions/assessor/mello-roos.html' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'property-taxes-after-purchase',
    page: 'san-diego',
    category: 'Local knowledge',
    question: 'Will my property taxes be the same as the seller’s?',
    answer: [
      'Not necessarily. A change in ownership generally triggers reassessment unless an exclusion applies. A supplemental assessment can also result in bills in addition to the regular property-tax bill.',
      'Don’t build your budget using only the seller’s current taxes. We should obtain an estimate based on your anticipated purchase and applicable assessments, with the county assessor or tax adviser addressing any exclusions.',
    ],
    sources: [{ label: 'California State Board of Equalization', url: 'https://www.boe.ca.gov/proptaxes/supplemental-assessment/' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'condo-review',
    page: 'san-diego',
    category: 'Local knowledge',
    question: 'What should I review before buying a San Diego condo?',
    answer: [
      'Look beyond the monthly HOA payment. I help buyers review the governing documents, budget, reserves, maintenance responsibilities, insurance information, meeting minutes, and disclosed or proposed special assessments.',
      'We also investigate major repairs and restrictions that could affect your plans. The association’s obligations deserve attention alongside the unit’s finishes and layout.',
    ],
    sources: [DRE_CID],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'vacation-rental-eligibility',
    page: 'san-diego',
    category: 'Local knowledge',
    question: 'Can I use a San Diego home as an Airbnb or vacation rental?',
    answer: [
      'It depends on the property, jurisdiction, and proposed use.',
      'Within the City of San Diego, short-term residential occupancy requires the appropriate license. The city uses different license categories, including a separate category for whole-home rentals in Mission Beach. Availability and requirements need to be checked before relying on rental income.',
      'We also review private restrictions. A San Diego County address does not automatically mean the City of San Diego’s rules apply.',
    ],
    sources: [{ label: 'City of San Diego', url: 'https://www.sandiego.gov/treasurer/short-term-residential-occupancy' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'vacation-rental-license-transfer',
    page: 'san-diego',
    category: 'Local knowledge',
    question: 'Does the seller’s San Diego vacation-rental license transfer to me?',
    answer: [
      'No. The City of San Diego states that its short-term residential occupancy licenses are not transferable between ownership or locations.',
      'A property’s rental history does not establish your ability to continue operating it. Before making a purchase dependent on vacation-rental income, confirm your licensing path, property eligibility, and any restrictions affecting the intended use.',
    ],
    sources: [{ label: 'City of San Diego', url: 'https://www.sandiego.gov/treasurer/short-term-residential-occupancy' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'adu-or-garage-conversion',
    page: 'san-diego',
    category: 'Local knowledge',
    question: 'Can I add an ADU or convert a garage into living space?',
    answer: [
      'Possibly, but the answer requires more than measuring the backyard or garage.',
      'We need to review the jurisdiction, zoning, existing improvements, utilities, and development standards applicable to your proposal. Coastal requirements can introduce additional considerations.',
      'The City of San Diego requires building permits for ADUs and junior ADUs. I can help identify the questions and appropriate professionals, but an unverified idea should not be treated as an approved project.',
    ],
    sources: [{ label: 'City of San Diego', url: 'https://www.sandiego.gov/development-services/news-programs/programs/companion-junior-units' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'older-homes',
    page: 'san-diego',
    category: 'Local knowledge',
    question: 'What do you look for in an older San Diego home?',
    answer: [
      'I want to understand what has been updated, what remains original, and what is documented.',
      'That means asking about roofing, plumbing, electrical systems, drainage, foundation concerns, and previous alterations, then following up through appropriate inspections and records.',
      'Renovating [Kensington Canyon](/experience/kensington-canyon) taught me to appreciate materials worth preserving. It also reinforced that a beautifully finished room doesn’t answer every question about the work behind it.',
    ],
    reviewed: R,
  },
  {
    id: 'buying-near-the-beach',
    page: 'san-diego',
    category: 'Local knowledge',
    question: 'What deserves extra attention when buying near the beach?',
    answer: [
      'I encourage buyers to look closely at practical use: parking, outdoor privacy, street activity, storage, maintenance, and how the property works during busier periods.',
      'We also investigate any claimed rental potential or planned alterations. A coastal home should work for your daily life, not only for the weekend you first toured it.',
    ],
    reviewed: R,
  },
  {
    id: 'preparing-to-sell',
    page: 'san-diego',
    category: 'Local knowledge',
    question: 'How would you prepare my San Diego home for sale?',
    answer: [
      'I start with the property’s strongest attributes and the objections we can reasonably address.',
      'For an older home, that may mean protecting character rather than replacing everything. For a coastal property, it might mean making outdoor space, privacy, and parking easier to appreciate. For a condo, clear association information supports the presentation.',
      'The plan should fit the home and its likely buyers, not apply the same formula to every listing.',
    ],
    reviewed: R,
  },

  // ── Palm Springs ────────────────────────────────────────────────────────
  {
    id: 'fee-land-vs-leased-land',
    page: 'palm-springs',
    category: 'Local knowledge',
    question: 'What is the difference between fee land and leased land?',
    answer: [
      'Fee-simple ownership includes an ownership interest in the underlying land. For a condominium, the recorded documents establish how that interest is held.',
      'With leased land, ownership and use are subject to a land lease rather than ownership of the underlying land. The lease’s term, payments, increases, transfer provisions, and financing requirements become important parts of the purchase.',
      'I would not compare the options using asking price alone.',
    ],
    sources: [{ label: 'Fannie Mae Selling Guide', url: 'https://selling-guide.fanniemae.com/sel/b2-3-03/special-property-eligibility-and-underwriting-considerations-leasehold-estates' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'leasehold-financing',
    page: 'palm-springs',
    category: 'Local knowledge',
    question: 'Can I get a mortgage on a Palm Springs home with a land lease?',
    answer: [
      'Financing may be available, but the lender must evaluate the actual lease and property under the requirements of the proposed loan.',
      'The remaining lease term and other provisions can affect eligibility. Additional approvals and documentation may apply.',
      'Have the lender review the lease early. Don’t assume an extension is automatic or every leasehold property qualifies for the same financing.',
    ],
    sources: [{ label: 'Fannie Mae Selling Guide', url: 'https://selling-guide.fanniemae.com/sel/b2-3-03/special-property-eligibility-and-underwriting-considerations-leasehold-estates' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'vacation-rental-eligibility',
    page: 'palm-springs',
    category: 'Local knowledge',
    question: 'Can I operate a vacation rental in Palm Springs?',
    answer: [
      'Only when the property and proposed operation meet the applicable requirements.',
      'Palm Springs has a vacation-rental registration program, with different certificate categories, neighborhood-cap considerations, and operating rules. We need to check the specific address, current eligibility, and any HOA restrictions.',
      'A listing’s past rental activity does not establish that a new buyer can obtain authorization. Verify the opportunity before making it central to your purchase.',
    ],
    sources: [{ label: 'City of Palm Springs', url: 'https://www.palmspringsca.gov/government/departments/special-program-compliance/vacation-rentals-1098' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'hoa-vs-city-rental-rules',
    page: 'palm-springs',
    category: 'Local knowledge',
    question: 'If the HOA allows short-term rentals, does that mean I can rent the condo?',
    answer: [
      'Not by itself. HOA permission and city authorization are separate questions.',
      'We need to confirm the association’s rental restrictions and the property’s eligibility under the city’s rules, including the permitted rental duration and registration requirements.',
      'A description such as “rental friendly” is not enough to establish what you can legally do.',
    ],
    sources: [DRE_CID],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'ownership-costs',
    page: 'palm-springs',
    category: 'Local knowledge',
    question: 'What costs should I budget for beyond the mortgage?',
    answer: [
      'I would build a property-specific budget covering taxes, insurance, HOA dues where applicable, land rent where applicable, utilities, landscaping, pool service, and maintenance reserves.',
      'For a pool and spa, we should also consider how you intend to heat and use them. Recent bills can help, but your occupancy and preferences may differ from the seller’s.',
    ],
    reviewed: R,
  },
  {
    id: 'historic-designation',
    page: 'palm-springs',
    category: 'Local knowledge',
    question: 'Is every midcentury home historically designated?',
    answer: [
      'No. Architectural age or style is not the same as formal historic designation.',
      'However, age and eligibility for designation can still affect the review required for proposed alterations. We should check the property’s status and applicable rules rather than stop at whether the listing advertises a designation.',
      'Appreciating the architecture and understanding the permitted changes should go together.',
    ],
    sources: [{ label: 'City of Palm Springs', url: 'https://www.palmspringsca.gov/government/departments/planning/historic-resources' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'casita-or-adu',
    page: 'palm-springs',
    category: 'Local knowledge',
    question: 'Can I add a casita or ADU to a Palm Springs property?',
    answer: [
      'Potentially, but “casita” in marketing does not establish a structure’s permitted classification or approved use.',
      'We need to review zoning, site constraints, existing permits, utilities, and the standards applicable to the proposed project. Palm Springs identifies setbacks, lot coverage, and building separation among its ADU planning considerations.',
      'My experience at [444 W Stevens](/experience/444-w-stevens) reinforced why those questions come before assuming unused yard space can become another dwelling.',
    ],
    sources: [{ label: 'City of Palm Springs', url: 'https://www.palmspringsca.gov/government/departments/planning/for-homeowners-and-residents/accessory-dwelling-units' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'best-time-to-sell',
    page: 'palm-springs',
    category: 'Local knowledge',
    question: 'Is there a best time of year to sell in Palm Springs?',
    answer: [
      'There isn’t one date that guarantees the best result.',
      'I evaluate competing inventory, recent comparable sales, buyer activity, the property’s readiness, and your timing needs. Waiting for a perceived ideal season also means considering the additional carrying costs.',
      'We should compare launching now with what we realistically expect to gain by waiting, rather than choose a month out of habit.',
    ],
    reviewed: R,
  },
  {
    id: 'furnished-sales',
    page: 'palm-springs',
    category: 'Local knowledge',
    question: 'Is a furnished Palm Springs home automatically sold with everything shown?',
    answer: [
      'Don’t assume that. We need to confirm what is included and document the agreed items rather than rely on photographs.',
      'At [Querencia Palms](/experience/querencia-palms), offering buyers the option to keep selected furnishings was part of our presentation strategy. Other listings may work differently.',
      'We review the inventory, exclusions, and purchase terms, and involve the lender where personal-property treatment needs clarification.',
    ],
    reviewed: R,
  },
  {
    id: 'choosing-a-neighborhood',
    page: 'palm-springs',
    category: 'Local knowledge',
    question: 'How do I choose between Palm Springs neighborhoods?',
    answer: [
      'I start with how you intend to use the property and the setting you enjoy.',
      'We can compare architecture, outdoor space, orientation, privacy, street activity, maintenance, and proximity to places you expect to spend time. Land tenure and rental plans also deserve property-specific investigation.',
      'My history in [Vista Las Palmas](/vista-las-palmas) and work at [Querencia Palms](/experience/querencia-palms) provide useful perspectives, but the right neighborhood is the one that fits your priorities.',
    ],
    reviewed: R,
  },

  // ── Big Bear ────────────────────────────────────────────────────────────
  {
    id: 'big-bear-lake-vs-big-bear-city',
    page: 'big-bear',
    category: 'Local knowledge',
    question: 'What is the difference between Big Bear Lake and Big Bear City?',
    answer: [
      'The City of Big Bear Lake is incorporated. Big Bear City is an unincorporated community within San Bernardino County.',
      'That distinction matters when identifying which authority handles matters such as vacation-rental licensing and property requirements. Confirm the actual jurisdiction of the address rather than rely only on a listing’s use of “Big Bear” or a mailing description.',
    ],
    sources: [{ label: 'City of Big Bear Lake', url: 'https://bigbearlake.gov/index.php/en/services-main/transient-private-home-rentals' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'vacation-rental-eligibility',
    page: 'big-bear',
    category: 'Local knowledge',
    question: 'Can any Big Bear cabin become a vacation rental?',
    answer: [
      'No. We need to confirm the property’s jurisdiction, permitted use, and ability to meet the applicable requirements.',
      'The City of Big Bear Lake has its own registration and inspection process. San Bernardino County administers a separate program for eligible properties in its unincorporated areas.',
      'We also review private restrictions and practical operating needs before treating rental income as part of the purchase plan.',
    ],
    sources: [{ label: 'City of Big Bear Lake', url: 'https://bigbearlake.gov/index.php/en/services-main/transient-private-home-rentals' }, { label: 'San Bernardino County', url: 'https://str.sbcounty.gov/' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'vacation-rental-permit-transfer',
    page: 'big-bear',
    category: 'Local knowledge',
    question: 'Does the seller’s vacation-rental permit transfer with the property?',
    answer: [
      'For a typical sale, no.',
      'The City of Big Bear Lake states that a vacation-rental license expires upon a change of ownership and that the new owner must obtain a license before operating. San Bernardino County also requires a new owner to submit a new application.',
      'Existing rental history is useful background, not a substitute for confirming your own requirements.',
    ],
    sources: [{ label: 'City of Big Bear Lake', url: 'https://bigbearlake.gov/index.php/en/services-main/transient-private-home-rentals?view=article&id=507:frequently-asked-questions-vacation-rental-program&catid=64' }, { label: 'San Bernardino County', url: 'https://str.sbcounty.gov/' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'homeowners-insurance',
    page: 'big-bear',
    category: 'Local knowledge',
    question: 'When should I investigate homeowners insurance?',
    answer: [
      'Early, before you proceed without understanding availability, coverage, and cost.',
      'Give the insurance professional the address and intended use, including any vacation-rental plans. Ask about deductibles, exclusions, replacement-cost assumptions, and required property work.',
      'Where conventional coverage is unavailable, the California FAIR Plan may be an option, but it should not be assumed to provide comprehensive homeowners coverage. Additional protection may be needed.',
    ],
    sources: [{ label: 'California Department of Insurance', url: 'https://www.insurance.ca.gov/01-consumers/200-wrr/California-FAIR-Plan.cfm' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'inspections-mountain-home',
    page: 'big-bear',
    category: 'Local knowledge',
    question: 'What inspections and condition issues matter for a mountain home?',
    answer: [
      'I want buyers to investigate the roof, decks, drainage, heating, plumbing, moisture, and any additions or conversions. Access and the condition of the property outside the rooms matter too.',
      'A general inspection may lead to specialist evaluations.',
      'Rebuilding [Sierra Chalet](/experience/sierra-chalet) gave me greater appreciation for the work behind a finished mountain home. It doesn’t replace the need for qualified inspectors, contractors, or engineers.',
    ],
    reviewed: R,
  },
  {
    id: 'winter-access',
    page: 'big-bear',
    category: 'Local knowledge',
    question: 'How much should winter access influence my purchase?',
    answer: [
      'It deserves serious attention. I look at driveway slope, parking, snow-removal arrangements, entry access, and responsibility for maintaining the road.',
      'A home that is straightforward to reach during a summer showing may require a different winter plan.',
      'Four-wheel drive also does not eliminate every chain requirement. Caltrans requires vehicles to carry traction devices in chain-control areas even when qualifying for certain four-wheel/all-wheel-drive exemptions.',
    ],
    sources: [{ label: 'Caltrans', url: 'https://dot.ca.gov/travel/winter-driving-tips/chain-controls' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'forest-service-cabins',
    page: 'big-bear',
    category: 'Local knowledge',
    question: 'Why are some Forest Service cabins priced differently from ordinary homes?',
    answer: [
      'A Forest Service recreation residence is a different kind of purchase. You own the cabin improvements, not the federal land beneath them, and use is governed by a special-use permit.',
      'Full-time occupancy is not allowed under the recreation-residence program, and a buyer must apply for a new permit. Exterior changes also require approval.',
      'Understand those terms before comparing the price with a conventional home-and-land purchase.',
    ],
    sources: [{ label: 'US Forest Service', url: 'https://www.fs.usda.gov/r05/sanbernardino/permits/recreation-residences' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'lakefront-and-docks',
    page: 'big-bear',
    category: 'Local knowledge',
    question: 'Does a lakefront or lake-view home automatically include a private dock?',
    answer: [
      'No. A view does not establish lake access, and a lakefront description does not by itself establish dock privileges.',
      'We need to review the parcel, recorded rights or easements, and any dock license. The Big Bear Municipal Water District regulates residential docks, and lake conditions can affect their use.',
      'Verify what is legally included and practically usable instead of relying on a photograph of a nearby dock.',
    ],
    sources: [{ label: 'Big Bear Municipal Water District', url: 'https://www.bbmwd.com/residential-docks' }],
    regulatory: true,
    reviewed: R,
  },
  {
    id: 'vacation-rental-economics',
    page: 'big-bear',
    category: 'Local knowledge',
    question: 'How do you evaluate whether a Big Bear vacation rental makes financial sense?',
    answer: [
      'I look beyond projected gross bookings.',
      'The budget should account for financing, taxes, insurance, utilities, cleaning, management, maintenance, snow removal, supplies, platform charges, and reserves. Personal-use dates and periods without bookings also affect the picture.',
      'We test more than one income scenario and verify rental eligibility separately. A purchase should not depend on every optimistic assumption working perfectly.',
    ],
    reviewed: R,
  },
  {
    id: 'preparing-to-sell',
    page: 'big-bear',
    category: 'Local knowledge',
    question: 'How would you prepare my Big Bear home for sale?',
    answer: [
      'I focus on making both the lifestyle and practical ownership clear.',
      'That can include addressing visible maintenance, organizing available improvement records, improving safe access, and presenting decks, views, heating, and usable gathering spaces effectively.',
      'The marketing should show why the home is appealing without hiding the responsibilities of ownership. Season, weather, competing inventory, and your priorities help shape the launch plan.',
    ],
    reviewed: R,
  },
];

export function faqPage(slug: FaqPageSlug): FaqPageMeta {
  const p = faqPages.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown FAQ page: ${slug}`);
  return p;
}

export function faqItemsFor(slug: FaqPageSlug): readonly FaqItem[] {
  return faqItems.filter((i) => i.page === slug);
}

export function faqItem(page: FaqPageSlug, id: string): FaqItem {
  const i = faqItems.find((x) => x.page === page && x.id === id);
  if (!i) throw new Error(`Unknown FAQ item: ${page}#${id}`);
  return i;
}

/** Absolute site path to an answer's anchor, e.g. "/palm-springs/faq#fee-land-vs-leased-land". */
export function faqAnchor(page: FaqPageSlug, id: string): string {
  return `${faqPage(page).path}#${id}`;
}

/** First sentence of the answer when no excerpt is set. */
export function faqExcerpt(i: FaqItem): string {
  if (i.excerpt) return i.excerpt;
  const first = i.answer[0].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  const m = first.match(/^.*?[.!?](\s|$)/);
  return (m ? m[0] : first).trim();
}

/**
 * Sales Experience: David's client transaction stories, from his 2026-09-27
 * email (Querencia Palms revised 2026-09-28 after Unit 106 closed). Copy is
 * his, verbatim. Prices are his and are meant to show here; this is the one
 * part of the site where dollar figures appear.
 *
 * Rendered by /sales (index), /sales/[slug] (one page per story), the Selected
 * Sales grid on /properties, the market pages and the cards on /buy and /sell.
 * Photos live in salePhotos.ts, keyed by slug; the first photo leads.
 *
 * No closing dates or bed/bath/sq ft figures are shown because David has not
 * supplied them. Do not add any from memory or from a portal.
 */
import type { MarketSlug } from './site';
import type { Photo } from './types';
import { salePhotos, salePhotoGroups } from './salePhotos';
import type { PhotoGroup } from './salePhotos';

export type SaleSide = 'seller' | 'buyer';

export interface Sale {
  slug: string;
  /** Heading as David wrote it. */
  title: string;
  /** City as David wrote it beside the address. */
  city: string;
  market: MarketSlug;
  /** Full postal address from David's list, for alt text and structured data. */
  fullAddress: string;
  side: SaleSide;
  /** "Seller Representation", "Buyer Representation" or "Sales & Marketing". */
  role: string;
  /** Second half of David's role line: co-listing credit, 1031, first-time buyer. */
  roleNote?: string;
  /** "Sold for $850,000" / "Purchased for $699,500". */
  result: string;
  /** Second half of David's result line, e.g. "$10,000 Above Asking". */
  resultNote?: string;
  /** Closing month and year, from David's 2026-10-04 email. */
  closed?: string;
  /** Neighborhood, from David's 2026-10-04 list. Shown as "Hillcrest, San Diego" with the market name. */
  area?: string;
  /** Full story. The first paragraph doubles as the card preview unless `preview` is set. */
  paragraphs: readonly string[];
  /** Card and search-result preview when the story's opening line should not lead. */
  preview?: string;
  /** Related Experience project (personal investments and developments). */
  project?: { slug: string; label: string };
  /** Another story in the same client journey. */
  related?: { slug: string; label: string };
}

/**
 * One closed Querencia Palms residence. Closing months are from David's
 * 2026-10-04 email. Beds, baths, square footage and price are from his own
 * MLS (GPSR) inventory, read 2026-10-05; the seven prices total his
 * $3,958,000. He has been asked to confirm them against his mailing.
 */
export interface QuerenciaUnit {
  unit: string;
  phase: string;
  beds: number;
  baths: number;
  sqft: string;
  price: string;
  closed: string;
}

export const salesPage = {
  seo: {
    title: 'Sales Experience | David Weis',
    description:
      'Client stories from Compass Broker Associate David Weis: seller and buyer representation across San Diego, Palm Springs and Big Bear, and the Querencia Palms condominium conversion.',
  },
  eyebrow: 'Experience',
  title: 'Sales Experience',
  intro: [
    'Every client brings different priorities. A first home. A meaningful goodbye. An investment that needs careful evaluation. A move with little room for delays.',
    'Across San Diego, Palm Springs, and Big Bear, my work has included navigating complicated closings, negotiating around unexpected expenses, coordinating occupied properties, and helping clients feel confident in unfamiliar territory.',
    'These stories share the circumstances behind each sale, the decisions we worked through, and the personal attention that helped bring it to closing.',
  ],
  featuredLabel: 'Featured case study',
  sellerTitle: 'Seller Representation',
  buyerTitle: 'Buyer Representation',
  cardCta: 'Read the full story',
  cta: { label: 'Work With David', href: '/contact' },
} as const;

/** Featured case study. Same shape as a sale so it shares the detail page. */
export const querenciaCaseStudy: Sale & {
  subtitle: string;
  highlights: readonly string[];
  phases: readonly { name: string; units: readonly string[] }[];
  /** Appended after the last phase so readers know more residences are coming. */
  phasesNote: string;
  units: readonly QuerenciaUnit[];
} = {
  slug: 'querencia-palms',
  area: 'Tahquitz River Estates',
  title: 'Querencia Palms',
  city: 'Palm Springs',
  market: 'palm-springs',
  fullAddress: '588 E San Lorenzo Rd, Palm Springs, CA 92264',
  subtitle: '588 E San Lorenzo Rd',
  side: 'seller',
  role: 'Sales & Marketing',
  roleNote: '14-Residence Condominium Conversion',
  result: 'Seven Full-Price Sales',
  resultNote: '50% Sold · $3,958,000 in Closed Sales',
  highlights: ['Seven Full-Price Sales', '50% Sold', '$3,958,000 in Closed Sales'],
  /** Closed residences, grouped the way David filed them. */
  phases: [
    { name: 'Phase I', units: ['102', '206'] },
    { name: 'Phase II', units: ['104', '105', '201', '202'] },
    { name: 'Phase III', units: ['106'] },
  ],
  phasesNote: 'and counting',
  units: [
    { unit: '102', phase: 'Phase I', beds: 2, baths: 2, sqft: '1,066', price: '$549,000', closed: 'May 2026' },
    { unit: '206', phase: 'Phase I', beds: 2, baths: 2, sqft: '1,275', price: '$599,000', closed: 'May 2026' },
    { unit: '202', phase: 'Phase II', beds: 2, baths: 2, sqft: '1,100', price: '$524,000', closed: 'June 2026' },
    { unit: '201', phase: 'Phase II', beds: 2, baths: 2, sqft: '1,200', price: '$539,000', closed: 'June 2026' },
    { unit: '104', phase: 'Phase II', beds: 2, baths: 2, sqft: '1,200', price: '$599,000', closed: 'August 2026' },
    { unit: '105', phase: 'Phase II', beds: 2, baths: 2, sqft: '1,210', price: '$589,000', closed: 'August 2026' },
    { unit: '106', phase: 'Phase III', beds: 2, baths: 2, sqft: '1,150', price: '$559,000', closed: 'September 2026' },
  ],
  paragraphs: [
    "My involvement in Querencia Palms began with the property's acquisition and continued through its transformation from a 12-unit property into a 14-residence condominium community. Working closely with the seller and condominium conversion consultants throughout the process, I provided detailed knowledge of the property, including the koi pond, private patios, and updated unit configuration, helping the team account for its features and changes.",
    "I also contributed to preparing the project-specific purchase and sale agreement submitted to the California Department of Real Estate for use in the sales process. That involvement deepened my understanding of legal phasing and its implications for the developer's HOA assessment obligations on unsold residences.",
    "That foundation carried into my leadership of the sales and marketing effort. I redesigned and fully built out the existing website and developed brochures, property videos, and individual listing campaigns around each residence's distinct appeal. My familiarity with the property and its conversion helped me explain the project to prospective buyers, agents, and lenders.",
    'Building initial momentum required persistence and adaptation. Through events, direct agent outreach, and seller-approved launch incentives, we ultimately received multiple full-price offers on the same day. As our first model residences sold, we prepared new upstairs and downstairs models so buyers could continue experiencing the different layouts and possibilities. I also helped with landscaping and staging so the outdoor spaces felt as thoughtfully prepared as the residences themselves.',
    'We strategically set aside selected residences to lease during the initial sales period. Having people already living in the community allowed prospective buyers to experience it firsthand and feel more comfortable becoming early owners. Those residences are being offered for sale as their leases expire.',
    "Unit 201's sale began with a Facebook post announcing my broker's license. A prospective buyer reached out looking for a financial advisor, and I connected him with a fellow Vista Las Palmas Neighbors Foundation board member. During their visit to Palm Springs, the buyers toured Querencia. Purchasing locally had been a two-year plan, but I helped them explore how buying a residence as a rental could fit their goals sooner. They moved forward with Unit 201 at full price.",
    "The initial closings brought the complexities of a condominium conversion into focus. Title needed to confirm newly assigned assessor's parcel numbers. The building's lender needed signatures from multiple beneficiaries to authorize the release of individual residences from the lien securing the building's loan, while escrow worked through the related lender signoff requirements. After Unit 206 closed, another parcel-number change surfaced on Unit 102's scheduled closing day. At 4 p.m. on a Friday, the seller contacted Riverside County directly, helping us obtain the updated parcel numbers for all 14 residences. Title and escrow worked through the new information, allowing Unit 102 to close that same day.",
    'I remained involved through those complications while continuing to move the broader sales effort forward. I worked through numerous condominium questionnaires, providing lenders with detailed information about the project and the status of the conversion. I also helped arrange additional time to close without penalties, giving buyers and their lenders room to complete outstanding requirements.',
    "When Unit 104's first buyer failed to perform, we relaunched and secured another full-price sale. Unit 105 became the first financed closing, with its lender's project approval also helping support Unit 104's financing.",
    "With Phases I and II sold out, Unit 106's full-price closing at $559,000 carried that momentum into Phase III and marked the sale of half the community's residences.",
    'My work extended to preparing the community for HOA operations. I organized access information, parking assignments, maintenance logs, and a maintenance responsibility matrix, bringing essential operating details together for the transition.',
    "That involvement continues beyond individual closings. Through a resident newsletter, community gatherings, and ongoing communication, I keep residents informed about the project's progress and help build connections as Querencia Palms takes shape.",
  ],
  project: { slug: 'querencia-palms', label: 'The Querencia Palms project story' },
};

export const sales: readonly Sale[] = [
  // ── Listing side ────────────────────────────────────────────────────────
  {
    slug: '3712-third-ave-unit-3',
    closed: 'April 2023',
    area: 'Hillcrest',
    title: '3712 3rd Ave, Unit 3',
    city: 'San Diego',
    market: 'san-diego',
    fullAddress: '3712 Third Ave #3, San Diego, CA 92103',
    side: 'seller',
    role: 'Seller Representation',
    roleNote: 'Co-listed with Ken Pecus',
    result: 'Sold for $850,000',
    paragraphs: [
      'An international move on a tight timeline made this sale especially important. Our seller needed to move quickly while preserving as much money as possible for retirement and his next chapter abroad.',
      'Working alongside Ken Pecus, I took a hands-on role in answering inquiries, coordinating and attending showings, and supporting the transaction through closing. Within five days, the seller had multiple offers to consider, allowing us to weigh price alongside the terms that best supported his move.',
      "The home closed for $850,000 in a two-week escrow. A separate agreement for the furnishings and contents put additional money in the seller's pocket for retirement and relocation.",
    ],
  },
  {
    slug: '2556-chicago-st-unit-8',
    closed: 'April 2024',
    area: 'Bay Park',
    title: '2556 Chicago St, Unit 8',
    city: 'San Diego',
    market: 'san-diego',
    fullAddress: '2556 Chicago St #8, San Diego, CA 92110',
    side: 'seller',
    role: 'Seller Representation',
    result: 'Sold for $482,000',
    paragraphs: [
      'Selling this longtime rental was a deeply personal decision for my client. From our first introduction through a neighbor, I focused on listening, explaining her options, and making the process feel manageable.',
      "I coordinated showings around the tenant's schedule while helping her search for a replacement investment property in Palm Springs. Once the condo was vacant, greater flexibility for tours helped us accommodate interested buyers.",
      'The property sold for $482,000, $8,000 above its final asking price, completing the sale portion of her 1031 exchange. Throughout both transactions, my priority was to provide thoughtful guidance and steady support as she moved toward her next chapter. What began as a neighborhood referral became a lasting friendship.',
    ],
    related: { slug: '1111-e-palm-canyon-dr-344', label: 'The Palm Springs purchase that completed her exchange' },
  },
  {
    slug: '10782-dabney-dr-unit-9',
    closed: 'September 2024',
    area: 'Mira Mesa',
    title: '10782 Dabney Dr, Unit 9',
    city: 'San Diego',
    market: 'san-diego',
    fullAddress: '10782 Dabney Dr #9, San Diego, CA 92126',
    side: 'seller',
    role: 'Seller Representation',
    result: 'Sold for $630,000',
    paragraphs: [
      'After three decades in a home she had purchased on her own and carefully maintained, my client was preparing to downsize and focus on family. Referred by her brother, she trusted me to guide her through a significant transition.',
      'I prepared printed documents, organized the paperwork, and sat with her to review the listing agreement page by page. My goal was to give her the time and understanding to make each decision with confidence.',
      'When the first buyer failed to perform, I helped her navigate the setback and brought the property back to market. Within three days, we received a new offer from a motivated buyer and went on to complete a smooth escrow at $630,000.',
    ],
  },
  {
    slug: '117-w-mojave-blvd',
    closed: 'October 2024',
    area: 'Big Bear City',
    title: '117 W Mojave Blvd',
    city: 'Big Bear City',
    market: 'big-bear',
    fullAddress: '117 W Mojave Blvd, Big Bear, CA 92314',
    side: 'seller',
    role: 'Seller Representation',
    result: 'Sold for $340,000',
    resultNote: '$10,000 Above Asking',
    paragraphs: [
      'With my clients living in Sacramento, selling their Big Bear vacation rental required clear communication and dependable local representation.',
      'I based myself in Big Bear while managing the sale, presenting the cabin at the MLS broker caravan and hosting open houses. Relationships developed through my own cabin project, along with firsthand vacation-rental experience, helped me support the sale locally. FaceTime and regular updates kept my clients connected from a distance.',
      'When wildfire smoke and evacuation orders brought showings to a halt, we temporarily took the home off the market and adjusted our timeline. Following that pause, I negotiated a $340,000 sale with a single buyer, securing $10,000 above asking and helping my clients move toward their next investment in Northern California.',
    ],
  },
  {
    slug: '4493-utah-st',
    closed: 'December 2024',
    area: 'North Park',
    title: '4493 Utah St',
    city: 'San Diego',
    market: 'san-diego',
    fullAddress: '4493 Utah St, San Diego, CA 92116',
    side: 'seller',
    role: 'Seller Representation',
    result: 'Sold for $1,040,000',
    paragraphs: [
      'A fellow agent referred these sellers to me because he knew my experience with renovation projects. Their family home needed substantial work, and its location and potential became central to how I presented the opportunity to buyers.',
      'As offers came in, I created a comparison spreadsheet that put the important terms side by side: purchase price, financing, contingency periods, and earnest money deposits. Together, we reviewed how those differences could affect the transaction and what each offer would mean for them.',
      'The selected offer combined the strongest price with cash, shortened contingency periods, and specific contingencies waived. The buyers had carefully examined the property during their tour to understand the renovation scope, while responsive communication with their agent gave us greater confidence in moving forward.',
      'For sellers with limited transaction experience, clear explanations were essential. I guided them through their options and the decisions that followed, helping them move forward with an understanding of the terms they were accepting.',
    ],
  },
  {
    slug: '3700-third-ave',
    closed: 'August 2025',
    area: 'Hillcrest',
    title: '3700 Third Ave',
    city: 'San Diego',
    market: 'san-diego',
    fullAddress: '3700 Third Ave, San Diego, CA 92103',
    side: 'seller',
    role: 'Seller Representation',
    roleNote: 'Triplex',
    result: 'Sold for $2,275,000',
    resultNote: '$20,000 Below Final Asking',
    paragraphs: [
      'Following the successful Utah Street sale, the same agent referred me to represent this renovated Hillcrest triplex. Operating as a popular vacation rental, the property required careful coordination throughout the sales process.',
      'With guests staying across three separate residences, showing the entire property together was often difficult. I arranged access around bookings, frequently touring one unit at a time. For serious, qualified buyers, I secured approval for limited showings during guest stays, keeping interruptions to a minimum.',
      "My experience managing The Cole Hotel and operating rental properties helped me navigate those competing needs. I also provided additional rental-income information to help buyers evaluate the investment and identified work the seller completed to improve the property's presentation.",
      "As market conditions shifted, we adjusted the pricing strategy and maintained consistent marketing through a longer summer sales period. The process required persistence, flexibility, and close attention to both the sellers' goals and the business still operating on the property.",
    ],
    related: { slug: '4493-utah-st', label: 'The Utah Street sale that led to this referral' },
  },
  {
    slug: '5300-e-waverly-dr-unit-c13',
    closed: 'January 2026',
    area: 'Tahquitz Creek Golf',
    title: '5300 E Waverly Dr, Unit C13',
    city: 'Palm Springs',
    market: 'palm-springs',
    fullAddress: '5300 E Waverly Dr #C13, Palm Springs, CA 92264',
    side: 'seller',
    role: 'Seller Representation',
    result: 'Sold for $265,000',
    paragraphs: [
      'My clients chose me after attending an open house and seeing how I presented the property, answered questions, and engaged with visitors. When it was time to sell their own condo, they wanted that same attention and preparation.',
      "With a family member still living in the home, showings and inspections required thoughtful coordination. I worked around the resident's needs and, when an inspector needed to return at short notice, brought flowers to thank them for their flexibility.",
      'The original accepted offer was $260,000, but escrow stretched to 86 days. I maintained pressure to resolve outstanding issues and renegotiated the terms to address the impact on my sellers. Those negotiations secured a $5,000 increase in the purchase price and a $2,650 reduction in selling costs, improving their proceeds while bringing a challenging transaction to completion.',
    ],
  },

  // ── Buyer side ──────────────────────────────────────────────────────────
  {
    slug: '425-w-beech-st-415',
    closed: 'February 2024',
    area: 'Little Italy',
    title: '425 W Beech St #415',
    city: 'San Diego',
    market: 'san-diego',
    fullAddress: '425 W Beech St #415, San Diego, CA 92101',
    side: 'buyer',
    role: 'Buyer Representation',
    result: 'Purchased for $699,500',
    paragraphs: [
      'After moving to San Diego, my clients were renting while considering their next step. As we got to know one another, I stayed connected by mailing them my monthly newsletter. They knew several agents through our mutual circle of friends, and when they were ready to buy, they chose me to guide their search.',
      'Each brought different priorities, so I had them share their wants, needs, and deal breakers separately before reviewing them together. Throughout our tours, I offered practical comparisons and gave them space to discuss their reactions. Understanding both perspectives helped us identify a home that respected what mattered to each of them.',
      'This Little Italy condo offered the opportunity to add value through renovations they could realistically handle while both working full time and settling into a new routine. They could make it their own without taking on an overwhelming project, and the location put them in Little Italy with Hillcrest close by.',
      'With a goal of staying below $700,000, we submitted an offer within that limit and secured the home within their budget. It gave them a place to enjoy now, improve over time, and potentially retain as a rental in the future.',
    ],
  },
  {
    slug: '1111-e-palm-canyon-dr-344',
    closed: 'May 2024',
    area: 'Twin Palms',
    title: '1111 E Palm Canyon Dr #344',
    city: 'Palm Springs',
    market: 'palm-springs',
    fullAddress: '1111 E Palm Canyon Dr #344, Palm Springs, CA 92264',
    side: 'buyer',
    role: 'Buyer Representation',
    roleNote: '1031 Exchange',
    result: 'Purchased for $445,000',
    resultNote: '$10,000 Below Final Asking',
    paragraphs: [
      "This purchase was the second half of the journey that began with my client's Chicago Street condo. As she moved forward from a property with deep personal significance, I helped her search for a replacement investment she could feel excited about.",
      'Mountain views were high on her wish list, and several tours at Ocotillo Lodge had left her unconvinced. When another unit held an open house, I suggested we stop in. It did not quite offer the mountain outlook she had imagined, but she saw the opportunity to renovate it into something she loved.',
      "Making the investment work required understanding the responsibilities beyond the purchase. I walked her through Palm Springs' short-term rental requirements, including permit application timing and how to coordinate renovations with the city's permit inspections. I also offered to serve as the local contact for her permit, giving her another option for support while living in San Diego.",
      "The purchase required careful coordination between two properties and two markets. We worked around the Chicago Street tenant's move-out, and that sale needed to close before this purchase could complete. I carefully navigated the timing of contingency removal, keeping the risk to her deposit at the center of those decisions as we coordinated the two escrows.",
      'Her connection to Palm Springs continued to grow after closing, eventually leading her to make the city her full-time home. Watching that next chapter unfold has made this one of my most meaningful client relationships.',
    ],
    related: { slug: '2556-chicago-st-unit-8', label: 'The Chicago Street sale that began her exchange' },
  },
  {
    slug: '7068-belden-st',
    closed: 'June 2024',
    area: 'Clairemont',
    title: '7068 Belden St',
    city: 'San Diego',
    market: 'san-diego',
    fullAddress: '7068 Belden St, San Diego, CA 92111',
    side: 'buyer',
    role: 'Buyer Representation',
    result: 'Purchased for $910,000',
    resultNote: '$9,000 Below Final Asking',
    paragraphs: [
      'Helping my client relocate to San Diego meant introducing him to the practical differences between neighborhoods, from commute routes and nearby amenities to how each location could fit his daily routine.',
      'When our initial negotiations on this Clairemont home did not come together, we stepped back and continued exploring other properties. I stayed in communication with the listing agent, keeping the opportunity open. Weeks later, we returned to negotiations and reached an agreement.',
      "The seller's planned move out of state came with an unusual complication: finding somewhere to house his three wolves. It was my first time seeing a wolf in person, and the experience felt straight out of Twilight. Along with concerns about the cost of buying back into San Diego if the move did not work out, those logistics gave him second thoughts about selling. He ultimately chose to proceed after weighing the potential financial consequences of canceling.",
      'The purchase included a seller rent-back with a firm move-out deadline, giving my client a clear date to plan around before taking possession. He has since transformed the property through his own renovation skills and vision, making the home distinctly his.',
    ],
  },
  {
    slug: '4420-voltaire-st',
    closed: 'March 2025',
    area: 'Point Loma Heights',
    title: '4420 Voltaire St',
    city: 'San Diego',
    market: 'san-diego',
    fullAddress: '4420 Voltaire St, San Diego, CA 92107',
    side: 'buyer',
    role: 'Buyer Representation',
    result: 'Purchased for $1,460,000',
    resultNote: '$40,000 Negotiated Price Reduction',
    // David, 2026-09-28: previews lead with the work, not the relationship.
    preview:
      'An investment property needs to make sense beyond the asking price. I helped evaluate renovation potential, projected resale value, and potential alternative uses.',
    paragraphs: [
      'I represented an experienced investor, who had bought and sold more than 30 homes and apartment buildings, in acquiring this property for renovation.',
      "My involvement included evaluating the investment itself. Alongside researching the property's history, I helped prepare projections of its potential resale value after renovation. Those estimates gave him a basis to compare the anticipated sale price with acquisition and renovation costs and assess whether a flip made financial sense. I also explored whether a multifamily conversion or adding an accessory dwelling unit could offer additional value.",
      'During the inspection process, I raised concerns about additional repairs and the costs they would introduce. Those negotiations resulted in a $40,000 price reduction from $1.5 million, leaving more funds available for the renovation.',
      "The purchase took nearly five months, with the trustee's sale process and an escrow that fell through contributing to the extended timeline. Throughout those delays, I kept him informed and remained focused on securing terms that supported the project.",
      "We ultimately completed the purchase with a lower acquisition cost and a clearer understanding of the property's possibilities, ready to begin its transformation.",
    ],
    project: { slug: 'vista-voltaire', label: 'What happened next: the Vista Voltaire project' },
  },
  {
    slug: '1621-hotel-circle-s-e228',
    closed: 'November 2025',
    area: 'Mission Valley',
    title: '1621 Hotel Circle S #E228',
    city: 'San Diego',
    market: 'san-diego',
    fullAddress: '1621 Hotel Cir S #E228, San Diego, CA 92108',
    side: 'buyer',
    role: 'Buyer Representation',
    roleNote: 'First-Time Buyer',
    result: 'Purchased for $430,000',
    paragraphs: [
      "Buying a first home brings excitement, but it can also bring uncertainty. My client's biggest hesitation was choosing a property and then seeing something he liked better come on the market.",
      'We toured homes across San Diego as he weighed two competing priorities: more space or a more convenient location. I helped him compare those tradeoffs, understand the purchase process, and think through what mattered most in his daily life.',
      'Throughout the search, I gave him room to voice his concerns and work through decisions. My role was to keep him informed and grounded while preserving the excitement of becoming a homeowner. That meant explaining each next step clearly and helping him evaluate the homes in front of him against his own priorities.',
      'He ultimately chose a shaded Mission Valley condo with hummingbirds and a setting that felt like a treehouse. The location offered the convenience he wanted, while the surroundings gave it a character that felt like home. Handing him the keys was especially meaningful after watching his initial uncertainty grow into confidence.',
    ],
  },
  {
    slug: '4494-mentone-st-6',
    closed: 'April 2026',
    area: 'Point Loma Heights',
    title: '4494 Mentone St #6',
    city: 'San Diego',
    market: 'san-diego',
    fullAddress: '4494 Mentone St Unit 6, San Diego, CA 92107',
    side: 'buyer',
    role: 'Buyer Representation',
    roleNote: 'First-Time Buyer',
    result: 'Purchased for $550,000',
    resultNote: '$8,000 Credit at Closing',
    paragraphs: [
      'After several successful transactions for people in his circle, a fellow agent referred this first-time buyer to me. He approached homeownership thoughtfully and found a condo he could picture himself in, with friends already living in the building.',
      'Even arranging the initial showing required follow-up after delayed responses from the listing side. Communication was limited to text, making it harder to have direct conversations and resolve questions. I worked through those obstacles while keeping my client informed.',
      "When the sellers selected another offer, we discussed a backup strategy and stayed engaged. That escrow later encountered problems with the HOA's pet restrictions, reinforcing the importance of reviewing the condominium documents carefully. When the opportunity reopened, we pursued it again.",
      'With two earlier escrows having fallen through, I submitted a letter explaining how I would guide my client through the purchase and help bring the transaction to closing. I also connected him with a lender who completed his preapproval late in the evening so we could submit an offer, and an insurance broker who helped him obtain coverage at a favorable price.',
      'Protecting his earnest money was a priority throughout the transaction. Before removing contingencies, we reviewed inspection reports, condominium documents, insurance, and potential concerns together. I wanted him to understand what he was accepting, consider the possible scenarios, and have his questions answered before taking that next step.',
      "Our review of the HOA's finances raised concerns about a potential future special assessment. With that possibility in mind, I negotiated an $8,000 credit at closing to help him preserve cash for future expenses. He secured the home he wanted with a clearer understanding of the responsibilities of ownership and additional financial breathing room as he began this next chapter.",
    ],
  },
];

/** Every story with a detail page: the case study first, then the sales. */
export const allSales: readonly Sale[] = [querenciaCaseStudy, ...sales];

export const sellerSales = sales.filter((s) => s.side === 'seller');
export const buyerSales = sales.filter((s) => s.side === 'buyer');

export const salePreview = (s: Sale) => s.preview ?? s.paragraphs[0];

export const saleHref = (s: Pick<Sale, 'slug'>) => `/sales/${s.slug}`;

export function getSale(slug: string): Sale {
  const s = allSales.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown sale: ${slug}`);
  return s;
}

export const salesInMarket = (market: MarketSlug) => allSales.filter((s) => s.market === market);

/** Photos for a story; empty until they are staged. Components skip the media when there are none. */
/** "Hillcrest, San Diego": the caption David asked for on the sale hero tiles. */
const marketNames: Record<MarketSlug, string> = { 'san-diego': 'San Diego', 'palm-springs': 'Palm Springs', 'big-bear': 'Big Bear' };
export const saleLocation = (s: Sale) => (s.area ? `${s.area}, ${marketNames[s.market]}` : s.city);
export const saleRepresented = (s: Sale) => (s.side === 'buyer' ? 'Represented Buyer' : 'Represented Seller');

export const salePhotosFor = (slug: string): readonly Photo[] => salePhotos[slug] ?? [];
export const saleLead = (slug: string): Photo | undefined => salePhotosFor(slug)[0];

/** Photos split into labelled sets: the three 3700 Third Ave residences, each Querencia Palms unit. */
export const saleGroupsFor = (slug: string): readonly PhotoGroup[] => salePhotoGroups[slug] ?? [];

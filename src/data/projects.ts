/**
 * The seven Experience projects. Every project page is rendered from this
 * file by src/components/ProjectPage.astro; the cards on Home, Experience
 * and the market pages by ProjectCard.astro. Copy is the approved deck.
 *
 * Rules from the deck: no dollar figures or price history anywhere (Querencia
 * Palms and Vista Voltaire especially); no negative guest or tenant specifics
 * on Belmont Beach House. Photos are placeholders until David supplies them.
 */
import type { MarketSlug } from './site';
import type { Cta, Photo, Stat } from './types';

export interface ProjectSection {
  heading: string;
  paragraphs: readonly string[];
}

export interface Project {
  slug: string;
  name: string;
  market: MarketSlug;
  /** Place name used in eyebrows ("Big Bear Lake" differs from the market name). */
  place: string;
  /** Project page eyebrow, after the place: "Palm Springs · Condominium Conversion" */
  kind: string;
  /** Experience landing card label */
  kindIndex: string;
  /** Home teaser card label (falls back to `kind`) */
  kindTeaser?: string;
  /** Experience landing and market page cards */
  summary: string;
  /** Home teaser card copy and CTA */
  teaser?: string;
  teaserCta?: string;
  intro: string;
  sections: readonly ProjectSection[];
  stats?: readonly Stat[];
  /** photos[0] leads the page and the cards; the rest become image breaks. */
  photos: readonly Photo[];
  logo?: { src: string; alt: string; width: number; height: number };
  link?: Cta;
  /** Closing CTA on the project page */
  cta: Cta;
  seo: { title: string; description: string };
}

export const projects: readonly Project[] = [
  {
    slug: 'querencia-palms',
    name: 'Querencia Palms',
    market: 'palm-springs',
    place: 'Palm Springs',
    kind: 'Condominium Conversion',
    kindIndex: '14-Residence Condominium Conversion',
    kindTeaser: 'Condominium Conversion',
    summary:
      'A condominium conversion that tested almost every part of my real estate skill set, from pricing and staging to landscaping, marketing, brokerage and patience.',
    teaser:
      'A 14-residence condominium conversion that became a lesson in patience, presentation, pricing and relentless marketing.',
    teaserCta: 'Explore the Project',
    intro:
      'A 14-residence condominium conversion in South Palm Springs became one of the most demanding and rewarding projects of my career. It reinforced something I will probably carry with me forever: when the market does not immediately agree with you, the answer is not always to lower the price. Sometimes you need to make the product better, tell the story differently and find the people who understand what you created.',
    sections: [
      {
        heading: 'It was supposed to move quickly.',
        paragraphs: [
          'When the property was purchased, much of the condominium conversion process was already underway. The expectation was that finishing the project and selling the residences would be relatively straightforward. By late 2025, we were preparing for launch. Then the market changed. Sales slowed dramatically across the area, and the immediate demand we expected simply was not there.',
        ],
      },
      {
        heading: 'The market said wait. Everyone else said drop the price.',
        paragraphs: [
          'We priced the residences where we believed the value made sense for renovated fee-land condominiums in South Palm Springs. As the units sat, opinions came quickly: reduce the prices, clear the inventory, take the loss and move on. There were moments when the pressure became enormous. But I kept coming back to the same question: was the product wrong, or had we not yet done enough to show people why it was worth buying? I believed it was the second.',
        ],
      },
      {
        heading: 'Make the property impossible to ignore.',
        paragraphs: [
          'That meant getting involved in nearly every detail. I took over much of the landscape oversight and spent months bringing color, life and maturity back into the grounds. When the aquatic landscaping around the koi pond repeatedly disappeared during maintenance, I took responsibility for restoring it myself — sourcing aquatic plants, learning how the pond behaved through the seasons, and gradually transforming what had felt like water and rocks into something much closer to the tropical oasis I believed buyers should experience.',
          'Then came the units. Paint splatter on windows, fingerprints, small imperfections — tiny things buyers might never consciously mention, but their brain still registers. I went through the residences obsessively: clean, correct, stage, present, repeat.',
          'Once the physical presentation was right, I focused on visibility. Open houses became events. Agents were invited back. Vendors, food, music and community were incorporated when appropriate. I increased my involvement across Palm Springs organizations and made sure people knew what Querencia Palms was. The goal was simple: get people through the gates. Once they experienced the property, the work could speak for itself.',
        ],
      },
      {
        heading: 'Marketing to the people who already knew the buyer.',
        paragraphs: [
          'One of the most important changes was recognizing that I did not need to personally find every buyer — I needed more agents actively thinking about Querencia Palms. By creating incentives and encouraging agents to look inside their own networks for people who matched the property, showing activity increased. Then contracts started coming, and the momentum changed.',
        ],
      },
      {
        heading: "The market didn't need a fire sale. It needed a reason to pay attention.",
        paragraphs: [
          'The residences began going into escrow at full asking price. More importantly, buyers moving into the community began validating what we believed from the beginning. The landscaping, architecture, water features, amenities and intimate scale created the sense of place we had worked so hard to communicate. What once felt like an impossible launch became one of the clearest examples in my career of why presentation, patience and creative marketing matter.',
        ],
      },
      {
        heading: 'Price is only one part of the equation.',
        paragraphs: [
          'Sellers often ask me whether staging matters, whether a small repair matters, whether landscaping matters. Querencia Palms eliminated any doubt in my mind. Buyers experience property emotionally before they analyze it logically. Something can be technically correct and still feel wrong. Sometimes the answer is price. But sometimes the answer is removing the distraction, improving the experience and giving someone enough reasons to imagine themselves there. Knowing the difference is the important part.',
        ],
      },
    ],
    stats: [
      { value: '14', label: 'Residences' },
      { value: 'South Palm Springs', label: 'Fee-land condominiums' },
      { value: 'Full ask', label: 'Escrows opened at asking price' },
    ],
    photos: [
      { suggestion: 'Pool, spa and courtyard at Querencia Palms' },
      { suggestion: 'The koi pond after the aquatic planting was restored' },
      { suggestion: 'A staged residence interior' },
      { suggestion: 'Mountain view from a private patio' },
      { suggestion: 'An open house event on the grounds' },
    ],
    logo: {
      src: '/images/querencia-palms-logo.png',
      alt: 'Querencia Palms logo: two palm trees over colorful bands with the tagline Love where you live',
      width: 800,
      height: 626,
    },
    link: { label: 'Visit querenciapalms.com', href: 'https://www.querenciapalms.com/', external: true },
    cta: { label: 'Explore Palm Springs Real Estate', href: '/palm-springs' },
    seo: {
      title: 'Querencia Palms | David Weis',
      description:
        'Explore the story behind Querencia Palms, a 14-residence Palm Springs condominium conversion and a case study in staging, presentation and innovative real estate marketing.',
    },
  },
  {
    slug: 'the-cole',
    name: 'The Cole',
    market: 'palm-springs',
    place: 'Palm Springs',
    kind: 'Hospitality',
    kindIndex: 'Boutique Hotel',
    kindTeaser: 'Boutique Hospitality',
    summary:
      'A real estate investment that became an operating hotel, and ultimately one of the most formative business experiences of my career.',
    teaser:
      'What began as a real estate investment became an operating business — and one of the most formative experiences of my career.',
    teaserCta: 'Explore the Story',
    intro:
      'The Cole taught me one of the most valuable lessons of my career: owning real estate and operating real estate are two completely different things.',
    sections: [
      {
        heading: 'Build it. Sell it. Move on.',
        paragraphs: [
          'My husband, Mark, acquired and transformed the former motor lodge into what became The Cole Hotel. The intention was ultimately to sell the completed property. Then buyer demand disappeared. Instead of leaving the building waiting for the market to return, we decided to prove what it could become. We would operate the hotel and build a track record.',
        ],
      },
      {
        heading: 'So I left banking and became a hotel general manager.',
        paragraphs: [
          'At the time, I was working as a Personal Banker for Chase in Palm Springs. Running a hotel had never been the career plan, but the opportunity was sitting directly in front of us. I left the bank and began preparing The Cole to open. Thirty rooms needed systems. Employees needed to be hired and trained. A bar and restaurant needed processes. Guest communication, housekeeping, payroll, safety, purchasing, marketing and hundreds of tiny operating decisions all had to come together. We opened. Ten days later, COVID-19 shut Palm Springs hotels down.',
        ],
      },
      {
        heading: 'Ten days in, everything changed.',
        paragraphs: [
          'The shutdown was devastating, but it gave us something we badly needed: time. We used it to rebuild our processes. My background in payroll and HR became immediately valuable. My earliest hotel experience cleaning rooms gave me an understanding of what housekeeping teams were physically being asked to do. Every employee was cross-trained where possible — front desk staff could support the bar, teams helped with laundry, and everyone understood that no role existed completely in isolation. When the hotel reopened, the goal was not simply to operate. It was to create an experience.',
        ],
      },
      {
        heading: 'Hospitality is built in the small things.',
        paragraphs: [
          'COVID removed many traditional hotel touchpoints almost overnight. So we adapted: QR codes, branded hand sanitizer, welcome materials, new communication systems, simplified processes. We constantly tested inexpensive ways to improve the guest experience and communicate the brand. That period changed the way I market real estate today. You do not always need the most expensive solution — you need the one somebody notices, understands and remembers.',
        ],
      },
      {
        heading: 'A property became a brand.',
        paragraphs: [
          'The Cole developed a strong identity and consistently excellent guest feedback. The property was ultimately leased to hospitality operator Sonder, allowing us to step away from daily operations and begin another chapter. Years later, when that operating relationship ended, the hotel was sold. The building was the asset — but the experience we created around it was what demonstrated its potential.',
        ],
      },
      {
        heading: 'The experience is part of the product.',
        paragraphs: [
          'Real estate professionals often focus heavily on the asset itself: location, square footage, architecture, price. Those things matter. But The Cole taught me to pay equal attention to how people experience a property — how they are greeted, how clearly something is explained, how clean it feels, how problems are handled, how someone feels when they leave. That philosophy now follows me into every part of my real estate business.',
        ],
      },
    ],
    stats: [
      { value: '30', label: 'Rooms' },
      { value: '10 days', label: 'Open before the COVID-19 shutdown' },
      { value: 'Five-star', label: 'Rated across its major guest platforms' },
    ],
    photos: [
      { suggestion: 'The Cole Hotel pool at dusk' },
      { suggestion: 'Exterior with the original motor-lodge roofline' },
      { suggestion: 'A guest room' },
      { suggestion: 'The bar and restaurant' },
      { suggestion: 'Branded welcome materials from the reopening' },
    ],
    logo: { src: '/images/the-cole-hotel-logo.svg', alt: 'The Cole Hotel logo', width: 211, height: 86 },
    cta: { label: 'Explore Palm Springs Real Estate', href: '/palm-springs' },
    seo: {
      title: 'The Cole Hotel Palm Springs | David Weis',
      description:
        "Learn how operating The Cole Hotel shaped David Weis' approach to hospitality, property operations, marketing, service and real estate.",
    },
  },
  {
    slug: 'vista-voltaire',
    name: 'Vista Voltaire',
    market: 'san-diego',
    place: 'San Diego',
    kind: 'Restoration + Vacation Rental',
    kindIndex: '1924 Restoration',
    kindTeaser: 'Renovation + Vacation Rental',
    summary:
      'A historic Ocean Beach home originally restored for resale that ultimately found a second life as a high-performing vacation rental.',
    teaser: 'A restored 1924 home that proved sometimes the best real estate decision is knowing when not to sell.',
    teaserCta: 'Explore the Project',
    intro:
      'Sometimes the most important decision in real estate is deciding not to follow the original plan. Vista Voltaire became exactly that kind of lesson.',
    sections: [
      {
        heading: 'Restore it. Sell it.',
        paragraphs: [
          'The 1924 home had been neglected for years. Other prospective buyers saw redevelopment potential and considered replacing it with multiple units. Mark saw something else: a historic farmhouse with character worth preserving. The property was restored rather than demolished, allowing one of the neighborhood\'s older homes to remain part of the community. The original plan was to complete the renovation and sell it.',
        ],
      },
      {
        heading: 'The market stopped.',
        paragraphs: [
          "By 2025, San Diego's market had slowed dramatically. Despite the quality of the restoration, buyers were not moving — and the same thing was happening across the market. As the listing agent, it was easy to interpret the lack of a sale as failure. But the problem was larger than one property.",
        ],
      },
      {
        heading: "If the market won't buy it, maybe the market should rent it.",
        paragraphs: [
          'We withdrew from the original plan and converted the home into a vacation rental. Initially, outside management seemed like the easiest solution. Instead, operating costs increased, rates underperformed and the guest experience did not meet our expectations. Eventually, I took the property back under our own management through Celebrity Vacation Homes. That changed everything. The branding improved, operations tightened, the guest experience became more consistent, and the property finally began performing in a way that matched the quality of the home.',
        ],
      },
      {
        heading: 'The home found a different buyer: the guest.',
        paragraphs: [
          'Interestingly, buyer interest eventually returned. But by then, something else had happened. Guests loved the home. The property had become a successful part of Celebrity Vacation Homes, and its operating value had changed the way we looked at selling it. What originally felt like a failed sale became another viable strategy.',
        ],
      },
      {
        heading: 'A price reduction is not a business plan.',
        paragraphs: [
          'Sometimes lowering a price is exactly the right decision. But there is a point where continuing to reduce simply because a property has not sold can destroy value unnecessarily. Vista Voltaire taught me to separate emotion from strategy. Look at the larger market. Understand carrying costs, alternatives, and what the asset can do. Then decide. Real estate gives owners options. My job is to help them understand those options before one decision becomes irreversible.',
        ],
      },
    ],
    stats: [
      { value: '1924', label: 'Year the home was built' },
      { value: 'Ocean Beach', label: 'San Diego' },
      { value: 'Celebrity Vacation Homes', label: 'Operated under our own management' },
    ],
    photos: [
      { suggestion: 'Front exterior of the restored 1924 farmhouse' },
      { suggestion: 'Living room after the restoration' },
      { suggestion: 'Kitchen' },
      { suggestion: 'Back yard or porch' },
      { suggestion: 'A guest-ready bedroom' },
    ],
    cta: { label: 'Explore San Diego Real Estate', href: '/san-diego' },
    seo: {
      title: 'Vista Voltaire San Diego | David Weis',
      description:
        'Explore the restoration and repositioning of Vista Voltaire, a 1924 San Diego home that evolved from a planned resale into a successful vacation rental.',
    },
  },
  {
    slug: 'kensington-canyon',
    name: 'Kensington Canyon',
    market: 'san-diego',
    place: 'San Diego',
    kind: 'Restoration + Ownership',
    kindIndex: 'Historic Residence',
    summary:
      'A deeply personal home and extensive renovation that taught me the value of preserving character while making an older property work beautifully for modern life.',
    intro:
      'Of all the properties in our portfolio, Kensington Canyon may be the most personal to me. For a long time, it was simply home.',
    sections: [
      {
        heading: 'Preserve what made it special.',
        paragraphs: [
          'The home has the scale and presence of something from a storybook, surrounded by the Spanish and Tudor-influenced homes that give Kensington so much character. Its renovation became a lesson in restraint. Not everything old needs to be replaced — the original hardwood floors could be restored, and existing architectural character could remain. The goal was to make the home function better without stripping away the things that made it distinctive.',
          'One of my favorite examples is the kitchen island. After searching endlessly for the right piece, inspiration came from an unexpected place: a beautifully built rolling tool chest. With a custom butcher-block top, it became an incredibly functional movable island and a true piece of furniture. Sometimes good design has more to do with creativity than price.',
        ],
      },
      {
        heading: 'Then home became an asset.',
        paragraphs: [
          "Eventually, Kensington Canyon became part of our vacation rental portfolio. That transition taught me something entirely different. It is not easy to hand your home to strangers. You create owner's closets, store sentimental pieces, rethink what linens and decor you are willing to replace, and accept that wear will happen. But you also realize that while you are somewhere else, another family is making memories in a home that otherwise might have been sitting empty.",
        ],
      },
      {
        heading: 'You can protect a home without being afraid to use it.',
        paragraphs: [
          'Investment decisions are not always purely financial. Sometimes a property is both personal and productive. The key is building boundaries and systems that allow it to be both. And if the strategy stops making sense, you reassess — short-term rental, long-term rental, personal residence, sale. Real estate rarely gives you only one option.',
        ],
      },
    ],
    photos: [
      { suggestion: 'Front exterior among the Spanish and Tudor-influenced homes of Kensington' },
      { suggestion: 'The restored original hardwood floors' },
      { suggestion: 'The rolling tool-chest kitchen island with its butcher-block top' },
      { suggestion: 'Living room' },
      { suggestion: 'The canyon behind the house' },
    ],
    cta: { label: 'Explore San Diego Real Estate', href: '/san-diego' },
    seo: {
      title: 'Kensington Canyon San Diego | David Weis',
      description:
        'Explore Kensington Canyon, a historic San Diego residence restored with a focus on preserving character while adapting the home for modern living and vacation rental ownership.',
    },
  },
  {
    slug: 'belmont-beach-house',
    name: 'Belmont Beach House',
    market: 'san-diego',
    place: 'San Diego',
    kind: 'Coastal Investment',
    kindIndex: 'Coastal Investment Property',
    summary:
      'A rare Mission Beach property that became an ongoing lesson in balancing personal use, rental strategy and preservation of the asset.',
    intro:
      'Some properties are difficult to replace. Belmont Beach House is one of them. Its proximity to the beach, views and setting in Mission Beach make it the kind of asset you think very carefully about before selling.',
    sections: [
      {
        heading: 'Finding the right way to use it.',
        paragraphs: [
          "For several years, we experimented with a hybrid model: longer-term tenants during the winter, short-term rental operation during San Diego's strongest summer season. Financially, the strategy worked. Operationally, it taught us something else: the longer someone stays in a property, the more the relationship begins to resemble traditional tenancy rather than hospitality — and the property is cared for very differently under each.",
        ],
      },
      {
        heading: 'Simplify the strategy.',
        paragraphs: [
          'As Celebrity Vacation Homes evolved, we decided to move toward operating Belmont Beach House as a dedicated year-round vacation rental. A consistent operating model creates clearer expectations, tighter control of the home and an opportunity to market the property as part of a larger hospitality brand.',
        ],
      },
      {
        heading: 'Maximum income is not always maximum value.',
        paragraphs: [
          'The best operating strategy considers more than gross rent: wear, risk, management, owner access, and future resale value. Sometimes a strategy that looks great on a spreadsheet becomes less attractive once you experience what it does to the property. Ownership means constantly balancing income today with the asset you want to own tomorrow.',
        ],
      },
    ],
    photos: [
      { suggestion: 'Ocean view from Belmont Beach House' },
      { suggestion: 'Exterior with the beach beyond' },
      { suggestion: 'Living area' },
      { suggestion: 'Deck or patio at sunset' },
    ],
    cta: { label: 'Explore San Diego Real Estate', href: '/san-diego' },
    seo: {
      title: 'Belmont Beach House San Diego | David Weis',
      description:
        'Explore the ownership and investment strategy behind Belmont Beach House, a Mission Beach property balancing vacation rental operations, preservation and long-term value.',
    },
  },
  {
    slug: 'sierra-chalet',
    name: 'Sierra Chalet',
    market: 'big-bear',
    place: 'Big Bear Lake',
    kind: 'Cabin Restoration',
    kindIndex: 'Cabin Restoration',
    summary:
      'Ten months of hands-on work transformed a deteriorated mountain cabin into one of the projects I am proudest to say I physically helped rebuild.',
    intro: 'This is the project that taught me what renovation feels like when you are actually covered in it.',
    sections: [
      {
        heading: 'A diamond in very rough condition.',
        paragraphs: [
          'Toward the end of our chapter with The Cole, Mark and I began escaping Palm Springs for weekends in Big Bear. The mountains felt completely different — fresh air, snow, trees, a slower pace. Eventually I purchased a cabin that needed almost everything. The rear deck was unsafe enough that we were told not to walk on it. The property was tired. But the setting and potential were undeniable.',
        ],
      },
      {
        heading: 'Ten months. Mostly our own hands.',
        paragraphs: [
          "Mark is a licensed contractor, but this project became unusually personal because so much of the work was done by the two of us. We removed siding, opened walls, reworked plumbing, addressed electrical, rebuilt surfaces and constructed two large decks. There were days when insulation, debris and evidence of years of animals living inside the walls seemed to fall on top of us faster than we could remove it. It was exhausting — and incredibly rewarding. The upper deck was designed around the lake views. Below it, we created a screened outdoor living space with a spa and recreation area that could be enjoyed through Big Bear's changing seasons.",
        ],
      },
      {
        heading: 'The mountain always gets a vote.',
        paragraphs: [
          'The original entry had been located on the second level. During redesign, the entry was repositioned. Then came an unusually heavy snowfall — and suddenly the reason for the old configuration became very clear. Fortunately, the new design protected the entrance well enough that access remained possible. But it was a perfect reminder: old houses often have reasons for being built the way they were, and mountain property will quickly expose anything you failed to consider.',
        ],
      },
      {
        heading: 'You see houses differently after you have opened the walls.',
        paragraphs: [
          'Sierra Chalet changed the way I look at renovation. Things that appear simple rarely are. Moving one element can affect five others. Materials behave differently in extreme climates. Older construction often contains both ingenious solutions and unexpected surprises. Most importantly, I gained enormous respect for the labor required to physically transform a property.',
        ],
      },
    ],
    stats: [
      { value: '10 months', label: 'Of hands-on work' },
      { value: '2', label: 'Large decks constructed' },
      { value: 'Lake views', label: 'The upper deck was designed around them' },
    ],
    photos: [
      { suggestion: 'Exterior after the rebuild, both decks complete' },
      { suggestion: 'Before: the rear deck we were told not to walk on' },
      { suggestion: 'Mid-renovation, walls open' },
      { suggestion: 'Upper deck with the lake view' },
      { suggestion: 'Screened lower deck with the spa' },
      { suggestion: 'The repositioned entry after a heavy snowfall' },
    ],
    cta: { label: 'Explore Big Bear Real Estate', href: '/big-bear' },
    seo: {
      title: 'Sierra Chalet Big Bear | David Weis',
      description:
        "Explore Sierra Chalet, a hands-on Big Bear cabin restoration that shaped David Weis' understanding of mountain construction, second-home ownership and vacation property operations.",
    },
  },
  {
    slug: 'mercury-palms',
    name: 'Mercury Palms',
    market: 'palm-springs',
    place: 'Palm Springs',
    kind: 'Private Residence + Hospitality',
    kindIndex: 'Private Residence + Vacation Home',
    summary:
      'A home with history, personality and enormous personal meaning that continues to evolve through restoration, ownership and hospitality.',
    intro: 'Some properties are investments. Some become part of your personal history. Mercury Palms is both.',
    sections: [
      {
        heading: 'A house that has lived many lives.',
        paragraphs: [
          'Mercury Palms has a long connection to Palm Springs history, including an early association with Mercury Records co-founder Irving Green and later members of the Milanovich family. By the time Mark acquired the property, much of its original personality had been lost. His renovation brought warmth and character back through stone, wood ceilings, expansive entertaining spaces and private bedroom suites that connect directly to the outdoors. Then it became part of our story.',
        ],
      },
      {
        heading: 'This is where our life happened.',
        paragraphs: [
          'It was one of the first homes Mark and I shared. It was where we spent much of COVID. It was where we married, surrounded by approximately 120 friends and family before continuing the celebration at The Cole. It has hosted friends, family and vacation guests. And like any house that is truly lived in, it continues to change.',
        ],
      },
      {
        heading: 'Even great homes need another chapter.',
        paragraphs: [
          'In 2025, we began another round of renovation — kitchen, backsplash, fixtures, walls, surfaces worn by years of use. At one point, we painted more than 4,200 square feet of interior space in roughly three days between our regular work responsibilities, with friends joining us in the evenings. Real houses get scuffed. Finishes wear. Preservation is not preventing a house from ever changing — it is caring enough to keep bringing it back.',
        ],
      },
      {
        heading: 'Real estate is never really finished.',
        paragraphs: [
          'Properties evolve with the people who own them. The right renovation today may need refreshing years from now. A personal residence may become a rental; a rental may become home again. The goal is not to freeze a property in time. The goal is to protect what makes it special while allowing it to continue living.',
        ],
      },
    ],
    stats: [
      { value: '4,200+', label: 'Square feet of interior painted' },
      { value: '3 days', label: 'To paint it, between work responsibilities' },
      { value: '~120', label: 'Friends and family at our wedding here' },
    ],
    photos: [
      { suggestion: 'Exterior with the stone and wood ceilings visible' },
      { suggestion: 'Entertaining space opening to the outdoors' },
      { suggestion: 'A bedroom suite connecting to the outdoors' },
      { suggestion: 'The 2025 kitchen renovation' },
      { suggestion: 'The house set for a gathering' },
    ],
    cta: { label: 'Explore Palm Springs Real Estate', href: '/palm-springs' },
    seo: {
      title: 'Mercury Palms Palm Springs | David Weis',
      description:
        'Explore Mercury Palms, a historic Palm Springs residence shaped by restoration, personal history, hospitality and years of evolving ownership.',
    },
  },
];

export function getProject(slug: string): Project {
  const p = projects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown project: ${slug}`);
  return p;
}

export function projectHref(p: Pick<Project, 'slug'>): string {
  return `/experience/${p.slug}`;
}

/** Home page, section 4: three featured projects in deck order. */
export const homeFeaturedProjects = ['querencia-palms', 'the-cole', 'vista-voltaire'] as const;

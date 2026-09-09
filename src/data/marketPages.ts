/**
 * Full content for the three market pages. Written in David's voice from the
 * facts he has given us; neighborhood notes are general descriptions for him
 * to edit. Photo slots carry a suggested subject so he can match his photos.
 */
import type { MarketSlug } from './site';

export interface MarketPageContent {
  slug: MarketSlug;
  heroPhoto: string;
  introTitle: string;
  intro: readonly string[];
  notesTitle: string;
  notes: readonly string[];
  neighborhoodsTitle: string;
  neighborhoodsLede: string;
  neighborhoods: readonly { name: string; text: string }[];
  help: readonly { label: string; title: string; text: string }[];
  gallery: readonly string[];
  faq: readonly { q: string; a: string }[];
  cta: { title: string; body: string };
}

export const marketPages: Record<MarketSlug, MarketPageContent> = {
  'san-diego': {
    slug: 'san-diego',
    heroPhoto: 'Wide coastal view, La Jolla Cove or Windansea in late-afternoon light',
    introTitle: 'Coast to Kensington',
    intro: [
      "I keep my office in La Jolla and my home in Kensington, and most weeks I'm somewhere in between: showing a condo in Pacific Beach, walking a canyon lot in Mission Hills, or checking on one of my own rentals. San Diego isn't one market. It's a chain of neighborhoods with their own price bands, rules and rhythms, and I work all of them.",
      "Owning and managing three short-term rentals here, in Mission Beach, Ocean Beach and Kensington, keeps me honest about what a property actually earns and costs. When I tell you a house pencils, it's because I've run the same numbers on my own.",
    ],
    notesTitle: 'What owning here has taught me',
    notes: [
      "The city's Short-Term Residential Occupancy program licenses rentals in tiers. Which tier a property can realistically get changes the math completely.",
      'Coastal condos carry HOA and insurance costs that vary building to building. I read the documents before you fall in love.',
      'Canyon and hillside lots deserve a geotechnical eye. Kensington taught me that.',
      'A 1031 exchange runs on hard deadlines. Start the conversation before you list, not after you close.',
    ],
    neighborhoodsTitle: 'Where I work',
    neighborhoodsLede: 'From the coast to the canyons, the neighborhoods I know as an owner, a neighbor and an agent.',
    neighborhoods: [
      { name: 'La Jolla', text: "The Village, the Shores, Bird Rock and the hills above them. Ocean-view estates, walkable condos and some of the county's highest prices per square foot." },
      { name: 'Kensington', text: 'My home neighborhood. Spanish and Craftsman homes on canyon streets, a small-town main street on Adams Avenue and a loyal community.' },
      { name: 'Mission Beach', text: 'Bay side and ocean side on one narrow strip. Duplexes, condos and vacation rentals with the boardwalk out the front door.' },
      { name: 'Ocean Beach', text: 'Laid-back, independent and close to everything. Bungalows, small multi-units and a beach town that never got polished.' },
      { name: 'Pacific Beach', text: 'Condos and cottages between the bay and the surf, popular with first-time buyers and rental investors alike.' },
      { name: 'Point Loma', text: 'Harbor views, mid-century homes on the hill and quieter streets a few minutes from downtown.' },
      { name: 'North Park & Metro', text: "Craftsman bungalows, walkable corridors and the city's best restaurants, with steady demand from move-up buyers." },
      { name: 'Coastal North County', text: 'Del Mar, Solana Beach, Encinitas and Carlsbad for buyers who want the coast with a little more room.' },
    ],
    help: [
      { label: 'Buyers', title: 'Coast or canyon', text: "Move-up buyers, second-home buyers and anyone weighing the coast against the neighborhoods. I'll tell you what a street is like at 7 a.m. and 11 p.m., not just at the open house." },
      { label: 'Sellers', title: 'Priced to the block', text: "Pricing that reflects the block, not the zip code, preparation that pays for itself, and marketing through Compass's network." },
      { label: 'Investors', title: 'Numbers I have run myself', text: "Short-term and long-term rental analysis, 1031 exchange timing and a clear read on San Diego's rental licensing." },
    ],
    gallery: ['Kensington streetscape or the Adams Avenue sign', 'Mission Beach boardwalk or the bay side', "Interior of one of David's rentals"],
    faq: [
      { q: 'Can I run a short-term rental in San Diego?', a: "Often, yes, but it depends on the license tier available for the property and how many nights you plan to rent. I hold licenses on my own rentals and can tell you what's realistic before you write an offer." },
      { q: 'Which neighborhoods hold value best?', a: "Coastal La Jolla and Point Loma have deep, steady demand; Kensington, North Park and Mission Hills draw buyers who want character and walkability. The right answer depends on whether you're buying to live, to rent or both." },
      { q: 'Do you work outside the coast?', a: "Yes. I work all of Greater San Diego, from Coastal North County to the metro neighborhoods, and I'll say plainly when a different area fits your budget better." },
      { q: 'How does a 1031 exchange work with San Diego property?', a: 'You sell one investment property and roll the proceeds into another within strict IRS deadlines to defer capital gains. I help clients line up the replacement property, often in Palm Springs or Big Bear, before the clock starts.' },
    ],
    cta: { title: 'Thinking about San Diego?', body: 'Coast, canyon or somewhere in between, start with an agent who owns and manages property here.' },
  },

  'palm-springs': {
    slug: 'palm-springs',
    heroPhoto: 'Mid-century home with the San Jacinto Mountains behind it, late afternoon',
    introTitle: 'Mid-century, luxury and vacation rentals',
    intro: [
      "Palm Springs is where I've done my most hands-on work: helping my husband bring Querencia Palms, a condo conversion, to market and sell out Phases I and II at full price; co-developing The Cole Hotel and running it as General Manager; and owning a six-bedroom vacation rental that I operate myself.",
      "I also show up for the city. I represent Vista Las Palmas at the monthly ONE-PS meetings, the Organized Neighborhoods of Palm Springs, serve on its Neighborhoods of Distinction Awards committee and the Vista Las Palmas Neighbors Foundation board, and belong to the Desert Business Association. That network is how I hear about homes before they list and rules before they change.",
    ],
    notesTitle: 'What owning here has taught me',
    notes: [
      'Palm Springs caps vacation rental permits by neighborhood, so availability changes street to street. Check before you offer, not after.',
      "Land lease versus fee simple matters here. I'll flag it on day one.",
      'Desert homes live or die on their HVAC, roof and pool equipment. Budget for them and inspect them hard.',
      "Selling out Querencia Palms taught me exactly what condo buyers here will and won't compromise on.",
    ],
    neighborhoodsTitle: 'Where I work',
    neighborhoodsLede: 'The neighborhoods I sit in meetings for, own in and sell in.',
    neighborhoods: [
      { name: 'Vista Las Palmas', text: 'My neighborhood. Alexander-built mid-century homes at the foot of the mountain, a recent ONE-PS Neighborhood of Distinction and some of the most photographed streets in the city.' },
      { name: 'Old Las Palmas', text: 'Estate lots, walls and hedges, and a celebrity history that still sets the tone for Palm Springs luxury.' },
      { name: 'Movie Colony', text: "Walkable to downtown, with Spanish and mid-century homes on quiet streets that once housed the studios' stars." },
      { name: 'Racquet Club Estates', text: 'Classic Alexander tract homes and butterfly roofs, a favorite for buyers restoring mid-century originals.' },
      { name: 'Deepwell Estates', text: 'Larger lots and ranch-style homes south of downtown, popular with full-time residents.' },
      { name: 'Twin Palms', text: 'Mid-century homes on generous lots with mountain views, named for the Sinatra estate.' },
      { name: 'Indian Canyons', text: 'Fairway lots and mountain views at the south end of town.' },
      { name: 'Sunrise Park & Central', text: 'Condos and smaller homes near the parks and the airport for buyers who want value and a short drive to everything.' },
    ],
    help: [
      { label: 'Buyers', title: 'Original, remodel or compound', text: 'Second-home and full-time buyers who want a mid-century original, a turnkey remodel or a compound with rental potential.' },
      { label: 'Sellers', title: 'Presented for design buyers', text: 'I know what design-driven buyers pay for here and how to present a home to them, from staging to twilight photography.' },
      { label: 'Investors', title: 'Permits, conversions, hotels', text: "Vacation rental permits, condo conversions and small hotels. I've done all three and I'll tell you where the real returns are." },
    ],
    gallery: ['Querencia Palms exterior or courtyard', 'The Cole Hotel pool', 'A Vista Las Palmas street with the mountain behind it'],
    faq: [
      { q: 'Can I buy a vacation rental in Palm Springs?', a: 'Yes, but permits are capped by neighborhood and some areas are full. I own a permitted rental and can confirm availability for a specific address before you write.' },
      { q: 'What is the difference between fee simple and land lease?', a: 'Some Palm Springs homes sit on leased tribal land with an annual lease payment and an end date. It affects financing and value, so I flag it on every property we look at.' },
      { q: 'Is mid-century the only style that sells?', a: "No, but it's the style buyers travel for. Spanish, ranch and contemporary homes all sell well when they're priced and presented for the right audience." },
      { q: 'What is ONE-PS?', a: "The Organized Neighborhoods of Palm Springs, the city's coordinating body for its recognized neighborhood organizations. I represent Vista Las Palmas at its monthly meetings, which keeps me close to what's changing in the city." },
    ],
    cta: { title: 'Thinking about Palm Springs?', body: 'Mid-century original, vacation rental or something bigger, start with someone who has developed, operated and sold here.' },
  },

  'big-bear': {
    slug: 'big-bear',
    heroPhoto: 'Lake view with cabins in the pines, or Big Bear Mountain Resort in early snow',
    introTitle: 'Cabins, second homes and rental strategy',
    intro: [
      "Our cabin near Big Bear Mountain Resort was the first home I ever bought on my own. I went through the first-time buyer process here, then my husband and I rebuilt the place ourselves. I know what mountain ownership involves in February and in July, and I've since helped cabin sellers here get a great price.",
      "Big Bear is a second-home market with a rental market layered on top, and the two don't always agree. I stay close to local vacation rental owners, so you get a current read on demand, rules and what actually books.",
    ],
    notesTitle: 'What owning here has taught me',
    notes: [
      'Big Bear Lake and Big Bear City have different short-term rental rules. The city line matters.',
      'Snow load, septic and water systems are the inspections that matter here. Rebuilding our cabin taught me that.',
      'Winter and summer are two different rental seasons. Plan for both.',
      "A cabin that's easy to reach in a storm is worth more than the listing photos suggest.",
    ],
    neighborhoodsTitle: 'Where I work',
    neighborhoodsLede: 'The valley from the ski slopes to the north shore, as an owner who has driven it in every season.',
    neighborhoods: [
      { name: 'Moonridge', text: 'Closest to Big Bear Mountain Resort and the zoo. Ski convenience and strong winter rental demand.' },
      { name: 'Fox Farm', text: 'Central, level lots and quick access to the Village and the lake. Popular with full-time residents.' },
      { name: 'Boulder Bay', text: 'Granite boulders, lakefront cabins and the postcard view of the lake.' },
      { name: 'Eagle Point & Lakefront', text: 'Gated lakefront and lake-view homes at the top of the market.' },
      { name: 'Big Bear City', text: 'Unincorporated county land east of the city, with more space and different short-term rental rules.' },
      { name: 'Sugarloaf', text: 'Classic small cabins and value buys at the east end of the valley.' },
      { name: 'Fawnskin', text: 'The quiet north shore. Older cabins, forest lots and a slower pace.' },
      { name: 'Castle Glen', text: 'Larger custom homes on the hill above the lake.' },
    ],
    help: [
      { label: 'Buyers', title: 'A cabin that works for you first', text: 'First-time buyers, second-home buyers and families who want a cabin that works for them first and rents second.' },
      { label: 'Sellers', title: 'An honest price, a clean escrow', text: "Cabin sellers who want an honest price, buyers who show up ready and a clean escrow. I've done it for clients here." },
      { label: 'Investors', title: 'Projections from real owners', text: "Rental projections built on what local owners are actually seeing, not on a listing's brochure." },
    ],
    gallery: ["David's cabin exterior after the rebuild", 'Cabin interior, fireplace or living room', 'Big Bear Mountain Resort slopes'],
    faq: [
      { q: 'Can I rent out a Big Bear cabin short-term?', a: "Usually, with a permit. The City of Big Bear Lake runs its own vacation rental program, and unincorporated Big Bear City follows San Bernardino County rules. I'll confirm which applies to a specific cabin." },
      { q: 'Is Big Bear a good first home?', a: "It was mine. Prices are lower than the coast or the desert, and a well-chosen cabin can carry part of its cost through rental income. I'll walk you through the process the way I wish someone had for me." },
      { q: 'What should I inspect on a mountain cabin?', a: "Roof and snow load, foundation and drainage, septic or sewer, water lines, heating and the road in. I check them all because I've rebuilt every one of them." },
      { q: 'How far is Big Bear from San Diego and Palm Springs?', a: 'Roughly three hours from San Diego and about two from Palm Springs, which is exactly why my clients often own in more than one of my markets.' },
    ],
    cta: { title: 'Thinking about Big Bear?', body: 'First cabin, second home or rental, start with an agent who bought, rebuilt and still owns here.' },
  },
};

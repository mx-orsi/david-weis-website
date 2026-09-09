/**
 * Projects page content. Facts about Querencia Palms and The Cole Hotel come
 * from their public sites and David's emails; photo entries are placeholder
 * suggestions until David supplies images.
 */
export interface Project {
  slug: string;
  name: string;
  market: string;
  kind: string;
  role: string;
  summary: string;
  body: readonly string[];
  facts: readonly { label: string; value: string }[];
  results?: readonly { value: string; label: string }[];
  link?: { label: string; href: string };
  logo?: { src: string; alt: string; width: number; height: number };
  photos: readonly string[];
  featured?: boolean;
}

export const projects: readonly Project[] = [
  {
    slug: 'querencia-palms',
    name: 'Querencia Palms',
    market: 'Palm Springs',
    kind: 'Condo conversion',
    role: 'Development and sales, with my husband',
    summary:
      'A 1966 apartment building in Tahquitz River Estates, reborn as a gated boutique condominium community with a resort pool, a koi pond and mountain views.',
    body: [
      'Querencia is the Spanish word for the place where you feel most at home, and that was the brief: take a tired 1966 apartment building on East San Lorenzo Road and turn it into a community people would be proud to own in. I helped my husband carry the project from conversion through sales, and I handled the listings through Compass.',
      'Phases I and II sold out. Every one of the eight escrows opened at a full-price offer, six units have closed, and the first unit in Phase III went into escrow at full ask. One-bedroom residences round out the final phase.',
    ],
    facts: [
      { label: 'Location', value: '588 E San Lorenzo Rd, South Palm Springs' },
      { label: 'Origin', value: '1966 apartment building, fully renovated' },
      { label: 'Amenities', value: 'Beach-entry pool and spa, three fire pits, outdoor kitchen, koi pond, dog wash, gated covered parking' },
      { label: 'Ownership', value: 'Fee-simple condominiums with a rental-friendly HOA' },
    ],
    results: [
      { value: '2', label: 'Phases sold out' },
      { value: '8 of 8', label: 'Escrows opened at full price' },
      { value: '6', label: 'Units closed' },
      { value: 'Full ask', label: 'First Phase III unit in escrow' },
    ],
    link: { label: 'Visit querenciapalms.com', href: 'https://www.querenciapalms.com/' },
    logo: { src: '/images/querencia-palms-logo.png', alt: 'Querencia Palms logo: two palm trees over colorful bands with the tagline Love where you live', width: 800, height: 626 },
    photos: ['Pool, spa and courtyard', 'A finished two-bedroom interior', 'Koi pond at the entry', 'Mountain view from a private patio'],
    featured: true,
  },
  {
    slug: 'the-cole-hotel',
    name: 'The Cole Hotel',
    market: 'Palm Springs',
    kind: 'Boutique hotel',
    role: 'Co-developer and General Manager',
    summary: 'A 1959 Hugh Kaptur hotel restored as a 30-room, adults-only mid-century retreat with a pool, restaurant and bar.',
    body: [
      'The Cole started life in 1959 as a Hugh Kaptur design and had lost most of its charm by the time we took it on. My husband and I co-developed the restoration, and I ran the hotel as General Manager: hiring, operations, guest experience, the works.',
      'It earned five-star ratings across every platform. Running a hotel teaches you what buyers of vacation property never see on a listing: what a night actually costs to deliver, and what guests will pay for.',
    ],
    facts: [
      { label: 'Rooms', value: '30, adults only' },
      { label: 'Built', value: '1959, architect Hugh Kaptur' },
      { label: 'Amenities', value: 'Pool, hot tub, restaurant and bar, outdoor fireplace' },
    ],
    results: [
      { value: '30', label: 'Rooms, adults only' },
      { value: '1959', label: 'Hugh Kaptur original' },
      { value: '5-star', label: 'Ratings across every platform' },
      { value: 'GM', label: 'Ran day-to-day operations' },
    ],
    link: { label: 'Visit thecolehotel.com', href: 'https://www.thecolehotel.com/' },
    logo: { src: '/images/the-cole-hotel-logo.svg', alt: 'The Cole Hotel logo', width: 211, height: 86 },
    photos: ['Pool at dusk', 'Exterior with the Kaptur roofline', 'Guest room', 'Bar or restaurant'],
  },
  {
    slug: 'palm-springs-vacation-rental',
    name: 'Six-bedroom vacation rental',
    market: 'Palm Springs',
    kind: 'Short-term rental',
    role: 'Owner and operator',
    summary: 'A permitted six-bedroom vacation home I own and operate, booked through Celebrity Vacation Homes.',
    body: [
      'Six bedrooms is a different business from a two-bedroom condo: bigger groups, longer stays, more moving parts. Running it myself keeps me current on Palm Springs permit rules, what guests book and what a house like this actually nets.',
    ],
    facts: [
      { label: 'Bedrooms', value: 'Six' },
      { label: 'Bookings', value: 'Celebrity Vacation Homes, independent of Compass' },
    ],
    results: [
      { value: '6', label: 'Bedrooms' },
      { value: 'Permitted', label: 'Palm Springs vacation rental' },
      { value: 'Owner-run', label: 'Operated by me' },
      { value: 'Booked', label: 'Through Celebrity Vacation Homes' },
    ],
    link: { label: 'See the rentals', href: 'https://celebrityvacationhomes.com' },
    photos: ['Exterior with the pool', 'Great room', 'Primary bedroom', 'Outdoor dining at dusk'],
  },
  {
    slug: 'big-bear-cabin',
    name: 'Big Bear cabin rebuild',
    market: 'Big Bear Lake',
    kind: 'Personal cabin',
    role: 'First-time buyer, then owner-builder with my husband',
    summary: 'The first home I bought on my own, near Big Bear Mountain Resort, rebuilt by my husband and me.',
    body: [
      "I bought this cabin as a first-time buyer, which means I've sat on the nervous side of the table too. Then we rebuilt it: roof, systems, interiors. Every inspection item I warn clients about, I've paid for myself.",
      "It stays personal-use, and it keeps me close to the local vacation rental owners who tell me what's really booking.",
    ],
    facts: [
      { label: 'Location', value: 'Near Big Bear Mountain Resort' },
      { label: 'Use', value: 'Personal cabin' },
      { label: 'Scope', value: 'Full rebuild' },
    ],
    results: [
      { value: '1st', label: 'Home I bought on my own' },
      { value: 'Full', label: 'Rebuild, roof to systems' },
      { value: 'Resort', label: 'Near Big Bear Mountain Resort' },
      { value: 'Personal', label: 'Use, not rented' },
    ],
    photos: ['Exterior after the rebuild', 'Before the rebuild', 'Living room with the fireplace', 'Deck with the mountain view'],
  },
  {
    slug: 'san-diego-rentals',
    name: 'San Diego short-term rentals',
    market: 'San Diego',
    kind: 'Three short-term rentals',
    role: 'Owner and operator',
    summary: 'Three licensed rentals in Mission Beach, Ocean Beach and Kensington, managed through Celebrity Vacation Homes.',
    body: [
      'Three neighborhoods, three very different guests. Mission Beach books for the boardwalk, Ocean Beach for the vibe, Kensington for people who want a real neighborhood. Owning all three is the best market research I have.',
    ],
    facts: [
      { label: 'Locations', value: 'Mission Beach, Ocean Beach, Kensington' },
      { label: 'Licensing', value: 'City of San Diego Short-Term Residential Occupancy program' },
      { label: 'Bookings', value: 'Celebrity Vacation Homes, independent of Compass' },
    ],
    results: [
      { value: '3', label: 'Neighborhoods' },
      { value: 'Licensed', label: 'City of San Diego STRO program' },
      { value: 'Owner-run', label: 'Managed by me' },
      { value: 'Booked', label: 'Through Celebrity Vacation Homes' },
    ],
    link: { label: 'See the rentals', href: 'https://celebrityvacationhomes.com' },
    photos: ['Mission Beach boardwalk', 'Mission Beach rental', 'Ocean Beach rental', 'Kensington rental'],
  },
];

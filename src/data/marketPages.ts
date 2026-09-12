/**
 * Market page content (San Diego, Palm Springs, Big Bear), from the approved
 * copy deck. Rendered by src/components/MarketPage.astro. Featured projects
 * reference slugs in projects.ts so the cards stay in sync.
 */
import type { MarketSlug } from './site';
import type { Photo } from './types';

export interface MarketSection {
  heading: string;
  paragraphs: readonly string[];
}

export interface Area {
  name: string;
  text: string;
}

export interface MarketPageContent {
  slug: MarketSlug;
  eyebrow: string;
  title: string;
  intro: string;
  sections: readonly MarketSection[];
  /** Image break shown between the sections */
  photo: Photo;
  /** Featured areas (San Diego only in the deck) */
  areas?: { title: string; items: readonly Area[] };
  /** Slugs from projects.ts */
  featuredProjects: readonly string[];
  featuredTitle: string;
  seo: { title: string; description: string };
}

export const marketPages: Record<MarketSlug, MarketPageContent> = {
  'san-diego': {
    slug: 'san-diego',
    eyebrow: 'Markets',
    title: 'San Diego',
    intro:
      'San Diego is where much of my adult life was built. It is where I developed my career, bought and renovated property, built friendships and learned firsthand how dramatically real estate can change from neighborhood to neighborhood.',
    sections: [
      {
        heading: 'One city. Completely different markets.',
        paragraphs: [
          'San Diego resists simple generalizations. A historic home in Kensington behaves differently from a coastal investment property in Mission Beach. Ocean Beach has different buyers than La Jolla. A condominium downtown requires a different strategy from a single-family home miles away. That is why I approach this market neighborhood by neighborhood and property by property rather than trying to make one strategy fit everything.',
        ],
      },
      {
        heading: 'My San Diego experience',
        paragraphs: [
          'My connection to San Diego goes well beyond transactions. I have owned homes here, renovated them, operated vacation rentals, managed investment decisions and worked with buyers and sellers — and experienced firsthand the financial and emotional questions that come with deciding whether a property should be kept, improved, rented or sold. That ownership perspective affects the advice I give my clients every day.',
        ],
      },
    ],
    photo: { suggestion: 'Kensington streetscape, or the Mission Beach boardwalk' },
    areas: {
      title: 'Featured areas',
      items: [
        { name: 'Kensington', text: "Historic architecture, strong neighborhood identity and some of San Diego's most character-rich homes." },
        { name: 'Mission Beach', text: 'A highly specialized coastal market where lifestyle, vacation rental potential, parking, location and long-term ownership strategy all matter.' },
        { name: 'Ocean Beach', text: 'An eclectic coastal community where redevelopment pressure and preservation often exist side by side.' },
        { name: 'La Jolla', text: "One of San Diego's most established coastal markets, with extraordinary variety in architecture, location and price." },
        { name: 'Greater San Diego', text: 'My business is not limited to those neighborhoods. I represent clients throughout the region based on their goals and the property itself.' },
      ],
    },
    featuredProjects: ['vista-voltaire', 'kensington-canyon', 'belmont-beach-house'],
    featuredTitle: 'Featured experience',
    seo: {
      title: 'San Diego Real Estate | David Weis',
      description:
        'Explore San Diego real estate with Broker Associate David Weis, bringing firsthand ownership, renovation and investment experience to buyers and sellers throughout the region.',
    },
  },

  'palm-springs': {
    slug: 'palm-springs',
    eyebrow: 'Markets',
    title: 'Palm Springs',
    intro:
      'Palm Springs became much more than a second market for me. It became home, community and one of the places that most shaped the way I understand real estate.',
    sections: [
      {
        heading: 'I came for a relationship. I stayed for the city.',
        paragraphs: [
          'I originally moved from San Diego to Palm Springs because constantly traveling between the two cities was becoming impossible. What followed was a completely different chapter: banking, hospitality, hotel operations, vacation rentals, development projects, community involvement and real estate. Palm Springs became the place where many of those experiences finally came together.',
        ],
      },
      {
        heading: 'Real estate here is personal.',
        paragraphs: [
          'Palm Springs has an unusually emotional real estate market. Architecture, views, land ownership, neighborhood identity, outdoor space, history and lifestyle all matter tremendously. Buyers are often purchasing much more than a house — they are purchasing an idea of what life here could feel like. Sellers need to understand that too. Presentation and storytelling can matter every bit as much as the comparable sales.',
        ],
      },
      {
        heading: 'My Palm Springs experience',
        paragraphs: [
          'My Palm Springs background includes operating The Cole Hotel, selling and marketing the Querencia Palms condominium conversion, owning and operating vacation property, renovating residences and representing traditional buyers and sellers. Those experiences have placed me on nearly every side of a Palm Springs property decision. That is exactly why I enjoy this market so much.',
        ],
      },
    ],
    photo: { suggestion: 'A Palm Springs street with the San Jacinto Mountains behind it' },
    featuredProjects: ['querencia-palms', 'the-cole', 'mercury-palms'],
    featuredTitle: 'Featured experience',
    seo: {
      title: 'Palm Springs Real Estate | David Weis',
      description:
        'Palm Springs Broker Associate David Weis represents buyers and sellers with experience spanning residential real estate, hospitality, condominium conversion, vacation rentals and property ownership.',
    },
  },

  'big-bear': {
    slug: 'big-bear',
    eyebrow: 'Markets',
    title: 'Big Bear',
    intro: 'Big Bear started as a place to escape the desert. Then we bought a cabin. And everything changed.',
    sections: [
      {
        heading: 'Mountain real estate plays by different rules.',
        paragraphs: [
          'Owning property in Big Bear quickly teaches you that mountain homes require a completely different mindset: snow load, access, heating, decks, drainage, utilities, seasonality, vacation demand and maintenance when you are hours away. A beautiful cabin can still become an operational headache if those realities are ignored.',
        ],
      },
      {
        heading: 'I learned it by doing it.',
        paragraphs: [
          'Sierra Chalet became my first truly hands-on major renovation. For approximately ten months, Mark and I rebuilt significant portions of the property ourselves. That experience gave me a level of respect for mountain construction and ownership that is impossible to get from simply touring homes. Today, Big Bear is part of both my personal life and real estate business.',
        ],
      },
      {
        heading: 'Second home. Investment. Escape. Sometimes all three.',
        paragraphs: [
          'Big Bear buyers often want a property to serve several purposes: personal use, family memories, rental income, long-term investment. Finding the right property means understanding how those priorities fit together before closing, not after. That is the conversation I enjoy having with clients.',
        ],
      },
    ],
    photo: { suggestion: 'Big Bear Lake from the north shore, or the cabin in early snow' },
    featuredProjects: ['sierra-chalet'],
    featuredTitle: 'Featured experience',
    seo: {
      title: 'Big Bear Real Estate | David Weis',
      description:
        'Explore Big Bear real estate with Broker Associate David Weis, combining firsthand mountain-home ownership, renovation and vacation property experience with strategic buyer and seller representation.',
    },
  },
};

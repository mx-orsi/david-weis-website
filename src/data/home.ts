/** Home page copy, from the approved deck. Sections are short by design; full stories live on interior pages. */
import type { Cta } from './types';

export const home = {
  seo: {
    title: 'David Weis | Broker Associate | San Diego, Palm Springs & Big Bear',
    description:
      'David Weis is a Compass Broker Associate representing buyers and sellers across San Diego, Palm Springs and Big Bear, with firsthand experience in ownership, investment, renovation, hospitality and vacation rental operations.',
  },
  hero: {
    eyebrow: 'San Diego · Palm Springs · Big Bear',
    title: 'Real estate, from every side.',
    body:
      'I have bought it, sold it, renovated it, operated it, rented it, marketed it and lived in it. Today, I bring that firsthand perspective to buyers, sellers and property owners across San Diego, Palm Springs and Big Bear.',
    primary: { label: 'Work With David', href: '/contact' } as Cta,
    secondary: { label: 'Explore My Experience', href: '/experience' } as Cta,
  },
  transaction: {
    title: 'More than a transaction.',
    paragraphs: [
      'Real estate looks different when you have experienced it from the other side of the table. I have been the homeowner preparing to sell, the buyer trying to see potential, the investor watching a market change, the operator trying to make an asset perform, and the owner deciding whether the right answer is to sell, renovate, rent or simply wait.',
      'My job is not to push every situation toward a transaction. It is to understand the property, the market and what you are actually trying to accomplish, then help you make the strongest decision from there.',
    ],
    cta: { label: 'Meet David', href: '/about' } as Cta,
  },
  markets: {
    title: 'Three markets. Three different ways of life.',
    intro:
      'My business follows the places that became part of my own life. I own, operate, work and spend significant time across San Diego, Palm Springs and Big Bear. Each market behaves differently, attracts a different buyer and demands a different strategy.',
  },
  experience: {
    title: 'Experience is built.',
    intro:
      'Some of the most valuable lessons I bring to real estate never came from a classroom. They came from projects where the plan stopped working and the strategy had to change. These are some of the properties that shaped the way I work today.',
    cta: { label: 'Explore My Experience', href: '/experience' } as Cta,
  },
  moves: {
    title: '50+ moves. 16 schools. One unexpected advantage.',
    body:
      'I grew up moving constantly — more than 50 moves and 16 schools. It taught me how to walk into a place where I knew no one, build relationships quickly, and adapt when everything changed. Most importantly, it taught me that home is deeply personal. That perspective follows me into every transaction.',
    cta: { label: 'My Story', href: '/about' } as Cta,
  },
  ownership: {
    title: 'Ownership changes your perspective.',
    body:
      'Since 2018, real estate ownership has been part of my everyday life — homes renovated, operated as vacation rentals, used personally, repositioned when markets changed, and sold when the timing was right. That experience has made me especially comfortable with the questions that do not have an obvious answer:',
    questions: [
      'Should we renovate before selling?',
      'Keep the property and rent it?',
      'Is the problem the price, or the presentation?',
    ],
    closing: 'That is where experience matters.',
    photo: { suggestion: 'David on site at one of the projects, for example on the Sierra Chalet deck or in the Querencia Palms courtyard' },
  },
  strategy: {
    title: 'Property is personal. Strategy should be too.',
    body:
      'Whether you are buying your first home, selling a property you have owned for decades, purchasing a second home or deciding what to do with an investment, I approach the conversation the same way. First, understand the goal. Then build the strategy.',
    cta: { label: 'Start a Conversation', href: '/contact' } as Cta,
  },
} as const;

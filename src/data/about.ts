/** About page copy, from the approved deck. */
import type { Cta, Photo, Stat } from './types';

export interface AboutSection {
  heading: string;
  paragraphs: readonly string[];
}

export const about = {
  seo: {
    title: 'About David Weis | California Broker Associate',
    description:
      'Meet David Weis, a California Broker Associate whose background spans real estate, finance, hospitality, property ownership, renovation and investment across San Diego, Palm Springs and Big Bear.',
  },
  hero: {
    eyebrow: 'About David',
    title: 'A life built around moving, people and property.',
    intro:
      'My path into real estate was not particularly traditional. But looking back, almost everything I did before becoming a Broker Associate prepared me for it. Finance taught me to understand numbers. Hospitality taught me service. Operations taught me systems. Renovation taught me to look beyond what a property appears to be today. Ownership taught me risk. And moving more than 50 times taught me that home means something different to everyone.',
  },
  stats: [
    { value: '50+', label: 'Moves' },
    { value: '16', label: 'Schools' },
    { value: '3', label: 'Markets: San Diego, Palm Springs, Big Bear' },
  ] as readonly Stat[],
  moving: {
    heading: 'Moving was my normal.',
    paragraphs: [
      'I grew up as the youngest of five and moved more than 50 times, attending 16 different schools along the way. When I was younger, I did not see any advantage in that. Starting over repeatedly meant learning new schools, new towns and new people. Eventually, though, adaptation became second nature. I learned how to connect with people quickly, how to stay in touch after leaving and how important relationships become when geography constantly changes. Years later, those experiences became an unexpected foundation for a career built almost entirely around people, places and major life transitions.',
    ],
  } as AboutSection,
  building: {
    heading: 'I have always liked building something.',
    paragraphs: [
      'As a kid, that usually meant finding ways to make money. I collected recyclables from neighbors, washed cars and used a riding lawn mower with a trailer to take on whatever projects I could convince someone to pay me for. The scale has changed; the instinct has not. I still enjoy finding an opportunity, understanding how something works and figuring out how to make it better.',
    ],
  } as AboutSection,
  career: {
    heading: 'A career that eventually made sense.',
    intro: 'Before real estate became my career, I worked across an unusually broad mix of industries. Each one left something behind.',
    chapters: [
      {
        title: 'Finance + Operations',
        text: "My professional background includes payroll, human resources and banking. I worked as a payroll practitioner at UC San Diego, later became a payroll manager in biotechnology and eventually joined Chase as a Personal Banker in Palm Springs, where I completed extensive financial training and securities and insurance licensing. The experience gave me a deep respect for accuracy, systems, documentation and the responsibility that comes with decisions involving other people's money.",
      },
      {
        title: 'Hospitality',
        text: 'Hospitality entered my life early. One of my first jobs was cleaning hotel rooms at a Holiday Inn in Oregon. Years later, I found myself opening and managing a boutique hotel in Palm Springs. That experience gave me tremendous respect for every person behind an operation and reinforced something I still believe today: the smallest details often determine the entire experience.',
      },
      {
        title: 'Entrepreneurship',
        text: 'Along the way, I also managed valet operations, launched a Palm Springs branch for a San Diego valet company and continually looked for ways to make unused space, time or resources productive. Those experiences taught me to look at real estate differently. A property is not simply a structure — it can be a home, an investment, a business, a liability or an opportunity. Sometimes several at once.',
      },
    ],
  },
  cole: {
    heading: 'The Cole changed everything.',
    paragraphs: [
      'When my husband, Mark, completed the transformation of what became The Cole Hotel in Palm Springs, the original plan was to sell the property. The market had other ideas. Rather than wait indefinitely, we decided to operate it. I left banking and took responsibility for opening and managing the hotel.',
      'Neither of us fully understood how much work that decision would create. Rooms had to be furnished, a bar and restaurant needed systems, staff had to be hired and trained, procedures written, marketing launched. Then, ten days after opening, COVID-19 forced Palm Springs hotels to shut down.',
      'The pause became an opportunity. We rebuilt processes, refined training and prepared for an entirely different hospitality environment. When the hotel reopened, we became obsessive about service, communication, cleanliness and experience. The Cole ultimately became a five-star-rated property across its major guest platforms and was later leased to Sonder.',
      'That experience fundamentally changed how I think about property. A beautiful building gets someone\'s attention. How it is operated determines whether it succeeds.',
    ],
    cta: { label: 'Read The Cole story', href: '/experience/the-cole' } as Cta,
    photo: {
      suggestion: 'The Cole Hotel sign against palms and sky',
      src: '/images/the-cole/the-cole-palm-springs-pool-desert-oasis-david-weis.jpg',
      alt: 'The Cole Hotel roadside sign in yellow, orange and turquoise, with tall palms behind it against a clear sky',
      width: 1511,
      height: 2400,
      hasSmall: true,
      position: 'center 70%',
    } as Photo,
  },
  license: {
    heading: 'Then real estate made sense.',
    paragraphs: [
      'After years of studying on and off, I finally earned my California real estate license. Suddenly, everything connected — finance, marketing, hospitality, construction, operations, negotiation, ownership, community, relationships. They were no longer unrelated chapters; they became the skill set I use every day.',
      'I later continued my education and earned my California Broker license, becoming a Broker Associate with Compass. For me, that step was important. I wanted my clients and colleagues to know that I was serious about this profession and intended to build a career in it for the long term.',
    ],
  } as AboutSection,
  today: {
    heading: 'Today',
    paragraphs: [
      'Today, my real estate business spans San Diego, Palm Springs and Big Bear. Alongside traditional buyer and seller representation, my experience continues through personal ownership, renovation projects, investment properties and Celebrity Vacation Homes, our short-term rental portfolio. No two properties behave exactly alike. No two clients have exactly the same goal. And I still find that the most interesting part of real estate begins when the obvious answer is not necessarily the right one.',
    ],
  } as AboutSection,
  community: {
    heading: 'Community matters.',
    paragraphs: [
      'Moving so frequently taught me early that community does not simply happen — you participate in it. Today, I stay actively involved in organizations and causes that connect me to the places where I live and work, including Gay For Good, the Village of La Jolla Garden Club and neighborhood organizations in Palm Springs. Real estate gave me another reason to become deeply connected to these communities. It was never the only reason.',
    ],
    photo: {
      suggestion: 'David with the Gay For Good volunteers',
      src: '/images/community/david-weis-gay-for-good-volunteers.jpg',
      alt: 'David Weis with fellow Gay For Good volunteers at a community service event',
      hasSmall: true,
    } as Photo,
    /**
     * Community gallery, from David's 2026-09-15 email. Files go in
     * public/images/community/ under these names; captions are his words.
     */
    gallery: [
      {
        photo: { suggestion: 'Victory Fund, Palm Springs: David with Karine Jean-Pierre and Senator Toni G. Atkins', src: '/images/community/david-weis-victory-fund-palm-springs-karine-jean-pierre-toni-atkins.jpg', alt: 'David Weis at a Victory Fund event in Palm Springs with Karine Jean-Pierre and Senator Toni G. Atkins', hasSmall: true },
        caption: { title: 'Victory Fund · Palm Springs', note: 'With Karine Jean-Pierre, former White House Press Secretary, and Senator Toni G. Atkins, California Senate President pro Tempore Emeritus' },
      },
      {
        photo: { suggestion: 'Victory Fund, San Diego: David with Mayor Todd Gloria', src: '/images/community/david-weis-victory-fund-san-diego-mayor-todd-gloria.jpg', alt: 'David Weis at a Victory Fund event in San Diego with Mayor Todd Gloria', hasSmall: true },
        caption: { title: 'Victory Fund · San Diego', note: 'With San Diego Mayor Todd Gloria' },
      },
      {
        photo: { suggestion: 'Front Runners, Palm Springs and San Diego', src: '/images/community/david-weis-front-runners-palm-springs-san-diego.jpg', alt: 'David Weis with the Front Runners running club', hasSmall: true },
        caption: { title: 'Front Runners', note: 'Palm Springs and San Diego' },
      },
      {
        photo: { suggestion: 'Desert Business Association', src: '/images/community/david-weis-desert-business-association-palm-springs.jpg', alt: 'David Weis at a Desert Business Association gathering in Palm Springs', hasSmall: true },
        caption: { title: 'Desert Business Association' },
      },
      {
        photo: { suggestion: 'Vista Las Palmas / ONE-PS Neighborhood of Distinction Award', src: '/images/community/david-weis-vista-las-palmas-one-ps-neighborhood-of-distinction-award.jpg', alt: 'David Weis at the ONE-PS Neighborhood of Distinction Award presentation for Vista Las Palmas', hasSmall: true },
        caption: { title: 'Vista Las Palmas · ONE-PS', note: 'Neighborhood of Distinction Award' },
      },
      {
        photo: { suggestion: 'Modernism Week docent training for volunteers at Querencia Palms', src: '/images/community/david-weis-modernism-week-docent-training-querencia-palms.jpg', alt: 'Modernism Week docent training for volunteers held at Querencia Palms', hasSmall: true },
        caption: { title: 'Modernism Week', note: 'Docent training for volunteers at Querencia Palms' },
      },
    ] as readonly { photo: Photo; caption: { title: string; note?: string } }[],
  },
  portrait: {
    suggestion: 'David at the Querencia Palms mural, among the lantana',
    src: '/images/querencia-landscaping/querencia-palms-david-weis-realtor-mural-palm-springs.jpg',
    alt: 'David Weis standing in front of the Querencia Palms mural in Palm Springs, surrounded by orange and yellow lantana in bloom',
    width: 2048,
    height: 1365,
    hasSmall: true,
    position: 'center 38%',
  } as Photo,
  closing: {
    title: "Let's talk about what you're trying to do.",
    body: 'You do not need to know exactly what the next move is before reaching out. Sometimes that is the conversation we need to have first.',
    cta: { label: 'Contact David', href: '/contact' } as Cta,
  },
} as const;

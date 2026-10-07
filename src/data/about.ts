/**
 * About page copy, from David's 2026-09-16 brief. The page runs PageHero →
 * StatRow → chapter A (Chapter.astro) → the career grid → chapter B → the
 * live Testimonials band → a closing section with two CTAs. `aboutChapterA`
 * and `aboutChapterB` are plain ProjectChapter objects (see projects.ts):
 * they exist so the career grid can sit between two runs of chapter blocks
 * without a second component. `after` is not read when a chapter is handed
 * straight to <Chapter>, only when ProjectPage places one automatically.
 */
import type { ProjectChapter } from './projects';
import type { Cta, Photo, Stat } from './types';

/** Spread into a `sub` story block to open it as a full-width band (read by Chapter.astro; kept out of projects.ts's type). */
const band = { band: true } as const;

export const about = {
  seo: {
    title: 'About David Weis | California Broker Associate',
    description:
      'Meet David Weis, a California Broker Associate whose background spans real estate, finance, hospitality, property ownership, renovation and investment across San Diego, Palm Springs and Big Bear.',
  },
  hero: {
    eyebrow: 'About David',
    title: 'Real estate made sense once everything else came together.',
    intro:
      'My path into real estate was not particularly traditional. Before becoming a Broker Associate, I worked in hospitality, payroll, human resources, banking, operations, property management, and small-business ownership. I have renovated homes, operated a hotel, managed vacation rentals, worked alongside development projects, and owned property in the same markets where I now represent clients. Looking back, none of those experiences were unrelated. They became the way I understand real estate today.',
  },
  stats: [
    { value: '50+', label: 'Moves' },
    { value: '16', label: 'Schools' },
    { value: '3', label: 'Markets: San Diego, Palm Springs, Big Bear' },
  ] as readonly Stat[],
  career: {
    eyebrow: 'The experience before real estate',
    heading: 'A career that eventually made sense.',
    items: [
      {
        title: 'Finance + systems',
        paragraphs: [
          'My professional background includes payroll, human resources, and banking.',
          'I worked as a payroll practitioner at UC San Diego, later became a payroll manager in biotechnology, and eventually joined Chase as a Personal Banker in Palm Springs.',
          'Along the way, I completed securities and insurance licensing and spent years working in environments where accuracy, documentation, and responsibility with other people’s money mattered every day.',
          'That experience still shapes the way I approach contracts, numbers, risk, and major financial decisions.',
        ],
      },
      {
        title: 'Hospitality',
        paragraphs: [
          'One of my earliest jobs was cleaning hotel rooms. Years later, I found myself opening and managing a boutique hotel.',
          'Running The Cole in Palm Springs taught me more about service than almost anything else I have done.',
          'A guest may never know how many processes, people, and small decisions went into making their experience feel effortless. They only know how they felt.',
          'I think real estate works the same way.',
        ],
      },
      {
        title: 'Ownership + operations',
        paragraphs: [
          'Since 2018, I have owned and operated investment property across Southern California.',
          'Homes have been renovated. Rented. Used personally. Converted into vacation rentals. Repositioned when markets changed. And sometimes held when selling was no longer the best answer.',
          'That experience makes me especially comfortable with property decisions that do not fit neatly into “buy” or “sell.”',
        ],
      },
      {
        title: 'Renovation + development',
        paragraphs: [
          'Working alongside my husband, Mark, has given me another view of real estate entirely.',
          'Mark is a licensed contractor and developer. Together, we have lived through renovations, hospitality projects, a condominium conversion, vacation-rental operations, and more construction dust than I ever expected to encounter.',
          'Some projects were highly hands-on. Others involved contractors, designers, specialists, and teams.',
          'Every one of them taught me something different about what is behind the finished photograph.',
        ],
      },
    ] as readonly { title: string; paragraphs: readonly string[] }[],
  },
  closing: {
    eyebrow: 'Today',
    title: 'Real estate, from every side.',
    paragraphs: [
      'Today, I am a Broker Associate with Compass representing buyers and sellers across San Diego, Palm Springs, and Big Bear. But I still approach the work from all the other perspectives that came first.',
      'Owner. Seller. Buyer. Investor. Operator. Renovator. Neighbor. Volunteer. Someone who has changed plans when a market changed. Someone who knows how much emotion can be tied to a property. And someone who will probably notice the detail everyone else walked past.',
      'That is the experience I bring to my clients. Not simply knowing how to complete a transaction. Understanding what it feels like to live through one.',
    ],
    cta: { label: 'Work With David', href: '/contact' } as Cta,
    ctaSecondary: { label: 'Explore My Experience', href: '/experience' } as Cta,
  },
} as const;

/** Chapter A: the personal story, up through the career-grid intro line. */
export const aboutChapterA: ProjectChapter = {
  id: 'about-a',
  after: -1,
  blocks: [
    {
      type: 'story',
      eyebrow: 'Where it started',
      heading: '50+ moves. 16 schools. One unexpected advantage.',
      paragraphs: [
        'Growing up, moving was normal. I moved more than 50 times and attended 16 different schools.',
        'For a long time, I saw that mostly as instability. As an adult, I realized how much it taught me.',
        'I learned how to walk into a place where I knew no one. How to build relationships quickly. How to stay connected after leaving. How to adapt when everything familiar suddenly changed.',
        'And, maybe most importantly, I learned that home means something different to everyone.',
        'Today, I work in a profession built around exactly those things: people, places, transitions, and the decisions that come with starting another chapter.',
      ],
    },
    {
      type: 'callout',
      text: 'Home has never felt like just an address to me.',
    },
    {
      type: 'story',
      eyebrow: 'Always building something',
      heading: 'I have always liked figuring out how things work.',
      paragraphs: [
        'As a kid, that usually meant figuring out how to make money.',
        'I collected recyclables from neighbors, washed cars, and used a riding lawn mower with a trailer and attachments to take on whatever work I could convince someone to pay me for.',
        'The scale has changed. The instinct has not.',
        'I still enjoy finding an opportunity, understanding the problem, and figuring out how to make something work better.',
        'That pattern followed me through almost every job I had before real estate.',
      ],
    },
    {
      type: 'photo',
      photo: {
        suggestion: 'David beside the Querencia Palms mural: QUERENCIA PALMS, LOVE WHERE YOU LIVE',
        src: '/images/about/david-weis-querencia-palms-mural-love-where-you-live.jpg',
        alt: 'David Weis standing at the right of the Querencia Palms mural, its lettering and the words Love Where You Live beside him',
        width: 2048,
        height: 1352,
        hasSmall: true,
      } as Photo,
      ratio: '3 / 2',
    },
  ],
};

/**
 * Chapter B: everything from The Cole through the closing thought on the work
 * trucks. Copy, captions and photo order follow David's 2026-09-21 notes.
 */
export const aboutChapterB: ProjectChapter = {
  id: 'about-b',
  after: -1,
  blocks: [
    {
      type: 'story',
      eyebrow: 'The project that changed everything',
      heading: 'A hotel was never part of the plan.',
      paragraphs: [
        'When Mark completed the transformation of what became The Cole Hotel in Palm Springs, the original plan was to sell it. The market had other ideas. So we decided to operate it.',
        'I left banking and became the hotel’s General Manager. We opened. Ten days later, COVID shut Palm Springs hotels down.',
        'That chapter became an accelerated education in operations, hospitality, staffing, marketing, food and beverage, guest recovery, events, and building a brand from the ground up.',
        'The Cole ultimately became much more than a property to me. It became the place where I learned how much the experience surrounding real estate can matter.',
      ],
    },
    {
      type: 'gallery',
      label: 'The Cole',
      photos: [
        { suggestion: 'The Cole Hotel - Mark and I before', src: '/images/about/david-weis-mark-the-cole-before.jpg', alt: 'David and Mark Weis at The Cole Hotel property before its renovation', width: 2400, height: 2038, hasSmall: true },
        {
          suggestion: 'The Cole Hotel sign against palms and sky',
          src: '/images/the-cole/the-cole-hotel-roadside-sign-palm-springs-david-weis.jpg',
          alt: 'The Cole Hotel roadside sign in yellow, orange and turquoise, with tall palms behind it against a clear sky',
          width: 1511,
          height: 2400,
          hasSmall: true,
          position: 'center 70%',
        },
        { suggestion: 'The Cole Hotel - Mark and I when sold', src: '/images/about/david-weis-mark-the-cole-when-sold.jpg', alt: 'David and Mark Weis at The Cole Hotel on the day it sold', width: 2053, height: 2303, hasSmall: true },
        { suggestion: 'Our wedding reception at The Cole', src: '/images/about/david-weis-mark-wedding-the-cole.jpg', alt: 'David and Mark Weis at their wedding reception, held at The Cole Hotel in Palm Springs', width: 2400, height: 1600, hasSmall: true },
      ],
      captions: [{ title: 'Before The Cole became The Cole' }, { title: 'The sign that became the brand' }, { title: 'The day we closed the chapter' }, { title: 'Our wedding reception at The Cole' }],
    },
    {
      type: 'cta',
      label: 'Explore The Cole story',
      href: '/experience/the-cole',
    },
    {
      type: 'story',
      eyebrow: 'Then it clicked',
      heading: 'Real estate became the place where everything connected.',
      paragraphs: [
        'Finance. Marketing. Hospitality. Operations. Construction. Property ownership. Relationships. Community.',
        'Once I earned my real estate license, all of those experiences finally had somewhere to meet.',
        'I later continued my education and earned my California Broker license, becoming a Broker Associate with Compass. That was important to me. I wanted my clients and colleagues to know that this was not a temporary career experiment. I intended to build something for the long term.',
        'Today, I represent buyers and sellers across San Diego, Palm Springs, and Big Bear while continuing to own, operate, renovate, and learn from property myself.',
      ],
    },
    {
      type: 'pair',
      ratio: '1 / 1',
      photos: [
        { suggestion: 'First Listing', src: '/images/about/david-weis-first-listing.jpg', alt: 'David Weis at the sign for his first real estate listing', width: 1170, height: 1555, hasSmall: true, position: 'center 40%' },
        { suggestion: 'Broker caravan', src: '/images/about/david-weis-broker-caravan.jpg', alt: 'David Weis presenting a listing at a broker caravan', width: 1206, height: 1193, hasSmall: true },
      ],
      captions: [{ title: 'First listing' }, { title: 'Creating maximum exposure for my listings' }],
    },
    {
      type: 'story',
      eyebrow: 'Learning to show up',
      heading: 'Sometimes you say yes before you feel ready.',
      paragraphs: [
        'Early in my real estate career, I attended REALTOR® Legislative Day in Sacramento with my mom, who was also a REALTOR® at the time.',
        'As a brand-new agent, I somehow found myself presenting a bill to Assemblymember Chris Ward in front of members of the San Diego Association of REALTORS® leadership.',
        'I was terrified. I did it anyway.',
        'That experience became another reminder that growth usually happens somewhere just beyond comfortable.',
      ],
    },
    {
      type: 'pair',
      ratio: '1 / 1',
      photos: [
        {
          suggestion: 'Mom and I at Legislative Day Sacramento - 2023',
          src: '/images/about/david-weis-mom-legislative-day-sacramento-2023.jpg',
          alt: 'David Weis with his mother at REALTOR® Legislative Day in Sacramento, 2023',
          width: 2400,
          height: 2400,
          hasSmall: true,
        },
        {
          suggestion: 'Legislative Day 2023, with Assemblymember Chris Ward',
          src: '/images/about/david-weis-legislative-day-sacramento-2023.jpg',
          alt: 'David Weis with California State Assemblymember Chris Ward at REALTOR® Legislative Day in Sacramento, 2023',
          width: 1170,
          height: 1163,
          hasSmall: true,
        },
      ],
      captions: [
        { title: 'My first Legislative Day', note: 'Sacramento · 2023 · With my mom, a licensed real estate agent' },
        { title: 'Legislative Day, Sacramento – 2023', note: 'California State Assemblymember Chris Ward, representing part of San Diego County.' },
      ],
    },
    {
      type: 'story',
      eyebrow: 'Where I live + work',
      heading: 'Three markets that became part of my life.',
      paragraphs: [
        'San Diego, Palm Springs, and Big Bear are not territories on a sales map for me.',
        'Each entered my life for a different reason. Each taught me something different. And each became home in its own way.',
      ],
    },
    {
      type: 'story',
      sub: true,
      ...band,
      heading: 'San Diego',
      paragraphs: [
        'San Diego became the place where I built much of my adult life. My career grew here. My friendships grew here.',
        'I bought property here, renovated here, volunteered here, joined organizations here, and learned how dramatically one neighborhood can differ from another only a few miles away.',
      ],
    },
    {
      type: 'gallery',
      label: 'San Diego',
      photos: [
        { suggestion: 'Front Runners, San Diego', src: '/images/community/david-weis-front-runners-san-diego-02.jpg', alt: 'The Front Runners running group gathered on the grass in San Diego', width: 1170, height: 1147, hasSmall: true },
        { suggestion: 'Boating in San Diego', src: '/images/about/david-weis-boating-san-diego.jpg', alt: 'David Weis boating on the water in San Diego', width: 1600, height: 1600, hasSmall: true },
        { suggestion: 'Beach sunset with the dog', src: '/images/about/david-weis-beach-sunset-dog.jpg', alt: 'David Weis’s dog silhouetted on the beach at sunset', width: 1800, height: 2400, hasSmall: true },
      ],
      captions: [
        { title: 'Friendships that started with a run', note: 'San Diego Front Runners' },
        { title: 'Saying yes to San Diego', note: 'Building friendships through all the ridiculous possibilities this city gives us.' },
        { title: 'The moments worth remembering', note: 'Sunsets, beach walks, and the people I love most.' },
      ],
    },
    {
      type: 'story',
      sub: true,
      ...band,
      heading: 'Palm Springs',
      paragraphs: [
        'Palm Springs started with a relationship and became a completely different chapter.',
        'Banking led to hospitality. Hospitality led to deeper involvement in local design and architecture. The Cole taught me the business side of development, from working with the City and navigating ABC licensing to permits, fees, infrastructure, and all the details that happen behind the scenes.',
        'It also pulled me deeper into Palm Springs design, architecture, and community. Querencia Palms took that connection even further.',
        'And somewhere along the way, Palm Springs stopped being somewhere I drove to. It became home.',
      ],
    },
    {
      type: 'gallery',
      label: 'Palm Springs',
      photos: [
        { suggestion: 'Vista Las Palmas fall social', src: '/images/community/david-weis-vista-las-palmas-fall-social-palm-springs.jpg', alt: 'David Weis, Mark and neighbors at a Vista Las Palmas fall social gathering beside a lit pool at night', width: 2335, height: 2400, hasSmall: true },
        { suggestion: 'A Palm Springs bike ride', src: '/images/about/david-weis-palm-springs-bike-ride.jpg', alt: 'David and Mark Weis with their bikes in front of the Elvis Honeymoon Hideaway in Palm Springs', width: 2400, height: 1800, hasSmall: true },
        { suggestion: 'Front Runners, Palm Springs', src: '/images/community/david-weis-front-runners-palm-springs.jpg', alt: 'The Front Runners running group posing together outdoors in Palm Springs, mountains and palm trees behind them', width: 1206, height: 825, hasSmall: true },
      ],
      captions: [
        { title: 'Showing up for the neighborhood', note: 'Vista Las Palmas community social' },
        { title: 'Modernism adventures', note: 'Biking through the neighborhood past the Elvis Honeymoon Hideaway' },
        { title: 'Friendships that started with a run', note: 'Palm Springs Front Runners' },
      ],
    },
    {
      type: 'story',
      sub: true,
      ...band,
      heading: 'Big Bear',
      paragraphs: [
        'Big Bear began as an escape. Fresh air, snow, mountain trails, lake days, and a place where life moved differently.',
        'Then we bought a cabin. Rebuilding Sierra Chalet made the mountains part of our real-estate story too.',
        'Today, Big Bear is somewhere we work, own, celebrate Fourth of July, hike, snowboard, host friends, and apparently run Turkey Trots in weather cold enough to make me question every life decision that brought me to the starting line.',
      ],
    },
    {
      type: 'gallery',
      label: 'Big Bear',
      photos: [
        { suggestion: 'Sybil’s first mountain hike', src: '/images/about/david-weis-big-bear-hiking-overlook.jpg', alt: 'David and Mark Weis with their dog Sybil at a hiking overlook above Big Bear Lake', width: 2400, height: 1978, hasSmall: true },
        { suggestion: 'The Big Bear Turkey Trot', src: '/images/about/david-weis-big-bear-turkey-trot.jpg', alt: 'David and Mark Weis bundled up at the Big Bear Turkey Trot', width: 1440, height: 1440, hasSmall: true },
        { suggestion: 'Snowboarding in Big Bear', src: '/images/about/david-weis-big-bear-snowboarding.jpg', alt: 'Three friends in helmets on the snow in Big Bear', width: 1800, height: 2400, hasSmall: true },
      ],
      captions: [
        { title: 'Sybil’s first mountain hike', note: 'Apparently four legs did not make the climb any easier.' },
        { title: 'The coldest turkey trot ever', note: 'Freezing, windy, uphill, and somehow we still came back smiling.' },
        { title: 'Days on the mountain', note: 'New friends, new neighbors, and one more reason Big Bear started feeling like home.' },
      ],
    },
    {
      type: 'story',
      eyebrow: 'Community',
      heading: 'I have never been very good at just joining something.',
      paragraphs: [
        'I tend to get involved. Sometimes that means volunteering. Sometimes it means joining a committee. Sometimes it means arriving at 7:30 in the morning to help set up a Garden Club meeting that does not end until 1:00.',
        'Community has always mattered to me, partly because I spent so much of my childhood arriving somewhere new.',
        'As an adult, I learned that belonging is not something you simply find. You help create it.',
      ],
    },
    {
      // 2026-10-05: the full Gay for Good story moved to /gay-for-good; About keeps David's card.
      type: 'teaser',
      eyebrow: 'Gay for Good',
      heading: 'Three years of showing up.',
      paragraphs: [
        'I joined Gay for Good looking for a more meaningful way to volunteer and meet people in San Diego. My first project was helping prime 20 Habitat for Humanity playhouses. Not long after, I became a Chapter Leader and spent roughly three years helping connect volunteers with organizations and causes throughout the region.',
      ],
      cta: { label: 'Read the story', href: '/gay-for-good' },
      photo: { suggestion: 'The Habitat for Humanity playhouse group photo', src: '/images/gay-for-good/gay-for-good-san-diego-habitat-for-humanity-playhouses-first-project-david-weis.jpg', alt: 'Gay for Good volunteers kneeling and standing together at the Habitat for Humanity playhouse build in San Diego, David Weis among them', width: 1170, height: 766, hasSmall: true },
      ratio: '3 / 2',
      side: 'left',
    },
    {
      // 2026-10-05: the full Garden Club story moved to /garden-club; About keeps a short card (teaser copy drafted, for David's review).
      type: 'teaser',
      eyebrow: 'Village Garden Club of La Jolla',
      heading: 'Finding something just for me.',
      paragraphs: [
        'I joined because I wanted to finally understand why our landscaping kept dying. What I found was a community, a creative outlet and an enormous amount of practical knowledge, plus a hat competition, 1,500 ladybugs and a floral arrangement I am still a little proud of.',
      ],
      cta: { label: 'Read the story', href: '/garden-club' },
      photo: { suggestion: 'Garden Club May Luncheon Hat Competition', src: '/images/about/david-weis-garden-club-hat-competition.jpg', alt: 'David Weis wearing the flower-covered hat and holding a bouquet at the Village Garden Club of La Jolla’s hat competition', width: 1800, height: 2400, hasSmall: true, position: 'center 30%' },
      ratio: '4 / 3',
    },
    {
      type: 'story',
      eyebrow: 'Vista Las Palmas + ONE-PS',
      heading: 'The neighborhood I call home.',
      paragraphs: [
        'In Palm Springs, my community involvement became even more local.',
        'I serve on the board of the Vista Las Palmas Neighbors Foundation and have enjoyed helping with neighborhood events, communication, and projects designed to make it easier for neighbors to stay connected.',
        'Being part of ONE-PS and seeing Vista Las Palmas recognized as a Neighborhood of Distinction made that involvement especially meaningful.',
        'It is one thing to sell real estate in a neighborhood. It is another to help care about what happens there after the closing.',
      ],
    },
    {
      type: 'gallery',
      label: 'Vista Las Palmas',
      photos: [
        {
          suggestion: 'The award presentation',
          src: '/images/community/david-weis-one-ps-neighborhood-of-distinction-award-palm-springs.jpg',
          alt: 'David Weis on stage at the ONE-PS awards as the Neighborhood of Distinction Award is presented',
          width: 2400,
          height: 1996,
          hasSmall: true,
        },
        {
          suggestion: 'The Neighborhood of Distinction Award',
          src: '/images/community/vista-las-palmas-neighborhood-of-distinction-award-david-weis.jpg',
          alt: 'The ONE-PS Neighborhood of Distinction Award for Vista Las Palmas, a crystal trophy set beside a pool with the mountains behind',
          width: 1800,
          height: 2400,
          hasSmall: true,
        },
        { suggestion: 'Vista Las Palmas neighborhood event', src: '/images/about/david-weis-vista-las-palmas-neighborhood-event.jpg', alt: 'Neighbors gathered at a spa with the mountains behind them at a Vista Las Palmas neighborhood event', width: 1206, height: 1568, hasSmall: true },
      ],
      captions: [{ title: 'ONE-PS', note: 'Neighborhood of Distinction Award' }, { title: 'The award' }, { title: 'Annual traditions' }],
    },
    {
      type: 'story',
      eyebrow: 'Community',
      heading: 'Sometimes community is just showing up.',
      paragraphs: [
        'Not every connection in my life began through work or volunteering.',
        'I run with Front Runners in both San Diego and Palm Springs. I played Pride Sports kickball. I have attended OUT Professionals events. I volunteered behind the scenes for the Red Dress Party promotional video.',
        'Some of these things became long-term commitments. Others were just incredibly fun chapters. All of them introduced me to people I would not have met otherwise.',
        'That matters to me.',
      ],
    },
    {
      type: 'pair',
      ratio: '4 / 3',
      photos: [
        { suggestion: 'Front Runners, San Diego', src: '/images/community/david-weis-front-runners-san-diego-02.jpg', alt: 'The Front Runners running group gathered on the grass in San Diego', width: 1170, height: 1147, hasSmall: true },
        { suggestion: 'Front Runners, Palm Springs', src: '/images/community/david-weis-front-runners-palm-springs.jpg', alt: 'The Front Runners running group posing together outdoors in Palm Springs, mountains and palm trees behind them', width: 1206, height: 825, hasSmall: true },
      ],
      captions: [{ title: 'Front Runners San Diego' }, { title: 'Front Runners Palm Springs' }],
    },
    {
      type: 'gallery',
      label: 'Community',
      photos: [
        { suggestion: 'Pride Sports kickball', src: '/images/about/david-weis-pride-sports-kickball.jpg', alt: 'David Weis and his team taking a selfie on the Pride Sports kickball field', width: 1179, height: 884, hasSmall: true },
        { suggestion: 'Red Dress Party volunteer', src: '/images/about/david-weis-red-dress-party-volunteer.jpg', alt: 'The Red Dress Party video crew and performers', width: 1035, height: 712, hasSmall: true },
        { suggestion: 'OUT Professionals', src: '/images/about/david-weis-out-professionals.jpg', alt: 'David Weis talking with two others at an OUT Professionals mixer', width: 821, height: 744 },
      ],
      captions: [{ title: 'Pride Sports kickball' }, { title: 'Red Dress Party' }, { title: 'OUT Professionals' }],
    },
    {
      type: 'story',
      eyebrow: 'Design + architecture',
      heading: 'The more I learn, the more I notice.',
      paragraphs: [
        'Working on The Cole and later Querencia Palms introduced me to a side of Palm Springs I already appreciated but had never experienced this closely.',
        'Designers, architecture, preservation, landscaping, materials, and the tiny decisions that determine whether a space feels right.',
        'H3K became an important design relationship through The Cole and the early stages of Querencia Palms.',
        'Supporting their work at Modernism Week, touring projects like Limón, and continuing that relationship has made Palm Springs design feel less like something I admire from the outside and more like a community I’ve been fortunate to learn from.',
        'Their Wine + Design events have become a must, and now their new showroom sits right across the street from my Compass office in Palm Desert, which somehow feels fitting.',
      ],
    },
    {
      type: 'pair',
      ratio: '1 / 1',
      align: 'left',
      photos: [
        { suggestion: 'With Mark at Limón, Modernism Week 2025', src: '/images/about/david-weis-mark-h3k-property.jpg', alt: 'David and Mark Weis at the yellow front door of Limón, an H3K design project in Palm Springs', width: 1800, height: 2400, hasSmall: true, position: 'center 42%' },
        { suggestion: 'David at the Limón pool', src: '/images/about/h3k-pool-courtyard-palm-springs-david-weis.jpg', alt: 'David Weis beside the pool at Limón, an H3K design project in Palm Springs', width: 2400, height: 1800, hasSmall: true, position: '68% center' },
      ],
      caption: { title: 'Modernism Week Tour 2025: Limón', note: 'An H3K design project' },
    },
    {
      type: 'pair',
      ratio: '1 / 1',
      align: 'right',
      photos: [
        { suggestion: 'White tile at The Marquee at Twin Palms', src: '/images/about/h3k-marquee-twin-palms-white-tile-david-weis.jpg', alt: 'A wall of white three-dimensional tile at The Marquee at Twin Palms, an H3K design project in Palm Springs', width: 1800, height: 2400, hasSmall: true },
        { suggestion: 'With Mark in front of The Marquee at Twin Palms', src: '/images/about/david-weis-mark-h3k-marquee-twin-palms-modernism-week-2025.jpg', alt: 'David and Mark Weis on the walkway in front of The Marquee at Twin Palms, its pink breeze-block wall beside them, during Modernism Week', width: 1206, height: 1051, position: 'center 45%' },
      ],
      caption: { title: 'Modernism Week Tour 2025: The Marquee at Twin Palms', note: 'An H3K design project' },
    },
    {
      type: 'pair',
      ratio: '4 / 5',
      photos: [
        { suggestion: 'Mark, Kathy and I as Modernism Week docents', src: '/images/about/david-weis-modernism-week-kathy.jpg', alt: 'David, Mark and Kathy in matching Vista Las Palmas shirts as volunteer docents during Modernism Week in Palm Springs', width: 1800, height: 2400, hasSmall: true, position: 'center 35%' },
        { suggestion: 'Docents in front of the pool with the mountains behind', src: '/images/about/modernism-week-vista-las-palmas-docents-pool-david-weis.jpg', alt: 'Four volunteer docents standing in front of a pool in Vista Las Palmas, with palms and the San Jacinto Mountains behind them', width: 1800, height: 2400, hasSmall: true, position: 'center 60%' },
      ],
      caption: { title: 'Vista Las Palmas Modernism Week 2026', note: 'Volunteer docents. Helping neighbors share their homes. Spending time with new friends.' },
    },
    {
      // 2026-10-05: the holiday section moved to /holiday-tradition; About keeps David's teaser.
      type: 'teaser',
      eyebrow: 'A holiday tradition',
      heading: 'Christmas has never been subtle.',
      paragraphs: [
        'Mark had already been hosting his annual holiday party and toy fundraiser for years before we met. I grew up in a family where Christmas meant tens of thousands of lights, weeks of preparation and a house people drove across town to see.',
        'When our lives came together, apparently neither of us was destined for a quiet Christmas.',
        'Today, it is one of our favorite traditions to continue together, with friends filling the house, toys piling up, creative projects that somehow get more elaborate every year and another chapter of our life becoming part of the holidays.',
      ],
      cta: { label: 'Explore our holiday tradition', href: '/holiday-tradition' },
      photo: { suggestion: 'Guests holding donated toys at the party', src: '/images/about/holiday-party-portrait-david-weis.jpg', alt: 'Guests holding donated toys at David and Mark Weis’s annual holiday fundraiser party', width: 2400, height: 1999, hasSmall: true, position: 'center 30%' },
      ratio: '4 / 3',
      side: 'left',
    },
    {
      type: 'story',
      eyebrow: 'Outside the office',
      heading: 'The places I sell are also the places I live.',
      paragraphs: [
        'A lot of my life happens in the same places where I work.',
        'Bike rides through Palm Springs. Boating in San Diego. Hiking in Big Bear. Coachella. Snowboarding. Beach sunsets. Neighborhood events. Dinner with friends.',
        'That overlap is one of the things I love most about this career. I do not have to manufacture enthusiasm for these places. They are already part of my life.',
      ],
    },
    {
      type: 'pair',
      ratio: '4 / 5',
      photos: [
        { suggestion: 'Horseback riding', src: '/images/about/david-weis-horseback-riding.jpg', alt: 'Two riders on horseback on a dry hillside trail', width: 1800, height: 2400, hasSmall: true },
        { suggestion: 'Hiking on the rocks, Big Bear', src: '/images/about/david-weis-big-bear-hiking-rocks.jpg', alt: 'David Weis standing on boulders above the forest in Big Bear', width: 1206, height: 1480, hasSmall: true, position: 'center top' },
      ],
    },
    {
      type: 'collage',
      columns: [
        [
          { suggestion: 'Coachella', src: '/images/about/david-weis-coachella.jpg', alt: 'David Weis at Coachella at dusk with the Ferris wheel behind', width: 1206, height: 903, hasSmall: true },
          {
            suggestion: 'The dogs at the door',
            src: '/images/sierra-chalet/sierra-chalet-big-bear-mountain-retreat-david-weis.jpg',
            alt: 'Two dogs at the glass door at Sierra Chalet, looking out at yellow chairs on the snowy deck',
            width: 1536,
            height: 2048,
            hasSmall: true,
            position: 'center 40%',
          },
        ],
        [
          { suggestion: 'Dog party, San Diego', src: '/images/about/david-weis-dog-party-san-diego.jpg', alt: 'Friends and their dogs on a patio at a San Diego dog party', width: 1078, height: 873, hasSmall: true },
        ],
      ],
      fill: 'second',
      ratio: '3 / 2',
      emphasis: 'second',
    },
    {
      // 2026-10-05: the full truck story moved to /work-truck; About keeps David's teaser.
      type: 'teaser',
      eyebrow: 'Tools of the trade',
      heading: 'I could have bought another car I wanted. I bought the truck I needed.',
      paragraphs: [
        'Working across San Diego, Palm Springs and Big Bear eventually meant a lot more than mileage.',
        'Tires. Maintenance. Rock chips. Property supplies. Signs. Dump runs. And years of treating luxury SUVs like pickup trucks.',
        'As my business grew and I became more intentional about separating business expenses from our personal vehicles, it was finally time for a dedicated work vehicle.',
        'There were plenty of EVs I wanted.',
        'But with five cars already in the garage, the practical answer was obvious.',
        'We needed the truck back.',
      ],
      cta: { label: 'Why I finally bought the work truck', href: '/work-truck' },
      photo: { suggestion: 'The GMC Sierra EV in the drive at Sierra Chalet', src: '/images/about/david-weis-gmc-sierra-ev.jpg', alt: 'The white GMC Sierra EV parked in the drive below Sierra Chalet, pines behind', width: 2400, height: 1800, hasSmall: true, position: 'center 60%' },
      ratio: '4 / 3',
    },
  ],
};

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
        suggestion: 'David at the Querencia Palms mural, among the lantana',
        src: '/images/querencia-landscaping/querencia-palms-david-weis-realtor-mural-palm-springs.jpg',
        alt: 'David Weis standing in front of the Querencia Palms mural in Palm Springs, surrounded by orange and yellow lantana in bloom',
        width: 2048,
        height: 1365,
        hasSmall: true,
        position: 'center 38%',
      } as Photo,
      ratio: '21 / 9',
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
          src: '/images/the-cole/the-cole-palm-springs-pool-desert-oasis-david-weis.jpg',
          alt: 'The Cole Hotel roadside sign in yellow, orange and turquoise, with tall palms behind it against a clear sky',
          width: 1511,
          height: 2400,
          hasSmall: true,
          position: 'center 70%',
        },
        { suggestion: 'The Cole Hotel - Mark and I when sold', src: '/images/about/david-weis-mark-the-cole-when-sold.jpg', alt: 'David and Mark Weis at The Cole Hotel on the day it sold', width: 2053, height: 2303, hasSmall: true },
        { suggestion: 'Our wedding reception at The Cole', src: '/images/about/david-weis-mark-wedding-the-cole.jpg', alt: 'David and Mark Weis at their wedding reception, held at The Cole Hotel in Palm Springs', width: 2400, height: 1600, hasSmall: true },
      ],
      captions: [{ title: 'Before' }, { title: 'The Cole' }, { title: 'The day it sold' }, { title: 'Our wedding reception at The Cole' }],
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
      captions: [{ title: 'First listing' }],
    },
    {
      type: 'story',
      eyebrow: 'Learning to show up',
      heading: 'Sometimes you say yes before you feel ready.',
      paragraphs: [
        'Early in my real estate career, I attended REALTOR® Legislative Day in Sacramento with my mom, who is also a REALTOR®.',
        'As a brand-new agent, I somehow found myself presenting a bill, the More Homes on the Market Act, to Assemblymember Chris Ward in front of members of the San Diego Association of REALTORS® leadership.',
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
        { title: 'With my mom', note: 'Legislative Day, Sacramento – 2023' },
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
        { suggestion: 'Beach sunset with the dog', src: '/images/about/david-weis-beach-sunset-dog.jpg', alt: 'David Weis with his dog on the beach at sunset', width: 1800, height: 2400, hasSmall: true },
      ],
    },
    {
      type: 'story',
      sub: true,
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
    },
    {
      type: 'story',
      sub: true,
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
        { title: 'Sybil’s first mountain hike' },
        { title: 'Turkey Trot', note: 'The coldest, windiest Turkey Trot I have ever agreed to.' },
        { title: 'Snowboarding', note: 'New friends, new neighbors, and plenty of days on the mountain together.' },
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
      type: 'story',
      eyebrow: 'Gay For Good',
      heading: 'Service + leadership.',
      paragraphs: [
        'I found Gay For Good while looking for a way to volunteer and quickly became a chapter leader in San Diego.',
        'For three years, the organization introduced me to nonprofits, volunteers, and communities throughout the region. The best part was always the same: people showing up to do something useful together.',
        'Over time, I had the opportunity to represent the chapter at community events, accept recognition on its behalf, and eventually host a national Gay For Good fundraiser at Querencia Palms.',
      ],
    },
    {
      type: 'gallery',
      label: 'Gay For Good',
      photos: [
        { suggestion: 'Salvation Army holiday toy sorting', src: '/images/community/david-weis-gay-for-good-volunteer-san-diego-03.jpg', alt: 'Gay For Good volunteers with Santa at the Salvation Army holiday toy sorting', width: 1206, height: 777, hasSmall: true },
        { suggestion: 'Gay For Good Hillcrest Honors', src: '/images/about/david-weis-gay-for-good-hillcrest-honors.jpg', alt: 'David Weis and another honoree on the red carpet at the Hillcrest Honors awards', width: 797, height: 1165, position: 'center 12%' },
        { suggestion: 'Gay For Good Equality California gala', src: '/images/about/david-weis-gay-for-good-equality-california-gala.jpg', alt: 'David Weis with a friend at the Equality California gala', width: 1012, height: 1554, hasSmall: true, position: 'center top' },
      ],
      captions: [{ title: 'Salvation Army holiday toy sorting' }, { title: 'Hillcrest Honors' }, { title: 'Equality California gala' }],
    },
    {
      type: 'story',
      eyebrow: 'Village Garden Club of La Jolla',
      heading: 'A hobby that got serious quickly.',
      paragraphs: [
        'I joined the Village Garden Club of La Jolla because I wanted something fun that had nothing to do with real estate.',
        'One thing I’ve learned about joining something new is to get involved early. Volunteer for something, show up, help out, and you start meeting people naturally.',
        'So I did. I volunteered on the setup committee, helped at check-in, attended nearly every workshop, arranged refreshment tables, and made rosemary simple syrup for the holiday pantry.',
        'For an April program with The Posy Book author Teresa Sabankaya, I designed the refreshment table arrangement to mirror the theme of her presentation, sourcing the flowers from Cork & Stem in Hillcrest, a local flower shop and wine bar.',
        'Then came the annual hat competition. I built what can only be described as a pollinator ecosystem for my head. It won Best UV Protection. And yes, it ended up in the newspaper.',
        'The Garden Club has become one of my favorite parts of life in San Diego. It unexpectedly changed the way I looked at the landscaping at Querencia Palms, too. Somewhere along the way, I became completely invested in learning about plants.',
      ],
    },
    {
      type: 'pair',
      ratio: '4 / 5',
      photos: [
        { suggestion: 'Garden Club May Luncheon Hat Competition', src: '/images/about/david-weis-garden-club-hat-competition.jpg', alt: 'David Weis wearing the flower-covered hat and holding a bouquet at the Village Garden Club of La Jolla’s hat competition', width: 1800, height: 2400, hasSmall: true },
        { suggestion: 'Rosemary simple syrup', src: '/images/about/david-weis-garden-club-rosemary-syrup.jpg', alt: 'Bottles of rosemary simple syrup made for the Village Garden Club of La Jolla holiday pantry sale', width: 1800, height: 2400, hasSmall: true },
      ],
      captions: [
        { title: 'Best UV Protection', note: 'May Luncheon Hat Competition' },
        { title: 'Rosemary simple syrup', note: 'Holiday Pantry Sale' },
      ],
    },
    {
      type: 'pair',
      ratio: '4 / 3',
      photos: [
        { suggestion: 'La Jolla Light coverage', src: '/images/about/david-weis-garden-club-la-jolla-light.jpg', alt: 'The La Jolla Light photo of the Village Garden Club hat contest: six members in flowered hats, David among them holding a bouquet', width: 890, height: 699, hasSmall: true },
        { suggestion: 'April refreshment table flower arrangement (in David’s Drive, not downloaded yet)', src: '/images/about/david-weis-garden-club-april-refreshment-table-arrangement.jpg', alt: 'The refreshment table flower arrangement David designed for the Village Garden Club’s April program with The Posy Book author Teresa Sabankaya' },
      ],
      captions: [
        { title: 'Winners of May Luncheon Hat Competition', note: 'Featured in the La Jolla Light' },
        { title: 'April refreshment table', note: 'The Posy Book program with Teresa Sabankaya' },
      ],
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
        { suggestion: 'With Mark at Limón, Modernism Week 2024', src: '/images/about/david-weis-mark-h3k-property.jpg', alt: 'David and Mark Weis at the yellow front door of Limón, an H3K design project in Palm Springs', width: 1800, height: 2400, hasSmall: true, position: 'center 42%' },
        { suggestion: 'David at the Limón pool', src: '/images/about/h3k-pool-courtyard-palm-springs.jpg', alt: 'David Weis beside the pool at Limón, an H3K design project in Palm Springs', width: 2400, height: 1800, hasSmall: true, position: '68% center' },
      ],
      caption: { title: 'Modernism Week Tour 2024: Limón', note: 'An H3K design project' },
    },
    {
      type: 'pair',
      ratio: '1 / 1',
      align: 'right',
      photos: [
        { suggestion: 'White tile at The Marquee at Twin Palms', src: '/images/about/h3k-marquee-twin-palms-white-tile.jpg', alt: 'A wall of white three-dimensional tile at The Marquee at Twin Palms, an H3K design project in Palm Springs', width: 1800, height: 2400, hasSmall: true },
        { suggestion: 'With Mark in front of The Marquee at Twin Palms', src: '/images/about/david-weis-mark-h3k-marquee-twin-palms-modernism-week-2025.jpg', alt: 'David and Mark Weis on the walkway in front of The Marquee at Twin Palms, its pink breeze-block wall beside them, during Modernism Week', width: 1206, height: 1051, position: 'center 45%' },
      ],
      caption: { title: 'Modernism Week Tour 2025: The Marquee at Twin Palms', note: 'An H3K design project' },
    },
    {
      type: 'pair',
      ratio: '4 / 5',
      photos: [
        { suggestion: 'Mark, Kathy and I as Modernism Week docents', src: '/images/about/david-weis-modernism-week-kathy.jpg', alt: 'David, Mark and Kathy in matching Vista Las Palmas shirts as volunteer docents during Modernism Week in Palm Springs', width: 1800, height: 2400, hasSmall: true, position: 'center 35%' },
        { suggestion: 'Docents in front of the pool with the mountains behind', src: '/images/about/modernism-week-vista-las-palmas-docents-pool.jpg', alt: 'Four volunteer docents standing in front of a pool in Vista Las Palmas, with palms and the San Jacinto Mountains behind them', width: 1800, height: 2400, hasSmall: true, position: 'center 60%' },
      ],
      caption: { title: 'Vista Las Palmas Modernism Week 2026', note: 'Volunteer docents. Helping neighbors share their homes. Spending time with new friends.' },
    },
    {
      type: 'story',
      eyebrow: 'A family tradition',
      heading: 'Christmas was never going to be subtle.',
      paragraphs: [
        'Growing up, my dad was the person who could fix almost anything. Cars. Houses. Whatever needed to be figured out. And at Christmas, apparently the entire neighborhood.',
        'Our house became one of those homes people drove across town to see. Approximately 75,000 exterior lights. Neighbors participating. Limos coming down the street. And a giant custom star my dad built between the houses that was visible from what felt like half the city.',
        'Decorating started Thanksgiving Day. We tested bulbs. Made a plan. Worked late Friday night and through the weekends until Christmas Day. Frozen fingers. Frozen everything. And then the lights came on.',
        'I loved seeing how happy it made people. That part never left me.',
      ],
    },
    {
      type: 'story',
      heading: 'Then Mark had his own tradition.',
      paragraphs: [
        'Long before we met, Mark had started an annual holiday fundraiser. Together, we continued it and watched it grow into one of the traditions our friends talk about all year.',
        'The party is a lot of work. I apparently inherited an inability to do Christmas casually.',
        'But every year, the house fills with friends, toys pile up for children in the community, and we remember why we keep doing it.',
        'By 2024, more than 200 guests helped donate nearly 300 toys. In 2025, our 15th annual holiday fundraiser collected more than 230 toys.',
      ],
    },
    {
      type: 'story',
      heading: 'If you’re going to give someone something, make it worth keeping.',
      paragraphs: [
        'The gifts became their own tradition.',
        'One year, I used miniature liquor bottles left over from The Cole and paired each with a seasonal cocktail recipe, candy, and a small business card. Another year became hot cocoa kits.',
        'Then Querencia Palms gave me an excuse to go completely overboard with custom s’mores kits. More than 100 bags. Jumbo s’mores. A full-size Hershey bar. A retractable metal roasting stick. Custom tags. Querencia Palms branding. And a QR code tucked in without making the gift feel like an advertisement.',
        'People sent me pictures and videos later of themselves actually using them. That was exactly the point.',
        'I want people to notice my branding. I never want the branding to ruin the gift.',
      ],
    },
    {
      type: 'pair',
      ratio: '1 / 1',
      photos: [
        { suggestion: 'Toy collection for the Marines', src: '/images/about/holiday-toy-collection-marines.jpg', alt: 'A Marine in dress uniform beside toys donated at the holiday fundraiser', width: 1206, height: 892, hasSmall: true, position: '30% center' },
        { suggestion: 'Toys loaded into the Range Rover', src: '/images/about/holiday-toys-range-rover.jpg', alt: 'The back of a Range Rover packed with toys donated at the holiday fundraiser', width: 1800, height: 2400, hasSmall: true, position: 'center 55%' },
      ],
      captions: [
        { title: 'Toys for Tots', note: 'Marines to collect and count the toys' },
        { title: 'Loads of toys', note: 'Multiple truck loads to drop toys' },
      ],
    },
    {
      type: 'photo',
      photo: { suggestion: 'Holiday party portrait', src: '/images/about/holiday-party-portrait.jpg', alt: 'Guests holding donated toys at David and Mark Weis’s annual holiday fundraiser party', width: 2400, height: 1999, hasSmall: true, position: 'center top' },
      ratio: '4 / 3',
      caption: { title: 'Toys for Kids', note: '2025' },
    },
    {
      type: 'gallery',
      label: 'The holiday gift bags',
      photos: [
        { suggestion: 'Holiday gift bag production', src: '/images/about/holiday-gift-bag-production.jpg', alt: 'David Weis beside a dining table covered in finished holiday gift bags', width: 2400, height: 2110, hasSmall: true },
        { suggestion: 'Gift bags with candy canes', src: '/images/about/holiday-gift-bags-candy-canes.jpg', alt: 'Rows of holiday gift bags, each topped with a candy cane', width: 1800, height: 2400, hasSmall: true },
        { suggestion: 'Merry Christmas gift bags', src: '/images/about/holiday-gift-bags-merry-christmas.jpg', alt: 'Rows of white Merry Christmas gift bags lined up under stained-glass windows', width: 2400, height: 1800, hasSmall: true },
        { suggestion: 'Cocktail favors from The Cole', src: '/images/about/holiday-smores-kit-querencia-palms.jpg', alt: 'Cocktail favors for the holiday fundraiser: mini bottles with candy canes and tags', width: 1800, height: 2400, hasSmall: true },
      ],
    },
    {
      type: 'pair',
      ratio: '18 / 13',
      photos: [
        { suggestion: 'Custom Christmas card 2022', src: '/images/about/holiday-card-2022-sierra-chalet.jpg', alt: 'The illustrated 2022 holiday card: David and Mark with the dogs in the snow at Sierra Chalet, a snowboard and toolbox beside the tree', width: 2400, height: 1736, hasSmall: true },
        { suggestion: 'Custom Christmas card 2023', src: '/images/about/holiday-card-2023-kensington-canyon.jpg', alt: 'The illustrated 2023 holiday card: David and Mark with the dogs in front of the snow-dusted Kensington house', width: 2171, height: 1571, hasSmall: true },
      ],
      captions: [
        { title: 'Custom Christmas card 2022', note: 'Reflecting on the cabin renovation' },
        { title: 'Custom Christmas card 2023', note: 'Reflecting on the Kensington renovation' },
      ],
    },
    {
      type: 'pair',
      ratio: '18 / 13',
      photos: [
        { suggestion: 'Custom Christmas card 2024', src: '/images/about/holiday-card-2024-the-cole.jpg', alt: 'The illustrated 2024 holiday card: David and Mark in front of The Cole at night, with the hotel sign and a Christmas tree', width: 2171, height: 1571, hasSmall: true },
        { suggestion: 'Custom Christmas card 2025', src: '/images/about/holiday-card-2025-vista-voltaire.jpg', alt: 'The illustrated 2025 holiday card: David and Mark with the dog in front of the Voltaire house, surfboards by the door', width: 2100, height: 1500, hasSmall: true },
      ],
      captions: [
        { title: 'Custom Christmas card 2024', note: 'Reflecting on the sale of The Cole and new chapters' },
        { title: 'Custom Christmas card 2025', note: 'Reflecting on the renovation of Voltaire' },
      ],
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
      type: 'story',
      eyebrow: 'Tools of the trade',
      heading: 'We kept buying cars that weren’t work trucks. Then using them like work trucks.',
      paragraphs: [
        'When Mark and I met, I actually owned a truck. A Chevy Colorado.',
        'I had a motorcycle, so it made sense. The motorcycle went in the bed, the dog came along, and if something needed hauling, I had a vehicle designed to haul it. Very logical.',
        'Then the motorcycle went. Then the Colorado went.',
        'And somewhere along the way, we apparently decided we no longer “needed” a truck. That decision aged terribly.',
      ],
    },
    {
      type: 'photo',
      photo: { suggestion: 'The Colorado with the motorcycle in the bed (Life Before Mark.JPG in David’s Drive)', src: '/images/about/david-weis-chevy-colorado-motorcycle.jpg', alt: 'David’s white Chevy Colorado with his motorcycle loaded in the bed' },
      ratio: '3 / 2',
      caption: 'Back when the work truck was, in fact, a work truck.',
    },
    {
      type: 'story',
      heading: 'The original truck even helped build The Cole.',
      paragraphs: [
        'Looking back, the Colorado had already been part of this story before we realized there was a story.',
        'It hauled ladders and construction materials during The Cole Hotel project.',
        'At the time, it was just life. A hotel was being built. Something needed picking up. So we picked it up.',
        'That same attitude followed us into almost every property afterward.',
      ],
      aside: { suggestion: 'The Colorado at The Cole with ladders', src: '/images/about/david-weis-chevy-colorado.jpg', alt: 'The white Chevy Colorado with a ladder in the bed outside The Cole Hotel, beside a Range Rover', width: 1624, height: 826, hasSmall: true },
      asideRatio: '3 / 2',
      asideCaption: 'The Colorado at The Cole, doing exactly what trucks are supposed to do.',
    },
    {
      type: 'story',
      heading: 'Then the Range Rovers got promoted.',
      paragraphs: [
        'As the projects got bigger, Mark started casually referring to our Range Rovers as our work trucks.',
        'I objected to this terminology repeatedly. Range Rovers are dream cars for a lot of people. Mark saw cargo space.',
        'So they hauled flooring. Plants. Construction supplies. Open-house signs. Tools. Furniture. Whatever would fit.',
        'And sometimes things that absolutely should not have fit.',
      ],
    },
    {
      type: 'pair',
      ratio: '1 / 1',
      emphasis: 'first',
      photos: [
        { suggestion: 'The Range Rover loaded with flooring', src: '/images/about/david-weis-range-rover-flooring-work-truck.jpg', alt: 'The open tailgate of a white Range Rover with boxes of flooring stacked inside', width: 1802, height: 2400, hasSmall: true, position: 'center 55%' },
        { suggestion: 'The Evoque convertible packed with plants', src: '/images/about/david-weis-range-rover-work-truck.jpg', alt: 'Houseplants filling the seats of the convertible Range Rover Evoque', width: 2400, height: 1690, hasSmall: true },
      ],
      captions: ['Mark: “It’s a work truck.”\nMe: “It is literally a Range Rover.”', 'Apparently “convertible” also means “landscape vehicle.”'],
    },
    {
      type: 'story',
      heading: 'Sometimes even we had limits.',
      paragraphs: [
        'Occasionally a project required enough lumber or material that even Mark had to admit the Range Rover might not be the appropriate solution.',
        'Those were the days we rented an actual truck. Briefly.',
        'Then we went right back to abusing the luxury SUVs.',
      ],
      aside: { suggestion: 'The Lowe’s rental truck with lumber', src: '/images/about/david-weis-lowes-rental-truck-lumber.jpg', alt: 'A Lowe’s rental pickup with long boards hanging out of the bed, a red flag tied to the end', width: 1800, height: 2400, hasSmall: true },
      asideRatio: '4 / 5',
      asideCaption: 'A rare moment of appropriate vehicle selection.',
    },
    {
      type: 'story',
      eyebrow: '2026',
      heading: 'Eventually I gave up.',
      paragraphs: [
        'By 2026, I had become a Broker Associate and was driving constantly between San Diego, Palm Springs and Big Bear.',
        'Listings. Projects. Vacation rentals. Open houses. Construction. Properties that needed something moved from one city to another.',
        'At some point I had to admit what Mark had apparently known all along. We needed a truck.',
        'So I bought a GMC Sierra EV. A real truck. Electric. Long range. Plenty of room.',
        'Finally, a vehicle actually designed for the life we were already living.',
      ],
    },
    {
      type: 'photo',
      photo: { suggestion: 'The GMC Sierra EV (Sierra EV.jpeg in David’s Drive)', src: '/images/about/david-weis-gmc-sierra-ev.jpg', alt: 'David Weis’s GMC Sierra EV' },
      ratio: '16 / 9',
    },
    {
      type: 'callout',
      text: 'Two weeks later, I had already made two dump runs.',
      note: 'Case closed.',
      paragraphs: ['Here’s to all the luxury cars that were tough enough to survive the Weis life.'],
    },
  ],
};

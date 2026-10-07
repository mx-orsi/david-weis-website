/**
 * Personal story pages that hang off About, each rendered by
 * src/components/StoryPage.astro at /<slug>. Copy is David's, from his
 * 2026-10-05 briefs, verbatim; chapter blocks use the same vocabulary as the
 * project pages (see ChapterBlock in projects.ts). About shows a short
 * `teaser` block for each story instead of the full section.
 */
import type { ProjectChapter } from './projects';
import type { Photo } from './types';

export interface StoryPage {
  slug: string;
  /** Short nav / breadcrumb label when the title is a sentence. */
  crumb?: string;
  eyebrow: string;
  title: string;
  /** Lede under the title; extra paragraphs render below the hero at lede size. */
  intro: string | readonly string[];
  /** Smaller H1 for sentence-length titles (default 'display'). */
  titleSize?: 'xl' | 'display';
  lead?: Photo;
  leadRatio?: string;
  leadCaption?: { title: string; note?: string };
  chapters: readonly ProjectChapter[];
  closing?: {
    eyebrow?: string;
    heading: string;
    paragraphs: readonly string[];
    cta?: { label: string; href: string };
    links?: readonly { label: string; href: string }[];
  };
  /** The sitewide "Real estate rarely gives you only one option." band (default on). */
  finalCta?: boolean;
  seo: { title: string; description: string };
}

/* Photos shared with About (public/images/about), by filename. */
const truckPhotos = {
  colorado: { suggestion: 'The Colorado with the motorcycle in the bed', src: '/images/about/david-weis-chevy-colorado-motorcycle.jpg', alt: 'The white Chevy Colorado with a red motorcycle loaded in the bed, the dog sitting in the lot in front', width: 2400, height: 1800, hasSmall: true },
  coloradoCole: { suggestion: 'The Colorado at The Cole with ladders', src: '/images/about/david-weis-chevy-colorado.jpg', alt: 'The white Chevy Colorado with a ladder in the bed outside The Cole Hotel, beside a Range Rover', width: 1624, height: 826, hasSmall: true },
  flooring: { suggestion: 'The Range Rover loaded with flooring', src: '/images/about/david-weis-range-rover-flooring-work-truck.jpg', alt: 'The open tailgate of a white Range Rover with boxes of flooring stacked inside', width: 1802, height: 2400, hasSmall: true, position: 'center 55%' },
  evoque: { suggestion: 'The Evoque convertible packed with plants', src: '/images/about/david-weis-range-rover-work-truck.jpg', alt: 'Houseplants filling the seats of the convertible Range Rover Evoque', width: 2400, height: 1690, hasSmall: true },
  lowes: { suggestion: 'The Lowe’s rental truck with lumber', src: '/images/about/david-weis-lowes-rental-truck-lumber.jpg', alt: 'A Lowe’s rental pickup with long boards hanging out of the bed, a red flag tied to the end', width: 1800, height: 2400, hasSmall: true },
  sierra: { suggestion: 'The GMC Sierra EV in the drive at Sierra Chalet', src: '/images/about/david-weis-gmc-sierra-ev.jpg', alt: 'The white GMC Sierra EV parked in the drive below Sierra Chalet, pines behind', width: 2400, height: 1800, hasSmall: true, position: 'center 60%' },
  // Not photographed yet (David's 2026-10-05 brief asks for these); the slot prints the expected filename.
  bed: { suggestion: 'The Sierra’s bed loaded with property supplies', src: '/images/work-truck/david-weis-gmc-sierra-ev-truck-bed-loaded.jpg', alt: 'The bed of the GMC Sierra EV loaded with supplies' },
  listing: { suggestion: 'The Sierra parked at a listing or property', src: '/images/work-truck/david-weis-gmc-sierra-ev-at-listing.jpg', alt: 'The GMC Sierra EV parked in front of a listing' },
  dump: { suggestion: 'The dump run: debris in the bed', src: '/images/work-truck/david-weis-gmc-sierra-ev-dump-run.jpg', alt: 'The GMC Sierra EV with its bed full of debris on a dump run' },
  garage: { suggestion: 'The one inch of garage clearance', src: '/images/work-truck/david-weis-gmc-sierra-ev-garage-clearance.jpg', alt: 'The GMC Sierra EV parked in the garage with about an inch of clearance to the shelving' },
} satisfies Record<string, Photo>;

export const stories: readonly StoryPage[] = [
  {
    slug: 'gay-for-good',
    crumb: 'Gay for Good',
    eyebrow: 'Community · Service · San Diego',
    title: 'Gay for Good',
    intro: 'Finding my people by showing up for others.',
    lead: { suggestion: 'David under the GAYFORGOOD.ORG booth canopy', src: '/images/gay-for-good/david-weis-gay-for-good-san-diego-booth-big-gay-picnic.jpg', alt: 'David Weis and volunteers at the Gay for Good booth under its GAYFORGOOD.ORG canopy at the Big Gay Picnic in San Diego', width: 1206, height: 1002, hasSmall: true, position: 'center 40%' },
    leadRatio: '16 / 9',
    chapters: [
      {
        id: 'the-story',
        after: -1,
        blocks: [
          {
            type: 'story',
            eyebrow: 'How it started',
            heading: 'I’ve always believed in getting involved.',
            paragraphs: [
              'My mom deserves a lot of the credit for that. She was the kind of person who could walk into a room knowing nobody and leave having talked to everyone. Growing up, she was constantly encouraging me to join things, volunteer, meet people and participate instead of standing on the sidelines.',
              'I volunteered in different ways over the years, from the Humane Society and library work to being a Big Brother. I valued all of it, but I also learned something about myself: doing the exact same volunteer job every week could eventually start feeling a little like having another job.',
              'What I wanted was community, variety and the chance to experience more of the city while actually doing something useful.',
              'In 2023, I found Gay for Good.',
              'And almost immediately, I knew I had found something different.',
            ],
          },
          {
            type: 'story',
            heading: 'It started with 20 playhouses.',
            paragraphs: [
              'My first Gay for Good project was with Habitat for Humanity.',
              'We spent the morning priming 20 playhouses that would later be painted and delivered throughout San Diego. I remember leaving that event thinking: this is exactly what I was looking for.',
              'It wasn’t one organization asking volunteers to perform the same task over and over. Gay for Good worked throughout the community, introducing volunteers to different nonprofits, different causes and different parts of San Diego.',
              'One weekend might involve Habitat for Humanity. Another could mean packing food, preparing school supplies, supporting Pride, helping an animal organization or showing up for a community event I might never have discovered otherwise.',
              'You could make an impact, meet people and learn more about the city at the same time.',
            ],
          },
          {
            type: 'pair',
            ratio: '3 / 2',
            emphasis: 'first',
            photos: [
              { suggestion: 'The Habitat for Humanity playhouse group photo', src: '/images/gay-for-good/gay-for-good-san-diego-habitat-for-humanity-playhouses-first-project-david-weis.jpg', alt: 'Gay for Good volunteers kneeling and standing together at the Habitat for Humanity playhouse build in San Diego, David Weis among them', width: 1170, height: 766, hasSmall: true },
              { suggestion: 'A finished playhouse', src: '/images/gay-for-good/gay-for-good-san-diego-habitat-for-humanity-painted-playhouse-david-weis.jpg', alt: 'A painted Habitat for Humanity playhouse beside a Gay for Good Volunteer With Us banner', width: 1170, height: 874, hasSmall: true },
            ],
            captions: [{ title: 'The first one', note: 'My first Gay for Good project: helping prime 20 Habitat for Humanity playhouses in 2023.' }],
          },
          {
            type: 'story',
            eyebrow: 'Chapter Leader',
            heading: 'Then they asked me to lead.',
            paragraphs: [
              'Not long after joining, I was approached about becoming a Chapter Leader for Gay for Good San Diego.',
              'I said yes.',
              'At first, I was still one of the newer people in the organization, so there was definitely some learning as I went. But that became part of what I loved about the role.',
              'Leadership did not mean standing around telling people what to do. It meant showing up early, helping organize projects, welcoming the person who came alone, working alongside everyone else, building relationships with community partners and making sure people wanted to come back.',
              'Over roughly three years as a Chapter Leader, Gay for Good became one of the most meaningful parts of my life in San Diego.',
            ],
          },
          {
            type: 'pair',
            ratio: '4 / 3',
            emphasis: 'second',
            photos: [
              { suggestion: 'David at the back-to-school project', src: '/images/gay-for-good/gay-for-good-san-diego-chicano-federation-back-to-school-backpacks-david-weis.jpg', alt: 'David Weis in a Gay for Good shirt in a room full of donated backpacks at the back-to-school project', width: 1206, height: 889, hasSmall: true },
              { suggestion: 'The large group with the vertical Volunteer With Us banner', src: '/images/gay-for-good/gay-for-good-san-diego-volunteers-group-banner-david-weis.jpg', alt: 'A large group of Gay for Good San Diego volunteers gathered around the Volunteer With Us banner on a lawn', width: 2048, height: 1446, hasSmall: true },
            ],
            captions: [{ title: 'From volunteer to Chapter Leader' }, { title: 'The best part was always the people' }],
          },
          {
            type: 'callout',
            text: 'San Diego became our project list.',
          },
          {
            type: 'gallery',
            label: 'San Diego became our project list',
            photos: [
              { suggestion: 'Packing boxes for the Salvation Army', src: '/images/gay-for-good/gay-for-good-san-diego-salvation-army-food-boxes-david-weis.jpg', alt: 'David Weis packing food boxes beside a Salvation Army volunteer for the Toys for Joy holiday project', width: 1206, height: 866, hasSmall: true },
              { suggestion: 'Backpacks and school supplies', src: '/images/gay-for-good/gay-for-good-san-diego-back-to-school-volunteers-david-weis.jpg', alt: 'Gay for Good volunteers posing with donated backpacks at the Chicano Federation back-to-school project', width: 1206, height: 884, hasSmall: true },
              { suggestion: 'David with the purple flower at the Walk to End Alzheimer’s', src: '/images/gay-for-good/david-weis-gay-for-good-walk-to-end-alzheimers-san-diego.jpg', alt: 'David Weis holding a purple pinwheel flower on the lawn at the Walk to End Alzheimer’s in San Diego', width: 1800, height: 2400, hasSmall: true, position: 'center 30%' },
              { suggestion: 'The Love Letters booth at Pride by the Beach', src: '/images/gay-for-good/gay-for-good-pride-by-the-beach-oceanside-love-letters-david-weis.jpg', alt: 'David Weis and Gay for Good volunteers at the Love Letters booth at Pride by the Beach in Oceanside', width: 1170, height: 1033, hasSmall: true },
            ],
            captions: [
              { title: '71 food boxes + more than 1,000 toys', note: 'A holiday project with The Salvation Army’s Toys for Joy program.' },
              { title: '200+ backpacks', note: 'Helping prepare students for the school year with Chicano Federation.' },
              { title: 'Walk to End Alzheimer’s', note: 'Sometimes volunteering means building something. Sometimes it means simply showing up for a cause that matters.' },
              { title: 'Pride at the Beach', note: 'Connecting with the community while helping create a place for people to leave themselves a little kindness.' },
            ],
          },
          {
            type: 'story',
            eyebrow: 'More than volunteering',
            heading: 'It never felt like just volunteering.',
            paragraphs: [
              'One of the reasons Gay for Good worked so well for me is that the volunteering was only part of it.',
              'People came alone. People brought friends. People met someone during a project and saw them again at the next one. Eventually the unfamiliar faces stopped being unfamiliar.',
              'That was exactly what I needed when I came back to San Diego.',
              'Life had taken my high school friends and me in different directions, and after several years consumed by [The Cole](/experience/the-cole), renovations and everything happening in Palm Springs, I realized I needed to intentionally rebuild a community here.',
              'Gay for Good gave me a way to do that without networking for the sake of networking. We were all there because we wanted to help with something. Friendship happened naturally around it.',
            ],
          },
          {
            type: 'pair',
            ratio: '4 / 3',
            photos: [
              { suggestion: 'The volunteer appreciation social at the restaurant', src: '/images/gay-for-good/gay-for-good-san-diego-volunteer-appreciation-social-restaurant-david-weis.jpg', alt: 'David Weis and two friends laughing at a patio table during the Gay for Good volunteer appreciation social', width: 2400, height: 1800, hasSmall: true },
              { suggestion: 'The casual group at an outdoor event', src: '/images/gay-for-good/gay-for-good-san-diego-animal-rescue-volunteers-david-weis.jpg', alt: 'Four Gay for Good volunteers in sunglasses with their arms around one another at an outdoor animal rescue event', width: 2400, height: 1800, hasSmall: true },
            ],
            caption: { title: 'The people were the reward' },
          },
          {
            type: 'story',
            eyebrow: 'Pride',
            heading: 'Pride, visibility and belonging.',
            paragraphs: [
              'Gay for Good also gave me another way to participate in the LGBTQ+ community that felt natural to me.',
              'Pride events became opportunities to represent the organization, meet potential volunteers and remind people that community can mean more than attending a celebration. It can mean finding people to serve alongside all year.',
              'Some of our biggest events were loud, colorful and packed with people. Others were six or ten volunteers working in a back room somewhere.',
              'Both mattered.',
            ],
          },
          {
            type: 'gallery',
            label: 'Pride events',
            photos: [
              { suggestion: 'The booth at the Big Gay Picnic', src: '/images/gay-for-good/gay-for-good-san-diego-big-gay-picnic-volunteers-david-weis.jpg', alt: 'Gay for Good volunteers lined up under the booth canopy at the Big Gay Picnic in San Diego', width: 2400, height: 1800, hasSmall: true },
              { suggestion: 'Oceanside Pride', src: '/images/gay-for-good/gay-for-good-oceanside-pride-by-the-beach-david-weis.jpg', alt: 'David Weis and two friends in rainbow medals at Oceanside Pride by the Beach', width: 1170, height: 964, hasSmall: true },
              { suggestion: 'The large Pride flags', src: '/images/gay-for-good/gay-for-good-san-diego-big-gay-picnic-pride-flags-david-weis.jpg', alt: 'Volunteers raising large rainbow Pride flags while setting up for the Big Gay Picnic', width: 1440, height: 1081, hasSmall: true },
            ],
            captions: [{ title: 'Big Gay Picnic' }, { title: 'Oceanside Pride' }, { title: 'Setting up' }],
          },
          {
            type: 'story',
            eyebrow: 'Full circle',
            heading: 'And eventually, it followed me back to Palm Springs.',
            paragraphs: [
              'One of the moments that meant the most came toward the end of my time as a Chapter Leader.',
              'During Palm Springs Pride, we hosted a Gay for Good social and fundraiser at [Querencia Palms](/experience/querencia-palms).',
              'By then, two completely different parts of my life had collided in the best possible way.',
              'I had spent years helping build a community through Gay for Good. At the same time, Querencia Palms had become a place where I was pouring everything I knew about real estate, hospitality, design and creating a sense of belonging.',
              'The name Querencia means a place from which one’s strength is drawn. A place where you feel safe and most yourself.',
              'Having Gay for Good chapters and volunteers gathering there during Pride made that meaning feel unusually real.',
              'People came from different chapters, many meeting one another for the first time, to raise money, tell stories, laugh and celebrate an organization built around showing up for others.',
              'For me, it felt very full circle.',
            ],
          },
          {
            type: 'photo',
            ratio: '16 / 10',
            photo: { suggestion: 'David speaking to the group at Querencia Palms', src: '/images/gay-for-good/david-weis-speaking-gay-for-good-fundraiser-querencia-palms-palm-springs-pride.jpg', alt: 'David Weis speaking to Gay for Good volunteers gathered on the walkway at Querencia Palms during the Palm Springs Pride fundraiser', width: 1206, height: 902, hasSmall: true },
          },
          {
            type: 'photo',
            ratio: '16 / 10',
            photo: { suggestion: 'The group in front of the Querencia mural', src: '/images/gay-for-good/gay-for-good-palm-springs-pride-fundraiser-querencia-palms-mural-david-weis.jpg', alt: 'David Weis and two Gay for Good friends in front of the Querencia Palms mural at the Palm Springs Pride fundraiser', width: 1206, height: 899, hasSmall: true },
            caption: { title: 'Three years later, two communities came together.' },
          },
          {
            type: 'story',
            eyebrow: 'What I took with me',
            heading: 'Community does not usually happen by accident.',
            paragraphs: [
              'Gay for Good reminded me that community does not usually happen by accident.',
              'Someone organizes the event. Someone sends the invitation. Someone shows up early. Someone welcomes the new person who does not know anybody yet.',
              'And then, eventually, people belong.',
              'I joined because I wanted to volunteer and meet some new people.',
              'I ended up spending roughly three years as a Chapter Leader, discovering organizations throughout San Diego, making friendships I still value, and learning a lot about what it takes to bring people together.',
              'My mom probably would have loved that.',
              'And she probably would have reminded me that this is exactly why she kept telling me to join things.',
            ],
          },
          {
            type: 'links',
            heading: 'Keep reading',
            items: [
              { label: 'About David', href: '/about' },
              { label: 'Querencia Palms', href: '/experience/querencia-palms' },
              { label: 'San Diego real estate', href: '/san-diego' },
            ],
          },
        ],
      },
    ],
    seo: {
      title: 'Gay for Good San Diego | David Weis',
      description:
        'How David Weis found community in San Diego through Gay for Good: a first project priming 20 Habitat for Humanity playhouses, roughly three years as a Chapter Leader, and a Pride fundraiser at Querencia Palms.',
    },
  },
  {
    // David's 2026-10-05 email gives notes and direction for most sections
    // rather than finished copy, so this page is drafted in his voice from
    // those notes (facts, jokes and the closing lines are his). Flagged for
    // his review in CLIENT-QUESTIONS.md.
    slug: 'garden-club',
    crumb: 'Garden Club',
    eyebrow: 'Village Garden Club of La Jolla',
    title: 'Finding something just for me',
    intro:
      'What started as an attempt to finally learn why our landscaping kept dying became one of the most unexpected and rewarding parts of my life.',
    lead: { suggestion: 'The April floral arrangement David created', src: '/images/garden-club/david-weis-village-garden-club-la-jolla-april-floral-arrangement.jpg', alt: 'Small vases of garden roses, ranunculus and greenery on the refreshment table beside a card reading Floral Arrangement Designed by David Weis', width: 1800, height: 2400, hasSmall: true, position: 'center 42%' },
    leadRatio: '3 / 2',
    chapters: [
      {
        id: 'the-story',
        after: -1,
        blocks: [
          {
            type: 'story',
            eyebrow: 'How this started',
            heading: 'What do I actually like doing?',
            paragraphs: [
              'By 2024, life was finally starting to feel calmer. [The Cole](/experience/the-cole) was behind us, the major renovations were finished, and for the first time in a while I could sit with a question people kept asking me: what do you actually enjoy doing?',
              'Everyone seemed to have golf, tennis or pickleball. I have never been particularly drawn to any of them.',
              'But plants had quietly been following me around for years.',
              'At The Cole, the landscaping company was not maintaining the property the way it needed to be maintained. I was not killing the plants. I was relying on landscapers who were supposed to be caring for them. Toward the end of operating the hotel, I found myself outside at night watering plants, training vines and trying to keep everything looking alive and beautiful.',
              'Later, at [Mercury Palms](/experience/mercury-palms), Mark and I completely reworked the landscaping. There were trips with the Tesla absolutely packed with bougainvillea, purple hopseed and whatever else would fit, sometimes to the point that the doors barely closed.',
              'Over time, I became increasingly frustrated when plants would die without anyone telling us. A sprinkler would keep faithfully watering a patch of empty dirt where a plant used to be.',
              'I had also always loved houseplants, flowers, watching things grow and seeing a landscape transform.',
              'Eventually it clicked: maybe this is actually one of my interests.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'Finding the club',
            heading: 'So I joined a garden club.',
            paragraphs: [
              'I started searching for something focused on landscaping. There is not really a “landscape club,” but there was the Village Garden Club of La Jolla.',
              'I applied.',
              'Months later, I got a call inviting me to one of the meetings that was open to prospective members. That was also when I learned membership normally required a sponsor.',
              'The meeting cost about $30 to attend, and my first reaction was honest: $30 for a garden club meeting?!',
              'Then I arrived.',
              'The speaker, the tables, the refreshments, the floral arrangements, the food and the attention to every detail completely changed my perception. It felt magical.',
              'I attended several meetings, met members, eventually found a sponsor, and was fortunate to be invited to join in 2025.',
              'The club has roughly 300 women and a handful of men. I grew up around women, so that did not intimidate me in the slightest. What struck me far more was how kind, knowledgeable and welcoming everyone was.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'Getting involved',
            heading: 'I didn’t want to just show up.',
            paragraphs: [
              'I wanted to participate, not just attend meetings, so I joined the Setup Committee.',
              'Setup means arriving around 7:30 in the morning and working until about 9:30 getting the room ready before the meeting begins: tables, decorations, refreshments, signage and all the small details that make a meeting feel special.',
              'That is part of what I love about the club. There is an enormous amount of effort behind something that looks effortless when everyone walks into the room.',
              'I have also helped with check-in and attended nearly every workshop I could get to.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'Learning things I actually use',
            heading: 'Turns out, almost everything applies to my life.',
            paragraphs: [
              'I joined thinking I would learn more about plants. Instead, I keep leaving meetings with information that applies directly to my homes, properties and projects.',
              'Irrigation. Soil and plant health. Seed starting. Dahlias. Floral design. Herbs and natural wellness. Wildfire preparation and Zone Zero. Pollinator-friendly landscaping. Beneficial insects. Natural pest management. Koi ponds. Plant propagation. Drought-conscious landscaping.',
              'A lot of it has shaped the way I think about [Querencia Palms](/experience/querencia-palms): the landscaping, the irrigation, the pollinators, the plant selection and even the koi pond ecosystem. One speaker who specialized in koi ponds could not have come at a better time, because I was actively dealing with the pond and the landscaping there.',
              'One of the simplest lessons was also one of the most useful: know your sprinklers.',
              'Garden Club knowledge keeps turning into practical property knowledge.',
            ],
          },
          {
            type: 'pair',
            ratio: '4 / 3',
            photos: [
              { suggestion: 'Best of the Best Seeds workshop', src: '/images/garden-club/village-garden-club-la-jolla-best-of-the-best-seeds-workshop-david-weis.jpg', alt: 'Members around a table of seed trays and labeled stakes at the Best of the Best Seeds workshop', width: 2400, height: 1800, hasSmall: true },
              { suggestion: 'The mini seed garden', src: '/images/garden-club/village-garden-club-la-jolla-seed-starting-mini-garden-david-weis.jpg', alt: 'A tray of freshly planted seed cells beside the workshop handout and a pen', width: 1800, height: 2400, hasSmall: true, position: 'center 40%' },
            ],
            captions: [{ title: 'Best of the Best Seeds', note: 'Seed starting, and a miniature seed garden to take home.' }],
          },
          {
            type: 'story',
            eyebrow: '2026',
            heading: 'I don’t even have a rose garden.',
            paragraphs: [
              '2026 opened with a program called Natural Rose Gardening, taught by Rita Perwich.',
              'I opened the yearbook beforehand and thought: I probably won’t have a rose garden, but I’m sure I’ll learn something.',
              'I should know better by now. I filled another entire page with notes.',
              'What fascinated me most was not actually roses. It was beneficial insects, natural predators, reducing pesticide dependence, ladybugs, hummingbirds, praying mantises and how a garden works as an ecosystem.',
              'I immediately started thinking about Querencia Palms. Instead of always reacting to pests chemically, how could the landscape itself become healthier?',
              'So, naturally, I went home and ordered 1,500 ladybugs.',
              'I kept them cool until the right time of evening, misted the landscaping so there was moisture, and released them throughout Querencia Palms.',
            ],
          },
          {
            type: 'callout',
            text: 'Apparently my takeaway from Natural Rose Gardening was that Querencia Palms needed 1,500 new employees.',
          },
          {
            type: 'gallery',
            label: 'The ladybugs',
            photos: [
              { suggestion: 'David holding the ladybug bag at Querencia', src: '/images/garden-club/david-weis-ladybug-release-querencia-palms-palm-springs.jpg', alt: 'David Weis holding up a mesh bag of ladybugs and a spray bottle in the courtyard at Querencia Palms at dusk', width: 1800, height: 2400, hasSmall: true },
              { suggestion: 'Close-up of the bag', src: '/images/garden-club/ladybugs-bag-1500-querencia-palms-david-weis.jpg', alt: 'A close-up of the mesh bag crowded with 1,500 ladybugs', width: 1800, height: 2400, hasSmall: true },
              { suggestion: 'Ladybugs crawling through the landscaping', src: '/images/garden-club/ladybugs-released-querencia-palms-landscaping-david-weis.jpg', alt: 'Ladybugs crawling over leaves and the edge of a planter at Querencia Palms after their release', width: 2400, height: 1800, hasSmall: true },
            ],
            captions: [
              { title: 'The order', note: 'Apparently my takeaway from Natural Rose Gardening was: order 1,500 ladybugs.' },
              { title: 'The bag', note: 'Waiting for their evening release.' },
              { title: 'The release', note: 'Putting the lesson into practice at Querencia Palms.' },
            ],
          },
          {
            type: 'story',
            eyebrow: 'April',
            heading: 'One Gay for Good event led to this.',
            paragraphs: [
              'Shortly before I was responsible for the Garden Club refreshment-table arrangement, [Gay for Good](/gay-for-good) held a Volunteer Appreciation Social at Cork & Stem. While I was there, I discovered the small flower shop inside.',
              'When it came time to make the arrangement, I immediately thought of them. I went back specifically because I wanted to support the business again, and I picked out the flowers myself.',
              'That month’s speaker was connected to The Posy Book and the language of flowers, so I designed the arrangement to complement the program.',
              'I did not set out to prove anything about my flower skills. I just liked that the theme, a shop I had discovered through Gay for Good and a meeting I cared about all came together in one arrangement.',
            ],
            aside: { suggestion: 'The Gay for Good social at Cork & Stem', src: '/images/gay-for-good/david-weis-gay-for-good-volunteer-appreciation-social-cork-and-stem.jpg', alt: 'David Weis beside a friend holding a bouquet at the Gay for Good volunteer appreciation social at Cork & Stem', width: 1005, height: 1394, hasSmall: true },
            asideCaption: 'The Gay for Good social at Cork & Stem, where this started.',
          },
          {
            type: 'pair',
            ratio: '4 / 5',
            photos: [
              { suggestion: 'The finished arrangement', src: '/images/about/david-weis-garden-club-april-refreshment-table-arrangement.jpg', alt: 'The refreshment table flower arrangement David designed for the Village Garden Club’s April program with The Posy Book author Teresa Sabankaya', width: 1800, height: 2400, hasSmall: true },
              { suggestion: 'The Modern Coastal Posy card', src: '/images/garden-club/village-garden-club-la-jolla-modern-coastal-posy-card-david-weis.jpg', alt: 'The printed card for the arrangement: A Modern Coastal Posy, a nod to floriography, the language of flowers', width: 2400, height: 1921, hasSmall: true },
            ],
            captions: [{ title: 'The April arrangement', note: 'Flowers from Cork & Stem, chosen to match the program.' }, { title: 'A Modern Coastal Posy', note: 'The card that went with it.' }],
          },
          {
            type: 'story',
            eyebrow: 'May',
            heading: 'Then there was the hat.',
            paragraphs: [
              'At the May luncheon, the club held its first hat competition. I decided I wanted to compete for Best Pollinator.',
              'Why? Because I had recently donated sperm to friends who wanted a child, and their son had been born. By my reasoning, I was literally a pollinator.',
              'I built the entire hat around a pollinator ecosystem: a purple umbrella, flowers, moss, greenery and bees. I had bought roughly 100 tiny sparkling bees for the project and did not need all of them, so I handed the extras out to members around the room. I figured I was pollinating the design throughout the club too.',
              'I entered hoping for Best Pollinator. Instead, I won Best UV Protection. Which is even funnier when you remember the hat was basically a giant flower-covered umbrella.',
              'The La Jolla Light later covered the event and included me and the hat in its photo gallery.',
            ],
          },
          {
            type: 'gallery',
            label: 'Building the hat',
            photos: [
              { suggestion: 'The sparkling bees', src: '/images/garden-club/david-weis-garden-club-hat-competition-sparkling-bees.jpg', alt: 'A pile of tiny gold and black sparkling bee charms on a wood table', width: 1800, height: 2400, hasSmall: true },
              { suggestion: 'The purple umbrella', src: '/images/garden-club/david-weis-garden-club-hat-competition-purple-umbrella-start.jpg', alt: 'A small purple umbrella on a table with moss and a few flowers beside it', width: 1800, height: 2400, hasSmall: true },
              { suggestion: 'Flowers and moss going on', src: '/images/garden-club/david-weis-garden-club-hat-competition-flowers-moss-construction.jpg', alt: 'The purple umbrella being covered with pink flowers, moss and bees', width: 1800, height: 2400, hasSmall: true },
              { suggestion: 'The finished hat', src: '/images/garden-club/david-weis-garden-club-hat-competition-finished-pollinator-hat.jpg', alt: 'The finished pollinator hat from the side: a purple umbrella covered in flowers, lavender and greenery', width: 2400, height: 1800, hasSmall: true },
              { suggestion: 'David wearing the hat', src: '/images/about/david-weis-garden-club-hat-competition.jpg', alt: 'David Weis wearing the flower-covered hat and holding a bouquet at the Village Garden Club of La Jolla’s hat competition', width: 1800, height: 2400, hasSmall: true },
              { suggestion: 'The La Jolla Light', src: '/images/about/david-weis-garden-club-la-jolla-light.jpg', alt: 'The La Jolla Light photo of the Village Garden Club hat contest: six members in flowered hats, David among them holding a bouquet', width: 890, height: 699, hasSmall: true },
            ],
            captions: [
              { title: 'The bees', note: 'Roughly 100 tiny sparkling bees. Not all of them made it onto the hat.' },
              { title: 'The umbrella', note: 'Every pollinator ecosystem starts somewhere.' },
              { title: 'Construction', note: 'Flowers, moss, greenery, bees.' },
              { title: 'The finished hat' },
              { title: 'Best UV Protection', note: 'Not the category I entered.' },
              { title: 'The La Jolla Light', note: 'Yes, it ended up in the newspaper.' },
            ],
          },
          {
            type: 'story',
            eyebrow: 'Workshops',
            heading: 'There is always something else to learn.',
            paragraphs: [
              'Best of the Best Seeds: we learned seed starting and created miniature seed gardens to take home.',
              'Dig Into Dahlias: I learned how to grow and care for dahlias and left with bulbs.',
              'Holiday Woodland Centerpiece: René van Rems demonstrated approachable holiday floral design. One lesson I particularly liked was how a simple carry box can turn flowers into a thoughtful gift.',
              'The Gardener Exchange Table: one of my favorite traditions. Members bring cuttings and plants from their own gardens and share them with other members. I love the idea that something growing in one member’s garden can end up growing in another’s.',
            ],
          },
          {
            type: 'gallery',
            label: 'Workshops',
            photos: [
              { suggestion: 'Dig Into Dahlias workshop', src: '/images/garden-club/village-garden-club-la-jolla-dig-into-dahlias-workshop-david-weis.jpg', alt: 'The Dig Into Dahlias workshop at the Village Garden Club of La Jolla' },
              { suggestion: 'Holiday Woodland Centerpiece with René van Rems', src: '/images/garden-club/village-garden-club-la-jolla-holiday-woodland-centerpiece-rene-van-rems-david-weis.jpg', alt: 'The Holiday Woodland Centerpiece workshop with René van Rems' },
              { suggestion: 'The Gardener Exchange Table', src: '/images/garden-club/village-garden-club-la-jolla-gardener-exchange-table-david-weis.jpg', alt: 'Cuttings and plants laid out on the Gardener Exchange Table' },
            ],
            captions: [{ title: 'Dig Into Dahlias' }, { title: 'Holiday Woodland Centerpiece' }, { title: 'The Gardener Exchange Table' }],
          },
          {
            type: 'story',
            eyebrow: 'The holiday pantry',
            heading: 'Apparently I make simple syrup now.',
            paragraphs: [
              'For the Holiday Pantry Sale, I made rosemary simple syrup, designed the packaging and labels and brought it to the event.',
              'It sold out almost immediately.',
            ],
            aside: { suggestion: 'Rosemary simple syrup', src: '/images/about/david-weis-garden-club-rosemary-syrup.jpg', alt: 'Bottles of rosemary simple syrup made for the Village Garden Club of La Jolla holiday pantry sale', width: 1800, height: 2400, hasSmall: true },
            asideCaption: 'Rosemary simple syrup for the Holiday Pantry Sale.',
          },
          {
            type: 'gallery',
            label: 'Garden Club inspiration',
            photos: [
              { suggestion: 'Mandarin pumpkins on the October refreshments table', src: '/images/garden-club/village-garden-club-la-jolla-refreshments-table-october-mandarin-pumpkins-david-weis.jpg', alt: 'Mandarin oranges dressed as tiny pumpkins on the October refreshments table, flowers behind', width: 1800, height: 2400, hasSmall: true },
              { suggestion: 'Vegetable character on the November table', src: '/images/garden-club/village-garden-club-la-jolla-refreshments-table-november-david-weis.jpg', alt: 'A turkey made of carrots, peppers, celery and a yellow squash on the November refreshments table', width: 1206, height: 1766, hasSmall: true },
              { suggestion: 'Flower-shaped crostini', src: '/images/garden-club/village-garden-club-la-jolla-refreshments-table-flower-crostini-david-weis.jpg', alt: 'Flower-shaped tomato, mozzarella and basil crostini arranged on a botanical plate', width: 1800, height: 2400, hasSmall: true },
              { suggestion: 'A decorated holiday cake', src: '/images/garden-club/village-garden-club-la-jolla-holiday-cake-members-david-weis.jpg', alt: 'A coconut-covered holiday cake topped with tiny deer and rosemary on a cake stand', width: 1800, height: 2400, hasSmall: true },
            ],
            captions: [{ title: 'Garden Club inspiration', note: 'The creativity around these tables is endless. These were made by other members; I saved the photos because I loved seeing what they created.' }],
          },
          {
            type: 'story',
            eyebrow: 'Why it matters',
            heading: 'A little sparkle in my life.',
            paragraphs: [
              'I joined because I wanted to understand landscaping better. What I found was community, creativity, new friendships, mentors, practical knowledge, a hobby that has nothing to do with real estate, inspiration I can actually use and another way to care for the places around me.',
              'I love arriving early to help set up. I love learning from people who know dramatically more than I do. I love the workshops. I love discovering a plant I have never seen and immediately wondering where I could put one.',
              'I love walking into a meeting convinced the topic probably has nothing to do with my life and walking out with a page of notes.',
              'Sometimes those notes turn into a floral arrangement. Sometimes they influence Querencia Palms. And apparently sometimes they result in 1,500 ladybugs showing up at a condominium community.',
              'I joined because I thought I needed a hobby. I stayed because I found a community of incredibly generous people who are constantly willing to share what they know.',
              'I am still very much learning. That is probably what I love most about it.',
              'The Village Garden Club of La Jolla has become one of those unexpected little things that adds genuine sparkle to my life, and I feel incredibly lucky to be part of it.',
            ],
          },
          {
            type: 'links',
            heading: 'Keep reading',
            items: [
              { label: 'About David', href: '/about' },
              { label: 'Gay for Good', href: '/gay-for-good' },
              { label: 'Querencia Palms', href: '/experience/querencia-palms' },
            ],
          },
        ],
      },
    ],
    seo: {
      title: 'Village Garden Club of La Jolla | David Weis',
      description:
        'David Weis on joining the Village Garden Club of La Jolla: setup mornings, workshops, a floral arrangement, a hat competition, 1,500 ladybugs at Querencia Palms and a community he never expected to find.',
    },
  },
  {
    slug: 'holiday-tradition',
    crumb: 'Our holiday tradition',
    eyebrow: 'A holiday tradition',
    title: 'Christmas has never been subtle.',
    titleSize: 'xl',
    intro: [
      'Christmas was already a big deal in both of our lives before Mark and I ever met.',
      'Mark had been hosting an annual holiday party and toy fundraiser for years.',
      'I grew up with a dad who somehow turned decorating the house for Christmas into a full-scale production.',
      'So when our lives came together, I suppose a calm and reasonable holiday season was never really an option.',
      'Over the years, Mark’s party became one of our favorite traditions to continue together. We have added new ideas, memories and a few increasingly unnecessary projects along the way, but the heart of it has stayed the same:',
      'Bring people together and use the night to do something good.',
    ],
    lead: { suggestion: 'Guests holding donated toys at the party', src: '/images/about/holiday-party-portrait-david-weis.jpg', alt: 'Guests holding donated toys at David and Mark Weis’s annual holiday fundraiser party', width: 2400, height: 1999, hasSmall: true, position: 'center 30%' },
    leadRatio: '16 / 9',
    chapters: [
      {
        id: 'the-story',
        after: -1,
        blocks: [
          {
            type: 'story',
            eyebrow: 'Where my version of Christmas started',
            heading: 'My dad did not believe in a reasonable number of Christmas lights.',
            paragraphs: [
              'Growing up, my dad was the person who could figure out how to build or fix almost anything.',
              'At Christmas, that ability apparently needed to be applied to the entire house.',
              'We ended up with roughly 75,000 exterior lights, custom pieces he built himself and a display that people actually drove across town to see.',
              'Decorating started around Thanksgiving.',
              'We tested strands, figured out what went where, worked late Friday nights and spent weekends outside trying to get everything finished.',
              'I remember frozen fingers.',
              'I also remember what happened once the lights came on.',
              'People slowed down. Kids stared out the windows. Cars and even limousines came through the neighborhood. Families made a trip over because they wanted to see what my dad had created.',
              'Looking back, I think he taught me something without ever saying it:',
              'Creating something that feels effortless and magical for someone else usually takes an unreasonable amount of work they never see.',
            ],
          },
          {
            type: 'pair',
            ratio: '4 / 3',
            photos: [
              { suggestion: 'The childhood house lit up', src: '/images/holiday-tradition/weis-family-childhood-christmas-lights-house.jpg', alt: 'David’s childhood home covered in Christmas lights' },
              { suggestion: 'The custom star my dad built', src: '/images/holiday-tradition/weis-family-christmas-star-built-by-dad.jpg', alt: 'The giant custom Christmas star David’s dad built' },
            ],
            captions: [
              { title: 'Growing up', note: 'Subtle was not really our thing.' },
              { title: 'Dad’s star', note: 'Built by hand. Of course.' },
            ],
          },
          {
            type: 'story',
            eyebrow: 'Another tradition',
            heading: 'Then I met someone who already had one of his own.',
            paragraphs: [
              'Long before we met, Mark had already started an annual holiday party centered around bringing friends together and collecting toys during the holidays.',
              'By the time I came into his life, it already had history.',
              'Friends knew the party. People looked forward to it. And every year, guests arrived carrying toys along with whatever else they were bringing for the night.',
              'I loved it immediately.',
              'Maybe part of that was because it felt familiar.',
              'My dad had shown me one version of putting a tremendous amount of work into making Christmas special for other people. Mark had created another.',
              'As our lives came together, I naturally started helping with the party too.',
              'Over time, the decorating, preparation, invitations, gifts, toys and little details became something we worked on together.',
              'It became one of the traditions we share.',
            ],
            aside: { suggestion: 'Mark’s party in the early years', src: '/images/holiday-tradition/mark-weis-annual-holiday-party-early-years.jpg', alt: 'Mark’s annual holiday party in the years before David joined it' },
            asideRatio: '4 / 3',
            asideCaption: 'The party. One of Mark’s traditions that became one of ours.',
          },
          {
            type: 'story',
            eyebrow: 'The night itself',
            heading: 'Friends, toys and a very full house.',
            paragraphs: [
              'The photos never quite capture what I like most about the night.',
              'People start coming through the door carrying toys.',
              'Someone runs into a friend they have not seen in months.',
              'The house gets louder. The donation pile gets bigger.',
              'Drinks appear. Food disappears. Christmas music is playing somewhere. People are catching up in every room.',
              'Some friends have been coming for years. Others are there for the first time.',
              'And by the end of the night, this enormous pile of toys has accumulated because everyone decided to show up carrying something for someone else.',
              'That is the part that matters.',
            ],
          },
          {
            type: 'photo',
            ratio: '16 / 10',
            photo: { suggestion: 'David and Mark at the party with friends and toys behind them', src: '/images/holiday-tradition/david-and-mark-weis-annual-holiday-toy-fundraiser-party.jpg', alt: 'David and Mark Weis at their annual holiday party, friends and donated toys behind them' },
            caption: { title: 'The party', note: 'One of Mark’s traditions that became one of ours.' },
          },
          {
            type: 'story',
            sub: true,
            heading: '2025',
            paragraphs: ['The 15th annual celebration. More than 230 toys.'],
          },
          {
            type: 'callout',
            text: 'Watching the pile grow never gets old.',
          },
          {
            type: 'gallery',
            label: 'The toys',
            photos: [
              { suggestion: 'Early in the evening, the first toys arriving', src: '/images/holiday-tradition/holiday-toy-fundraiser-early-in-the-night-david-weis.jpg', alt: 'The first donated toys arriving early in the evening at the holiday party' },
              { suggestion: 'The dog with the toy pile', src: '/images/holiday-tradition/holiday-toy-fundraiser-dog-with-toy-pile-david-weis.jpg', alt: 'The dog in a red jacket sitting in front of the pile of donated toys under the Merry sign', width: 2222, height: 2400, hasSmall: true },
              { suggestion: 'The Marine beside the toys', src: '/images/about/holiday-toy-collection-marines-david-weis.jpg', alt: 'A Marine in dress uniform beside toys donated at the holiday fundraiser', width: 1206, height: 892, hasSmall: true, position: '30% center' },
              { suggestion: 'Toys loaded into the Range Rover', src: '/images/about/holiday-toys-range-rover-david-weis.jpg', alt: 'The back of a Range Rover packed with toys donated at the holiday fundraiser', width: 1800, height: 2400, hasSmall: true, position: 'center 55%' },
            ],
            captions: [
              { title: 'Early in the night' },
              { title: 'A few hours later', note: 'This is the point.' },
              { title: 'The Marines', note: 'Collecting and counting the toys.' },
              { title: 'Somehow all of this still has to leave the house' },
            ],
          },
          {
            type: 'story',
            eyebrow: 'Before anyone arrives',
            heading: 'The party is the fun part.',
            paragraphs: [
              'When you come to a party, you see the finished version.',
              'You do not see the decorating, shopping, invitations, food, moving furniture, preparing favors, finding somewhere to put incoming toys, last-minute runs for something we somehow forgot or the cleanup afterward.',
              'And then there is the small matter of getting hundreds of toys out of the house again.',
              'That is probably another place where my dad’s influence shows up.',
              'I like the work behind making something feel easy for everyone else.',
              'Mark does too.',
              'Which explains why neither of us has ever suggested making this considerably simpler.',
            ],
            aside: { suggestion: 'David beside the table of finished gift bags', src: '/images/about/holiday-gift-bag-production-david-weis.jpg', alt: 'David Weis beside a dining table covered in finished holiday gift bags', width: 2400, height: 2110, hasSmall: true },
            asideRatio: '4 / 3',
            asideCaption: 'Preparation. A dining table briefly becomes a production line.',
          },
          {
            type: 'story',
            eyebrow: 'Of course I needed another project',
            heading: 'The favors became part of the fun.',
            paragraphs: [
              'Somewhere along the way, I started treating the take-home gifts as their own little creative challenge.',
              'I wanted people to leave with something connected to our lives that year, but I also wanted it to be something they might actually use.',
              'My rule became pretty simple:',
            ],
          },
          {
            type: 'callout',
            text: 'I want people to notice the branding. I never want the branding to ruin the gift.',
          },
          {
            type: 'story',
            sub: true,
            eyebrow: 'The Cole gifts',
            heading: 'A little piece of The Cole.',
            paragraphs: [
              'One year, we still had miniature liquor bottles left from [The Cole](/experience/the-cole).',
              'Instead of letting them sit around, I turned them into holiday gifts with seasonal cocktail recipes, candy and a small card.',
              'I liked that they were connected to a real chapter of our lives instead of simply being generic party favors.',
            ],
            aside: { suggestion: 'The Cole cocktail favors', src: '/images/about/holiday-cocktail-favors-candy-canes-david-weis.jpg', alt: 'Cocktail favors for the holiday fundraiser: mini bottles with candy canes and tags', width: 1800, height: 2400, hasSmall: true },
            asideCaption: 'The Cole. Finding another life for something from a chapter we loved.',
          },
          {
            type: 'story',
            sub: true,
            eyebrow: 'Hot cocoa',
            heading: 'Then came hot cocoa.',
            paragraphs: [
              'Another year became hot cocoa kits.',
              'Apparently once I decided the favors needed a theme, there was no going back.',
            ],
            aside: { suggestion: 'The hot cocoa kits', src: '/images/holiday-tradition/hot-cocoa-kit-holiday-favors-david-weis.jpg', alt: 'The hot cocoa kit holiday favors' },
            asideCaption: 'Hot cocoa kits.',
          },
          {
            type: 'story',
            eyebrow: '2025',
            heading: 'Then I went completely overboard.',
            paragraphs: [
              '[Querencia Palms](/experience/querencia-palms) gave me the excuse I apparently needed to make more than 100 custom s’mores kits.',
              'Each included the full s’mores setup, a full-size Hershey bar and a retractable metal roasting stick.',
              'I designed custom tags and incorporated Querencia Palms into the packaging, including a QR code, but I did not want the gift to feel like someone had just been handed an advertisement.',
              'The best part came afterward.',
              'People started sending me photos and videos of themselves actually making the s’mores.',
              'That was exactly what I wanted.',
              'The branding could be remembered because the gift itself was worth keeping.',
            ],
          },
          {
            type: 'gallery',
            label: 'The s’mores kits',
            photos: [
              { suggestion: 'Assembling the s’mores kits', src: '/images/holiday-tradition/querencia-palms-smores-kits-assembly-david-weis.jpg', alt: 'The Querencia Palms s’mores kits being assembled' },
              { suggestion: 'The finished kits lined up', src: '/images/about/holiday-gift-bags-merry-christmas-david-weis.jpg', alt: 'Rows of white Merry Christmas gift bags lined up under stained-glass windows', width: 2400, height: 1800, hasSmall: true },
              { suggestion: 'Close-up of the custom tag', src: '/images/holiday-tradition/querencia-palms-smores-kit-custom-tag-qr-code-david-weis.jpg', alt: 'A close-up of the custom Querencia Palms tag on a s’mores kit' },
              { suggestion: 'Friends actually making the s’mores', src: '/images/holiday-tradition/querencia-palms-smores-kits-friends-roasting-david-weis.jpg', alt: 'Friends roasting marshmallows with the Querencia Palms s’mores kits' },
            ],
            captions: [
              { title: 'Assembly' },
              { title: 'Querencia Palms', note: 'More than 100 s’mores kits because ten apparently would have been too reasonable.' },
              { title: 'The tag' },
              { title: 'The best part', note: 'People actually used them.' },
            ],
          },
          {
            type: 'story',
            eyebrow: 'One year at a time',
            heading: 'Somewhere along the way, the cards became our time capsules.',
            paragraphs: [
              'Our Christmas cards started becoming less about finding a generic holiday photo and more about documenting whatever had consumed our lives that year.',
              'At the time, I was simply trying to make each one feel personal.',
              'Looking at them together now, I realize they have become a surprisingly good record of the life Mark and I have been building.',
            ],
          },
          {
            type: 'pair',
            ratio: '18 / 13',
            photos: [
              { suggestion: 'The 2022 card', src: '/images/about/holiday-card-2022-sierra-chalet-david-weis.jpg', alt: 'The illustrated 2022 holiday card: David and Mark with the dogs in the snow at Sierra Chalet, a snowboard and toolbox beside the tree', width: 2400, height: 1736, hasSmall: true },
              { suggestion: 'The 2023 card', src: '/images/about/holiday-card-2023-kensington-canyon-david-weis.jpg', alt: 'The illustrated 2023 holiday card: David and Mark with the dogs in front of the snow-dusted Kensington house', width: 2171, height: 1571, hasSmall: true },
            ],
            captions: [
              { title: '2022 · Sierra Chalet', note: 'The year of rebuilding a mountain cabin and apparently deciding renovation dust belonged on a Christmas card.' },
              { title: '2023 · Kensington', note: 'Another renovation became the backdrop for another year.' },
            ],
          },
          {
            type: 'pair',
            ratio: '18 / 13',
            photos: [
              { suggestion: 'The 2024 card', src: '/images/about/holiday-card-2024-the-cole-david-weis.jpg', alt: 'The illustrated 2024 holiday card: David and Mark in front of The Cole at night, with the hotel sign and a Christmas tree', width: 2171, height: 1571, hasSmall: true },
              { suggestion: 'The 2025 card', src: '/images/about/holiday-card-2025-vista-voltaire-david-weis.jpg', alt: 'The illustrated 2025 holiday card: David and Mark with the dog in front of the Voltaire house, surfboards by the door', width: 2100, height: 1500, hasSmall: true },
            ],
            captions: [
              { title: '2024 · The Cole', note: 'Closing one of the biggest chapters of our Palm Springs life and looking toward whatever came next.' },
              { title: '2025 · Vista Voltaire', note: 'Another house. Another renovation. Another year somehow documented through real estate.' },
            ],
          },
          {
            type: 'story',
            sub: true,
            heading: 'What the cards show',
            paragraphs: [
              'Individually, they are Christmas cards.',
              'Together, they show how much our lives have changed.',
              'Different houses. Different projects. The end of one business. The beginning of another. Places we thought we would keep forever. Places we never expected to own.',
            ],
          },
          {
            type: 'callout',
            text: 'Every December seems to catch us in the middle of building something.',
          },
          {
            type: 'story',
            eyebrow: 'Why it still matters',
            heading: 'I think I understand my dad a little better now.',
            paragraphs: [
              'When I was younger, I probably thought my dad was simply obsessed with Christmas lights.',
              'Now I think I understand him differently.',
              'The lights were part of it.',
              'But so was watching people enjoy something he had worked hard to create.',
              'Mark’s party gives me a similar feeling.',
              'Yes, I love the decorating. I love the details. I apparently love creating projects for myself that nobody asked for.',
              'But the best part is watching the house fill up with people we care about and seeing all of those toys accumulate because those people wanted to help someone else have a better Christmas.',
              'That is why all the work still feels worth doing.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'Our tradition',
            heading: 'Another year. Another pile of toys.',
            paragraphs: [
              'This tradition was already part of Mark’s life when we met, and I am grateful it became part of mine too.',
              'Over the years, we have added memories, ideas, projects and plenty of Christmas chaos of our own.',
              'What I love most is that the reason for doing it has never really changed.',
              'Bring people together.',
              'Give everyone a reason to slow down and enjoy the night.',
              'And hopefully send a lot of toys out the door when it is over.',
              'Then, sometime the following year, one of us inevitably says:',
              '“So what are we doing for Christmas this year?”',
              'And it starts all over again.',
            ],
          },
          {
            type: 'photo',
            ratio: '3 / 2',
            photo: { suggestion: 'A warm David + Mark holiday photo to close', src: '/images/holiday-tradition/david-and-mark-weis-christmas.jpg', alt: 'David and Mark Weis together at Christmas' },
            caption: { title: 'The cards', note: 'One year at a time.' },
          },
          {
            type: 'links',
            heading: 'Keep reading',
            items: [
              { label: 'About David', href: '/about' },
              { label: 'The Cole', href: '/experience/the-cole' },
              { label: 'Querencia Palms', href: '/experience/querencia-palms' },
            ],
          },
        ],
      },
    ],
    seo: {
      title: 'Our Holiday Tradition | David Weis',
      description:
        'A personal story of family Christmas traditions, Mark’s annual holiday toy fundraiser, friendship, creative gifts and the traditions David Weis and Mark continue together.',
    },
  },
  {
    slug: 'vista-las-palmas',
    crumb: 'Vista Las Palmas',
    eyebrow: 'Palm Springs community',
    title: 'The neighborhood I call home.',
    titleSize: 'xl',
    intro: [
      'Palm Springs entered my life through real estate.',
      'But somewhere along the way, it became much more than that.',
      'Vista Las Palmas became home. Properties became settings for some of the biggest chapters of our lives. Neighbors became friends. Annual gatherings became traditions. And eventually I found myself wanting to contribute to the community that had given us so much.',
      'This is the part of Palm Springs that cannot really be explained through a listing.',
      'You have to live it.',
    ],
    lead: { suggestion: 'Memorial Day group by the pool at Mercury Palms', src: '/images/mercury-palms/mercury-palms-memorial-day-year-two-david-weis.jpg', alt: 'A dozen friends and three dogs gathered beside the Mercury Palms pool with the mountains behind, Memorial Day weekend year two', width: 2048, height: 1565, hasSmall: true, position: 'center 45%' },
    leadRatio: '16 / 9',
    chapters: [
      {
        id: 'the-story',
        after: -1,
        blocks: [
          {
            type: 'story',
            eyebrow: 'Where it started',
            heading: 'First, there was Mercury Palms.',
            paragraphs: [
              '[Mercury Palms](/experience/mercury-palms) was already part of Mark’s vacation-rental portfolio when our lives began coming together.',
              'Over time, it became much more than that.',
              'During the years we were building The Cole, Mercury Palms increasingly became our home. Then COVID arrived, and like so many people, suddenly our relationship with “home” changed completely.',
              'We spent a huge part of that strange period here.',
              'Vista Las Palmas stopped being a neighborhood where we owned a property and became the place where our actual daily life was happening.',
              'We learned the streets. We met neighbors. We worked on the landscaping. We spent endless time around the pool and backyard. Friends and family came through. Ordinary days started piling up into memories.',
              'And eventually, Mercury Palms became the place where Mark and I got married.',
            ],
          },
          {
            type: 'photo',
            ratio: '16 / 9',
            photo: { suggestion: 'Aerial of Mercury Palms', src: '/images/mercury-palms/mercury-palms-pool-mountain-views-palm-springs-david-weis.jpg', alt: 'Mercury Palms from above: the tile-roofed villa, pool and spa set among tall palms with the mountains beyond', width: 2048, height: 1365, hasSmall: true },
            caption: { title: 'Mercury Palms', note: 'Where Vista Las Palmas became home.' },
          },
          {
            type: 'story',
            eyebrow: 'Our wedding',
            heading: 'We got married in the backyard.',
            paragraphs: [
              'Approximately 120 of our friends and family gathered with us at Mercury Palms for our wedding.',
              'It felt right that something so important happened at home.',
              'This house had already held so much of our life together, and suddenly the backyard was filled with almost everyone we loved.',
              'After the ceremony, our guests were shuttled from Mercury Palms to [The Cole](/experience/the-cole) for the reception.',
              'Looking back, I love that those two properties were connected by our wedding day.',
              'Mercury Palms was where we had built a home.',
              'The Cole was where we had poured an enormous amount of ourselves into building a business.',
              'For one night, they became two parts of the same celebration.',
            ],
            aside: { suggestion: 'The ceremony in the backyard', src: '/images/mercury-palms/mercury-palms-wedding-backyard-ceremony-david-weis.jpg', alt: 'David and Mark exchanging vows under a floral arch in the backyard at Mercury Palms, the officiant between them', width: 1600, height: 2400, hasSmall: true, position: 'center 40%' },
            asideCaption: 'The ceremony, in the backyard at Mercury Palms.',
          },
          {
            type: 'gallery',
            label: 'The reception at The Cole',
            photos: [
              { suggestion: 'The reception around the pool at The Cole', src: '/images/vista-las-palmas/david-and-mark-weis-wedding-reception-the-cole-hotel-poolside.jpg', alt: 'Wedding guests at long white tables around the lit pool at The Cole Hotel at dusk, string lights overhead', width: 2400, height: 1600, hasSmall: true },
              { suggestion: 'David and Mark at The Cole sign', src: '/images/vista-las-palmas/david-and-mark-weis-wedding-the-cole-hotel-sign.jpg', alt: 'David and Mark Weis holding hands as they walk past The Cole Hotel sign on their wedding day', width: 1600, height: 2400, hasSmall: true },
              { suggestion: 'Cutting the cake in front of the mural', src: '/images/vista-las-palmas/david-and-mark-weis-wedding-cake-the-cole-hotel-mural.jpg', alt: 'Mark feeding David a bite of wedding cake in front of the geometric mural at The Cole Hotel', width: 2400, height: 1600, hasSmall: true },
              { suggestion: 'The dinner table', src: '/images/vista-las-palmas/david-and-mark-weis-wedding-reception-the-cole-hotel-dinner-table.jpg', alt: 'A long white reception table set with flowers at The Cole Hotel, the sign and palms behind', width: 1600, height: 2400, hasSmall: true },
            ],
            captions: [{ title: 'From home to The Cole', note: 'Our wedding at Mercury Palms, followed by the reception at The Cole.' }],
          },
          {
            type: 'story',
            eyebrow: 'The project that rooted us here',
            heading: 'The Cole changed everything.',
            paragraphs: [
              'While Mercury Palms gave us a home in Vista Las Palmas, The Cole is probably the project that truly tied our lives to Palm Springs.',
              'In 2019, Mark was transforming an aging apartment property into what would eventually become The Cole Hotel.',
              'It was an enormous undertaking.',
              'Permits. Contractors. City processes. Design. Utilities. Accessibility. Licensing. Operations. Hospitality. Problems that appeared only after another problem had finally been solved.',
              'Watching all of that happen completely changed the way I understood property.',
              'It was also when our life shifted.',
              'We officially moved to Palm Springs. I started working locally as a Personal Banker at Chase. Instead of constantly visiting Palm Springs, suddenly we were building careers, businesses, friendships and routines here.',
              'Palm Springs stopped being somewhere we escaped to.',
              'It became where life was happening.',
              'There were sacrifices behind The Cole too.',
              'Mark sold the Big Boy Estate in Vista Las Palmas to help provide capital for the project. Later, when construction became longer and harder than anticipated, another property we loved would have to be sold as well.',
              'Those decisions were difficult, but they taught me something I still think about in real estate today:',
              'Sometimes one property creates the opportunity for something much larger.',
            ],
          },
          {
            type: 'pair',
            ratio: '1 / 1',
            photos: [
              { suggestion: 'David and Mark at The Cole before', src: '/images/about/david-weis-mark-the-cole-before.jpg', alt: 'David and Mark Weis at The Cole Hotel property before its renovation', width: 2400, height: 2038, hasSmall: true },
              { suggestion: 'David and Mark at The Cole when it sold', src: '/images/about/david-weis-mark-the-cole-when-sold.jpg', alt: 'David and Mark Weis at The Cole Hotel on the day it sold', width: 2053, height: 2303, hasSmall: true },
            ],
            captions: [{ title: 'Before' }, { title: 'The day it sold' }],
          },
          {
            type: 'cta',
            label: 'Read the full story of The Cole',
            href: '/experience/the-cole',
          },
          {
            type: 'story',
            eyebrow: 'Right in the neighborhood',
            heading: 'An early test of the life we were building.',
            paragraphs: [
              'At almost the exact same time The Cole was consuming an extraordinary amount of Mark’s attention, he was also taking [444 W Stevens](/experience/444-w-stevens) through a complete residential renovation just down the street from Mercury Palms.',
              'For me, 444 became a huge education in renovation.',
              'But looking back, it was also one of the first real tests of what life with Mark was actually going to look like.',
              'We were still relatively new as a couple.',
              'I was in San Diego. Mark was constantly managing projects in Palm Springs. The Cole was under construction. 444 was torn apart. And somehow we were also trying to make sure we actually saw each other.',
              'There were endless drives between San Diego and Palm Springs.',
              'Eventually, when I moved to Palm Springs and started working at Chase, 444 became home for part of that chapter.',
            ],
          },
          {
            type: 'story',
            sub: true,
            heading: 'Our very normal housing situation.',
            paragraphs: [
              'Even then, our housing situation worked suspiciously like it sometimes still does today:',
              'We lived in whichever one of our properties happened to be available.',
              'One holiday season, everything else was occupied and 444 had already been staged for sale.',
              'So we lived in the staged house.',
              'Very carefully.',
              'Technically, staging furniture is not supposed to become your actual living-room furniture.',
              'But when times are tough… 😂',
              'Looking back, it feels like a preview of everything that came later.',
              'Multiple properties. Projects happening at the same time. Driving between cities. Constantly solving whatever problem appeared next.',
              'And somehow building a life together right in the middle of it.',
            ],
          },
          {
            type: 'story',
            sub: true,
            heading: 'What 444 taught me.',
            paragraphs: [
              'While all of that was happening personally, I was also watching a house come almost completely apart and become something extraordinary.',
              'Walls opened. The connection between the house and backyard changed dramatically. A casita was added. The pool environment was completely rethought. A separate oversized spa and Baja shelf changed the backyard.',
              'Mark created a dramatic new canopy with a tongue-and-groove ceiling that became one of the defining architectural features of the finished home.',
              'And I started learning about everything that happens before the pretty photographs: setbacks, utilities, permitting, existing conditions, what can remain, what new construction triggers, construction sequencing, materials and the difference between seeing potential and understanding how to actually build it.',
              '444 was also one of the first projects where I became more confident in my own design instincts.',
              'I became obsessed with some of the details, including a sparkling blue starburst tile that we carried beyond the pool and onto the exterior of the spa.',
              'It showed me how one relatively small material decision can become part of the architecture.',
            ],
          },
          {
            type: 'gallery',
            label: '444 W Stevens',
            photos: [
              { suggestion: '444 before', src: '/images/444-w-stevens/444-w-stevens-palm-springs-street-view-before-david-weis.jpg', alt: 'The front of 444 W Stevens before the renovation: a low stucco house behind gravel, boulders and palms', width: 2400, height: 1800, hasSmall: true },
              { suggestion: 'David at the gutted property', src: '/images/444-w-stevens/david-weis-444-w-stevens-palm-springs-renovation-under-construction.jpg', alt: 'David Weis standing beside the emptied pool at 444 W Stevens, the house behind him stripped to its frame', width: 2400, height: 1800, hasSmall: true },
              { suggestion: 'The canopy', src: '/images/444-w-stevens/444-w-stevens-palm-springs-entry-canopy-tongue-and-groove-ceiling-david-weis.jpg', alt: 'The finished entry canopy at 444 W Stevens, its tongue-and-groove wood ceiling glowing above the yellow double doors', width: 2400, height: 1800, hasSmall: true },
              { suggestion: 'The pool', src: '/images/444-w-stevens/444-w-stevens-palm-springs-pool-spa-baja-shelf-after-david-weis.jpg', alt: 'The finished pool at 444 W Stevens with the separate raised jacuzzi faced in blue starburst tile', width: 2400, height: 1910, hasSmall: true },
              { suggestion: 'The finished house', src: '/images/444-w-stevens/444-w-stevens-palm-springs-front-entry-canopy-yellow-doors-after-david-weis.jpg', alt: 'The finished front of 444 W Stevens: the entry canopy above yellow double doors', width: 1024, height: 684 },
            ],
            captions: [{ title: 'Before' }, { title: 'Under construction' }, { title: 'The canopy' }, { title: 'Rethinking the backyard' }, { title: 'The finished house' }],
          },
          {
            type: 'cta',
            label: 'Explore the 444 W Stevens renovation',
            href: '/experience/444-w-stevens',
          },
          {
            type: 'note',
            text: 'Project note: 444 W Stevens Road is included as part of David’s personal renovation and real estate experience. David did not act as the real estate agent or broker representing its purchase or sale.',
          },
          {
            type: 'callout',
            text: 'The houses brought us here.',
            second: 'The people made it home.',
          },
          {
            type: 'story',
            eyebrow: 'Annual traditions',
            heading: 'Some weekends become part of the calendar.',
            paragraphs: [
              'Memorial Day became one of those traditions we started looking forward to every year.',
              'What began as a weekend with friends gradually became something people expected to happen.',
              'Pool days. Dogs. Food. Drinks. Mountain views. Familiar faces coming back. New people being introduced.',
              'Some of these friendships came through the neighborhood. Others came from completely different parts of our lives.',
              'But every year, the house filled up and Palm Springs felt a little more like home.',
              'Those weekends remind me that a house can be beautifully designed and perfectly maintained, but the moments that really give it meaning usually have nothing to do with the finishes.',
            ],
          },
          {
            type: 'gallery',
            label: 'Memorial Day, year by year',
            photos: [
              { suggestion: 'Year one', src: '/images/mercury-palms/mercury-palms-memorial-day-year-one-david-weis.jpg', alt: 'David, Mark and a friend raising glasses in the Mercury Palms kitchen on the first Memorial Day weekend', width: 1206, height: 1013, hasSmall: true },
              { suggestion: 'Year two', src: '/images/mercury-palms/mercury-palms-memorial-day-year-two-david-weis.jpg', alt: 'A dozen friends and three dogs gathered beside the Mercury Palms pool with the mountains behind, Memorial Day weekend year two', width: 2048, height: 1565, hasSmall: true },
              { suggestion: 'Year three', src: '/images/mercury-palms/mercury-palms-memorial-day-year-three-david-weis.jpg', alt: 'Friends lined up along the tiled spa wall at Mercury Palms, palms and mountains behind, Memorial Day weekend year three', width: 1206, height: 1568, hasSmall: true, position: 'center 55%' },
            ],
            captions: [
              { title: 'Year one', note: 'The weekend that started a tradition.' },
              { title: 'Year two', note: 'Apparently we were doing this again.' },
              { title: 'Year three', note: 'At this point it was officially a thing.' },
            ],
          },
          {
            type: 'story',
            eyebrow: 'Vista Las Palmas',
            heading: 'Then neighbors became friends.',
            paragraphs: [
              'Somewhere along the way, the houses stopped being the thing I noticed most about Vista Las Palmas.',
              'The people became the story.',
              'Neighborhood socials turned into seeing familiar faces again and again.',
              'A walk or bike ride meant running into someone I knew instead of simply admiring the architecture.',
              'Events became traditions.',
              'Neighbors became friends.',
              'And the more connected I felt to the neighborhood, the more interested I became in helping with what happened behind the scenes.',
            ],
          },
          {
            type: 'gallery',
            label: 'Neighborhood socials',
            photos: [
              { suggestion: 'The Fall Social', src: '/images/community/david-weis-vista-las-palmas-fall-social-palm-springs.jpg', alt: 'David Weis, Mark and neighbors at a Vista Las Palmas fall social gathering beside a lit pool at night', width: 2335, height: 2400, hasSmall: true },
              { suggestion: 'Neighbors at a spa with the mountains behind', src: '/images/about/david-weis-vista-las-palmas-neighborhood-event.jpg', alt: 'Neighbors gathered at a spa with the mountains behind them at a Vista Las Palmas neighborhood event', width: 1206, height: 1568, hasSmall: true },
              { suggestion: 'The Spring Social', src: '/images/vista-las-palmas/vista-las-palmas-spring-social-palm-springs-david-weis.jpg', alt: 'Neighbors at the Vista Las Palmas Spring Social' },
              { suggestion: 'The Summer Social', src: '/images/vista-las-palmas/vista-las-palmas-summer-social-palm-springs-david-weis.jpg', alt: 'Neighbors at the Vista Las Palmas Summer Social' },
              { suggestion: 'The Halloween Pet Parade', src: '/images/vista-las-palmas/vista-las-palmas-halloween-pet-parade-palm-springs-david-weis.jpg', alt: 'Dogs in costume at the Vista Las Palmas Halloween Pet Parade' },
            ],
            captions: [
              { title: 'Fall Social', note: 'Season starting again in Vista Las Palmas.' },
              { title: 'Neighbors' },
              { title: 'Spring Social', note: 'Starting another season together.' },
              { title: 'Summer Social', note: 'Palm Springs residents apparently will socialize at any temperature.' },
              { title: 'Halloween Pet Parade', note: 'One of those neighborhood traditions that is impossible not to love.' },
            ],
          },
          {
            type: 'story',
            eyebrow: 'Design + community',
            heading: 'Living inside the architecture people travel here to see.',
            paragraphs: [
              'Palm Springs architecture is one of the reasons people are drawn to Vista Las Palmas.',
              'Living here gives you another perspective.',
              'The homes are not museum pieces. People live in them, renovate them, preserve them, share them and sometimes open them to hundreds of visitors during Modernism Week.',
              'Mark and I have volunteered as docents, attended neighborhood tours and supported designers and organizations doing work we genuinely admire.',
              'I love that Vista Las Palmas can celebrate its history without feeling frozen in it.',
            ],
          },
          {
            type: 'gallery',
            label: 'Modernism Week',
            photos: [
              { suggestion: 'Mark, Kathy and David as docents', src: '/images/about/david-weis-modernism-week-kathy.jpg', alt: 'David, Mark and Kathy in matching Vista Las Palmas shirts as volunteer docents during Modernism Week in Palm Springs', width: 1800, height: 2400, hasSmall: true, position: 'center 35%' },
              { suggestion: 'Docents in front of the pool', src: '/images/about/modernism-week-vista-las-palmas-docents-pool-david-weis.jpg', alt: 'Four volunteer docents standing in front of a pool in Vista Las Palmas, with palms and the San Jacinto Mountains behind them', width: 1800, height: 2400, hasSmall: true, position: 'center 40%' },
              { suggestion: 'With Mark at Limón', src: '/images/about/david-weis-mark-h3k-property.jpg', alt: 'David and Mark Weis at the yellow front door of Limón, an H3K design project in Palm Springs', width: 1800, height: 2400, hasSmall: true, position: 'center 42%' },
            ],
            captions: [{ title: 'Volunteer docents', note: 'Helping neighbors share their homes during Modernism Week.' }, { title: 'Vista Las Palmas' }, { title: 'Limón', note: 'An H3K design project on the Modernism Week tour.' }],
          },
          {
            type: 'story',
            eyebrow: 'VLPNF',
            heading: 'Eventually, enjoying the neighborhood wasn’t enough.',
            paragraphs: [
              'At some point, I realized I didn’t want to simply enjoy the events other people were creating.',
              'I wanted to help.',
              'Joining the board of the Vista Las Palmas Neighbors Foundation gave me a way to contribute in areas that already felt natural to me: communication, organization, design, technology and bringing people together.',
              'I’ve helped with neighborhood events and communications, maintained and improved our website, organized information and archives, worked on signage and helped make it easier for neighbors to understand what is happening and how to get involved.',
              'Some of that work is visible.',
              'A lot of it is the unglamorous behind-the-scenes stuff that makes a volunteer organization function.',
              'I genuinely enjoy both.',
            ],
          },
          {
            type: 'story',
            sub: true,
            heading: 'What I’ve helped with',
            paragraphs: [
              'Neighborhood website: making resources and updates easier to find.',
              'Events calendar: keeping neighborhood events organized and accessible.',
              'Neighborhood Watch: improving access to useful safety and community information.',
              'Photo galleries: preserving neighborhood memories instead of letting them disappear into phones.',
              'Event signage: Pet Parade and other event materials.',
              'Communications: helping make information clearer, more useful and more consistent.',
            ],
            aside: { suggestion: 'VLPNF signage or website work', src: '/images/vista-las-palmas/vista-las-palmas-neighbors-foundation-event-signage-david-weis.jpg', alt: 'Event signage David helped make for the Vista Las Palmas Neighbors Foundation' },
            asideRatio: '4 / 3',
            asideCaption: 'Signage for the Pet Parade and other neighborhood events.',
          },
          {
            type: 'story',
            eyebrow: 'Beyond our own streets',
            heading: 'Then Vista Las Palmas introduced me to the rest of Palm Springs.',
            paragraphs: [
              'My neighborhood involvement eventually introduced me to ONE-PS, the network connecting organized neighborhoods throughout Palm Springs.',
              'I started as the alternate representative for Vista Las Palmas.',
              'What I expected to be another way to support our neighborhood quickly became an education in the larger city.',
              'Sitting with representatives from neighborhoods throughout Palm Springs gives you a very different perspective.',
              'Every neighborhood has its own personality, priorities and challenges.',
              'But ultimately, everyone is wrestling with versions of the same question:',
              'How do we help Palm Springs continue evolving without losing what makes it special?',
              'I loved hearing what other neighborhoods were doing, what they were struggling with and what we could learn from one another.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'Neighborhoods of Distinction',
            heading: 'A proud moment for Vista Las Palmas.',
            paragraphs: [
              'Seeing Vista Las Palmas recognized through the Neighborhoods of Distinction program was especially meaningful once I understood how many people contribute to making a neighborhood organization work.',
              'The visible part is the event.',
              'Behind it are board members, committees, volunteers, homeowners and residents spending hours communicating, organizing, planning and quietly solving problems.',
              'The recognition belongs to a neighborhood, not one person.',
              'That is what made it meaningful.',
            ],
          },
          {
            type: 'pair',
            ratio: '4 / 5',
            emphasis: 'first',
            photos: [
              { suggestion: 'The award presentation', src: '/images/community/david-weis-one-ps-neighborhood-of-distinction-award-palm-springs.jpg', alt: 'Vista Las Palmas Neighbors Foundation board members, David Weis among them, on stage at the ONE-PS awards with the Neighborhoods of Distinction award', width: 2400, height: 1996, hasSmall: true },
              { suggestion: 'The award', src: '/images/community/vista-las-palmas-neighborhood-of-distinction-award-david-weis.jpg', alt: 'The ONE-PS Neighborhoods of Distinction 2025 Honor Award for Vista Las Palmas, a crystal trophy set beside a pool with the mountains behind', width: 1800, height: 2400, hasSmall: true },
            ],
            captions: [
              { title: 'ONE-PS Neighborhoods of Distinction', note: '2025 Honor Award, presented to the Vista Las Palmas Neighbors Foundation.' },
              { title: 'The award' },
            ],
          },
          {
            type: 'story',
            eyebrow: 'Another perspective',
            heading: 'Then I got to see it from the other side.',
            paragraphs: [
              'My involvement with ONE-PS eventually led to another opportunity: joining the Neighborhoods of Distinction Awards Committee.',
              'I liked the idea immediately.',
              'Instead of thinking only about my own neighborhood, I would get to learn what communities throughout Palm Springs were doing well.',
              'What programs were working? How were different neighborhoods bringing people together? What were volunteers doing that deserved recognition?',
              'Every neighborhood operates differently, and there is always something worth learning from someone else.',
              'That is probably what I enjoy most about getting involved in the first place.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'Still saying yes',
            heading: 'One small role can open a lot of doors.',
            paragraphs: [
              'Starting as an alternate representative eventually led to the NODA Committee and other opportunities to become more involved with ONE-PS and the wider Palm Springs community.',
              'I didn’t begin any of this with a plan for where it would lead.',
              'I just kept saying yes when there was something useful I could do.',
              'That may be one of my favorite things about community involvement.',
              'You never really know where showing up is going to take you.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'What this taught me about real estate',
            heading: 'A house is only one part of where someone lives.',
            paragraphs: [
              'Real estate gives me the privilege of helping people enter and leave communities.',
              'Living in one, investing in one and serving one has made me think much more about everything that happens between those transactions.',
              'A neighborhood is shaped by the people who show up for it.',
              'The person who organizes the social. The volunteer putting out signs. The neighbor updating the website. The resident who asks a difficult question. The person who notices something needs attention and actually does something about it.',
              'The house matters.',
              'The community around it matters too.',
            ],
          },
        ],
      },
    ],
    closing: {
      eyebrow: 'Home',
      heading: 'More than where I live.',
      paragraphs: [
        'Vista Las Palmas has held an enormous amount of our life.',
        'Renovations. COVID. The early years of my relationship with Mark. Our wedding. Annual Memorial Day weekends. Neighborhood socials. Friendships. Projects. The ordinary days in between all of them.',
        'What started with owning property here became something I care much more deeply about.',
        'I am proud of where I live, but even more grateful for the people who made me feel like I belong here.',
        'And I’m excited to see where saying yes takes me next.',
      ],
      cta: { label: 'Explore Palm Springs Real Estate', href: '/palm-springs' },
      links: [
        { label: 'Mercury Palms', href: '/experience/mercury-palms' },
        { label: 'The Cole', href: '/experience/the-cole' },
        { label: '444 W Stevens', href: '/experience/444-w-stevens' },
        { label: 'About David', href: '/about' },
      ],
    },
    seo: {
      title: 'Vista Las Palmas Palm Springs | David Weis',
      description:
        'David Weis shares how Vista Las Palmas became home, from Mercury Palms, The Cole and 444 W Stevens to neighborhood traditions, VLPNF and involvement with ONE-PS.',
    },
  },
  {
    slug: 'work-truck',
    crumb: 'The work truck',
    eyebrow: 'Tools of the trade',
    title: 'I could have bought another car I wanted. I bought the truck I needed.',
    titleSize: 'xl',
    intro: [
      'There were a lot of electric cars I wanted. There were also already five cars in our garage.',
      'By 2026, my real estate business had expanded across San Diego, Palm Springs and Big Bear, and the amount of driving, hauling and wear I was putting on our personal vehicles was becoming impossible to ignore.',
      'For once, adding another fun car was not the answer.',
      'The business needed a truck.',
    ],
    lead: truckPhotos.sierra,
    chapters: [
      {
        id: 'the-story',
        after: -1,
        blocks: [
          {
            type: 'story',
            eyebrow: 'Before all of this',
            heading: 'I actually started with the practical answer.',
            paragraphs: [
              'When Mark and I met, I already owned a Chevy Colorado.',
              'At the time I also had a motorcycle, so the setup made perfect sense. The motorcycle could go in the bed, Sybil could come along, and if something needed to be moved or picked up, I had a vehicle that was actually designed for it.',
              'The Colorado eventually became part of building [The Cole](/experience/the-cole) too.',
              'Ladders. Materials. Supplies. Whatever needed to make the trip.',
              'I never really thought of it as a “work vehicle.”',
              'It was simply the useful car.',
            ],
          },
          {
            type: 'pair',
            ratio: '3 / 2',
            emphasis: 'first',
            photos: [truckPhotos.colorado, truckPhotos.coloradoCole],
            captions: [
              { title: 'The Colorado', note: 'In retrospect, we should have kept it.' },
              { title: 'The Cole', note: 'Before I realized how useful this truck actually was.' },
            ],
          },
          {
            type: 'story',
            sub: true,
            heading: 'This decision aged terribly.',
            paragraphs: [
              'Eventually the motorcycle went away.',
              'Then the Colorado went away.',
              'And somehow we convinced ourselves that because I no longer had a motorcycle, we no longer needed a truck.',
              'What we failed to account for was basically everything else in our lives.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'The wrong tools for the job',
            heading: 'Mark kept calling them work trucks.',
            paragraphs: [
              'As our projects grew, Mark started casually referring to the Range Rovers as our “work trucks.”',
              'I objected repeatedly.',
              'Range Rovers are dream cars for a lot of people.',
              'Mark saw cargo space.',
            ],
          },
          {
            type: 'callout',
            text: 'Mark: “It’s a work truck.”',
            second: 'Me: “It is literally a Range Rover.”',
          },
          {
            type: 'pair',
            ratio: '4 / 5',
            photos: [truckPhotos.flooring, truckPhotos.evoque],
            captions: [
              { title: 'The Range Rover years', note: 'Beautiful. Luxurious. Apparently also construction equipment.' },
              { title: 'The Evoque convertible', note: 'Apparently “convertible” also means “landscape vehicle.”' },
            ],
          },
          {
            type: 'pair',
            ratio: '4 / 5',
            align: 'left',
            photos: [
              truckPhotos.lowes,
              { suggestion: 'Open-house signs, plants or property supplies in a Range Rover', src: '/images/work-truck/david-weis-range-rover-open-house-signs-supplies.jpg', alt: 'Open-house signs and property supplies packed into a Range Rover' },
            ],
            captions: [
              { title: 'Sometimes even we had limits', note: 'A rare moment of appropriate vehicle selection.' },
              { title: 'Signs, plants, supplies', note: 'Whatever would fit. And sometimes things that absolutely should not have.' },
            ],
          },
          {
            type: 'story',
            eyebrow: 'Three markets',
            heading: 'The miles started adding up.',
            paragraphs: [
              'By 2026, my business looked very different.',
              'I was working across San Diego, Palm Springs and Big Bear.',
              'That means a lot more driving than the occasional trip to show a house.',
              'Listings. Open houses. Inspections. Client appointments. Vendor meetings. Property projects. Vacation rentals. Signs. Supplies.',
              'And plenty of trips where something needed to come with me.',
              'The mileage started adding up quickly.',
              'But mileage is only one way you experience what all of that driving costs.',
              'There are tires. Maintenance. Rock chips. Windshield damage. Depreciation. Interior wear.',
              'And the constant reality that a vehicle you personally care about is absorbing thousands of business miles.',
              'I was using our personal vehicles to support a business that had grown well beyond occasional local driving.',
              'At some point, that stopped making sense.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'Thinking like a business owner',
            heading: 'Mileage worked. Until I started looking at the whole picture.',
            paragraphs: [
              'For years, I handled my business driving through mileage.',
              'It was easy and straightforward.',
              'But as the amount of driving and vehicle wear increased, I started paying much closer attention to what those miles actually represented.',
              'Tires, maintenance and repairs were real expenses, even if I was accounting for vehicle use through mileage rather than separately deducting every individual cost.',
              'At the same time, I had formed an LLC and was becoming much more intentional about how I structured the business.',
              'I started looking at the possibility of having a dedicated company vehicle instead of continuing to put business wear onto cars that were primarily ours personally.',
              'The more I looked at it, the more obvious the answer became.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'The fun answer was not the right answer',
            heading: 'There were definitely other cars I wanted.',
            paragraphs: [
              'Once I knew I wanted my next vehicle to be electric, there was no shortage of cars I could have talked myself into.',
              'There were several I genuinely wanted.',
              'The problem was that we already had five cars.',
              'Another car that was simply fun, beautiful or interesting was not filling any real gap.',
              'I needed to be realistic.',
              'If I was going to add another vehicle, it needed to do something the other five could not.',
            ],
          },
          {
            type: 'callout',
            text: 'The garage did not need another fun car.',
            second: 'The business needed a truck.',
          },
          {
            type: 'story',
            heading: 'Practical won.',
            paragraphs: [
              'Once I stopped asking what I wanted and started asking what the business actually needed, the list became pretty clear.',
              'I needed something that could haul property supplies, carry signs and equipment, handle dump runs, survive landscaping projects, move things between properties, absorb thousands of business miles, make the drive between San Diego, Palm Springs and Big Bear comfortably, and do all of that without turning another luxury SUV into construction equipment.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'Practical didn’t have to mean boring',
            heading: 'I still wanted an EV.',
            paragraphs: [
              'Being practical did not mean abandoning everything I wanted.',
              'I still wanted the next vehicle to be electric.',
              'With the amount of driving I do between markets, an EV made sense to explore, but it also needed enough usable range that my workday would not revolve around finding chargers.',
              'Whatever I chose had to work as a real vehicle first.',
              'Not as an experiment.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'The Sierra EV',
            heading: 'The answer was a 2026 GMC Sierra EV AT4 Extended Range.',
            paragraphs: [
              'The Sierra checked a strangely specific combination of boxes.',
              'It was an actual pickup.',
              'It gave me the cargo capability we had spent years pretending our SUVs possessed.',
              'It was electric.',
              'It had the range to make my three-market life realistic.',
              'And it was comfortable enough that hours behind the wheel between San Diego, Palm Springs and Big Bear did not feel like punishment.',
              'It ended up being the rare situation where the responsible choice was also something I was genuinely excited about.',
            ],
          },
          {
            type: 'pair',
            ratio: '3 / 2',
            photos: [truckPhotos.bed, truckPhotos.listing],
            captions: [
              { title: 'The Sierra', note: 'Finally, the right tool for the job.' },
              { title: 'Three markets', note: 'San Diego. Palm Springs. Big Bear. Repeat.' },
            ],
          },
          {
            type: 'story',
            eyebrow: 'Built for the business',
            heading: 'This one had a job from day one.',
            paragraphs: [
              'Unlike the other cars in our garage, I bought the Sierra with a very specific purpose.',
              'It became the dedicated work vehicle.',
              'Property runs. Open houses. Signs. Supplies. Landscaping. Inspections. Trips between markets.',
              'Whatever the work required that day.',
              'After years of trying to protect our personal vehicles while simultaneously filling them with things that absolutely did not belong inside them, I finally had a vehicle whose job was to take the abuse.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'Case closed',
            heading: 'Two dump runs in the first two weeks.',
            paragraphs: [
              'It did not take long to find out whether I had made the right decision.',
              'Within the first couple of weeks, the Sierra had already made two dump runs.',
              'After years of putting construction materials, plants, signs and whatever else would fit inside luxury SUVs, seeing actual debris sitting in an actual pickup bed was strangely satisfying.',
              'Apparently we did need a truck.',
              'Case closed.',
            ],
          },
          {
            type: 'photo',
            ratio: '16 / 10',
            photo: truckPhotos.dump,
            caption: { title: 'Two weeks in', note: 'Already making dump runs.' },
          },
          {
            type: 'story',
            sub: true,
            heading: 'There was one minor issue.',
            paragraphs: [
              'Apparently “Will it fit in the garage?” should have been slightly higher on the research list.',
              'It fits.',
              'By about an inch.',
              'Which is technically all the clearance you need.',
            ],
            aside: truckPhotos.garage,
            asideRatio: '4 / 3',
            asideCaption: 'Garage clearance. One inch is still clearance.',
          },
          {
            type: 'story',
            eyebrow: 'The less exciting decision',
            heading: 'Sometimes growing the business means buying what you need instead of what you want.',
            paragraphs: [
              'There is absolutely a version of me who would have preferred another fun car.',
              'But building a business has made me much more aware of the difference between something I want and something the business genuinely needs.',
              'Working three markets means miles.',
              'Owning and managing properties means things constantly need to move.',
              'Running a business means thinking differently about equipment, expenses and where the wear should actually go.',
              'And already owning five cars makes buying a sixth because I simply like it a fairly difficult argument to make with a straight face.',
              'So I bought the truck.',
              'Ironically, it may have become one of my favorite vehicles anyway.',
            ],
          },
          {
            type: 'links',
            heading: 'Keep reading',
            items: [
              { label: 'About David', href: '/about' },
              { label: 'The Cole', href: '/experience/the-cole' },
              { label: 'Sierra Chalet', href: '/experience/sierra-chalet' },
            ],
          },
        ],
      },
    ],
    seo: {
      title: 'Why I Bought a Work Truck | David Weis',
      description:
        'Why a three-market real estate business, years of vehicle wear and a need for a dedicated company vehicle led David Weis to choose an electric GMC Sierra pickup.',
    },
  },
];

export function getStory(slug: string): StoryPage {
  const s = stories.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown story: ${slug}`);
  return s;
}

export function storyHref(s: Pick<StoryPage, 'slug'>): string {
  return `/${s.slug}`;
}

/**
 * Desert Business Association story page (route /desert-business-association).
 * Copy is David's, from his 2026-10-10 build instructions, verbatim. Rendered
 * by src/components/StoryPage.astro; the audio, document, faq and quote blocks
 * are defined in projects.ts and Chapter.astro.
 *
 * To add an event to "Around the DBA", append a story block with `aside` to the
 * `around-dba` chapter, newest first, with a confirmed date including the year,
 * a short first-person account, authentic photos and specific alt text. The two
 * current entries are undated on purpose: David has not confirmed the dates.
 */
import type { StoryPage } from './stories';
import type { Photo } from './types';

const DBA = 'https://www.desertbusinessassociation.org';

const photos = {
  hero: { suggestion: 'David with a fellow attendee holding the Diversity is Groovy for Business sign at Boozehounds', src: '/images/dba/david-weis-dba-boozehounds.jpg', alt: 'David Weis with a fellow attendee holding a Diversity is Groovy for Business sign at a DBA gathering at Boozehounds.', width: 1206, height: 1805 },
  blackbook: { suggestion: 'The DBA mixer on the Blackbook patio', src: '/images/dba/david-weis-dba-blackbook-palm-springs.jpg', alt: 'DBA members gathered on the patio for a networking mixer at Blackbook in Palm Springs.', width: 1206, height: 895 },
  ad: { suggestion: 'The Querencia Palms Guide to Pride ad', src: '/images/dba/querencia-palms-guide-to-pride-ad-preview.jpg', alt: 'Original Querencia Palms Guide to Pride advertisement headed Let us help you find your querencia, with pool and interior photographs, a community description, and David Weis and Ty Nasief contact details.', width: 1600, height: 1249 },
  speed: { suggestion: 'The speed networking group photograph', src: '/images/dba/david-weis-dba-speed-networking.jpg', alt: 'Group photograph of attendees at a Desert Business Association speed networking event.', width: 1206, height: 1207 },
  holiday: { suggestion: 'David seated with two attendees at the Boozehounds holiday gathering', src: '/images/dba/david-weis-dba-holiday-boozehounds.jpg', alt: 'David Weis seated with two fellow attendees at a DBA holiday gathering at Boozehounds.', width: 928, height: 792 },
} satisfies Record<string, Photo>;

export const dbaStory: StoryPage = {
  slug: 'desert-business-association',
  ogImage: '/images/dba/david-weis-dba-boozehounds.jpg',
  crumb: 'Desert Business Association',
  eyebrow: 'Palm Springs · Business · Community',
  title: 'Desert Business Association',
  intro:
    'I went to City Hall looking for ways to get Querencia Palms in front of more people. I left with an introduction that connected more of my Palm Springs life than I expected.',
  chapters: [
    {
      id: 'about-dba',
      after: 0,
      blocks: [
        {
          type: 'story',
          eyebrow: 'The organization',
          heading: 'What is the DBA?',
          paragraphs: [
            `The [Desert Business Association](${DBA}/) is the LGBTQ+ chamber of commerce for the Coachella Valley. Founded in 1979, it connects LGBTQ+ and allied businesses and professionals throughout the region.`,
            'Its mission brings together business education, local economic growth, visibility for members, and support for community causes, with a commitment to diversity, equity, and inclusion.',
          ],
          aside: photos.hero,
          asideRatio: '2 / 3',
          asideCaption: 'Getting involved with the Desert Business Association.',
        },
        {
          type: 'story',
          sub: true,
          heading: 'Why it matters to me',
          paragraphs: [
            'Running The Cole introduced me to people across Palm Springs. Through DBA, some of those relationships have continued into new projects, while others have connected with my life in Vista Las Palmas. I’ve also met people and discovered businesses I might not otherwise have come across.',
            'That is the value I see in it: knowing the people behind the businesses, staying connected, and finding opportunities to support one another.',
          ],
        },
      ],
    },
    {
      id: 'how-it-started',
      after: 1,
      blocks: [
        {
          type: 'story',
          eyebrow: 'How it started',
          heading: 'I figured I should ask.',
          paragraphs: [
            'When I was working to get [Querencia Palms](/experience/querencia-palms) in front of more people, I was willing to try just about anything that might help. One of those ideas was reaching out to Wayne Olson, the City of Palm Springs’ Chief Economic Development Officer.',
            'I figured he would be a good person to meet with. He understood the city, its businesses, and the people working to move things forward.',
            'It turned out to be a very good idea.',
            'Wayne told me about the Desert Business Association, the LGBTQ+ chamber serving the Coachella Valley. While I was still sitting in his office, he picked up the phone and called the director.',
          ],
        },
        {
          type: 'callout',
          text: 'He made the introduction while I was still in the room.',
          paragraphs: [
            'I had gone in looking for ideas to help market a property. That conversation introduced me to an organization where business, community, and relationships were already closely connected.',
          ],
        },
      ],
    },
    {
      id: 'getting-involved',
      after: 2,
      blocks: [
        {
          type: 'story',
          eyebrow: 'Getting involved',
          heading: 'I already knew more people than I realized.',
          paragraphs: [
            'Once I became involved, I began seeing people I had known through [The Cole Hotel](/experience/the-cole), my neighborhood, and other parts of life in Palm Springs.',
            'Some relationships went back years. Others were just beginning. I’ve met web developers, charcuterie makers, and neighbors from Vista Las Palmas who had opened [Ben’s Flower Shop](https://bensflowershop.com/).',
            'That mix is part of what I enjoy: learning what people do, finding something in common, and seeing where the conversation goes.',
          ],
        },
        {
          type: 'story',
          sub: true,
          eyebrow: 'From The Cole',
          heading: 'Bob at Roadrunner',
          paragraphs: [
            'Bob Kincaid at [Roadrunner Print and Ship](https://www.roadrunnerprintandship.com/) had helped me back when I was running The Cole. He was another familiar face at DBA and had also served as its president. Someone I already knew through the day-to-day work of operating a hotel was helping lead the organization I had joined.',
          ],
        },
        {
          type: 'story',
          sub: true,
          eyebrow: 'From the neighborhood',
          heading: 'Vista Las Palmas connections',
          paragraphs: [
            '[Byron Hancock](https://www.hpwealthstrategies.com/team/byron-hancock) of Hancock Partners Wealth Strategies is both a DBA member and a fellow board member of the [Vista Las Palmas Neighbors Foundation](https://vistalaspalmas.org/board-members). Meeting the neighbors behind Ben’s Flower Shop added another connection between the neighborhood and the local business community.',
          ],
        },
      ],
    },
    {
      id: 'blackbook',
      after: 3,
      blocks: [
        {
          type: 'story',
          eyebrow: 'A familiar face at Blackbook',
          heading: 'We had met years before.',
          paragraphs: [
            'Before we found Freddie’s at The Cole, Dean Lavine, the owner of [Blackbook](https://www.blackbookbar.com/), came to meet with us about potentially opening a restaurant and bar at the hotel.',
            'Years later, I attended a DBA networking mixer hosted at Blackbook.',
            'There was a whole earlier chapter behind that familiar face. We had first met while exploring an idea for The Cole. Now we were in the same room again through DBA.',
            'It is one of the things I like about being involved here. People keep becoming part of your life in different ways.',
          ],
        },
        {
          type: 'photo',
          photo: photos.blackbook,
          ratio: '1206 / 895',
          caption: 'A DBA networking mixer at Blackbook, hosted by Dean Lavine.',
        },
      ],
    },
    {
      id: 'campaigns',
      after: 4,
      blocks: [
        {
          type: 'story',
          eyebrow: 'The collaborations',
          heading: 'From The Cole to Querencia Palms.',
          paragraphs: [
            'Some of the people I first met while running The Cole later helped me introduce Querencia Palms to a wider audience. Those relationships continued as the work changed.',
          ],
        },
        {
          type: 'document',
          heading: 'A place in the Guide to Pride.',
          paragraphs: [
            'I met Eric Davis of GED Magazine while running The Cole. Later, he helped with Querencia Palms, including an advertisement we placed in GED’s [Guide to Pride](https://guidetopride.com/).',
            'The ad introduced the community through the meaning of its name: querencia, a place where you feel safe, authentic, and at home.',
            'It gave us a way to share what we were creating at Querencia Palms while supporting a local LGBTQ+ publication.',
          ],
          preview: photos.ad,
          download: { label: 'Download the original ad', href: '/files/Querencia_Palms_Guide_to_Pride_Ad.pdf' },
          caption: {
            title: 'Our Querencia Palms advertisement for GED’s Guide to Pride.',
            note: 'Shown as originally created, as part of the campaign archive. Select the image to enlarge it.',
          },
        },
        {
          type: 'audio',
          eyebrow: 'On the radio',
          heading: 'Another connection from the hotel.',
          intro: [
            'I also met Brad Fuhr while running The Cole. Brad owns Gay Desert Guide and [KGAY](https://gaydesertguide.com/kgay/), and he is part of DBA too. When it came time to get the word out about Querencia Palms, he helped with these radio spots.',
            'It was another way a relationship from the hotel years continued into a new project.',
          ],
          tracks: [
            // Transcripts made 2026-10-16 with whisper.cpp (small.en) on this Mac, names
            // corrected by ear. Max to listen once and confirm before launch.
            {
              title: 'Querencia Palms · Version 1',
              subtitle: 'Radio advertisement · 29 seconds',
              src: '/files/querencia-palms-radio-version-1.mp3',
              transcript: [
                "At Querencia Palms, home is more than just a place. Our fully renovated condo community is inspired by the many meanings of querencia, a place where one feels safe, authentic, and truly at home. Mountain views, full amenities, and a setting that's part Melrose Place, part Tales of the City. See for yourself: contact David Weis and tour Querencia today. Find Querencia on the As Heard On page from KGAY.",
              ],
            },
            {
              title: 'Querencia Palms · Version 2',
              subtitle: 'Radio advertisement · 29 seconds',
              src: '/files/querencia-palms-radio-version-2.mp3',
              // Archived ad: the spoken price stays verbatim, under the archive note below.
              transcript: [
                "There's a condo development whose name says it all: Querencia Palms. Nestled in South Palm Springs, Querencia Palms is a fully renovated boutique condo community. One- and two-bedroom condos are on sale now from the mid-400s. Querencia Palms, where you and your neighbors will build community in a setting that's part Melrose Place, part Tales of the City. See for yourself: contact David Weis and tour Querencia today. Find Querencia on the As Heard On KGAY page.",
              ],
            },
          ],
          note: 'From the Querencia Palms campaign archive. These recordings are shared as examples of past advertising.',
        },
      ],
    },
    {
      id: 'member-spotlight',
      after: 5,
      blocks: [
        {
          type: 'quote',
          eyebrow: 'DBA member spotlight',
          heading: 'Featured alongside fellow members.',
          paragraphs: [
            'DBA later featured me as part of its member spotlight series. The piece brought together my background in finance and hospitality, my real estate work, and the community involvement that has become such a big part of my life.',
            'I appreciated that it told the story behind the work. This passage captured why being part of DBA matters to me:',
          ],
          quote: '“For David, being part of the DBA is about the power of community, connection, and creating opportunities for one another.”',
          attribution: 'Desert Business Association / Member spotlight, May 2026',
          // The article (posted 4 May 2026) is public at
          // https://app.chambermate.com/public/standalone?standaloneContentTypeCode=POST&entityKey=FAPXSm%7CLOl%7CfNVvvuZHIrw2
          // but still says David "co-developed" The Cole and uses "five-star", which his
          // 2026-10-12 review corrects. Once DBA fixes it, turn the button on with:
          // cta: { label: 'Read the DBA member spotlight', href: '<that URL>', external: true },
        },
      ],
    },
    {
      id: 'around-dba',
      after: 6,
      blocks: [
        {
          type: 'story',
          eyebrow: 'Around the DBA',
          heading: 'A few moments along the way.',
          paragraphs: [],
        },
        {
          type: 'story',
          sub: true,
          heading: 'Speed networking',
          paragraphs: [
            'I’ve also taken part in DBA speed networking. It is a different way to meet people: a room full of local businesses, a series of introductions, and the chance to continue those conversations afterward.',
          ],
          aside: photos.speed,
          asideRatio: '1206 / 1207',
          asideAlign: 'center',
        },
        {
          type: 'story',
          sub: true,
          heading: 'Holiday cheers at Boozehounds',
          paragraphs: [
            'When I shared photos from the holiday gathering at Boozehounds, I wrote that it was special reconnecting with familiar faces and that I was glad I had finally joined after all those years. That still feels like a good way to describe it.',
          ],
          aside: photos.holiday,
          asideRatio: '928 / 792',
          asideAlign: 'center',
        },
      ],
    },
    {
      id: 'dba-faqs',
      after: 7,
      blocks: [
        {
          type: 'faq',
          heading: 'Exploring the DBA.',
          items: [
            {
              q: 'Is DBA membership open to allies?',
              a: [`Yes. DBA welcomes LGBTQ+ people and allies who support its mission, including business owners, professionals, nonprofits, and community members. You can learn more through [DBA’s membership FAQs](${DBA}/faq).`],
            },
            {
              q: 'How can I find local DBA businesses?',
              a: [`The [DBA business directory](${DBA}/business-directory) is a place to explore member businesses and organizations serving Palm Springs and the wider Coachella Valley.`],
            },
            {
              q: 'Where can I find events or learn how to join?',
              a: [`Visit the [DBA event calendar](${DBA}/events/eventcalendar) for current gatherings and registration details. For membership information, start with [DBA’s membership benefits](${DBA}/join-us/membership-benefits). Event details and membership options are maintained by DBA.`],
            },
            {
              q: 'How are you involved with DBA?',
              a: ['I’m a member and have participated in mixers, holiday gatherings, and speed networking. DBA has also featured me in its member spotlight series. My involvement connects with several parts of my Palm Springs life, including The Cole, Querencia Palms, local media collaborations, and Vista Las Palmas.'],
            },
          ],
        },
      ],
    },
    {
      id: 'glad-i-asked',
      after: 8,
      blocks: [
        {
          type: 'story',
          eyebrow: 'Why I keep showing up',
          heading: 'I’m glad I asked.',
          paragraphs: [
            'That meeting with Wayne started with a practical question: how could I do more to help people discover Querencia Palms?',
            'What followed brought together people from the hotel, the neighborhood, local media, and businesses I was only just getting to know. I’ve met some great people, reconnected with others, and found another way to participate in Palm Springs.',
            'I look forward to seeing who I meet next.',
          ],
        },
        { type: 'cta', label: 'Explore the Desert Business Association', href: `${DBA}/`, external: true },
        {
          type: 'links',
          heading: 'Related stories',
          items: [
            { label: 'The Cole', href: '/experience/the-cole' },
            { label: 'Querencia Palms', href: '/experience/querencia-palms' },
            { label: 'Vista Las Palmas', href: '/vista-las-palmas' },
          ],
        },
      ],
    },
  ],
  seo: {
    title: 'David Weis & the Desert Business Association | Palm Springs',
    description:
      'How David Weis connects with Palm Springs businesses through the Desert Business Association, local events, collaborations, and community involvement.',
  },
};

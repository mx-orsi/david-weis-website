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

/** One before/after pair for the drag-to-reveal comparison. */
export interface ComparePair {
  /** Short label under the slider, e.g. "Unit 105 koi pond" */
  label: string;
  before: Photo;
  after: Photo;
}

/**
 * Blocks that make up an editorial chapter. The chapter is rendered by
 * Chapter.astro between two regular story sections, so a project with real
 * photographic documentation (Querencia Palms' grounds) can go deeper without
 * changing the shared page structure.
 */
export type ChapterBlock =
  | {
      type: 'story';
      heading: string;
      paragraphs: readonly string[];
      eyebrow?: string;
      /** A photo set beside the prose (4:5) rather than below it. */
      aside?: Photo;
    }
  | {
      type: 'photo';
      photo: Photo;
      ratio?: string;
      /** 'bleed' runs edge to edge; 'container' stays inside the page gutters. */
      width?: 'container' | 'bleed';
      caption?: string;
    }
  | {
      type: 'pair';
      /** Two photos side by side, read left to right (e.g. barren → lush). */
      photos: readonly [Photo, Photo];
      ratio?: string;
      captions?: readonly [string, string];
    }
  | {
      /** Oversized pull line, optionally a second line, a small note and short prose. */
      type: 'callout';
      text: string;
      second?: string;
      note?: string;
      paragraphs?: readonly string[];
    }
  | {
      type: 'compare';
      heading: string;
      paragraphs: readonly string[];
      pairs: readonly ComparePair[];
    }
  | {
      /** Irregular editorial grid of detail shots; sizes cycle automatically. */
      type: 'gallery';
      photos: readonly Photo[];
      label: string;
      /** Optional small label + note under each photo, aligned by index. */
      captions?: readonly { title: string; note?: string }[];
    }
  | {
      /** Compact strip of photos; hover or tap reveals each label. No voting, no backend. */
      type: 'strip';
      heading: string;
      photos: readonly Photo[];
      labels: readonly string[];
      /** One closing sentence under the strip. */
      closing?: string;
    };

export interface ProjectChapter {
  /** Anchor id for the chapter. */
  id: string;
  /** Zero-based index of the story section the chapter follows. */
  after: number;
  blocks: readonly ChapterBlock[];
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
  /** Compact list of David's involvement, shown under the intro. */
  roles?: readonly string[];
  sections: readonly ProjectSection[];
  /** Optional deep-dive chapters, each inserted after `sections[chapter.after]`, in array order. */
  chapters?: readonly ProjectChapter[];
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
    // Wording per David's 2026-09-13 email: "Landscape stewardship + aquatic
    // planting", never "landscape design" or "landscape architecture".
    roles: ['Brokerage', 'Pricing strategy', 'Staging + presentation', 'Landscape stewardship + aquatic planting', 'Marketing + events'],
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
          'That meant getting involved in nearly every detail, starting with the grounds. I took over much of the landscape oversight and spent months bringing color, life and maturity back into the property. What happened around the koi pond turned into a story of its own.',
        ],
      },
      {
        heading: 'Stage. Clean. Present. Repeat.',
        paragraphs: [
          'Then came the units. Paint splatter on windows, fingerprints, small imperfections — tiny things buyers might never consciously mention, but their brain still registers. I went through the residences obsessively: clean, correct, stage, present, repeat.',
        ],
      },
      {
        heading: 'Marketing to the people who already knew the buyer.',
        paragraphs: [
          'Once the physical presentation was right, I focused on visibility. Open houses became events. Agents were invited back. Vendors, food, music and community were incorporated when appropriate. I increased my involvement across Palm Springs organizations and made sure people knew what Querencia Palms was. The goal was simple: get people through the gates. Once they experienced the property, the work could speak for itself.',
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
    /*
     * The grounds chapter, from David's 2026-09-13 brief. It sits after
     * "Make the property impossible to ignore" and before "Stage. Clean.
     * Present. Repeat." Every photo names the file it expects under
     * public/images/querencia-landscaping/ (see IMAGES-NEEDED.md for the map from
     * David's Drive filenames); slots render as labeled placeholders until the
     * files are there.
     */
    chapters: [
    {
      id: 'the-grounds',
      after: 2,
      blocks: [
        {
          type: 'photo',
          photo: {
            suggestion: 'The koi pond after the greenery was pulled out (Unit 102 sequence)',
            src: '/images/querencia-landscaping/querencia-palms-102-koi-pond-during-renovation-david-weis.jpg',
            alt: 'The Querencia Palms koi pond stripped to rock and water after the plantings were removed',
            width: 1800,
            height: 2400,
            hasSmall: true,
            position: 'center 55%',
          },
          ratio: '16 / 9',
          caption: 'Two days before the grand opening.',
        },
        {
          type: 'story',
          eyebrow: 'The grounds',
          heading: 'I never planned to become the gardener.',
          paragraphs: [
            'When we were preparing Querencia Palms for its grand opening, landscaping was supposed to be one of the things I did not have to worry about. Two days before the event, I arrived to find that much of the greenery around the koi pond had been pulled out and thrown away.',
            'They were not weeds. They were aquatic and marginal plants that had been intentionally planted around the pond.',
            'I spent the next two weeks watering the remaining roots and new growth every day, trying to bring the area back. It worked. Then the landscaping crew removed it again.',
            'That was the moment I realized I could not keep watching the landscape disappear. I ended the relationship with the landscaping company and took over much of the work myself.',
          ],
        },
        {
          type: 'photo',
          photo: {
            suggestion: 'The same stretch of koi pond today, planted and mature (104 Koi Pond After 1)',
            src: '/images/querencia-landscaping/querencia-palms-104-koi-pond-palm-springs-david-weis.jpg',
            alt: 'The Querencia Palms koi pond today, its banks planted with lilies, cannas and papyrus',
            width: 2048,
            height: 1365,
            hasSmall: true,
          },
          ratio: '16 / 9',
        },
        {
          type: 'story',
          heading: 'What started as damage control became an obsession.',
          paragraphs: [
            'At first, I was simply trying to get the property back to where it had been. Then something changed. The plants started responding. The grounds became greener. Owners, buyers and visitors began commenting on how much they loved it. And I started seeing what the property could become.',
            'The koi pond was the biggest opportunity. It winds through the community, alongside private patios, beneath palms and past two waterfalls. Yet much of it had originally been rock, water and fish. I wanted it to feel less like a constructed water feature and more like a garden you discovered as you moved through the property.',
          ],
        },
        {
          type: 'story',
          eyebrow: 'The koi pond',
          heading: 'From rocks and water to a living garden.',
          paragraphs: [
            'Winter made the transformation slow at first. There were not many aquatic plants available, so I worked with what I could find and waited for the seasons to change.',
            'As spring approached, the selection became completely different. I started driving to Cherry Valley myself to visit the aquatic nursery, walking through the available plants and selecting them individually, one by one. Water lilies. Cannas. Papyrus. Flowering marginal plants. Different heights, textures, colors and growth habits. I would bring them back to Palm Springs and figure out where each belonged.',
            'By that point, I was not just trying to make the pond greener anymore. I was trying to create a landscape that felt intentional from every angle. Because the pond runs alongside several residences, every planting changed more than the water feature. It changed someone’s patio, walkway, view or arrival home.',
          ],
        },
        {
          type: 'callout',
          text: 'I would drive to Cherry Valley and select the aquatic plants individually, one by one.',
        },
        {
          type: 'compare',
          heading: 'The difference wasn’t subtle.',
          paragraphs: [
            'As the landscape matured, spaces that had once felt exposed began to feel private, established and alive. The architecture did not change. The experience of it did.',
          ],
          pairs: [
            {
              label: 'Unit 105 · Koi pond',
              before: { suggestion: '105 Koi Pond Before 1', src: '/images/querencia-landscaping/querencia-palms-105-koi-pond-before-installation-david-weis.jpg', alt: 'Koi pond beside Unit 105 before planting: rock, water and bare banks', width: 2400, height: 1350, hasSmall: true },
              after: { suggestion: '105 Koi Pond After 1', src: '/images/querencia-landscaping/querencia-palms-105-koi-pond-palm-springs-david-weis.jpg', alt: 'Koi pond beside Unit 105 after planting: lilies, grasses and flowering marginals along the water', width: 2048, height: 1365, hasSmall: true },
            },
            {
              label: 'Unit 104 · Back patio',
              before: { suggestion: '104 Full Back Patio Before 1', src: '/images/querencia-landscaping/querencia-palms-104-full-back-patio-before-hardscape-david-weis.jpg', alt: 'Back patio of Unit 104 before, open to the walkway with little planting', width: 2400, height: 1350, hasSmall: true },
              after: { suggestion: '104 Full Back patio After 1', src: '/images/querencia-landscaping/querencia-palms-104-full-back-patio-private-outdoor-space-david-weis.jpg', alt: 'Back patio of Unit 104 after, screened and softened by mature planting', width: 2048, height: 1365, hasSmall: true },
            },
            {
              label: 'Unit 106 · Back patio',
              before: { suggestion: '106 Back Patio Before 1 or 2, closest matching angle', src: '/images/querencia-landscaping/querencia-palms-106-back-patio-02-before-hardscape-david-weis.jpg', alt: 'Back patio of Unit 106 before planting', width: 2400, height: 1800, hasSmall: true },
              after: { suggestion: '106 Back Patio After 1 or 2, same angle', src: '/images/querencia-landscaping/querencia-palms-106-back-patio-02-outdoor-living-david-weis.jpg', alt: 'Back patio of Unit 106 after planting, private and green', width: 2048, height: 1365, hasSmall: true },
            },
            {
              label: 'Unit 106 · Primary yard',
              before: { suggestion: '106 Primary Yard Before 1', src: '/images/querencia-landscaping/querencia-palms-104-primary-yard-before-renovation-david-weis.jpg', alt: 'Primary yard of Unit 106 before planting', width: 2400, height: 1350, hasSmall: true },
              after: { suggestion: '106 Primary Yard After 1', src: '/images/querencia-landscaping/querencia-palms-104-primary-yard-desert-landscaping-david-weis.jpg', alt: 'Primary yard of Unit 106 after planting', width: 2048, height: 1365, hasSmall: true },
            },
            {
              label: 'Front walkway',
              before: { suggestion: 'Front Walkway Before', src: '/images/querencia-landscaping/querencia-palms-front-walkway-before-renovation-david-weis.jpg', alt: 'The Querencia Palms front walkway before the landscape matured', width: 2048, height: 1368, hasSmall: true },
              after: { suggestion: 'Front Walkway After', src: '/images/querencia-landscaping/querencia-palms-front-walkway-desert-landscaping-david-weis.jpg', alt: 'The Querencia Palms front walkway with mature planting on both sides', width: 2048, height: 1365, hasSmall: true },
            },
            // Optional sixth pair, per David: use only if the page still feels balanced.
            // {
            //   label: 'Pool',
            //   before: { suggestion: 'Pool Before', src: '/images/querencia-landscaping/querencia-palms-pool-before-renovation-david-weis.jpg', alt: 'The Querencia Palms pool before the landscape matured', width: 2048, height: 1368, hasSmall: true },
            //   after: { suggestion: 'Pool After', src: '/images/querencia-landscaping/querencia-palms-resort-pool-spa-palm-springs-david-weis.jpg', alt: 'The Querencia Palms pool surrounded by mature planting', width: 2048, height: 1365, hasSmall: true },
            // },
          ],
        },
        {
          type: 'story',
          heading: 'The details I started looking for.',
          paragraphs: [
            'Eventually, I started looking forward to the smallest changes. A new flower. A plant finally taking hold. The first water lily opening. A dragonfly appearing beside the pond.',
            'Those details have almost nothing to do with selling a condominium on paper. But they have everything to do with creating a place someone wants to come home to.',
          ],
        },
        {
          type: 'gallery',
          label: 'Details from the grounds',
          photos: [
            { suggestion: 'Koi visible through clear water', src: '/images/querencia-landscaping/querencia-palms-floating-water-plants-desert-garden-david-weis.jpg', alt: 'Orange koi in a clear, shallow stretch of the pond between river rocks', width: 2400, height: 1800, hasSmall: true },
            { suggestion: 'Pink water lily', src: '/images/querencia-landscaping/querencia-palms-aquatic-landscaping-tahquitz-river-estates-david-weis.jpg', alt: 'A pink water lily open on the pond, with a koi passing beneath the pads', width: 1800, height: 2400, hasSmall: true },
            { suggestion: 'Dragonfly beside the pond', src: '/images/querencia-landscaping/querencia-palms-water-iris-koi-pond-david-weis.jpg', alt: 'An orange dragonfly resting on a wall beside the pond', width: 1800, height: 2400, hasSmall: true },
            { suggestion: 'Orange canna', src: '/images/querencia-landscaping/querencia-palms-lotus-water-garden-palm-springs-david-weis.jpg', alt: 'An orange canna flower above a lily pad at the edge of the pond', width: 1800, height: 2400, hasSmall: true },
            { suggestion: 'Small red aquatic bloom floating on the water', src: '/images/querencia-landscaping/querencia-palms-pond-plants-desert-oasis-david-weis.jpg', alt: 'A small red bloom on a floating aquatic plant, seen from above the water', width: 1800, height: 2400, hasSmall: true },
            { suggestion: 'White water lily', src: '/images/querencia-landscaping/querencia-palms-papyrus-pond-landscaping-david-weis.jpg', alt: 'A white water lily open on the pond beside broad canna leaves', width: 1800, height: 2400, hasSmall: true },
            { suggestion: 'Plants growing naturally between the rocks', src: '/images/querencia-landscaping/querencia-palms-pond-greenery-south-palm-springs-david-weis.jpg', alt: 'Koi gathered below a clump of marginal plants growing between the rocks at the pond edge', width: 1800, height: 2400, hasSmall: true, position: 'center 40%' },
          ],
        },
        {
          type: 'story',
          eyebrow: 'Learning as I went',
          heading: 'The garden club came with me.',
          paragraphs: [
            'Around the same time, I joined the Village of La Jolla Garden Club. What began as an enjoyable way to learn more about plants quickly became surprisingly practical.',
            'I found myself taking what I was learning and experimenting with it at Querencia, paying more attention to form, color, seasonal change, pruning, growth habits and how a landscape develops over time. The more I learned, the more I noticed. And the more I noticed, the more I wanted to improve.',
          ],
          aside: {
            suggestion: 'David in the mature front walkway planting (David Weis Front Walkway 2)',
            src: '/images/querencia-landscaping/querencia-palms-walkway-gated-community-south-palm-springs-david-weis.jpg',
            alt: 'David Weis standing among the mature plantings along the Querencia Palms front walkway',
            width: 2048,
            height: 1365,
            hasSmall: true,
            position: '72% center',
          },
        },
        {
          type: 'story',
          heading: 'The water feature became a garden.',
          paragraphs: [
            'As the plantings matured, the pond changed completely. Stone softened. The waterfalls became framed by foliage. Flowers appeared through different seasons. Water lilies opened across the surface. Dragonflies began visiting. The koi moved through plants instead of simply through water.',
            'What had originally felt like an amenity slowly became one of the defining experiences of the property.',
          ],
        },
        {
          type: 'photo',
          width: 'bleed',
          photo: {
            suggestion: 'The waterfall framed by foliage, large enough to see the layers of planting (105 Waterfall)',
            src: '/images/querencia-landscaping/querencia-palms-105-waterfall-desert-garden-david-weis.jpg',
            alt: 'A waterfall on the Querencia Palms koi pond framed by layered planting, with lilies on the water below',
            width: 2048,
            height: 1365,
            hasSmall: true,
          },
          ratio: '16 / 9',
        },
        {
          type: 'story',
          heading: 'Care is something buyers can feel.',
          paragraphs: [
            'Nobody toured Querencia and knew how many hours I spent watering plants back to life. They did not know which aquatic varieties had been difficult to source in winter. They did not know how many times I moved something because it was not thriving, or how many trips I made looking for something better.',
            'They did not need to. They could feel the result. The property looked cared for.',
            'Querencia taught me that buyers experience that care long before they understand exactly what they are responding to. Landscaping stopped being maintenance. It became part of how we presented the property.',
          ],
        },
        {
          type: 'callout',
          text: 'The spaces between the buildings matter too.',
          paragraphs: [
            'Real estate is not experienced as a list of specifications. People experience the arrival. The path to the front door. Privacy from a patio. Flowers along a walkway. The sound of water. Shade. Color. The feeling that somebody cared enough to notice the details.',
            'All of it becomes part of the property.',
          ],
        },
        {
          type: 'photo',
          photo: {
            suggestion: 'The mural with the mature landscaping in front of it (Mural After). No text over this image.',
            src: '/images/querencia-landscaping/querencia-palms-mural-courtyard-art-palm-springs-david-weis.jpg',
            alt: 'The Querencia Palms mural with mature planting grown in along its base',
            width: 2048,
            height: 1365,
            hasSmall: true,
          },
          ratio: '16 / 9',
          caption: 'A landscape that grew alongside the community.',
        },
      ],
    },
    {
      /*
       * The interiors and model-home chapter, from David's 2026-09-14 email.
       * Sits after the grounds chapter and before "Stage. Clean. Present.
       * Repeat." Roles stay exact: Mark chose the furniture, wallpaper and
       * design direction; David ran the sales and presentation strategy,
       * pushed for more turnkey residences and the upstairs model, assembled
       * furniture, prepared the units, watched buyers and sold the homes.
       * Never "David designed seven interiors". Never "free furniture".
       * Unit numbers on the photos are a best read of David's descriptions
       * and need his confirmation (CLIENT-QUESTIONS.md).
       */
      id: 'the-interiors',
      after: 2,
      blocks: [
        {
          type: 'story',
          eyebrow: 'The interiors',
          heading: 'We started with two model homes.',
          paragraphs: [
            'When we first prepared Querencia Palms for sale, the plan was fairly simple. Units 102 and 206 would be our model residences: fully furnished, styled and finished so buyers could walk through and understand what living at Querencia might actually feel like.',
            'The other residences were supposed to give buyers more freedom. We even created a binder of wallpaper options so someone could choose a pattern that fit their own style. At the time, I thought that flexibility would be a selling point.',
            'Then people started touring.',
          ],
        },
        {
          type: 'photo',
          photo: { suggestion: 'Unit 206 living room', src: '/images/querencia-interiors/querencia-palms-renovated-condo-interior-south-palm-springs-david-weis.jpg', alt: 'Unit 206 at Querencia Palms: a brown leather sofa and two white armchairs against a teal, rust and mustard geometric mural', width: 1448, height: 1086, hasSmall: true },
          ratio: '16 / 9',
          caption: 'Unit 206, one of the two original models.',
        },
        {
          type: 'story',
          heading: 'It turns out, imagination is asking a lot.',
          paragraphs: [
            'What surprised me was how differently buyers reacted to the finished homes. Standing inside an empty residence with a binder of wallpaper samples sounded exciting in theory. In practice, it gave people more work to do. They had to imagine the wallpaper. Imagine the furniture. Imagine the scale. Imagine what appliances would eventually look like. Imagine how much more they would need to buy after closing.',
            'And when someone is already deciding whether to make a major purchase, every unanswered question can become another reason to hesitate.',
            'Units 102 and 206 did not ask buyers to imagine nearly as much. They were finished. They were furnished. They were turnkey. And they were the first two residences to sell.',
          ],
        },
        {
          type: 'callout',
          text: 'Choice wasn’t the selling point. Certainty was.',
        },
        {
          type: 'story',
          eyebrow: 'The pivot',
          heading: 'So we built another model.',
          paragraphs: [
            'Once the original models sold, we had a new problem. Our best sales tools had just become someone’s homes. So we created another. Unit 104 came next.',
            'Then I realized we were still missing an important part of the Querencia experience: the second floor. I kept saying, “We need a model upstairs with the mountains in the background.” That became Unit 202.',
            'From there, the strategy kept evolving. One finished residence became another, then another. Eventually, the interiors themselves became part of how we told the story of the property.',
          ],
        },
        {
          type: 'pair',
          photos: [{ suggestion: 'Unit 104 living room', src: '/images/querencia-interiors/querencia-palms-renovated-kitchen-palm-springs-david-weis.jpg', alt: 'Unit 104 at Querencia Palms: a tan leather sofa and a round coffee table in front of a green and gold botanical mural', width: 2400, height: 1800, hasSmall: true }, { suggestion: 'Unit 202 living room', src: '/images/querencia-interiors/querencia-palms-open-concept-living-room-david-weis.jpg', alt: 'Unit 202 at Querencia Palms: a blue leather sofa and a walnut credenza in front of a bold blue, orange and brown mural', width: 2400, height: 1800, hasSmall: true, position: 'center 30%' }],
          ratio: '4 / 3',
          captions: ['Unit 104, the third model.', 'Unit 202, the upstairs model.'],
        },
        {
          type: 'story',
          eyebrow: 'The furniture',
          heading: 'Why rent the staging when the buyer could have it?',
          paragraphs: [
            'Once we knew the furnished homes were connecting with buyers, we looked at the economics differently. We could spend a substantial amount of money renting furniture from a staging company, then watch all of it leave after the sale. Or we could put that money into furniture we selected ourselves, control exactly how the residence looked and give the buyer the option to keep it. So that is what we did.',
            'The furniture was included with the residence at no additional charge. The buyer could keep everything, keep only the pieces they liked, give pieces back, sell something later or replace it completely. It was their home. The important part was that, during the buying process, the residence already felt complete.',
          ],
        },
        {
          type: 'callout',
          text: 'The staging didn’t have to leave at closing.',
          note: 'If the buyer wanted it, it stayed.',
        },
        {
          type: 'story',
          heading: 'Control the presentation. Give the buyer the upside.',
          paragraphs: [
            'I had already experienced what happens when expensive staging does not actually serve the property. Furniture can be the wrong scale. The design can fight the architecture. The style can feel disconnected from the likely buyer. A room can technically be staged and still show worse because of it.',
            'At Querencia, we wanted control. Mark selected the furniture, wallpaper and overall design direction for the residences. I assembled the furniture, cleaned and prepared the units, helped determine when we needed another model and paid close attention to how buyers responded as they toured.',
            'If something was not working, we could change it. If a room needed a stronger point of view, we could give it one. And if buyers loved the finished result, there was another advantage: they could keep it.',
          ],
        },
        {
          type: 'story',
          eyebrow: 'The result',
          heading: 'One building. Seven very different points of view.',
          paragraphs: [
            'By the time the strategy fully evolved, seven of the two-bedroom residences had been individually furnished and styled. The architecture connected them. The personalities did not. Some became bold and graphic. Others were warm and organic. Some leaned into saturated color. Others were quieter and more restrained.',
            'That variety became one of my favorite things about the project. There was never supposed to be one required Querencia look. The design simply needed to help someone see what was possible.',
          ],
        },
        {
          type: 'gallery',
          label: 'The seven furnished residences',
          photos: [{ suggestion: 'Unit 105 living room', src: '/images/querencia-interiors/querencia-palms-midcentury-interior-design-palm-springs-david-weis.jpg', alt: 'Unit 105 at Querencia Palms: a white sofa and a green fluted credenza against a teal, mustard and rust geometric mural', width: 2048, height: 1367, hasSmall: true }, { suggestion: 'Unit 201 living room', src: '/images/querencia-interiors/querencia-palms-renovated-bathroom-palm-springs-david-weis.jpg', alt: 'Unit 201 at Querencia Palms: a tan leather sofa and a green credenza against a grey and beige geometric mural', width: 2048, height: 1365, hasSmall: true }, { suggestion: 'Unit 106 sitting area', src: '/images/querencia-interiors/querencia-palms-primary-bedroom-suite-condo-david-weis.jpg', alt: 'Unit 106 at Querencia Palms: two green velvet armchairs, a marble side table and a patio door to the courtyard', width: 2048, height: 1366, hasSmall: true }, { suggestion: 'Unit 204 living room', src: '/images/querencia-interiors/querencia-palms-indoor-outdoor-living-patio-doors-david-weis.jpg', alt: 'Unit 204 at Querencia Palms: a cream sofa with rust pillows on a rust rug, in front of a green and gold mural', width: 2048, height: 1368, hasSmall: true }, { suggestion: 'Unit 106 dining area', src: '/images/querencia-interiors/querencia-palms-condo-interior-palm-springs-david-weis.jpg', alt: 'Unit 106 at Querencia Palms: a round black dining table with mustard chairs beside a green mural', width: 2048, height: 1369, hasSmall: true }, { suggestion: 'Unit 206 living room', src: '/images/querencia-interiors/querencia-palms-renovated-condo-interior-south-palm-springs-david-weis.jpg', alt: 'Unit 206 at Querencia Palms: a brown leather sofa and two white armchairs against a teal, rust and mustard geometric mural', width: 1448, height: 1086, hasSmall: true }, { suggestion: 'Unit 202 living room', src: '/images/querencia-interiors/querencia-palms-open-concept-living-room-david-weis.jpg', alt: 'Unit 202 at Querencia Palms: a blue leather sofa and a walnut credenza in front of a bold blue, orange and brown mural', width: 2400, height: 1800, hasSmall: true, position: 'center 30%' }],
          captions: [
            { title: 'Unit 105', note: 'Graphic geometry + saturated color' },
            { title: 'Unit 201', note: 'Warm tones + geometric restraint' },
            { title: 'Unit 106', note: 'Soft modernism + organic neutrals' },
            { title: 'Unit 204', note: 'Green, gold + garden-inspired color' },
            { title: 'Unit 106', note: 'The dining side of the same residence' },
            { title: 'Unit 206', note: 'Graphic modernism + deep contrast' },
            { title: 'Unit 202', note: 'Desert color + mid-century energy' },
          ],
        },
        {
          type: 'story',
          eyebrow: 'The real estate lesson',
          heading: 'Empty rooms ask buyers to work.',
          paragraphs: [
            'Querencia permanently changed the way I think about staging. An empty residence asks a buyer to solve too many things at once. Will my sofa fit? Where does the television go? How large can the dining table be? Does this bedroom actually feel generous? What wallpaper would I choose? What will it cost to furnish all of this after closing?',
            'A completed room removes much of that work. Furniture gives the space scale. Design gives it identity. Lighting creates mood. Wallpaper can turn a wall into the thing someone remembers after touring six other properties that day. And appliances make a residence feel like something you can actually move into rather than another project waiting after closing.',
          ],
        },
        {
          type: 'callout',
          text: 'Empty rooms ask buyers to work.',
          second: 'Staged rooms let buyers feel.',
        },
        {
          type: 'story',
          heading: 'The buyer wasn’t just seeing more. They were getting more.',
          paragraphs: [
            'We did not raise the purchase price because a residence was furnished. The furniture was simply included. That changed the psychology. Instead of someone walking through a beautiful staged home knowing that everything they liked would disappear after closing, they had a choice. The sofa could stay. The dining table could stay. The beds, lamps, chairs and accessories could stay.',
            'Maybe they loved every piece. Maybe they replaced half of it six months later. That was not the point. The point was that the home felt complete on the day they decided to buy it. And because the furniture was included if they wanted it, there was also a sense that they were walking away with something extra.',
          ],
        },
        {
          type: 'callout',
          text: 'Same price. More to walk away with.',
        },
        {
          type: 'story',
          eyebrow: 'After closing',
          heading: 'Then the buyers took over.',
          paragraphs: [
            'The best part happened after the residences stopped being models. They became homes. Owners brought in their own art. Changed furniture. Added pieces we never would have selected. Kept things they loved. Made the spaces more personal.',
            'Touring their homes afterward has become one of my favorite parts of Querencia. There is almost a show-and-tell quality to it. Someone recognizes wallpaper they also have. A neighbor sees how somebody else used the same floor plan. People compare what they kept, what they changed and what they added. It reminds me a little of a tiny Modernism tour inside the community. You see people light up when they discover something familiar in someone else’s residence, then immediately show what they did differently in their own.',
          ],
        },
        {
          type: 'callout',
          text: 'The model was never supposed to be the final version.',
          note: 'It just needed to help someone see the beginning.',
        },
        {
          type: 'strip',
          heading: 'Which one would you have chosen?',
          photos: [{ suggestion: 'Unit 104 living room', src: '/images/querencia-interiors/querencia-palms-renovated-kitchen-palm-springs-david-weis.jpg', alt: 'Unit 104 at Querencia Palms: a tan leather sofa and a round coffee table in front of a green and gold botanical mural', width: 2400, height: 1800, hasSmall: true }, { suggestion: 'Unit 105 living room', src: '/images/querencia-interiors/querencia-palms-midcentury-interior-design-palm-springs-david-weis.jpg', alt: 'Unit 105 at Querencia Palms: a white sofa and a green fluted credenza against a teal, mustard and rust geometric mural', width: 2048, height: 1367, hasSmall: true }, { suggestion: 'Unit 106 sitting area', src: '/images/querencia-interiors/querencia-palms-primary-bedroom-suite-condo-david-weis.jpg', alt: 'Unit 106 at Querencia Palms: two green velvet armchairs, a marble side table and a patio door to the courtyard', width: 2048, height: 1366, hasSmall: true }, { suggestion: 'Unit 201 living room', src: '/images/querencia-interiors/querencia-palms-renovated-bathroom-palm-springs-david-weis.jpg', alt: 'Unit 201 at Querencia Palms: a tan leather sofa and a green credenza against a grey and beige geometric mural', width: 2048, height: 1365, hasSmall: true }, { suggestion: 'Unit 202 living room', src: '/images/querencia-interiors/querencia-palms-open-concept-living-room-david-weis.jpg', alt: 'Unit 202 at Querencia Palms: a blue leather sofa and a walnut credenza in front of a bold blue, orange and brown mural', width: 2400, height: 1800, hasSmall: true, position: 'center 30%' }, { suggestion: 'Unit 204 living room', src: '/images/querencia-interiors/querencia-palms-indoor-outdoor-living-patio-doors-david-weis.jpg', alt: 'Unit 204 at Querencia Palms: a cream sofa with rust pillows on a rust rug, in front of a green and gold mural', width: 2048, height: 1368, hasSmall: true }, { suggestion: 'Unit 206 living room', src: '/images/querencia-interiors/querencia-palms-renovated-condo-interior-south-palm-springs-david-weis.jpg', alt: 'Unit 206 at Querencia Palms: a brown leather sofa and two white armchairs against a teal, rust and mustard geometric mural', width: 1448, height: 1086, hasSmall: true }],
          labels: ['Unit 104', 'Unit 105', 'Unit 106', 'Unit 201', 'Unit 202', 'Unit 204', 'Unit 206'],
          closing: 'At Querencia, the models didn’t just show buyers where furniture could go. They helped buyers see a life there.',
        },
      ],
    },
    ],
    stats: [
      { value: '14', label: 'Residences' },
      { value: 'South Palm Springs', label: 'Fee-land condominiums' },
      { value: 'Full ask', label: 'Escrows opened at asking price' },
    ],
    // Lead and gallery from Max's property set; the two-up from the landscaping set.
    photos: [
      {
        suggestion: 'Pool and spa at dusk with the fire pit lit',
        src: '/images/querencia-palms/querencia-palms-resort-pool-spa-community-david-weis.jpg',
        alt: 'The Querencia Palms pool and spa at dusk, with a sunken fire-pit lounge, the residences lit behind and the San Jacinto Mountains above',
        width: 2048,
        height: 1368,
        hasSmall: true,
      },
      {
        suggestion: 'A private primary yard with the planting grown in',
        src: '/images/querencia-landscaping/querencia-palms-105-primary-yard-desert-landscaping-david-weis.jpg',
        alt: 'A private yard at Querencia Palms with established planting and a mountain view',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'A front patio arrival with mature planting',
        src: '/images/querencia-landscaping/querencia-palms-106-front-patio-koi-pond-views-david-weis.jpg',
        alt: 'The front patio of a Querencia Palms residence framed by mature planting',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'Breezeway with the painted mural',
        src: '/images/querencia-palms/querencia-palms-bbq-courtyard-community-amenities-david-weis.jpg',
        alt: 'The covered breezeway at Querencia Palms with the painted mural reading Querencia Palms, love where you live',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'Street exterior with the yellow facade',
        src: '/images/querencia-palms/querencia-palms-dog-friendly-condos-palm-springs-david-weis.jpg',
        alt: 'The street face of Querencia Palms: white two-story residences with bold yellow panels, black railings and desert trees along the sidewalk',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'Courtyard fountain under the palo verde in bloom',
        src: '/images/querencia-palms/querencia-palms-renovated-1966-midcentury-condos-david-weis.jpg',
        alt: 'The Querencia Palms courtyard fountain with a palo verde in yellow bloom and the residences behind',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'Pool in afternoon sun with the mountains behind',
        src: '/images/querencia-palms/querencia-palms-gated-covered-parking-palm-springs-david-weis.jpg',
        alt: 'The Querencia Palms pool in afternoon sun with the mountains behind and a blue umbrella at the edge',
        width: 2400,
        height: 1600,
        hasSmall: true,
      },
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
    /*
     * Before photos of the motor lodge, from David (2026-09-15). Sits right
     * after "Build it. Sell it. Move on." Files go in public/images/the-cole/
     * under these names; add or remove entries to match what he sent.
     */
    chapters: [
      {
        id: 'before',
        after: 0,
        blocks: [
          {
            type: 'pair',
            photos: [
              { suggestion: 'The motor lodge before: the same view as the pool-at-dusk photo, if there is one', src: '/images/the-cole/the-cole-motor-lodge-before-renovation-palm-springs.jpg', alt: 'The former motor lodge in Palm Springs before it became The Cole Hotel', hasSmall: true },
              { suggestion: 'The Cole after, matching angle', src: '/images/the-cole/the-cole-hotel-after-renovation-palm-springs.jpg', alt: 'The Cole Hotel after the renovation, from the same angle', hasSmall: true },
            ],
            ratio: '4 / 3',
            captions: ['The motor lodge Mark bought.', 'The Cole.'],
          },
          {
            type: 'gallery',
            label: 'The motor lodge before the renovation',
            photos: [
              { suggestion: 'Before: the pool area', src: '/images/the-cole/the-cole-before-pool-palm-springs.jpg', alt: 'The pool area of the motor lodge before the renovation', hasSmall: true },
              { suggestion: 'Before: a guest room', src: '/images/the-cole/the-cole-before-guest-room-palm-springs.jpg', alt: 'A motor lodge guest room before the renovation', hasSmall: true },
              { suggestion: 'Before: the exterior from the street', src: '/images/the-cole/the-cole-before-exterior-street-palm-springs.jpg', alt: 'The motor lodge exterior from the street before the renovation', hasSmall: true },
            ],
          },
        ],
      },
    ],
    stats: [
      { value: '30', label: 'Rooms' },
      { value: '10 days', label: 'Open before the COVID-19 shutdown' },
      { value: 'Five-star', label: 'Rated across its major guest platforms' },
    ],
    // Max's six photos (2026-09-14), his SEO filenames.
    photos: [
      {
        suggestion: 'Pool at dusk with the two-story hotel and its colored doors behind it',
        src: '/images/the-cole/the-cole-adults-only-boutique-retreat-david-weis.jpg',
        alt: 'The Cole Hotel pool at dusk: white loungers with turquoise cushions, striped umbrellas and the two-story motor-lodge building with its orange, yellow and green doors lit behind',
        width: 2400,
        height: 1680,
        hasSmall: true,
      },
      {
        suggestion: 'A guest suite: teal sectional, yellow pillows, the Cole sign on the TV',
        src: '/images/the-cole/the-cole-san-jacinto-mountain-views-palm-springs-david-weis.jpg',
        alt: 'A guest suite at The Cole with a teal sectional and yellow pillows, a walnut barrel chair, a kitchenette and palms and mountains through the corner windows',
        width: 2400,
        height: 1680,
        hasSmall: true,
      },
      {
        suggestion: 'The Cole Hotel sign against palms and sky',
        src: '/images/the-cole/the-cole-palm-springs-pool-desert-oasis-david-weis.jpg',
        alt: 'The Cole Hotel roadside sign in yellow, orange and turquoise, with tall palms behind it against a clear sky',
        width: 1511,
        height: 2400,
        hasSmall: true,
        position: 'center 78%',
      },
      {
        suggestion: 'The restaurant: white chairs, geometric wall, photographs',
        src: '/images/the-cole/the-cole-boutique-hotel-north-palm-canyon-david-weis.jpg',
        alt: 'The restaurant at The Cole: white molded chairs at long tables, a grey geometric tiled wall hung with photographs, and a vase of red and yellow flowers',
        width: 2400,
        height: 1600,
        hasSmall: true,
      },
      {
        suggestion: 'The fire pit and outdoor bar at dusk',
        src: '/images/the-cole/the-cole-hotel-palm-springs-david-weis.jpg',
        alt: 'The outdoor fire pit and bar at The Cole at dusk, with black stools at the counter and the pool beyond',
        width: 750,
        height: 553,
      },
      {
        suggestion: 'A branded espresso cup on a balcony rail above the pool',
        src: '/images/the-cole/the-cole-midcentury-hotel-hugh-kaptur-1959-david-weis.jpg',
        alt: 'A Cole Hotel branded espresso cup and saucer on a balcony table, with the pool, palms and mountains beyond',
        width: 1174,
        height: 1270,
        position: 'center 70%',
      },
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
    // Max's eight photos (2026-09-14), his SEO filenames. Order sets the
    // page: lead, two-up, wide break, then the closing gallery.
    photos: [
      {
        suggestion: 'Front facade, straight on: red door, pergola, walkway lined with lantana',
        src: '/images/vista-voltaire/vista-voltaire-exterior-above-ocean-beach-san-diego.jpg',
        alt: 'Vista Voltaire after the restoration: a white two-story home in Ocean Beach with black-trimmed windows, a wood front door under a pergola, red steps and a walkway lined with flowering lantana',
        width: 2048,
        height: 1367,
        hasSmall: true,
      },
      {
        suggestion: 'Living room: sectional, terracotta tile fireplace, ceiling fan, corner windows',
        src: '/images/vista-voltaire/vista-voltaire-ocean-beach-vacation-rental-san-diego.jpg',
        alt: 'The living room at Vista Voltaire with a light sectional, two rust armchairs, a round oak coffee table and the original fireplace faced in terracotta tile',
        width: 2048,
        height: 1367,
        hasSmall: true,
      },
      {
        suggestion: 'Entry: staircase, console table, brass chandelier, living room to the left',
        src: '/images/vista-voltaire/ocean-beach-vacation-home-with-views-from-every-room.jpg',
        alt: 'The entry at Vista Voltaire with the white staircase and square balusters, a walnut console table and a brass chandelier',
        width: 2048,
        height: 1367,
        hasSmall: true,
      },
      {
        suggestion: 'Kitchen and dining: waterfall island, bar stools, dining table under the rattan pendant, arched doorways',
        src: '/images/vista-voltaire/ocean-beach-dining-room-with-water-views-2.jpg',
        alt: 'The open kitchen and dining room at Vista Voltaire: oak cabinets, a white waterfall island with tan leather stools, a long wood dining table under a rattan pendant and two arched doorways',
        width: 2048,
        height: 1367,
        hasSmall: true,
      },
      {
        suggestion: 'Kitchen detail: range, brass pot filler, oak cabinets, white zellige tile',
        src: '/images/vista-voltaire/ocean-beach-dining-room-with-water-views.jpg',
        alt: 'Kitchen detail at Vista Voltaire: a stainless range and hood, a brass pot filler on glossy white tile and oak cabinets, with the front door visible beyond',
        width: 2048,
        height: 1367,
        hasSmall: true,
      },
      {
        suggestion: 'Kitchen bar: three tan leather stools at the fluted oak peninsula under brass pendants',
        src: '/images/vista-voltaire/san-diego-vacation-rental-kitchen-with-coastal-views.jpg',
        alt: 'Three tan leather stools at the fluted oak breakfast bar in the Vista Voltaire kitchen, under two brass and glass pendants',
        width: 2048,
        height: 1367,
        hasSmall: true,
      },
      {
        suggestion: 'Exterior from the front corner: lawn, palms, pergola over the entry',
        src: '/images/vista-voltaire/vista-voltaire-coastal-exterior-san-diego.jpg',
        alt: 'Vista Voltaire from the front corner of the lot: fresh lawn, a gate and picket fence, tall palms and the black pergola over the entry',
        width: 2048,
        height: 1367,
        hasSmall: true,
      },
      {
        suggestion: 'From the street: driveway, garage, hedge and fence along the sidewalk',
        src: '/images/vista-voltaire/vista-voltaire-drive-through-garage-san-diego.jpg',
        alt: 'Vista Voltaire from the street, with the driveway, a black garage door, a new hedge inside the fence and palms overhead',
        width: 2048,
        height: 1367,
        hasSmall: true,
      },
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
    // Max's photos (2026-09-14). These files are 1024px wide; larger originals would sharpen the lead.
      {
        suggestion: 'Front exterior from the street',
        src: '/images/kensington-canyon/kensington-canyon-spanish-architecture-san-diego-david-weis.jpg',
        alt: 'Kensington Canyon from the street: a brick and half-timbered Tudor with a red door, behind a river-rock wall and dark picket fence',
        width: 1024,
        height: 683,
        hasSmall: true,
      },
      {
        suggestion: 'Living room with the vaulted wood ceiling',
        src: '/images/kensington-canyon/kensington-canyon-estate-indoor-outdoor-living-david-weis.jpg',
        alt: 'The living room at Kensington Canyon with a vaulted wood ceiling, a river-rock fireplace and a long sofa',
        width: 1024,
        height: 683,
        hasSmall: true,
      },
      {
        suggestion: 'The rolling tool-chest kitchen island',
        src: '/images/kensington-canyon/kensington-canyon-estate-canyon-views-san-diego-david-weis.jpg',
        alt: 'The kitchen at Kensington Canyon: a river-rock wall behind the range, grey cabinets and the rolling tool-chest island with its butcher-block top',
        width: 1024,
        height: 683,
        hasSmall: true,
      },
      {
        suggestion: 'Pool and spa under the trees',
        src: '/images/kensington-canyon/kensington-canyon-estate-near-balboa-park-david-weis.jpg',
        alt: 'The pool and spa at Kensington Canyon, edged in river rock beneath tall trees',
        width: 1024,
        height: 683,
        hasSmall: true,
      },
      {
        suggestion: 'The arched front door',
        src: '/images/kensington-canyon/kensington-canyon-private-hillside-estate-david-weis.jpg',
        alt: 'The arched front door of Kensington Canyon set in brick, with a stone path and planting',
        width: 1024,
        height: 683,
        hasSmall: true,
      },
      {
        suggestion: 'Kitchen window to the canyon',
        src: '/images/kensington-canyon/kensington-canyon-estate-san-diego-david-weis.jpg',
        alt: 'The kitchen window at Kensington Canyon opening to the canyon, with a bowl of lemons on the butcher block',
        width: 1024,
        height: 683,
        hasSmall: true,
      },
      {
        suggestion: 'Bedroom with French doors',
        src: '/images/kensington-canyon/kensington-canyon-mid-city-san-diego-real-estate-david-weis.jpg',
        alt: 'A bedroom at Kensington Canyon with a wood ceiling, a wood bed and French doors to a balcony',
        width: 1024,
        height: 683,
        hasSmall: true,
      },
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
    // Beach and exterior shots are coming from David (2026-09-15). Until they
    // land the living room leads; then these two placeholders take over.
    photos: [
      {
        suggestion: 'Exterior of Belmont Beach House with the beach beyond',
        src: '/images/belmont-beach-house/belmont-beach-house-exterior-mission-beach-san-diego.jpg',
        alt: 'Belmont Beach House from outside, with the Mission Beach sand and ocean beyond',
        hasSmall: true,
      },
      {
        suggestion: 'The beach or the ocean view from the house',
        src: '/images/belmont-beach-house/belmont-beach-house-ocean-view-mission-beach-san-diego.jpg',
        alt: 'The ocean and Mission Beach shoreline seen from Belmont Beach House',
        hasSmall: true,
      },
      {
        suggestion: 'Living room and dining',
        src: '/images/belmont-beach-house/belmont-beach-house-steps-to-the-sand-san-diego-david-weis.jpg',
        alt: 'The living room at Belmont Beach House: a grey sectional, a wood coffee table, the dining table and the stairs beyond',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'Kitchen open to the living room',
        src: '/images/belmont-beach-house/belmont-beach-house-san-diego-coastal-property-david-weis.jpg',
        alt: 'The kitchen at Belmont Beach House, open to the living room with a granite island and white cabinets',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'Entry stair',
        src: '/images/belmont-beach-house/belmont-beach-house-mission-beach-san-diego-david-weis.jpg',
        alt: 'The exterior stair up to Belmont Beach House, with a palm and blue sky above',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'Bedroom',
        src: '/images/belmont-beach-house/belmont-beach-house-near-belmont-park-boardwalk-david-weis.jpg',
        alt: 'A bedroom at Belmont Beach House with a white bed, blue linens and a ceiling fan',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'Kitchen counter with bar seating',
        src: '/images/belmont-beach-house/belmont-beach-house-oceanfront-deck-mission-beach-david-weis.jpg',
        alt: 'The kitchen counter at Belmont Beach House with bar seating',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'Second bedroom',
        src: '/images/belmont-beach-house/belmont-beach-house-two-car-garage-mission-beach-david-weis.jpg',
        alt: 'A second bedroom at Belmont Beach House with coastal artwork',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'Kitchen',
        src: '/images/belmont-beach-house/belmont-beach-house-ocean-bay-views-mission-beach-david-weis.jpg',
        alt: 'The kitchen at Belmont Beach House with stainless appliances and a tile backsplash',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
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
    /*
     * The hands-on chapter, from David's 2026-09-15 email: the hot tub story
     * in three phone photos, then what working on the house taught him. Sits
     * after "The mountain always gets a vote." and before "You see houses
     * differently". The photos are rough on purpose; do not retouch. Spa
     * weight: "nearly 600 pounds" / "more than 500 pounds empty", never
     * "600+".
     */
    chapters: [
      {
        id: 'hands-on',
        after: 2,
        blocks: [
          {
            type: 'story',
            eyebrow: 'Hands-on',
            heading: 'Nearly 600 pounds. Two people. One piece of plywood.',
            paragraphs: [
              'When the hot tub arrived, there was one small problem. It still had to get up the hillside and onto the lower screened porch. The spa weighed more than 500 pounds empty, and Mark and I decided we were going to move it ourselves.',
              'Our solution was not particularly glamorous. We used a sheet of plywood as a ramp and moved the spa upward a little at a time. I would push, lift and hold the weight in place while Mark ran underneath, unscrewed a small wooden stop, moved it farther up the plywood and screwed it back in. Then we would do it again. And again. And again.',
              'Each board position became the next rung of a homemade ladder until, eventually, the entire hot tub was sitting on the deck.',
            ],
          },
          {
            type: 'pair',
            photos: [
              { suggestion: 'IMG_7676: the plywood ramp and the small wooden stops', src: '/images/sierra-chalet/sierra-chalet-big-bear-deck-framing-renovation-david-weis.jpg', width: 1536, height: 2049, hasSmall: true, alt: 'A sheet of plywood laid up the hillside at Sierra Chalet as a ramp, with small wooden stops screwed to it' },
              { suggestion: 'IMG_7677: the wrapped hot tub partway up the ramp', src: '/images/sierra-chalet/sierra-chalet-big-bear-deck-construction-david-weis.jpg', width: 1536, height: 2049, hasSmall: true, alt: 'The wrapped hot tub partway up the plywood ramp on the Sierra Chalet hillside' },
            ],
            ratio: '3 / 4',
            captions: ['The improvised ramp.', 'Almost there.'],
          },
          {
            type: 'callout',
            text: 'Push. Hold. Move the stop. Screw it back in. Repeat.',
          },
          {
            type: 'photo',
            photo: { suggestion: 'IMG_7682: David beside the hot tub after it made it onto the lower porch', src: '/images/sierra-chalet/sierra-chalet-big-bear-cabin-deck-mountain-views-david-weis.jpg', width: 2049, height: 1536, hasSmall: true, alt: 'David Weis standing beside the hot tub after it reached the lower screened porch at Sierra Chalet' },
            ratio: '4 / 3',
            caption: 'Made it.',
          },
          {
            type: 'story',
            heading: 'Looking back, I still cannot believe we did that.',
            paragraphs: [
              'Looking back at the pictures now, I still have the same reaction: I cannot believe we actually did that. But that is also what I love about Sierra Chalet. It was not a renovation I watched happen. I was physically part of it.',
            ],
          },
          {
            type: 'story',
            heading: 'There’s a difference between knowing a house and working on one.',
            paragraphs: [
              'Sierra Chalet was the first project where I became deeply involved in the physical work of rebuilding a property. Removing siding. Opening walls. Drilling. Plumbing. Deck construction. And apparently figuring out how to move a nearly 600-pound hot tub up a hillside with plywood.',
              'Mark is a licensed contractor and brought the technical experience. I brought a willingness to learn, help and keep going even when the work was far outside anything I had done before.',
              'That experience changed the way I walk through property today. I have a much greater appreciation for what is behind a finished wall, beneath a deck and inside the seemingly simple renovation somebody describes in one sentence.',
            ],
            aside: {
              suggestion: 'David carrying lumber up the drive',
              src: '/images/sierra-chalet/david-weis-hands-on-renovation-sierra-chalet-big-bear-01.jpg',
              alt: 'David Weis carrying boards up the gravel drive at Sierra Chalet, past a row of sawhorses',
              width: 1536,
              height: 2049,
              hasSmall: true,
            },
          },
          {
            type: 'callout',
            text: 'It wasn’t a renovation I watched happen. I was physically part of it.',
          },
        ],
      },
    ],
    stats: [
      { value: '10 months', label: 'Of hands-on work' },
      { value: '2', label: 'Large decks constructed' },
      { value: 'Lake views', label: 'The upper deck was designed around them' },
    ],
    // Max's photos (2026-09-15): renovation and action shots. The finished
    // listing photography is still to come and will replace the lead and the
    // interiors.
    photos: [
      {
        suggestion: 'Exterior after the rebuild, both decks complete',
        src: '/images/sierra-chalet/sierra-chalet-big-bear-cabin-exterior-deck-david-weis.jpg',
        alt: 'Sierra Chalet after the rebuild: the grey cabin with its new upper deck and stairs among the pines in autumn',
        width: 2048,
        height: 1536,
        hasSmall: true,
      },
      {
        suggestion: 'Mid-renovation, walls open',
        src: '/images/sierra-chalet/sierra-chalet-big-bear-exterior-during-renovation-01-david-weis.jpg',
        alt: 'Sierra Chalet mid-renovation: siding removed, the old red boards and insulation exposed, a ladder against the wall',
        width: 2049,
        height: 1536,
        hasSmall: true,
      },
      {
        suggestion: 'The deck framing going up',
        src: '/images/sierra-chalet/sierra-chalet-big-bear-exterior-during-renovation-02-david-weis.jpg',
        alt: 'The new deck framing at Sierra Chalet going up against the blue sky, with new windows in the wall behind',
        width: 2049,
        height: 1536,
        hasSmall: true,
      },
      {
        suggestion: 'The cabin in early snow',
        src: '/images/sierra-chalet/sierra-chalet-big-bear-cabin-exterior-david-weis.jpg',
        alt: 'Sierra Chalet in snow after the rebuild, the grey cabin with its new stairs and deck',
        width: 2049,
        height: 1536,
        hasSmall: true,
      },
      {
        suggestion: 'Before: the red cabin as we bought it',
        src: '/images/sierra-chalet/sierra-chalet-big-bear-exterior-before-renovation-02-david-weis.jpg',
        alt: 'Sierra Chalet before the renovation: a small red cabin in the snow with a weathered stair',
        width: 1170,
        height: 744,
        hasSmall: true,
      },
      {
        suggestion: 'David mixing concrete',
        src: '/images/sierra-chalet/david-weis-hands-on-renovation-sierra-chalet-big-bear-02.jpg',
        alt: 'David Weis in a yellow shirt mixing concrete in a tub beside a pile of rock at Sierra Chalet',
        width: 2049,
        height: 1536,
        hasSmall: true,
      },
      {
        suggestion: 'The dogs at the door',
        src: '/images/sierra-chalet/sierra-chalet-big-bear-mountain-retreat-david-weis.jpg',
        alt: 'Two dogs at the glass door at Sierra Chalet, looking out at yellow chairs on the snowy deck',
        width: 1536,
        height: 2048,
        hasSmall: true,
        position: 'center 40%',
      },
      {
        suggestion: 'The carved bear at the door',
        src: '/images/sierra-chalet/sierra-chalet-big-bear-david-weis.jpg',
        alt: 'A carved wooden bear wearing ski goggles beside a snowboard at the Sierra Chalet door',
        width: 1536,
        height: 2048,
        hasSmall: true,
      },
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
    // Max's eight photos (2026-09-14), his SEO filenames.
      {
        suggestion: 'Aerial of the villa, pool and palms',
        src: '/images/mercury-palms/mercury-palms-pool-mountain-views-palm-springs-david-weis.jpg',
        alt: 'Mercury Palms from above: the tile-roofed villa, pool and spa set among tall palms with the mountains beyond',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'Great room with the wood ceiling and fireplace',
        src: '/images/mercury-palms/mercury-palms-irving-green-mercury-records-estate-david-weis.jpg',
        alt: 'The great room at Mercury Palms with its wood cathedral ceiling, stone fireplace and deep grey sectional',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'Covered patio with the fountain at dusk',
        src: '/images/mercury-palms/mercury-palms-tuscan-villa-estate-palm-springs-david-weis.jpg',
        alt: 'A covered patio at Mercury Palms at dusk, with a fountain, bougainvillea and the mountains behind the wall',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'Pool at dusk',
        src: '/images/mercury-palms/mercury-palms-vista-las-palmas-palm-springs-david-weis.jpg',
        alt: 'The Mercury Palms pool lit at dusk, ringed by palms with the mountains behind',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'Pool with the yellow umbrellas',
        src: '/images/mercury-palms/mercury-palms-game-room-bar-entertaining-david-weis.jpg',
        alt: 'The pool at Mercury Palms in daylight with yellow umbrellas and the white villa behind',
        width: 2048,
        height: 1364,
        hasSmall: true,
      },
      {
        suggestion: 'The tiled spa and waterfall',
        src: '/images/mercury-palms/mercury-palms-great-room-cathedral-ceiling-david-weis.jpg',
        alt: 'The tiled spa at Mercury Palms with water spilling into the pool',
        width: 2048,
        height: 1366,
        hasSmall: true,
      },
      {
        suggestion: 'Dining terrace under the palms',
        src: '/images/mercury-palms/mercury-palms-wedding-event-venue-palm-springs-david-weis.jpg',
        alt: 'An outdoor dining terrace at Mercury Palms under tall palms with the mountains beyond',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
      {
        suggestion: 'The house at dusk from the pool',
        src: '/images/mercury-palms/mercury-palms-palm-springs-private-estate-david-weis.jpg',
        alt: 'Mercury Palms at dusk from across the pool, the house lit and palms silhouetted against the sky',
        width: 2048,
        height: 1365,
        hasSmall: true,
      },
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

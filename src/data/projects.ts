/**
 * The seven Experience projects. Every project page is rendered from this
 * file by src/components/ProjectPage.astro; the cards on Home, Experience
 * and the market pages by ProjectCard.astro. Copy is the approved deck.
 *
 * Rules from the deck: no dollar figures or price history anywhere (Querencia
 * Palms and Vista Voltaire especially); no negative guest or tenant specifics
 * on Belmont Beach House. Photos are placeholders until David supplies them.
 */
import { agent } from './site';
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
/** A pair caption: a muted sentence, or a small uppercase title with a muted note under it. */
export type PairCaption = string | { title: string; note?: string };

export type ChapterBlock =
  | {
      type: 'story';
      heading: string;
      paragraphs: readonly string[];
      eyebrow?: string;
      /** A photo set beside the prose (4:5 by default) rather than below it. */
      aside?: Photo;
      /** CSS aspect ratio for the aside photo (default '4 / 5'). */
      asideRatio?: string;
      /** Caption shown under the aside photo. */
      asideCaption?: string;
      /** Heading level (2 by default; 3 when `sub` is set). */
      level?: 2 | 3;
      /** A sub-section of the story block before it: h3, a top rule, tighter spacing. */
      sub?: boolean;
    }
  | {
      type: 'photo';
      photo: Photo;
      ratio?: string;
      /** 'bleed' runs edge to edge; 'container' stays inside the page gutters. */
      width?: 'container' | 'bleed';
      /** A muted sentence, or a small uppercase title with a muted note. */
      caption?: PairCaption;
      /** A link-arrow shown under the caption. */
      link?: { label: string; href: string; external?: boolean };
    }
  | {
      type: 'pair';
      /** Two photos side by side, read left to right (e.g. barren → lush). */
      photos: readonly [Photo, Photo];
      ratio?: string;
      /** Under each photo: a muted sentence, or a small uppercase title with a muted note. */
      captions?: readonly [PairCaption?, PairCaption?];
      /** Small uppercase tags shown on the photos, always visible, e.g. ['Before', 'After']. */
      labels?: readonly [string, string];
      /** Unequal columns so one photo reads larger; equal by default. */
      emphasis?: 'first' | 'second';
      /** One caption for the pair as a whole, under both photos. */
      caption?: { title: string; note?: string };
      /** Pull the pair to one side at about 70% of the measure instead of filling it. */
      align?: 'left' | 'right';
    }
  | {
      /**
       * Two columns of photos. One column (`fill`, by default the one with
       * fewer photos) stretches to the other column's height and its photo is
       * cropped to fit; the other column's tiles use `ratio`. Captions sit
       * under each column; `caption` is one caption for the whole block.
       */
      type: 'collage';
      columns: readonly [readonly Photo[], readonly Photo[]];
      fill?: 'first' | 'second';
      ratio?: string;
      emphasis?: 'first' | 'second';
      captions?: readonly [PairCaption?, PairCaption?];
      caption?: { title: string; note?: string };
      /** Small uppercase tags on each column's first photo, e.g. ['Before', 'After']. */
      labels?: readonly [string?, string?];
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
      /** Optional small label + note under each photo, aligned by index; an index can be left undefined. */
      captions?: readonly ({ title: string; note?: string } | undefined)[];
    }
  | {
      /** Compact strip of photos; hover or tap reveals each label. No voting, no backend. */
      type: 'strip';
      /** Omit for a strip with no heading (e.g. one following its own story block). */
      heading?: string;
      photos: readonly Photo[];
      labels: readonly string[];
      /** One closing sentence under the strip. */
      closing?: string;
      /** Run edge to edge, one column per photo, instead of inside the container. */
      bleed?: boolean;
    }
  | {
      /** A single outbound-style link with an optional muted note. Not a button. */
      type: 'cta';
      label: string;
      href: string;
      external?: boolean;
      note?: string;
    }
  | {
      /** A sequence of stages stepped through manually: one large photo with
       * an always-visible title/caption, small numbered stage buttons, and
       * Previous/Next controls. Rendered by Sequence.astro. */
      type: 'sequence';
      heading: string;
      intro?: readonly string[];
      stages: readonly { title: string; caption: string; photo: Photo }[];
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
              label: 'Unit 104 · Side yard',
              before: { suggestion: '106 Primary Yard Before 1', src: '/images/querencia-landscaping/querencia-palms-104-primary-yard-before-renovation-david-weis.jpg', alt: 'Side yard of Unit 104 before planting', width: 2400, height: 1350, hasSmall: true },
              after: { suggestion: '106 Primary Yard After 1', src: '/images/querencia-landscaping/querencia-palms-104-primary-yard-desert-landscaping-david-weis.jpg', alt: 'Side yard of Unit 104 after planting', width: 2048, height: 1365, hasSmall: true },
            },
            {
              label: 'Unit 106 · Back patio',
              before: { suggestion: '106 Back Patio Before 1 or 2, closest matching angle', src: '/images/querencia-landscaping/querencia-palms-106-back-patio-02-before-hardscape-david-weis.jpg', alt: 'Back patio of Unit 106 before planting', width: 2400, height: 1800, hasSmall: true },
              after: { suggestion: '106 Back Patio After 1 or 2, same angle', src: '/images/querencia-landscaping/querencia-palms-106-back-patio-02-outdoor-living-david-weis.jpg', alt: 'Back patio of Unit 106 after planting, private and green', width: 2048, height: 1365, hasSmall: true },
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
          type: 'collage',
          columns: [
            [
              { suggestion: 'Koi visible through clear water', src: '/images/querencia-landscaping/querencia-palms-floating-water-plants-desert-garden-david-weis.jpg', alt: 'Orange koi in a clear, shallow stretch of the pond between river rocks', width: 2400, height: 1800, hasSmall: true },
            ],
            [
              { suggestion: 'Pink water lily', src: '/images/querencia-landscaping/querencia-palms-aquatic-landscaping-tahquitz-river-estates-david-weis.jpg', alt: 'A pink water lily open on the pond, with a koi passing beneath the pads', width: 1800, height: 2400, hasSmall: true },
              { suggestion: 'Small red aquatic bloom floating on the water', src: '/images/querencia-landscaping/querencia-palms-pond-plants-desert-oasis-david-weis.jpg', alt: 'A small red bloom on a floating aquatic plant, seen from above the water', width: 1800, height: 2400, hasSmall: true },
            ],
          ],
          fill: 'first',
          emphasis: 'first',
          ratio: '3 / 2',
        },
        {
          type: 'collage',
          columns: [
            [
              { suggestion: 'Dragonfly beside the pond', src: '/images/querencia-landscaping/querencia-palms-water-iris-koi-pond-david-weis.jpg', alt: 'An orange dragonfly resting on a wall beside the pond', width: 1800, height: 2400, hasSmall: true, position: 'center 12%' },
              { suggestion: 'White water lily', src: '/images/querencia-landscaping/querencia-palms-papyrus-pond-landscaping-david-weis.jpg', alt: 'A white water lily open on the pond beside broad canna leaves', width: 1800, height: 2400, hasSmall: true },
            ],
            [
              { suggestion: 'Orange canna', src: '/images/querencia-landscaping/querencia-palms-lotus-water-garden-palm-springs-david-weis.jpg', alt: 'An orange canna flower above a lily pad at the edge of the pond', width: 1800, height: 2400, hasSmall: true },
            ],
          ],
          fill: 'second',
          ratio: '3 / 2',
        },
        {
          type: 'pair',
          photos: [
            { suggestion: 'Plants growing naturally between the rocks', src: '/images/querencia-landscaping/querencia-palms-pond-greenery-south-palm-springs-david-weis.jpg', alt: 'Koi gathered below a clump of marginal plants growing between the rocks at the pond edge', width: 1800, height: 2400, hasSmall: true, position: 'center 40%' },
            { suggestion: 'Purple flower beside the bridge (new photo in David’s Drive)', src: '/images/querencia-landscaping/querencia-palms-purple-flower-bridge-koi-pond-david-weis.jpg', alt: 'A purple flower in bloom beside the small bridge over the Querencia Palms koi pond' }, // placeholder until uploaded
          ],
          ratio: '4 / 3',
        },
        {
          type: 'story',
          eyebrow: 'Learning as I went',
          heading: 'The garden club came with me.',
          paragraphs: [
            'Around the same time, I joined the Village of La Jolla Garden Club. What began as an enjoyable way to learn more about plants, quickly became surprisingly practical.',
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
       * Unit numbers on the photos were corrected by David on 2026-09-22.
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
          photo: { suggestion: 'Unit 206 living room', src: '/images/querencia-interiors/querencia-palms-condo-interior-palm-springs-david-weis.jpg', alt: 'Unit 206 at Querencia Palms: a round black dining table with mustard chairs beside a green mural, the bar just visible', width: 2048, height: 1369, hasSmall: true },
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
          photos: [{ suggestion: 'Unit 104 living room', src: '/images/querencia-interiors/querencia-palms-indoor-outdoor-living-patio-doors-david-weis.jpg', alt: 'Unit 104 at Querencia Palms: a cream sofa with rust pillows on a rust rug, in front of a green and gold mural', width: 2048, height: 1368, hasSmall: true }, { suggestion: 'Unit 202 living room', src: '/images/querencia-interiors/querencia-palms-open-concept-living-room-david-weis.jpg', alt: 'Unit 202 at Querencia Palms: a blue leather sofa and a walnut credenza in front of a bold blue, orange and brown mural', width: 2400, height: 1800, hasSmall: true, position: 'center 30%' }],
          ratio: '4 / 3',
          captions: ['Unit 104, the third model.', 'Unit 202, the upstairs model.'],
        },
        {
          type: 'photo',
          photo: { suggestion: 'The view from the upstairs model (new photo in David’s Drive interiors folder)', src: '/images/querencia-interiors/querencia-palms-202-upstairs-view-mountains-david-weis.jpg', alt: 'The view from the upstairs residence at Querencia Palms, the mountains rising beyond the rooftops' }, // placeholder until uploaded
          ratio: '16 / 9',
          caption: 'The view from upstairs, and the reason we needed a model on the second floor.',
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
          type: 'collage',
          columns: [
            [
              { suggestion: 'Unit 105 living room', src: '/images/querencia-interiors/querencia-palms-midcentury-interior-design-palm-springs-david-weis.jpg', alt: 'Unit 105 at Querencia Palms: a white sofa and a green fluted credenza against a teal, mustard and rust geometric mural', width: 2048, height: 1367, hasSmall: true },
            ],
            [
              { suggestion: 'Unit 106 living room', src: '/images/querencia-interiors/querencia-palms-renovated-bathroom-palm-springs-david-weis.jpg', alt: 'Unit 106 at Querencia Palms: a tan leather sofa and a green credenza against a grey and beige geometric mural', width: 2048, height: 1365, hasSmall: true },
              { suggestion: 'Unit 106 sitting area', src: '/images/querencia-interiors/querencia-palms-primary-bedroom-suite-condo-david-weis.jpg', alt: 'Unit 106 at Querencia Palms: two green velvet armchairs, a marble side table and a patio door to the courtyard', width: 2048, height: 1366, hasSmall: true, position: 'left center' },
            ],
          ],
          fill: 'first',
          emphasis: 'first',
          ratio: '3 / 2',
          captions: [
            { title: 'Unit 105', note: 'Graphic geometry + saturated color' },
            { title: 'Unit 106', note: 'Warm tones + geometric restraint, and a sitting area that opens to the courtyard' },
          ],
        },
        {
          type: 'gallery',
          label: 'More of the residences',
          photos: [
            { suggestion: 'Unit 202 living room', src: '/images/querencia-interiors/querencia-palms-open-concept-living-room-david-weis.jpg', alt: 'Unit 202 at Querencia Palms: a blue leather sofa and a walnut credenza in front of a bold blue, orange and brown mural', width: 2400, height: 1800, hasSmall: true, position: 'center 30%' },
            { suggestion: 'Unit 201 living room', src: '/images/querencia-interiors/querencia-palms-renovated-kitchen-palm-springs-david-weis.jpg', alt: 'Unit 201 at Querencia Palms: a tan leather sofa and a round coffee table in front of a green and gold botanical mural', width: 2400, height: 1800, hasSmall: true },
            { suggestion: 'Unit 104 living room', src: '/images/querencia-interiors/querencia-palms-indoor-outdoor-living-patio-doors-david-weis.jpg', alt: 'Unit 104 at Querencia Palms: a cream sofa with rust pillows on a rust rug, in front of a green and gold mural', width: 2048, height: 1368, hasSmall: true },
          ],
          captions: [
            { title: 'Unit 202', note: 'Desert color + mid-century energy' },
            { title: 'Unit 201', note: 'Botanical green + gold, warm leather' },
            { title: 'Unit 104', note: 'Green, gold + garden-inspired color' },
          ],
        },
        {
          type: 'pair',
          photos: [
            { suggestion: 'Unit 206 dining area', src: '/images/querencia-interiors/querencia-palms-condo-interior-palm-springs-david-weis.jpg', alt: 'Unit 206 at Querencia Palms: a round black dining table with mustard chairs beside a green mural, the bar just visible', width: 2048, height: 1369, hasSmall: true },
            { suggestion: 'Unit 204 living room', src: '/images/querencia-interiors/querencia-palms-renovated-condo-interior-south-palm-springs-david-weis.jpg', alt: 'Unit 204 at Querencia Palms: a brown leather sofa and two white armchairs against a teal, rust and mustard geometric mural', width: 1448, height: 1086, hasSmall: true },
          ],
          ratio: '4 / 3',
          captions: [
            { title: 'Unit 206', note: 'When your dining room gets its own bar' },
            { title: 'Unit 204', note: 'Graphic modernism + deep contrast' },
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
          photos: [{ suggestion: 'Unit 104 living room', src: '/images/querencia-interiors/querencia-palms-indoor-outdoor-living-patio-doors-david-weis.jpg', alt: 'Unit 104 at Querencia Palms: a cream sofa with rust pillows on a rust rug, in front of a green and gold mural', width: 2048, height: 1368, hasSmall: true }, { suggestion: 'Unit 105 living room', src: '/images/querencia-interiors/querencia-palms-midcentury-interior-design-palm-springs-david-weis.jpg', alt: 'Unit 105 at Querencia Palms: a white sofa and a green fluted credenza against a teal, mustard and rust geometric mural', width: 2048, height: 1367, hasSmall: true }, { suggestion: 'Unit 106 living room', src: '/images/querencia-interiors/querencia-palms-renovated-bathroom-palm-springs-david-weis.jpg', alt: 'Unit 106 at Querencia Palms: a tan leather sofa and a green credenza against a grey and beige geometric mural', width: 2048, height: 1365, hasSmall: true }, { suggestion: 'Unit 201 living room', src: '/images/querencia-interiors/querencia-palms-renovated-kitchen-palm-springs-david-weis.jpg', alt: 'Unit 201 at Querencia Palms: a tan leather sofa and a round coffee table in front of a green and gold botanical mural', width: 2400, height: 1800, hasSmall: true }, { suggestion: 'Unit 202 living room', src: '/images/querencia-interiors/querencia-palms-open-concept-living-room-david-weis.jpg', alt: 'Unit 202 at Querencia Palms: a blue leather sofa and a walnut credenza in front of a bold blue, orange and brown mural', width: 2400, height: 1800, hasSmall: true, position: 'center 30%' }, { suggestion: 'Unit 204 living room', src: '/images/querencia-interiors/querencia-palms-renovated-condo-interior-south-palm-springs-david-weis.jpg', alt: 'Unit 204 at Querencia Palms: a brown leather sofa and two white armchairs against a teal, rust and mustard geometric mural', width: 1448, height: 1086, hasSmall: true }, { suggestion: 'Unit 206 dining area', src: '/images/querencia-interiors/querencia-palms-condo-interior-palm-springs-david-weis.jpg', alt: 'Unit 206 at Querencia Palms: a round black dining table with mustard chairs beside a green mural, the bar just visible', width: 2048, height: 1369, hasSmall: true }],
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
     * Before photos of the motor lodge, from David (2026-09-15). Two matched
     * pairs right after "Build it. Sell it. Move on." The before shots are
     * small web files from the time; that roughness is part of the story.
     *
     * Marketing chapter (David's 2026-09-22 brief): the Instagram-to-friendship
     * story with Jonathan Bennett and Jaymes Vaughn, Kelly Osbourne and the
     * lesson David carried into real estate marketing. Sits after "Hospitality
     * is built in the small things."
     */
    chapters: [
      {
        id: 'before',
        after: 0,
        blocks: [
          {
            type: 'pair',
            photos: [
              { suggestion: 'The motor lodge courtyard before', src: '/images/the-cole/the-cole-hotel-before-renovation-palm-springs-david-weis-04.jpg', alt: 'The motor lodge courtyard before the renovation: a bare two-story building, a white block wall and a single palm', width: 542, height: 371 },
              { suggestion: 'The Cole pool with the building behind', src: '/images/the-cole/the-cole-hotel-pool-desert-oasis-palm-springs-david-weis.jpg', alt: 'The Cole pool after the renovation, white loungers with turquoise cushions and striped umbrellas beneath the colored doors', width: 2400, height: 1680, hasSmall: true },
            ],
            ratio: '4 / 3',
            captions: ['The motor lodge Mark bought.', 'The Cole.'],
          },
          {
            type: 'pair',
            photos: [
              { suggestion: 'The motor lodge from the street, before', src: '/images/the-cole/the-cole-hotel-before-renovation-palm-springs-david-weis-01.jpg', alt: 'The former motor lodge from North Palm Canyon Drive before the renovation, its stone facade and carport under the mountains', width: 541, height: 370 },
              { suggestion: 'The courtyard dug up mid-construction', src: '/images/the-cole/the-cole-hotel-before-renovation-palm-springs-david-weis-02.jpg', alt: 'The courtyard of the motor lodge torn up during construction, with the pool excavation framed in lumber', width: 2400, height: 1800, hasSmall: true },
            ],
            ratio: '4 / 3',
            captions: ['From the street, before.', 'The courtyard, mid-construction.'],
          },
        ],
      },
      {
        id: 'marketing',
        after: 3,
        blocks: [
          {
            type: 'story',
            eyebrow: 'Relationships + marketing',
            heading: 'It started with an Instagram message.',
            paragraphs: [
              'Before The Cole had even officially opened, Jonathan Bennett reached out through the hotel’s Instagram account.',
              'At that point, I was still figuring out what running a hotel even looked like. We were finishing details, building the brand, getting ready for guests and trying to make people notice a new little property in Palm Springs.',
              'I knew who Jonathan was, obviously. But more than anything, I thought: this could be fun.',
              'So I invited Jonathan and his husband, Jaymes Vaughn, to come stay with us before we opened to the public. I basically handed them the hotel. They became our first guests.',
              'And what started as a message on Instagram became a friendship that lasted far beyond their stay.',
            ],
          },
          {
            type: 'photo',
            photo: { suggestion: 'Jonathan Bennett and Jaymes Vaughn on Cole bicycles under the sign', src: '/images/the-cole/the-cole-hotel-first-guests-jonathan-bennett-jaymes-vaughn-bicycles.jpg', alt: 'Jonathan Bennett, Jaymes Vaughn and a friend on The Cole’s turquoise bicycles beneath the yellow and orange Cole Hotel sign', width: 1170, height: 861, hasSmall: true },
            ratio: '4 / 3',
            caption: 'Jonathan Bennett and Jaymes Vaughn, our first guests.',
          },
          {
            type: 'story',
            heading: 'Then COVID happened.',
            paragraphs: [
              'Not long afterward, COVID shut down Palm Springs hotels. For a brand-new property, it was terrifying.',
              'We had barely opened and suddenly there were no guests to welcome, no normal hotel operation, and no way of knowing what the next several months were going to look like.',
              'Jonathan and Jaymes were home too, creating their Quarantine Coffee show during lockdown. And then one day, there they were on camera drinking coffee out of The Cole Hotel mugs I had made.',
              'It sounds like such a small thing. It meant a lot to me.',
              'I had obsessed over all of those little branded details because I wanted The Cole to feel like a real brand, not simply a building with rooms for rent. And during a period when the actual hotel could not operate normally, something I had created for it was sitting in their home and becoming part of something they were creating.',
              'There was no agreement. No product placement. No campaign. They just liked the mugs.',
              'That was probably the first time I really understood how powerful organic brand advocacy could be.',
            ],
          },
          {
            type: 'photo',
            photo: { suggestion: 'Quarantine Coffee with the Cole mugs (do not crop out the mugs)', src: '/images/the-cole/the-cole-hotel-quarantine-coffee-jonathan-bennett-jaymes-vaughn-mugs.jpg', alt: 'Jaymes Vaughn and Jonathan Bennett on their Quarantine Coffee show, in gloves, each holding a Cole Hotel mug, with their dog between them', width: 1102, height: 750, hasSmall: true },
            ratio: '3 / 2',
            caption: 'I may have been slightly too excited when I saw those mugs.',
          },
          {
            type: 'story',
            heading: 'The relationship kept growing.',
            paragraphs: [
              'Jonathan and Jaymes eventually made Palm Springs part of their own lives, and our friendship continued along with it.',
              'They supported The Cole. We supported them.',
              'They introduced friends to the hotel, sent people our way, and helped put this tiny independent property in front of people we never could have reached through conventional advertising.',
              'But it never felt transactional. That is important to me.',
              'I was not keeping a spreadsheet of who posted what. I liked them. They liked what we were building. And good things kept growing from that.',
            ],
            aside: { suggestion: 'Jaymes beside the Cole sign', src: '/images/the-cole/the-cole-hotel-jaymes-vaughn-sign.jpg', alt: 'Jaymes Vaughn sitting on the wall beside The Cole Hotel sign, palms and mountains behind', width: 1170, height: 990, hasSmall: true },
            asideRatio: '1 / 1',
            asideCaption: 'Jaymes, beside the sign.',
          },
          {
            type: 'story',
            heading: 'Then came Kelly.',
            paragraphs: [
              'One of the people introduced to The Cole through that circle was Kelly Osbourne.',
              'I remember chatting with her while doing something considerably less glamorous than celebrity hospitality: I was deep-cleaning the hotel.',
              'That was The Cole in a nutshell. One minute I was thinking about marketing and guest experience. The next I was cleaning something.',
              'Kelly stayed with us, rode one of our Cole bicycles, and later shared the hotel with her audience completely on her own. Her post talked about the attention to detail, the bedding and even the biscuits.',
              'And she made a point of saying it was not an advertisement. That last part might have meant the most to me.',
              'Because it proved something I had been slowly learning:',
            ],
          },
          {
            type: 'callout',
            text: 'The best marketing sometimes happens after you stop trying to market.',
            note: 'If people genuinely enjoy an experience, they want to tell somebody.',
          },
          {
            type: 'collage',
            columns: [
              [{ suggestion: 'Kelly Osbourne on a Cole bicycle, her dog in the basket', src: '/images/the-cole/the-cole-hotel-kelly-osbourne-bicycle.jpg', alt: 'Kelly Osbourne, in glasses and a polka-dot dress, on a Cole bicycle with her small dog in the wicker basket beneath the Cole Hotel sign', width: 1112, height: 1116, hasSmall: true }],
              [{ suggestion: 'Her Instagram post, with the caption', src: '/images/the-cole/the-cole-hotel-kelly-osbourne-instagram-post.jpg', alt: 'Kelly Osbourne’s Instagram post about The Cole Hotel, with her caption praising the attention to detail, the sheets and the biscuits, and noting it was not an ad', width: 1112, height: 1789, hasSmall: true }],
            ],
            fill: 'first',
            emphasis: 'first',
            ratio: '5 / 8',
            captions: ['Kelly, on one of the Cole bicycles.', 'Her post, in her own words.'],
          },
          {
            type: 'story',
            heading: 'I was learning what a brand really is.',
            paragraphs: [
              'Before The Cole, I probably would have thought branding meant a logo, a color palette, good photography and advertising. Those things matter.',
              'But The Cole taught me that a brand is also everything people carry away from an experience.',
              'The bicycle they remember riding. The cocktail they liked enough to photograph. The mug that somehow ends up sitting beside them months later. The friend they tell about the property. The way someone talks about your business when you are not in the room.',
              'I could control the signage. I could design the collateral. I could make the mugs.',
              'But the most valuable part was what happened once those things belonged to someone else’s experience.',
            ],
          },
          {
            type: 'callout',
            text: 'The best marketing we had was when people talked about The Cole without us asking them to.',
          },
          {
            type: 'story',
            heading: 'It wasn’t just a hotel relationship.',
            paragraphs: [
              'Years later, Mark and I were standing beside Jonathan again for a completely different reason. We were there when he received his star on the Palm Springs Walk of the Stars.',
              'By then, this was no longer a hotel marketing story. It was a friendship.',
              'And I think that is why I look back on this chapter so differently than I would if it had simply resulted in a few successful social media posts.',
              'One Instagram message introduced us. The Cole gave us the reason to meet. But the relationship outlasted the transaction entirely.',
              'That has become one of the most important lessons I have carried into real estate.',
            ],
          },
          {
            type: 'pair',
            ratio: '4 / 5',
            emphasis: 'first',
            photos: [
              { suggestion: 'David, Jonathan and Mark at the star', src: '/images/the-cole/jonathan-bennett-walk-of-the-stars-david-weis-mark-weis.jpg', alt: 'David Weis, Jonathan Bennett and Mark Weis standing together on the red carpet beside Jonathan’s new star on the Palm Springs Walk of the Stars', width: 1800, height: 2400, hasSmall: true },
              { suggestion: 'The star itself', src: '/images/the-cole/jonathan-bennett-walk-of-the-stars-star.jpg', alt: 'Jonathan Bennett’s star on the Palm Springs Walk of the Stars, set in the red carpet', width: 1800, height: 2400, hasSmall: true },
            ],
            captions: ['Years after that first Instagram message, celebrating Jonathan’s Palm Springs Walk of the Stars honor together.', undefined],
          },
          {
            type: 'story',
            eyebrow: 'The lesson',
            heading: 'You cannot manufacture genuine enthusiasm.',
            paragraphs: [
              'The Cole taught me to look for opportunities. It taught me to ask. To reach out. To collaborate. To make something interesting enough that people wanted to participate.',
              'But it also taught me that there is a difference between exposure and connection. Exposure disappears quickly. Relationships compound.',
              'A single Instagram message became our first guests. Those guests became friends. Friends introduced other guests. Those guests shared the hotel with their audiences. That created new opportunities, events and collaborations. And years later, the people were still in our lives.',
              'That is the type of marketing I believe in. Not forcing a brand into every interaction. Creating something good enough that people are happy to carry the story for you.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'Into real estate',
            heading: 'The property changed. The instinct didn’t.',
            paragraphs: [
              'I recognize the same pattern in my real estate business today.',
              'A listing needs beautiful photography. It needs strong digital exposure. It needs thoughtful positioning. But that is only part of marketing.',
              'I am equally interested in the relationships surrounding the property. Who should know about it? Who can introduce someone? What event could bring the right people through the door? What detail makes someone remember it later? What can we create that people actually want to share?',
              'That thinking did not begin with Querencia Palms. I learned much of it at The Cole. Sometimes through careful planning. Sometimes through complete accident.',
              'And sometimes because two guys started drinking coffee on the internet with my hotel mugs.',
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
        suggestion: 'The pool at sunset, palms and cabanas against a pink sky',
        src: '/images/the-cole/the-cole-hotel-pool-deck-boutique-hotel-david-weis.jpg',
        alt: 'The Cole Hotel pool at sunset: turquoise and white loungers, cabanas and striped umbrellas under tall palms and a pink sky',
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
      {
        suggestion: 'A pool corner at dusk with the Cole sign lit beyond the wall',
        src: '/images/the-cole/the-cole-hotel-pool-san-jacinto-mountain-views-david-weis.jpg',
        alt: 'A corner of the Cole pool at dusk, a lounger and cabana in the foreground and the lit Cole sign rising beyond the block wall',
        width: 2400,
        height: 1680,
        hasSmall: true,
      },
      {
        suggestion: 'The bar with a tiered stand of cupcakes',
        src: '/images/the-cole/the-cole-hotel-guest-experience-palm-springs-david-weis.jpg',
        alt: 'The bar at The Cole, backlit bottles on the shelves and a tiered stand of cupcakes on the counter',
        width: 2400,
        height: 1640,
        hasSmall: true,
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
    kind: 'Renovation + Ownership',
    kindIndex: '1924 Restoration',
    kindTeaser: 'Renovation + Vacation Rental',
    summary:
      'A historic Ocean Beach home originally restored for resale that ultimately found a second life as a high-performing vacation rental.',
    teaser: 'A restored 1924 home that proved sometimes the best real estate decision is knowing when not to sell.',
    teaserCta: 'Explore the Project',
    intro:
      'Vista Voltaire began with a straightforward plan: purchase a neglected 1924 home in Ocean Beach, renovate it, and sell it. What followed was less straightforward.',
    sections: [],
    /*
     * David's 2026-09-17 brief, told as one continuous story: the purchase,
     * the renovation, the fence (with its own five-stage sequence), the
     * landscaping and the pivot to Celebrity Vacation Homes. `after: -1`
     * puts it right after the hero lead photo. The old "Restore it. Sell
     * it." / "The market stopped." sections are fully superseded by this.
     * Files go in public/images/vista-voltaire/; see IMAGES-NEEDED.md for the
     * map from David's Drive filenames.
     */
    chapters: [
      {
        id: 'the-story',
        after: -1,
        blocks: [
          {
            type: 'story',
            heading: 'The house stayed. The plan changed.',
            paragraphs: [
              'There was a substantial renovation, a fence that needed several revisions, landscaping that took time to become what we envisioned, and a sale that never became the outcome we expected.',
              'Today, the home is part of Celebrity Vacation Homes.',
              'Looking back, the most interesting part is not simply how much the property changed. It is how our thinking changed along with it.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'The beginning',
            heading: 'Two cities. Two projects. A lot happening at once.',
            paragraphs: [
              'I represented Mark on the purchase of Vista Voltaire.',
              'The house needed considerable work, but Mark saw a home worth renovating rather than replacing. Bringing it back to life would give it another chapter while keeping it part of the neighborhood.',
              'At the same time, we were working on Querencia Palms in Palm Springs.',
              'Managing the demands of both projects meant dividing our attention between two properties, two cities, and very different challenges.',
              'This time, we had a contractor on the renovation. After projects where Mark and I had been much more hands-on, not having to do the heavy lifting ourselves was a welcome change.',
              'My involvement began with representing the purchase and continued through presentation, marketing, showings, and paying attention to what people were experiencing when they visited.',
              'As the project progressed, that feedback became increasingly important.',
            ],
            aside: {
              suggestion: 'The house before renovation',
              src: '/images/vista-voltaire/vista-voltaire-front-exterior-before-renovation-david-weis.jpg',
              alt: 'Vista Voltaire before renovation, showing the home’s neglected condition.',
              width: 2048,
              height: 1536,
              hasSmall: true,
            },
            asideRatio: '4 / 3',
            asideCaption: 'The house before renovation.',
          },
          {
            type: 'story',
            eyebrow: 'The renovation',
            heading: 'The potential was there. The work was substantial.',
            paragraphs: [
              'The earlier photographs show why this was more than a cosmetic refresh.',
              'Worn surfaces, tired cabinetry, and separated rooms made it difficult to appreciate the home’s potential. The construction photographs show another part of the process, with walls opened and the work well underway.',
              'The finished interiors brought the spaces together through warm wood tones, lighter surfaces, and a consistent palette.',
              'The transformation was not only about making the rooms look different. It was about making them feel welcoming and ready to use.',
            ],
            aside: {
              suggestion: 'David on site during the renovation',
              src: '/images/vista-voltaire/david-weis-hands-on-renovation-vista-voltaire.jpg',
              alt: 'David inside Vista Voltaire during the renovation, with exposed framing and construction visible around him.',
              width: 2048,
              height: 1536,
              hasSmall: true,
            },
            asideRatio: '4 / 3',
            asideCaption: 'On site during the renovation.',
          },
          {
            type: 'story',
            heading: 'The kitchen and dining area',
            paragraphs: [
              'The kitchen and dining area became one of the clearest examples.',
              'The earlier kitchen felt separate from the surrounding rooms. The finished space connects cooking, dining, and gathering around a generous breakfast counter.',
              'Wood-toned cabinetry, white surfaces, textured tile, and warm lighting give the room a much lighter feeling without making it cold.',
              'The wider photographs matter here. They show how the spaces relate to one another, not just the finishes we chose.',
            ],
          },
          {
            type: 'pair',
            photos: [
              {
                suggestion: 'The kitchen before renovation',
                src: '/images/vista-voltaire/vista-voltaire-kitchen-before-renovation-david-weis.jpg',
                alt: 'The Vista Voltaire kitchen before renovation.',
                width: 2048,
                height: 1536,
                hasSmall: true,
              },
              {
                suggestion: 'The finished kitchen and dining room, wide',
                src: '/images/vista-voltaire/vista-voltaire-kitchen-after-renovation-david-weis.jpg',
                alt: 'The open kitchen and dining room at Vista Voltaire: oak cabinets, a white waterfall island with tan leather stools, a long wood dining table under a rattan pendant and two arched doorways',
                width: 2048,
                height: 1367,
                hasSmall: true,
              },
            ],
            labels: ['Before', 'After'],
            ratio: '4 / 3',
          },
          {
            type: 'pair',
            photos: [
              {
                suggestion: 'The dining area before renovation',
                src: '/images/vista-voltaire/vista-voltaire-dining-room-before-renovation-david-weis.jpg',
                alt: 'The Vista Voltaire dining area before renovation.',
                width: 2048,
                height: 1536,
                hasSmall: true,
              },
              {
                suggestion: 'The finished breakfast counter and its connection to the kitchen',
                src: '/images/vista-voltaire/vista-voltaire-dining-room-after-renovation-david-weis.jpg',
                alt: 'Three tan leather stools at the fluted oak breakfast bar in the Vista Voltaire kitchen, under two brass and glass pendants',
                width: 2048,
                height: 1367,
                hasSmall: true,
              },
            ],
            labels: ['Before', 'After'],
            ratio: '4 / 3',
          },
          {
            type: 'story',
            heading: 'Same room. A different feeling.',
            paragraphs: [
              'The living room shows another side of the transformation.',
              'During construction, tools and materials filled the space around the fireplace. In the finished room, that wall became the focal point of a bright, welcoming place to gather.',
              'Warm coral tile, lighter wood tones, textured furnishings, and comfortable seating gave the room a different personality.',
              'The fireplace wall and the windows on either side make the transformation easy to follow. What changed was how the whole room came together.',
            ],
          },
          {
            type: 'pair',
            photos: [
              {
                suggestion: 'The living room during renovation',
                src: '/images/vista-voltaire/vista-voltaire-living-room-before-renovation-david-weis.jpg',
                alt: 'The Vista Voltaire living room during renovation, tools and materials around the fireplace.',
                width: 2048,
                height: 1536,
                hasSmall: true,
              },
              {
                suggestion: 'The finished living room',
                src: '/images/vista-voltaire/vista-voltaire-living-room-after-renovation-david-weis.jpg',
                alt: 'The living room at Vista Voltaire with a light sectional, two rust armchairs, a round oak coffee table and the original fireplace faced in terracotta tile',
                width: 2048,
                height: 1367,
                hasSmall: true,
              },
            ],
            labels: ['During renovation', 'After'],
            ratio: '4 / 3',
          },
          {
            type: 'story',
            heading: 'The smaller spaces changed, too.',
            paragraphs: [
              'Upstairs, the transformation continued through the landing and into a window-lined corner.',
              'The finished nook became a place to sit and work, with the outlook becoming part of the experience.',
              'These smaller spaces were not the headline features of the renovation, but they helped the house feel considered throughout.',
            ],
          },
          {
            type: 'pair',
            photos: [
              {
                suggestion: 'The upstairs landing before renovation',
                src: '/images/vista-voltaire/vista-voltaire-hallway-before-renovation-david-weis.jpg',
                alt: 'The upstairs landing at Vista Voltaire before renovation.',
                width: 1536,
                height: 2048,
                hasSmall: true,
              },
              {
                suggestion: 'The upstairs landing, renewed',
                src: '/images/vista-voltaire/vista-voltaire-hallway-after-renovation-david-weis.jpg',
                alt: 'The upstairs landing at Vista Voltaire after renovation.',
                width: 2048,
                height: 1367,
                hasSmall: true,
              },
            ],
            labels: ['Before', 'After'],
            ratio: '4 / 3',
          },
          {
            type: 'pair',
            photos: [
              {
                suggestion: 'The window-lined corner before renovation',
                src: '/images/vista-voltaire/vista-voltaire-kids-room-before-renovation-david-weis.jpg',
                alt: 'The window-lined corner at Vista Voltaire before renovation.',
                width: 1536,
                height: 2048,
                hasSmall: true,
              },
              {
                suggestion: 'The window-lined corner, reimagined',
                src: '/images/vista-voltaire/vista-voltaire-kids-room-after-renovation-david-weis.jpg',
                alt: 'The window-lined corner at Vista Voltaire reimagined as a place to sit and work.',
                width: 2048,
                height: 1367,
                hasSmall: true,
              },
            ],
            labels: ['Before', 'After'],
            ratio: '4 / 3',
          },
          {
            type: 'story',
            eyebrow: 'The part we thought would be simple',
            heading: 'The fence had other plans.',
            paragraphs: [
              'One of the first things we did was build a six-foot solid fence.',
              'The intention was straightforward: create privacy from the street and try to reduce traffic noise.',
              'Then we discovered online that a complaint had been filed, and learned that the fence needed to change.',
              'I used ChatGPT to look up the height requirements and passed the answer along. The feet-and-inches information we relied on was wrong. The fence was shortened, but the first correction still left it too tall.',
              'Eventually, we removed alternating boards and reworked it into an open picket design.',
              'It became a memorable lesson in checking the applicable requirements and exact measurements directly, rather than treating an online answer as a construction instruction.',
              'The first fence was not entirely wasted effort. During construction, it had also helped control access to the property.',
              'But the long-term privacy solution would turn out to be something that could grow.',
            ],
          },
          {
            type: 'story',
            heading: 'I was picturing privacy. We had little boxwoods.',
            paragraphs: [
              'When the first landscaping was finished, I was excited to see the yard.',
              'Then we pulled up.',
              'I had been picturing a substantial green screen. What I saw were little boxwoods.',
              'They added greenery, but they were not providing the privacy I had in mind. Mark expected the planting to grow in. I was thinking about how the property felt to someone touring it that day.',
              'As we introduced the home through Compass Private Exclusives and brought agents through, feedback kept returning to the street setting.',
              'That reinforced the issue I had been raising: the yard needed meaningful screening, not simply a planted border.',
              'The boxwoods were relocated and taller hedge planting was introduced. Even then, it took another round of planting to create the density we wanted.',
              'With more plants and time to fill in, the yard finally began to feel much more enclosed and personal.',
              'We had started by trying to create privacy with a solid fence. We ended up with a more open fence and a much greener boundary.',
              'It took several attempts, but the result was closer to the yard I had imagined.',
            ],
          },
          {
            type: 'callout',
            text: 'I wasn’t simply asking for more plants. I was asking for more privacy.',
          },
          {
            type: 'sequence',
            heading: 'Five stages of a fence.',
            stages: [
              {
                title: 'The starting point',
                caption: 'The original fence and yard.',
                photo: {
                  suggestion: 'The original fence and yard',
                  src: '/images/vista-voltaire/vista-voltaire-fence-original-before-renovation-david-weis.jpg',
                  alt: 'The original fence and front yard at Vista Voltaire, before any changes.',
                  width: 1536,
                  height: 2048,
                  hasSmall: true,
                },
              },
              {
                title: 'The first approach',
                caption: 'The solid fence early in construction.',
                photo: {
                  suggestion: 'The solid fence early in construction',
                  src: '/images/vista-voltaire/vista-voltaire-fence-2-solid.jpg',
                  alt: 'The solid six-foot fence at Vista Voltaire early in construction.',
                },
              },
              {
                title: 'A revised design',
                caption: 'The fence being reworked into an open picket design.',
                photo: {
                  suggestion: 'The fence reworked into an open picket design',
                  src: '/images/vista-voltaire/vista-voltaire-fence-3-open-picket.jpg',
                  alt: 'The Vista Voltaire fence reworked into an open picket design.',
                },
              },
              {
                title: 'The first planting',
                caption: 'The first planting added greenery, but not yet the screening we wanted.',
                photo: {
                  suggestion: 'The first planting along the fence line',
                  src: '/images/vista-voltaire/vista-voltaire-fence-4-first-planting.jpg',
                  alt: 'The first landscaping planted along the Vista Voltaire fence line, with young boxwoods.',
                },
              },
              {
                title: 'The fuller landscape',
                caption: 'Taller, fuller planting changed the feeling of the yard.',
                photo: {
                  suggestion: 'The fuller, hedge-screened yard',
                  src: '/images/vista-voltaire/vista-voltaire-fence-hedges-after-renovation-david-weis.jpg',
                  alt: 'Vista Voltaire from the front corner of the lot: fresh lawn, a gate and picket fence, tall palms and the black pergola over the entry',
                  width: 2400,
                  height: 1800,
                  hasSmall: true,
                },
              },
            ],
          },
          {
            type: 'story',
            eyebrow: 'A practical detail',
            heading: 'A garage that opens both ways.',
            paragraphs: [
              'One of my favorite practical details at Vista Voltaire is the pass-through garage.',
              'With garage doors at both ends, it offers a way through rather than simply a place to pull in and park.',
              'It is a small feature compared with a whole-house renovation, but one that makes the property memorable.',
              'Not every interesting part of a home is a finish or a design statement. Sometimes it is simply a different way to use the space.',
            ],
            aside: {
              suggestion: 'Both doors open: Vista Voltaire’s pass-through garage',
              src: '/images/vista-voltaire/vista-voltaire-pass-through-garage.jpg',
              alt: 'Vista Voltaire’s pass-through garage with both overhead doors open and a vehicle parked between the openings.',
            },
            asideRatio: '4 / 3',
            asideCaption: 'Both doors open: Vista Voltaire’s pass-through garage.',
          },
          {
            type: 'story',
            eyebrow: 'The next decision',
            heading: 'We finished the house. Then reconsidered the plan.',
            paragraphs: [
              'The original intention was still to sell.',
              'But the sale we expected did not materialize. We adjusted the presentation, responded to feedback, and reconsidered pricing.',
              'As the listing agent, it was difficult not to take that personally. I cared about the house and the work that had gone into it. At the same time, we were managing the demands of Querencia Palms and our other responsibilities.',
              'Eventually, we had to ask a different question.',
              'Instead of continuing to focus only on finding a buyer, could the property work for us in another way?',
              'That became the beginning of Vista Voltaire’s vacation-rental chapter.',
              'We initially used outside management because I did not have the capacity to take on another rental while everything else was underway. The cost and guest experience did not meet our expectations.',
              'Later, I took over management through Celebrity Vacation Homes, applying the hospitality, branding, and operating experience I had developed through our other properties.',
              'Guests began enjoying the home in a way that changed how we thought about keeping it.',
              'What had started as a renovation for resale became part of our hospitality business instead.',
            ],
          },
          {
            type: 'cta',
            label: 'Explore Vista Voltaire at Celebrity Vacation Homes',
            href: agent.vacationRentals.url,
            external: true,
            note: agent.vacationRentals.note,
          },
          {
            type: 'story',
            eyebrow: 'Looking back',
            heading: 'Not the outcome we planned. One I’m glad we have.',
            paragraphs: [
              'Looking at Vista Voltaire now, I can laugh about the fence revisions and the little boxwoods.',
              'I could not always laugh about them at the time.',
              'The project reminded me that finishing construction does not necessarily mean every part of a property is working as intended. The arrival, privacy, presentation, and day-to-day use deserve attention too.',
              'It also reinforced the importance of listening to feedback and being willing to reconsider the plan.',
              'I sometimes think that if every detail had come together sooner, we might have sold the house and moved on.',
              'Instead, we still have Vista Voltaire.',
              'That was not the original plan. It is a chapter I have come to appreciate.',
            ],
          },
        ],
      },
    ],
    stats: [
      { value: '1924', label: 'Year the home was built' },
      { value: 'Ocean Beach', label: 'San Diego' },
      { value: 'Celebrity Vacation Homes', label: 'Operated under our own management' },
    ],
    photos: [
      {
        suggestion: 'Front facade, straight on: red door, pergola, walkway lined with lantana',
        src: '/images/vista-voltaire/vista-voltaire-exterior-above-ocean-beach-san-diego.jpg',
        alt: 'Vista Voltaire after the restoration: a white two-story home in Ocean Beach with black-trimmed windows, a wood front door under a pergola, red steps and a walkway lined with flowering lantana',
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
    sections: [],
    /*
     * The renovation chapter, from David's 2026-09-17 brief: the reclaimed
     * stained-glass windows, the kitchen rework, the hardwood, the bathroom,
     * the closet conversion and the grounds, each paired with a before/during
     * photo where one exists. `after: -1` puts it right after the hero lead
     * photo, so the page reads as one connected story with no separate
     * sections up top. The closing two story blocks are the kept "vacation
     * rental portfolio" and "protect a home" copy from the old page (the
     * duplicate owner's-closets sentence removed, per David). Files go in
     * public/images/kensington-canyon/; see IMAGES-NEEDED.md for the map from
     * David's Drive filenames.
     */
    chapters: [
      {
        id: 'the-renovation',
        after: -1,
        blocks: [
          {
            type: 'story',
            eyebrow: 'The renovation',
            heading: 'Make it work better. Keep what makes it home.',
            paragraphs: [
              'Kensington Canyon was our home, which made renovating it deeply personal.',
              'Mark and I carried out the renovation ourselves, with help from his brother and nephews. Mark brought his experience as a licensed contractor, and I worked alongside him as we transformed spaces we already knew and loved. A stained-glass specialist restored three reclaimed windows that became some of the home’s most distinctive features.',
              'The goal was not to make everything new.',
              'We restored materials worth keeping, reconsidered how rooms functioned, and introduced details that gave the house even more character.',
              'The finished photographs show the result. The photographs taken along the way show what it took to get there.',
            ],
            aside: {
              suggestion: 'David during the Kensington Canyon renovation, safety glasses in hand',
              src: '/images/kensington-canyon/kensington-canyon-renovation-san-diego-david-weis.jpg',
              alt: 'Renovation selfie at Kensington Canyon, with safety glasses in the foreground and exposed framing and brickwork behind.',
              width: 1800,
              height: 2400,
              hasSmall: true,
            },
            asideRatio: '4 / 5',
            asideCaption: 'Kensington Canyon, during the work.',
          },
          {
            type: 'story',
            eyebrow: 'Reclaimed character',
            heading: 'Three windows. A second life.',
            paragraphs: [
              'Some of my favorite additions to Kensington Canyon had a story long before they became part of ours.',
              'Mark found three matching stained-glass windows in Dana Point and bought the entire set.',
              'According to the history shared with us, they came from a Los Angeles house that was moved to make way for the 405 freeway. The windows were never reinstalled. Instead, they had been stored in an attic.',
              'The stained-glass specialist who restored them believed they dated to the 1800s, based on the nails used in their construction.',
              'A few panes were broken. The specialist carefully matched the color and aged appearance of the surrounding glass, making the repairs blend beautifully with the existing panes.',
              'Then we found a place for each window.',
              'One replaced the French doors that had opened from the dining room to the courtyard. Another went into the downstairs bathroom. The third was installed in the upstairs hallway where a sliding door had led to the balcony that became Mark’s closet.',
              'Together, they connected three very different spaces through one shared detail.',
              'They were not original to the house. But they became part of what makes it ours.',
            ],
          },
          {
            type: 'photo',
            photo: {
              suggestion: 'The dining room’s reclaimed stained-glass window',
              src: '/images/kensington-canyon/kensington-canyon-stained-glass-dining-room-san-diego-david-weis.jpg',
              alt: 'The dining room at Kensington Canyon with a reclaimed stained-glass window in place of the former courtyard doors.',
              width: 1024,
              height: 683,
              hasSmall: true,
            },
            ratio: '3 / 2',
            caption: 'The dining room: reclaimed stained glass in place of the former courtyard doors.',
          },
          {
            type: 'pair',
            photos: [
              {
                suggestion: 'The reclaimed window in the downstairs bathroom (listing photo; the phone photo of the four-pane bath is kensington-canyon-stained-glass-bathroom-window-david-weis.jpg)',
                src: '/images/kensington-canyon/kensington-canyon-stained-glass-bathroom-david-weis.jpg',
                alt: 'The downstairs bathroom at Kensington Canyon: the reclaimed three-pane stained-glass window beside a round brass mirror and a blue vanity.',
                width: 1024,
                height: 683,
                hasSmall: true,
              },
              {
                suggestion: 'The reclaimed window in the upstairs hallway',
                src: '/images/kensington-canyon/kensington-canyon-stained-glass-hallway-window-david-weis.jpg',
                alt: 'The upstairs hallway at Kensington Canyon with the third reclaimed stained-glass window at the former balcony doorway, hung with holiday garland.',
                width: 762,
                height: 688,
              },
            ],
            ratio: '4 / 3',
            captions: [
              'The downstairs bathroom: the second window in a completely different setting.',
              'The upstairs hallway: the third window at the former balcony doorway.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'Rethinking the space',
            heading: 'The same footprint. A different way to use it.',
            paragraphs: [
              'The kitchen became one of the most satisfying parts of the renovation.',
              'We worked within its existing footprint, but reconsidered how the room functioned. The goal was not simply new finishes. It was a kitchen that was easier to move through, easier to use, and more enjoyable to gather in.',
              'The fixed peninsula gave way to a movable island. Gray cabinetry, lighter countertops, patterned tile, stonework, and warm wood surfaces gave the space a different identity.',
              'It still felt connected to the house. But the way we could use it had changed.',
            ],
          },
          {
            type: 'collage',
            columns: [
              [{
                suggestion: 'The earlier kitchen, with its fixed peninsula',
                src: '/images/kensington-canyon/kensington-canyon-kitchen-before-renovation-san-diego-david-weis.jpg',
                alt: 'The Kensington Canyon kitchen before renovation, with its fixed peninsula.',
                width: 1600,
                height: 1200,
                hasSmall: true,
              }],
              [{
                suggestion: 'The reworked kitchen: range, stone surround, fridge, rolling island',
                src: '/images/kensington-canyon/kensington-canyon-kitchen-wet-bar-entertaining-david-weis.jpg',
                alt: 'The reworked Kensington Canyon kitchen with a freestanding island, a stone range surround and the fridge.',
                width: 1024,
                height: 683,
                hasSmall: true,
              }],
            ],
            labels: ['Before', 'After'],
            emphasis: 'second',
            fill: 'first',
            captions: [
              'The earlier kitchen, with its fixed peninsula.',
              'The reworked kitchen, with a freestanding island and stone range surround.',
            ],
            ratio: '4 / 3',
          },
          {
            type: 'story',
            heading: 'The right island wasn’t in a kitchen showroom.',
            paragraphs: [
              'After a long search for the right island, the solution turned up in an unexpected place: Costco.',
              'A rolling tool chest had the functional drawers and flexibility we had been looking for. We added a butcher-block top, stained it, and turned it into a working piece of kitchen furniture.',
              'It gives us storage and a preparation surface when we need them. When we want more room for a gathering, we can roll it out of the way.',
              'It remains one of my favorite decisions in the house. Not because it was the obvious choice, but because it solved the problem.',
            ],
            aside: {
              suggestion: 'The rolling tool-chest kitchen island, cropped to the island',
              src: '/images/kensington-canyon/kensington-canyon-estate-canyon-views-san-diego-david-weis.jpg',
              alt: 'The kitchen at Kensington Canyon: a river-rock wall behind the range, grey cabinets and the rolling tool-chest island with its butcher-block top',
              width: 1024,
              height: 683,
              hasSmall: true,
              position: 'center 80%',
            },
            asideRatio: '1 / 1',
            asideCaption: 'A tool chest, reimagined for the kitchen.',
          },
          {
            type: 'story',
            eyebrow: 'What we kept',
            heading: 'Not everything needed to be new.',
            paragraphs: [
              'Kensington taught me to look more carefully at what was already there.',
              'The hardwood floors did not need to disappear beneath something new. They needed to be restored.',
              'Seeing them refinished reinforced how much warmth and character existing materials can bring to a home. The dining room’s wood ceiling and familiar architectural details were part of that same feeling.',
              'Some of the most satisfying parts of the renovation were not additions. They were the things we chose to keep.',
            ],
          },
          {
            type: 'pair',
            photos: [
              {
                suggestion: 'The dining room during the renovation',
                src: '/images/kensington-canyon/kensington-canyon-dining-room-before-renovation-david-weis.jpg',
                alt: 'The Kensington Canyon dining room during the renovation, its wood ceiling and floor exposed.',
                width: 2400,
                height: 1800,
                hasSmall: true,
              },
              {
                suggestion: 'The refinished hardwood floors',
                src: '/images/kensington-canyon/kensington-canyon-restored-hardwood-floors-san-diego-david-weis.jpg',
                alt: 'The existing hardwood floors at Kensington Canyon, refinished.',
                width: 1800,
                height: 2400,
                hasSmall: true,
              },
            ],
            labels: ['During renovation', 'After'],
            emphasis: 'second',
            captions: ['The dining room during the renovation.', 'The existing hardwood, refinished.'],
            ratio: '4 / 3',
          },
          {
            type: 'photo',
            photo: {
              suggestion: 'Living room with the vaulted wood ceiling',
              src: '/images/kensington-canyon/kensington-canyon-estate-indoor-outdoor-living-david-weis.jpg',
              alt: 'The living room at Kensington Canyon with a vaulted wood ceiling, a river-rock fireplace and a long sofa',
              width: 1024,
              height: 683,
              hasSmall: true,
            },
            ratio: '16 / 9',
            caption: 'The living room’s wood ceiling and river-rock fireplace, kept.',
          },
          {
            type: 'story',
            eyebrow: 'A smaller transformation',
            heading: 'A small room with a strong identity.',
            paragraphs: [
              'The downstairs bathroom became another example of combining something old with a completely different setting.',
              'White wall tile, a navy vanity, patterned flooring, and warm metal finishes created a fresh backdrop for the reclaimed stained glass.',
              'The window is the memorable detail, but the surrounding choices let it stand out.',
              'The result feels updated without feeling interchangeable with every other renovated bathroom.',
            ],
          },
          {
            type: 'pair',
            photos: [
              {
                suggestion: 'The downstairs bathroom before renovation',
                src: '/images/kensington-canyon/kensington-canyon-bathroom-before-renovation-san-diego-david-weis.jpg',
                alt: 'The downstairs bathroom at Kensington Canyon before renovation.',
                width: 960,
                height: 1280,
                hasSmall: true,
              },
              {
                suggestion: 'The finished bathroom with the stained-glass window',
                src: '/images/kensington-canyon/kensington-canyon-stained-glass-bathroom-david-weis.jpg',
                alt: 'A bathroom at Kensington Canyon with original leaded stained-glass windows, a navy vanity and a brass mirror',
                width: 1024,
                height: 683,
                hasSmall: true,
              },
            ],
            labels: ['Before', 'After'],
            captions: ['The bathroom before renovation.', 'New finishes surrounding a reclaimed focal point.'],
            ratio: '4 / 3',
          },
          {
            type: 'story',
            eyebrow: 'Making the house work for us',
            heading: 'A different use for the space.',
            paragraphs: [
              'Upstairs, the renovation changed how we used part of the house.',
              'The former balcony became Mark’s closet. In the hallway, where the sliding door had provided access to that balcony, we installed the third matching stained-glass window.',
              'One change addressed how we wanted to use the space. The other gave the former doorway a new identity.',
              'Together, they reflected what we were trying to accomplish throughout Kensington: make the house work better for our lives while giving the changes a character of their own.',
            ],
          },
          {
            type: 'pair',
            photos: [
              {
                suggestion: 'The balcony during its conversion to a closet',
                src: '/images/kensington-canyon/kensington-canyon-closet-before-renovation-david-weis.jpg',
                alt: 'The former balcony at Kensington Canyon during its conversion into a closet.',
                width: 1800,
                height: 2400,
                hasSmall: true,
              },
              {
                suggestion: 'The completed closet',
                src: '/images/kensington-canyon/kensington-canyon-closet-after-renovation-david-weis.jpg',
                alt: 'The completed closet at Kensington Canyon, in the space that was once a balcony.',
                width: 2400,
                height: 1800,
                hasSmall: true,
              },
            ],
            labels: ['During conversion', 'After'],
            captions: ['The former balcony during its conversion.', 'The completed closet.'],
            ratio: '4 / 3',
          },
          {
            type: 'story',
            eyebrow: 'Outside, too',
            heading: 'The work didn’t stop at the door.',
            paragraphs: [
              'My involvement was not limited to the interiors.',
              'Outside, I worked in the planting beds, preparing soil and adding plants. It was another part of making Kensington our own.',
              'The outdoor spaces mattered just as much as the rooms. The planting around the house, the decks, the pool, and the canyon setting were all part of the home we loved.',
              'Some spaces needed work. Others needed care and a fresh perspective. Not everything needed to be replaced to feel renewed.',
            ],
            aside: {
              suggestion: 'Preparing the planting beds at Kensington Canyon',
              src: '/images/kensington-canyon/kensington-canyon-landscaping-renovation-david-weis.jpg',
              alt: 'Garden planting in progress beside Kensington Canyon’s brick exterior, with bagged soil, potted plants, and stone borders.',
              width: 1800,
              height: 2400,
              hasSmall: true,
            },
            asideRatio: '3 / 4',
            asideCaption: 'Preparing the planting beds at Kensington Canyon.',
          },
          {
            type: 'pair',
            photos: [
              {
                suggestion: 'The deck and outdoor gathering spaces, before',
                src: '/images/kensington-canyon/kensington-canyon-deck-before-renovation-david-weis.jpg',
                alt: 'The deck and outdoor gathering spaces at Kensington Canyon, before.',
                width: 1024,
                height: 768,
                hasSmall: true,
              },
              {
                suggestion: 'The outdoor spaces overlooking the pool and canyon, after',
                src: '/images/kensington-canyon/kensington-canyon-deck-after-renovation-david-weis.jpg',
                alt: 'The outdoor spaces at Kensington Canyon overlooking the pool and canyon, after.',
                width: 1024,
                height: 683,
                hasSmall: true,
              },
            ],
            labels: ['Before', 'After'],
            captions: [
              'The deck and outdoor gathering spaces, before.',
              'The outdoor spaces overlooking the pool and canyon, after.',
            ],
            ratio: '4 / 3',
          },
          {
            type: 'story',
            heading: 'Then we had to learn how to share it.',
            paragraphs: [
              'After putting so much of ourselves into Kensington Canyon, opening it to vacation guests was another adjustment.',
              'This was not simply a furnished property. It was a home we had lived in, worked on, and made our own.',
              'We created owner’s storage, put away sentimental belongings, and worked out how the house could welcome other families without losing its place in our own lives.',
              'The renovation taught me how personal improving a property can be. Sharing it taught me that ownership sometimes requires a different kind of flexibility.',
            ],
          },
          {
            type: 'story',
            heading: 'Then home became an asset.',
            paragraphs: [
              'Eventually, Kensington Canyon became part of our vacation rental portfolio. That transition taught me something entirely different. It is not easy to hand your home to strangers. But you also realize that while you are somewhere else, another family is making memories in a home that otherwise might have been sitting empty.',
            ],
          },
          {
            type: 'story',
            heading: 'You can protect a home without being afraid to use it.',
            paragraphs: [
              'Investment decisions are not always purely financial. Sometimes a property is both personal and productive. The key is building boundaries and systems that allow it to be both. And if the strategy stops making sense, you reassess — short-term rental, long-term rental, personal residence, sale. Real estate rarely gives you only one option.',
            ],
          },
        ],
      },
    ],
    photos: [
      {
        suggestion: 'Front exterior from the street',
        src: '/images/kensington-canyon/kensington-canyon-spanish-architecture-san-diego-david-weis.jpg',
        alt: 'Kensington Canyon from the street: a brick and half-timbered Tudor with a red door, behind a river-rock wall and dark picket fence',
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
    // Max's photos (2026-09-14 and 2026-09-15). The aerial of the beach leads; the house and Mission Bay pair up; interiors close.
    photos: [
      {
        suggestion: 'Aerial of Mission Beach',
        src: '/images/belmont-beach-house/belmont-beach-house-mission-beach-aerial-san-diego.jpg',
        alt: 'Mission Beach from the air: the long strand, the surf and the boardwalk with the city beyond',
        width: 2048,
        height: 1536,
        hasSmall: true,
      },
      {
        suggestion: 'The house with its rooftop deck',
        src: '/images/belmont-beach-house/belmont-beach-house-exterior-mission-beach-san-diego.jpg',
        alt: 'Belmont Beach House from above: a terracotta three-story home with a rooftop deck among the palms of Mission Beach',
        width: 1239,
        height: 1130,
        hasSmall: true,
      },
      {
        suggestion: 'Aerial of Mission Bay',
        src: '/images/belmont-beach-house/belmont-beach-house-mission-bay-aerial-san-diego.jpg',
        alt: 'Mission Bay from the air, with sailboats moored along the sand and the city behind',
        width: 2048,
        height: 1536,
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
    sections: [],
    chapters: [
      {
        id: 'the-story',
        after: -1,
        blocks: [
          {
            type: 'story',
            eyebrow: 'The history',
            heading: 'A house that has lived many lives.',
            paragraphs: [
              'Mercury Palms has a long connection to Palm Springs history, including an early association with Mercury Records co-founder Irving Green and later members of the Milanovich family.',
              'By the time Mark acquired the property, much of its original personality had been lost.',
              'His renovation brought warmth and character back through stone, wood ceilings, expansive entertaining spaces and private bedroom suites that open directly to the outdoors.',
              'And then the house began another chapter. Ours.',
            ],
          },
          {
            type: 'gallery',
            label: 'The house',
            photos: [
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
                suggestion: 'Pool with the yellow umbrellas',
                src: '/images/mercury-palms/mercury-palms-game-room-bar-entertaining-david-weis.jpg',
                alt: 'The pool at Mercury Palms in daylight with yellow umbrellas and the white villa behind',
                width: 2048,
                height: 1364,
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
            ],
          },
          {
            type: 'story',
            heading: 'This is where our life happened.',
            paragraphs: [
              'Mercury Palms was one of the first homes Mark and I shared.',
              'It was where we spent much of COVID, where friends gathered, where family stayed, and where Palm Springs started to feel less like somewhere we visited and more like home.',
              'Most importantly, it is where we got married.',
            ],
          },
          {
            type: 'photo',
            width: 'bleed',
            photo: { suggestion: 'Our wedding in the backyard (Wedding in the back yard.JPG in David’s Drive)', src: '/images/mercury-palms/mercury-palms-wedding-backyard-ceremony-david-weis.jpg', alt: 'David and Mark’s wedding ceremony in the backyard at Mercury Palms, friends and family gathered under the palms' },
            ratio: '16 / 9',
          },
          {
            type: 'callout',
            text: 'We got married right here.',
            paragraphs: [
              'With approximately 120 of our closest friends and family gathered in the backyard, Mark and I were married at Mercury Palms.',
              'The ceremony happened at home, surrounded by the people who mattered most to us, before everyone continued the celebration at The Cole Hotel.',
              'There are certainly more conventional wedding venues. But getting married in the backyard of the home where so much of our life had already happened felt exactly right.',
            ],
          },
          {
            type: 'story',
            eyebrow: 'A tradition',
            heading: 'And then Memorial Day became a tradition.',
            paragraphs: [
              'Some traditions are planned. Others just happen once, everyone has an incredible time, and suddenly you realize you are doing it again the next year.',
              'That became Memorial Day at Mercury Palms.',
              'What started as a weekend with friends turned into an annual tradition of pool days, dogs, food, drinks, mountain views, new friendships and the same familiar faces coming back year after year.',
              'It became one of those weekends people started asking about before we even had the chance to plan it. And that is probably the best compliment a home can receive.',
            ],
          },
          {
            type: 'gallery',
            label: 'Memorial Day, year by year',
            photos: [
              { suggestion: 'Year one: three friends with drinks in the kitchen', src: '/images/mercury-palms/mercury-palms-memorial-day-year-one-david-weis.jpg', alt: 'David, Mark and a friend raising glasses in the Mercury Palms kitchen on the first Memorial Day weekend', width: 1206, height: 1013, hasSmall: true },
              { suggestion: 'Year two: the group by the pool', src: '/images/mercury-palms/mercury-palms-memorial-day-year-two-david-weis.jpg', alt: 'A dozen friends and three dogs gathered beside the Mercury Palms pool with the mountains behind, Memorial Day weekend year two', width: 1206, height: 917, hasSmall: true },
              { suggestion: 'Year three: the group on the spa wall', src: '/images/mercury-palms/mercury-palms-memorial-day-year-three-david-weis.jpg', alt: 'Friends lined up along the tiled spa wall at Mercury Palms, palms and mountains behind, Memorial Day weekend year three', width: 1206, height: 1568, hasSmall: true, position: 'center 55%' },
            ],
            captions: [
              { title: 'Year one', note: 'The weekend that accidentally started a tradition.' },
              { title: 'Year two', note: 'Same house. More friends. Apparently we were doing this again.' },
              { title: 'Year three', note: 'By year three, it was officially a thing.' },
            ],
          },
          {
            type: 'story',
            eyebrow: 'Today',
            heading: 'A home that keeps evolving.',
            paragraphs: [
              'Like any house that is truly lived in, Mercury Palms has never stayed frozen in time.',
              'It has been renovated, refined, filled with friends, used for celebrations, shared with vacation guests, and adapted as our lives changed.',
              'Today, it is part of Celebrity Vacation Homes. But to us, it will always be more than a vacation rental.',
              'It is where we spent ordinary days and unforgettable ones. Where friendships grew. Where traditions started. Where we got married.',
              'And where a house with a long Palm Springs history became part of our own.',
            ],
          },
          {
            type: 'cta',
            label: 'Explore Mercury Palms at Celebrity Vacation Homes',
            href: agent.vacationRentals.url,
            external: true,
            note: agent.vacationRentals.note,
          },
          {
            type: 'gallery',
            label: 'More of the house',
            photos: [
              {
                suggestion: 'Pool at dusk',
                src: '/images/mercury-palms/mercury-palms-vista-las-palmas-palm-springs-david-weis.jpg',
                alt: 'The Mercury Palms pool lit at dusk, ringed by palms with the mountains behind',
                width: 2048,
                height: 1365,
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
                suggestion: 'The house at dusk from the pool',
                src: '/images/mercury-palms/mercury-palms-palm-springs-private-estate-david-weis.jpg',
                alt: 'Mercury Palms at dusk from across the pool, the house lit and palms silhouetted against the sky',
                width: 2048,
                height: 1365,
                hasSmall: true,
              },
            ],
          },
        ],
      },
    ],
    // 2026-09-22 brief: Mercury Palms rebuilt as a chapter-driven page. The
    // aerial lead photo stays here; the other seven of Max's eight photos
    // (2026-09-14, his SEO filenames) moved into the chapter's galleries.
    photos: [
      {
        suggestion: 'Aerial of the villa, pool and palms',
        src: '/images/mercury-palms/mercury-palms-pool-mountain-views-palm-springs-david-weis.jpg',
        alt: 'Mercury Palms from above: the tile-roofed villa, pool and spa set among tall palms with the mountains beyond',
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

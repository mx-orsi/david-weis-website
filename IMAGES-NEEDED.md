# Images needed from the client

Every photo slot that is still a placeholder prints its suggested subject on
the page, so David can read the site and match his photos. To drop a photo
in, add it to `public/images/` and give the matching `Photo` entry in
`src/data/` a `src`, `alt`, `width` and `height` (see `README.md`).

**General specs:** JPG or PNG, sRGB, largest original available. Landscape
originals preferred for the wide slots; we crop. No text baked into images.
Filenames lowercase and hyphen-separated with the market or project name.

## Done

| Slot | File |
| --- | --- |
| Home hero and About portrait | `david-weis-compass-real-estate-agent-san-diego-palm-springs-big-bear.jpg` (+ `-500`) |
| Market photos (home cards and market page openers) | Unsplash stand-ins, see `PHOTO-CREDITS.md`; David's own can replace them under the same filenames |
| Logos and marks | David's mark, Querencia Palms logo, The Cole logo, EHO and REALTOR® marks, favicons |
| Share image | `david-weis-share-image.jpg` (1200×630) |

## Home

| Section | Slot | Suggested subject |
| --- | --- | --- |
| Ownership changes your perspective | 4:5 portrait | David on site at a project, for example on the Sierra Chalet deck or in the Querencia Palms courtyard |

## About

| Section | Slot | Suggested subject |
| --- | --- | --- |
| After "I have always liked building something" | wide 21:9 | A second, environmental portrait of David, on the coast or at a project |
| The Cole changed everything | 4:5 | done: the Cole sign |
| Community matters | 4:3 | David at a community event (Gay For Good, a Palm Springs neighborhood organization) |

## Market pages (one image break each, 16:9)

| Page | Suggested subject |
| --- | --- |
| San Diego | Kensington streetscape, or the Mission Beach boardwalk |
| Palm Springs | A Palm Springs street with the San Jacinto Mountains behind it |
| Big Bear | Big Bear Lake from the north shore, or the cabin in early snow |

## Querencia Palms grounds chapter (David's Drive folder, 2026-09-13)

Every slot in the chapter already names the file it expects. Rename David's
photo to the name in the right-hand column, drop it into
`public/images/querencia-palms/`, run `npm run images`, and it appears. Alt
text is already written in `projects.ts`. Until a file is there the slot shows
a placeholder printing the expected filename.

| Drive file | Where it goes | Save as `public/images/querencia-palms/…` |
| --- | --- | --- |
| `Unit 102 - Incomplete/102 Koi Pond After Landscapers ripped all the greenery out.jpeg` (or `Koi Pond right after it was full cleaned out.jpeg`) | chapter opener, wide | `querencia-palms-koi-pond-cleared-palm-springs.jpg` |
| `Unit 104/104 Koi Pond After 1.jpg` | lush pond after the opening story | `querencia-palms-koi-pond-restored-palm-springs.jpg` |
| `Unit 105/105 Koi Pond Before 1.jpg` | slider 1, before | `querencia-palms-unit-105-koi-pond-before.jpg` |
| `Unit 105/105 Koi Pond After 1.jpg` | slider 1, after | `querencia-palms-unit-105-koi-pond-after.jpg` |
| `Unit 104/104 Full Back Patio Before 1.jpg` | slider 2, before | `querencia-palms-unit-104-back-patio-before.jpg` |
| `Unit 104/104 Full Back patio After 1.jpg` | slider 2, after | `querencia-palms-unit-104-back-patio-after.jpg` |
| `Unit 106/106 Back Patio before 1.jpeg` or `Before 2.jpeg` | slider 3, before (pick the angle that matches the after) | `querencia-palms-unit-106-back-patio-before.jpg` |
| `Unit 106/106 Back Patio After 1.jpg` or `After 2.jpg` | slider 3, after | `querencia-palms-unit-106-back-patio-after.jpg` |
| `Unit 104/106 Primary Yard Before 1.jpg` (filed under Unit 104) | slider 4, before | `querencia-palms-unit-106-primary-yard-before.jpg` |
| `Unit 104/106 Primary Yard After 1.jpg` | slider 4, after | `querencia-palms-unit-106-primary-yard-after.jpg` |
| `Front Walkway/Front Walkway Before.jpg` | slider 5, before | `querencia-palms-front-walkway-before.jpg` |
| `Front Walkway/Front Walkway After.jpg` | slider 5, after | `querencia-palms-front-walkway-after.jpg` |
| `Pool/Pool Before.jpg` + `Pool After.jpg` | optional slider 6 (commented out in `projects.ts`) | `querencia-palms-pool-before.jpg`, `querencia-palms-pool-after.jpg` |
| `Aquatic plants/IMG_….jpeg` — pick seven | detail gallery | `querencia-palms-pink-water-lily.jpg`, `querencia-palms-koi-clear-water.jpg`, `querencia-palms-orange-canna.jpg`, `querencia-palms-white-water-lily.jpg`, `querencia-palms-dragonfly.jpg`, `querencia-palms-plants-between-rocks.jpg`, `querencia-palms-yellow-aquatic-flower.jpg` |
| `Front Walkway/David Weis Front Walkway 2.jpg` (or 3) | portrait beside "The garden club came with me" | `david-weis-querencia-palms-front-walkway.jpg` |
| `Unit 105/105 Waterfall.jpg` (or `105 Waterfall 2.jpg`) | full-bleed waterfall | `querencia-palms-koi-pond-waterfall-palm-springs.jpg` |
| `Mural/Mural After.jpg` | closing image, no text over it | `querencia-palms-mural-landscaping-palm-springs.jpg` |
| `Pool/Pool After.jpg` | page lead photo (top of the page) | `querencia-palms-pool-palm-springs.jpg` |
| `Unit 105/105 Primary Yard After 1.jpg` | two-up break after section 2 | `querencia-palms-unit-105-primary-yard.jpg` |
| `Unit 106/106 Front Patio After.jpg` | two-up break after section 2 | `querencia-palms-unit-106-front-patio.jpg` |

Not used yet, worth keeping: `Mural/David in front of Mural.jpg` would suit the
home page "Ownership" portrait slot or the About environmental portrait;
`Front Walkway/David Weis Front Walkway 1.jpg` and `3.jpg` are spares;
`Unit 102/102 Front Patio Before/After` and `Unit 106/106 Front Patio Before`
are extra pairs if a sixth slider is wanted instead of the pool.

Gallery photos are shown at up to about 700px wide; the sliders, waterfall and
mural at full page width, so send those at full resolution (the brief asks
that individual plants stay visible).

## Vista Voltaire — done (2026-09-14)

All eight photos are in `public/images/vista-voltaire/` under Max's SEO
names and wired into `projects.ts`. Lead: the straight-on facade; two-up:
living room and entry; wide break: kitchen and dining; gallery: kitchen
range, kitchen bar, front corner exterior, street view.

## The Cole — done (2026-09-14)

Six photos in `public/images/the-cole/` under Max's SEO names. Lead: pool at
dusk; two-up: guest suite and the Cole sign; wide break: the restaurant;
gallery: fire pit and the branded espresso cup. The sign also fills the
About page's "The Cole changed everything" slot. The 6720px restaurant
original is kept in `assets-source/`; the site copy is 2400px.

## Experience project pages

The first photo leads the page (wide 21:9) and the project's cards. The next
two form a two-up break, the fourth a wide break, and any remaining photos a
closing gallery. Order in `projects.ts` sets the order on the page.

| Project | Photos, in order |
| --- | --- |
| Querencia Palms | Pool After · 105 Primary Yard After 1 · 106 Front Patio After (all mapped above) · a staged residence interior · an open house event on the grounds |
| The Cole | All six mapped above |
| Vista Voltaire | All eight mapped above |
| Kensington Canyon | Front exterior among the Spanish and Tudor-influenced homes · restored original hardwood floors · the rolling tool-chest kitchen island · living room · the canyon behind the house |
| Belmont Beach House | Ocean view from the house · exterior with the beach beyond · living area · deck or patio at sunset |
| Sierra Chalet | Exterior after the rebuild, both decks complete · before: the rear deck · mid-renovation, walls open · upper deck with the lake view · screened lower deck with the spa · the repositioned entry after a heavy snowfall |
| Mercury Palms | Exterior with the stone and wood ceilings visible · entertaining space opening to the outdoors · a bedroom suite connecting to the outdoors · the 2025 kitchen renovation · the house set for a gathering |

Suggested filenames: `querencia-palms-pool-palm-springs.jpg`,
`the-cole-hotel-pool-palm-springs.jpg`, `sierra-chalet-big-bear-exterior-after.jpg`, etc.

## Properties

Each listing card needs one primary 4:3 photo; sold cards the same. Add them
with the listing details in `src/data/listings.ts`.

## Brand assets (not images, but useful)

- A vector version of David's mark, if one exists.
- Confirmation of the blue (`#1d4ed8` and the deep `#0b2a6b` bands) as the brand blue.

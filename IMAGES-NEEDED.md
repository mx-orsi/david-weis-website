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
| Ownership changes your perspective | 4:5 portrait | done: David on the Querencia Palms walkway |

## About

| Section | Slot | Suggested subject |
| --- | --- | --- |
| After "I have always liked building something" | wide 21:9 | done: David at the Querencia Palms mural |
| The Cole changed everything | 4:5 | done: the Cole sign |
| Community matters | 4:3 | David at a community event (Gay For Good, a Palm Springs neighborhood organization) |

## Market pages (one image break each, 16:9)

| Page | Suggested subject |
| --- | --- |
| San Diego | Kensington streetscape, or the Mission Beach boardwalk |
| Palm Springs | A Palm Springs street with the San Jacinto Mountains behind it |
| Big Bear | Big Bear Lake from the north shore, or the cabin in early snow |

## Querencia Palms — done (2026-09-14)

All 48 of David's landscaping photos are in `public/images/querencia-palms/`
under Max's SEO names, normalized to 2400px with rotation baked in. The
grounds chapter, the page lead, the two-up break, the home "Ownership"
portrait (David on the walkway) and the About environmental portrait (David
at the mural) are all wired. Still placeholders on the Querencia page: a
staged residence interior and an open-house photo. Unused but good: the
sunset aerial (`mural-before-renovation`), the 105 primary yard pair, the
Unit 102 and 106 front patio pairs, the pool pair (optional sixth slider).

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
| Querencia Palms | done except: a staged residence interior · an open house event on the grounds |
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

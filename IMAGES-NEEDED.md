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
| The Cole changed everything | 4:5 | The Cole Hotel pool and courtyard |
| Community matters | 4:3 | David at a community event (Gay For Good, a Palm Springs neighborhood organization) |

## Market pages (one image break each, 16:9)

| Page | Suggested subject |
| --- | --- |
| San Diego | Kensington streetscape, or the Mission Beach boardwalk |
| Palm Springs | A Palm Springs street with the San Jacinto Mountains behind it |
| Big Bear | Big Bear Lake from the north shore, or the cabin in early snow |

## Experience project pages

The first photo leads the page (wide 21:9) and the project's cards. The next
two form a two-up break, the fourth a wide break, and any remaining photos a
closing gallery. Order in `projects.ts` sets the order on the page.

| Project | Photos, in order |
| --- | --- |
| Querencia Palms | Pool, spa and courtyard · koi pond after the aquatic planting was restored · a staged residence interior · mountain view from a private patio · an open house event on the grounds |
| The Cole | Pool at dusk · exterior with the original motor-lodge roofline · a guest room · the bar and restaurant · branded welcome materials from the reopening |
| Vista Voltaire | Front exterior of the restored 1924 farmhouse · living room after the restoration · kitchen · back yard or porch · a guest-ready bedroom |
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

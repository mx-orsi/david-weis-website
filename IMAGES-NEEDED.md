# Images needed from the client

Every photo slot that is still a placeholder prints its suggested subject on
the page, so David can read the site and match his photos. To drop a photo
in, add it to `public/images/` and give the matching `Photo` entry in
`src/data/` a `src`, `alt`, `width` and `height` (see `README.md`).

**General specs:** JPG or PNG, sRGB, largest original available. Landscape
originals preferred for the wide slots; we crop. No text baked into images.
Filenames lowercase and hyphen-separated with the market or project name.

## Status report — 2026-09-14 (evening)

### Still needed

| Page | Slot | What would fit |
| --- | --- | --- |
| Sierra Chalet hot tub sequence | hands-on chapter | David's phone photos, in `public/images/sierra-chalet/`: `IMG_7676` → `sierra-chalet-hot-tub-plywood-ramp-big-bear.jpg` · `IMG_7677` → `sierra-chalet-hot-tub-halfway-up-big-bear.jpg` · `IMG_7682` → `sierra-chalet-hot-tub-on-the-deck-big-bear.jpg`. Rough is fine; do not retouch. |
| Sierra Chalet (all six) | lead, two-up, wide break, gallery | Exterior after the rebuild with both decks · the rear deck before · mid-renovation with walls open · the upper deck and lake view · the screened lower deck with the spa · the repositioned entry after a snowfall. The lead also fills the Sierra Chalet card on Experience and Big Bear. |
| About | "Community matters" 4:3 | David at a community event (Gay For Good, a Palm Springs neighborhood group) |
| San Diego market page | 16:9 image break | Kensington streetscape or the Mission Beach boardwalk |
| Palm Springs market page | 16:9 image break | A Palm Springs street with the San Jacinto Mountains behind it |
| Big Bear market page | 16:9 image break | Big Bear Lake from the north shore, or the cabin in early snow |
| Properties | 3 listing cards + 3 sold cards | Waits on David's Properties decision and listing details |
| Home + market openers | 3 market cards / page headers | Currently Unsplash stand-ins (La Jolla cove, mid-century Palm Springs home, Big Bear cabin). Fine to launch with; David's own would be better. |

### Better versions wanted

- **The Cole:** the pool-at-dusk lead and the guest suite are enlarged low-res files and look soft. Full-resolution originals under the same filenames would swap in.
- **Kensington Canyon:** all files are 1024px wide, so the lead exterior is upscaled. Larger originals, same filenames.
- **Belmont Beach House:** no exterior, deck or ocean photo in the set; the living room leads. One ocean-side shot would fix the page.

### Uploaded but not used (28 photos)

Nothing wrong with them; the pages simply have fewer slots than photos. They
stay in the folders and can be swapped in by editing `projects.ts`.

- **Querencia Palms property set (4):** `david-weis-homes-for-sale-palm-springs-realtor-83` (duplicate of the About mural portrait), `condos-palm-springs` (black-shirt mural portrait), `south-palm-springs-condo-community` and `tahquitz-river-estates-condos` (David at the big mural wall).
- **Querencia landscaping (20):** the second Unit 102 and 106 koi-pond shots, the 104 and 105 back-patio pairs, the 102 and 106 front-patio pairs, the 105 primary-yard pair, the second waterfall, the night koi shot, the third David walkway portrait, the sunset aerial before landscaping, and the cannas by the stairs.
- **Kensington Canyon (4):** the bathroom, the second living-room angle, the duplicate kitchen shot, the pool from the terrace.

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

All 48 of David's landscaping photos are in `public/images/querencia-landscaping/`
under Max's SEO names, normalized to 2400px with rotation baked in. The
grounds chapter, the page lead, the two-up break, the home "Ownership"
portrait (David on the walkway) and the About environmental portrait (David
at the mural) are all wired. Still placeholders on the Querencia page: a
staged residence interior and an open-house photo. Unused but good: the
sunset aerial (`mural-before-renovation`), the 105 primary yard pair, the
Unit 102 and 106 front patio pairs, the pool pair (optional sixth slider).

## Mercury Palms, Kensington Canyon, Belmont Beach House — done (2026-09-14)

Max's photos are in `public/images/<project>/` under his SEO names and wired
in `projects.ts`. Two gaps worth a better file from David:

- **Kensington Canyon:** all eleven files are 1024px wide, so the lead is
  upscaled and soft. Larger originals under the same filenames would fix it.
- **Belmont Beach House:** no exterior, deck or ocean photo was in the set,
  so the living room leads. An ocean-side shot should replace it.

The property photos for Querencia Palms (dusk pool as the lead, four in the
closing gallery) are in `public/images/querencia-palms/`; the landscaping set
is in `public/images/querencia-landscaping/`. A second portrait of David from
that set now opens the About page so Home and About no longer share a photo.

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
| Querencia Palms | done |
| The Cole | All six mapped above |
| Vista Voltaire | All eight mapped above |
| Kensington Canyon | done (1024px files, see above) |
| Belmont Beach House | done, except an exterior or ocean shot |
| Sierra Chalet | Exterior after the rebuild, both decks complete · before: the rear deck · mid-renovation, walls open · upper deck with the lake view · screened lower deck with the spa · the repositioned entry after a heavy snowfall |
| Mercury Palms | done |

Suggested filenames: `querencia-palms-pool-palm-springs.jpg`,
`the-cole-hotel-pool-palm-springs.jpg`, `sierra-chalet-big-bear-exterior-after.jpg`, etc.

## Properties

Each listing card needs one primary 4:3 photo; sold cards the same. Add them
with the listing details in `src/data/listings.ts`.

## Brand assets (not images, but useful)

- A vector version of David's mark, if one exists.
- Confirmation of the blue (`#1d4ed8` and the deep `#0b2a6b` bands) as the brand blue.

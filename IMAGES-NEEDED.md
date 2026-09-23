# Images needed from the client

Every photo slot that is still a placeholder prints its suggested subject on
the page, so David can read the site and match his photos. To drop a photo
in, add it to `public/images/` and give the matching `Photo` entry in
`src/data/` a `src`, `alt`, `width` and `height` (see `README.md`).

**General specs:** JPG or PNG, sRGB, largest original available. Landscape
originals preferred for the wide slots; we crop. No text baked into images.
Filenames lowercase and hyphen-separated with the market or project name.

## Incoming from David (2026-09-15 email) — slots are prepped

Every slot below already exists on the site as a labeled placeholder that
prints its expected filename. Drop the file in under that name and it
appears; if the SEO name differs, say so and the data gets pointed at it.

| Set | Folder | Expected files |
| --- | --- | --- |
| Community (About page) | `public/images/community/` | **Done 2026-09-15.** 24 photos in; the Gay For Good booth sits beside the copy and nine tiles fill the gallery. The other 14 stay in the folder as spares. |
| The Cole | `public/images/the-cole/` | **Done 2026-09-15.** Two before/after pairs after "Build it. Sell it. Move on." (courtyard before ↔ pool after; street before ↔ courtyard mid-construction). The sunset pool now leads; the pool corner with the sign and the bar join the gallery. Unused: the original dusk pool lead and the misted courtyard. Still true: every pool shot is an enlarged web export and soft at full width; the photographer's originals would fix it. |
| Belmont Beach House | `public/images/belmont-beach-house/` | **Done 2026-09-15.** The Mission Beach aerial leads; the house with its rooftop deck and the Mission Bay aerial pair up; four interiors close. Unused: the entry stair, the second bedroom and the plain kitchen shot. |
| Kensington Canyon | `public/images/kensington-canyon/` | The 2026-09-15 "web" upload was the same 1024px size as before; three new angles were added to the gallery (kitchen under the skylights, stained-glass bathroom, bedroom with fireplace) plus the stone-tub bath. **Still wanted:** the full-size MLS originals from David's Drive folder, saved under the existing filenames, to sharpen the lead. |
| Market photos | `public/images/markets/` | **Done 2026-09-15** with Max's picks from the Unsplash shortlist: downtown San Diego at sunset, wind turbines under the snow-capped San Jacintos, Big Bear Lake from above in winter. They lead the market pages and the home cards; the earlier Unsplash shots moved to the San Diego and Palm Springs mid-page breaks. David's own photos can replace any of them under the same filenames. |

## David's 2026-09-22 batch — what is placed and what is still needed from Max

Most of the photos David names were already in the 2026-09-18 Drive download, so they are placed:
The Cole marketing chapter (Jonathan + Jaymes on the bikes, the Quarantine Coffee mugs, Jaymes at
the sign, both Kelly Osbourne images, the Walk of the Stars group and star), Mercury Palms Memorial
Day years one to three (year two is cropped from the Instagram screenshot; year one and three are the
originals), the Range Rover with flooring and the Lowe's rental truck for the work-truck section.

**Still needed: re-download David's Drive (his newer uploads are not in the 2026-09-18 copy) and save these under the names the placeholders print.**

| Page | David's file | Save as |
| --- | --- | --- |
| About, work trucks | Life Before Mark.JPG (Colorado + motorcycle) | `public/images/about/david-weis-chevy-colorado-motorcycle.jpg` |
| About, work trucks | Sierra EV.jpeg | `public/images/about/david-weis-gmc-sierra-ev.jpg` |
| About, Garden Club | April refreshment table | `public/images/about/david-weis-garden-club-april-refreshment-table-arrangement.jpg` |
| Mercury Palms | Wedding in the back yard.JPG (the must-have) | `public/images/mercury-palms/mercury-palms-wedding-backyard-ceremony-david-weis.jpg` |
| Mercury Palms | Memorial Day.JPG (optional wide shot) and the "new house photos" | send them over; slots will be added once seen |
| Querencia Palms | purple flower with the bridge | `public/images/querencia-landscaping/querencia-palms-purple-flower-bridge-koi-pond-david-weis.jpg` |
| Querencia Palms | the view from the upstairs unit (interiors folder) | `public/images/querencia-interiors/querencia-palms-202-upstairs-view-mountains-david-weis.jpg` |
| Vista Voltaire | the "missing photos" he uploaded (fence stages 2–4, pass-through garage) | `vista-voltaire-fence-2-solid.jpg`, `vista-voltaire-fence-3-open-picket.jpg`, `vista-voltaire-fence-4-first-planting.jpg`, `vista-voltaire-pass-through-garage.jpg` under `public/images/vista-voltaire/` |
| Sierra Chalet | the bears (exterior folder), the new before/after photos (exterior + interior), the new front hero | send them over; the lead swap and pairs get wired once seen |
| Mercury Palms / The Cole | "Memorial Day.JPG", "The Cole Hotel - Marketing Technique …(1)" duplicates | not needed; the originals are in |

Not used on purpose: the Tesla-full-of-plants video (Work Truck.MP4) and photo; David's final
work-truck layout does not list them and the site has no video block. The Cole marketing screenshots
other than Kelly's post (the Instagram grabs) are not used; the originals are.

## About page notes — 2026-09-21

David's About notes placed eight more photos from the Drive download under `public/images/about/`:
the white tile and the David-and-Mark photo at The Marquee at Twin Palms (the latter cropped from an
Instagram screenshot, 1206px), the four docents in front of the pool in Vista Las Palmas, the 2022
(rendered from the PDF), 2024 and 2025 holiday cards, and two more gift-bag photos.

**Still wanted:**

- **Garden Club, April refreshment table** (The Posy Book program): David says it is in the Drive,
  but it is not in the 2026-09-18 download. Save it as
  `public/images/about/david-weis-garden-club-april-refreshment-table-arrangement.jpg` and it fills
  the placeholder beside the La Jolla Light photo.
- **The Marquee at Twin Palms, David and Mark:** the phone original, to replace the screenshot crop
  (`david-weis-mark-h3k-marquee-twin-palms-modernism-week-2025.jpg`).

## Drive download check — 2026-09-18

Max downloaded David's entire Drive to `assets-source/drive-2026-09-18/` (ignored by git)
and it was compared file by file against everything already in the project. Genuinely new:

- **Kensington Canyon › Web › Web Photos:** 65 professional listing photos, "Daytime 1–65".
  Same 1024px web size as the set already on the page, so no resolution gain; the aerials
  (1–6), the primary suite with its stone tub (47–52) and the pool angles (36–43) are new
  views. Not placed, since David's Kensington brief moves photos into the story and drops
  the bottom gallery. The full-size MLS originals are still what would sharpen the lead.
- **Sold Listings › 3700 Third Ave:** two small photos (800px and 720px) of the sold
  triplex. The exterior now fills the "Sold" tile on About.
- **Listings:** one photo each of 2487 S Gene Autry Trail Unit A (4000px) and Querencia
  Palms Unit 104 (2048px). These belong to the Properties page once the IDX decision is made.
- A "Real Estate Mixers" video (not used).

Still not in the Drive: Vista Voltaire fence stages 2–4 and the pass-through garage, the
GMC Sierra EV, The Cole photographer originals, Kensington MLS originals.

## Status report — 2026-09-14 (evening)

### Still needed

| Page | Slot | What would fit |
| --- | --- | --- |
| Sierra Chalet | lead + interiors, once the listing shoot arrives | Max's 2026-09-15 upload (renovation and action shots) fills every slot for now: finished exterior leads, walls-open + framing pair, the snow exterior wide, and a gallery of the red cabin before, David mixing concrete, the dogs at the door and the carved bear. The hot tub chapter has all three phone photos. When the professional listing photos land, swap the lead and add the upper deck with the lake view and the screened lower deck with the spa. |
| Properties | 3 listing cards + 3 sold cards | Waits on David's Properties decision and listing details |

### Better versions wanted

- **The Cole:** the pool-at-dusk lead and the guest suite are enlarged low-res files and look soft. Full-resolution originals under the same filenames would swap in.
- **Kensington Canyon:** all files are 1024px wide, so the lead exterior is upscaled. Larger originals, same filenames.

### Uploaded but not used (28 photos)

Nothing wrong with them; the pages simply have fewer slots than photos. They
stay in the folders and can be swapped in by editing `projects.ts`.

- **Querencia Palms property set (4):** `david-weis-homes-for-sale-palm-springs-realtor-83` (duplicate of the About mural portrait), `condos-palm-springs` (black-shirt mural portrait), `south-palm-springs-condo-community` and `tahquitz-river-estates-condos` (David at the big mural wall).
- **Querencia landscaping (20):** the second Unit 102 and 106 koi-pond shots, the 104 and 105 back-patio pairs, the 102 and 106 front-patio pairs, the 105 primary-yard pair, the second waterfall, the night koi shot, the third David walkway portrait, the sunset aerial before landscaping, and the cannas by the stairs.
- **Sierra Chalet (5):** two more red-cabin before shots, and the old listing's entry, bedroom and kitchen photos (1170px, pre-renovation) — could become before/after pairs once the new interiors arrive.
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

## About page

Rebuilt 2026-09-17 from David's brief as one chapter-driven page (see README).
The lantana mural portrait, the Cole sign, and five community-folder photos
(Front Runners San Diego and Palm Springs, the Vista Las Palmas fall social,
the ONE-PS award and the trophy) are reused from existing folders. **Done
2026-09-17:** every other slot below is filled from David's community photos,
placed under `public/images/about/` (or reused in place from
`public/images/community/` for the toy drive) under Max's SEO names,
normalized to 2400px with rotation baked in.

**Still missing** (no usable photo — only screenshots, video stills, or not
purchased yet):
- The sold-property image for the "From new agent to Broker Associate"
  gallery — only social-post screenshots exist; the slot was dropped from
  that gallery (now 3 photos) until a real photo arrives.
- Fourth of July / Big Bear friends — only screenshots exist; dropped from
  the Big Bear gallery (now hiking overlook, Turkey Trot, snowboarding).
- Gay For Good hands-on service (Habitat-style volunteering) and the
  Querencia Palms fundraiser photo — only screenshots exist; the Gay For
  Good gallery now runs the toy drive, Hillcrest Honors, and the Equality
  California gala instead.
- The Garden Club refreshment table — only video exists; dropped from the
  Garden Club gallery (now the hat, the rosemary syrup, and La Jolla Light).
- The GMC Sierra EV — not photographed yet; stays a placeholder in "The work
  trucks" gallery.

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

## Kensington Canyon renovation (2026-09-17 rebuild) — done 2026-09-17

The page is one chapter-driven story (`the-renovation`, `after: -1`) built
from David's brief: the reclaimed stained-glass windows, the kitchen rework,
the hardwood, the bathroom, the closet conversion and the grounds. Every slot
below is filled from David's photos, already in `public/images/kensington-canyon/`
under Max's SEO names. Nothing is still missing for this chapter.

| Slot | Actual filename | Where it lands |
| --- | --- | --- |
| `kensington-canyon-renovation-san-diego-david-weis.jpg` | Kensington Canyon Renovation Photo.jpeg | Aside portrait, "Make it work better. Keep what makes it home." |
| `kensington-canyon-stained-glass-dining-room-san-diego-david-weis.jpg` | Stained Glass Kensington Canyon Dining Room.jpg | Photo block after "Three windows. A second life." |
| `kensington-canyon-stained-glass-bathroom-window-david-weis.jpg` | Stained Glass Bathroom Kensington Canyon.JPG | Pair with the hallway window |
| `kensington-canyon-stained-glass-hallway-window-david-weis.jpg` | Stained Glass Hallway Kensington Canyon.jpg | Pair with the bathroom window |
| `kensington-canyon-kitchen-before-renovation-san-diego-david-weis.jpg` | Kensington Canyon Kitchen All - Before.JPG | Before/after kitchen pair |
| `kensington-canyon-kitchen-wet-bar-entertaining-david-weis.jpg` | Kensington Canyon Kitchen Wet Bar After.jpg | Before/after kitchen pair |
| `kensington-canyon-dining-room-before-renovation-david-weis.jpg` | Kensington Canyon Dining Room Before.jpeg | During/after hardwood pair |
| `kensington-canyon-restored-hardwood-floors-san-diego-david-weis.jpg` | Kensington Canyon resurfaced hardwood floors.jpeg | During/after hardwood pair |
| `kensington-canyon-bathroom-before-renovation-san-diego-david-weis.jpg` | Kensington Canyon Bathroom Before.JPG | Before/after bathroom pair |
| `kensington-canyon-closet-before-renovation-david-weis.jpg` | Kensington Canyon Closet Before.jpeg | Before/after closet pair |
| `kensington-canyon-closet-after-renovation-david-weis.jpg` | Kensington Canyon Closet After.jpeg | Before/after closet pair |
| `kensington-canyon-landscaping-renovation-david-weis.jpg` | Kensington Landscaping Action Shot.jpeg | Aside photo, "The work didn't stop at the door." (portrait; aside ratio set to 3:4) |
| `kensington-canyon-deck-before-renovation-david-weis.jpg` | Kensington Canyon Deck Before.JPG | Before/after deck pair |
| `kensington-canyon-deck-after-renovation-david-weis.jpg` | Kensington Canyon Deck After.jpg | Before/after deck pair |

Reused from the existing set: the lead exterior
(`kensington-canyon-spanish-architecture-san-diego-david-weis.jpg`), the
living room (`kensington-canyon-estate-indoor-outdoor-living-david-weis.jpg`),
the finished bathroom (`kensington-canyon-stained-glass-bathroom-david-weis.jpg`,
now doubling as the "after" of the bathroom pair) and the kitchen
(`kensington-canyon-estate-canyon-views-san-diego-david-weis.jpg`, cropped to
the island for the aside next to "The right island wasn't in a kitchen
showroom."). **Spares** (uploaded but not placed, since the rebuilt page has
no closing gallery): `kensington-canyon-estate-near-balboa-park-david-weis.jpg`
(pool and spa), `kensington-canyon-private-hillside-estate-david-weis.jpg`
(arched front door), `kensington-canyon-estate-san-diego-david-weis.jpg`
(kitchen window with lemons), `kensington-canyon-mid-city-san-diego-real-estate-david-weis.jpg`
(bedroom with French doors), `kensington-canyon-kitchen-skylights-san-diego-david-weis.jpg`,
`kensington-canyon-primary-bedroom-fireplace-david-weis.jpg`,
`kensington-canyon-san-diego-home-david-weis.jpg` (pool from terrace),
`kensington-canyon-estate-adams-avenue-san-diego-david-weis.jpg` (stone tub
bath), `kensington-canyon-outdoor-living-terrace-david-weis.jpg` and
`kensington-canyon-rim-property-san-diego-david-weis.jpg` (duplicate kitchen).

## Vista Voltaire — done (2026-09-14)

All eight photos are in `public/images/vista-voltaire/` under Max's SEO
names and wired into `projects.ts`. Lead: the straight-on facade; two-up:
living room and entry; wide break: kitchen and dining; gallery: kitchen
range, kitchen bar, front corner exterior, street view.

**Superseded by the 2026-09-17 rebuild below:** the two-up, wide break and
gallery slots described above no longer exist on the page (see "Vista
Voltaire renovation"); only the lead facade photo remains in `photos`.

## Vista Voltaire renovation (2026-09-17 rebuild) — mostly done 2026-09-17

The page is one chapter-driven story (`the-story`, `after: -1`): the
purchase, the renovation room by room, the fence's five stages, the
landscaping, the pass-through garage and the pivot to Celebrity Vacation
Homes. All rooms and fence stages 1 and 5 are filled from David's photos,
already in `public/images/vista-voltaire/` under Max's SEO names.

| Slot | Actual filename | Where it lands |
| --- | --- | --- |
| `vista-voltaire-front-exterior-before-renovation-david-weis.jpg` | Voltaire Front Before(1).JPEG | Aside photo, "Two cities. Two projects. A lot happening at once." |
| `david-weis-hands-on-renovation-vista-voltaire.jpg` | Voltaire Action shot(1).JPG | Aside photo, "The potential was there. The work was substantial." |
| `vista-voltaire-kitchen-before-renovation-david-weis.jpg` / `vista-voltaire-kitchen-after-renovation-david-weis.jpg` | Voltaire Kitchen Before(1).JPEG | Kitchen before/after pair |
| `vista-voltaire-dining-room-before-renovation-david-weis.jpg` / `vista-voltaire-dining-room-after-renovation-david-weis.jpg` | Voltaire Dining Room Before(1).JPEG | Dining before/after pair |
| `vista-voltaire-living-room-before-renovation-david-weis.jpg` / `vista-voltaire-living-room-after-renovation-david-weis.jpg` | Voltaire Living Room Before(1).JPG | Living room during/after pair |
| `vista-voltaire-hallway-before-renovation-david-weis.jpg` / `vista-voltaire-hallway-after-renovation-david-weis.jpg` | Voltaire Hallway Before/After(1) | Upstairs landing before/after pair |
| `vista-voltaire-kids-room-before-renovation-david-weis.jpg` / `vista-voltaire-kids-room-after-renovation-david-weis.jpg` | Voltaire Kids Room Before/After(1) | Window-nook before/after pair |
| `vista-voltaire-fence-original-before-renovation-david-weis.jpg` | Voltaire Fence Original(1).JPG | "Five stages of a fence" sequence, stage 1 |
| `vista-voltaire-fence-hedges-after-renovation-david-weis.jpg` | (repoints the existing `vista-voltaire-coastal-exterior-san-diego.jpg`) | Fence sequence, stage 5 |

**Still missing:** fence stages 2 (the temporary solid fence), 3 (the open
picket rework) and 4 (the first, boxwood planting), and the pass-through
garage aside photo — all still print their placeholder in the "Five stages
of a fence" sequence and "A garage that opens both ways."

Reused from the existing set: the lead exterior
(`vista-voltaire-exterior-above-ocean-beach-san-diego.jpg`). **Spares:**
`ocean-beach-dining-room-with-water-views.jpg` (kitchen range detail),
`vista-voltaire-drive-through-garage-san-diego.jpg` (street view with the
garage door), `ocean-beach-vacation-home-with-views-from-every-room.jpg`
(entry and staircase), `david-weis-hands-on-renovation-vista-voltaire-dining-room.jpg`,
`vista-voltaire-front-exterior-after-renovation-david-weis.jpg` and the
`-02` kitchen before/after duplicates.

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
| Vista Voltaire | Lead, plus the renovation chapter — mapped under "Vista Voltaire renovation" (fence stages 2–4 and the pass-through garage still placeholders) |
| Kensington Canyon | Lead, plus the renovation chapter — done, mapped under "Kensington Canyon renovation" |
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

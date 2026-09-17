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
the ONE-PS award and the trophy) are reused from existing folders — done
already. Everything below is a new slot under `public/images/about/`,
expected filename first, then David's description and where it lands.

| Expected filename | David's description | Section |
| --- | --- | --- |
| `david-weis-mark-the-cole-before.jpg` | The Cole Hotel - Mark and I before.jpg | The Cole gallery — "Before" |
| `david-weis-mark-the-cole-when-sold.jpg` | The Cole Hotel - Mark and I when sold.jpeg | The Cole gallery — "The day it sold" |
| `david-weis-mark-wedding-the-cole.jpg` | Wedding at The Cole | The Cole gallery — "Our wedding" |
| `david-weis-first-listing.jpg` | First Listing.jpg | "From new agent to Broker Associate" gallery — "First listing" |
| `david-weis-legislative-day-sacramento-2023.jpg` | Legislative Day 2023.jpg | "From new agent to Broker Associate" gallery — "Legislative Day, Sacramento" |
| `david-weis-broker-caravan.jpg` | Caravan/presentation still | "From new agent to Broker Associate" gallery — "Broker caravan" |
| `david-weis-sold-property.jpg` | One sold-property image | "From new agent to Broker Associate" gallery — "Sold" |
| `david-weis-mom-legislative-day-sacramento-2023.jpg` | Mom and I at Legislative Day Sacramento - 2023(1).JPG | "Sometimes you say yes before you feel ready" aside |
| `david-weis-boating-san-diego.jpg` | Boating in San Diego | San Diego gallery |
| `david-weis-beach-sunset-dog.jpg` | Beach sunset with the dog | San Diego gallery |
| `david-weis-palm-springs-bike-ride.jpg` | A Palm Springs bike ride | Palm Springs gallery |
| `david-weis-big-bear-hiking-overlook.jpg` | Hiking at an overlook, Big Bear | Big Bear gallery |
| `david-weis-big-bear-turkey-trot.jpg` | The Big Bear Turkey Trot | Big Bear gallery — "Turkey Trot" |
| `david-weis-big-bear-fourth-of-july-friends.jpg` | Fourth of July with friends, Big Bear | Big Bear gallery |
| `david-weis-gay-for-good-habitat-service.jpg` | Gay For Good Habitat for Humanity service day | Gay For Good gallery — "Service day" |
| `david-weis-gay-for-good-hillcrest-honors.jpg` | Gay For Good Hillcrest Honors | Gay For Good gallery — "Hillcrest Honors" |
| `david-weis-gay-for-good-fundraiser-querencia-palms.jpg` | The Gay For Good fundraiser at Querencia Palms | Gay For Good gallery — "The fundraiser at Querencia Palms" |
| `david-weis-garden-club-hat-competition.jpg` | Garden Club May Luncheon Hat Competition 6.jpeg | Garden Club gallery — "The hat" |
| `david-weis-garden-club-rosemary-syrup.jpg` | Rosemary simple syrup | Garden Club gallery — "Rosemary simple syrup" |
| `david-weis-garden-club-la-jolla-light.jpg` | La Jolla Light coverage of the Garden Club | Garden Club gallery — "La Jolla Light" |
| `david-weis-garden-club-refreshment-table.jpg` | Refreshment table | Garden Club gallery — "Refreshment table" |
| `david-weis-vista-las-palmas-neighborhood-event.jpg` | A Vista Las Palmas neighborhood event | Vista Las Palmas gallery — "Neighborhood event" |
| `david-weis-pride-sports-kickball.jpg` | Pride Sports kickball | "Front Runners + the rest" strip — "Pride Sports kickball" |
| `david-weis-red-dress-party-volunteer.jpg` | Volunteering for the Red Dress Party promo video | "Front Runners + the rest" strip — "Red Dress Party" |
| `david-weis-out-professionals.jpg` | An OUT Professionals event | "Front Runners + the rest" strip — "OUT Professionals" |
| `david-weis-mark-h3k-property.jpg` | With Mark, at an H3K project | Design + architecture gallery |
| `h3k-design-detail-palm-springs.jpg` | An H3K design detail | Design + architecture gallery — "Detail" |
| `h3k-pool-courtyard-palm-springs.jpg` | An H3K pool + courtyard | Design + architecture gallery — "Pool + courtyard" |
| `david-weis-modernism-week-kathy.jpg` | Modernism Week, with Kathy | Design + architecture gallery — "Modernism Week" |
| `holiday-gift-bag-production.jpg` | Holiday gift bag production | Holiday fundraiser gallery |
| `holiday-toy-collection-marines.jpg` | Toy collection for the Marines' Toys for Tots | Holiday fundraiser gallery |
| `holiday-toys-range-rover.jpg` | Toys loaded into the Range Rover | Holiday fundraiser gallery |
| `holiday-illustrated-card.jpg` | Illustrated holiday card | Holiday fundraiser gallery |
| `holiday-smores-kit-querencia-palms.jpg` | The Querencia Palms s'mores kit | Holiday fundraiser gallery |
| `holiday-party-portrait.jpg` | Holiday party portrait | Holiday fundraiser gallery |
| `holiday-cookie-competition.jpg` | Holiday cookie decorating competition | "Cookie competition" gallery (single wide inset) |
| `david-weis-horseback-riding.jpg` | Horseback riding | "Outside the office" gallery |
| `david-weis-coachella.jpg` | Coachella | "Outside the office" gallery |
| `david-weis-big-bear-lake-friends.jpg` | Friends at Big Bear Lake | "Outside the office" gallery |
| `david-weis-garden-club-la-jolla.jpg` | Village Garden Club of La Jolla | "Outside the office" gallery |
| `david-weis-chevy-colorado.jpg` | The Chevy Colorado | "The work trucks" gallery — "The Colorado" |
| `david-weis-range-rover-work-truck.jpg` | The Range Rover "work truck" | "The work trucks" gallery — "The work truck" |
| `david-weis-gmc-sierra-ev.jpg` | The GMC Sierra EV | "The work trucks" gallery — "The Sierra EV" |
| `david-weis-the-cole-community-event.jpg` | A Cole community event | Not used in this rebuild — spare in `public/images/about/` |

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

## Kensington Canyon renovation (2026-09-17 rebuild)

The page is now one chapter-driven story (`the-renovation`, `after: -1`) built
from David's brief: the reclaimed stained-glass windows, the kitchen rework,
the hardwood, the bathroom, the closet conversion and the grounds. The lead
exterior is the only entry left in `photos`; everything else below is a
placeholder printing its expected filename until the file lands in
`public/images/kensington-canyon/`.

| Expected filename | David's original filename | Where it lands |
| --- | --- | --- |
| `kensington-canyon-renovation-selfie-david-weis.jpg` | Kensington Canyon Renovation Photo.jpeg | Aside portrait, "Make it work better. Keep what makes it home." |
| `kensington-canyon-stained-glass-dining-room-david-weis.jpg` | Stained Glass Kensington Canyon Dining Room.jpg | Photo block after "Three windows. A second life." |
| `kensington-canyon-stained-glass-bathroom-window-david-weis.jpg` | Stained Glass Bathroom Kensington Canyon.JPG | Pair with the hallway window |
| `kensington-canyon-stained-glass-hallway-david-weis.jpg` | Stained Glass Hallway Kensington Canyon.jpg | Pair with the bathroom window |
| `kensington-canyon-kitchen-before-peninsula-david-weis.jpg` | Kensington Canyon Kitchen All - Before.JPG | Before/after kitchen pair |
| `kensington-canyon-kitchen-after-island-david-weis.jpg` | Kensington Canyon Kitchen Wet Bar After.jpg | Before/after kitchen pair |
| `kensington-canyon-dining-room-during-renovation-david-weis.jpg` | Kensington Canyon Dining Room Before.jpeg | During/after hardwood pair |
| `kensington-canyon-hardwood-floors-refinished-david-weis.jpg` | Kensington Canyon resurfaced hardwood floors.jpeg | During/after hardwood pair |
| `kensington-canyon-bathroom-before-david-weis.jpg` | Kensington Canyon Bathroom Before.JPG | Before/after bathroom pair |
| `kensington-canyon-closet-before-david-weis.jpg` | Kensington Canyon Closet Before.jpeg | Before/after closet pair |
| `kensington-canyon-closet-after-david-weis.jpg` | Kensington Canyon Closet After.jpeg | Before/after closet pair |
| `kensington-canyon-landscaping-planting-beds-david-weis.jpg` | Kensington Landscaping Action Shot.jpeg | Aside photo, "The work didn't stop at the door." |
| `kensington-canyon-deck-before-david-weis.jpg` | Kensington Canyon Deck Before.JPG | Before/after deck pair |
| `kensington-canyon-deck-after-david-weis.jpg` | Kensington Canyon Deck After.jpg | Before/after deck pair |

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

## Vista Voltaire renovation (2026-09-17 rebuild)

The page is now one chapter-driven story (`the-story`, `after: -1`): the
purchase, the renovation room by room, the fence's five stages, the
landscaping, the pass-through garage and the pivot to Celebrity Vacation
Homes. The lead exterior is the only entry left in `photos`; everything else
is a placeholder printing its expected filename until the file lands in
`public/images/vista-voltaire/`.

| Expected filename | David's original filename | Where it lands |
| --- | --- | --- |
| `vista-voltaire-front-before-renovation.jpg` | Voltaire Front Before(1).JPEG | Aside photo, "Two cities. Two projects. A lot happening at once." |
| `vista-voltaire-construction-portrait.jpg` | Voltaire Action shot(1).JPG | Aside photo, "The potential was there. The work was substantial." |
| `vista-voltaire-kitchen-before-renovation.jpg` | Voltaire Kitchen Before(1).JPEG | Kitchen before/after pair |
| `vista-voltaire-dining-before-renovation.jpg` | Voltaire Dining Room Before(1).JPEG | Dining before/after pair |
| `vista-voltaire-living-room-during-renovation.jpg` | Voltaire Living Room Before(1).JPG | Living room during/after pair |
| `vista-voltaire-hallway-before-renovation.jpg` | Voltaire Hallway Before(1).JPG | Upstairs landing before/after pair |
| `vista-voltaire-hallway-after-renovation.jpg` | Voltaire Hallway After(1).jpg | Upstairs landing before/after pair |
| `vista-voltaire-window-nook-before-renovation.jpg` | Voltaire Kids Room Before(1).JPG | Window-nook before/after pair |
| `vista-voltaire-window-nook-after-renovation.jpg` | Voltaire Kids Room After(1).jpg | Window-nook before/after pair |
| `vista-voltaire-fence-1-original.jpg` | Voltaire Fence Original(1).JPG | "Five stages of a fence" sequence, stage 1 |
| `vista-voltaire-fence-2-solid.jpg` | Voltaire Fence Temporary(1).JPG | Fence sequence, stage 2 |
| `vista-voltaire-fence-3-open-picket.jpg` | Voltaire Fence 3 workaround(1).JPG | Fence sequence, stage 3 |
| `vista-voltaire-fence-4-first-planting.jpg` | Voltaire Fence 4 - hedges were not hedges....(1).JPG | Fence sequence, stage 4 |
| `vista-voltaire-pass-through-garage.jpg` | Voltaire Pass-through garage(1).jpeg | Aside photo, "A garage that opens both ways." |

Reused from the existing set: the lead exterior
(`vista-voltaire-exterior-above-ocean-beach-san-diego.jpg`), the living room
(`vista-voltaire-ocean-beach-vacation-rental-san-diego.jpg`, the "after" of
the living-room pair), the kitchen and dining wide shot
(`ocean-beach-dining-room-with-water-views-2.jpg`, the "after" of the kitchen
pair), the breakfast counter (`san-diego-vacation-rental-kitchen-with-coastal-views.jpg`,
the "after" of the dining pair) and the front-corner exterior
(`vista-voltaire-coastal-exterior-san-diego.jpg`, stage 5 of the fence
sequence — "Finally the hedges I wanted"). **Spares:** `ocean-beach-dining-room-with-water-views.jpg`
(kitchen range detail) and `vista-voltaire-drive-through-garage-san-diego.jpg`
(street view with the garage door). `ocean-beach-vacation-home-with-views-from-every-room.jpg`
(entry and staircase) is a fallback for the "Hallway After" slot — use it only
if `vista-voltaire-hallway-after-renovation.jpg` never arrives; for now the
page names the expected file.

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
| Vista Voltaire | Lead only; the renovation chapter's 14 placeholders are mapped under "Vista Voltaire renovation" |
| Kensington Canyon | Lead only; the renovation chapter's 14 placeholders are mapped under "Kensington Canyon renovation" |
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

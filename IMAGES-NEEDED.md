# Images needed from the client

Every image slot on the site currently uses a placeholder. Please supply the
originals below. Filenames are lowercase and hyphen-separated for SEO; alt text
is already written in `src/data/site.ts` and the components, and will be
refined once we see the real photos.

**General specs:** JPG or PNG, sRGB, largest original available (we will
resize and convert to WebP/AVIF during the build). No text baked into images.

## 1. Headshot (home hero, social share image)

| Slot | Current placeholder | Needed | Suggested filename |
| --- | --- | --- | --- |
| Home hero portrait | Done. David's 1365×2048 original (kept in `assets-source/`), cropped 4:5 to 1000×1250 with a 500px variant | Nothing further needed | `david-weis-compass-real-estate-agent-san-diego-palm-springs-big-bear.jpg` |

Also useful: a second, more environmental portrait (e.g. on the La Jolla
coast) for the Contact page and market pages later.

## 2. Market imagery (home cards, future market page heroes)

Each home-page card shows one landscape image at 4:3. Each market page will
eventually need a wide hero image (approx. 16:9, at least 2400px wide) and
2–4 supporting photos. Photos David has taken himself are ideal; otherwise
licensed stock is fine, but we need to know the source.

| Market | Card image (4:3, ≥1600px wide) | Suggested filename |
| --- | --- | --- |
| San Diego / La Jolla | La Jolla coastline, coves or a coastal streetscape | `la-jolla-coastline-san-diego-real-estate.jpg` |
| Palm Springs | Mid-century home with the San Jacinto Mountains behind it | `palm-springs-mid-century-home-real-estate.jpg` |
| Big Bear Lake | Cabin among pines, ideally with the lake or Big Bear Mountain Resort visible | `big-bear-lake-cabin-real-estate.jpg` |

Stock stand-ins from Unsplash are in place for all three cards (see `PHOTO-CREDITS.md`); David's own photos can replace them under the same filenames. The original line-art placeholders remain in `public/images/placeholders/`.

## 3. Logos

| Slot | Current placeholder | Needed | Suggested filename |
| --- | --- | --- | --- |
| David Weis REALTOR® logo (header + footer) | Done. David's own 1448px lockup (2026-09-08), converted to transparent PNGs: `david-weis-realtor-logo.png` (mark + signature) and `david-weis-realtor-compass-lockup.png` (full lockup) | Nothing further needed; a vector file remains welcome | — |
| Compass logo (footer lockup) | Part of David's full lockup image; the official Compass SVG is also available in `CompassLogo.astro` | Nothing further needed beyond any co-branding rules his office requires | — |
| Equal Housing Opportunity and REALTOR® marks (footer) | Done, from the files David sent (`equal-housing-opportunity-logo.png`, `realtor-logo.png`) | Nothing further needed | — |
| Favicon | Roof mark from the real logo on an ink tile (`favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`) | Nothing further needed | — |

## 4. Projects page (next phase)

One to three photos per project, landscape preferred:

- The Cole Hotel, Palm Springs (exterior, pool or courtyard, one interior)
- Palm Springs condo conversion (before/after if available)
- Six-bedroom Palm Springs vacation rental
- Big Bear cabin rebuild (before/after, finished exterior and interior)
- La Jolla short-term rentals (exterior or a signature interior view)

Suggested filenames: `the-cole-hotel-palm-springs.jpg`, `palm-springs-condo-conversion.jpg`, `big-bear-cabin-rebuild.jpg`, etc.

## 5. Social share image (optional)

Done: `david-weis-share-image.jpg` (1200×630, logo plus portrait) is the Open
Graph image on every page. Can be redesigned any time.

## 6. Brand assets (not images, but needed)

- The letterhead / brand guide PDF, so we can match the PCB-trace motif exactly
  rather than our current interpretation.
- Confirmation of brand colors, if any beyond black/white.

## 7. Market page photo slots (added 2026-09-08)

Each market page has four labeled placeholders: one 4:5 hero portrait-orientation
slot and three 4:3 gallery slots. The suggested subject is printed inside each
slot on the page. Landscape or portrait originals both work; we crop.

| Page | Hero (4:5) | Gallery (4:3 × 3) |
| --- | --- | --- |
| San Diego | La Jolla Cove or Windansea, late afternoon | Kensington streetscape · Mission Beach boardwalk or bay · interior of one of David's rentals |
| Palm Springs | Mid-century home with the San Jacinto Mountains | Querencia Palms exterior or courtyard · The Cole Hotel pool · Vista Las Palmas street with the mountain |
| Big Bear | Lake view with cabins in the pines, or the resort in early snow | David's cabin exterior · cabin interior · Big Bear Mountain Resort slopes |

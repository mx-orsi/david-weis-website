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
| Home hero portrait | 480×480 headshot pulled from the Compass profile (too small for retina screens) | High-resolution original of the same or a newer portrait, at least 1600px on the short side, vertical or square crop with headroom | `david-weis-realtor-broker-associate-compass-la-jolla.jpg` |

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

Current placeholders live in `public/images/placeholders/` (simple line-art SVGs).

## 3. Logos

| Slot | Current placeholder | Needed | Suggested filename |
| --- | --- | --- | --- |
| David Weis REALTOR® logo (header + footer) | Recreated in code from the mockup: three roof-lines + italic serif "David Weis" | Vector original (SVG, AI or EPS) of the signature/roof-line logo used on the letterhead and video assets, in black and in white | `david-weis-realtor-logo.svg` |
| Compass logo (footer lockup) | Vector redrawn in code from the PNG the client supplied (`CompassLogo.astro`) | Optional: the official Compass SVG from the brand portal if his office provides one, plus any co-branding rules | `compass-logo.svg` |
| Favicon | Roof-line mark generated from the placeholder logo | Will be derived from the real logo once supplied | `favicon.svg` |

## 4. Projects page (next phase)

One to three photos per project, landscape preferred:

- The Cole Hotel, Palm Springs (exterior, pool or courtyard, one interior)
- Palm Springs condo conversion (before/after if available)
- Six-bedroom Palm Springs vacation rental
- Big Bear cabin rebuild (before/after, finished exterior and interior)
- La Jolla short-term rentals (exterior or a signature interior view)

Suggested filenames: `the-cole-hotel-palm-springs.jpg`, `palm-springs-condo-conversion.jpg`, `big-bear-cabin-rebuild.jpg`, etc.

## 5. Social share image (optional)

A 1200×630 branded image for link previews. Until supplied, the headshot is
used as the Open Graph image.

## 6. Brand assets (not images, but needed)

- The letterhead / brand guide PDF, so we can match the PCB-trace motif exactly
  rather than our current interpretation.
- Confirmation of brand colors, if any beyond black/white.

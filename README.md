# David Weis · Broker Associate | REALTOR® · Compass

Personal real estate site for David Weis serving **San Diego / La Jolla, Palm
Springs and Big Bear Lake**. Built with [Astro](https://astro.build) as a fast,
static, content-first site that can grow a markdown blog later.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the production build
```

Requires Node 22.12+.

## Status

| Page | Route | State |
| --- | --- | --- |
| Home | `/` | Fully designed, awaiting client approval |
| San Diego | `/san-diego` | Stub (real heading, lede, search CTA) |
| Palm Springs | `/palm-springs` | Stub |
| Big Bear | `/big-bear` | Stub |
| Projects | `/projects` | Stub with project list |
| Contact | `/contact` | Stub with full contact card |
| 404 | `/404` | Done |

## Where things live

```
src/
  data/site.ts            ← agent details, markets, nav, bio (single source of truth)
  layouts/BaseLayout.astro← <head>, SEO meta, JSON-LD, header + footer
  components/
    Hero.astro, MarketCard.astro, AboutStrip.astro, CtaBand.astro  (home sections)
    SearchCTA.astro       ← every "Search Homes" link (see below)
    Header.astro, Footer.astro, Logo.astro, CompassLogo.astro
    PcbTrace.astro        ← letterhead line motif (decorative SVG)
    StubPage.astro, MarketStub.astro  (placeholder pages)
  styles/global.css       ← design tokens + base styles
  pages/                  ← one file per route
public/
  images/                 ← headshot + placeholder market art
  robots.txt, favicon.svg
IMAGES-NEEDED.md          ← every image slot to request from the client
CLIENT-QUESTIONS.md       ← open questions and decisions from the client
```

## Design system

- **Type:** Poppins Light (300) for body, Medium (500) for emphasis and tracked
  uppercase labels; Cormorant Garamond for display headings. Both self-hosted
  via `@fontsource`.
- **Palette:** warm off-white ground, near-black ink, hairline borders. Three
  restrained market accents (coastal, desert, mountain) used only for dots and
  bullets.
- **Motif:** PCB-trace lines (`PcbTrace.astro`) behind the hero portrait, as
  the footer divider and in the CTA band.
- Tokens are CSS custom properties in `src/styles/global.css`.

## Property search (Compass)

Compass has no embeddable IDX widget for personal agent sites, so search is an
outbound link rather than a fake search UI. All search entry points render
through `src/components/SearchCTA.astro`:

- no `market` prop → David's Compass agent profile
  (`https://www.compass.com/agents/david-weis/`, which is what davidweis.com
  redirects to today)
- `market="san-diego" | "palm-springs" | "big-bear"` → Compass consumer search
  for that area (URLs in `src/data/site.ts`)

To swap in a real IDX embed later, replace the markup in `SearchCTA.astro` and
keep its props; every page picks it up.

## Preview hosting (GitHub Pages)

A client-review copy is published from the `gh-pages` branch of
`mx-orsi/david-weis-website` at **https://mx-orsi.github.io/david-weis-website/**.
It is built with `SITE_BASE=/david-weis-website` (all internal links go through
`src/lib/paths.ts`) and carries a `noindex` tag so it never competes with the
real domain. To push an updated preview:

```bash
./scripts/deploy-preview.sh
```

## SEO

- Unique `<title>` and meta description per page (props on `BaseLayout`).
- Canonical URL, Open Graph and Twitter cards on every page.
- `RealEstateAgent` JSON-LD (name, phone, email, DRE, office address, areas
  served, social profiles) on every page.
- Sitemap via `@astrojs/sitemap` → `/sitemap-index.xml`, referenced in
  `public/robots.txt`.
- Descriptive alt text on every image; image filenames are lowercase and
  hyphenated with market keywords.
- Production URL is set in `astro.config.mjs` (`site`). Update if the domain
  changes.

## Content source of truth

Copy was reconciled against David's Compass profile on 2026-09-01. Where the
original mockup and Compass disagreed (title, hotel role), Compass wins.
Edit copy in `src/data/site.ts`, not in components. Client decisions and open
questions are tracked in `CLIENT-QUESTIONS.md`.

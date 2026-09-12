# David Weis · Broker Associate | REALTOR® · Compass

Personal brand site for David Weis, a Compass Broker Associate working across
**San Diego, Palm Springs and Big Bear**. Built with [Astro](https://astro.build)
as a fast, static, content-first site. Every word of copy comes from the
approved September 2026 copy deck and lives in `src/data/`, not in templates.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the production build
npx astro check  # type-check the .astro files
```

Requires Node 22.12+.

## Pages

| Page | Route | Notes |
| --- | --- | --- |
| Home | `/` | Seven short sections from the deck; full stories live on interior pages |
| About | `/about` | Full story, career chapters, The Cole, community |
| Markets | `/san-diego`, `/palm-springs`, `/big-bear` | Shared `MarketPage` template |
| Experience | `/experience` | Landing with all seven project cards |
| Project pages | `/experience/<slug>` | One shared `ProjectPage` structure, generated from `projects.ts` |
| Properties | `/properties` | Featured listings grid + Compass link + selected sales (each block removable) |
| Contact | `/contact` | Form (Name, Email, Phone, Interested In, Location, Message) + direct details |
| Privacy Policy | `/privacy-policy` | Draft stub, noindexed until Compass approves it |
| 404 | `/404` | |
| `/projects` | redirect → `/experience` | Keeps the old preview link alive |

## Where things live

```
src/
  data/
    site.ts          ← agent details, markets, social links, legal block, final CTA
    nav.ts           ← header groups (Markets, Experience) and footer links
    home.ts          ← home page copy
    about.ts         ← about page copy
    projects.ts      ← the seven Experience projects (cards + full pages + SEO)
    marketPages.ts   ← market page copy, featured areas, featured projects
    listings.ts      ← Properties page: featured listings, selected sales, block toggles
    testimonials.ts  ← placeholder quotes, hidden until `enabled: true`
    contact.ts       ← contact copy and form options
    types.ts         ← Photo / Stat / Cta types shared by data and components
  layouts/BaseLayout.astro   ← <head>, SEO meta, JSON-LD, header, final CTA, footer
  components/
    Header.astro, Footer.astro, FinalCta.astro
    Hero.astro (home), PageHero.astro (interior openers)
    ProjectCard.astro, ProjectPage.astro
    MarketCard.astro, MarketPage.astro, AreaCard.astro
    ListingCard.astro, StatRow.astro, Testimonials.astro
    Story.astro (heading + prose block), Media.astro (photo or labeled placeholder)
    PhotoSlot.astro, SearchCTA.astro (every outbound Compass link)
    Logo.astro, CompassLogo.astro, Title.astro (REALTOR® with small ®), Icon.astro, PcbTrace.astro
  styles/global.css  ← design tokens + base styles
  pages/             ← one file per route; experience/[slug].astro builds the project pages
public/images/       ← headshot, logos, compliance marks, Unsplash market photos
```

## Editing content

- **Copy:** edit the file in `src/data/`. Components never hold copy.
- **Add a photo:** every image goes through `Media.astro`. Give the `Photo`
  entry a `src` (path under `public/images/`), `alt`, `width` and `height` and
  the placeholder is replaced. Keep the `suggestion` as the editor's note.
- **Add or reorder a project:** edit `projects.ts`. The page, the nav dropdown,
  the Experience landing, the home teasers (`homeFeaturedProjects`) and the
  market pages (`featuredProjects`) all follow.
- **Listings:** edit `listings.ts`. Set `placeholder: false` on real entries.
  `propertiesConfig` toggles the three blocks on the Properties page.
- **Testimonials:** replace the entries in `testimonials.ts` and set
  `enabled: true`. The section stays hidden until then.
- **Stats:** `StatRow` renders any `Stat[]`. Only use figures that appear in
  the approved copy.

## Design system

- **Palette:** black, white and one blue (`--blue: #1d4ed8`, deep band
  `--surface-blue: #0b2a6b`). No warm neutrals, no gold. Tokens in `global.css`.
- **Type:** Cormorant Garamond for display, Poppins Light for body, both
  self-hosted via `@fontsource`. Body measure is capped at 62ch.
- **Case:** copy is written in sentence/title case in markup. Uppercase is only
  applied by CSS `text-transform` on eyebrows and small labels.
- **Motion:** one page-load moment (the home hero settles in); everything else
  only responds to hover or focus. Reduced motion disables all of it.
- **Brand prominence:** David's mark heads the header and footer; the Compass
  wordmark appears in the footer identity block and the compliance band.

## Property search (Compass)

Compass has no embeddable IDX widget for personal agent sites, so search is an
outbound link rather than a fake search UI. All Compass links render through
`SearchCTA.astro`: no `market` prop → David's Compass profile (the Properties
page "View all listings on Compass"); `market="san-diego"` etc. → Compass
consumer search for that area (the market page "Explore … Properties" button).

## Contact form

`ContactForm.astro` posts JSON to `PUBLIC_FORM_ENDPOINT` (set it in `.env`, for
example a Formspree or Basin URL). When unset, submitting opens the visitor's
email app with the message pre-filled, so the form always works.

## Preview hosting (GitHub Pages)

A client-review copy is published from the `gh-pages` branch of
`mx-orsi/david-weis-website` at **https://mx-orsi.github.io/david-weis-website/**.
It is built with `SITE_BASE=/david-weis-website` (all internal links go through
`src/lib/paths.ts`) and carries a `noindex` tag. To push an updated preview:

```bash
./scripts/deploy-preview.sh
```

## SEO

- Titles and meta descriptions per page come from the copy deck (in the data files).
- Canonical URL, Open Graph and Twitter cards on every page.
- `RealEstateAgent` JSON-LD on every page; `BreadcrumbList` on market and project pages.
- Sitemap via `@astrojs/sitemap` → `/sitemap-index.xml` (privacy policy excluded).

## Content source of truth

The approved copy deck (September 2026) is the source for all page copy. For
facts outside the deck (contact details, office, license numbers), David's own
emails win, then the Compass profile. Open questions are in `CLIENT-QUESTIONS.md`;
image slots to fill are in `IMAGES-NEEDED.md`.

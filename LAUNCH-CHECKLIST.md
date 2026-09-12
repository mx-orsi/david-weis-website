# Launch checklist

What stands between the current build and davidweis.com going live.
Grouped by who has to act. Tick items off as they land.

## 1. Needs David

- [x] **Headshot** received and in use (home and About).
- [x] **Copy** — the approved September 2026 deck is fully built out.
- [ ] **Photos** for the seven project pages, About, the home Ownership
      section and the market image breaks. Specs in `IMAGES-NEEDED.md`.
- [ ] **Properties decision:** keep the Featured Listings grid, the Compass
      link, and Selected Sales, or drop a block. Then send listing details.
- [x] **Testimonials:** live from David's RealSatisfied feed (5.0 ratings strip
      plus real client quotes). Nothing left to send unless he wants a Google
      review added by hand, or the held-back "Mark W" review shown.
- [x] **YouTube channel URL** (`@DavidWeisRealtor`) and the **Facebook business
      page** are in the footer.
- [ ] **Realtor.com profile URL** — the last footer link. Ask David to paste
      the address from his own browser (Realtor.com blocks us).
- [ ] **Compass compliance sign-off** on the footer disclosure, the wordmark
      placement and the privacy policy.
- [ ] **Confirm:** The Cole logo use, Querencia Palms link, Celebrity Vacation
      Homes wording and link.
- [ ] **Update Compass profile** contact email from davidweis.net to .com.
- [ ] **Domain access:** confirm where davidweis.com DNS is managed.

## 2. Build

- [x] Home, About, Experience landing, seven project pages, three market
      pages, Properties, Contact, Privacy Policy stub, 404, `/projects` redirect.
- [x] Reusable data-driven components: project cards, listing cards, stat
      rows, testimonials, market cards, area cards.
- [x] RealSatisfied testimonials read at build time, with the feed-up,
      feed-down and feed-empty builds all rehearsed.
- [x] Black / white / blue palette; uppercase only via CSS; one page-load moment.
- [x] Accessibility: axe-core (WCAG 2.2 AA + best practice) reports zero
      violations on every page at desktop and phone widths; no horizontal
      overflow at 390px.
- [ ] **Form service.** Create a Formspree or Basin form, set
      `PUBLIC_FORM_ENDPOINT` in `.env` and in the deploy environment.
- [ ] Swap placeholders for photos as they arrive (data edits only).
- [x] Weekly rebuild workflow (`.github/workflows/weekly-rebuild.yml`) so new
      reviews reach the site without a manual deploy. Needs Actions enabled on
      the GitHub repo; swap it for the host's scheduled build if the site moves.

## 3. Launch plumbing

- [ ] Choose production host: GitHub Pages with a custom domain (free, already
      wired), or Netlify/Cloudflare Pages if forms or redirects are wanted.
- [ ] Point davidweis.com at the host; add HTTPS; keep www and apex both working.
- [ ] Production build uses root paths automatically (no `SITE_BASE`), which
      also removes the `noindex` tag. Verify after the first deploy.
- [x] Branded 1200×630 share image (`david-weis-share-image.jpg`).
- [ ] Remove `noindex` from the privacy policy once approved.
- [ ] Google Search Console: verify, submit `/sitemap-index.xml`.
- [ ] Google Business Profile: link the site; confirm Suite 210 matches.
- [ ] Analytics (GA4 or a privacy-light option like Plausible) if David wants numbers.

## 4. Final QA before go-live

- [ ] Re-run the axe audit and the screenshot pass after photos land.
      (2026-09-12: axe clean on home and About at 1440 and 390 with the
      testimonials section in.)
- [x] Lighthouse pass (2026-09-12): desktop 100/100/100/100 on home; mobile performance 97 home, 98 San Diego, 96 project page, all other categories 100. CSS is inlined, photos ship as WebP with the hero preloaded. Re-run after photos land.
- [ ] Real-device check on iPhone and Android, Safari and Chrome.
- [ ] Every link clicked, every Compass link opens the right area.
- [ ] Proofread all copy once more against the deck with David's final answers in.

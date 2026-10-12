# Launch checklist

What stands between the current build and davidweis.com going live.
Grouped by who has to act. Tick items off as they land.

## 1. Needs David

- [x] **Headshot** received and in use (home and About).
- [x] **Copy** — the approved September 2026 deck is fully built out.
- [ ] **Photos** for the seven project pages, About, the home Ownership
      section and the market image breaks. Specs in `IMAGES-NEEDED.md`.
      Querencia Palms grounds photos are in David's Drive folder (2026-09-13);
      Max is renaming them per the table in `IMAGES-NEEDED.md`.
- [ ] **Confirm the grounds chapter wording** (see `CLIENT-QUESTIONS.md`).
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
      placement, the privacy policy and the Terms of Use (both drafted 2026-10-11 from
      Compass's own list; each page carries a blue box of unconfirmed items).
- [ ] **Confirm:** The Cole logo use, Querencia Palms link, Celebrity Vacation
      Homes wording and link.
- [ ] **Update Compass profile** contact email from davidweis.net to .com.
- [ ] **Domain access:** davidweis.com nameservers are GoDaddy (ns71/ns72.domaincontrol.com) as of 2026-10-07; it forwards to the Compass profile. David sent Max a GoDaddy delegate invite on 2026-10-08: Max must accept it. David is cancelling the Squarespace subscription that was billing him.
- [ ] **IDX (iHomeFinder):** David signed up on 2026-10-08 (both MLSs, $154/month). MLS access submitted; Max has an admin login (change the password on first sign-in). Vendor setup notes to come. Build list: home hero with combined search, market searches and featured areas, separate Active and Pending feeds, search-result URLs on davidweis.com, lead-nurture prompt after three listing views, Google Analytics, Compass CRM sync (Zapier two-step Zap first; research in `assets-source/drive-2026-10-10-dba/`).
- [ ] **David to read:** the Garden Club page (his Section 5 feature plus the drafted bits flagged in `CLIENT-QUESTIONS.md`) and the new Desert Business Association page.

## 2. Build

- [x] Home, About, Experience landing, seven project pages, three market
      pages, Properties, Contact, Privacy Policy stub, 404, `/projects` redirect.
- [x] Reusable data-driven components: project cards, listing cards, stat
      rows, testimonials, market cards, area cards.
- [x] RealSatisfied testimonials read at build time, with the feed-up,
      feed-down and feed-empty builds all rehearsed.
- [x] Querencia Palms grounds chapter: editorial chapter blocks, before/after
      sliders (mouse, touch, keyboard), detail gallery; axe clean at 1440
      and 390.
- [x] Black / white / blue palette; uppercase only via CSS; one page-load moment.
- [x] Accessibility: axe-core (WCAG 2.2 AA + best practice) reports zero
      violations on every page at desktop and phone widths; no horizontal
      overflow at 390px.
- [ ] **Form service.** Create a Formspree or Basin form, set
      `PUBLIC_FORM_ENDPOINT` in `.env` and in the deploy environment, and name it in
      the privacy policy. The form now sends `consent: yes|no` from the SMS checkbox.
- [ ] Swap placeholders for photos as they arrive (data edits only).
- [x] Weekly rebuild workflow (`.github/workflows/weekly-rebuild.yml`) so new
      reviews reach the site without a manual deploy. Needs Actions enabled on
      the GitHub repo; swap it for the host's scheduled build if the site moves.

## 3. Launch plumbing

- [ ] Production host: **Cloudflare Pages** (David's choice, 2026-10-08; iHomeFinder confirmed
      compatibility). Max must log Wrangler in once on this Mac (token expired August 2026), create
      the Pages project from the GitHub repo, and move the weekly rebuild to a Cloudflare deploy hook.
      GitHub Pages with the custom domain stays the fallback (already wired, HTTPS, no new login).
- [ ] Point davidweis.com at the host; add HTTPS; keep www and apex both working.
- [ ] Production build uses root paths automatically (no `SITE_BASE`), which
      also removes the `noindex` tag. Verify after the first deploy.
- [x] Branded 1200×630 share image (`david-weis-share-image.jpg`).
- [ ] Remove `noindex` (and the blue boxes) from the privacy policy and Terms of Use once approved;
      add `/terms` to the sitemap filter exception at the same time.
- [ ] Google Search Console: verify, submit `/sitemap-index.xml`.
- [ ] Google Business Profile: link the site; confirm Suite 210 matches.
- [ ] Analytics: David expects Google Analytics with the IDX. Nobody has created a GA4 property
      yet. Creating one triggers the pixel disclosure: swap in the commented paragraph in
      `src/pages/privacy-policy.astro`.

## 4. Final QA before go-live

- [ ] Re-run the axe audit and the screenshot pass after photos land.
      (2026-10-11: axe clean on every changed page at 1440 and 390, no horizontal overflow.)
- [x] Lighthouse pass (2026-09-12): desktop 100/100/100/100 on home; mobile performance 97 home, 98 San Diego, 96 project page, all other categories 100. CSS is inlined, photos ship as WebP with the hero preloaded. Re-run after photos land.
- [ ] Real-device check on iPhone and Android, Safari and Chrome.
- [ ] Every link clicked, every Compass link opens the right area.
- [ ] Proofread all copy once more against the deck with David's final answers in.

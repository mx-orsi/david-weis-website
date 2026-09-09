# Launch checklist

What stands between the current preview and davidweis.com going live.
Grouped by who has to act. Tick items off as they land.

## 1. Needs David

- [x] **Original headshot export** received 2026-09-08 and in use.
- [ ] **Confirm copy facts:** Querencia Palms numbers and wording; Vista Las
      Palmas Neighbors Foundation board seat still accurate; any Big Bear seller
      result to quote.
- [ ] **Celebrity Vacation Homes:** which page to link, and approve the
      "Independently operated. Compass is not involved in rentals." wording.
- [ ] **Compass compliance sign-off** on the footer disclosure and the lockup
      (he said it looks good; he wanted formal confirmation).
- [ ] **Update Compass profile** contact email from davidweis.net to .com.
- [ ] **Photos (optional):** his own market shots to replace the stock ones,
      project photos (Querencia Palms, The Cole Hotel, cabin, rentals), a second
      environmental portrait. Specs in `IMAGES-NEEDED.md`.
- [ ] **Domain access:** confirm where davidweis.com DNS is managed and who can
      change it (it currently redirects to his Compass profile).

## 2. Pages still to build

- [x] **San Diego, Palm Springs, Big Bear** market pages built: intro, owner's
      notes, neighborhoods, buyer/seller/investor guidance, FAQ with FAQPage
      schema, breadcrumbs, per-market Compass search. Photos are placeholders
      until David chooses images; copy awaits his read-through.
- [x] **Projects** page built as a showcase: Querencia Palms featured with logo
      and results, The Cole Hotel, the rentals and the cabin, each with photo
      placeholders and links to the project sites.
- [x] **Contact** page built: working form (emails David via the visitor's mail
      app until a form service is connected via `PUBLIC_FORM_ENDPOINT`), direct
      contact card, directions link, markets, what-happens-next steps.
- [ ] **Form service.** Create a Formspree or Basin form, set
      `PUBLIC_FORM_ENDPOINT` in `.env` and in the deploy environment.
- [ ] **About** page (optional): the About strip expanded, with the second portrait.
- [ ] **Blog** scaffold (Astro content collections, markdown posts, listing page,
      RSS), since the brief called for one.
- [ ] **Privacy policy** page (standard for a lead-gen site; a draft exists in
      the older `/Users/max/David Weis ` folder and needs Compass review).

## 3. Launch plumbing

- [ ] Choose production host: GitHub Pages with a custom domain (free, already
      wired), or Netlify/Cloudflare Pages if forms or redirects are wanted.
- [ ] Point davidweis.com at the host; add HTTPS; keep www and apex both working.
- [ ] Production build uses root paths automatically (no `SITE_BASE`), which
      also removes the `noindex` tag. Verify after the first deploy.
- [x] Branded 1200×630 share image added (`david-weis-share-image.jpg`).
- [ ] Google Search Console: verify, submit `/sitemap-index.xml`.
- [ ] Google Business Profile: link the site; confirm Suite 210 matches.
- [ ] Analytics (GA4 or a privacy-light option like Plausible) if David wants numbers.
- [ ] Ask Celebrity Vacation Homes to link back to davidweis.com.

## 4. Final QA before go-live

- [ ] Re-run the axe accessibility audit on every page (zero violations today).
- [ ] Lighthouse pass on performance and SEO.
- [ ] Real-device check on iPhone and Android, Safari and Chrome.
- [ ] Every link clicked, every Compass search link opens the right area.
- [ ] Proofread all copy once more with David's final answers in.

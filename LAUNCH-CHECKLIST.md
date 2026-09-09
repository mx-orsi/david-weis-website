# Launch checklist

What stands between the current preview and davidweis.com going live.
Grouped by who has to act. Tick items off as they land.

## 1. Needs David

- [ ] **Original headshot export** (1200 px or wider on the short side). The
      hero currently uses the 480 px Compass crop; his arms-crossed portrait is
      saved as `…-portrait.jpg` but is too small to use.
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

- [ ] **San Diego, Palm Springs, Big Bear** market pages (currently stubs):
      neighborhood sections, buyer/seller/investor guidance, rental notes, FAQs,
      per-market Compass search links, local SEO copy.
- [ ] **Projects** page: full write-ups with photos for Querencia Palms, The Cole
      Hotel, the six-bedroom rental, the Big Bear cabin, the San Diego rentals.
- [ ] **Contact** page: a working form (needs a form service such as Formspree,
      Basin or Netlify Forms; pick one), plus map or office hours if wanted.
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
- [ ] Add a branded 1200×630 share image (currently the headshot).
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

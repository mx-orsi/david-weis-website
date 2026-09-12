# Client questions and decisions

Running log of what David has decided and what is still open. Update this
file whenever he answers something.

## Answered

**David, 2026-09-04 and 2026-09-08 emails**

- **Email:** `david@davidweis.com` only. The Compass address is gone from the site.
- **Suite:** 7863 Girard Ave, Suite 210 (matches Google). Shown on the Contact page and in structured data.
- **Domain:** davidweis.com. Already set as the production URL.
- **Footer disclosure:** the deck wording is in, with Compass CA DRE #01527365.
  He still plans to get final confirmation from Compass.
- **Logo:** David's own mark and signature head the header and footer.
- **Equal Housing Opportunity and REALTOR® marks:** in the footer compliance band.
- **REALTOR®:** always carries ® and the ® is set small and superscript
  everywhere it appears as text.
- **Compass search links:** outbound, open in a new tab.

**Max, 2026-09-08:** headshot in use; Compass co-branding fine for now;
Unsplash market photos allowed as stand-ins.

**Copy deck, September 2026 (edited and approved):** the whole site was
rebuilt from it on 2026-09-12. Home, About, Experience (seven project pages),
the three market pages, Properties, Contact, the global final CTA and the
footer all use the deck copy verbatim. Pricing figures were intentionally
removed from Querencia Palms and Vista Voltaire and must not be re-added. The
earlier market-page neighborhood notes and FAQ were retired in favor of the
deck copy (they are in git history if anything needs to come back).

**Max, 2026-09-12 (revised build brief):**

- **Testimonials** now come from David's RealSatisfied feed, read at build time.
  Live on the home page (2 quotes) and About (4 quotes) with the 5.0 ratings
  strip. Nothing is placeholder any more.
- **Footer social** is the six-profile list: Instagram · LinkedIn · YouTube ·
  Facebook · Realtor.com · Homes.com. Five are live; Realtor.com is still
  missing a URL (below). YouTube is `@DavidWeisRealtor`, Facebook is the
  business page `facebook.com/davidweisrealty`, both loaded and checked.

## Still open

1. **Realtor.com profile URL.** The footer has an entry for it, hidden until we
   have a working link. The only candidate is the one inside David's
   RealSatisfied feed, `realtor.com/realestateagents/___99919493`, which looks
   like a template with the name and city segments left blank. Realtor.com
   blocks automated requests, so it could not be checked from here. **Ask David
   to open his Realtor.com profile and paste the address from the browser**,
   then it goes into `social` in `src/data/site.ts`.
2. **One RealSatisfied review is held back.** A five-star buyer review for an
   Ocean Beach purchase is signed "Mark W" — David's husband and his partner on
   the properties in the Experience section. It is genuine but does not read as
   independent client feedback, so it is excluded (`excludedIds` in
   `src/data/testimonials.ts`, one line to remove). Confirm with David.
   Three more reviews are dropped automatically because they name a unit
   address at 588 E. San Lorenzo, which the brief does not allow on the site.
3. **Google reviews.** David's RealSatisfied feed already carries seven reviews
   marked as Google in origin, so they show with a "Google review" label. If
   there are Google reviews the feed does not include, send the text and the
   reviewer's name and they go into `src/data/testimonials.json`.
4. **Properties page approach.** Compass cannot be embedded, so the page is a
   hybrid: a manually maintained Featured Listings grid, a "View all listings
   on Compass" band, and Selected Sales. All three currently show labeled
   placeholders. Decide: keep all three, or only the Compass link? Then send
   current listings (address, city, price, beds, baths, sq ft, photo, Compass
   URL) and a few past sales.
5. **Photos.** Every project page, the About page, the home "Ownership"
   section and the market pages have labeled photo placeholders naming the
   suggested shot. See `IMAGES-NEEDED.md`.
6. **Privacy policy.** A draft stub is at `/privacy-policy` (noindexed). Compass
   requires an approved policy before launch; please route it to Compass
   compliance.
7. **The Cole Hotel logo.** The project page and the About page show the hotel's
   logo (taken from thecolehotel.com). Since the hotel was sold, confirm David
   is comfortable displaying it. The page no longer links to the hotel's site.
8. **Querencia Palms link.** The project page links to querenciapalms.com. Keep?
9. **Celebrity Vacation Homes.** Linked once, on the About page ("Today"), with
   the note "Independently operated. Compass is not involved in rentals."
   Confirm the wording and whether a specific page should be linked.
10. **Contact form delivery.** The form works today by opening the visitor's
   email app. To receive submissions directly we need a form service
   (Formspree or Basin, both have free tiers); then one setting turns it on.
11. **Compass co-branding rules.** Fine for now per Max; final word from his
    office later. The Compass wordmark is black, set small under David's name.
12. **davidweis.net.** Compass still lists david@davidweis.net as his IDX
    contact email. Does .net still forward, and should Compass be updated to .com?
13. **Domain access.** Confirm where davidweis.com DNS is managed and who can
    change it (it currently redirects to his Compass profile).

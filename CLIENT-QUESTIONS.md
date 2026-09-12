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

## Still open

1. **YouTube.** The deck footer lists Instagram · LinkedIn · YouTube. We have
   no YouTube channel URL; the footer shows YouTube as soon as one is added to
   `src/data/site.ts` (`social`). Facebook was dropped per the deck.
2. **Testimonials.** The component is built and hidden. Send two or three
   client quotes with a name and context ("Seller, Kensington") and we turn it on.
3. **Properties page approach.** Compass cannot be embedded, so the page is a
   hybrid: a manually maintained Featured Listings grid, a "View all listings
   on Compass" band, and Selected Sales. All three currently show labeled
   placeholders. Decide: keep all three, or only the Compass link? Then send
   current listings (address, city, price, beds, baths, sq ft, photo, Compass
   URL) and a few past sales.
4. **Photos.** Every project page, the About page, the home "Ownership"
   section and the market pages have labeled photo placeholders naming the
   suggested shot. See `IMAGES-NEEDED.md`.
5. **Privacy policy.** A draft stub is at `/privacy-policy` (noindexed). Compass
   requires an approved policy before launch; please route it to Compass
   compliance.
6. **The Cole Hotel logo.** The project page and the About page show the hotel's
   logo (taken from thecolehotel.com). Since the hotel was sold, confirm David
   is comfortable displaying it. The page no longer links to the hotel's site.
7. **Querencia Palms link.** The project page links to querenciapalms.com. Keep?
8. **Celebrity Vacation Homes.** Linked once, on the About page ("Today"), with
   the note "Independently operated. Compass is not involved in rentals."
   Confirm the wording and whether a specific page should be linked.
9. **Contact form delivery.** The form works today by opening the visitor's
   email app. To receive submissions directly we need a form service
   (Formspree or Basin, both have free tiers); then one setting turns it on.
10. **Compass co-branding rules.** Fine for now per Max; final word from his
    office later. The Compass wordmark is black, set small under David's name.
11. **davidweis.net.** Compass still lists david@davidweis.net as his IDX
    contact email. Does .net still forward, and should Compass be updated to .com?
12. **Domain access.** Confirm where davidweis.com DNS is managed and who can
    change it (it currently redirects to his Compass profile).

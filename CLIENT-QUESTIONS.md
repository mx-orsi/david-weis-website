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

**David, 2026-09-13 email (Querencia Palms grounds chapter):** built as a
chapter inside the Querencia page between "Make the property impossible to
ignore" and "Stage. Clean. Present. Repeat.", following his section order:
barren opener → the gardener → damage control → Cherry Valley (with the pull
line) → five drag-to-reveal before/after sliders → the details gallery → the
garden club with one portrait → the water feature with the full-bleed
waterfall → care is something buyers can feel → "The spaces between the
buildings matter too." → Mural After with the caption "A landscape that grew
alongside the community." His copy is used as written, joined into
paragraphs to match the rest of the site (no "didn't"/"couldn't" in body
copy, same as the deck). "Landscape stewardship + aquatic planting" appears
in a new Involvement line under the page intro. Photos are placeholders that
name the file each one expects; the map from his Drive filenames is in
`IMAGES-NEEDED.md`.

**David, 2026-09-15 and 2026-09-16 briefs (Kensington Canyon, Vista Voltaire, About):** all
three pages were rebuilt as chapter-driven stories on 2026-09-17 with his copy verbatim, headings in
sentence case, and named placeholder slots for every photo he referenced (see IMAGES-NEEDED.md). His
accuracy rules are followed: Kensington's windows are "reclaimed", the kitchen kept its footprint, the
hardwood was restored; Voltaire had a contractor and David is never described as doing the construction;
fence copy makes no regulatory claims; no revenue or occupancy figures anywhere.

## Still open

**From David's About page notes (2026-09-21):** all applied. Points to confirm with him:

- **Modernism Week years.** His captions say Limón was the 2024 tour, The Marquee at Twin Palms 2025,
  and the Vista Las Palmas docent photos 2026. His own Drive folders label the docent photos
  "Modernism Week 2025 - Vista Las Palmas" and the Limón Instagram post is dated February 2025.
  The captions follow his email; one word each to change if the folders were right.
- **The cookie-competition photo** is no longer on the page. His holiday layout lists every row and
  ends with the Christmas cards as the "last row", so the cookie tile was dropped. Easy to restore.
- **Work-truck paragraph:** his text read "many peoples dream cars, and he shouldn't reference it a
  work truck"; the page has "many people's dream cars, and he shouldn't reference it as a work truck".
- **"Broker caravan" caption** was removed as asked; the photo stays beside the first-listing photo,
  uncaptioned. Say the word if the photo should go too.
- **The Marquee photo of David and Mark** only exists as an Instagram screenshot (1206px wide), so it
  is cropped from that and is the softest photo on the page. The original from his phone would swap in
  under the same filename.
- **April refreshment-table photo** is not in the 2026-09-18 Drive download; its slot prints the
  expected filename (see IMAGES-NEEDED.md).
- **Assemblymember caption** uses his wording, "California State Assemblymember Chris Ward,
  representing part of San Diego County." The bill name (More Homes on the Market Act) was added to
  the paragraph above it as well.


**From the 2026-09-17 rebuilds:**

- **Kensington Canyon:** David's new "Then we had to learn how to share it." section and the deck's
  "Then home became an asset." both described owner's closets and stored belongings. Per his note to
  remove duplicates, the sentence was dropped from the older deck section; his new section keeps it.
  The deck's "Preserve what made it special." section is gone (superseded by the renovation story).
- **Vista Voltaire:** the deck's five sections, including "A price reduction is not a business plan.",
  were replaced by his new sequence, which ends on "Not the outcome we planned." If he wants the old
  closing lesson back, it is one block to add. The Celebrity Vacation Homes link currently points at
  the CVH home page; send the Vista Voltaire listing URL to deep-link it.
- **About page:** his 2026-09-16 copy replaces the approved deck's About copy wholesale (hero, moving
  story, career, The Cole, license, today, community). The home page teaser sections still use the
  deck. Toy-drive figures (200 guests, 300 toys in 2024; 230 toys in 2025) are his; the "75,000
  lights" and "15th annual" are his. Public figures named in captions (Assemblymember Chris Ward,
  Karine Jean-Pierre, Senator Toni G. Atkins, Mayor Todd Gloria) are as he wrote them.
- **Photos for all three pages** are uploads in progress from Max; every slot prints its expected
  filename.


**For David, from the interiors chapter (2026-09-15):**

- **Unit numbers on the interior photos need confirming.** Max's SEO
  filenames do not carry the unit numbers, so the labels are a best read of
  David's descriptions: tan leather sofa + green/gold botanical mural = 104;
  white sofa + teal/mustard/rust geometric mural = 105; green armchairs and
  patio door = 106 (with the mustard-chair dining shot as 106's second);
  tan sofa + grey geometric mural = 201; blue sofa + blue/orange circles =
  202; cream sofa + rust rug + green/gold mural = 204; brown sofa + white
  chairs + teal geometric mural = 206. If any are wrong, the fix is one line
  per photo in `projects.ts` (the `U` map comments show which file is which).
- **Wallpaper binder.** David's brief suggests photographing the original
  binder and placing it before "Choice wasn't the selling point." A slot can
  be added the moment there is a photo.
- **Roles are kept exact** (Mark: furniture, wallpaper, design direction;
  David: strategy, models, assembly, prep, buyer behavior, sales). Language
  follows his rules: "included at no additional charge", never "free
  furniture". The "which one would you have chosen?" strip is hover/tap only,
  no voting or data collection.

**For David, from the Sierra Chalet hands-on chapter (2026-09-15):** built
to his sequence with "nearly 600 pounds" / "more than 500 pounds empty"; the
three phone photos have named slots waiting for Max's upload.

**For David, from the grounds chapter (2026-09-14):**

- **Wording changes to confirm.** (a) "Make the property impossible to
  ignore" was trimmed to one paragraph that hands off to the chapter, since
  the pond story now has its own telling; the staging paragraph became
  "Stage. Clean. Present. Repeat." and the open-house paragraph moved into
  "Marketing to the people who already knew the buyer." (b) His short
  one-line fragments were joined into paragraphs. (c) Body copy avoids
  contractions to match the deck ("did not", "could not"); headings keep
  them ("The difference wasn't subtle.").
- **Two captions were added:** "Two days before the grand opening." under
  the barren opener, and his suggested "A landscape that grew alongside the
  community." under Mural After. Nothing else is captioned. Keep both?
- **Involvement line** reads: Brokerage · Pricing strategy · Staging +
  presentation · Landscape stewardship + aquatic planting · Marketing +
  events. Edit freely; it is one list in `projects.ts`.
- **Sixth slider (pool):** left out, the data is there commented out. Say the
  word to add it.
- **Photos are in (2026-09-14).** The chapter opens on the cleared pond
  (Max's `102-koi-pond-during-renovation`). The gallery uses the pink lily,
  koi in clear water, orange canna, white lily, dragonfly, koi below the
  rock plantings and the small red floating bloom. The "primary yard" slider
  uses the pair David filed under Unit 104 and labeled 106 in his brief; it
  is labeled Unit 106 on the page, so tell us if that should be 104.
- **David's portraits:** the garden club section uses the black-shirt shot
  among the plantings; the blue-shirt walkway shot now fills the home page
  "Ownership" slot and the mural shot fills the About page environmental
  portrait, which also solves the home and About openers looking alike.
- **Featured reviews (Max, 2026-09-14: "take the best ones"):** pinned in
  `featuredIds`. Home: G. B. (seller) and Mike C. (buyer). About: Kathy B.
  (1031 exchange across two cities), Justin A. and Thomas Z. (both
  RealSatisfied verified) and Rachel H. (sold in San Diego, bought in Palm
  Springs). Swap any of them by editing that list.
- **"Leave a review" link:** the RealSatisfied review page Max sent is now
  a small link beside "Verified by RealSatisfied" on About only. Want it on
  the home band too, or nowhere?


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

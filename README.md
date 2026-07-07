# Krishna Associates — Website

React 19 + Vite + TypeScript + Tailwind 4. Fully static, no backend.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build       # production build → dist/
npm run preview     # preview the production build
npm run lint         # ESLint check
```

Build and lint are currently clean — 0 TypeScript errors, 0 ESLint errors, 0 npm audit vulnerabilities.

## What's built (client requirements, 1–10)

| # | Requirement | Where |
|---|---|---|
| 1 | New pricing cards (Starting From ₹X + checklist + Contact Us) | `src/data/pricing.ts`, `PricingCard.tsx` |
| 2 | Contact form with service dropdown → prefilled WhatsApp message | `ContactFormSection.tsx` |
| 3 | Trust badges strip (Trusted by Taxpayers / Quick Support / Experienced Professionals) | `src/data/home.ts` → `trustBadges` |
| 4 | Home "About" section rewrite + 4 stat boxes + "Get Free Consultation" CTA | `src/data/home.ts` → `aboutHome`, `stats` |
| 5 | "View Details" instead of "Read More", short descriptions | `ServiceCard.tsx` |
| 6 | About Us page rewrite (heading, body, removed skill bars) | `src/data/about.ts`, `AboutPage.tsx` |
| 7 | Footer: new paragraph under logo, "Explore Krishna Associates" heading | `src/data/footer.ts` |
| 8 | Footer: "Business Hours" relabel, new copyright line | `src/data/footer.ts`, `src/constants/site.ts` |
| 9 | Map embed below the contact form | `MapSection.tsx` |
| 10 | "Need Help" block removed from service detail pages | `ServiceDetailPage.tsx` (rebuilt from scratch — no such block exists) |

## Still needs from the client — placeholders in place, swap and go

1. **Business address** — used in the footer and the map embed.
   File: `src/constants/site.ts` → `CONTACT.address` and `CONTACT.mapEmbedUrl`.
   Get the real embed URL from Google Maps → Share → Embed a map → copy the `src` from the iframe it gives you, paste as `mapEmbedUrl`.

2. **Real photos.** Every image in `public/images/` is an SVG placeholder I generated
   (on-brand colors, no stock photo access from this environment). Client mentioned
   wanting better photos on service pages specifically — drop real files in with the
   **same filenames** listed below and nothing else needs to change:
   - `public/images/hero/hero-1.svg`, `hero-2.svg`, `hero-3.svg`
   - `public/images/services/{gst-registration, gst-return-filing, income-tax-return, salary-itr-1, mutual-fund, insurance}.svg`
   - `public/images/about/team.svg`, `about-home.svg`
   - `src/assets/images/logo.svg` — replace with the real Krishna Associates logo file
   You can drop in `.jpg`/`.png` instead of `.svg` — just update the extension in
   `src/data/services.ts`, `src/data/home.ts`, `src/data/about.ts` and the one `<img>`
   reference in `AboutHomeSection.tsx` to match.

3. **Business Compliance service** — dropped from this build since it wasn't in the
   new pricing spec. If it's still active, add an entry to `src/data/services.ts`
   (and a pricing card in `src/data/pricing.ts` if it needs one) — everything else
   (nav, footer, contact dropdown, service grid) picks it up automatically.

4. **Sunday hours** — kept as "CLOSED" in the footer since nothing said to remove it.
   `src/constants/site.ts` → `HOURS.weekend` if that needs to change.

## Content — all of it lives in `src/data/`

Nothing is hardcoded in components. To change copy, prices, services, or contact
info, edit the relevant file in `src/data/` or `src/constants/site.ts` — it flows
through every page, the footer, the nav, and the contact form dropdown automatically.

## Architecture notes

- **Icons**: `src/utils/icons.tsx` uses an explicit registry, not a wildcard import
  from lucide-react — wildcard imports defeat tree-shaking and were bloating the
  bundle by ~800KB. Adding a new dynamic icon (referenced by string name in a data
  file) means importing it and adding it to the registry in that file.
- **Routes are lazy-loaded** (`src/App.tsx`) except the home page — keeps the initial
  JS payload small. Main bundle is 282KB minified / 90KB gzipped.
- **WhatsApp routing**: every "Contact Us" / "View Details" / form submission builds
  a `wa.me` link via `buildWhatsAppUrl()` in `src/constants/site.ts` with a message
  specific to the service — this is what powers requirement #2.

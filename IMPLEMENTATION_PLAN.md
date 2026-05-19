# Alexander Moses Portfolio — Full Implementation Plan

**Brand:** Alexander Moses (Graphic Designer & Creative Brand)  
**Goal:** Premium, conversion-focused portfolio — **static frontend only** (no database, no admin panel, no API routes).  
**Content updates:** Edit `src/lib/constants.ts` and `src/data/portfolio.json`, add images to `public/portfolio/`, then redeploy.  
**Status:** Phase 1 complete — follow phases in order; do not skip steps marked **Required**.

---

## Table of Contents

1. [Brand & Content Setup](#1-brand--content-setup)
2. [Tech Stack Recommendation](#2-tech-stack-recommendation)
3. [Project Structure](#3-project-structure)
4. [Design System](#4-design-system)
5. [Static Content Management](#5-static-content-management)
6. [Phase-by-Phase Build](#6-phase-by-phase-build)
7. [Section Specifications](#7-section-specifications)
8. [Extra Features Checklist](#8-extra-features-checklist)
9. [SEO & Performance](#9-seo--performance)
10. [Testing & Launch](#10-testing--launch)
11. [Post-Launch Maintenance](#11-post-launch-maintenance)
12. [Master Feature Checklist](#12-master-feature-checklist)

---

## 1. Brand & Content Setup

Complete this **before** coding. Gather assets into a `/brand-assets` folder (not committed if large; use cloud storage links in CMS).

| Field | Your Value (fill in) | Used In |
|-------|----------------------|---------|
| Brand Name | Alexander Moses / [Studio name if different] | Logo area, footer, meta title |
| Designer Name | Alexander Moses | About, testimonials attribution |
| Logo | PNG/SVG, light + dark variants | Nav, footer, favicon source |
| Brand Colors | Pick Option 1, 2, or 3 (see §4) | CSS variables |
| Tagline | e.g. *Creative Designs That Make Brands Stand Out* | Hero, footer |
| WhatsApp Number | +[country][number] | CTA, floating button, contact |
| Email | your@email.com | Contact, footer |
| Instagram | full URL | Social icons |
| Behance/Portfolio | full URL | Social icons, hero secondary link |
| Hero headline | From prompt or custom | Hero |
| Hero subheadline | From prompt or custom | Hero |
| Designer photo | High-res portrait or mockup | Hero |
| Portfolio images | Organized by category (see §7.4) | `public/portfolio/` + `portfolio.json` |

**Required deliverables before Phase 2:** logo files, color choice, all contact/social URLs, at least 6 portfolio images (2 per category minimum), 3 testimonial texts, pricing copy for 3 packages.

---

## 2. Tech Stack Recommendation

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js** (App Router) | SEO, fast static pages, no server required |
| Language | **TypeScript** | Type-safe content and components |
| Styling | **Tailwind CSS** + CSS variables | Dark mode, responsive, premium spacing |
| Animation | **Framer Motion** | Hero, cards, page load, scroll reveals |
| Icons | **Lucide React** | Service cards, UI |
| Content | **`constants.ts` + `portfolio.json`** | All copy and gallery — edit locally, redeploy |
| Contact | **WhatsApp + `mailto:` + social links** | No backend form handler |
| Image optimization | **next/image** + files in `public/` | Fast loading |
| Deployment | **Vercel** (or Netlify) | Static export friendly |

**No backend:** No Supabase, no `/api` routes, no admin dashboard, no server-side form email.

---

## 3. Project Structure

```
mr-alex-website/
├── public/
│   ├── fonts/              # Poppins, etc. (or next/font)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout, fonts, theme provider
│   │   ├── page.tsx        # Home (all sections)
│   │   ├── loading.tsx     # Page loading animation
│   │   ├── globals.css     # CSS variables, base styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky nav
│   │   │   ├── Footer.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── WhatsAppFloat.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Pricing.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Lightbox.tsx
│   │       ├── SectionHeading.tsx
│   │       └── PageLoader.tsx
│   ├── data/
│   │   ├── portfolio.json  # Gallery projects
│   │   └── README.md
│   ├── lib/
│   │   ├── constants.ts    # Brand, services, pricing, testimonials
│   │   └── utils.ts
├── public/
│   └── portfolio/          # Portfolio image files
├── .env.local.example      # Optional public vars only
├── IMPLEMENTATION_PLAN.md  # This file
└── package.json
```

---

## 4. Design System

### 4.1 Color palette (choose one — **Required**)

**Option 1 (recommended for luxury creative):**
- `--bg-primary: #0F0F0F`
- `--text-primary: #FFFFFF`
- `--accent: #D4AF37` (gold)

**Option 2:** Navy `#111827`, Cyan `#06B6D4`, Off-white `#F9FAFB`  
**Option 3:** Charcoal `#1E1E1E`, Purple `#7C3AED`, Gray `#E5E7EB`

Define in `globals.css`:
```css
:root { /* light */ }
.dark { /* dark mode overrides */ }
```

### 4.2 Typography (**Required**)

| Use | Font | Weight |
|-----|------|--------|
| Headings | Poppins or Montserrat | 600–700 |
| Body | Inter or Satoshi | 400–500 |
| Accent labels | Same as body, uppercase tracking | 500 |

Load via `next/font/google` (Poppins + Inter minimum).

### 4.3 Spacing & layout rules

- Section padding: `py-20 md:py-28`
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card border-radius: `rounded-2xl`
- Consistent hover: `transition-all duration-300`, subtle scale or border glow on accent

### 4.4 Dark mode (**Required**)

- `next-themes` with `class` strategy on `<html>`
- Toggle in navbar
- Logo: use variant or CSS filter for contrast
- All sections must be tested in both themes

---

## 5. Static Content Management

All content lives in the repo — no database.

### 5.1 Where to edit what

| Content | File | Notes |
|---------|------|-------|
| Brand, nav, hero, about, services, pricing, testimonials | `src/lib/constants.ts` | Already seeded with 13 services |
| Portfolio gallery | `src/data/portfolio.json` | Add objects per project |
| Portfolio images | `public/portfolio/` | Match paths in JSON, e.g. `/portfolio/my-flyer.jpg` |
| Logo & favicon | `public/` | Reference in components |

### 5.2 Add a new portfolio project

1. Save image to `public/portfolio/your-file.jpg`  
2. Add entry to `src/data/portfolio.json`:

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "description": "Short description for lightbox.",
  "category": "flyers",
  "image": "/portfolio/your-file.jpg",
  "service": "Marketing Materials"
}
```

Categories: `flyers` | `slides` | `labels` | `brand` | `social`

3. Run `npm run build` locally to verify, then redeploy.

### 5.3 Add a new service

Add an object to the `SERVICES` array in `src/lib/constants.ts` (title, description, icon name from Lucide).

### 5.4 Initial services (already in constants.ts)

Canva Template, Slide Webinar, Product Label, PowerPoint, Stained Glass, Presentation, Juice Label, Mural, Novel, Ebook, Social Media, Brand Identity, Marketing Materials.

---

## 6. Phase-by-Phase Build

### Phase 0 — Prerequisites (Day 1)
- [ ] Node.js 20+ installed
- [ ] GitHub repo created
- [ ] Vercel account (for later deploy)
- [ ] Brand assets folder ready (§1)

### Phase 1 — Scaffold (Day 1–2) ✅
- [x] `npx create-next-app@latest` with TypeScript, Tailwind, App Router, `src/`
- [x] Install: `framer-motion`, `next-themes`, `lucide-react` (no backend packages)
- [x] Configure `globals.css` with chosen palette + dark mode variables
- [x] Set up fonts in `layout.tsx`
- [x] Create `constants.ts` with nav links: Home, About, Services, Portfolio, Process, Pricing, Contact
- [x] Create `src/data/portfolio.json` for static gallery

### Phase 2 — Layout & Global UX (Day 2–3) ✅
- [x] **Sticky Navbar** — logo, links, Hire Me CTA, theme toggle, mobile hamburger
- [x] **Smooth scrolling** — `scroll-behavior: smooth` + offset for sticky header (`scroll-mt-24` on section ids)
- [x] **Footer** — logo, quick links, socials, copyright, short brand statement
- [x] **Floating WhatsApp** — fixed bottom-right, `https://wa.me/[number]?text=...`
- [x] **Page loading animation** — `loading.tsx` + optional full-screen loader on first paint (Framer Motion fade)
- [x] **PageLoader component** — brand logo pulse, dismiss on mount

### Phase 3 — Public Sections (Day 3–7) ✅

Build in this order (each section = component + section `id` for nav):

| Order | Section | Data source |
|-------|---------|-------------|
| 1 | Hero | `constants.ts` + image in `public/` |
| 2 | About | `constants.ts` |
| 3 | Services | `constants.ts` → `SERVICES` |
| 4 | Portfolio | `portfolio.json` + `public/portfolio/` |
| 5 | Testimonials | `constants.ts` → `TESTIMONIALS` |
| 6 | Process | `constants.ts` → `PROCESS_STEPS` |
| 7 | Pricing | `constants.ts` → `PRICING_PACKAGES` |
| 8 | Contact | WhatsApp, email, socials (no API form) |

### Phase 4 — Polish (Day 7–9) ✅
- [x] Framer Motion: scroll-triggered fades on sections
- [x] Service card hover animations
- [x] Portfolio grid hover + lightbox
- [x] Testimonial carousel (optional) or grid
- [x] Process timeline / step cards
- [x] Pricing card highlight on "Standard" (optional)

### Phase 5 — SEO, Performance, Deploy (Day 9–11)
- [ ] See §9
- [ ] Deploy to Vercel (static — no backend env vars required)
- [ ] Custom domain + SSL

---

## 7. Section Specifications

Do **not** skip any subsection below.

### 7.1 Hero Section (**Required**)

**Includes:**
- [ ] Large headline (from `constants.ts` → `HERO`)
- [ ] Short brand statement / subheadline
- [ ] CTA: **View Portfolio** → `#portfolio`
- [ ] CTA: **Hire Me** → `#contact` or WhatsApp
- [ ] Designer image or creative mockup (`next/image`, priority load)
- [ ] Animated background elements (gradient orbs, grid, or floating shapes via Framer Motion)

**Copy defaults (from prompt):**
- Headline: *Creative Designs That Make Brands Stand Out*
- Subheadline: *We create premium slide decks, flyers, product labels, presentation designs, and powerful brand visuals that help businesses grow.*

**Acceptance criteria:** Mobile stacks image below text; CTAs full-width on small screens; animations respect `prefers-reduced-motion`.

---

### 7.2 About Section (**Required**)

**Includes:**
- [ ] Short professional bio
- [ ] Years of experience (stat badge)
- [ ] Creative strengths (3–5 bullet or icon list)
- [ ] Trust statement — why clients should choose you

**Example line:** *I help businesses communicate visually through high-converting and premium graphic designs that attract attention and build trust.*

**Layout:** Split — image left, text right (swap on mobile).

---

### 7.3 Services Section (**Required**)

**Includes:**
- [ ] Premium cards in responsive grid (1 / 2 / 3 columns)
- [ ] Each card: title, short description, Lucide icon, hover animation
- [ ] All 13 initial services; **add more in `constants.ts`**

**Hover:** lift (`translateY`), border accent, icon color shift.

**Optional enhancement:** Click service → filter portfolio by `service_id`.

---

### 7.4 Portfolio Showcase (**Required**)

**Categories (filter tabs):**
- [ ] Flyers
- [ ] Presentation Slides
- [ ] Product Labels
- [ ] Brand Designs
- [ ] Social Media Graphics
- [ ] All (default)

**Layout:**
- [ ] CSS Grid or masonry (e.g. `columns-` or dedicated library)
- [ ] Lightbox/modal on click — title + description
- [ ] Hover: overlay, zoom, or title slide-up

**Data:** Import from `src/data/portfolio.json`. Add images to `public/portfolio/` and redeploy.

---

### 7.5 Testimonials Section (**Required**)

**Includes:**
- [ ] 3–6 testimonials
- [ ] Each: client name, company, review text, star rating (1–5)

**UI:** Cards with gold/accent stars; optional autoplay carousel on desktop.

---

### 7.6 Process Section (**Required**)

**Steps (exactly four):**
1. Discovery  
2. Concept Design  
3. Revisions  
4. Final Delivery  

**UI:** Horizontal timeline on desktop; vertical step cards on mobile. Numbered steps with icons.

---

### 7.7 Pricing Packages Section (**Required**)

**Three packages:**

| Package | Suggested contents |
|---------|-------------------|
| **Basic** | 1–2 deliverables, 1 revision, X-day delivery, price placeholder |
| **Standard** | More deliverables, 2–3 revisions, faster delivery — **highlight as popular** |
| **Premium** | Full brand kit / unlimited revisions placeholder, priority delivery |

**Each card:**
- [ ] Feature list (checkmarks)
- [ ] Delivery time
- [ ] Price placeholder (e.g. "From $XXX" or "Contact for quote")
- [ ] CTA button → `#contact` with package name in query or form hidden field

---

### 7.8 Contact Section (**Required**)

**Includes:**
- [ ] Headline CTA: *Let's Create Something Amazing Together*
- [ ] WhatsApp button (prominent) — opens chat with pre-filled message
- [ ] Social icons: Instagram, Behance
- [ ] Email displayed + `mailto:` link
- [ ] Optional: simple client-side form via [Formspree](https://formspree.io) embed (no custom server)

**No backend:** No `/api/contact`, no database, no Resend.

---

### 7.9 Footer (**Required**)

**Includes:**
- [ ] Logo
- [ ] Quick links (mirror nav)
- [ ] Social links
- [ ] Copyright © [year] Alexander Moses
- [ ] Short brand statement (tagline repeat)

---

## 8. Extra Features Checklist

| Feature | Implementation notes | Status |
|---------|---------------------|--------|
| Dark mode | `next-themes`, toggle in nav | ☐ |
| Smooth scrolling | CSS + section IDs | ☐ |
| Page loading animation | `loading.tsx` + PageLoader | ☐ |
| Sticky navigation | `sticky top-0 z-50 backdrop-blur` | ☐ |
| Floating WhatsApp | Fixed button, opens `wa.me` | ☐ |
| SEO optimization | §9 | ☐ |
| Fast-loading images | `next/image`, WebP, sizes prop | ☐ |
| Fully responsive | Test 320px–1920px | ☐ |
| **Editable services** | `src/lib/constants.ts` | ☐ |
| **Editable portfolio** | `src/data/portfolio.json` + `public/portfolio/` | ☐ |

---

## 9. SEO & Performance

### 9.1 Metadata (`layout.tsx` / `page.tsx`)
- [ ] `title`: "Alexander Moses | Premium Graphic Design & Brand Visuals"
- [ ] `description`: 150–160 chars with keywords (graphic design, presentations, labels, brand identity)
- [ ] `openGraph` + `twitter` images (1200×630)
- [ ] `metadataBase` for production URL
- [ ] Favicon + apple-touch-icon

### 9.2 Technical SEO
- [ ] Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, one `<h1>`
- [ ] `sitemap.xml` (Next.js `app/sitemap.ts`)
- [ ] `robots.txt`
- [ ] JSON-LD `Person` or `ProfessionalService` schema on homepage

### 9.3 Performance targets
- [ ] Lighthouse Performance ≥ 90
- [ ] LCP < 2.5s (optimize hero image)
- [ ] Lazy load below-fold images
- [ ] Minimize JS on initial load (dynamic import lightbox only)

---

## 10. Testing & Launch

### 10.1 Functional tests
- [ ] All nav links scroll to correct section
- [ ] WhatsApp opens correct number on mobile & desktop
- [ ] Email mailto link works
- [ ] Lightbox opens/closes with keyboard (Esc)
- [ ] New portfolio JSON entry appears after rebuild
- [ ] Dark mode persists on reload

### 10.2 Responsive breakpoints
- [ ] 320px (small phone)
- [ ] 768px (tablet)
- [ ] 1024px (laptop)
- [ ] 1440px+ (desktop)

### 10.3 Browsers
- [ ] Chrome, Safari, Firefox, Edge
- [ ] iOS Safari, Android Chrome

### 10.4 Launch checklist
- [ ] Deploy to Vercel (optional: `NEXT_PUBLIC_WHATSAPP_NUMBER` only)
- [ ] Custom domain DNS
- [ ] Google Search Console submit sitemap
- [ ] Update Instagram/Behance bio with live URL

---

## 11. Post-Launch Maintenance

| Task | Frequency |
|------|-----------|
| Add new portfolio projects | Edit `portfolio.json` + images, redeploy |
| Add new service offerings | Edit `constants.ts`, redeploy |
| Update pricing | Edit `constants.ts` |
| Refresh testimonials | Edit `constants.ts` |
| Dependency updates | Monthly `npm audit` |

---

## 12. Master Feature Checklist

Use this as your final gate before calling the site "done."

### Content & brand
- [ ] Brand name: Alexander Moses
- [ ] Logo in nav and footer
- [ ] Colors applied (full site)
- [ ] Tagline and contact info correct

### Sections (9/9)
- [ ] 1. Hero — headline, subheadline, 2 CTAs, image, animated BG
- [ ] 2. About — bio, experience, strengths, trust
- [ ] 3. Services — 13+ cards, icons, hover (from constants)
- [ ] 4. Portfolio — 5 categories, grid/masonry, lightbox
- [ ] 5. Testimonials — 3–6 with stars
- [ ] 6. Process — 4 steps, timeline/cards
- [ ] 7. Pricing — Basic, Standard, Premium
- [ ] 8. Contact — WhatsApp, socials, email (no backend form)
- [ ] 9. Footer — logo, links, socials, copyright, statement

### Extra features (8/8)
- [ ] Dark mode
- [ ] Smooth scrolling
- [ ] Page loading animation
- [ ] Sticky nav
- [ ] Floating WhatsApp
- [ ] SEO
- [ ] Fast images
- [ ] Fully responsive

### Fonts
- [ ] Poppins (or Montserrat) for headings
- [ ] Inter (or Satoshi) for body

---

## Environment Variables (optional)

All contact info can live in `src/lib/constants.ts`. Optional `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
```

---

## Suggested Timeline Summary

| Phase | Days | Outcome |
|-------|------|---------|
| 0–1 | 1–2 | Project scaffold + design tokens ✅ |
| 2 | 1 | Nav, footer, WhatsApp, loader |
| 3 | 4–5 | All public sections |
| 4 | 2 | Animations + polish |
| 5 | 1–2 | SEO, test, deploy |

**Total estimate:** 9–11 focused days for one developer.

---

## Next Step After This Plan

1. Fill in §1 brand table with your real URLs, colors, and assets.  
2. Confirm color option (1, 2, or 3).  
3. Start **Phase 1** scaffold commands.  
4. When ready, ask to implement Phase 1–2 in the repo and the plan will be executed section by section.

---

*Document version: 1.1 — Static frontend only (no backend/admin).*

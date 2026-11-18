---
name: 3dvue-architecture
description: >-
  Architectural blueprint, design system, conversion formula, and UX patterns based on the deep audit of 3DVue.fr.
  Use this skill whenever designing or creating modern high-converting websites featuring interactive 3D or product viewers,
  sticky scroll storytelling, dual SaaS/Studio offerings, dark immersion contrast sections, and high-performance Tailwind layouts.
---

# 3DVue Architectural Blueprint & High-Converting Web Design System

This skill encapsulates the full UX/UI architecture, design tokens, conversion mechanics, and technical structure derived from the comprehensive audit of [3DVue.fr](https://www.3dvue.fr/). Use it as a turnkey guide to design, structure, and develop similar high-impact showcase websites.

---

## 1. Core Strategic & Conversion Formula

The 3DVue architecture is built on three conversion pillars:

1. **Immediate Product-Led Immersion (Above-the-Fold)**:
   - Never force the user to "imagine" what the product does.
   - The top-right Hero container hosts a fully functional, real-time interactive product simulator or 3D viewer with clickable material swatches and instant feedback.
2. **Dual-Track Customer Journey (SaaS vs. Custom Studio)**:
   - **Track 1 (Self-Service / Small Business)**: Low-friction, clear monthly price, instant free trial ("No credit card required").
   - **Track 2 (Enterprise / Custom Agency)**: High-ticket custom modeling, bespoke integration, instant 30-minute consultation booking.
3. **Alternating Visual Rhythm (Light / Soft / Dark Immersion)**:
   - Page sections cycle through pure white (`#FFFFFF`), tinted soft lilas/gray (`#F7F6FF` or `#F8FAFC`), and immersive dark navy/black (`#0D0618` to `#031B33`) to continually re-engage visitor focus.

---

## 2. Design System & CSS Tokens

### A. Color Palette
```css
:root {
  /* Primary Brand Accent */
  --color-primary: #7C3AED;           /* Electric Violet (or #033B6E for Deep Navy) */
  --color-primary-hover: #6D28D9;
  
  /* Signature Gradient */
  --gradient-accent: linear-gradient(135deg, #7C3AED 0%, #A855F7 100%);
  
  /* Backgrounds */
  --bg-light: #FFFFFF;
  --bg-soft: #F7F6FF;                 /* Subtle tinted break section */
  --bg-dark-immersion: #0D0618;       /* Deep contrast section */
  --bg-dark-card: #130A24;
  
  /* Typography */
  --text-main: #0D0618;
  --text-muted: #6B7280;
  --text-light: #FFFFFF;
  --badge-bg: #EDE9FE;
  --badge-text: #7C3AED;
}
```

### B. Typography
* **Primary Font**: `DM Sans` or `Plus Jakarta Sans` (weights 400, 500, 600, 700, 800).
* **Headings**:
  - `H1`: 44px - 56px, weight 800, tight line-height (`1.12` - `1.15`), negative letter-spacing (`-0.025em`).
  - `H2`: 32px - 40px, weight 700, tracking tight.
  - `H3`: 20px - 24px, weight 600/700.
* **Keywords**: Highlighted with `background-clip: text; color: transparent; background-image: var(--gradient-accent);`.

### C. Shapes, Border Radii & Elevation
* **Pill Badges**: `border-radius: 9999px;` with pulsed status dot.
* **Buttons**: `border-radius: 12px;` with subtle scale transition on hover (`scale-105 active:scale-95`).
* **Cards & Containers**: `border-radius: 20px - 24px;` with subtle colored glow shadow:
  `box-shadow: 0 10px 30px -10px rgba(124, 58, 237, 0.08);`.

---

## 3. The 14-Section Master Anatomy

```text
01. Sticky Header          -> Glassmorphism blur (backdrop-filter: blur(16px)), Logo + Links + Direct CTA
02. Hero 50/50 Banner      -> Left: Tagline + 3 checkmarks + Double CTA | Right: Interactive Viewer / Simulator
03. Social Proof Marquee   -> Continuous infinite marquee of client logos / business types + 3 key stat badges
04. Dual-Track Offerings   -> Side-by-side comparison cards (SaaS self-serve vs. Bespoke agency)
05. Feature Matrix Table   -> Direct checkmark comparison of deliverables and turnaround times
06. Interactive Splitter   -> Before/After drag slider (e.g. Raw 3D wireframe vs. Photorealistic studio packshot)
07. Dark Immersion Section -> High-contrast dark background (#0D0618) presenting the 4 core technology benefits
08. Sticky-Scroll Process  -> Left: 4 to 6 numbered progress steps | Right: Sticky viewport updating UI visuals
09. Vertical Demonstrators -> Industry-specific examples (e.g. Furniture, Apparel, Technical products)
10. Key Impact Metrics     -> Giant gradient numbers (+30% conversion, -40% returns, 48H turnaround)
11. Testimonials & Social  -> 5-star ratings, quote cards with verified customer photo/logo
12. Dynamic FAQ Accordion  -> Smooth accordion resolving objection handling (formats, rights, pricing)
13. Dual Contact Funnel    -> Left: Direct coordinates & map / Right: Instant quote estimator & WhatsApp/Calendar booking
14. 4-Column Structured Footer -> Brand pitch, product links, company legal, live contact & copyright
```

---

## 4. Reusable Component Patterns

### A. Two-Column Asymmetric Hero (Tailwind CSS)
```html
<section class="relative bg-white pt-16 pb-20 overflow-hidden border-b border-slate-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    
    <!-- Left: Pitch & Conversion -->
    <div class="lg:col-span-7">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-6">
        <span class="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse"></span>
        Platform & Solutions
      </div>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
        Supercharge your sales with <span class="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">Interactive 3D</span>
      </h1>
      <p class="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
        Increase engagement, eliminate hesitation, and accelerate orders with real-time product visualization.
      </p>
      
      <!-- 3 Reassurance Checks -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-sm font-semibold text-slate-800">
        <div class="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
          <i class="fa-solid fa-check text-emerald-600"></i> No Developer Needed
        </div>
        <div class="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
          <i class="fa-solid fa-check text-emerald-600"></i> Augmented Reality
        </div>
        <div class="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
          <i class="fa-solid fa-check text-emerald-600"></i> 48H Fast Delivery
        </div>
      </div>

      <!-- Action Group -->
      <div class="flex flex-col sm:flex-row gap-4 mb-4">
        <a href="#trial" class="px-7 py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold shadow-lg transition-all text-center">
          Start Free Trial →
        </a>
        <a href="#custom" class="px-7 py-4 rounded-xl bg-white border-2 border-slate-200 hover:border-[#7C3AED] text-slate-800 font-bold transition-all text-center">
          Custom Solution
        </a>
      </div>
    </div>

    <!-- Right: Interactive Product Simulator / Viewer -->
    <div class="lg:col-span-5">
      <div class="relative bg-slate-50 rounded-3xl border border-slate-200 p-6 shadow-2xl">
        <div id="product-canvas" class="w-full aspect-[4/3] bg-white rounded-2xl flex items-center justify-center overflow-hidden">
          <!-- 3D Canvas or Dynamic Preview -->
        </div>
        <!-- Variant Swatches -->
        <div class="mt-4 flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100">
          <span class="text-xs font-bold text-slate-700">Material :</span>
          <div class="flex items-center gap-2">
            <button class="w-6 h-6 rounded-full bg-amber-700 ring-2 ring-purple-600 ring-offset-2"></button>
            <button class="w-6 h-6 rounded-full bg-slate-900"></button>
            <button class="w-6 h-6 rounded-full bg-slate-200"></button>
          </div>
          <button class="text-xs font-bold text-[#7C3AED] hover:underline flex items-center gap-1">
            <i class="fa-solid fa-cube"></i> View in AR
          </button>
        </div>
      </div>
    </div>

  </div>
</section>
```

### B. Sticky-Scroll Storytelling Layout
* **HTML Structure**:
  ```html
  <div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
    <!-- Scrolling text steps (7 cols) -->
    <div class="lg:col-span-7 space-y-24 py-12">
      <div class="step-card" data-step="1">...</div>
      <div class="step-card" data-step="2">...</div>
      <div class="step-card" data-step="3">...</div>
    </div>
    <!-- Sticky visual stage (5 cols) -->
    <div class="lg:col-span-5">
      <div class="sticky top-28 w-full aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-xl">
        <img id="sticky-visual" src="step1.png" alt="Dynamic illustration" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
  ```
* **JavaScript IntersectionObserver**: Listen to which `.step-card` intersects the viewport and swap `#sticky-visual.src` smoothly.

---

## 5. Technical Rules for Maximum Performance & SEO

1. **Decouple Heavy Assets**:
   - Never embed multi-megabyte 3D canvases directly into the critical initial render path without placeholder/lazy-loading.
   - Use sandboxed subdomains (e.g. `demo.site.com`) or lazy-load Three.js / Model-Viewer on first interaction.
2. **Optimize Images & Web Fonts**:
   - Convert all photographs to WebP or quality-optimized JPEGs (target < 150KB per thumbnail).
   - Use standard vector icon libraries (FontAwesome 6 or Lucide SVG) instead of casual emojis for professional credibility.
3. **Structured Data (Schema.org JSON-LD)**:
   - Always include `ProfessionalService` or `Organization` + `FAQPage` + `OfferCatalog` in `<head>` to guarantee Google Rich Snippets.
4. **Security Best Practices**:
   - Ensure every `target="_blank"` anchor uses `rel="noopener noreferrer"`.
   - Add security headers: `X-Content-Type-Options: nosniff` and `Referrer-Policy: strict-origin-when-cross-origin`.

---

## 6. How to Activate & Use This Skill

Whenever you start a new website or landing page project, ask:
* *"Applique la structure 3DVue à mon projet"* or *"Utilise le blueprint 3dvue-architecture pour créer mon site"*.
* The agent will immediately configure the 14 sections, set up the dual-track conversion funnel, generate the 50/50 hero with interactive simulator, and build out the light/dark contrast rhythm.

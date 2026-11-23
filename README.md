# FORM & FUNCTION — Creative Studio Agency Website

A complete, production-quality creative agency homepage built for the **Next.js Developer Internship Task**, implementing the exact required **four-section architecture** with **IBM Plex Sans**, modern Swiss-inspired typography, and responsive component design.

---

## ✦ 1. Design Direction & Art Direction

- **Visual Style**: Minimal editorial, modern Swiss-inspired aesthetics.
- **Colour Palette**:
  - Background: `#FFFFFF`
  - Secondary Background: `#F7F7F5`
  - Primary Text: `#111111`
  - Secondary Text: `#666666`
  - Borders: `#E5E5E5`
  - Buttons: `#111111`
  - Button Text: `#FFFFFF`
- **Zero Generic AI Artifacts**: Strictly no gradients, no glassmorphism, no purple/blue/orange neon accents, no glowing elements, and no decorative blobs.

---

## ✦ 2. Typographic System (IBM Plex Sans)

- **Primary Typeface**: `IBM Plex Sans` loaded via `next/font/google` (`IBM_Plex_Sans`).
- **Weights**:
  - Regular (`400`): Large headlines, body copy, and narrative text.
  - Medium (`500`): Section headings, project titles, service titles, and navigation.
  - Semibold (`600`): Specific emphasis and active states.
- **Fluid Scale (`clamp()`)**:
  - **Hero Heading**: `clamp(2.5rem, 5.2vw, 4.5rem)` (64–76px desktop, 40px mobile).
  - **Section Headings**: `clamp(2rem, 3.5vw, 3.25rem)` (42–52px desktop, 32px mobile).
  - **Project Headings**: `clamp(1.35rem, 1.8vw, 1.75rem)` (22–28px).
  - **Service Titles**: `clamp(1.25rem, 1.6vw, 1.5rem)` (20–24px).
  - **Body Copy**: Fixed `16px` (`line-height: 1.6`, natural reading widths).
  - **Navigation**: Fixed `14px` (`font-medium`).
  - **Small Labels**: Fixed `12px` (`uppercase`, tracking `0.04em`).

---

## ✦ 3. Exact Four-Section Architecture

The application strictly implements the four required sections:

### 01. Header (`components/Header.tsx`)
- Left: `FORM & FUNCTION` wordmark.
- Right: Navigation links (Work, Services, Contact) and a primary "Contact" action button.
- Accessible skip-to-main-content link (`#main-content`).
- Responsive mobile drawer navigation with body-scroll locking.

### 02. Section 01 — Hero (`components/Hero.tsx`)
- Brand name: `FORM & FUNCTION`.
- Headline: *"Digital experiences, made with purpose."*
- Supporting copy: *"We combine strategy, design and technology to create meaningful digital experiences for ambitious brands."*
- Primary CTA: *"Explore Our Work"* (`#work`) and secondary CTA: *"Contact"* (`#contact`).
- Asymmetric editorial composition with featured case preview (*Vahlen Atelier*).
- Subtle entrance animation via Framer Motion.

### 03. Section 02 — Services (`components/Services.tsx`)
- Section heading: *"Services crafted for distinction."*
- 4 core agency services:
  1. **UI/UX Design**
  2. **Web Development**
  3. **Brand Identity**
  4. **Digital Strategy**
- Editorial numbered list with hairline `#E5E5E5` dividers, clean Lucide icons, and deliverables checklists.
- Polished hover transitions: Service title shifts (`translate-x-1.5`), arrow moves right (`translate-x-2`), background shifts to `#FFFFFF`, smooth 300ms duration.

### 04. Section 03 — Portfolio (`components/Portfolio.tsx` & `components/ProjectModal.tsx`)
- Section heading: *"Selected work."*
- 4 conceptual case studies with mixed image proportions (7-col wide, 5-col portrait, 5-col landscape, 7-col wide):
  1. **Premium Fashion E-commerce** (*Vahlen Atelier*)
  2. **Fintech Digital Experience** (*Strata Capital*)
  3. **Hospitality Website** (*Kinetic Haven*)
  4. **Technology Startup Platform** (*Synapse Quantum*)
- Clearly labeled as conceptual work.
- Gentle image zoom on hover (`scale-[1.03]`), arrow appearance, and subtle title shift.
- Accessible case study detail modal dialog with keyboard `Escape` support.

### 05. Section 04 — Contact (`components/Contact.tsx`)
- Heading: *"Have a project in mind?"*
- Supporting copy: *"Let's turn your next idea into something meaningful."*
- Required input fields: **Name**, **Email**, **Message**, and **Submit button**.
- Full client-side validation with real-time error states, loading indicator, and success confirmation payload card.
- Transparent note confirming client-side verification without fake server email spoofing.

### 06. Footer (`components/Footer.tsx`)
- `FORM & FUNCTION` wordmark, site directory, studio locations (Zürich, London, Tokyo), social links, and smooth *"Back to top"* scroll button.

---

## ✦ 4. Interactive & Hover System

- **Link Underline Animation**: Micro-borders transition smoothly across desktop navigation.
- **Button Micro-Interactions**: Subtle arrow translations on hover.
- **Image Hover Scaling**: Curated images scale gently to ~1.03 over 500ms without dark muddy overlays.
- **Keyboard Accessibility**: Visible focus outlines (`outline: 1.5px solid #111111`) across interactive elements.
- **Respect for User Preferences**: Animations honor `prefers-reduced-motion`.

---

## ✦ 5. Responsive Breakpoint Validation

The responsive layout is tested and validated across:
- **1440px / 1280px Desktop**: Full asymmetric grid, comfortable white space, multi-column editorial pairings.
- **1024px / 768px Tablet**: Adaptive column spans, balanced typography line heights.
- **375px Mobile**: Single-column vertical stacks, touch-friendly touch targets (min 44px), working navigation drawer, zero horizontal overflow.

---

## ✦ 6. Getting Started

### Prerequisites

- Node.js `18.18+` or `20+` (Tested on Node `v24`)
- npm, pnpm, or yarn

### Installation & Run

```bash
# Clone and navigate to workspace
cd internship

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

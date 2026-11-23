# FORM & FUNCTION
> **Digital Design & Development Studio**  
> *Designing with purpose. Building with function.*

A production-grade, editorial-style creative studio homepage built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## 1. Design Direction & Core Philosophy

The website is crafted with a restrained, human-designed Swiss graphic aesthetic, avoiding generic AI-generated landing page cliches (no neon gradients, no glassmorphism, no rounded cards, no generic stock photos).

- **Color System**:
  - Primary Background: `#FFFFFF`
  - Soft Panel / Card Background: `#F5F5F2`
  - Primary Typography: `#0A0A0A`
  - Muted Secondary Typography: `#6B6B66`
  - Hairline Dividers & Borders: `#E4E4DF` (1px solid borders only)
- **Geometry**: Strict 90-degree sharp corners (`border-radius: 0`) across all cards, buttons, dialogs, and image containers. Zero drop shadows.
- **Typography System** (via `next/font/google`):
  - **Headings & Logo**: `Barlow Condensed`, weights 600–700, UPPERCASE, line-height 0.88–1.0, slight negative letter spacing.
  - **Body & Paragraphs**: `Hanken Grotesk`, weights 400/500/600, 17px base, comfortable 1.6 line height.
  - **Fluid Responsive Scales**:
    - Hero Headline: `clamp(64px, 11.5vw, 176px)`
    - Section Titles: `clamp(44px, 6vw, 88px)`
    - Row / Card Titles: `clamp(30px, 3.4vw, 48px)`

---

## 2. Page Architecture & Section Breakdown

The website strictly follows the required 4-section editorial architecture:

### 1. Header (HEADER v3)
- **High-Contrast Masthead**: Fixed 80px dark bar (`#0A0A0A`) with white typography, keeping navigation consistently legible over all backgrounds.
- **Morphing Geometric Logo Mark**: The graphic symbol between *Form* and *Function* embodies the agency name:
  - **Square** = Form (at the top of the page: `--p: 0`, 0% radius).
  - **Circle** = Function (morphs into a circle with $180^\circ$ rotation dynamically over the first 500px of scroll).
- **Text-Rolling Nav Links (`.roll`)**: Vertical rolling typography interaction on hover for *Work* and *Services*.
- **Live Reading Progress Line**: A 2px white indicator along the bottom of the header displaying real-time scroll depth (`scaleX`).
- **Autohide & Reveal**: Automatically translates up on scroll down past 300px, revealing instantly on scroll up.
- **Mobile Drawer Sheet**: Responsive slide-down overlay menu for viewports $\le 820\text{px}$.

### 2. Hero Section
- **Background Atmosphere**: Full-bleed photo of soft daylight on a plaster wall with warm window shadows behind a balanced 60% overlay, paired with a subtle $\le 20\text{px}$ parallax effect.
- **Clipped Mask Motion**: The 3-line uppercase headline slides up from an overflow mask on page load (`0.9s duration, 120ms stagger`). Honors `prefers-reduced-motion`.
- **Dividing Rule & Narrative**: 1px black rule separating the display headline from a 24px editorial description and dual action buttons (*Explore Our Work* and *Let's Talk*).

### 3. Services Section (SERVICES v3 — "What We Do")
- **Staggered Staircase Grid**: 3-card layout on desktop with progressive vertical offsets (`card 2: +72px`, `card 3: +144px`) that stacks cleanly on mobile.
- **Pure CSS Black Wipe on Hover**: A `translateY(101%)` to `none` cubic-bezier transition that inverts the card background to black while adjusting text and border contrast without JavaScript.
- **Grayscale-to-Color Reveal**: Real architectural photography displayed in high-contrast grayscale on load, revealing natural color and scaling down on hover.

### 4. Portfolio Section ("Selected Work")
- **Conceptual Project Grid**: 4 curated case studies:
  1. **Fashion Forward** — *E-commerce Website*
  2. **Finova** — *Fintech Platform*
  3. **Stay Collective** — *Hospitality Website*
  4. **Nexora** — *Technology Website*
- **Interactive Case Study Modal**: Clicking any project opens an editorial modal with full-bleed imagery, discipline metadata, challenge details, and scope deliverables.
- **Explicit Conceptual Tagging**: Clear labels and footer note indicating projects are studio conceptual explorations.

### 5. Contact Section ("Have a Project in Mind?")
- **Client-Side Form Validation**: Validates Name (min 2 chars), Email (regex pattern), and Project Details (min 10 chars) with real-time error feedback on blur and submit.
- **Interactive Feedback State**: Clean submission confirmation panel with reset action, avoiding false backend submission claims.
- **Editorial Closing Text**: *"Good ideas deserve thoughtful execution."*

### 6. Footer
- Brand positioning, studio disciplines, direct contact email (`hello@formandfunction.studio`), physical coordinates (`London & Zürich`), social channel links, and formal copyright statement.

---

## 3. Project File Structure

```
internship/
├── app/
│   ├── favicon.ico             # Studio favicon
│   ├── globals.css             # Design tokens, clamp scales, animations & v3 styles
│   ├── layout.tsx              # Root HTML layout & Google Font loader
│   └── page.tsx                # Single-page layout assembling all 4 sections
├── components/
│   ├── Header.tsx              # HEADER v3 with morphing logo & progress bar
│   ├── Hero.tsx                # Hero section with masked headline animation
│   ├── Services.tsx            # SERVICES v3 staggered cards with black wipe
│   ├── Portfolio.tsx           # 4-project portfolio grid with modal trigger
│   ├── ProjectModal.tsx        # Responsive case study exploration modal
│   ├── Contact.tsx             # Validated client-side contact form
│   └── Footer.tsx              # Studio footer & contact coordinates
├── data/
│   └── content.ts              # Data source for services & portfolio projects
├── types/
│   └── index.ts                # TypeScript interfaces (ServiceItem, ProjectItem)
├── public/                     # Static icons and assets
├── next.config.ts              # Next.js configuration & remote image patterns
├── postcss.config.mjs          # Tailwind CSS PostCSS plugin integration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies and npm scripts
└── README.md                   # Comprehensive project documentation
```

---

## 4. Tech Stack

| Technology | Role |
| :--- | :--- |
| **Next.js 16.4.6** | React framework with App Router, Turbopack, and static generation |
| **React 19.3.0** | Latest React concurrent primitives and hooks |
| **TypeScript 5** | Strict end-to-end type safety |
| **Tailwind CSS v4** | Modern CSS engine with `@theme` token configuration |
| **@tailwindcss/postcss** | PostCSS pipeline for Tailwind v4 compilation |
| **Lucide React** | Clean, minimalist SVG vector icons |
| **Google Fonts** | `Barlow Condensed` and `Hanken Grotesk` via `next/font/google` |

---

## 5. Getting Started

### Prerequisites
- **Node.js**: v18.18.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. Clone or download the repository into your local workspace.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local Turbopack development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Verify TypeScript types and generate an optimized static production build:
```bash
npm run build
```

Run the production server:
```bash
npm run start
```

---

## 6. Accessibility & Motion Guidelines

- **Contrast**: All typography pairings pass WCAG AA contrast standards.
- **Focus Rings**: Custom sharp keyboard focus outlines (`outline: 1.5px solid #0A0A0A; outline-offset: 2px`).
- **Motion Safety**: Wrapped under `@media (prefers-reduced-motion: reduce)` to disable animations and transitions for users with motion sensitivities.

---

© 2026 **FORM & FUNCTION**. All rights reserved.

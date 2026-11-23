# FORM & FUNCTION — Minimal White Editorial Redesign

A complete, human-designed digital agency homepage redesigned with a **minimal white editorial aesthetic**, built with **Next.js 15+ (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## ✦ Creative Direction & Art Direction

- **Visual Direction**: Minimal white editorial inspired by independent European creative agencies, architecture monographs, and contemporary design magazines.
- **Predominant Colour Palette**:
  - Primary background: `#FFFFFF`
  - Alternate section background: `#F7F7F5`
  - Primary text: `#171717`
  - Secondary text: `#666666`
  - Borders and thin dividers: `#E5E5E5`
  - Accent: `#222222`
- **Zero AI-Generated Aesthetics**: Completely stripped away all navy-and-orange gradients, glowing shapes, floating orbs, repetitive card grids, and pill buttons.

---

## ✦ Typography System

- **Display Headings**: `Instrument Serif` (Google Fonts via `next/font/google`) featuring mixed regular and italic styles for high-craft editorial emphasis.
- **Body & Captions**: `Inter` (Google Fonts via `next/font/google`) with comfortable 15–16px sizing, natural line lengths, and left alignment.

---

## ✦ Component Architecture

1. **Header (`components/Header.tsx`)**
   - Clean white header with a thin `#E5E5E5` bottom border.
   - Refined black wordmark: **FORM & FUNCTION**.
   - Minimal navigation links in natural title case (Work, Services, About, Contact).
   - Solid black CTA button (`#171717`) with modest square corners (`rounded-[2px]`).

2. **Hero Section (`components/Hero.tsx`)**
   - White background with large, left-aligned headline in `Instrument Serif`:
     *"We build digital experiences that move businesses forward."*
   - Short, natural supporting paragraph and two restrained CTA buttons: **"Start a project"** and **"Explore our work"**.
   - Asymmetric editorial composition with the Vahlen Atelier visual and side metadata panel.

3. **Client Strip (`components/ClientStrip.tsx`)**
   - Restrained partner strip with purely fictional brand concepts (*Kronos Dynamics*, *Aura Systems*, *Velox Labs*, *Monolith Spatial*, *Archetype Protocol*, *Nexus Collective*).

4. **About Section (`components/About.tsx`)**
   - Alternating warm-white background (`#F7F7F5`).
   - Headline: *"Good design isn't decoration. It's direction."*
   - Explains the studio's concrete approach across Strategic thinking, Thoughtful design, Modern engineering, and Business-focused experiences.

5. **Services Section (`components/Services.tsx`)**
   - White background with clean numbered list format separated by thin `#E5E5E5` dividers:
     - `01. UI/UX Design`
     - `02. Web Development`
     - `03. Brand Identity`
     - `04. Digital Strategy`
   - Avoids repetitive rounded cards and unnecessary decorative icons.

6. **Portfolio Section (`components/Portfolio.tsx` & `components/ProjectModal.tsx`)**
   - Alternating background (`#F7F7F5`).
   - Asymmetric image grid mixing landscape, portrait, and wide formats for 4 conceptual case studies:
     - `01` **Vahlen Atelier** (Fashion E-Commerce & Identity)
     - `02` **Strata Capital** (Financial Technology Platform)
     - `03` **Kinetic Haven** (Modern Hospitality Brand & Booking)
     - `04` **Synapse Quantum** (Technology Startup Website)
   - Interactive modal case study viewer with accessible keyboard support.

7. **Contact Section (`components/Contact.tsx`)**
   - White background with thin-bordered form inputs (`#E5E5E5` with `#171717` focus).
   - Functional client-side validation for required fields and valid email format.
   - Clear success feedback state without fake backend email spoofing.

8. **Footer (`components/Footer.tsx`)**
   - Minimal white footer with clear directory links, studio locations (Zurich, London, Tokyo), and back-to-top navigation.

---

## ✦ Getting Started

### Prerequisites

- Node.js `18.18+` or `20+` (Tested on Node `v24`)
- npm, pnpm, or yarn

### Installation & Run

```bash
# Navigate to directory
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

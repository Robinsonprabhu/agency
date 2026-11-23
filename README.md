# FORM & FUNCTION — European Creative Agency Website

A complete, production-quality digital agency homepage designed with the layout structure, UX patterns, spacing rhythm, and component styling of a professionally art-directed European digital agency website.

Built using **Next.js 15+ (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## ✦ 1. Visual Identity & Design Principles

- **White & Warm-White Editorial Theme**:
  - Main background: `#FFFFFF`
  - Alternate background: `#F7F7F5`
  - Primary text: `#111111`
  - Secondary text: `#666666`
  - Borders: `#E5E5E5`
  - Accent: `#222222`
  - Button background: `#111111`
  - Button text: `#FFFFFF`
- **Zero Decorative Noise**: Strictly no purple/blue/orange gradients, glassmorphism, glowing shapes, floating orbs, or unnecessary drop shadows.
- **Content Authenticity**: Fictional portfolio projects are strictly marked as conceptual work. Unverified team photos, facts, testimonials, products, articles, podcast metadata, and company coordinates use explicit `[PLACEHOLDER]` markers instead of fabricated information.

---

## ✦ 2. Typography System

- **Headings**: `Instrument Serif` (Google Fonts via `next/font/google`), selectively applied for expressive editorial headlines.
- **Body, Navigation & Controls**: `Inter` (Google Fonts via `next/font/google`) with comfortable 15–16px sizing, natural line lengths, and regular weights.

---

## ✦ 3. Page Structure & Implemented Sections

The homepage follows the exact requested 12-section hierarchy:

1. **01. Header (`components/Header.tsx`)**
   - FORM & FUNCTION wordmark on the left.
   - Navigation links: Team, Services, Products, Podcast, Blog, Contact.
   - DE / EN language toggle.
   - Accessible skip-to-main-content link (`#main-content`).
   - Compact sticky design with thin `#E5E5E5` bottom border.
   - Mobile navigation drawer.

2. **02. Hero (`components/Hero.tsx`)**
   - Editorial headline: *"WE BUILD DIGITAL EXPERIENCES THAT MOVE BUSINESSES FORWARD."*
   - Supporting narrative: *"We combine strategy, design and technology to create meaningful digital experiences for ambitious brands."*
   - Primary button: *"Contact"*.
   - Left-aligned composition with generous whitespace and selected project imagery.

3. **03. Introduction / Team (`components/IntroTeam.tsx`)**
   - Section heading: *"GOOD DESIGN ISN'T DECORATION. IT'S DIRECTION."*
   - Description: *"FORM & FUNCTION brings together strategic thinking, thoughtful design and modern engineering to create digital experiences with purpose."*
   - Button: *"Our team"*.
   - Two-column editorial composition with dedicated layout space for 3 team photographs and 3 square fact graphics with `[PLACEHOLDER]` markers.

4. **04. Selected Work (`components/Portfolio.tsx` & `components/ProjectModal.tsx`)**
   - Section heading: *"Selected work."*
   - Supporting copy: *"Explore a selection of digital concepts focused on thoughtful design, usability and modern technology."*
   - Four original conceptual projects:
     - `01` **Premium Fashion E-commerce**
     - `02` **Fintech Digital Experience**
     - `03` **Hospitality Website**
     - `04` **Technology Startup Platform**
   - Large images with varied proportions, titles, categories, one-line descriptions, and interactive *"Read case study"* modal viewer.
   - Includes *"All case studies"* action link.

5. **05. Services (`components/Services.tsx`)**
   - Section heading: *"What we do."*
   - Description: *"We turn ideas into useful digital experiences through strategy, design and development."*
   - Six service tiles separated by thin `#E5E5E5` dividers:
     1. UI/UX Design
     2. Web Development
     3. Brand Identity
     4. Digital Strategy
     5. Frontend Development
     6. Digital Experiences
   - Clean typography with concrete descriptions and *"More"* links.

6. **06. Testimonials (`components/Testimonials.tsx`)**
   - Accessible testimonial slider with previous / next navigation controls and slide index indicator.
   - Formatted for portrait photograph, quote, person's name, role, and company using `[PLACEHOLDER]` markers.

7. **07. Products (`components/Products.tsx`)**
   - Heading: *"Things we're building."*
   - Three editorial product blocks with product title, two-line description, and link using `[PLACEHOLDER]` markers.
   - Includes *"All products"* link.

8. **08. Blog (`components/Blog.tsx`)**
   - Heading: *"Thoughts and perspectives."*
   - Description: *"Ideas, observations and practical insights on design, technology and digital experiences."*
   - Two editorial cards supporting featured image, article title, short description, and *"Read more"* links using `[PLACEHOLDER]` markers.
   - Includes *"All articles"* link.

9. **09. Podcast (`components/Podcast.tsx`)**
   - Section label: *PODCAST*.
   - Title: *"Conversations around design and technology."*
   - Two episode cards supporting thumbnail, title, publication date, duration, and tactile audio play toggle using `[PLACEHOLDER]` markers.

10. **10. Newsletter (`components/Newsletter.tsx`)**
    - Section label: *STAY IN THE LOOP*.
    - Heading: *"Good ideas, delivered occasionally."*
    - Email input with client-side validation, submit button, privacy policy note, and frontend confirmation state.

11. **11. Closing CTA (`components/ClosingCTA.tsx`)**
    - Headline: *"Have a good idea? Let's build something great."*
    - Button: *"Contact"*.
    - Generous whitespace and restrained layout, integrating a clean client-validated inquiry form.

12. **12. Footer (`components/Footer.tsx`)**
    - FORM & FUNCTION wordmark.
    - Studio navigation and company coordinates with `[PLACEHOLDER]` markers (address, phone, email, career openings, social links).
    - Privacy Policy, Terms of Service, and Legal Notice / Impressum links.
    - Smooth scroll *"Back to top"* action.

---

## ✦ 4. Technical Architecture

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Styling**: Tailwind CSS v4 with CSS custom properties
- **Fonts**: `Instrument_Serif` & `Inter` via `next/font/google`
- **Icons**: Lucide React
- **Motion**: Framer Motion for subtle, restrained entrance transitions

---

## ✦ 5. Getting Started

### Prerequisites

- Node.js `18.18+` or `20+` (Tested on Node `v24`)
- npm, pnpm, or yarn

### Installation & Development

```bash
# Navigate to the workspace
cd internship

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

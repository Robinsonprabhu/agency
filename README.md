# FORM & FUNCTION — Premium Digital Agency Website

A complete, production-quality digital agency homepage built with **Next.js 15+ (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✦ Creative Direction & References

- **Primary Design References**: Inspired by the art direction, typographic restraint, and bold asymmetric compositions of [Bleech](https://bleech.de/) and [Bambuk Studio](https://bambukstudio.com/).
- **Visual Identity**: Premium editorial, confident, and professional. Deep navy foundation with alternating light sections to establish visual rhythm.
- **Human-Crafted Appearance**: Avoids generic AI template aesthetics, excessive rounded cards, and decorative gradients.

---

## ✦ Colour System

| Role | Colour Code | Application |
|---|---|---|
| **Primary Background** | `#101B2C` | Deep navy canvas across Hero, Services, Portfolio, Footer |
| **Secondary Background** | `#18263A` | Slightly lighter navy for cards, containers, and borders |
| **Primary Accent** | `#FF642E` | Electric orange for CTAs, indicators, numbers, highlights |
| **Primary Text** | `#F4F1EA` | Warm white for primary typography on dark sections |
| **Secondary Text** | `#A6AFBB` | Muted grey for subheadings, captions, and metadata |
| **Light Section Background** | `#F4F1EA` | Off-white canvas for About and Contact sections |
| **Dark Text on Light** | `#18202B` | Charcoal navy for high-contrast legibility on light sections |

---

## ✦ Typography System

- **Display Headings**: `Space Grotesk` (via Next.js Google Fonts) with oversized scale, uppercase tracking, and intentional line breaks.
- **Body & Captions**: `Inter` (via Next.js Google Fonts) for crisp readability, paired with monospace metadata tags.

---

## ✦ Sections Included

1. **Header & Navigation (`components/Header.tsx`)**
   - Left: **FORM & FUNCTION** wordmark with agency dot indicator.
   - Right: Home, Services, Work, About, Contact.
   - Prominent **"Let's Talk"** CTA with electric orange styling (`#FF642E`).
   - Responsive mobile navigation drawer with accessible ARIA states and scroll lock.

2. **Hero Section (`components/Hero.tsx`)**
   - Headline: *"WE BUILD DIGITAL EXPERIENCES THAT MOVE BUSINESSES FORWARD."*
   - Supporting narrative: *"We combine strategy, design and technology to create meaningful digital experiences for ambitious brands."*
   - Dual CTAs: **"Start a Project"** (electric orange) and **"Explore Our Work"**.
   - Bold asymmetric layout featuring the Vahlen Atelier visual, location metadata (Zürich • London • Tokyo), and agency convictions.

3. **Client Trust Section (`components/ClientStrip.tsx`)**
   - Restrained partner strip featuring **purely fictional brand concepts**:
     - *KRONOS DYNAMICS* (Robotics & Automation)
     - *AURA SYSTEMS* (Ambient Computing)
     - *VELOX LABS* (Advanced Propulsion)
     - *MONOLITH SPATIAL* (Architectural Tech)
     - *ARCHETYPE PROTOCOL* (Decentralized Systems)
     - *NEXUS COLLECTIVE* (Renewable Energy Grid)

4. **About Section (`components/About.tsx`)**
   - **Light section background (`#F4F1EA`) with dark text (`#18202B`)** for visual rhythm.
   - Headline: *"GOOD DESIGN ISN'T DECORATION. IT'S DIRECTION."*
   - Four core pillars: Strategic Thinking, Thoughtful Design, Modern Engineering, Business-Focused Digital Experiences.
   - Asymmetric architectural visual composition.

5. **Services Section (`components/Services.tsx`)**
   - Section heading: *"What we bring to the table."*
   - Four specialized disciplines in a structured editorial list:
     - `01. UI/UX Design`
     - `02. Web Development`
     - `03. Brand Identity`
     - `04. Digital Strategy`
   - Each with bespoke Lucide icons, deliverables tags, and subtle hover states.

6. **Selected Work / Portfolio (`components/Portfolio.tsx` & `components/ProjectModal.tsx`)**
   - Section heading: *"Selected work. Real impact."*
   - Four original fictional projects in a bold asymmetric layout (mixing landscape, portrait, and wide formats):
     - `01` **Vahlen Atelier** (Fashion E-Commerce & Visual Identity) — *Wide 7-col landscape*
     - `02` **Strata Capital** (Financial Technology Platform) — *Tall 5-col portrait*
     - `03` **Kinetic Haven** (Modern Hospitality Brand & Booking) — *5-col landscape*
     - `04` **Synapse Quantum** (Technology Startup Website) — *Wide 7-col landscape*
   - Clearly marked as conceptual case studies with interactive details modal.

7. **Contact Section (`components/Contact.tsx`)**
   - **Light section background (`#F4F1EA`) with dark text (`#18202B`)**.
   - Headline: *"Have a good idea? Let's build something great."*
   - Name input, Email input, Scope & Budget selectors, Message textarea, and Submit button.
   - Client-side validation with real-time error handling, loading spinner, and success payload feedback card.
   - Transparent notice stating that client-side validation is executed without fake email spoofing.

8. **Footer (`components/Footer.tsx`)**
   - Deep navy background (`#101B2C`) with electric orange accents.
   - Agency branding, navigation links, studio hubs (Zürich, London, Tokyo), social links, and smooth "Back to top" action.

---

## ✦ Getting Started

### Prerequisites

- Node.js `18.18+` or `20+` (Tested on Node `v24`)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/form-and-function.git

# Navigate to project
cd internship

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Verify build
npm run build

# Start production server
npm start
```

---

## ✦ Deployment to Vercel

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **"Deploy"**.

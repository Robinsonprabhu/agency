# FORM & FUNCTION — Creative Studio (Est. 2019)

A bespoke digital practice website built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

## Design System Specifications

### 1. Visual Theme (White, Editorial, Minimal)
- **Background**: `#FFFFFF`
- **Primary Text**: `#0A0A0A`
- **Muted Text**: `#6B6B66`
- **Hairline Borders**: `#E4E4DF` (1px borders only)
- **Soft Panel Background**: `#F5F5F2`
- **Geometry**: Sharp 90-degree corners everywhere (`border-radius: 0`). Zero shadows, no gradients, no glow effects, and no glassmorphism.

### 2. Typographic Art Direction
- **Headings & Wordmark**: `Barlow Condensed` (weights 600/700, UPPERCASE, line-height 0.86–1.0, slight negative letter spacing).
- **Body & Paragraphs**: `Hanken Grotesk` (weights 400/500/600, 17px base, line-height 1.6).
- **Typography Scales**:
  - Hero Headline: `clamp(64px, 11.5vw, 176px)`
  - Section Titles: `clamp(44px, 6vw, 88px)`
  - Card & Row Titles: `clamp(30px, 3.4vw, 48px)`

### 3. Layout Structure
- **Container**: Max `1320px` with 24px side margin (`px-6`).
- **Header**: Sticky 80px bar, white at 94% opacity with subtle backdrop blur, hairline bottom border. Logo `FORM & FUNCTION` (Barlow Condensed 30px bold) with `Est. 2019`. Right navigation links (`Work`, `Services`, `Contact`) and a solid black `Contact ↗` button.
- **Hero**: Faint warm architectural plaster background (90% white overlay, 20px gentle parallax), small gray `Creative studio` indicator, huge 3-line uppercase headline with clipped mask slide-up animation (`0.9s, 120ms stagger`), 1px black dividing rule, 26px editorial narrative paragraph (max 30ch wide), and side-by-side action buttons.
- **Featured Project**: Bordered block split `1.6fr / 1fr`. Left edge-to-edge photograph of garments on a wooden rail (slightly desaturated). Right `#F5F5F2` panel with archive label, condensed title `Vahlen Atelier — Luxury goods digital flagship`, description, outlined `View project` button, and bottom metadata `Scope: Strategy • UI/UX • Web` / `Ref. 01`.
- **Services**: Section title `What we do` with hairline rule, 3 full-width interactive rows (`Strategy`, `UI / UX design`, `Web development`) under a 1px black top rule. Subtle 7% linen background on the right half. Hover transition nudges row 20px right, switches background to `#F5F5F2`, and translates the arrow.
- **Closing Section**: `#F5F5F2` band with 10% studio interior backdrop, condensed headline `Have a project in mind?`, and black `Start a conversation` button.
- **Footer**: Hairline border, `© 2026 Form & Function` left, tagline right.

### 4. Button Standards
- **Height**: 52px, padding `0 26px`, 15px semi-bold, square corners.
- **Solid**: `#0A0A0A` background, white text. Hover inverts to white with black text.
- **Outlined**: 1px `#0A0A0A` border, transparent background. Hover fills solid black with white text.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run production build
npm run build
```

import { ServiceItem, ProjectItem, FictionalClient } from "@/types";

export const FICTIONAL_CLIENTS: FictionalClient[] = [
  { name: "KRONOS DYNAMICS", industry: "Robotics & Automation", location: "Munich" },
  { name: "AURA SYSTEMS", industry: "Ambient Computing", location: "Stockholm" },
  { name: "VELOX LABS", industry: "Advanced Propulsion", location: "Zurich" },
  { name: "MONOLITH SPATIAL", industry: "Architectural Tech", location: "Copenhagen" },
  { name: "ARCHETYPE PROTOCOL", industry: "Decentralized Systems", location: "Berlin" },
  { name: "NEXUS COLLECTIVE", industry: "Renewable Energy Grid", location: "Oslo" },
];

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "UI/UX Design",
    tagline: "Purposeful interfaces engineered for human clarity",
    description:
      "We design intuitive, resilient digital products that balance complex utility with sensory elegance. From enterprise platforms to consumer software, every viewport is structured to reduce cognitive load and accelerate adoption.",
    deliverables: [
      "User Research & Journey Mapping",
      "Interactive Wireframing & Prototyping",
      "Enterprise Multi-Platform Design Systems",
      "Heuristic Audits & Usability Testing",
    ],
    icon: "LayoutGrid",
  },
  {
    number: "02",
    title: "Web Development",
    tagline: "High-performance architecture built for longevity",
    description:
      "We engineer scalable, lightning-fast digital flagships using modern headless technology. Clean modular codebases, seamless API integrations, and meticulous attention to Core Web Vitals and accessible markup.",
    deliverables: [
      "Next.js & React Full-Stack Platforms",
      "Headless CMS Implementations",
      "Tailored Micro-Interactions & Transitions",
      "Rigorous Performance & Security Benchmarks",
    ],
    icon: "Code2",
  },
  {
    number: "03",
    title: "Brand Identity",
    tagline: "Distinct visual systems rooted in conviction",
    description:
      "We build cohesive visual languages that communicate your organizational value at a glance. Typographic systems, tone of voice, visual direction, and digital brand toolkits designed to command attention.",
    deliverables: [
      "Visual Positioning & Narrative Strategy",
      "Responsive Digital Logomarks & Toolkits",
      "Bespoke Typographic Systems & Hierarchies",
      "Comprehensive Digital Brand Guidelines",
    ],
    icon: "Compass",
  },
  {
    number: "04",
    title: "Digital Strategy",
    tagline: "Commercial alignment before architectural execution",
    description:
      "Good design solves business problems. We audit customer conversion funnels, validate technical feasibility, and chart multi-year digital product roadmaps so every dollar invested yields measurable momentum.",
    deliverables: [
      "Digital Roadmap & Opportunity Auditing",
      "Conversion & Funnel Architecture",
      "Technology Stack & Vendor Feasibility",
      "Scalable Lifecycle Planning",
    ],
    icon: "TrendingUp",
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    number: "01",
    title: "Vahlen Atelier",
    client: "Vahlen Luxury Goods (Conceptual)",
    category: "Fashion E-Commerce & Visual Identity",
    description:
      "A monolithic, minimalist digital flagship for a contemporary Parisian tailoring house. Prioritizing ultra-high-resolution textile zoom, editorial lookbooks, and frictionless micro-checkout flows.",
    deliverables: ["Visual Identity", "E-Commerce Architecture", "Art Direction"],
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Vahlen Atelier Minimalist Fashion Visual",
    aspectClass: "aspect-[16/10]",
    colSpanClass: "lg:col-span-7",
    isConceptual: true,
  },
  {
    number: "02",
    title: "Strata Capital",
    client: "Strata Global Asset Partners (Conceptual)",
    category: "Financial Technology Platform",
    description:
      "A high-density quantitative analytics suite built for institutional asset managers. Transforming complex multi-currency liquidity matrices into calm, legible visual dashboards.",
    deliverables: ["Platform UX/UI", "Design System", "Data Visualization"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Strata Capital Financial Analytics Display",
    aspectClass: "aspect-[4/5]",
    colSpanClass: "lg:col-span-5",
    isConceptual: true,
  },
  {
    number: "03",
    title: "Kinetic Haven",
    client: "Haven Hospitality Group (Conceptual)",
    category: "Modern Hospitality Brand & Booking",
    description:
      "Digital presence and spatial booking portal for a secluded brutalist mountain retreat in the Norwegian fjords. Blending cinematic architectural imagery with real-time seasonal cabin availability.",
    deliverables: ["Brand Identity", "Interactive Booking UI", "Creative Frontend"],
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Kinetic Haven Modern Hospitality Architecture",
    aspectClass: "aspect-[16/9]",
    colSpanClass: "lg:col-span-5",
    isConceptual: true,
  },
  {
    number: "04",
    title: "Synapse Quantum",
    client: "Synapse Cloud Infrastructure (Conceptual)",
    category: "Technology Startup Website",
    description:
      "Developer portal and commercial launch platform for next-generation quantum simulation cloud infrastructure. Emphasizing developer speed, interactive API playgrounds, and zero latency.",
    deliverables: ["Developer Experience (DX)", "Next.js Web App", "Interactive Documentation"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Synapse Quantum Silicon Microarchitecture",
    aspectClass: "aspect-[16/10]",
    colSpanClass: "lg:col-span-7",
    isConceptual: true,
  },
];

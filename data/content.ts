import { ServiceItem, ProjectItem, FictionalClient } from "@/types";

export const FICTIONAL_CLIENTS: FictionalClient[] = [
  { name: "Kronos Dynamics", industry: "Robotics & Automation", location: "Munich" },
  { name: "Aura Systems", industry: "Ambient Computing", location: "Stockholm" },
  { name: "Velox Labs", industry: "Mobility Systems", location: "Zurich" },
  { name: "Monolith Spatial", industry: "Architectural Practice", location: "Copenhagen" },
  { name: "Archetype Protocol", industry: "Data Infrastructure", location: "Berlin" },
  { name: "Nexus Collective", industry: "Environmental Technology", location: "Oslo" },
];

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "UI/UX Design",
    tagline: "Purposeful interfaces engineered for human clarity",
    description:
      "We design digital products that balance complex utility with sensory elegance. From enterprise platforms to consumer software, every viewport is structured to reduce cognitive load and clarify decision-making.",
    deliverables: [
      "User research & journey mapping",
      "Interactive wireframing & prototyping",
      "Multi-platform design systems",
      "Usability testing & design audits",
    ],
    icon: "LayoutGrid",
  },
  {
    number: "02",
    title: "Web Development",
    tagline: "High-performance architecture built for longevity",
    description:
      "We build scalable digital flagships using modern headless technology. Clean modular codebases, seamless API integrations, and meticulous attention to accessibility, security, and Core Web Vitals.",
    deliverables: [
      "Next.js & React full-stack applications",
      "Headless CMS implementation",
      "Tailored micro-interactions & motion",
      "Rigorous performance benchmarks",
    ],
    icon: "Code2",
  },
  {
    number: "03",
    title: "Brand Identity",
    tagline: "Distinct visual systems rooted in conviction",
    description:
      "We build cohesive visual languages that communicate organizational value with clarity. Typographic systems, visual direction, and digital brand toolkits designed to command attention without decoration.",
    deliverables: [
      "Visual positioning & identity systems",
      "Custom typography & type hierarchy",
      "Digital brand guidelines & assets",
      "Editorial collateral & art direction",
    ],
    icon: "Compass",
  },
  {
    number: "04",
    title: "Digital Strategy",
    tagline: "Commercial alignment before architectural execution",
    description:
      "Design solves business problems. We audit customer conversion pathways, evaluate technical feasibility, and chart digital roadmaps so every deployment delivers tangible organizational value.",
    deliverables: [
      "Product roadmap & opportunity audits",
      "Conversion & information architecture",
      "Technology stack evaluation",
      "Lifecycle planning & optimization",
    ],
    icon: "TrendingUp",
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    number: "01",
    title: "Vahlen Atelier",
    client: "Vahlen Luxury Goods (Concept)",
    category: "Fashion E-Commerce & Identity",
    description:
      "A minimalist digital flagship for a contemporary Parisian tailoring house, prioritizing textile detail, editorial lookbooks, and an intuitive checkout flow.",
    deliverables: ["Visual identity", "E-Commerce platform", "Art direction"],
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Vahlen Atelier minimalist fashion visual",
    aspectClass: "aspect-[16/10]",
    colSpanClass: "lg:col-span-7",
    isConceptual: true,
  },
  {
    number: "02",
    title: "Strata Capital",
    client: "Strata Global Asset Partners (Concept)",
    category: "Financial Technology Platform",
    description:
      "A quantitative analytics suite for institutional asset managers, translating multi-currency liquidity matrices into calm, legible dashboards.",
    deliverables: ["Platform UX/UI", "Design system", "Data visualization"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Strata Capital financial analytics display",
    aspectClass: "aspect-[4/5]",
    colSpanClass: "lg:col-span-5",
    isConceptual: true,
  },
  {
    number: "03",
    title: "Kinetic Haven",
    client: "Haven Hospitality Group (Concept)",
    category: "Modern Hospitality Brand & Booking",
    description:
      "Digital presence and booking portal for a brutalist mountain retreat in the Norwegian fjords, blending architectural imagery with real-time seasonal cabin availability.",
    deliverables: ["Brand identity", "Interactive booking UI", "Frontend engineering"],
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Kinetic Haven modern hospitality architecture",
    aspectClass: "aspect-[16/11]",
    colSpanClass: "lg:col-span-5",
    isConceptual: true,
  },
  {
    number: "04",
    title: "Synapse Quantum",
    client: "Synapse Cloud Infrastructure (Concept)",
    category: "Technology Startup Website",
    description:
      "Developer portal and commercial launch platform for quantum simulation cloud infrastructure, emphasizing developer ergonomics, interactive documentation, and fast load speeds.",
    deliverables: ["Developer experience (DX)", "Next.js web platform", "Interactive docs"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Synapse Quantum silicon microarchitecture visual",
    aspectClass: "aspect-[16/10]",
    colSpanClass: "lg:col-span-7",
    isConceptual: true,
  },
];

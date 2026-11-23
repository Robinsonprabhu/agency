import { ServiceItem, ProjectItem } from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    id: "ui-ux",
    number: "01",
    title: "UI/UX Design",
    description:
      "We design intuitive, human-centered digital interfaces that balance functional complexity with structural clarity.",
    deliverables: [
      "User research & journey mapping",
      "Interactive prototyping",
      "Multi-platform design systems",
      "Usability testing & audits",
    ],
    icon: "LayoutGrid",
  },
  {
    id: "web-dev",
    number: "02",
    title: "Web Development",
    description:
      "Modern full-stack and headless web development focused on accessibility, clean codebases, and performance benchmarks.",
    deliverables: [
      "Next.js & React architectures",
      "Headless CMS integration",
      "Core Web Vitals optimization",
      "Component library engineering",
    ],
    icon: "Code2",
  },
  {
    id: "brand-identity",
    number: "03",
    title: "Brand Identity",
    description:
      "Cohesive visual identity systems, typographic guidelines, and digital brand toolkits designed to communicate strategic value.",
    deliverables: [
      "Visual identity & logomark design",
      "Typographic hierarchy & guidelines",
      "Digital brand toolkits",
      "Art direction & collateral",
    ],
    icon: "Compass",
  },
  {
    id: "digital-strategy",
    number: "04",
    title: "Digital Strategy",
    description:
      "Information architecture, user journey auditing, and digital product roadmapping to align technical execution with business goals.",
    deliverables: [
      "Product roadmap & opportunity audits",
      "Conversion & information architecture",
      "Technical feasibility evaluation",
      "Lifecycle optimization",
    ],
    icon: "TrendingUp",
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "fashion-ecommerce",
    number: "01",
    title: "Premium Fashion E-commerce",
    category: "Fashion E-Commerce / Concept",
    shortDescription:
      "A minimalist digital flagship exploring textile fidelity, editorial lookbooks, and a calm, frictionless checkout flow.",
    fullDescription:
      "An editorial e-commerce concept designed for high-end fashion ateliers. Emphasizes typographic hierarchy, macro garment photography, and intuitive navigation.",
    deliverables: ["Visual identity", "E-Commerce architecture", "Creative direction"],
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Premium Fashion E-commerce concept visual",
    aspectRatio: "aspect-[16/10]",
    isConceptual: true,
  },
  {
    id: "fintech-experience",
    number: "02",
    title: "Fintech Digital Experience",
    category: "Fintech & Analytics / Concept",
    shortDescription:
      "A quantitative asset analytics dashboard translating multi-currency data into calm, legible typography.",
    fullDescription:
      "A financial software interface concept built to present complex data streams, asset distributions, and portfolio metrics with clarity and speed.",
    deliverables: ["Platform UX/UI", "Design system", "Data visualization"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fintech digital experience analytics concept",
    aspectRatio: "aspect-[4/5]",
    isConceptual: true,
  },
  {
    id: "hospitality-website",
    number: "03",
    title: "Hospitality Website",
    category: "Hospitality & Architecture / Concept",
    shortDescription:
      "Digital presence and booking architecture for an architectural retreat, merging landscape visuals with seasonal availability.",
    fullDescription:
      "A modern hospitality concept combining quiet Scandinavian architectural photography with a seamless multi-step reservation system.",
    deliverables: ["Brand identity", "Interactive booking UI", "Frontend engineering"],
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Hospitality website architectural concept visual",
    aspectRatio: "aspect-[16/11]",
    isConceptual: true,
  },
  {
    id: "startup-platform",
    number: "04",
    title: "Technology Startup Platform",
    category: "Developer Infrastructure / Concept",
    shortDescription:
      "Developer portal and cloud infrastructure demonstration platform emphasizing technical documentation and ergonomics.",
    fullDescription:
      "A contemporary web platform for cloud technology startups, featuring developer-first documentation, keyboard navigation, and micro-benchmarks.",
    deliverables: ["Developer experience (DX)", "Next.js web platform", "Interactive docs"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Technology startup platform microarchitecture concept",
    aspectRatio: "aspect-[16/10]",
    isConceptual: true,
  },
];

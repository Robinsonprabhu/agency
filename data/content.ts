import { ServiceItem, ProjectItem } from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    id: "ui-ux",
    number: "01",
    title: "UI/UX Design",
    description:
      "We design intuitive digital experiences that make every interaction simple and meaningful.",
    deliverables: [
      "User journey mapping",
      "Interactive prototyping",
      "Interface design systems",
      "Usability evaluation",
    ],
    icon: "LayoutGrid",
  },
  {
    id: "web-dev",
    number: "02",
    title: "Web Development",
    description:
      "We build responsive, modern websites that combine performance, functionality and visual clarity.",
    deliverables: [
      "Next.js & React architectures",
      "Full responsiveness",
      "Core Web Vitals performance",
      "Clean, scalable codebase",
    ],
    icon: "Code2",
  },
  {
    id: "brand-identity",
    number: "03",
    title: "Brand Identity",
    description:
      "We create distinctive visual identities that help businesses communicate with confidence.",
    deliverables: [
      "Visual identity systems",
      "Typographic hierarchy",
      "Digital brand toolkits",
      "Creative art direction",
    ],
    icon: "Compass",
  },
  {
    id: "digital-strategy",
    number: "04",
    title: "Digital Strategy",
    description:
      "We turn business goals into practical digital solutions through thoughtful planning and execution.",
    deliverables: [
      "Digital roadmapping",
      "Information architecture",
      "User research audits",
      "Technical planning",
    ],
    icon: "TrendingUp",
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "fashion-forward",
    number: "01",
    title: "Fashion Forward",
    category: "E-commerce Website",
    shortDescription:
      "A refined online shopping experience for a contemporary fashion brand.",
    fullDescription:
      "A refined online shopping experience for a contemporary fashion brand. Focused on high-fidelity textile photography, restrained typography, and intuitive browsing.",
    deliverables: ["E-Commerce Architecture", "Art Direction", "UI/UX Design"],
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Fashion Forward contemporary e-commerce website concept",
    aspectRatio: "aspect-[16/10]",
    isConceptual: true,
  },
  {
    id: "finova",
    number: "02",
    title: "Finova",
    category: "Fintech Platform",
    shortDescription:
      "A simplified digital finance experience focused on clarity and usability.",
    fullDescription:
      "A simplified digital finance experience focused on clarity and usability. Translating multi-currency balances, real-time analytics, and investment metrics into human-readable visual systems.",
    deliverables: ["Product Design", "Design System", "Data Visualization"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Finova fintech platform concept interface",
    aspectRatio: "aspect-[4/5]",
    isConceptual: true,
  },
  {
    id: "stay-collective",
    number: "03",
    title: "Stay Collective",
    category: "Hospitality Website",
    shortDescription:
      "A modern hospitality experience designed to make discovering and booking stays effortless.",
    fullDescription:
      "A modern hospitality experience designed to make discovering and booking stays effortless. Featuring immersive architectural gallery layouts, frictionless reservation booking, and location storytelling.",
    deliverables: ["UI/UX Design", "Frontend Engineering", "Creative Direction"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Stay Collective modern hospitality website concept",
    aspectRatio: "aspect-[16/10]",
    isConceptual: true,
  },
  {
    id: "nexora",
    number: "04",
    title: "Nexora",
    category: "Technology Website",
    shortDescription:
      "A clean digital presence for an emerging technology brand.",
    fullDescription:
      "A clean digital presence for an emerging technology brand. Highlighting product capabilities with clear typographic hierarchy, structural spacing, and interactive feature breakdowns.",
    deliverables: ["Brand Identity", "Web Engineering", "Design System"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Nexora clean technology website concept",
    aspectRatio: "aspect-[4/5]",
    isConceptual: true,
  },
];

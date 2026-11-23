import {
  ServiceItem,
  ProjectItem,
  TestimonialItem,
  ProductItem,
  ArticleItem,
  PodcastItem,
} from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    id: "ui-ux",
    number: "01",
    title: "UI/UX Design",
    description:
      "We design intuitive, human-centered digital products and interfaces that balance functional complexity with aesthetic clarity.",
    linkText: "More",
  },
  {
    id: "web-dev",
    number: "02",
    title: "Web Development",
    description:
      "Modern full-stack and headless web development focused on accessibility, clean codebases, and exceptional performance benchmarks.",
    linkText: "More",
  },
  {
    id: "brand-identity",
    number: "03",
    title: "Brand Identity",
    description:
      "Cohesive visual identity systems, typographic guidelines, and digital brand toolkits designed to communicate strategic positioning.",
    linkText: "More",
  },
  {
    id: "digital-strategy",
    number: "04",
    title: "Digital Strategy",
    description:
      "Information architecture, user journey auditing, and digital product roadmapping to align technical execution with business objectives.",
    linkText: "More",
  },
  {
    id: "frontend-dev",
    number: "05",
    title: "Frontend Development",
    description:
      "Interactive engineering, component design systems, and responsive layouts crafted with strict attention to typography and motion.",
    linkText: "More",
  },
  {
    id: "digital-experiences",
    number: "06",
    title: "Digital Experiences",
    description:
      "Engaging interactive brand platforms, editorial microsites, and immersive product presentations tailored for modern browsers.",
    linkText: "More",
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
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
    aspectClass: "aspect-[16/10]",
    colSpanClass: "lg:col-span-7",
    isConceptual: true,
  },
  {
    number: "02",
    title: "Fintech Digital Experience",
    category: "Fintech & Analytics / Concept",
    shortDescription:
      "A quantitative asset analytics dashboard translating multi-currency data into legible, calm typography.",
    fullDescription:
      "A financial software interface concept built to present complex data streams, asset distributions, and portfolio metrics with clarity and speed.",
    deliverables: ["Platform UX/UI", "Design system", "Data visualization"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fintech digital experience analytics concept",
    aspectClass: "aspect-[4/5]",
    colSpanClass: "lg:col-span-5",
    isConceptual: true,
  },
  {
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
    aspectClass: "aspect-[16/11]",
    colSpanClass: "lg:col-span-5",
    isConceptual: true,
  },
  {
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
    aspectClass: "aspect-[16/10]",
    colSpanClass: "lg:col-span-7",
    isConceptual: true,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "[PLACEHOLDER: Testimonial quote will appear here once verified client feedback is supplied.]",
    author: "[PLACEHOLDER: Name]",
    role: "[PLACEHOLDER: Role]",
    company: "[PLACEHOLDER: Company]",
  },
  {
    id: "test-2",
    quote: "[PLACEHOLDER: Additional client commentary and project feedback will be rendered here.]",
    author: "[PLACEHOLDER: Name]",
    role: "[PLACEHOLDER: Role]",
    company: "[PLACEHOLDER: Company]",
  },
  {
    id: "test-3",
    quote: "[PLACEHOLDER: Executive endorsement and partnership reflection to be published in this space.]",
    author: "[PLACEHOLDER: Name]",
    role: "[PLACEHOLDER: Role]",
    company: "[PLACEHOLDER: Company]",
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "prod-1",
    title: "[PLACEHOLDER: Product 01]",
    description: "[PLACEHOLDER: Two-line description of the first internal tool or software product being engineered.]",
    linkText: "Learn more",
    linkHref: "#products",
  },
  {
    id: "prod-2",
    title: "[PLACEHOLDER: Product 02]",
    description: "[PLACEHOLDER: Two-line description of the second digital product or design framework in development.]",
    linkText: "Learn more",
    linkHref: "#products",
  },
  {
    id: "prod-3",
    title: "[PLACEHOLDER: Product 03]",
    description: "[PLACEHOLDER: Two-line description of the third experimental software platform under active development.]",
    linkText: "Learn more",
    linkHref: "#products",
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    id: "art-1",
    title: "[PLACEHOLDER: Article Title 01]",
    description: "[PLACEHOLDER: Short description outlining practical insights on digital design and engineering practices.]",
    linkText: "Read more",
    linkHref: "#blog",
  },
  {
    id: "art-2",
    title: "[PLACEHOLDER: Article Title 02]",
    description: "[PLACEHOLDER: Short description examining modern headless web development and interface architectures.]",
    linkText: "Read more",
    linkHref: "#blog",
  },
];

export const PODCAST_EPISODES: PodcastItem[] = [
  {
    id: "pod-1",
    title: "[PLACEHOLDER: Episode 01 — Conversation Title]",
    date: "[PLACEHOLDER: Date]",
    duration: "[PLACEHOLDER: Duration]",
  },
  {
    id: "pod-2",
    title: "[PLACEHOLDER: Episode 02 — Conversation Title]",
    date: "[PLACEHOLDER: Date]",
    duration: "[PLACEHOLDER: Duration]",
  },
];

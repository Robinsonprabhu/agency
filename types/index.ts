export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface ProjectItem {
  number: string;
  title: string;
  client: string;
  category: string;
  description: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  aspectClass: string;
  colSpanClass: string;
  isConceptual: boolean;
}

export interface FictionalClient {
  name: string;
  industry: string;
  location: string;
}

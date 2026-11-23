export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  aspectRatio: string;
  isConceptual: boolean;
}

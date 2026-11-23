export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  linkText: string;
}

export interface ProjectItem {
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  aspectClass: string;
  colSpanClass: string;
  isConceptual: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface PodcastItem {
  id: string;
  title: string;
  date: string;
  duration: string;
}

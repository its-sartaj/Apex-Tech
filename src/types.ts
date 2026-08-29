export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  technologies: string[];
  features: string[];
  deliverables: string[];
  timeline: string;
  popularFor: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'uiux' | 'seo' | 'marketing';
  summary: string;
  fullDescription: string;
  imageUrl: string;
  galleryImages?: string[];
  impactMetrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  gradientBg: string;
  accentColor: string;
}

export interface ProcessStage {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  activities: string[];
  deliverable: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ProposalFormState {
  service: string;
  scope: string;
  timeline: string;
  name: string;
  email: string;
  phone?: string;
  notes?: string;
}

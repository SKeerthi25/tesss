export type PageId = 'home' | 'about' | 'services' | 'projects' | 'why-tessco' | 'careers' | 'contact' | 'legal';

export interface CompanyDetails {
  name: string;
  number: string;
  industry: string;
  address: {
    street: string;
    town: string;
    country: string;
    postcode: string;
  };
  phone: string;
  email: string;
  website: string;
  hours: {
    weekday: string;
    weekend: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  estimatedTimeline: string;
  keyBenefit: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'all' | 'domestic' | 'renovations' | 'extensions' | 'structural';
  location: string;
  status: 'Completed' | 'In Progress';
  completionYear: string;
  image: string;
  gallery?: string[];
  description: string;
  stats: {
    duration: string;
    area: string;
    type: string;
  };
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverable: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  projectType: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Pricing & Quotes' | 'Permits & Planning' | 'Warranty & Safety';
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract';
  experience: string;
  description: string;
  requirements: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  credentials: string;
  image: string;
}

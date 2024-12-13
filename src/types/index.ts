export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface ServiceType {
  title: string;
  description: string;
  features?: string[];
}

export interface Statistic {
  label: string;
  value: string;
}

export interface DemoCallBenefit {
  text: string;
  highlight?: string;
}

export interface ContactInfo {
  email: string;
  title: string;
}

export interface SuccessStory {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    image: string;
  };
  timeline: string;
  imageUrl: string;
  tags: string[];
}
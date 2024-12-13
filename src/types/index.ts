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
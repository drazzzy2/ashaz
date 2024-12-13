import { categories } from './categories';
import { commonMetrics } from './metrics';

export interface Testimonial {
  id: number;
  quote: string;
  highlightedText: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
  category: keyof typeof categories;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    category: 'marketing',
    quote: "Working with Ashaz transformed our business. His strategic insights helped us",
    highlightedText: "increase our revenue by 300%",
    author: {
      name: "Michael Chen",
      role: "CEO",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    metrics: [
      commonMetrics.revenue.value("300%"),
      commonMetrics.roi.value("12x")
    ]
  },
  {
    id: 2,
    category: 'agency',
    quote: "The strategies we learned helped us scale our agency from 6 to",
    highlightedText: "7 figures in just 8 months",
    author: {
      name: "Sarah Johnson",
      role: "Founder",
      company: "Digital Growth Co",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
    },
    metrics: [
      commonMetrics.growth.value("425%"),
      commonMetrics.conversion.value("38%")
    ]
  },
  {
    id: 3,
    category: 'ecommerce',
    quote: "Our e-commerce store saw unprecedented growth, achieving",
    highlightedText: "15x return on ad spend",
    author: {
      name: "David Park",
      role: "Marketing Director",
      company: "StyleHub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
    },
    metrics: [
      commonMetrics.roi.value("15x"),
      commonMetrics.conversion.value("12.5%")
    ]
  },
  {
    id: 4,
    category: 'saas',
    quote: "The implementation of their growth framework resulted in",
    highlightedText: "500% increase in qualified leads",
    author: {
      name: "Emma Rodriguez",
      role: "Growth Lead",
      company: "CloudTech SaaS",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
    },
    metrics: [
      commonMetrics.leads.value("500%"),
      commonMetrics.conversion.value("28%")
    ]
  },
  {
    id: 5,
    category: 'consulting',
    quote: "Their strategic consulting helped us identify key growth opportunities, leading to",
    highlightedText: "3x revenue growth in 6 months",
    author: {
      name: "James Wilson",
      role: "COO",
      company: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
    },
    metrics: [
      commonMetrics.revenue.value("300%"),
      commonMetrics.growth.value("285%")
    ]
  },
  {
    id: 6,
    category: 'education',
    quote: "The online course optimization strategy resulted in",
    highlightedText: "10x student enrollment growth",
    author: {
      name: "Lisa Chang",
      role: "Education Director",
      company: "SkillBridge Academy",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
    },
    metrics: [
      commonMetrics.growth.value("1000%"),
      commonMetrics.conversion.value("45%")
    ]
  },
  {
    id: 7,
    category: 'marketing',
    quote: "Their data-driven approach to campaign optimization delivered",
    highlightedText: "8x improvement in ROAS",
    author: {
      name: "Alex Thompson",
      role: "Digital Marketing Head",
      company: "Market Masters",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
    },
    metrics: [
      commonMetrics.roi.value("8x"),
      commonMetrics.leads.value("450%")
    ]
  },
  {
    id: 8,
    category: 'ecommerce',
    quote: "The conversion optimization program helped us achieve",
    highlightedText: "250% increase in sales",
    author: {
      name: "Nina Patel",
      role: "E-commerce Director",
      company: "Global Retail Co",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80"
    },
    metrics: [
      commonMetrics.revenue.value("250%"),
      commonMetrics.conversion.value("18.5%")
    ]
  }
];
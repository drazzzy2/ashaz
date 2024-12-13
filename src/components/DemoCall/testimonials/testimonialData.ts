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
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working with Ashaz transformed our business. His strategic insights helped us",
    highlightedText: "increase our revenue by 300%",
    author: {
      name: "Michael Chen",
      role: "CEO",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    metrics: [
      { label: "Revenue Increase", value: "300%" },
      { label: "ROI", value: "12x" }
    ]
  },
  {
    id: 2,
    quote: "The strategies we learned helped us scale our agency from 6 to",
    highlightedText: "7 figures in just 8 months",
    author: {
      name: "Sarah Johnson",
      role: "Founder",
      company: "Digital Growth Co",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
    },
    metrics: [
      { label: "Client Growth", value: "425%" },
      { label: "Conversion Rate", value: "38%" }
    ]
  },
  {
    id: 3,
    quote: "Our marketing campaigns saw unprecedented success, achieving",
    highlightedText: "10x return on ad spend",
    author: {
      name: "David Park",
      role: "Marketing Director",
      company: "InnovateX",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
    },
    metrics: [
      { label: "ROAS", value: "10x" },
      { label: "Lead Quality", value: "+85%" }
    ]
  }
];
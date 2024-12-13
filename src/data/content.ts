import { TeamMember, ServiceType, Statistic, DemoCallBenefit } from '../types';

export const statistics: Statistic[] = [
  { label: 'TOTAL REVENUE GENERATED', value: '$63.4 MILLION' },
  { label: 'TOTAL AD SPEND', value: '$14.7M' },
  { label: 'CLIENTS HELPED', value: '57' },
  { label: 'SERVICES OFFER', value: '8' },
];

export const services: ServiceType[] = [
  {
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns that drive engagement and convert followers into customers.',
    features: [
      'Platform-specific strategies',
      'Content calendar planning',
      'Analytics and reporting'
    ]
  },
  {
    title: 'Paid Advertising',
    description: 'Data-driven paid campaigns across multiple platforms to maximize your ROI.',
    features: [
      'PPC management',
      'Audience targeting',
      'Performance optimization'
    ]
  },
  {
    title: 'Content Strategy',
    description: 'Compelling content that tells your story and connects with your audience.',
    features: [
      'Content planning',
      'SEO optimization',
      'Brand storytelling'
    ]
  },
  {
    title: 'Email Marketing',
    description: 'Automated email campaigns that nurture leads and drive conversions.',
    features: [
      'Sequence automation',
      'List segmentation',
      'A/B testing'
    ]
  },
  {
    title: 'Analytics & Reporting',
    description: 'In-depth analytics and insights to measure and improve campaign performance.',
    features: [
      'Custom dashboards',
      'ROI tracking',
      'Performance analysis'
    ]
  },
  {
    title: 'Brand Strategy',
    description: 'Comprehensive brand development to establish a strong market presence.',
    features: [
      'Brand positioning',
      'Visual identity',
      'Market research'
    ]
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Iman Gadzhi',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Clarita Anderson',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Dany Benavides',
    role: 'Marketing Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Luis Berger',
    role: 'Growth Expert',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80'
  },
];

export const demoCallBenefits: DemoCallBenefit[] = [
  { text: 'High quality & established client base', highlight: 'vetted leads' },
  { text: 'Systematic scaling to take new offers across', highlight: 'online' },
  { text: 'Guidance on how to onboard at our', highlight: 'increased revenue' },
  { text: 'Strategies to help agencies', highlight: 'maximize their conversion rates' },
];
export const categories = {
  marketing: 'Digital Marketing',
  ecommerce: 'E-commerce',
  saas: 'SaaS',
  agency: 'Agency Growth',
  consulting: 'Business Consulting',
  education: 'Online Education'
} as const;

export type CategoryType = keyof typeof categories;
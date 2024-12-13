export interface Metric {
  label: string;
  value: string;
}

export const commonMetrics = {
  revenue: {
    label: 'Revenue Increase',
    value: (amount: string) => ({ label: 'Revenue Increase', value: amount })
  },
  roi: {
    label: 'ROI',
    value: (amount: string) => ({ label: 'ROI', value: amount })
  },
  conversion: {
    label: 'Conversion Rate',
    value: (amount: string) => ({ label: 'Conversion Rate', value: amount })
  },
  leads: {
    label: 'Lead Generation',
    value: (amount: string) => ({ label: 'Leads Generated', value: amount })
  },
  growth: {
    label: 'Business Growth',
    value: (amount: string) => ({ label: 'YoY Growth', value: amount })
  }
};
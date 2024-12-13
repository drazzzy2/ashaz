export interface SuccessStoryStat {
  label: string;
  value: string;
}

export interface SuccessStory {
  id: number;
  company: string;
  industry: string;
  image: string;
  result: string;
  metric: string;
  testimonial: string;
  clientName: string;
  clientRole: string;
  clientImage: string;
  stats: SuccessStoryStat[];
}
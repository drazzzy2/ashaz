import React from 'react';
import { Quote } from 'lucide-react';

interface StoryTestimonialProps {
  testimonial: string;
}

export default function StoryTestimonial({ testimonial }: StoryTestimonialProps) {
  return (
    <div className="relative mb-8">
      <Quote className="absolute -top-2 -left-1 w-5 h-5 text-pink-500/20" />
      <blockquote className="pl-6 text-gray-300 italic">
        "{testimonial}"
      </blockquote>
    </div>
  );
}
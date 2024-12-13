import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { testimonials } from './data/testimonialData';
import TestimonialCard from './TestimonialCard';
import TestimonialControls from './TestimonialControls';
import { useTestimonialNavigation } from './hooks/useTestimonialNavigation';

export default function TestimonialCarousel() {
  const {
    currentIndex,
    maxIndex,
    handlePrevious,
    handleNext,
    getCurrentTestimonials
  } = useTestimonialNavigation({
    testimonials,
    itemsPerPage: 2
  });

  return (
    <div className="relative">
      <div className="space-y-6">
        <AnimatePresence mode="wait">
          {getCurrentTestimonials().map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isActive={true}
            />
          ))}
        </AnimatePresence>
      </div>
      
      <TestimonialControls
        currentIndex={currentIndex}
        totalPages={maxIndex + 1}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}
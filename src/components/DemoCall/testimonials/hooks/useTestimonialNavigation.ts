import { useState, useCallback, useMemo } from 'react';
import { Testimonial } from '../data/testimonialData';

interface UseTestimonialNavigationProps {
  testimonials: Testimonial[];
  itemsPerPage: number;
}

export function useTestimonialNavigation({ testimonials, itemsPerPage }: UseTestimonialNavigationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const maxIndex = useMemo(() => 
    Math.ceil(testimonials.length / itemsPerPage) - 1,
    [testimonials.length, itemsPerPage]
  );

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  const getCurrentTestimonials = useCallback(() => {
    const startIndex = currentIndex * itemsPerPage;
    return testimonials.slice(startIndex, startIndex + itemsPerPage);
  }, [currentIndex, itemsPerPage, testimonials]);

  return {
    currentIndex,
    maxIndex,
    handlePrevious,
    handleNext,
    getCurrentTestimonials,
  };
}
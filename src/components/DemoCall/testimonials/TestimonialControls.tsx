import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialControlsProps {
  currentIndex: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function TestimonialControls({
  currentIndex,
  totalPages,
  onPrevious,
  onNext
}: TestimonialControlsProps) {
  return (
    <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="p-2 rounded-full bg-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
      >
        <ChevronUp className="w-5 h-5 text-gray-600" />
      </motion.button>
      
      <div className="text-center text-sm font-medium text-gray-600">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {currentIndex + 1}/{totalPages}
        </motion.span>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        disabled={currentIndex === totalPages - 1}
        className="p-2 rounded-full bg-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
      >
        <ChevronDown className="w-5 h-5 text-gray-600" />
      </motion.button>
    </div>
  );
}
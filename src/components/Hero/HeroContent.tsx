import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Play } from 'lucide-react';
import { fadeIn } from '../../utils/animations';
import { openCalendly } from '../../utils/calendly';
import { useSuccessStories } from '../../contexts/SuccessStoriesContext';

export default function HeroContent() {
  const { showSuccessStoriesView } = useSuccessStories();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-center mb-12"
    >
      <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
        Turn your passion into expertise. Learn data-driven strategies that deliver real results and transform businesses.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="group" onClick={openCalendly}>
          Start Learning Now
          <ArrowRight className="w-5 h-5 ml-2 inline-block transition-transform group-hover:translate-x-1" />
        </Button>
        <Button size="lg" variant="secondary" className="group" onClick={showSuccessStoriesView}>
          <Play className="w-5 h-5 mr-2" />
          View Success Stories
        </Button>
      </div>
    </motion.div>
  );
}
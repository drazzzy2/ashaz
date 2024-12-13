import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import DemoCallHeader from './DemoCallHeader';
import DemoCallBenefits from './DemoCallBenefits';
import DemoCallAction from './DemoCallAction';
import TestimonialCarousel from './testimonials/TestimonialCarousel';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fadeInUp } from '../../utils/animations';

export default function DemoCallSection() {
  const { ref, controls } = useScrollAnimation();

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="relative"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <DemoCallHeader />
              <DemoCallBenefits />
              <DemoCallAction />
            </div>
            <div className="order-1 lg:order-2">
              <TestimonialCarousel />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
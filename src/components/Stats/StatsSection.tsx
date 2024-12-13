import React from 'react';
import { motion } from 'framer-motion';
import { statistics } from '../../data/content';
import StatCard from './StatCard';
import { Container } from '../ui/Container';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function StatsSection() {
  const { ref, controls } = useScrollAnimation();

  return (
    <Container className="py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {statistics.map((stat) => (
          <motion.div key={stat.label} variants={staggerItem}>
            <StatCard stat={stat} />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
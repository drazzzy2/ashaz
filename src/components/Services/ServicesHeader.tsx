import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fadeInUp } from '../../utils/animations';

export default function ServicesHeader() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="text-center mb-20"
    >
      <motion.div
        variants={fadeInUp}
        className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6"
      >
        <Sparkles className="w-4 h-4 mr-2" />
        Our Marketing Solutions
      </motion.div>
      
      <motion.h2
        variants={fadeInUp}
        className="text-4xl md:text-5xl font-black mb-6"
      >
        <span className="text-white">Transform Your Brand with</span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Data-Driven Marketing
        </span>
      </motion.h2>
      
      <motion.p
        variants={fadeInUp}
        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
      >
        Elevate your digital presence with strategies that deliver measurable results. 
        We combine creativity with analytics to drive growth and engagement.
      </motion.p>
    </motion.div>
  );
}
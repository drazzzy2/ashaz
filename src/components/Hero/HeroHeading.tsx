import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, scaleIn } from '../../utils/animations';

export default function HeroHeading() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-8">
      <motion.div variants={scaleIn}>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
          <span className="block text-white mb-2">AHMEDIUS</span>
          <span className="gradient-text">ACADEMY</span>
        </h1>
      </motion.div>
      <motion.h2 
        variants={fadeIn}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold"
      >
        <span className="text-pink-500">Master Digital Marketing</span>
        <span className="block mt-2 text-white">Transform Your Future</span>
      </motion.h2>
    </motion.div>
  );
}
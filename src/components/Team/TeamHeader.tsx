import React from 'react';
import { motion } from 'framer-motion';
import { Users2 } from 'lucide-react';

export default function TeamHeader() {
  return (
    <div className="relative text-center mb-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 px-6 py-3 rounded-full mb-8"
      >
        <Users2 className="w-5 h-5 text-pink-500" />
        <span className="text-pink-500 text-sm font-semibold">Expert Team</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-6xl font-black mb-8 leading-tight"
      >
        <span className="text-white">Meet the</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-gradient">
          Visionaries
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
      >
        Our team of industry veterans combines creative innovation with data-driven 
        strategies to deliver exceptional results for our clients.
      </motion.p>
    </div>
  );
}
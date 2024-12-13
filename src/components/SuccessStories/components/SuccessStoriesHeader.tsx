import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export default function SuccessStoriesHeader() {
  return (
    <div className="text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 bg-pink-500/10 px-6 py-3 rounded-full mb-8"
      >
        <Trophy className="w-5 h-5 text-pink-500" />
        <span className="text-pink-500 font-semibold">Client Success Stories</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-6xl font-black mb-8"
      >
        <span className="text-white">Real Results,</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Real Impact
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-gray-400 text-lg max-w-2xl mx-auto"
      >
        Discover how we've helped businesses achieve extraordinary growth through 
        our data-driven marketing strategies and innovative solutions.
      </motion.p>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

export default function FooterAttribution() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center justify-center gap-2 py-4 text-gray-400 border-t border-white/5"
    >
      <Code className="w-4 h-4" />
      <p className="text-sm">
        Designed and developed by{' '}
        <a
          href="https://github.com/mustapha-eddarrazy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-pink-500 hover:text-pink-400 transition-colors"
        >
          Mustapha Eddarrazy
        </a>
      </p>
    </motion.div>
  );
}
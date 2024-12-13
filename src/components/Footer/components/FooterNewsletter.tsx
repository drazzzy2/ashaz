import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '../../ui/Button';

export default function FooterNewsletter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h3 className="text-white font-semibold mb-4">Subscribe to Our Newsletter</h3>
      <p className="text-gray-400 text-sm mb-4">
        Get the latest updates on digital marketing trends and strategies.
      </p>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-navy-800 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500/50"
        />
        <Button size="md" className="group">
          Subscribe
          <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>
    </motion.div>
  );
}
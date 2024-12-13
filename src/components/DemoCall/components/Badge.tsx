import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BadgeProps {
  icon: LucideIcon;
  text: string;
}

export function Badge({ icon: Icon, text }: BadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-50 to-purple-50 px-6 py-3 rounded-full mb-6"
    >
      <Icon className="w-5 h-5 text-pink-500" />
      <span className="text-pink-500 font-semibold">{text}</span>
    </motion.div>
  );
}
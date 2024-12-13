import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Users, Globe } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: '300%', label: 'Average ROI' },
  { icon: Award, value: '150+', label: 'Projects Completed' },
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Globe, value: '15+', label: 'Countries Served' },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
          className="flex flex-col items-center p-6 rounded-xl bg-navy-800/50 backdrop-blur-sm hover:bg-navy-800/70 transition-colors"
        >
          <stat.icon className="w-6 h-6 text-pink-500 mb-3" />
          <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
          <span className="text-sm text-gray-400">{stat.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
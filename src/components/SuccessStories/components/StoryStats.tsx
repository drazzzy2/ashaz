import React from 'react';
import { motion } from 'framer-motion';
import { SuccessStoryStat } from '../types';

interface StoryStatsProps {
  stats: SuccessStoryStat[];
}

export default function StoryStats({ stats }: StoryStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-navy-700/50 rounded-xl p-4 backdrop-blur-sm"
        >
          <div className="text-xl font-bold text-pink-500">{stat.value}</div>
          <div className="text-xs text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
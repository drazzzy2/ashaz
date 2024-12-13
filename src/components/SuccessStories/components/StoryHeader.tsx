import React from 'react';
import { motion } from 'framer-motion';

interface StoryHeaderProps {
  company: string;
  industry: string;
  image: string;
}

export default function StoryHeader({ company, industry, image }: StoryHeaderProps) {
  return (
    <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent z-10" />
      <motion.img
        src={image}
        alt={company}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
      <div className="absolute bottom-4 left-4 z-20">
        <h3 className="text-xl font-bold text-white mb-1">{company}</h3>
        <p className="text-gray-300">{industry}</p>
      </div>
    </div>
  );
}
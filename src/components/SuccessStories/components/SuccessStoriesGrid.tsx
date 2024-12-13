import React from 'react';
import { motion } from 'framer-motion';
import { successStories } from '../data/successStoriesData';
import SuccessStoryCard from './SuccessStoryCard';

export default function SuccessStoriesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
      {successStories.map((story, index) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <SuccessStoryCard story={story} />
        </motion.div>
      ))}
    </div>
  );
}
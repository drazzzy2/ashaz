import React from 'react';
import { motion } from 'framer-motion';
import SuccessStoryCard from '../components/SuccessStoryCard';
import { useSuccessStories } from '../hooks/useSuccessStories';

export default function SuccessStoriesGrid() {
  const { stories } = useSuccessStories();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
      {stories.map((story, index) => (
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
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { successStories } from '../../data/successStories';
import { useSuccessStories } from '../../contexts/SuccessStoriesContext';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function SuccessStoriesList() {
  const { selectStory } = useSuccessStories();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {successStories.map((story) => (
        <motion.div
          key={story.id}
          variants={staggerItem}
          className="group cursor-pointer"
          onClick={() => selectStory(story.id)}
        >
          <div className="relative overflow-hidden rounded-2xl">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={story.imageUrl}
                alt={story.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="relative bg-navy-800/90 backdrop-blur-sm p-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title and subtitle */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-500 transition-colors">
                {story.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {story.subtitle}
              </p>

              {/* Results preview */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {story.results.slice(0, 2).map((result) => (
                  <div key={result.metric} className="text-center">
                    <div className="text-2xl font-bold text-pink-500">
                      {result.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>

              {/* View more button */}
              <div className="flex items-center gap-2 text-pink-500 group-hover:text-pink-400 transition-colors">
                <span className="text-sm font-medium">View Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

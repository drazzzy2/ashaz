import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Award, Quote } from 'lucide-react';
import { useSuccessStories } from '../../contexts/SuccessStoriesContext';
import { fadeInUp } from '../../utils/animations';

export default function SuccessStoryDetail() {
  const { selectedStory, clearSelectedStory } = useSuccessStories();

  if (!selectedStory) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="max-w-4xl mx-auto"
    >
      {/* Back button */}
      <button
        onClick={clearSelectedStory}
        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Success Stories</span>
      </button>

      {/* Hero section */}
      <div className="relative rounded-3xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20" />
        <img
          src={selectedStory.imageUrl}
          alt={selectedStory.title}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">
              {selectedStory.title}
            </h1>
            <p className="text-xl text-gray-300">
              {selectedStory.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Challenge section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
            <p className="text-gray-400 leading-relaxed">
              {selectedStory.challenge}
            </p>
          </section>

          {/* Solution section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Solution</h2>
            <p className="text-gray-400 leading-relaxed">
              {selectedStory.solution}
            </p>
          </section>

          {/* Results section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">The Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {selectedStory.results.map((result) => (
                <div
                  key={result.metric}
                  className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-pink-500 mb-2">
                    {result.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {result.metric}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Quick facts */}
          <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-pink-500" />
              <span className="text-gray-400">Timeline</span>
            </div>
            <p className="text-white font-medium">{selectedStory.timeline}</p>
          </div>

          {/* Industry */}
          <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-pink-500" />
              <span className="text-gray-400">Industry</span>
            </div>
            <p className="text-white font-medium">{selectedStory.industry}</p>
          </div>

          {/* Testimonial */}
          <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6">
            <Quote className="w-8 h-8 text-pink-500/20 mb-4" />
            <blockquote className="text-gray-300 mb-6">
              "{selectedStory.testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src={selectedStory.testimonial.image}
                alt={selectedStory.testimonial.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-white">
                  {selectedStory.testimonial.author}
                </div>
                <div className="text-sm text-gray-400">
                  {selectedStory.testimonial.role}, {selectedStory.testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

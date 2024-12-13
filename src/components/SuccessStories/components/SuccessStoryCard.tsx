import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Quote, ChartBar } from 'lucide-react';

export default function SuccessStoryCard({ story }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative bg-navy-800/50 backdrop-blur-sm rounded-3xl border border-white/5 p-8 hover:border-pink-500/20 transition-all duration-500">
        {/* Header Section */}
        <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent z-10" />
          <motion.img
            src={story.image}
            alt={story.company}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-xl font-bold text-white mb-1">{story.company}</h3>
            <p className="text-gray-300">{story.industry}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {story.stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-navy-700/50 rounded-xl p-4 backdrop-blur-sm"
            >
              <div className="text-xl font-bold text-pink-500">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="relative mb-8">
          <Quote className="absolute -top-2 -left-1 w-5 h-5 text-pink-500/20" />
          <blockquote className="pl-6 text-gray-300 italic">
            "{story.testimonial}"
          </blockquote>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={story.clientImage}
              alt={story.clientName}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-pink-500/20"
            />
            <div>
              <div className="font-medium text-white">{story.clientName}</div>
              <div className="text-sm text-gray-400">{story.clientRole}</div>
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-xl bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 transition-colors"
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Rocket, ArrowRight, Star } from 'lucide-react';
import { openCalendly } from '../../utils/calendly';
import { useSuccessStories } from '../../contexts/SuccessStoriesContext';

export default function ServicesCTA() {
  const { showSuccessStoriesView } = useSuccessStories();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="relative mt-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
      
      {/* Content Container */}
      <div className="relative bg-navy-800/50 backdrop-blur-sm rounded-3xl border border-white/5 p-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-pink-500/10 px-4 py-2 rounded-full mb-8"
          >
            <Star className="w-4 h-4 text-pink-500" />
            <span className="text-pink-500 text-sm font-medium">Join Industry Leaders</span>
            <Star className="w-4 h-4 text-pink-500" />
          </motion.div>

          {/* Main Heading */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Scale Your Success
            </span>
            <br />
            <span className="text-white">With Our Proven Strategies</span>
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
          >
            Join the ranks of successful brands who've achieved extraordinary growth through our data-driven marketing expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="group" onClick={openCalendly}>
              <Rocket className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
              Schedule a Strategy Call
            </Button>
            <Button size="lg" variant="secondary" className="group" onClick={showSuccessStoriesView}>
              View Success Stories
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-sm text-gray-400"
          >
            Trusted by leading brands worldwide • 97% client satisfaction rate
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
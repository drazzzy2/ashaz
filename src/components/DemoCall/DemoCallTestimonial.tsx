import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function DemoCallTestimonial() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-3xl transform rotate-3" />
      <div className="relative bg-white rounded-3xl p-8 shadow-xl">
        <Quote className="w-12 h-12 text-pink-500/20 mb-6" />
        
        <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
          "Working with Ashaz transformed our business. His strategic insights helped us 
          <span className="font-semibold text-pink-500"> increase our revenue by 300%</span> in just 6 months."
        </blockquote>
        
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
            alt="Client"
            className="w-12 h-12 rounded-full object-cover ring-4 ring-pink-500/10"
          />
          <div>
            <div className="font-semibold text-gray-900">Michael Chen</div>
            <div className="text-sm text-gray-500">CEO, TechFlow Solutions</div>
          </div>
        </div>

        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-2xl" />
      </div>
    </motion.div>
  );
}
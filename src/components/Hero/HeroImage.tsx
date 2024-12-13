import React from 'react';
import { motion } from 'framer-motion';

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 hidden lg:block"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-l from-navy-900/80 via-navy-900/20 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
          alt="Digital Marketing Analytics"
          className="w-full h-[600px] object-cover rounded-l-3xl"
        />
        <div className="absolute bottom-8 right-8 bg-navy-800/90 backdrop-blur-sm p-6 rounded-xl z-20 max-w-sm">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold">Latest Campaign</p>
              <p className="text-gray-400 text-sm">+127% ROI Increase</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
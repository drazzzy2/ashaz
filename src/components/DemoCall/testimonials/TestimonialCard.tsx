import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from './testimonialData';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

export default function TestimonialCard({ testimonial, isActive }: TestimonialCardProps) {
  return (
    <motion.div
      layout
      className="relative"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-3xl transform rotate-3"
        animate={{
          rotate: [3, 2, 3],
          transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      />
      
      <div className="relative bg-white rounded-3xl p-8 shadow-xl">
        <Quote className="w-12 h-12 text-pink-500/20 mb-6" />
        
        <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
          "{testimonial.quote}{' '}
          <span className="font-semibold text-pink-500">{testimonial.highlightedText}</span>."
        </blockquote>
        
        {testimonial.metrics && (
          <motion.div 
            className="grid grid-cols-2 gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {testimonial.metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-4 rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <motion.div 
                  className="text-2xl font-bold text-pink-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {metric.value}
                </motion.div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative w-12 h-12">
            <motion.img
              src={testimonial.author.image}
              alt={testimonial.author.name}
              className="w-full h-full rounded-full object-cover ring-4 ring-pink-500/10"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-lg"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.2, 1],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          </div>
          <div>
            <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
            <div className="text-sm text-gray-500">
              {testimonial.author.role}, {testimonial.author.company}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
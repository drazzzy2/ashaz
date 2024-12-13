import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star } from 'lucide-react';
import { fadeAnimation } from './animations';

export default function DemoCallHeader() {
  return (
    <div className="mb-12">
      <motion.div {...fadeAnimation}>
        <div className="flex items-center gap-2 mb-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-gray-600">5.0 Average Rating</span>
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-5xl font-black mb-6 leading-tight"
        >
          <span className="text-gray-900">Transform Your Business With </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Expert Guidance
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 text-lg mb-8 leading-relaxed"
        >
          Book your free 30-minute strategy session with Ashaz and discover how to scale your business with proven marketing frameworks.
        </motion.p>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Calendar className="w-5 h-5 text-pink-500" />
          <span>Next available slot: Tomorrow at 10:00 AM</span>
        </div>
      </motion.div>
    </div>
  );
}
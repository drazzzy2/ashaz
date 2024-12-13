import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { demoCallBenefits } from './demoCallData';

export default function DemoCallBenefits() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="space-y-4 mb-12"
    >
      {demoCallBenefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          className="flex items-start gap-3 group"
        >
          <div className="mt-1">
            <CheckCircle2 className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <p className="text-gray-700">
              {benefit.text}{' '}
              <span className="font-medium text-gray-900">{benefit.highlight}</span>
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
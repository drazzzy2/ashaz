import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { DemoCallBenefit } from '../../../types';

interface BenefitCardProps {
  benefit: DemoCallBenefit;
  index: number;
}

export function BenefitCard({ benefit, index }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
      className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-lg shadow-gray-100/50 border border-gray-100 hover:border-pink-100 transition-colors duration-300"
    >
      <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
      <p className="text-gray-600">
        {benefit.text}{' '}
        <span className="text-pink-500 font-semibold">{benefit.highlight}</span>
      </p>
    </motion.div>
  );
}
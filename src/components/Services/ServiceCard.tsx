import React from 'react';
import { motion } from 'framer-motion';
import { ServiceType } from '../../types';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-navy-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-pink-500/20 transition-colors duration-300">
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
          <ArrowUpRight className="w-5 h-5 text-pink-500 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
        
        <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
        
        {service.features && (
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
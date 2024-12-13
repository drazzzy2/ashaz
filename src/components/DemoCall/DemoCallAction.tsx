import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Calendar, ArrowRight, Shield } from 'lucide-react';
import { openCalendly } from '../../utils/calendly';

export default function DemoCallAction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <Button 
        size="lg" 
        className="group w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
        onClick={openCalendly}
      >
        <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
        Book Your Strategy Session
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
      
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
        <Shield className="w-4 h-4" />
        <p>No credit card required • 100% free consultation</p>
      </div>
    </motion.div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';
import { Rocket, ArrowRight } from 'lucide-react';
import { openCalendly } from '../../../utils/calendly';

export default function SuccessStoriesCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
      
      <div className="relative bg-navy-800/50 backdrop-blur-sm rounded-3xl border border-white/5 p-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Ready to Write Your Own
          </span>
          <br />
          <span className="text-white">Success Story?</span>
        </h3>

        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Join the ranks of successful businesses who have transformed their growth 
          with our proven marketing strategies.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="group" onClick={openCalendly}>
            <Rocket className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
            Schedule Your Strategy Call
          </Button>
          <Button 
            size="lg" 
            variant="secondary" 
            className="group"
            onClick={openCalendly}
          >
            Learn More About Our Process
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-sm text-gray-400"
        >
          No commitment required • 30-minute free consultation
        </motion.div>
      </div>
    </motion.div>
  );
}
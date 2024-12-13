import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface StoryFooterProps {
  clientName: string;
  clientRole: string;
  clientImage: string;
}

export default function StoryFooter({ clientName, clientRole, clientImage }: StoryFooterProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={clientImage}
          alt={clientName}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-pink-500/20"
        />
        <div>
          <div className="font-medium text-white">{clientName}</div>
          <div className="text-sm text-gray-400">{clientRole}</div>
        </div>
      </div>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-xl bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 transition-colors"
      >
        <ArrowUpRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Quote } from 'lucide-react';

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    image: string;
    quote: string;
    social?: {
      twitter?: string;
      linkedin?: string;
    };
  };
  index: number;
}

export default function TeamMemberCard({ member, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative bg-navy-800/50 backdrop-blur-sm rounded-3xl border border-white/5 p-8 hover:border-pink-500/20 transition-all duration-500">
        <div className="flex items-start gap-6 mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-white/10 group-hover:ring-pink-500/20 transition-all duration-500">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-pink-500 rounded-lg flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-500 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-gray-400 font-medium">{member.role}</p>
          </div>
        </div>

        <div className="relative">
          <Quote className="absolute -top-2 -left-1 w-5 h-5 text-pink-500/20" />
          <p className="text-gray-400 text-sm leading-relaxed pl-6">
            {member.quote}
          </p>
        </div>

        <div className="absolute bottom-4 right-4">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
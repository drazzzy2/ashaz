import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, MessageCircle } from 'lucide-react';
import { Container } from '../ui/Container';
import { contactInfo } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fadeInUp } from '../../utils/animations';
import { Button } from '../ui/Button';

export default function ContactSection() {
  const { ref, controls } = useScrollAnimation();

  return (
    <div className="relative bg-navy-900 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-navy-800/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      </div>

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="relative"
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-pink-500/10 px-4 py-2 rounded-full mb-8"
            >
              <MessageCircle className="w-4 h-4 text-pink-500" />
              <span className="text-pink-500 text-sm font-medium">Get in Touch</span>
              <MessageCircle className="w-4 h-4 text-pink-500" />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Let's Start a Conversation
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
            >
              Ready to transform your business? Reach out to us and let's discuss how we can help you achieve your goals.
            </motion.p>

            {/* Email Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href={`mailto:${contactInfo.email}`}
                className="group inline-flex items-center gap-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-2xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-xl shadow-pink-500/20"
              >
                <Mail className="w-6 h-6 group-hover:rotate-6 transition-transform duration-300" />
                <span className="text-lg font-medium">{contactInfo.email}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 text-sm text-gray-400"
            >
              Your information is protected by 256-bit encryption
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

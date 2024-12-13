import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function FooterSocial() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex items-center justify-center gap-6 mb-8"
    >
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="text-gray-400 hover:text-pink-500 transition-colors"
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </motion.div>
  );
}
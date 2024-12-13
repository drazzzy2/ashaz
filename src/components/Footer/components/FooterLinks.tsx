import React from 'react';
import { motion } from 'framer-motion';
import { footerLinks } from '../data/footerData';

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      {footerLinks.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="text-white font-semibold mb-4">{section.title}</h3>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.text}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-pink-500 transition-colors text-sm"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
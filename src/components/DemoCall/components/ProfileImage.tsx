import React from 'react';
import { motion } from 'framer-motion';

interface ProfileImageProps {
  src: string;
  alt: string;
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  return (
    <div className="w-32 h-32 mx-auto mb-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-lg" />
        <img
          src={src}
          alt={alt}
          className="relative w-full h-full object-cover rounded-full ring-4 ring-white shadow-xl"
        />
      </div>
    </div>
  );
}
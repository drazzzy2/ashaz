import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
}

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed top-8 left-8 px-6 py-3 bg-navy-800 rounded-full text-white hover:bg-navy-700 transition-colors flex items-center gap-2"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
}
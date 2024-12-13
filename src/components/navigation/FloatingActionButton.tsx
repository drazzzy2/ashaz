import React from 'react';
import { Play } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export default function FloatingActionButton({ onClick }: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 px-6 py-3 bg-pink-500 rounded-full text-white hover:bg-pink-600 transition-colors flex items-center gap-2"
    >
      <Play className="w-4 h-4" />
      Watch Success Stories
    </button>
  );
}
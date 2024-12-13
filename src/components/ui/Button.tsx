import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  size = 'md',
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-pink-500 hover:bg-pink-600 text-white',
    secondary: 'bg-navy-800 hover:bg-navy-700 text-white',
  };

  return (
    <button
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-full
        font-semibold
        transition-colors
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
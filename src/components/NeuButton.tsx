import React from 'react';

interface NeuButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const NeuButton: React.FC<NeuButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 rounded-xl font-medium transition-all duration-200
        bg-gradient-to-r from-blue-500 via-cyan-400 via-teal-300 to-green-300
        text-gray-800 dark:text-white
        border-none
        shadow-md
        hover:shadow-xl
        hover:from-blue-400 hover:via-cyan-300 hover:to-green-200
        focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-40
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${className}
      `}
      style={{
        boxShadow: '0 0 16px 4px rgba(0, 255, 255, 0.15), 0 0 32px 8px rgba(0, 255, 200, 0.08)',
        ...((disabled && { filter: 'grayscale(0.5)' }) || {})
      }}
    >
      {children}
    </button>
  );
};
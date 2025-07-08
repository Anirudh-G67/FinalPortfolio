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
        bg-gradient-to-r from-green-600 via-teal-700 to-cyan-800 dark:from-green-700 dark:via-teal-800 dark:to-cyan-900
        text-white dark:text-green-100
        border border-green-500/30 dark:border-green-600/30
        shadow-neu hover:shadow-neu-hover
        hover:scale-105 active:scale-95
        hover:from-green-500 hover:via-teal-600 hover:to-cyan-700 dark:hover:from-green-600 dark:hover:via-teal-700 dark:hover:to-cyan-800
        focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${className}
      `}
    >
      {children}
    </button>
  );
};
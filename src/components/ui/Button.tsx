import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary: "bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:border-gray-700 focus:ring-gray-500"
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-2",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3"
  };
  
  const disabledStyles = disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer";
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;
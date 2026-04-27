import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export function Card({ children, className, onClick, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={cn(
        "bg-surface border border-white/5 rounded-2xl overflow-hidden transition-all duration-300",
        hover && "hover:border-brand/30 cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
}

export function Button({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  ...props 
}: ButtonProps) {
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-dark red-glow",
    secondary: "bg-surface text-white hover:bg-surface-hover border border-white/10",
    ghost: "bg-transparent text-white hover:bg-white/5",
    outline: "bg-transparent border-2 border-brand text-brand hover:bg-brand hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold",
    xl: "px-10 py-5 text-xl font-black uppercase tracking-wider"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center rounded-xl transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      ) : children}
    </motion.button>
  );
}

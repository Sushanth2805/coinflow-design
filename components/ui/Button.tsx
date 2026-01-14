import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'white' | 'dark';
  className?: string;
  icon?: React.ElementType;
  onClick?: () => void;
  fullWidth?: boolean;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon: Icon,
  onClick,
  fullWidth = false
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 transform active:scale-95";
  const variants = {
    primary: "bg-primary text-white hover:bg-black shadow-lg shadow-primary/25 hover:shadow-primary/40",
    dark: "bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-md",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-secondary hover:text-primary hover:bg-black/5",
    white: "bg-white text-primary hover:bg-gray-50 border border-gray-100 shadow-md hover:shadow-lg"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}>
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
};

export default Button;
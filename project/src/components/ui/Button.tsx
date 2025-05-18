import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'subtle';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white shadow-sm focus:ring-blue-500",
    outline: "border border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-50 focus:ring-slate-500",
    subtle: "text-slate-700 hover:bg-slate-100 focus:ring-slate-500"
  };

  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3"
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
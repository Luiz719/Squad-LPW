import React from 'react';

const variantStyles = {
  "primary": 'bg-blue-600 text-white hover:bg-blue-700',
  "secondary": 'bg-white text-gray-700 border border-gray-300',
  "tertiary": 'bg-transparent text-bank-primary hover:text-bank-primary-dark',
};

const sizeStyles = {
  sm: 'py-1 px-3 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-3 px-6 text-lg',
};


type ButtonVariant = keyof typeof variantStyles;
type ButtonSize = keyof typeof sizeStyles;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const disabledStyles = 'opacity-50 cursor-not-allowed';

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ...props
}) => {
  const classes = [
    variantStyles[variant],
    sizeStyles[size],
    disabled && disabledStyles,
    className
  ];

  const finalClassName = classes.filter(Boolean).join(' ');

  return (
    <button
      className={finalClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

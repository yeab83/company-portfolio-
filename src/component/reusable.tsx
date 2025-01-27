import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', disabled, children, ...props }) => {
  const baseClasses = `px-4 py-2 font-semibold rounded transition-all duration-200`;
  const variants = {
    primary: `bg-primary text-white hover:bg-opacity-90`,
    secondary: `bg-secondary text-white hover:bg-opacity-90`,
    outline: `border border-primary text-primary hover:bg-primary hover:text-white`,
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

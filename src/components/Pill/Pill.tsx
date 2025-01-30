'use client';

import React from 'react';


interface PillProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  active?: boolean;
}

const Pill: React.FC<PillProps> = ({
  children,
  size = 'medium',
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  active = false,
}) => {
  const baseStyles = `
    rounded-full
    font-secondary
    font-extrabold
    border-8
  `;

  const variantStyles =
    variant === 'primary'
      ? 'bg-cyan-700 hover:bg-cyan-600 border-cyan-800 text-cyan-100'
      : variant === 'secondary'
      ? 'bg-zinc-700 hover:bg-zinc-600 border-zinc-800 text-zinc-100'
      : 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500';

  const sizeStyles =
    size === 'small'
      ? 'px-3 py-1 text-sm'
      : size === 'large'
      ? 'px-10 py-2 text-lg'
      : 'px-10 py-2 text-lg';

  const activeStyles = active ? 'shadow-lg' : 'shadow-none hover:shadow-md';

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const combinedClassName = `
    ${baseStyles} 
    ${sizeStyles} 
    ${variantStyles} 
    ${activeStyles} 
    ${disabledStyles} 
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
      aria-pressed={active}
    >
      {children}
    </button>
  );
};

export default Pill;

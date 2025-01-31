'use client';

import React from 'react';


interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset'; 
}

export default function Button({
  children,
  size = 'medium',
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'font-secondary font-bold rounded-lg border-8';

  const sizeStyles =
    size === 'small'
      ? 'px-3 py-1 text-sm'
      : size === 'large'
      ? 'px-7 py-1 text-lg'
      : 'px-5 py-1 text-base';

  const variantStyles =
    variant === 'secondary'
      ? 'bg-zinc-700 hover:bg-zinc-600 border-zinc-800 text-zinc-100'
      : variant === 'danger'
      ? 'bg-red-700 hover:bg-red-600 border-red-800 text-red-100'
      : 'bg-cyan-700 hover:bg-cyan-600 border-cyan-800 text-cyan-100';

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const computedClassName = `${baseStyles} ${sizeStyles} ${variantStyles} ${disabledStyles} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      className={computedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

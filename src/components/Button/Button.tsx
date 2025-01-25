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
  const baseStyles = 'font-main font-bold rounded-full';

  const sizeStyles =
    size === 'small'
      ? 'px-3 py-1 text-sm'
      : size === 'large'
      ? 'px-7 py-2 text-lg'
      : 'px-5 py-2 text-base';

  const variantStyles =
    variant === 'secondary'
      ? 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400'
      : variant === 'danger'
      ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
      : 'bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-600';

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

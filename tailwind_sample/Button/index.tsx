import React, { forwardRef } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'alert';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  size = 'medium',
  color = 'primary',
  className = '',
  ...props
}, ref) =>
{
  const sizeClasses = {
    small: 'px-1 py-1 text-sm',
    medium: 'px-2 py-1.5 text-base',
    large: 'px-3 py-2 text-lg',
  };

  const colorClasses = {
    primary: 'text-white bg-primary hover:bg-primary-dark',
    secondary: 'text-black bg-secondary hover:bg-secondary-dark',
    alert: 'text-white bg-alert hover:bg-alert-dark',
  }

  const baseClasses = 'font-medium rounded-lg transition ease-in-out duration-150';
  const finalClassName = `${baseClasses} ${sizeClasses[size]} ${colorClasses[color]} ${className}`;

  return (
    <button ref={ref} className={finalClassName} {...props}>
      {children}
    </button>
  );
});

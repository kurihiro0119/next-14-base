import React from 'react';
import { forwardRef, type ComponentPropsWithRef } from 'react';

type TextFieldProps = ComponentPropsWithRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextFieldBase({ className, ...props }, ref)
  {
    return (
      <input
        type="text"
        {...props}
        ref={ref}
        className={`p-3 text-base border border-gray-300 rounded bg-gray-100 placeholder-gray-400 disabled:border-gray-200 disabled:bg-gray-50 disabled:placeholder-gray-300 ${className}`}
      />
    );
  },
);
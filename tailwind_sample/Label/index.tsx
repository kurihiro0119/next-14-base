import React from "react";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type LabelProps = ComponentPropsWithoutRef<"label"> & {
  size?: "xsmall" | "small" | "medium" | "large";
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({
  size = "medium", className, ...props
}, ref) =>
{
  const baseClasses = "block font-bold text-gray-800";
  const sizeClasses = {
    xsmall: "text-xs",
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const responsiveClasses = {
    xsmall: "md:text-xs",
    small: "md:text-sm",
    medium: "md:text-base",
    large: "md:text-lg",
  };

  return (
    <label
      {...props}
      ref={ref}
      className={clsx(
        baseClasses,
        sizeClasses[size],
        responsiveClasses[size],
        className
      )
      }
    />
  )
})
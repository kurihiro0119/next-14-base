import React, { forwardRef } from "react";

type ButtonCircleProps = Omit<React.ComponentPropsWithoutRef<"button">, "children"> & {
  size?: "small" | "medium" | "large";
  icon?: "plus";
  color?: "black" | "orange";
}

export const ButtonCircle = forwardRef<HTMLButtonElement, ButtonCircleProps>(
  ({ className, size = "medium", icon = "plus", color = "black", ...props }, ref) =>
  {
    // Tailwind CSS classes for sizes
    const sizeClasses = {
      small: "p-2.5",
      medium: "p-4",
      large: "p-6"
    };

    // Tailwind CSS classes for colors
    const colorClasses = {
      black: {
        base: "bg-gray-900",
        hover: "hover:bg-gray-700",
        focus: "focus-visible:bg-gray-700 focus-visible:outline-gray-300",
        active: "active:bg-gray-800 active:outline-gray-300"
      },
      orange: {
        base: "bg-orange-800",
        hover: "hover:bg-orange-700",
        focus: "focus-visible:bg-orange-700 focus-visible:outline-orange-500",
        active: "active:bg-orange-800 active:outline-orange-500"
      }
    };

    // Icon styles (here simplified as classes)
    const iconStyles = {
      plus: "before:content-[''] before:block before:w-3.5 before:h-3.5 before:bg-[url('/assets/icons/plus.svg')] before:bg-no-repeat before:bg-center"
    };

    return (
      <button
        {...props}
        ref={ref}
        className={`${sizeClasses[size]} ${colorClasses[color].base} ${colorClasses[color].hover} ${colorClasses[color].focus} ${colorClasses[color].active} ${iconStyles[icon]} rounded-full border-none text-white cursor-pointer outline-none ${className}`}
      />
    );
  }
);
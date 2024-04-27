import React, { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { Icon } from "../Icon";


type LikeButtonProps = ComponentPropsWithoutRef<"button"> & {
  count: number;
  size?: "xsmall" | "small";
  color?: "orange";
  isSubmitting?: boolean;
};

const sizeClasses = {
  xsmall: "w-6 h-6",
  small: "w-12 h-8",
};

const colorClasses = {
  gray: "text-gray-400",
  orange: "text-orange-800",
}

export const LikeButton = forwardRef<HTMLButtonElement, LikeButtonProps>(
  function LikeButtonBase(
    {
      count,
      size = "small",
      color = "orange",
      className,
      disabled,
      isSubmitting,
      ...props
    },
    ref,
  )
  {
    const submittingClasses = isSubmitting ? "text-gray-400 pointer-events-none" : "";
    const disabledClassess = disabled ? "pointer-events-none" : "";
    return (
      <button
        {...props}
        ref={ref}
        disabled={disabled}
        className={`flex justify-center items-center border-none font-bold gap-3 ${colorClasses[color]} bg-white cursor-pointer select-none transition-opacity duration-200 ${sizeClasses[size]} ${submittingClasses} ${disabledClassess} ${className}`}
      >
        {isSubmitting ? "..." : count}
        <Icon
          type={disabled ? "heart" : "heart-border"}
          color={isSubmitting ? "gray" : color}

        />
      </button>
    );
  },
);
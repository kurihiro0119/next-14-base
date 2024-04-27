import React from "react";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import Link from "next/link";

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  size?: "xsmall" | "small" | "medium" | "large";
  color?: "black" | "orange" | "gray" | "white";
};

const sizeClasses = {
  xsmall: "px-3 py-1.5 text-xs",
  small: "px-5 py-2.5 text-sm",
  medium: "px-7 py-3.5 text-base",
  large: "px-9 py-4 text-lg",
}

const colorClasses = {
  black: "text-white bg-black hover:bg-gray-800 focus-visible:ring-4 focus-visible:ring-orange-500 active:bg-black focus:outline-none",
  orange: "text-white bg-orange-800 hover:bg-orange-700 focus-visible:ring-4 focus-visible:ring-orange-500 active:bg-orange-800 focus:outline-none",
  gray: "text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 focus-visible:ring-4 focus-visible:ring-orange-500 active:bg-gray-200 focus:outline-none",
  white: "text-gray-700 bg-white border border-gray-800 hover:bg-gray-200 focus-visible:ring-4 focus-visible:ring-orange-500 active:bg-gray-100 focus:outline-none",
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  function LinkButtonBase(
    { className, size = "medium", color = "black", ...props },
    ref,
  )
  {
    return (
      <Link
        {...props}
        ref={ref}
        className={clsx(
          "inline-black border-transparent rounded text-center corsor-pointer",
          sizeClasses[size],
          colorClasses[color],
          className
        )}
      />
    )
  }
)
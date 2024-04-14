import React, { createElement } from "react";
import { type ComponentPropsWithRef } from "react";

type Size = "xsmall" | "small" | "medium" | "large";
type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: Size;
  children: React.ReactNode;
} & ComponentPropsWithRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

export const Heading = ({
  level,
  size = "medium",
  children,
  className,
  ...props
}: HeadingProps) =>
{
  const sizeClasses = {
    xsmall: "text-xs md:text-[12px]",
    small: "text-sm md:text-[14px]",
    medium: "text-base md:text-[16px]",
    large: "text-lg md:text-[18px]",
  };

  const defaultClass = "block font-bold text-gray-800";

  return createElement(
    `h${level}`,
    {
      className: `${defaultClass} ${sizeClasses[size]}`,
      ...props
    },
    children,
  );
}
import { type ComponentPropsWithRef, createElement } from "react";
import clsx from "clsx";

type Size = "xsmall" | "small" | "medium" | "large";
type Tag = 'p' | 'span' | 'li';

type TypographyProps<T extends Tag> = {
  tag?: T;
  size?: Size;
  bold?: boolean;
} & ComponentPropsWithRef<T>;

const sizeClasses = {
  xsmall: 'text-xs smtest-2xs',
  small: 'text-sm sm:text-xs',
  medium: 'text-base sm:text-sm',
  large: 'text-lg sm:text-base',
};

const baseClasses = 'leading-normal text-gray-800'

export const Typography = <T extends Tag>({
  tag,
  className,
  children,
  size = 'medium',
  bold,
  ...props
}: TypographyProps<T>) =>
{
  return createElement(
    tag || 'p',
    {
      className: clsx(
        baseClasses,
        sizeClasses[size],
        {
          'font-bold': bold,
        },
        className
      ),
      ...props,
    },
    children
  );
}
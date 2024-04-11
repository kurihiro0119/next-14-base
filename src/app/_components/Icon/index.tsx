import React from "react";

export type IconProps = {
  type:
  | "account"
  | "alert"
  | "camera"
  | "comments"
  | "gear"
  | "heart-border"
  | "heart"
  | "home"
  | "paper-plane"
  | "photos"
  | "trash-box"
  | "upload"
  | "user"
  | "zoom";
  size?: "xsmall" | "small" | "medium" | "large";
  color?: "black" | "white" | "gray" | "orange";
  className?: string;
}

const sizeClasses = {
  xsmall: "w-4 h-4 sm:w-3 sm:h-3",
  small: "w-6 h-6 sm:w-4 sm:h-4",
  medium: "w-8 h-8 sm:w-6 sm:h-6",
  large: "w-12 h-12 sm:w-9 sm:h-9",
}

const colorClasses = {
  black: "bg-gray-900",
  gray: "bg-gray-500",
  orange: "bg-orange-800",
  white: "bg-white",
}

export const Icon = ({ type, size = "small", color = "black", className = "" }: IconProps) =>
{
  // アイコンのURLをタイプに基づいて決定
  const iconUrl = `/assets/icons/${type}.svg`;
  const iconStyle = {
    backgroundImage: `url(${iconUrl})`,
  }
  const baseClasses = "inline-block bg-center bg-cover rounded-full"
  return (
    <span
      className={`${sizeClasses[size]} ${colorClasses[color]} ${baseClasses}`}
      style={iconStyle}
    />
  );
}
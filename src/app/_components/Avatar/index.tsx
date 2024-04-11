import React from "react";

type AvatarProps = {
  size?: "small" | "medium" | "large";
  avatarImageUrl?: string | null;
}

export const Avatar = ({ size = "medium", avatarImageUrl = null }: AvatarProps) =>
{
  const sizeClasses = {
    small: "w-8 h-8 sm:w-6 sm:h-6",  // デフォルト 32px, 768px以下で 24px
    medium: "w-12 h-12 sm:w-9 sm:h-9",  // デフォルト 48px, 768px以下で 36px
    large: "w-16 h-16 sm:w-12 sm:h-12",  // デフォルト 64px, 768px以下で 48px
  }

  const baseClasses = "inline-block bg-center bg-cover rounded-full bg-white"
  const avatarStyle = {
    backgroundImage: avatarImageUrl
      ? `url(${avatarImageUrl})`
      : `url('assets/icons/account.svg')`
  };

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]}`}
      style={avatarStyle}
    />
  )
}
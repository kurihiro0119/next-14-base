import React from "react";
import { Avatar } from "../Avatar";

type AccountProps = {
  name?: string | null;
  imageUrl?: string | null;
  screenName?: string | null;
  avatarSize?: "small" | "medium" | "large";
};

export const Account = ({
  name,
  imageUrl,
  screenName,
  avatarSize = "medium",
}: AccountProps) =>
{
  return (
    <div className="flex items-center space-x-4">
      <Avatar size={avatarSize} avatarImageUrl={imageUrl} />
      <div className="flex flex-col">
        {name && <p className="text-lg font-bold">{name}</p>}
        {screenName && <p className="text-sm text-gray-500">@{screenName}</p>}
      </div>
    </div>
  )
}
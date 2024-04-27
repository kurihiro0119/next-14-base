import React from "react";
import Link from "next/link";
import { Account } from "../Account";

type User = {
  id: string;
  name?: string | null;
  imageUrl?: string | null;
  screenName?: string | null;
}

type AccountsProps = {
  users: User[];
};

export const Accounts = ({ users }: AccountsProps) =>
{
  return (
    <div className="p-4 border border-gray-200 rounded-lg space-y-4">
      {users.map(({ id, name, imageUrl, screenName }) => (
        <Link key={id} href={`/users/${screenName}`}>
          <div className="py-8 border-t border-gray-200 first:pt-0 last:pb-0 last:border-b-0 cursor-pointer">
            <Account name={name} imageUrl={imageUrl} screenName={screenName} avatarSize="small" />
          </div>
        </Link>
      ))}
    </div>
  )
}
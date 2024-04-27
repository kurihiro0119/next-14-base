import React from "react";
import Link from "next/link";
import { Typography } from "../../Typography";


export const Footer = () =>
{
  return (
    <footer className="flex justify-center items-center p-8 border-t ">
      <Typography size="small" className="mr-8 mb-2 md:mr-0 md:md-2">
        &copy; 2024 Next.js TailwindCSS All rights reserved.
      </Typography>
      <ul className="flex gap-4">
        <li>
          <Link href="/privacy-policy">
            <a className="text-gray-700 underline hoverno-underline">プライバシー・ポリシー</a>
          </Link>
        </li>
        <li>
          <Link href="/company-info">
            <a className="text-gray-700 underline hoverno-underline">会社概要</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
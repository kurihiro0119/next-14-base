import { SITE_NAME } from "@/constants";
import "./globals.css";

export const metadata = {
  title: SITE_NAME,
  description: "A photo sharing app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{ children }</body>
    </html>
  );
}
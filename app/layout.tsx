import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Red Carpet",
  description: "Gemacht für den SZ-Ybbs Schulball 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title></title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" />
      </head>
      <body>{children}</body>
    </html>
  );
}

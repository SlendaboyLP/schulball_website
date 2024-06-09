import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

export const meta: Metadata = {
  title: "Red Carpet",
  description: "Gemacht für den SZ-Ybbs Schulball 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex flex-col justify-between min-h-screen">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title></title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" />
      </head>
      <body className="flex flex-col justify-between min-h-screen">
        <NavBar />
        <div className="flex-grow bg-mainDarkGray">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

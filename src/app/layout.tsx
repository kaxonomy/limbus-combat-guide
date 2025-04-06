import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import "./styles/app.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Limbus Company Combat Guide",
  description: "A comprehensive guide to understanding Limbus Company's combat system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="stylesheet" href="/styles/app.css" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

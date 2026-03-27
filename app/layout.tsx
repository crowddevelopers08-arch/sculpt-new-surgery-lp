import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-headline"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "The Clinical Atelier | Premium Maxillofacial Surgery",
  description:
    "Premium maxillofacial surgery landing page recreated in Next.js 15."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${outfit.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}

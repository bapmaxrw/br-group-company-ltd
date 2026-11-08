import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import ScrollEnhancements from "@/components/ScrollEnhancements";

export const metadata: Metadata = {
  title: "BR Group Company | Global Trade & Supply Solutions",
  description: "Leading e-commerce platform for global trade, sourcing, and supply chain solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          <ScrollEnhancements />
          {children}
        </Providers>
      </body>
    </html>
  );
}

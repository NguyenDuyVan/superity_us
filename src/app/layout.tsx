import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Infinity Fulfillment — Your All-in-One China Fulfillment Center",
  description:
    "Simplify your e-commerce with Infinity's hassle-free China fulfillment solution. No setup, monthly or storage fees — same-day fulfillment, quality inspection and 24/7 support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-ink">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import PreloaderWrapper from "@/components/PreloaderWrapper";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Satya | Portfolio",
  description: "Minimalist portfolio with premium animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased selection:bg-blue-500 selection:text-white`} suppressHydrationWarning>
        <PreloaderWrapper />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

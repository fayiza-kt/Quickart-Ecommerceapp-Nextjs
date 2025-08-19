
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quickart - Search for Products",
  description: "search for products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div style={{ padding: "1rem" }}>
          <h2>Products</h2>
          <a href="#bottomsection">Go to End of list</a>
          {children} 
          <h3 id="bottomsection">End of list</h3>
        
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import QBem from 'qbem';
import styles from './layout.module.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bem = new QBem('layout');

export const metadata: Metadata = {
  title: "Portfolio | Principal Engineer",
  description: "Portfolio showcasing my expertise in software engineering, system architecture, and technical leadership.",
  keywords: ["software engineer", "principal engineer", "system architecture", "technical leadership", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className={styles[bem.block()]}>
          <div className={styles[bem.elem('content')]}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

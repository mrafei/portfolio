import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import LayoutHeader from "@/components/Layout/Header";
import ThemeRegistry from "@/components/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mrafei Portfolio",
  description: "I showcase my projects here!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeRegistry>
      <html lang="en">
        <body className={inter.className}>
          <LayoutHeader />
          {children}
        </body>
      </html>
    </ThemeRegistry>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Transition from "./transition";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talent Sync Assessment",
  description: "A simple assessment for Talent Sync",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}

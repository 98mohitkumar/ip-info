import "./globals.css";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";
import { Providers } from "./providers";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className='min-h-screen w-full'>
            <ThemeSwitcher />

            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

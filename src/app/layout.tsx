import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";
import { Providers } from "./providers";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Toaster } from "@/components/Toaster";
import { cn } from "@/utils/helpers";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(inter.variable, GeistMono.variable, "font-sans")}>
        <Providers>
          <main className='min-h-screen w-full'>
            <ThemeSwitcher />
            {children}
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";
import { Providers } from "./providers";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Toaster } from "@/components/Toaster";
import { siteConfig } from "@/globals/constants";
import { cn } from "@/utils/helpers";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#b06ef3" },
    { media: "(prefers-color-scheme: light)", color: "#4f0c92" }
  ]
};

export const metadata: Metadata = {
  ...siteConfig,
  appleWebApp: {
    title: siteConfig.title,
    capable: true,
    statusBarStyle: "black-translucent",
    startupImage: "/logo512.png"
  },
  manifest: "/manifest.json",
  applicationName: siteConfig.title,
  metadataBase: new URL("https://knowyourip.vercel.app"),
  openGraph: siteConfig
};

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

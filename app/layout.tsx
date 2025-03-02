import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { navbarLinks } from "@/config/navbar";

import { MainNav } from "@/components/main-nav";

import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tusarakanta Palauri",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-background min-h-screen antialiased">
        <NextTopLoader showSpinner={false} color="#2563eb" shadow={false} />
        <header>
          <MainNav items={navbarLinks.main} />
        </header>
        <main className="flex-1 py-16">{children}</main>
      </body>
    </html>
  );
}

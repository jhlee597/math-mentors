import type { Metadata } from "next";
import { Archivo, Noto_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SourceInspector from "@/components/dev/SourceInspector";
import { site } from "@/data/site";
import { Analytics } from "@vercel/analytics/next";

const display = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const body = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        {process.env.NODE_ENV === "development" && <SourceInspector />}
      </body>
    </html>
  );
}

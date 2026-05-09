import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NewSmile — Laboratorio Dental de Élite",
  description: "Alta especialización técnica protésica y estética en tu consultorio, en tiempos reducidos. Consultoría y acompañamiento en cada diagnóstico. Toluca, México.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`h-full ${jakarta.variable} ${inter.variable}`}>
      <head>
        {/* Hero LCP image — preload the Next.js optimized variants so the browser starts fetching immediately */}
        <link
          rel="preload"
          as="image"
          imageSrcSet="/_next/image?url=%2Fbgheronew.png&w=828&q=75 828w, /_next/image?url=%2Fbgheronew.png&w=1080&q=75 1080w, /_next/image?url=%2Fbgheronew.png&w=1200&q=75 1200w, /_next/image?url=%2Fbgheronew.png&w=1920&q=75 1920w"
          imageSizes="100vw"
          fetchPriority="high"
        />
        <link rel="preload" as="image" href="/newsmile%20icon.png" />
        <link rel="preload" as="font" type="font/otf" href="/fonts/GillSans-Regular.otf" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

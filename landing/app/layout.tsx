import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
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
    <html lang="es" className={`h-full ${jakarta.variable}`}>
      <head>
        {/* Preload hero image so LCP isn't blocked waiting for CSS to parse */}
        <link rel="preload" as="image" href="/bg-hero.png" fetchPriority="high" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

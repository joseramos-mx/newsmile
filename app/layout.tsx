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

const SITE_URL = "https://newsmileld.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "New Smile Dental Lab | Laboratorio Dental en Toluca | Coronas y Prótesis",
    template: "%s | New Smile Dental Lab",
  },

  description:
    "Laboratorio dental de alta especialización en Toluca, México. Coronas, puentes, prótesis sobre implantes y cerámica estética de élite. Entregamos calidad High End en tiempos reducidos. Consultoría caso por caso.",

  keywords: [
    "laboratorio dental Toluca",
    "laboratorio dental Toluca de Lerdo",
    "coronas dentales Toluca",
    "prótesis dental Toluca",
    "cerámica dental Toluca",
    "implantes dentales Toluca",
    "laboratorio dental Estado de México",
    "restauraciones dentales Toluca",
    "puentes dentales Toluca",
    "laboratorio prostodóncico Toluca",
    "HeraCeram Saphir Toluca",
    "diseño de sonrisa digital Toluca",
    "new smile dental lab",
    "newsmile dental",
    "NewSmile Toluca",
    "laboratorio dental élite México",
  ],

  authors: [{ name: "New Smile Dental Lab", url: SITE_URL }],
  creator: "New Smile Dental Lab",
  publisher: "New Smile Dental Lab",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
    languages: { "es-MX": SITE_URL },
  },

  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "New Smile Dental Lab",
    title: "New Smile Dental Lab | Laboratorio Dental en Toluca",
    description:
      "Coronas, prótesis sobre implantes y cerámica estética de alta especialización en Toluca, México. Calidad High End · Consultoría caso por caso · 2 años de garantía.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "New Smile Dental Lab — Laboratorio Dental de Élite en Toluca",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "New Smile Dental Lab | Laboratorio Dental en Toluca",
    description:
      "Coronas, prótesis sobre implantes y cerámica estética de alta especialización en Toluca, México.",
    images: ["/og"],
  },

  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
    other: [
      { rel: "mask-icon", url: "/favicon/favicon.ico" },
    ],
  },

  manifest: "/favicon/site.webmanifest",

  category: "health",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      "@id": `${SITE_URL}/#business`,
      "name": "New Smile Dental Lab",
      "alternateName": ["NewSmile", "NewSmile Dental Lab", "New Smile Laboratorio Dental"],
      "description":
        "Laboratorio dental de alta especialización en Toluca, México. Expertos en cerámica de alta estética, prótesis fija, implantología protésica y diseño de sonrisa digital. Más de 10 años reproduciendo la naturalidad de los tejidos dentales.",
      "url": SITE_URL,
      "logo": `${SITE_URL}/favicon/android-chrome-512x512.png`,
      "image": `${SITE_URL}/bgheronew.png`,
      "telephone": "+527225123187",
      "email": "ns.dental.laboratorio@gmail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sebastián Lerdo de Tejada #686",
        "addressLocality": "Toluca",
        "addressRegion": "Estado de México",
        "postalCode": "50040",
        "addressCountry": "MX",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.2826,
        "longitude": -99.6557,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00",
        },
      ],
      "sameAs": [
        "https://www.instagram.com/new_smile.dental_lab",
        "https://www.facebook.com/JLAANewSmile/",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Laboratorio Dental",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Coronas de cerámica", "description": "Coronas individuales de cerámica pura con caracterización avanzada." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Puentes dentales", "description": "Puentes de cerámica y metal-cerámica de alta resistencia." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Prótesis sobre implantes", "description": "Sobrestructuras y coronas sobre implantes con ajuste pasivo de precisión." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diseño de Sonrisa Digital", "description": "Integración de escáner intraoral para flujo digital completo." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rehabilitación bucodental", "description": "Soporte protésico completo para rehabilitaciones de arco total." } },
        ],
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "12",
        "bestRating": "5",
      },
      "areaServed": [
        { "@type": "City", "name": "Toluca" },
        { "@type": "State", "name": "Estado de México" },
        { "@type": "Country", "name": "México" },
      ],
      "knowsAbout": [
        "Cerámica dental",
        "Prótesis fija",
        "Implantología protésica",
        "Diseño de sonrisa digital",
        "HeraCeram Saphir",
        "CAD/CAM dental",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "New Smile Dental Lab",
      "description": "Laboratorio dental de alta especialización en Toluca, México",
      "publisher": { "@id": `${SITE_URL}/#business` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": `${SITE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
      "inLanguage": "es-MX",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`h-full ${jakarta.variable} ${inter.variable}`}>
      <head>
        {/* Hero LCP — preload optimized variants for mobile viewports */}
        <link
          rel="preload"
          as="image"
          imageSrcSet="/_next/image?url=%2Fbgheronew.png&w=828&q=75 828w, /_next/image?url=%2Fbgheronew.png&w=1080&q=75 1080w, /_next/image?url=%2Fbgheronew.png&w=1200&q=75 1200w, /_next/image?url=%2Fbgheronew.png&w=1920&q=75 1920w"
          imageSizes="100vw"
          fetchPriority="high"
        />
        <link rel="preload" as="font" type="font/otf" href="/fonts/GillSans-Regular.otf" crossOrigin="anonymous" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

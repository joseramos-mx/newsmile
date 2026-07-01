import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_URL, SITE_NAME, PHONE, EMAIL, ADDRESS } from "./lib/site";

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
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Laboratorio Dental en Toluca | Disilicato de Litio · Zirconia · Coronas — New Smile",
    template: "%s | New Smile Dental Lab Toluca",
  },

  description:
    "Laboratorio dental B2B en Toluca, Estado de México — atendemos exclusivamente a odontólogos y especialistas rehabilitadores. Fabricamos coronas de disilicato de litio (IPS e.max), zirconia dental, prótesis sobre implantes y cerámica de alta estética. No somos clínica dental ni marca de alineadores. Calidad High End, consultoría caso por caso, 2 años de garantía.",

  keywords: [
    // ── Materiales (alta intención comercial) ──
    "corona de disilicato de litio",
    "coronas de disilicato de litio",
    "disilicato de litio",
    "disilicato de litio Toluca",
    "e.max disilicato",
    "zirconia dental",
    "zirconia dental Toluca",
    "coronas de zirconia",
    "puentes de zirconia",
    "cerámica dental",
    "cerámica dental Toluca",
    "HeraCeram Saphir Toluca",
    // ── Categoría ──
    "laboratorio dental",
    "laboratorios dentales",
    "laboratorio dental Toluca",
    "laboratorios dentales Toluca",
    "laboratorio dental Toluca de Lerdo",
    "laboratorio dental Estado de México",
    "laboratorio dental élite México",
    "laboratorio prostodóncico Toluca",
    // ── Servicios / técnicas ──
    "coronas dentales Toluca",
    "puentes dentales Toluca",
    "prótesis dental Toluca",
    "prótesis sobre implantes Toluca",
    "implantes dentales Toluca",
    "restauraciones dentales Toluca",
    "diseño de sonrisa digital Toluca",
    "carillas dentales Toluca",
    // ── Marca ──
    "New Smile Dental Lab",
    "NewSmile Toluca",
    "newsmile dental",
  ],

  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

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
    canonical: "/",
    languages: { "es-MX": "/" },
  },

  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "New Smile Dental Lab — Laboratorio Dental en Toluca | Disilicato de Litio y Zirconia",
    description:
      "Coronas de disilicato de litio, zirconia dental, prótesis sobre implantes y cerámica de alta estética en Toluca. Calidad High End · Consultoría caso por caso · 2 años de garantía.",
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
    title:
      "New Smile Dental Lab — Laboratorio Dental en Toluca | Disilicato y Zirconia",
    description:
      "Coronas de disilicato de litio, zirconia dental y cerámica estética en Toluca, México.",
    images: ["/og"],
  },

  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
    other: [{ rel: "mask-icon", url: "/favicon/favicon.ico" }],
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
      additionalType: "https://en.wikipedia.org/wiki/Dental_laboratory",
      name: SITE_NAME,
      legalName: "New Smile Dental Lab",
      alternateName: [
        "NewSmile Dental Lab",
        "NewSmile",
        "New Smile",
        "New Smile Laboratorio Dental",
        "Laboratorio Dental New Smile Toluca",
      ],
      description:
        "Laboratorio dental B2B en Toluca, Estado de México. Fabricamos coronas de disilicato de litio (IPS e.max), zirconia dental, prótesis sobre implantes y cerámica de alta estética para odontólogos y especialistas rehabilitadores. Más de 10 años reproduciendo la naturalidad de los tejidos dentales.",
      disambiguatingDescription:
        "Laboratorio dental profesional (dental laboratory / laboratorio protésico) que fabrica prótesis fijas, coronas y restauraciones cerámicas por encargo de odontólogos. NO es una clínica dental, NO atiende pacientes directamente, y NO es una marca de alineadores transparentes. Servicio exclusivamente B2B para profesionales de la odontología.",
      slogan: "El laboratorio dental que tu práctica merece — Toluca, México",
      keywords:
        "laboratorio dental, dental laboratory, laboratorio protésico, disilicato de litio, IPS e.max, zirconia dental, prótesis fija, prótesis sobre implantes, cerámica dental, CAD/CAM dental, Toluca, Estado de México",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon/android-chrome-512x512.png`,
      image: `${SITE_URL}/bgheronew.png`,
      telephone: PHONE,
      email: EMAIL,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.2826,
        longitude: -99.6557,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        "https://www.instagram.com/new_smile.dental_lab",
        "https://www.facebook.com/JLAANewSmile/",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Laboratorio Dental",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Coronas de disilicato de litio",
              url: `${SITE_URL}/corona-disilicato-litio`,
              description:
                "Coronas individuales de disilicato de litio (e.max) con caracterización avanzada para sectores estéticos y de alta exigencia.",
              areaServed: "Toluca, Estado de México",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Zirconia dental",
              url: `${SITE_URL}/zirconia-dental`,
              description:
                "Coronas y puentes de zirconia monolítica y estratificada con alta resistencia y estética natural.",
              areaServed: "Toluca, Estado de México",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Puentes dentales",
              description:
                "Puentes de cerámica y metal-cerámica de alta resistencia con ajuste pasivo.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Prótesis sobre implantes",
              description:
                "Sobrestructuras y coronas sobre implantes con ajuste pasivo de precisión.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Diseño de Sonrisa Digital",
              description:
                "Integración con escáner intraoral para flujo digital completo sin impresiones físicas.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Rehabilitación bucodental",
              description:
                "Soporte protésico completo para rehabilitaciones de arco total y casos de alta complejidad.",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "12",
        bestRating: "5",
      },
      areaServed: [
        { "@type": "City", name: "Toluca" },
        { "@type": "City", name: "Metepec" },
        { "@type": "State", name: "Estado de México" },
        { "@type": "Country", name: "México" },
      ],
      knowsAbout: [
        "Corona de disilicato de litio",
        "Disilicato de litio",
        "Zirconia dental",
        "Cerámica dental",
        "Prótesis fija",
        "Implantología protésica",
        "Diseño de sonrisa digital",
        "HeraCeram Saphir",
        "CAD/CAM dental",
        "IPS e.max",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      additionalType: "https://en.wikipedia.org/wiki/Dental_laboratory",
      name: SITE_NAME,
      legalName: "New Smile Dental Lab",
      alternateName: [
        "NewSmile Dental Lab",
        "NewSmile",
        "New Smile",
        "New Smile Laboratorio Dental",
        "Laboratorio Dental New Smile Toluca",
      ],
      description:
        "Laboratorio dental B2B en Toluca, México, especializado en disilicato de litio, zirconia y cerámica estética para odontólogos y especialistas rehabilitadores.",
      disambiguatingDescription:
        "Laboratorio dental (dental laboratory). Fabrica restauraciones cerámicas por encargo de profesionales de la odontología. No es clínica dental, no atiende pacientes, y no es marca de alineadores.",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon/android-chrome-512x512.png`,
        width: 512,
        height: 512,
      },
      foundingLocation: {
        "@type": "Place",
        name: "Toluca, Estado de México",
      },
      sameAs: [
        "https://www.instagram.com/new_smile.dental_lab",
        "https://www.facebook.com/JLAANewSmile/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE,
        email: EMAIL,
        contactType: "customer service",
        areaServed: "MX",
        availableLanguage: ["Spanish", "es-MX"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: [
        "NewSmile Dental Lab",
        "NewSmile",
        "New Smile",
        "New Smile Laboratorio Dental",
      ],
      description:
        "Laboratorio dental en Toluca, México — disilicato de litio, zirconia y cerámica estética.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es-MX",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es New Smile Dental Lab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "New Smile Dental Lab es un laboratorio dental B2B ubicado en Toluca, Estado de México. Fabricamos coronas de disilicato de litio (IPS e.max), zirconia dental, prótesis sobre implantes y cerámica de alta estética por encargo de odontólogos y especialistas rehabilitadores. No somos una clínica dental, no atendemos pacientes directamente, y no somos una marca de alineadores transparentes.",
          },
        },
        {
          "@type": "Question",
          name: "¿New Smile Dental Lab es una clínica o un laboratorio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Somos un laboratorio dental (dental laboratory), no una clínica. Trabajamos exclusivamente para profesionales de la odontología — no atendemos pacientes finales. Un odontólogo o especialista nos envía el caso (impresión física o archivo digital STL desde escáner intraoral) y nosotros fabricamos la restauración cerámica que el clínico coloca en boca.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué es una corona de disilicato de litio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El disilicato de litio (IPS e.max) es una cerámica vítrea de altísima estética y resistencia (~400 MPa). Se utiliza para coronas individuales, carillas, inlays y onlays en sectores anteriores y posteriores donde la translucidez y la integración cromática son críticas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuál es la diferencia entre disilicato de litio y zirconia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El disilicato de litio (e.max) ofrece la mejor estética por su translucidez similar al diente natural — ideal para sector anterior. La zirconia ofrece mayor resistencia mecánica (hasta ~1200 MPa) — ideal para puentes largos, sector posterior y bruxismo. En New Smile elegimos el material según el caso clínico.",
          },
        },
        {
          "@type": "Question",
          name: "¿Dónde está ubicado el laboratorio dental?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "New Smile Dental Lab está en Sebastián Lerdo de Tejada #686, Toluca, Estado de México, C.P. 50040. Atendemos a especialistas de Toluca, Metepec, Valle de Toluca y todo el Estado de México.",
          },
        },
        {
          "@type": "Question",
          name: "¿Trabajan con escáner intraoral / flujo digital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Integramos tu escáner intraoral en un flujo digital completo, sin necesidad de impresiones físicas. Diseño de Sonrisa Digital, impresión 3D de precisión y CAD/CAM para coronas, puentes y prótesis sobre implantes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuál es el tiempo de entrega?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trabajamos con calidad High End en tiempos reducidos. El tiempo exacto depende del caso (corona individual, puente, prótesis sobre implantes), pero priorizamos protocolos optimizados para casos de alta especialización.",
          },
        },
      ],
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

        {/* Microsoft Clarity analytics */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xf8leq41x0");`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

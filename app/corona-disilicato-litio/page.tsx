import type { Metadata } from "next";
import ServicePageLayout, { type FAQ, type Section } from "../components/ServicePageLayout";
import { SITE_URL } from "../lib/site";

const PATH = "/corona-disilicato-litio";

export const metadata: Metadata = {
  title:
    "Corona de Disilicato de Litio en Toluca | IPS e.max | New Smile Dental Lab",
  description:
    "Coronas de disilicato de litio (IPS e.max) en Toluca, Estado de México. Cerámica vítrea de máxima estética y resistencia (~400 MPa) para sector anterior, carillas, inlays y onlays. Cotiza tu caso.",
  keywords: [
    "corona de disilicato de litio",
    "coronas de disilicato de litio",
    "corona de disilicato de litio Toluca",
    "disilicato de litio",
    "disilicato de litio Toluca",
    "IPS e.max",
    "e.max Toluca",
    "carillas de disilicato de litio",
    "cerámica dental Toluca",
    "laboratorio dental Toluca",
  ],
  alternates: {
    canonical: PATH,
  },
  openGraph: {
    type: "article",
    url: PATH,
    title:
      "Corona de Disilicato de Litio en Toluca | IPS e.max | New Smile",
    description:
      "Coronas de disilicato de litio (IPS e.max) en Toluca. Cerámica vítrea de máxima estética y resistencia (~400 MPa) para sector anterior, carillas, inlays y onlays.",
    images: [{ url: "/og", width: 1200, height: 630, alt: "Corona de disilicato de litio — New Smile Dental Lab Toluca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corona de Disilicato de Litio en Toluca | IPS e.max",
    description:
      "Coronas de disilicato de litio en Toluca. Cerámica vítrea de máxima estética y ~400 MPa de resistencia.",
    images: ["/og"],
  },
};

const sections: Section[] = [
  {
    kind: "prose",
    title: "¿Qué es una corona de disilicato de litio?",
    body: (
      <>
        <p style={{ margin: "0 0 1rem" }}>
          El <strong>disilicato de litio</strong> es una cerámica vítrea reforzada (lithium disilicate
          glass-ceramic) reconocida mundialmente bajo el nombre comercial{" "}
          <strong>IPS e.max</strong> de Ivoclar Vivadent. Combina una{" "}
          <strong>resistencia flexural de ~400 MPa</strong> con una{" "}
          <strong>translucidez similar al esmalte dental natural</strong>, lo que
          la convierte en el material de referencia para restauraciones cerámicas
          unitarias de alta estética.
        </p>
        <p style={{ margin: 0 }}>
          En New Smile Dental Lab, fabricamos coronas de disilicato de litio en
          Toluca con caracterización avanzada — capa por capa, color y opalescencia
          ajustados al caso clínico — para que la restauración se integre de
          manera invisible con los dientes vecinos.
        </p>
      </>
    ),
  },
  {
    kind: "list",
    title: "Cuándo elegir disilicato de litio",
    intro:
      "El disilicato de litio es la primera opción en restauraciones unitarias donde la estética es crítica y la carga oclusal es controlable. Estas son sus indicaciones clínicas principales:",
    items: [
      {
        title: "Coronas individuales anteriores",
        body: "Donde la translucidez, el matiz y la integración cromática son críticos para un resultado natural.",
      },
      {
        title: "Carillas cerámicas (veneers)",
        body: "Preparaciones mínimas con alta resistencia para diseño de sonrisa y rehabilitación estética anterior.",
      },
      {
        title: "Inlays y onlays",
        body: "Restauraciones parciales de sectores posteriores con alta durabilidad y mínima invasión tisular.",
      },
      {
        title: "Coronas premolares y primeros molares",
        body: "Cuando se requiere estética alta con cargas oclusales moderadas, sobre dientes vitales o pilares de implante en zona estética.",
      },
      {
        title: "Coronas sobre implantes en sector estético",
        body: "Restauraciones cerámicas atornilladas o cementadas con base de titanio y estética premium.",
      },
    ],
  },
  {
    kind: "list",
    title: "Ventajas técnicas",
    items: [
      {
        title: "Estética excepcional",
        body: "Translucidez, opalescencia y fluorescencia naturales que reproducen el comportamiento óptico del esmalte.",
      },
      {
        title: "Resistencia flexural ~400 MPa",
        body: "Suficiente para la mayoría de restauraciones unitarias y carga oclusal normal.",
      },
      {
        title: "Adhesión confiable",
        body: "Excelente unión al diente mediante grabado con ácido fluorhídrico + silano + cemento de resina.",
      },
      {
        title: "Biocompatibilidad",
        body: "Material inerte, libre de metal, ideal para pacientes con sensibilidad a aleaciones.",
      },
      {
        title: "Preparación conservadora",
        body: "Permite preparaciones menos invasivas que coronas metal-cerámica tradicionales.",
      },
    ],
  },
  {
    kind: "prose",
    title: "Por qué elegir New Smile para tu corona de disilicato de litio en Toluca",
    body: (
      <>
        <p style={{ margin: "0 0 1rem" }}>
          Somos un laboratorio dental en Toluca con{" "}
          <strong>más de 10 años reproduciendo la naturalidad de los tejidos dentales</strong>.
          Trabajamos con cerámicas de referencia mundial — incluyendo HeraCeram Saphir
          (Kulzer) e IPS e.max — y nuestro equipo está formado por especialistas
          certificados en México, Liechtenstein, Eslovenia, Brasil y Alemania.
        </p>
        <p style={{ margin: "0 0 1rem" }}>
          Cada caso de disilicato de litio se trabaja con{" "}
          <strong>consultoría clínica paciente por paciente</strong>: te
          asesoramos en preparación, selección de color, protocolo de adhesión y
          cementado. Si tienes escáner intraoral, integramos tu flujo digital
          completo sin impresiones físicas.
        </p>
        <p style={{ margin: 0 }}>
          Operamos con manuales de procedimiento propios apegados a la Norma ISO 9000,
          ofrecemos <strong>2 años de garantía por defectos de fabricación</strong> y
          solo solicitamos 50% de anticipo para comenzar tu caso.
        </p>
      </>
    ),
  },
];

const faqs: FAQ[] = [
  {
    q: "¿Cuánto cuesta una corona de disilicato de litio en Toluca?",
    a: "El costo depende de la complejidad del caso: corona unitaria sobre diente vital, carilla, sobre pilar implantar, etc. En New Smile cotizamos cada caso de manera personalizada — comparte tu plan de tratamiento por WhatsApp o formulario y te enviamos el presupuesto. Solo se requiere 50% de anticipo para comenzar.",
  },
  {
    q: "¿Cuál es la diferencia entre disilicato de litio y zirconia?",
    a: "El disilicato de litio (IPS e.max) ofrece la mejor estética por su translucidez y opalescencia naturales — es la primera opción en sector anterior y carillas. La zirconia ofrece mayor resistencia mecánica (hasta ~1200 MPa) y es preferida en puentes largos, sector posterior y pacientes con bruxismo. En cada caso recomendamos el material según indicación clínica.",
  },
  {
    q: "¿Cuánto dura una corona de disilicato de litio?",
    a: "Con un protocolo de adhesión adecuado y mantenimiento bucal apropiado, las coronas de disilicato de litio tienen tasas de supervivencia clínica superiores al 95% a 10 años según la literatura. New Smile ofrece 2 años de garantía por defectos de fabricación.",
  },
  {
    q: "¿Trabajan con escáner intraoral / archivos STL?",
    a: "Sí. Integramos tu escáner intraoral en un flujo digital completo — recibimos archivos STL, PLY o nativos de iTero, Trios, Medit, Primescan, entre otros. Diseño CAD/CAM y caracterización cerámica para coronas de disilicato de litio en tiempos optimizados.",
  },
  {
    q: "¿Atienden casos fuera de Toluca?",
    a: "Sí. Aunque estamos en Toluca, Estado de México, atendemos a especialistas rehabilitadores de todo México mediante flujo digital. La consultoría clínica y el seguimiento se mantienen igual de cercanos a distancia.",
  },
  {
    q: "¿Puedo enviar mi caso si tengo dudas sobre la preparación?",
    a: "Sí, justamente por eso trabajamos consultoría caso por caso. Usa nuestro diagnóstico rápido ('¿Mi caso está listo?') para verificar línea de terminación, espacio, impresión, humedad y color. Si algo no está listo, te orientamos antes de enviar.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Corona de disilicato de litio",
      item: `${SITE_URL}${PATH}`,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PATH}#service`,
  serviceType: "Corona dental de disilicato de litio",
  name: "Corona de disilicato de litio (IPS e.max)",
  url: `${SITE_URL}${PATH}`,
  description:
    "Coronas de disilicato de litio (IPS e.max) fabricadas por New Smile Dental Lab en Toluca. Cerámica vítrea de alta estética y resistencia ~400 MPa para sector anterior, carillas, inlays y onlays.",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: [
    { "@type": "City", name: "Toluca" },
    { "@type": "City", name: "Metepec" },
    { "@type": "State", name: "Estado de México" },
  ],
  category: "Dental laboratory services",
  brand: { "@type": "Brand", name: "IPS e.max" },
};

export default function CoronaDisilicatoLitioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd, serviceJsonLd, faqJsonLd]),
        }}
      />
      <ServicePageLayout
        eyebrow="Servicio · Material"
        h1={
          <>
            Corona de <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.6)" }}>disilicato de litio</em> en Toluca
          </>
        }
        intro="IPS e.max y cerámica vítrea reforzada de alta estética. ~400 MPa de resistencia con translucidez idéntica al esmalte natural — la primera opción en restauraciones unitarias del sector anterior, carillas, inlays y onlays."
        sections={sections}
        faqs={faqs}
      />
    </>
  );
}

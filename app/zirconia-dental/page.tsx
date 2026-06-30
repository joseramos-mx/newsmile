import type { Metadata } from "next";
import ServicePageLayout, { type FAQ, type Section } from "../components/ServicePageLayout";
import { SITE_URL } from "../lib/site";

const PATH = "/zirconia-dental";

export const metadata: Metadata = {
  title:
    "Zirconia Dental en Toluca | Coronas y Puentes de Zirconia | New Smile Dental Lab",
  description:
    "Zirconia dental en Toluca, Estado de México. Coronas y puentes de zirconia monolítica y estratificada con resistencia de hasta ~1200 MPa. Ideal para sector posterior, puentes largos y pacientes con bruxismo. Cotiza tu caso.",
  keywords: [
    "zirconia dental",
    "zirconia dental Toluca",
    "coronas de zirconia",
    "coronas de zirconia Toluca",
    "puentes de zirconia",
    "puentes de zirconia Toluca",
    "zirconia monolítica",
    "zirconia estratificada",
    "zirconia translúcida",
    "cerámica dental Toluca",
    "laboratorio dental Toluca",
  ],
  alternates: {
    canonical: PATH,
  },
  openGraph: {
    type: "article",
    url: PATH,
    title: "Zirconia Dental en Toluca | Coronas y Puentes de Zirconia | New Smile",
    description:
      "Zirconia monolítica y estratificada en Toluca. Coronas y puentes con resistencia ~1200 MPa para sector posterior, puentes largos y bruxismo.",
    images: [{ url: "/og", width: 1200, height: 630, alt: "Zirconia dental — New Smile Dental Lab Toluca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zirconia Dental en Toluca | Coronas y Puentes",
    description:
      "Zirconia monolítica y estratificada en Toluca. Resistencia hasta ~1200 MPa.",
    images: ["/og"],
  },
};

const sections: Section[] = [
  {
    kind: "prose",
    title: "¿Qué es la zirconia dental?",
    body: (
      <>
        <p style={{ margin: "0 0 1rem" }}>
          La <strong>zirconia dental</strong> (dióxido de zirconio, ZrO₂) es una
          cerámica de alta resistencia que se ha consolidado como el material de
          referencia en odontología restauradora moderna. Combina una{" "}
          <strong>resistencia flexural que va de 800 a ~1200 MPa</strong> con
          una biocompatibilidad excelente, lo que permite restauraciones
          unitarias y puentes de tramos largos sin comprometer la durabilidad.
        </p>
        <p style={{ margin: 0 }}>
          En New Smile Dental Lab fabricamos coronas y puentes de zirconia
          dental en Toluca con flujo digital completo: diseño CAD/CAM, fresado
          de precisión y sinterizado controlado. Trabajamos tanto{" "}
          <strong>zirconia monolítica</strong> (alta resistencia) como{" "}
          <strong>zirconia estratificada</strong> con caracterización cerámica
          en porcelana de recubrimiento.
        </p>
      </>
    ),
  },
  {
    kind: "list",
    title: "Tipos de zirconia que trabajamos",
    intro:
      "No toda la zirconia es igual. Seleccionamos el tipo de zirconia según la indicación clínica, la zona y los requerimientos estéticos del caso.",
    items: [
      {
        title: "Zirconia monolítica de alta resistencia (3Y)",
        body: "Resistencia ~1200 MPa. Ideal para puentes largos posteriores, restauraciones sobre implantes y pacientes con bruxismo. Estética buena, opacidad media.",
      },
      {
        title: "Zirconia translúcida (4Y / 5Y)",
        body: "Mayor translucidez con resistencia entre 700–900 MPa. Ideal para coronas individuales con mejor estética. Muy versátil para sector medio y anterior.",
      },
      {
        title: "Zirconia multi-layer / multicapa",
        body: "Bloques pre-coloreados con gradiente cromático integrado, reproducen la transición natural de incisal a cervical. Excelente equilibrio estética-resistencia.",
      },
      {
        title: "Zirconia estratificada (con porcelana feldespática)",
        body: "Estructura interna de zirconia + recubrimiento cerámico caracterizado. Máxima estética para coronas individuales en sector anterior cuando la translucidez es crítica.",
      },
    ],
  },
  {
    kind: "list",
    title: "Cuándo elegir zirconia dental",
    items: [
      {
        title: "Puentes posteriores y de tramo largo",
        body: "La alta resistencia (~1200 MPa) permite estructuras de 3-4 unidades o más con seguridad biomecánica.",
      },
      {
        title: "Coronas en pacientes bruxistas",
        body: "Mejor comportamiento ante cargas oclusales elevadas y parafunción que cerámicas vítreas.",
      },
      {
        title: "Coronas y puentes sobre implantes",
        body: "Excelente para sobrestructuras atornilladas o cementadas, especialmente en arco completo.",
      },
      {
        title: "Cuando se requiere preparación mínima de la cara oclusal",
        body: "La zirconia monolítica permite espesores reducidos (hasta 0.8 mm) sin riesgo de fractura.",
      },
      {
        title: "Restauraciones en sector posterior",
        body: "Donde la resistencia mecánica importa más que la translucidez, y la integración estética sigue siendo aceptable.",
      },
    ],
  },
  {
    kind: "list",
    title: "Ventajas técnicas de la zirconia",
    items: [
      {
        title: "Resistencia hasta ~1200 MPa",
        body: "La cerámica más resistente disponible para restauraciones dentales fijas.",
      },
      {
        title: "Biocompatibilidad excepcional",
        body: "Material inerte sin reacciones tisulares, ideal para márgenes subgingivales.",
      },
      {
        title: "Estabilidad cromática",
        body: "No se mancha con el tiempo y mantiene su color original a largo plazo.",
      },
      {
        title: "Flujo CAD/CAM completo",
        body: "Diseño digital, fresado de precisión y sinterizado controlado — ajuste pasivo desde el primer prueba.",
      },
      {
        title: "Preparaciones conservadoras",
        body: "Permite espesores reducidos comparados con metal-cerámica, preservando estructura dental.",
      },
    ],
  },
  {
    kind: "prose",
    title: "Por qué elegir New Smile para tu zirconia dental en Toluca",
    body: (
      <>
        <p style={{ margin: "0 0 1rem" }}>
          Somos un laboratorio dental en Toluca especializado en{" "}
          <strong>cerámica de alta estética y alta resistencia</strong>. Para
          zirconia dental, utilizamos flujo digital completo: recibimos archivos
          STL desde cualquier escáner intraoral (iTero, Trios, Medit,
          Primescan), diseñamos en CAD, fresamos en bloques certificados y
          sinterizamos con curvas controladas.
        </p>
        <p style={{ margin: "0 0 1rem" }}>
          Cada caso de zirconia se trabaja con{" "}
          <strong>consultoría caso por caso</strong>: te asesoramos en
          preparación, espacio oclusal, tipo de zirconia recomendado (monolítica
          vs estratificada) y protocolo de cementado o tornillado según
          indicación.
        </p>
        <p style={{ margin: 0 }}>
          Operamos apegados a la Norma ISO 9000, ofrecemos{" "}
          <strong>2 años de garantía por defectos de fabricación</strong> y
          solo solicitamos 50% de anticipo para comenzar tu caso. Atendemos a
          especialistas rehabilitadores de Toluca, Metepec, Valle de Toluca y
          todo el Estado de México.
        </p>
      </>
    ),
  },
];

const faqs: FAQ[] = [
  {
    q: "¿Cuánto cuesta una corona de zirconia en Toluca?",
    a: "El precio depende del tipo de zirconia (monolítica vs estratificada vs multi-layer), la complejidad del caso y la cantidad de unidades. En New Smile cotizamos cada caso de manera personalizada — envía tu plan de tratamiento por WhatsApp y te enviamos el presupuesto. Solo 50% de anticipo para comenzar.",
  },
  {
    q: "¿La zirconia es mejor que el disilicato de litio?",
    a: "No es 'mejor', es diferente. La zirconia tiene mayor resistencia (~1200 MPa vs ~400 MPa del disilicato) — ideal para puentes largos, sector posterior y bruxismo. El disilicato de litio (e.max) tiene mejor estética por su translucidez — ideal para sector anterior y carillas. Elegir el material correcto según la indicación clínica es clave: en New Smile asesoramos esa decisión caso por caso.",
  },
  {
    q: "¿Cuánto duran las coronas de zirconia?",
    a: "Las tasas de supervivencia clínica reportadas en literatura superan el 95% a 5-10 años para coronas y puentes de zirconia con protocolos adecuados. New Smile ofrece 2 años de garantía por defectos de fabricación.",
  },
  {
    q: "¿La zirconia se ve natural? ¿No queda muy opaca?",
    a: "La zirconia translúcida (4Y/5Y) y la zirconia multi-layer han mejorado significativamente la estética: hoy se obtienen resultados muy naturales incluso en sector medio. Para casos donde la translucidez es crítica (sector anterior), usamos zirconia estratificada con recubrimiento cerámico caracterizado.",
  },
  {
    q: "¿Puedo enviar mi caso con escáner intraoral?",
    a: "Sí. Recibimos archivos STL, PLY o nativos desde cualquier escáner intraoral. El flujo digital completo elimina impresiones físicas y reduce tiempos de entrega manteniendo precisión micrométrica.",
  },
  {
    q: "¿Atienden casos fuera de Toluca?",
    a: "Sí. Aunque nuestro laboratorio está en Toluca, Estado de México, atendemos a especialistas rehabilitadores de todo México con flujo digital. La consultoría clínica y el seguimiento de caso se mantienen igual a distancia.",
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
      name: "Zirconia dental",
      item: `${SITE_URL}${PATH}`,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PATH}#service`,
  serviceType: "Coronas y puentes de zirconia dental",
  name: "Zirconia dental (monolítica y estratificada)",
  url: `${SITE_URL}${PATH}`,
  description:
    "Coronas y puentes de zirconia dental fabricados por New Smile Dental Lab en Toluca. Zirconia monolítica de alta resistencia (~1200 MPa), translúcida (4Y/5Y) y estratificada para distintas indicaciones clínicas.",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: [
    { "@type": "City", name: "Toluca" },
    { "@type": "City", name: "Metepec" },
    { "@type": "State", name: "Estado de México" },
  ],
  category: "Dental laboratory services",
};

export default function ZirconiaDentalPage() {
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
            Zirconia dental en{" "}
            <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.6)" }}>Toluca</em>
          </>
        }
        intro="Coronas y puentes de zirconia monolítica y estratificada. Resistencia ~1200 MPa con flujo CAD/CAM completo — la elección clínica cuando importa la durabilidad: puentes largos, sector posterior, bruxismo y prótesis sobre implantes."
        sections={sections}
        faqs={faqs}
      />
    </>
  );
}

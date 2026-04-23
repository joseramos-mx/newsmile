"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Alta Estética\nCerámica",
    description: "Coronas, puentes y restauraciones cerámicas con caracterización avanzada",
    image: "/images/img5.jpeg",
  },
  {
    title: "Rehabilitación\nBucodental",
    description: "Consultoría y acompañamiento en diagnóstico y tratamiento integral",
    image: "/images/img1.jpeg",
  },
  {
    title: "Implantología\nProtésica",
    description: "Sobrestructuras y prótesis sobre implantes de alta complejidad",
    image: "/images/img20.jpeg",
  },
  {
    title: "Diseño de\nSonrisa Digital",
    description: "Escáner intraoral y flujo digital completo, sin impresiones",
    image: "/images/img15.jpeg",
  },
];

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: (typeof services)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: 0.05 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        aspectRatio: "3 / 4",
        cursor: "default",
        flexShrink: 0,
        width: "100%",
      }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector(".card-img") as HTMLDivElement;
        if (img) img.style.transform = "scale(1.04)";
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector(".card-img") as HTMLDivElement;
        if (img) img.style.transform = "scale(1)";
      }}
    >
      {/* Background image */}
      <div
        className="card-img"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${service.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.55s ease",
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.20) 50%, rgba(0,0,0,0.0) 100%)",
        }}
      />

      {/* Text */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "clamp(1rem, 2.5vw, 1.5rem)",
        }}
      >
        <h3
          style={{
            color: "#ffffff",
            fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
            fontWeight: 600,
            lineHeight: 1.25,
            marginBottom: "0.5rem",
            whiteSpace: "pre-line",
            letterSpacing: "-0.01em",
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "clamp(0.72rem, 1vw, 0.82rem)",
            fontWeight: 300,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Showcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="showcase"
      style={{
        background: "var(--ivory)",
        padding: "5rem clamp(1rem, 4vw, 3rem)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "2.5rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--mineral)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <span style={{ display: "inline-block", width: "18px", height: "1px", background: "var(--arandano)", opacity: 0.4 }} />
              Servicios
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 }}
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 700,
                color: "var(--near-black)",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Soluciones para cada{" "}
              <em style={{ fontWeight: 300, color: "var(--arandano)", fontStyle: "normal" }}>
                rehabilitador
              </em>
            </motion.h2>
          </div>
        </div>

        {/* Cards — 4-col grid on desktop, 2-col on tablet, horizontal scroll on mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "clamp(0.6rem, 1.2vw, 1rem)",
          }}
          className="services-grid"
        >
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}

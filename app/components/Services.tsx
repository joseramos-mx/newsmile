"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const galleryImages = [
  "/images/img9.jpeg",
  "/images/img7.jpeg",
  "/images/img8.jpeg",
  "/images/img15.jpeg",
  "/images/img2.jpeg",
  "/images/img37.jpeg",
  "/images/img3.jpeg",
  "/images/img5.jpeg",
];
const galleryTrack = [...galleryImages, ...galleryImages];

const services = [
  {
    id: "01",
    title: "Alta Estética Cerámica",
    description: "Coronas, puentes y restauraciones con caracterización avanzada",
  },
  {
    id: "02",
    title: "Rehabilitación Bucodental",
    description: "Diagnóstico y tratamiento integral con especialistas",
  },
  {
    id: "03",
    title: "Implantología Protésica",
    description: "Sobrestructuras y prótesis sobre implantes de alta complejidad",
  },
  {
    id: "04",
    title: "Diseño de Sonrisa Digital",
    description: "Flujo digital completo con escáner intraoral, sin impresiones",
  },
  {
    id: "05",
    title: "Consultoría Clínica",
    description: "Acompañamiento técnico y soporte al rehabilitador en caso activo",
  },
];

function ServiceRow({
  service,
  index,
  inView,
}: {
  service: (typeof services)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.12 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "3.5rem 1fr auto",
        alignItems: "center",
        gap: "clamp(1rem, 3vw, 2rem)",
        padding: `clamp(1.25rem, 3vw, 1.75rem) clamp(1rem, 4vw, 3rem)`,
        marginLeft: `calc(-1 * clamp(1rem, 4vw, 3rem))`,
        marginRight: `calc(-1 * clamp(1rem, 4vw, 3rem))`,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: hovered ? "rgba(255,255,255,0.025)" : "transparent",
        transition: "background 0.35s ease",
        cursor: "default",
      }}
    >
      {/* Number */}
      <span
        style={{
          fontFamily: "ui-monospace, monospace",
          fontSize: "0.8rem",
          fontWeight: 500,
          letterSpacing: "0.04em",
          color: hovered ? "#255958" : "rgba(37,89,88,0.45)",
          transition: "color 0.35s ease",
          userSelect: "none",
          paddingTop: "0.15em",
        }}
      >
        {service.id}
      </span>

      {/* Title + description */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "clamp(1rem, 5vw, 4rem)",
          flexWrap: "wrap",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(1.35rem, 3.2vw, 2.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            color: hovered ? "#ffffff" : "rgba(255,255,255,0.82)",
            transition: "color 0.35s ease",
            lineHeight: 1.1,
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontSize: "clamp(0.75rem, 1vw, 0.875rem)",
            color: hovered ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.25)",
            fontWeight: 300,
            lineHeight: 1.55,
            margin: 0,
            maxWidth: "32ch",
            transition: "color 0.35s ease",
          }}
        >
          {service.description}
        </p>
      </div>

      {/* Arrow circle */}
      <div
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          border: `1px solid ${hovered ? "rgba(37,89,88,0.55)" : "rgba(255,255,255,0.09)"}`,
          background: hovered ? "rgba(37,89,88,0.12)" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transform: hovered ? "translateX(5px)" : "translateX(0)",
          transition: "transform 0.35s ease, border-color 0.35s ease, background 0.35s ease",
        }}
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path
            d="M2 6.5h9M7 2l4.5 4.5L7 11"
            stroke={hovered ? "#255958" : "rgba(255,255,255,0.35)"}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "stroke 0.35s ease" }}
          />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="servicios"
      style={{
        background: "#000",
        paddingTop: "clamp(4rem, 8vw, 7rem)",
        paddingBottom: 0,
        overflow: "visible",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
          <span style={{ display: "inline-block", width: "18px", height: "1px", background: "#255958", opacity: 0.45 }} />
          <span style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(178,182,172,0.6)" }}>
            Servicios
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.72, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            fontWeight: 400,
            letterSpacing: "-0.04em",
            color: "rgba(255,255,255,0.92)",
            lineHeight: 1.05,
            margin: 0,
            marginBottom: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          Lo que{" "}
          <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.35)" }}>
            hacemos
          </em>
        </motion.h2>

        {/* Rows */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {services.map((s, i) => (
            <ServiceRow key={s.id} service={s} index={i} inView={inView} />
          ))}
        </div>

      </div>

      {/* ── Image gallery marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
        style={{
          marginTop: "clamp(3rem, 6vw, 5rem)",
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="marquee-track"
          style={{ display: "inline-flex", gap: "0.5rem", width: "max-content" }}
        >
          {galleryTrack.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={src}
              alt=""
              aria-hidden="true"
              style={{
                height: "clamp(140px, 18vw, 220px)",
                width: "auto",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: "8px",
                flexShrink: 0,
                display: "block",
                filter: "brightness(0.82) saturate(0.85)",
                transition: "filter 0.3s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "brightness(1) saturate(1)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.82) saturate(0.85)"; }}
            />
          ))}
        </div>
      </motion.div>

    </section>
  );
}

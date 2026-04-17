"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  { label: "Líder de opinión", name: "Kulzer México" },
  { label: "Formación técnica", name: "IPDT Toluca" },
  { label: "Certificación nacional", name: "CONOCER" },
  { label: "Congresos avalados", name: "UNAM" },
  { label: "Alta especialidad", name: "Liechtenstein" },
  { label: "Cerámica dental", name: "Eslovenia" },
  { label: "Estándar de calidad", name: "Norma ISO 9000" },
  { label: "Educación superior", name: "UAEM" },
];

// Duplicate for seamless loop
const track = [...brands, ...brands];

// Generic geometric mark — each brand gets a slightly different shape via index
function LogoMark({ index }: { index: number }) {
  const shapes = [
    // Square bracket mark
    <svg key="a" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="4" width="10" height="24" rx="1" fill="currentColor" opacity="0.9" />
      <rect x="4" y="4" width="20" height="4" rx="1" fill="currentColor" />
      <rect x="4" y="24" width="20" height="4" rx="1" fill="currentColor" />
    </svg>,
    // Diamond
    <svg key="b" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="9" y="9" width="14" height="14" rx="2" transform="rotate(45 16 16)" fill="currentColor" />
    </svg>,
    // Circle ring
    <svg key="c" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="3" />
      <circle cx="16" cy="16" r="5" fill="currentColor" />
    </svg>,
    // Cross / plus
    <svg key="d" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="13" y="4" width="6" height="24" rx="2" fill="currentColor" />
      <rect x="4" y="13" width="24" height="6" rx="2" fill="currentColor" />
    </svg>,
    // Triangle
    <svg key="e" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <polygon points="16,4 28,28 4,28" fill="currentColor" />
    </svg>,
    // Hexagon
    <svg key="f" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <polygon points="16,3 27,9.5 27,22.5 16,29 5,22.5 5,9.5" fill="currentColor" />
    </svg>,
    // Arrow right
    <svg key="g" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M4 16H28M20 8L28 16L20 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // Shield
    <svg key="h" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 3L5 8V16C5 22.6 10 28.6 16 30C22 28.6 27 22.6 27 16V8L16 3Z" fill="currentColor" />
    </svg>,
  ];
  return shapes[index % shapes.length];
}

function BrandItem({ label, name, index }: { label: string; name: string; index: number }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.85rem",
        flexShrink: 0,
        marginRight: "clamp(2.5rem, 5vw, 4.5rem)",
        color: "#C1C4BC",
        opacity: 0.85,
        transition: "opacity 0.25s, color 0.25s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.opacity = "1";
        el.style.color = "#7A7D78";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.opacity = "0.85";
        el.style.color = "#C1C4BC";
      }}
    >
      <LogoMark index={index} />
      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        <span style={{
          fontSize: "0.6rem",
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "currentColor",
          opacity: 0.7,
          lineHeight: 1,
        }}>
          {label}
        </span>
        <span style={{
          fontSize: "0.95rem",
          fontWeight: 700,
          color: "currentColor",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          fontStyle: "normal",
        }}>
          {name}
        </span>
      </div>
    </div>
  );
}

export default function Allies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="allies"
      style={{
        background: "var(--ivory)",
        overflow: "hidden",
        padding: "3.5rem 0",
        borderTop: "1px solid rgba(178,182,172,0.18)",
        borderBottom: "1px solid rgba(178,182,172,0.18)",
      }}
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto 2rem",
          padding: "0 2rem",
        }}
      >
        <p style={{
          fontSize: "0.65rem",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--mineral)",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          margin: 0,
        }}>
          <span style={{ display: "inline-block", width: "18px", height: "1px", background: "var(--arandano)", opacity: 0.4 }} />
          Respaldados por certificaciones nacionales e internacionales
        </p>
      </motion.div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
        style={{ overflow: "hidden", width: "100%" }}
      >
        <div
          className="marquee-track"
          style={{
            display: "inline-flex",
            alignItems: "center",
            width: "max-content",
            paddingLeft: "clamp(2.5rem, 5vw, 4.5rem)",
          }}
        >
          {track.map((b, i) => (
            <BrandItem key={i} label={b.label} name={b.name} index={i % brands.length} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

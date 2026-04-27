"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
// Inline SVGs — no external icon library needed
const icons: Record<string, React.ReactNode> = {
  consultoria: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 1.5C4.86 1.5 1.5 4.36 1.5 7.875c0 1.71.75 3.27 1.98 4.425L2.25 15l2.97-1.05A8.03 8.03 0 0 0 9 14.25c4.14 0 7.5-2.86 7.5-6.375S13.14 1.5 9 1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="6" cy="8" r="0.9" fill="currentColor"/>
      <circle cx="9" cy="8" r="0.9" fill="currentColor"/>
      <circle cx="12" cy="8" r="0.9" fill="currentColor"/>
    </svg>
  ),
  velocidad: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2.25A6.75 6.75 0 1 1 2.25 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M9 5.25V9l2.25 2.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.25 2.25 5.25 5.25M2.25 5.25h3v-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  globo: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M9 1.5C9 1.5 6 5.25 6 9s3 7.5 3 7.5M9 1.5C9 1.5 12 5.25 12 9s-3 7.5-3 7.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1.5 9h15" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  ),
  chip: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="5.25" y="5.25" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M7.5 5.25V3M10.5 5.25V3M7.5 15v-2.25M10.5 15v-2.25M5.25 7.5H3M5.25 10.5H3M15 7.5h-2.25M15 10.5h-2.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <rect x="7.5" y="7.5" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
  estrella: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 1.5 10.854 6.64h5.396l-4.365 3.17 1.668 5.13L9 11.78l-4.553 3.16 1.668-5.13L1.75 6.64h5.396Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  ),
  escudo: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 1.5 2.25 4.5V9c0 4.14 2.97 7.02 6.75 8.25C12.78 16.02 15.75 13.14 15.75 9V4.5L9 1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const benefits = [
  {
    title: "Consultoría y acompañamiento en cada caso",
    description: "Materiales, adhesión, protocolo — siempre disponibles.",
    icon: icons.consultoria,
  },
  {
    title: "Calidad High End en tiempos reducidos",
    description: "Protocolos optimizados para casos de alta especialización.",
    icon: icons.velocidad,
  },
  {
    title: "Especialización internacional",
    description: "Formados en México, Liechtenstein y Eslovenia.",
    icon: icons.globo,
  },
  {
    title: "Tecnología de última generación",
    description: "Escáner intraoral e impresión 3D directo en tu consultorio.",
    icon: icons.chip,
  },
  {
    title: "Alta estética cerámica",
    description: "10+ años reproduciendo translucidez y textura natural.",
    icon: icons.estrella,
  },
  {
    title: "5 años de garantía · Norma ISO 9000",
    description: "Operación legal, certificada y respaldada por más de una década.",
    icon: icons.escudo,
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="benefits"
      style={{
        background: "var(--ivory)",
        padding: "7rem clamp(1rem, 4vw, 3rem)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "clamp(3rem, 8vw, 8rem)",
          alignItems: "start",
        }}
        className="benefits-layout"
      >
        {/* Left — sticky heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "sticky", top: "8rem" }}
          className="benefits-sticky"
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
            marginBottom: "1.5rem",
          }}>
            <span style={{ display: "inline-block", width: "18px", height: "1px", background: "var(--arandano)", opacity: 0.4 }} />
            Por qué elegirnos
          </p>

          <h2 style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--near-black)",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}>
            El laboratorio
            <br />
            que{" "}
            <em style={{ fontWeight: 300, color: "var(--arandano)", fontStyle: "normal" }}>
              mereces
            </em>
          </h2>

          <p style={{
            fontSize: "0.9rem",
            lineHeight: 1.75,
            color: "var(--mid-gray)",
            fontWeight: 300,
            maxWidth: "32ch",
          }}>
            Nacimos para resolver la problemática real que viven los odontólogos: tiempos largos, falta de consultoría y resultados que no cumplen las expectativas.
          </p>
        </motion.div>

        {/* Right — list */}
        <div>
          {/* Top border */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: "1px",
              background: "rgba(31,44,67,0.12)",
              transformOrigin: "left",
            }}
          />

          {benefits.map((b, i) => (
            <BenefitRow key={b.title} benefit={b} index={i} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .benefits-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .benefits-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

function BenefitRow({
  benefit,
  index,
  inView,
}: {
  benefit: { title: string; description: string; icon: React.ReactNode };
  index: number;
  inView: boolean;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (!rowRef.current) return;
    rowRef.current.style.background = "rgba(37,89,88,0.04)";
    const wrap = rowRef.current.querySelector(".icon-wrap") as HTMLElement;
    if (wrap) { wrap.style.background = "var(--arandano)"; wrap.style.color = "white"; }
  };

  const handleLeave = () => {
    if (!rowRef.current) return;
    rowRef.current.style.background = "transparent";
    const wrap = rowRef.current.querySelector(".icon-wrap") as HTMLElement;
    if (wrap) { wrap.style.background = "transparent"; wrap.style.color = "var(--arandano)"; }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.08 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={rowRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          padding: "1.6rem 1rem",
          cursor: "default",
          borderRadius: "8px",
          transition: "background 0.25s",
        }}
      >
        <div>
          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
            fontWeight: 600,
            color: "var(--near-black)",
            letterSpacing: "-0.01em",
            margin: "0 0 0.25rem",
            lineHeight: 1.2,
          }}>
            {benefit.title}
          </p>
          <p style={{
            fontSize: "0.8rem",
            color: "var(--mid-gray)",
            fontWeight: 300,
            margin: 0,
            lineHeight: 1.5,
          }}>
            {benefit.description}
          </p>
        </div>

        <div
          className="icon-wrap"
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            border: "1.5px solid rgba(37,89,88,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: "var(--arandano)",
            transition: "background 0.25s, color 0.25s",
          }}
        >
          {benefit.icon}
        </div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: "1px",
          background: "rgba(31,44,67,0.12)",
          transformOrigin: "left",
        }}
      />
    </motion.div>
  );
}

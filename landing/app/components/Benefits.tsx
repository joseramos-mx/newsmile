"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

const benefits = [
  {
    title: "Consultoría y acompañamiento en cada caso",
    description: "Materiales, adhesión, protocolo — siempre disponibles.",
  },
  {
    title: "Calidad High End en tiempos reducidos",
    description: "Protocolos optimizados para casos de alta especialización.",
  },
  {
    title: "Especialización internacional",
    description: "Formados en México, Liechtenstein y Eslovenia.",
  },
  {
    title: "Tecnología de última generación",
    description: "Escáner intraoral e impresión 3D directo en tu consultorio.",
  },
  {
    title: "Alta estética cerámica",
    description: "10+ años reproduciendo translucidez y textura natural.",
  },
  {
    title: "5 años de garantía · Norma ISO 9000",
    description: "Operación legal, certificada y respaldada por más de una década.",
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
  benefit: { title: string; description: string };
  index: number;
  inView: boolean;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (!rowRef.current) return;
    rowRef.current.style.background = "rgba(37,89,88,0.04)";
    const arrow = rowRef.current.querySelector(".arrow-wrap") as HTMLElement;
    if (arrow) {
      arrow.style.background = "var(--arandano)";
      arrow.style.transform = "translateX(4px)";
    }
    const arrowIcon = rowRef.current.querySelector(".arrow-icon") as HTMLElement;
    if (arrowIcon) arrowIcon.style.color = "white";
  };

  const handleLeave = () => {
    if (!rowRef.current) return;
    rowRef.current.style.background = "transparent";
    const arrow = rowRef.current.querySelector(".arrow-wrap") as HTMLElement;
    if (arrow) {
      arrow.style.background = "transparent";
      arrow.style.transform = "translateX(0)";
    }
    const arrowIcon = rowRef.current.querySelector(".arrow-icon") as HTMLElement;
    if (arrowIcon) arrowIcon.style.color = "var(--arandano)";
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
          className="arrow-wrap"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1.5px solid rgba(37,89,88,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.25s, transform 0.25s",
          }}
        >
          <ArrowRight
            className="arrow-icon"
            size={15}
            weight="bold"
            color="var(--arandano)"
            style={{ transition: "color 0.25s" }}
          />
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

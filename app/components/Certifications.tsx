"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Tooth, Medal } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

const certifications: { id: string; title: string; detail: string; Icon: Icon }[] = [
  {
    id: "01",
    title: "Especialización Cerámica",
    detail: "Liechtenstein",
    Icon: GraduationCap,
  },
  {
    id: "02",
    title: "Prostodoncia Total",
    detail: "Eslovenia",
    Icon: Tooth,
  },
  {
    id: "03",
    title: "Estándar de Oro",
    detail: "Kulzer Heraceram",
    Icon: Medal,
  },
];

const countries = [
  { name: "México", flag: "🇲🇽", color: "#255958" },
  { name: "Liechtenstein", flag: "🇱🇮", color: "#255958" },
  { name: "Eslovenia", flag: "🇸🇮", color: "#255958" },
  { name: "Brasil", flag: "🇧🇷", color: "#255958" },
  { name: "Alemania", flag: "🇩🇪", color: "#255958" },
];

function CertificationRow({
  cert,
  index,
  inView,
}: {
  cert: (typeof certifications)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.12 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "grid",
        gridTemplateColumns: "3.5rem 1fr",
        alignItems: "center",
        gap: "clamp(1.5rem, 4vw, 2.5rem)",
        padding: `clamp(1.5rem, 3vw, 2rem) clamp(1rem, 4vw, 3rem)`,
        marginLeft: `calc(-1 * clamp(1rem, 4vw, 3rem))`,
        marginRight: `calc(-1 * clamp(1rem, 4vw, 3rem))`,
        borderBottom: "1px solid rgba(37,89,88,0.08)",
        background: "transparent",
        transition: "background 0.35s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(37,89,88,0.04)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "transparent";
      }}
    >
      {/* Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "12px",
          background: "rgba(37,89,88,0.07)",
          flexShrink: 0,
        }}
      >
        <cert.Icon size={28} weight="duotone" color="#255958" />
      </div>

      {/* Content */}
      <div>
        <h3
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#255958",
            margin: "0 0 0.4rem",
            lineHeight: 1.2,
          }}
        >
          {cert.title}
        </h3>
        <p
          style={{
            fontSize: "0.875rem",
            color: "rgba(31,44,67,0.65)",
            fontWeight: 300,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {cert.detail}
        </p>
      </div>
    </motion.div>
  );
}

function CountryBadge({
  country,
  index,
  inView,
}: {
  country: (typeof countries)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.6rem",
        padding: "1.2rem 1.5rem",
        borderRadius: "12px",
        border: "1.5px solid rgba(37,89,88,0.15)",
        background: "rgba(37,89,88,0.04)",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(37,89,88,0.12)";
        el.style.borderColor = "rgba(37,89,88,0.35)";
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(37,89,88,0.04)";
        el.style.borderColor = "rgba(37,89,88,0.15)";
        el.style.transform = "translateY(0)";
      }}
    >
      <span style={{ fontSize: "2.5rem" }}>{country.flag}</span>
      <span
        style={{
          fontSize: "0.85rem",
          fontWeight: 600,
          color: "#255958",
          letterSpacing: "-0.01em",
          textAlign: "center",
        }}
      >
        {country.name}
      </span>
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="certifications"
      style={{
        background: "#FFFFFF",
        padding: "7rem clamp(1rem, 4vw, 3rem)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          <p
            style={{
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(37,89,88,0.6)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
              margin: "0 0 1rem",
            }}
          >
            <span style={{ display: "inline-block", width: "18px", height: "1px", background: "#255958", opacity: 0.4 }} />
            Formación & Certificaciones
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#1f2c43",
              lineHeight: 1.1,
              margin: "0 0 1rem",
            }}
          >
            Expertos{" "}
            <em style={{ fontWeight: 300, color: "#255958", fontStyle: "normal" }}>
              certificados
            </em>
          </h2>

          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.65,
              color: "rgba(31,44,67,0.7)",
              fontWeight: 300,
              maxWidth: "50ch",
              margin: 0,
            }}
          >
            Formación internacional de excelencia en los mejores institutos del mundo. Nuestro equipo combina expertise de cinco países en técnicas avanzadas de cerámica y prostodoncia.
          </p>

          {/* Pull quote */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{
              marginTop: "2.5rem",
              paddingLeft: "1.25rem",
              borderLeft: "2px solid #255958",
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.45,
              color: "#1f2c43",
              maxWidth: "44ch",
            }}
          >
            10+ años reproduciendo la naturalidad{" "}
            <em style={{ fontStyle: "normal", fontWeight: 600, color: "#255958" }}>
              de los tejidos dentales.
            </em>
          </motion.p>
        </motion.div>

        {/* Certifications List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            borderTop: "1px solid rgba(37,89,88,0.08)",
            marginBottom: "clamp(4rem, 8vw, 6rem)",
          }}
        >
          {certifications.map((cert, i) => (
            <CertificationRow key={cert.id} cert={cert} index={i} inView={inView} />
          ))}
        </motion.div>

        {/* Countries Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "2rem" }}
        >
          <p
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(37,89,88,0.5)",
              marginBottom: "2rem",
              margin: "0 0 2rem",
            }}
          >
            Formación en cinco países
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "clamp(1rem, 3vw, 1.5rem)",
            }}
          >
            {countries.map((country, i) => (
              <CountryBadge key={country.name} country={country} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          [style*="gridTemplateColumns: repeat"] {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
}

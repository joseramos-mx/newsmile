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
  { name: "México",       code: "mx" },
  { name: "Liechtenstein", code: "li" },
  { name: "Eslovenia",   code: "si" },
  { name: "Brasil",      code: "br" },
  { name: "Alemania",    code: "de" },
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
        gridTemplateColumns: "3rem 1fr",
        alignItems: "center",
        gap: "1.25rem",
        padding: "1.25rem 0",
        borderBottom: "1px solid rgba(37,89,88,0.08)",
        background: "transparent",
        transition: "background 0.35s ease",
        cursor: "default",
        borderRadius: "8px",
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
      <img
        src={`https://flagcdn.com/w40/${country.code}.png`}
        srcSet={`https://flagcdn.com/w80/${country.code}.png 2x`}
        width={40}
        height={27}
        alt={country.name}
        style={{ borderRadius: "3px", objectFit: "cover" }}
      />
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
        padding: "5rem clamp(1rem, 4vw, 3rem)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Two-column grid — spans the full section */}
        <div className="cert-grid" style={{ display: "grid", gridTemplateColumns: "1fr clamp(260px, 33%, 340px)", gap: "clamp(2.5rem, 5vw, 5rem)", alignItems: "start" }}>

          {/* ── Left column ── */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginBottom: "2.5rem" }}
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
                  margin: "0 0 0.9rem",
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
                  margin: "0 0 0.9rem",
                }}
              >
                Expertos{" "}
                <em style={{ fontWeight: 300, color: "#255958", fontStyle: "normal" }}>
                  certificados
                </em>
              </h2>

              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  color: "rgba(31,44,67,0.7)",
                  fontWeight: 300,
                  maxWidth: "48ch",
                  margin: "0 0 1.75rem",
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
                  paddingLeft: "1.25rem",
                  borderLeft: "2px solid #255958",
                  fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.45,
                  color: "#1f2c43",
                  maxWidth: "40ch",
                  margin: 0,
                }}
              >
                10+ años reproduciendo la naturalidad{" "}
                <em style={{ fontStyle: "normal", fontWeight: 600, color: "#255958" }}>
                  de los tejidos dentales.
                </em>
              </motion.p>
            </motion.div>

            {/* Certifications list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ borderTop: "1px solid rgba(37,89,88,0.08)" }}
            >
              {certifications.map((cert, i) => (
                <CertificationRow key={cert.id} cert={cert} index={i} inView={inView} />
              ))}
            </motion.div>
          </div>

          {/* ── Right column: gold standard card (sticky) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "linear-gradient(150deg, #fffdf5 0%, #fdf6d8 100%)",
              border: "1.5px solid rgba(180,140,40,0.22)",
              borderRadius: "16px",
              padding: "1.75rem",
              position: "sticky",
              top: "2rem",
            }}
          >
            {/* Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1.1rem" }}>
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "9px",
                  background: "rgba(180,140,40,0.13)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Medal size={20} weight="duotone" color="#b48c28" />
              </div>
              <span
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#b48c28",
                }}
              >
                Estándar de Oro Mundial
              </span>
            </div>

            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#1f2c43",
                margin: "0 0 0.25rem",
              }}
            >
              HeraCeram Saphir
            </h3>
            <p
              style={{
                fontSize: "0.78rem",
                color: "rgba(31,44,67,0.5)",
                margin: "0 0 1.25rem",
                lineHeight: 1.4,
              }}
            >
              Cerámica de referencia global · Kulzer México
            </p>

            {/* Feature list */}
            {[
              {
                title: "Estructura de Leucita Estabilizada (SLS)",
                desc: "Alta resistencia al estrés, previene la propagación de grietas y el chipping.",
              },
              {
                title: "Vidrio de Cuarzo Sintético",
                desc: "Opalescencia y fluorescencia naturales desde el interior.",
              },
              {
                title: "Alta Versatilidad Estética",
                desc: "Masas especiales para adaptación cromática inigualable.",
              },
              {
                title: "Tecnología Light Booster",
                desc: "Opalescencia excepcional sobre estructuras metálicas.",
              },
            ].map((f) => (
              <div
                key={f.title}
                style={{
                  marginBottom: "0.8rem",
                  paddingBottom: "0.8rem",
                  borderBottom: "1px solid rgba(180,140,40,0.12)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "#1f2c43",
                    margin: "0 0 0.2rem",
                    lineHeight: 1.3,
                  }}
                >
                  {f.title}
                </p>
                <p
                  style={{
                    fontSize: "0.73rem",
                    color: "rgba(31,44,67,0.58)",
                    margin: 0,
                    lineHeight: 1.55,
                    fontWeight: 300,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}

            <p
              style={{
                fontSize: "0.72rem",
                color: "rgba(180,140,40,0.75)",
                margin: 0,
                fontWeight: 500,
                fontStyle: "italic",
              }}
            >
              El material que utilizamos en restauraciones cerámicas.
            </p>
          </motion.div>
        </div>

        {/* Countries Grid — full width below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(37,89,88,0.5)",
              margin: "0 0 1.5rem",
            }}
          >
            Formación de cinco nacionalidades
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "clamp(0.75rem, 2vw, 1.25rem)",
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
          .cert-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

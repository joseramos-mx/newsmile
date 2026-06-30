"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkle, Tooth, Aperture } from "@phosphor-icons/react";
import Image from "next/image";

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
    description: "Soporte protésico completo para tus rehabilitaciones de arco total y casos de alta complejidad",
  },
  {
    id: "03",
    title: "Implantología Protésica",
    description: "Sobrestructuras, coronas y prótesis sobre implantes con ajuste pasivo y precisión de laboratorio",
  },
  {
    id: "04",
    title: "Diseño de Sonrisa Digital",
    description: "Integramos tu escáner intraoral para un flujo digital completo, sin impresiones físicas",
  },
  {
    id: "05",
    title: "Consultoría Clínica",
    description: "Asesoría técnica paciente por paciente, respondemos dudas sobre materiales, adhesión y protocolo en todo momento",
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
      className="service-row"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: hovered ? "rgba(255,255,255,0.025)" : "transparent",
        transition: "background 0.35s ease",
        cursor: "default",
      }}
    >
      {/* Number */}
      <span
        className="service-row-num"
        style={{
          color: hovered ? "#255958" : "rgba(37,89,88,0.45)",
          transition: "color 0.35s ease",
        }}
      >
        {service.id}
      </span>

      {/* Title */}
      <h3
        className="service-row-title"
        style={{
          color: hovered ? "#ffffff" : "rgba(255,255,255,0.82)",
          transition: "color 0.35s ease",
        }}
      >
        {service.title}
      </h3>

      {/* Description — pinned column */}
      <p
        className="service-row-desc"
        style={{
          color: hovered ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.25)",
          transition: "color 0.35s ease",
        }}
      >
        {service.description}
      </p>

      {/* Arrow circle */}
      <div
        className="service-row-arrow"
        style={{
          borderColor: hovered ? "rgba(37,89,88,0.55)" : "rgba(255,255,255,0.09)",
          background: hovered ? "rgba(37,89,88,0.12)" : "transparent",
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
        overflow: "hidden",
      }}
    >
      <div
        className="services-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 3rem)",
        }}
      >

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

        {/* ── Service highlight cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="service-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.75rem",
            marginBottom: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          {[
            { Icon: Sparkle,  label: "Alta Estética Cerámica",   img: "/images/img26.jpeg" },
            { Icon: Tooth,    label: "Rehabilitación Bucodental", img: "/images/img8.jpeg" },
            { Icon: Aperture, label: "Diseño de Sonrisa Digital", img: "ddesonrisa.png" },
          ].map(({ Icon, label, img }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="svc-card-wrap"
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* Background image */}
              {img && (
                <Image
                  src={img.startsWith("/") ? img : `/${img}`}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 90vw, 380px"
                  className="svc-card-img"
                />
              )}

              {/* Fallback dark bg when no image */}
              {!img && (
                <div style={{
                  position: "absolute", inset: 0,
                  background: "rgba(37,89,88,0.12)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                }} />
              )}

              {/* Gradient overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)",
              }} />

              {/* Content — bottom left */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}>
                <Icon size={20} weight="duotone" color="rgba(255,255,255,0.7)" />
                <p style={{
                  fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
                  fontWeight: 600,
                  color: "white",
                  margin: 0,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                }}>
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            <div
              key={i}
              className="marquee-img-wrap"
              style={{
                position: "relative",
                height: "clamp(140px, 18vw, 220px)",
                aspectRatio: "1 / 1",
                flexShrink: 0,
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                aria-hidden="true"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 140px, (max-width: 1200px) 18vw, 220px"
                className="marquee-img"
              />
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        /* ── Service row layout ── */
        .service-row {
          display: grid;
          align-items: center;
        }
        .service-row-num {
          font-family: ui-monospace, monospace;
          font-weight: 500;
          letter-spacing: 0.04em;
          user-select: none;
        }
        .service-row-title {
          font-weight: 400;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 0;
        }
        .service-row-desc {
          font-weight: 300;
          line-height: 1.55;
          margin: 0;
        }
        .service-row-arrow {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.09);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Desktop (≥768px) — 4-column row with side hover extension */
        @media (min-width: 768px) {
          .service-row {
            grid-template-columns: 3.5rem 1fr clamp(14rem, 28%, 22rem) auto;
            gap: clamp(1rem, 3vw, 2rem);
            padding: clamp(1.25rem, 3vw, 1.75rem) clamp(1rem, 4vw, 3rem);
            margin-left: calc(-1 * clamp(1rem, 4vw, 3rem));
            margin-right: calc(-1 * clamp(1rem, 4vw, 3rem));
          }
          .service-row-num   { font-size: 0.8rem; padding-top: 0.15em; }
          .service-row-title { font-size: clamp(1.5rem, 3.2vw, 2.5rem); }
          .service-row-desc  { font-size: clamp(0.78rem, 1vw, 0.875rem); }
        }

        /* Mobile (<768px) — 3-column grid, description below title */
        @media (max-width: 767px) {
          .service-row {
            grid-template-columns: 2.25rem 1fr auto;
            grid-template-areas:
              "num title arrow"
              ".   desc  desc";
            column-gap: 0.85rem;
            row-gap: 0.4rem;
            align-items: start;
            padding: 1.1rem 0;
          }
          .service-row-num   {
            grid-area: num;
            font-size: 0.72rem;
            padding-top: 0.45em;
          }
          .service-row-title {
            grid-area: title;
            align-self: center;
            font-size: 1.15rem;
          }
          .service-row-arrow {
            grid-area: arrow;
            align-self: center;
            width: 34px;
            height: 34px;
          }
          .service-row-desc  {
            grid-area: desc;
            font-size: 0.78rem;
            padding-top: 0.1rem;
          }
        }

        /* ── Highlight cards stack on small mobile ── */
        @media (max-width: 640px) {
          .service-cards {
            grid-template-columns: 1fr !important;
          }
        }

        .marquee-img { filter: brightness(0.82) saturate(0.85); transition: filter 0.3s ease; }
        .marquee-img-wrap:hover .marquee-img { filter: brightness(1) saturate(1); }
        .svc-card-img { transition: transform 0.5s ease; }
        .svc-card-wrap:hover .svc-card-img { transform: scale(1.04); }
      `}</style>
    </section>
  );
}

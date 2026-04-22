"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Feature() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        background: "black",
        padding: "5rem clamp(1rem, 4vw, 3rem)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--mineral)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <span style={{ display: "inline-block", width: "18px", height: "1px", background: "var(--arandano)", opacity: 0.4 }} />
          Casos de alta especialización
        </motion.p>

        {/* Masked image container */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="feature-container"
          style={{
            width: "100%",
            aspectRatio: "2261.7 / 1005.01",
            display: "grid",
            gridTemplateColumns: "55fr 45fr",
            overflow: "hidden",
            maskImage: "url('/mask.svg')",
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskImage: "url('/mask.svg')",
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          {/* ── Left panel — image + text overlay ── */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('/feature-left.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                background: "linear-gradient(135deg, #2a1f1a 0%, #4a3328 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.10) 55%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "clamp(1.25rem, 3vw, 2.5rem)",
                left: "clamp(1.25rem, 3vw, 2.5rem)",
                right: "clamp(1.25rem, 3vw, 2.5rem)",
                zIndex: 2,
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.90)",
                  fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)",
                  fontWeight: 300,
                  lineHeight: 1.55,
                  marginBottom: "clamp(0.75rem, 2vw, 1.5rem)",
                  maxWidth: "38ch",
                }}
              >
                Alta especialización técnica protésica y estética, con calidad High&nbsp;End en tiempos reducidos para especialistas rehabilitadores.
              </p>
              <a
                href="#form"
                onClick={(e) => { e.preventDefault(); document.querySelector("#form")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  display: "inline-block",
                  padding: "0.6rem 1.2rem",
                  border: "1px solid rgba(255,255,255,0.55)",
                  borderRadius: "100px",
                  color: "rgba(255,255,255,0.90)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontFamily: "inherit",
                  minHeight: "44px",
                  lineHeight: "44px",
                  paddingTop: 0,
                  paddingBottom: 0,
                  transition: "background 0.2s, color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(255,255,255,0.15)"; el.style.borderColor = "rgba(255,255,255,0.90)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "transparent"; el.style.borderColor = "rgba(255,255,255,0.55)"; }}
              >
                Enviar mi caso
              </a>
            </div>
          </div>

          {/* ── Right panel ── */}
          <div className="feature-right-panel" style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "3px", background: "var(--ivory)", zIndex: 2 }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/feature-right.jpg')", backgroundSize: "cover", backgroundPosition: "center", background: "linear-gradient(135deg, #c8b8a8 0%, #e0d0c0 100%)" }} />
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .feature-container {
            aspect-ratio: 4 / 3 !important;
            grid-template-columns: 1fr !important;
            mask-image: none !important;
            -webkit-mask-image: none !important;
            border-radius: 20px;
          }
          .feature-right-panel { display: none !important; }
        }
      `}</style>
    </section>
  );
}

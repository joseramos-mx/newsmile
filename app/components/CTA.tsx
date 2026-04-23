"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "@phosphor-icons/react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="cta"
      style={{
        padding: "5rem 1.5rem",
        background: "var(--color-ivory, #FAF7F3)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "28px",
            background: "#317573",
            padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 4rem)",
            textAlign: "center",
          }}
        >
          {/* Pattern texture overlay */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/pattern.svg"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.18,
              pointerEvents: "none",
              userSelect: "none",
            }}
          />

          {/* Radial vignette to fade edges softly */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(49,117,115,0.55) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Icon badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                marginBottom: "1.75rem",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4.5vw, 3rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                margin: "0 0 0.5rem",
              }}
            >
              Hagamos de tu próximo trabajo
            </h2>

            {/* Second line + inline CTA */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(1.75rem, 4.5vw, 3rem)",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.12,
                }}
              >
                tu mejor trabajo
              </span>

              <button
                onClick={() =>
                  document.querySelector("#form")?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  background: "white",
                  color: "#255958",
                  border: "none",
                  padding: "0.7rem 1.4rem",
                  borderRadius: "100px",
                  fontSize: "clamp(0.78rem, 1.4vw, 0.88rem)",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  whiteSpace: "nowrap",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.22)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Solicitar cotización <ArrowUpRight size={15} weight="bold" />
              </button>
            </div>

            {/* Trust badges */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "clamp(1rem, 4vw, 2.5rem)",
                flexWrap: "wrap",
              }}
            >
              {["Sin pago por adelantado", "Garantía de 5 años"].map((text) => (
                <span
                  key={text}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                  }}
                >
                  <ShieldCheck size={15} weight="fill" style={{ color: "rgba(255,255,255,0.55)" }} />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

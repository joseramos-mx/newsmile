"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "@phosphor-icons/react";

/* ── Desktop glass card styles ─────────────────────────────── */
const glassInputStyle: React.CSSProperties = {
  width: "100%",
  height: "44px",
  borderRadius: "10px",
  padding: "0 1rem",
  fontSize: "0.875rem",
  color: "rgba(255,255,255,0.9)",
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.22)",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
  transition: "background 0.2s, border-color 0.2s",
};

const focusGlass = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
  e.currentTarget.style.background = "rgba(255,255,255,0.18)";
  e.currentTarget.style.borderColor = "rgba(255,255,255,0.50)";
};
const blurGlass = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
  e.currentTarget.style.background = "rgba(255,255,255,0.10)";
  e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
};


export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('/bg-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
      className="h-screen"
    >
      {/* ── Overlays ─────────────────────────────────────────── */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at 55% 45%, transparent 25%, rgba(0,0,0,0.52) 100%)" }} />
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.40) 0%, transparent 55%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-[55%] z-[1] pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)" }} />

      {/* ── Large background word — desktop only ─────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute bottom-0 left-0 w-full z-[2] pointer-events-none select-none"
        style={{ lineHeight: 0.85 }}
      >
        <span
          className="block font-medium text-[#F3E8D8] pl-6 md:pl-10"
          style={{ fontSize: "clamp(70px, 25vw, 25vw)" }}
        >
          Estética
        </span>
      </motion.div>

      {/* ── Desktop: left tagline ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute left-10 z-[3] max-w-xs"
        style={{ bottom: "calc(20vw + 2.5rem)" }}
      >
        <p className="text-white/90 text-lg font-light leading-relaxed">
          Alta especialización técnica protésica
          y estética, en tiempos reducidos.
        </p>
      </motion.div>

      {/* ── Desktop: glass form card ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute z-[3]"
        style={{
          top: "17%",
          transform: "translateY(-50%)",
          right: "clamp(1rem, 3vw, 3rem)",
          width: "min(360px, calc(100vw - 2rem))",
        }}
      >
        <GlassCard />
      </motion.div>

      {/* ══════════════════════════════════════════════════════════
          MOBILE LAYOUT
      ══════════════════════════════════════════════════════════ */}
      <div
        className="lg:hidden flex flex-col"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          minHeight: "100dvh",
        }}
      >
        {/* Upper: headline over image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 1.25rem 2rem",
            paddingTop: "6rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Pill badge */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.22)",
                color: "rgba(255,255,255,0.88)",
                padding: "0.3rem 0.85rem",
                borderRadius: "100px",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                marginBottom: "1rem",
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#F6C289", display: "inline-block", flexShrink: 0 }} />
              Laboratorio Dental · Toluca, Méx.
            </span>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(2rem, 7.5vw, 2.6rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                margin: "0 0 0.75rem",
              }}
            >
              Alta especialización<br />
              protésica y estética
            </h1>

            {/* Subline */}
            <p
              style={{
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              En tiempos reducidos.
            </p>
          </motion.div>
        </div>

        {/* Floating glass card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={{ padding: "0 1.25rem 2.5rem" }}
        >
          <GlassCard />

          {/* Trust badges */}
          <div style={{ display: "flex", gap: "1.25rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
            {["Sin pago por adelantado", "Garantía de 5 años"].map((text) => (
              <span
                key={text}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                <ShieldCheck size={13} weight="fill" color="rgba(255,255,255,0.5)" style={{ flexShrink: 0 }} />
                {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Desktop glass card (unchanged) ────────────────────────── */
function GlassCard() {
  return (
    <div
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.13)",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
        border: "1px solid rgba(255,255,255,0.28)",
        boxShadow: "0 16px 56px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18)",
      }}
    >
      <div style={{ padding: "1.25rem 1.5rem 0.75rem" }}>
        <p style={{ color: "rgba(255,255,255,0.70)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 0.25rem" }}>
          Cotización rápida
        </p>
        <p style={{ color: "rgba(255,255,255,0.90)", fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.4, margin: 0 }}>
          Cuéntanos tu caso, te respondemos en menos de 24 h.
        </p>
      </div>

      <div style={{ padding: "0.75rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
        <input type="text" placeholder="Nombre completo" style={glassInputStyle} onFocus={focusGlass} onBlur={blurGlass} />
        <input type="tel" placeholder="WhatsApp / Teléfono" style={glassInputStyle} onFocus={focusGlass} onBlur={blurGlass} />
        <select
          defaultValue=""
          style={{ ...glassInputStyle, appearance: "none", cursor: "pointer" }}
          onFocus={focusGlass}
          onBlur={blurGlass}
        >
          <option value="" disabled style={{ background: "#1F2C43", color: "#9ca3af" }}>
            Tipo de trabajo
          </option>
          {[
            "Corona unitaria", "Puente dental", "Prótesis removible",
            "Implante protésico", "Carilla / Faceta", "Otro",
          ].map((opt) => (
            <option key={opt} value={opt} style={{ background: "#1F2C43", color: "#fff" }}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div style={{ padding: "0.75rem 1.5rem 1.25rem" }}>
        <button
          type="submit"
          style={{ width: "100%", height: "46px", borderRadius: "12px", background: "#EDE3D3", color: "#1F2C43", border: "none", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.04em", cursor: "pointer", fontFamily: "inherit", transition: "background 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#FAF7F3"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#EDE3D3"; }}
        >
          Solicitar cotización
        </button>
      </div>
    </div>
  );
}

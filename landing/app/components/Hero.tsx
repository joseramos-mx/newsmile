"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      style={{
        fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        /* Deep dark base — matches reference */
        background: "radial-gradient(ellipse 120% 90% at 50% 100%, #0E1018 0%, #060709 55%, #030406 100%)",
      }}
    >
      {/* ── Ambient glow layers ─────────────────────────────── */}

      {/* Wide soft silver halo behind the icon */}
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: 1,
          bottom: "-5%",
          left: 0,
          right: 0,
          margin: "0 auto",
          width: "80%",
          height: "70%",
          background:
            "radial-gradient(ellipse at 50% 85%, rgba(155,162,178,0.13) 0%, rgba(100,110,130,0.06) 45%, transparent 70%)",
        }}
      />

      {/* Tight bright core glow right under the icon */}
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: 1,
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "42%",
          height: "28%",
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(200,205,215,0.11) 0%, transparent 65%)",
          filter: "blur(18px)",
        }}
      />

      {/* ── Newsmile icon PNG (transparent bg) ──────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.1, ease }}
        style={{
          position: "absolute",
          zIndex: 2,
          bottom: "-4%",
          left: 0,
          right: 0,
          margin: "0 auto",
          width: "min(58%, 580px)",
        }}
      >
        <Image
          src="/iconglow.svg"
          alt="NewSmile"
          width={800}
          height={800}
          priority
          quality={100}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </motion.div>

      {/* Bottom gradient — dark hero → ivory Allies */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          zIndex: 10,
          height: "45%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(5,6,8,0.7) 40%, #070707 100%)",
        }}
      />

      {/* ── Text content — upper center ──────────────────────── */}
      <div
        className="absolute inset-0 flex flex-col items-center"
        style={{ zIndex: 4, paddingTop: "clamp(5.5rem, 12vh, 9rem)" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease }}
          style={{
            fontSize: "clamp(2.4rem, 6.5vw, 5.5rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: "0 0 2rem",
            textAlign: "center",
            maxWidth: "20ch",
            padding: "0 1.5rem",
          }}
        >
          <span style={{ fontWeight: 300, color: "rgba(255,255,255,0.80)" }}>
            Arte protésico
          </span>
          <br />
          al más alto nivel.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          style={{
            display: "flex",
            gap: "0.65rem",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "0 1.5rem",
          }}
        >
          <button
            style={{
              padding: "0.7rem 1.6rem",
              borderRadius: "8px",
              background: "#f0ece6",
              color: "#1F2C43",
              border: "none",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background 0.2s, transform 0.18s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#f0ece6";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Solicitar cotización
          </button>

          <button
            style={{
              padding: "0.7rem 1.6rem",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(255,255,255,0.15)",
              fontSize: "0.8rem",
              fontWeight: 400,
              letterSpacing: "0.02em",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "border-color 0.2s, color 0.2s, transform 0.18s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "rgba(255,255,255,0.72)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Ver trabajos
          </button>
        </motion.div>
      </div>
    </section>
  );
}

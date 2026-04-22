"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";

/* ── FadeIn ─────────────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  duration = 1000,
  className = "",
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ${className}`}
      style={{ opacity: visible ? 1 : 0, transitionDuration: `${duration}ms`, ...style }}
    >
      {children}
    </div>
  );
}

/* ── AnimatedHeading ────────────────────────────────────────── */
function AnimatedHeading({
  text,
  className = "",
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [started, setStarted] = useState(false);
  const charDelay = 30;

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 200);
    return () => clearTimeout(t);
  }, []);

  const lines = text.split("\n");
  let globalIndex = 0;

  return (
    <h1
      className={className}
      style={{ letterSpacing: "-0.04em", ...style }}
    >
      {lines.map((line, lineIndex) => {
        const chars = line.split("");
        return (
          <span key={lineIndex} style={{ display: "block" }}>
            {chars.map((char) => {
              const delay = globalIndex++ * charDelay;
              return (
                <span
                  key={delay}
                  style={{
                    display: "inline-block",
                    opacity: started ? 1 : 0,
                    transform: started ? "translateX(0)" : "translateX(-18px)",
                    transition: `opacity 500ms ${delay}ms, transform 500ms ${delay}ms`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
        fontFamily: "var(--font-inter), Inter, sans-serif",
      }}
    >
      {/* Background image — NO overlay whatsoever */}
      <Image
        src="/herobg.jpeg"
        alt=""
        fill
        priority
        quality={100}
        style={{ objectFit: "cover", zIndex: 0 }}
        sizes="100vw"
      />

      {/* Bottom gradient — seamless transition to next section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "35%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 50%, #000 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Full-height layout container */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />

        {/* ── Hero content — pushed to bottom ───────────────── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 4rem 4rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "end",
              gap: "2rem",
            }}
          >
            {/* Left column */}
            <div>
              <AnimatedHeading
                text={"Shaping tomorrow\nwith vision and action."}
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 400,
                  color: "#fff",
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  marginBottom: "1rem",
                }}
              />

              <FadeIn delay={800} duration={1000}>
                <p style={{ fontSize: "1.125rem", color: "#d1d5db", marginBottom: "1.25rem" }}>
                  We back visionaries and craft ventures that define what comes next.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "1rem" }}>
                  <button
                    style={{
                      background: "#fff",
                      color: "#000",
                      padding: "0.75rem 2rem",
                      borderRadius: "0.5rem",
                      fontWeight: 500,
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f3f4f6")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
                  >
                    Cotizar Proyecto
                  </button>
                  <button
                    className="liquid-glass"
                    style={{
                      color: "#fff",
                      padding: "0.75rem 2rem",
                      borderRadius: "0.5rem",
                      fontWeight: 500,
                      border: "1px solid rgba(255,255,255,0.2)",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      transition: "background 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#fff";
                      e.currentTarget.style.color = "#000";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "";
                      e.currentTarget.style.color = "#fff";
                    }}
                  >
                    Ver trabajos
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right column — tag */}
            <FadeIn
              delay={1400}
              duration={1000}
              style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}
            >
              <div
                className="liquid-glass backdrop-blur-xl"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.75rem",
                }}
              >
                <span style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 300, color: "#fff" }}>
                  Investing. Building. Advisory.
                </span>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}

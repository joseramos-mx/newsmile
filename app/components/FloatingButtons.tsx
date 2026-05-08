"use client";

import { useState, useEffect } from "react";
import { WhatsappLogo, ArrowUp } from "@phosphor-icons/react";

const WA_URL =
  "https://wa.me/527225123187?text=Hola%2C%20me%20interesa%20cotizar%20un%20caso%20con%20New%20Smile%20Dental%20Lab.";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const btnBase: React.CSSProperties = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease, opacity 0.3s ease",
    flexShrink: 0,
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.75rem",
        right: "1.25rem",
        zIndex: 55,
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
        alignItems: "center",
      }}
    >
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        style={{
          ...btnBase,
          background: "rgba(15,15,15,0.85)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          color: "rgba(255,255,255,0.8)",
          border: "1px solid rgba(255,255,255,0.12)",
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? "auto" : "none",
          transform: showTop ? "translateY(0)" : "translateY(10px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
        }}
      >
        <ArrowUp size={20} weight="bold" />
      </button>

      {/* WhatsApp */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        style={{
          ...btnBase,
          background: "#25D366",
          color: "white",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,211,102,0.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
        }}
      >
        <WhatsappLogo size={24} weight="fill" />
      </a>
    </div>
  );
}

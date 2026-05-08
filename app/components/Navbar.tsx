"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";

const links: [string, string][] = [
  ["Servicios",   "#servicios"],
  ["Casos",       "#showcase"],
  ["Beneficios",  "#benefits"],
  ["Formación",   "#certifications"],
  ["Testimonios", "#testimonials"],
  ["Contacto",    "#form"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "1.25rem clamp(1rem, 4vw, 2.5rem) 0",
      }}
    >
      {/* Main bar */}
      <nav
        className="liquid-glass"
        style={{
          borderRadius: "14px",
          padding: "0 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "52px",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          transition: "box-shadow 0.35s ease",
          boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.3)" : "none",
        }}
      >
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="New Smile"
          width={100}
          height={18}
          style={{ height: "18px", width: "auto", filter: "brightness(0) invert(1)", flexShrink: 0 }}
        />

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(1rem, 2.5vw, 2rem)" }} className="hidden-mobile">
          {links.map(([label, href]) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.8rem",
                fontFamily: "inherit",
                cursor: "pointer",
                padding: 0,
                transition: "color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "white"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexShrink: 0 }}>
          {/* Formulario */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-case-readiness"))}
            className="hidden-mobile"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.85)",
              padding: "0.45rem 1.2rem",
              borderRadius: "8px",
              fontSize: "0.78rem",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.15)",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background 0.2s, color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
          >
            ¿Mi caso esta listo?
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/527225123187?text=Hola%2C%20me%20interesa%20cotizar%20un%20caso%20con%20New%20Smile%20Dental%20Lab."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden-mobile"
            style={{
              background: "white",
              color: "#0a0a0a",
              padding: "0.45rem 1.2rem",
              borderRadius: "8px",
              fontSize: "0.78rem",
              fontWeight: 600,
              textDecoration: "none",
              fontFamily: "inherit",
              transition: "background 0.2s",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#e8e8e8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "white"; }}
          >
            Enviar un caso
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="show-mobile"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: "0.25rem", display: "flex" }}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="liquid-glass show-mobile"
          style={{
            marginTop: "0.5rem",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          {links.map(([label, href]) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "1rem 1.5rem",
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.95rem",
                fontFamily: "inherit",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
          <a
            href="https://wa.me/527225123187?text=Hola%2C%20me%20interesa%20cotizar%20un%20caso%20con%20New%20Smile%20Dental%20Lab."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              padding: "1rem 1.5rem",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              fontSize: "0.9rem",
              fontWeight: 600,
              fontFamily: "inherit",
              textDecoration: "none",
            }}
          >
            Enviar un caso →
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Servicios",   href: "#showcase"     },
  { label: "Beneficios",  href: "#benefits"     },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Contacto",    href: "#form"         },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true, once: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onDark = !scrolled;

  const pillBg      = onDark ? "rgba(15,15,15,0.30)"      : "rgba(244,245,244,0.92)";
  const pillBorder  = onDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(255,255,255,0.90)";
  const pillShadow  = onDark
    ? "0 2px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)"
    : "0 2px 24px rgba(31,44,67,0.07), inset 0 1px 0 rgba(255,255,255,0.95)";
  const linkColor   = onDark ? "rgba(255,255,255,0.85)" : "var(--near-black)";
  const ctaBg       = onDark ? "rgba(255,255,255,0.14)" : "var(--arandano)";
  const ctaColor    = onDark ? "rgba(255,255,255,0.92)" : "#f4f5f4";
  const ctaBorder   = onDark ? "1px solid rgba(255,255,255,0.22)" : "1px solid transparent";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: "0.75rem 1rem",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
            padding: "0.5rem 0.5rem 0.5rem 1.1rem",
            borderRadius: "100px",
            background: pillBg,
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            border: pillBorder,
            boxShadow: pillShadow,
            transition: "background 0.45s, border-color 0.45s, box-shadow 0.45s",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}
            style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}
          >
            <Image
              src="/logo.svg"
              alt="NewSmile Laboratorio Dental"
              width={130}
              height={24}
              priority
              loading="eager"
              style={{ height: "21px", width: "auto", filter: onDark ? "brightness(0) invert(1)" : "none", opacity: onDark ? 0.92 : 1, transition: "filter 0.45s, opacity 0.45s" }}
            />
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: "0.05rem", flexShrink: 1 }}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: "clamp(0.75rem, 1.05vw, 0.82rem)", fontWeight: 500,
                  color: linkColor, fontFamily: "inherit",
                  padding: "0.5rem 0.9rem", borderRadius: "100px",
                  whiteSpace: "nowrap", transition: "background 0.2s, color 0.2s",
                  minHeight: "44px",
                }}
                onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = onDark ? "rgba(255,255,255,0.10)" : "rgba(37,89,88,0.07)"; b.style.color = onDark ? "#fff" : "var(--arandano)"; }}
                onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "none"; b.style.color = linkColor; }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right group */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexShrink: 0 }}>
            {/* Desktop CTA */}
            <button
              onClick={() => handleNav("#form")}
              className="hidden md:block"
              style={{ background: ctaBg, color: ctaColor, border: ctaBorder, backdropFilter: onDark ? "blur(8px)" : "none", padding: "0.55rem 1.2rem", borderRadius: "100px", fontSize: "clamp(0.75rem, 1vw, 0.82rem)", fontWeight: 600, letterSpacing: "0.04em", cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap", transition: "background 0.35s, color 0.35s, transform 0.2s", minHeight: "44px" }}
              onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = onDark ? "rgba(255,255,255,0.24)" : "var(--near-black)"; b.style.transform = "scale(1.03)"; }}
              onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = ctaBg; b.style.transform = "scale(1)"; }}
            >
              Cotizar ahora
            </button>

            {/* Mobile CTA */}
            <button
              onClick={() => handleNav("#form")}
              className="flex md:hidden"
              style={{ background: ctaBg, color: ctaColor, border: ctaBorder, padding: "0.55rem 1rem", borderRadius: "100px", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap", minHeight: "44px" }}
            >
              Cotizar
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="flex md:hidden"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              style={{ width: "44px", height: "44px", borderRadius: "100px", background: "transparent", border: "none", cursor: "pointer", alignItems: "center", justifyContent: "center", color: linkColor, transition: "background 0.2s", flexShrink: 0 }}
            >
              {menuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden"
            style={{
              position: "fixed",
              top: "4.75rem",
              left: "1rem",
              right: "1rem",
              zIndex: 99,
              background: "rgba(246,247,246,0.97)",
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 8px 40px rgba(31,44,67,0.12), 0 2px 8px rgba(31,44,67,0.06)",
              padding: "0.5rem",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  display: "flex", alignItems: "center",
                  width: "100%", background: "none", border: "none",
                  cursor: "pointer", fontSize: "1rem", fontWeight: 500,
                  color: "var(--near-black)", fontFamily: "inherit",
                  padding: "0.875rem 1.25rem", borderRadius: "12px",
                  transition: "background 0.18s, color 0.18s",
                  minHeight: "52px",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(37,89,88,0.07)"; e.currentTarget.style.color = "var(--arandano)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--near-black)"; }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

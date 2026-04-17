"use client";

import Image from "next/image";
import { InstagramLogo, FacebookLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";

const footerLinks = {
  Servicios: ["Alta Estética Cerámica", "Rehabilitación Bucodental", "Implantología Protésica", "Diseño de Sonrisa Digital", "Consultoría Clínica"],
  Empresa: ["Sobre NewSmile", "Certificaciones", "Tecnología CAD/CAM", "Kulzer México"],
  Legal: ["Política de privacidad", "Términos de servicio", "Garantía 5 años", "Norma ISO 9000"],
};

const socials = [
  { label: "Instagram", Icon: InstagramLogo },
  { label: "Facebook", Icon: FacebookLogo },
  { label: "LinkedIn", Icon: LinkedinLogo },
  { label: "WhatsApp", Icon: WhatsappLogo },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--near-black)" }}>
      {/* Top section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 2rem 4rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <Image
            src="/logo.svg"
            alt="NewSmile Laboratorio Dental"
            width={145}
            height={25}
            style={{ height: "25px", width: "auto", filter: "invert(1)", opacity: 0.85, marginBottom: "1.5rem" }}
          />

          <p
            style={{
              fontSize: "0.875rem",
              lineHeight: 1.75,
              color: "rgba(250,247,243,0.38)",
              fontWeight: 300,
              maxWidth: "280px",
              marginBottom: "2rem",
            }}
          >
            Laboratorio dental en Toluca, México. Especialistas en alta estética cerámica y rehabilitación bucodental. 10+ años en el mercado.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "0.6rem" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: "rgba(250,247,243,0.05)",
                  border: "1px solid rgba(250,247,243,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  const a = e.currentTarget as HTMLAnchorElement;
                  a.style.background = "rgba(37,89,88,0.25)";
                  a.style.borderColor = "rgba(37,89,88,0.4)";
                  a.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const a = e.currentTarget as HTMLAnchorElement;
                  a.style.background = "rgba(250,247,243,0.05)";
                  a.style.borderColor = "rgba(250,247,243,0.08)";
                  a.style.transform = "translateY(0)";
                }}
              >
                <s.Icon size={18} color="rgba(250,247,243,0.55)" weight="regular" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([cat, links]) => (
          <div key={cat}>
            <h4
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--solar)",
                marginBottom: "1.5rem",
              }}
            >
              {cat}
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(250,247,243,0.38)",
                      textDecoration: "none",
                      fontWeight: 300,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,247,243,0.8)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,247,243,0.38)"; }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(250,247,243,0.06)", padding: "1.5rem 2rem" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "0.75rem", color: "rgba(250,247,243,0.2)", fontWeight: 300 }}>
            © {new Date().getFullYear()} New Smile Dental Lab · Toluca, México. Todos los derechos reservados.
          </span>

          {/* Pantone color swatches as brand mark */}
          <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            {["#F6C289", "#B2B6AC", "#76849B", "#255958", "#1F2C43"].map((c) => (
              <div
                key={c}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: c,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacidad", "Términos", "Garantía"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(250,247,243,0.18)",
                  textDecoration: "none",
                  letterSpacing: "0.03em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,247,243,0.5)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,247,243,0.18)"; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

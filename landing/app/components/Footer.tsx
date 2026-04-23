"use client";

const pages = ["Historia", "Servicios", "Tecnología", "Certificaciones", "Contáctanos"];
const social = ["Instagram", "Facebook", "LinkedIn", "WhatsApp"];

const linkStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  color: "rgba(250,247,243,0.65)",
  textDecoration: "none",
  transition: "color 0.2s",
  display: "inline-block",
};

function NavLink({ label }: { label: string }) {
  return (
    <li>
      <a
        href="#"
        style={linkStyle}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,247,243,0.65)"; }}
      >
        {label}
      </a>
    </li>
  );
}

const colHead: React.CSSProperties = {
  fontSize: "0.6rem",
  fontWeight: 700,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(250,247,243,0.28)",
  marginBottom: "1.25rem",
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--near-black)", overflow: "hidden" }}>

      {/* ── Main grid ── */}
      <div
        className="footer-top"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem clamp(1.5rem, 4vw, 3rem) 3rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "3rem 4rem",
        }}
      >
        {/* Pages */}
        <div>
          <p style={colHead}>Páginas</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {pages.map((l) => <NavLink key={l} label={l} />)}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p style={colHead}>Social</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {social.map((l) => <NavLink key={l} label={l} />)}
          </ul>
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ borderTop: "1px solid rgba(250,247,243,0.07)", margin: "0 clamp(1.5rem, 4vw, 3rem)" }} />

      {/* ── Locations row ── */}
      <div
        className="footer-locations"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2.5rem clamp(1.5rem, 4vw, 3rem) 3rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
        }}
      >
        <div>
          <p style={colHead}>Ubicación</p>
          <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "rgba(250,247,243,0.8)", marginBottom: "0.35rem" }}>Toluca, México</p>
          <p style={{ fontSize: "0.8rem", color: "rgba(250,247,243,0.32)", lineHeight: 1.7 }}>
            C. Manuel J. Clouthier 209<br />Col. Cuauhtémoc, C.P. 50040
          </p>
        </div>
        <div>
          <p style={colHead}>Horario</p>
          <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "rgba(250,247,243,0.8)", marginBottom: "0.35rem" }}>Lun – Vie</p>
          <p style={{ fontSize: "0.8rem", color: "rgba(250,247,243,0.32)", lineHeight: 1.7 }}>9:00 – 18:00 hrs</p>
        </div>
        <div>
          <p style={colHead}>Contacto</p>
          <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "rgba(250,247,243,0.8)", marginBottom: "0.35rem" }}>hola@newsmile.mx</p>
          <p style={{ fontSize: "0.8rem", color: "rgba(250,247,243,0.32)", lineHeight: 1.7 }}>+52 (722) 000 0000</p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid rgba(250,247,243,0.07)", padding: "1.25rem clamp(1.5rem, 4vw, 3rem)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <span style={{ fontSize: "0.72rem", color: "rgba(250,247,243,0.2)", letterSpacing: "0.04em" }}>
            {new Date().getFullYear()} · New Smile Dental Lab · Toluca, México
          </span>
          <a
            href="#"
            style={{ fontSize: "0.72rem", color: "rgba(250,247,243,0.2)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,247,243,0.5)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,247,243,0.2)"; }}
          >
            Política de privacidad
          </a>
          <a
            href="mailto:hola@newsmile.mx"
            style={{ fontSize: "0.72rem", color: "rgba(250,247,243,0.2)", textDecoration: "none" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,247,243,0.5)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,247,243,0.2)"; }}
          >
            hola@newsmile.mx
          </a>
        </div>
      </div>

      {/* ── Oversized brand watermark ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/newsmile text.svg"
        alt=""
        aria-hidden="true"
        style={{
          display: "block",
          width: "110%",
          marginLeft: "-5%",
          opacity: 0.07,
          userSelect: "none",
          pointerEvents: "none",
          filter: "invert(1)",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr 1fr !important; }
          .footer-locations { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-top { grid-template-columns: 1fr !important; }
          .footer-locations { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

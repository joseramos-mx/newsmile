"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, Warning, XCircle, WhatsappLogo } from "@phosphor-icons/react";

const questions = [
  "¿La línea de terminación es visible y bien definida?",
  "¿Hay espacio mínimo de 1.5 mm en oclusión?",
  "¿La impresión o escaneo captura la preparación sin defectos?",
  "¿El campo está libre de humedad y sangrado gingival?",
  "¿Tienes la guía de sombra o color definida?",
];

type Answer = "si" | "nose" | "no" | null;

const SCORE: Record<NonNullable<Answer>, number> = { si: 2, nose: 1, no: 0 };

const answerConfig = {
  si:   { label: "Sí",       bg: "#1a3d2e", border: "#22c55e", color: "#22c55e" },
  nose: { label: "No sé",    bg: "#3d3000", border: "#f59e0b", color: "#f59e0b" },
  no:   { label: "No",       bg: "#3d0f0f", border: "#ef4444", color: "#ef4444" },
};

function result(score: number) {
  if (score >= 9) return {
    Icon: CheckCircle, iconColor: "#22c55e", border: "rgba(34,197,94,0.25)", bg: "rgba(34,197,94,0.07)",
    badge: "Caso listo para enviar",
    text: "Tu preparación cumple con los estándares del laboratorio. ¡Envíanos tus registros!",
    wa: "Hola%2C%20mi%20caso%20est%C3%A1%20listo%20para%20enviar%20a%20New%20Smile%20Dental%20Lab.",
  };
  if (score >= 6) return {
    Icon: Warning, iconColor: "#f59e0b", border: "rgba(245,158,11,0.25)", bg: "rgba(245,158,11,0.07)",
    badge: "Casi listo",
    text: "Revisa los puntos marcados. Podemos orientarte antes de enviar.",
    wa: "Hola%2C%20tengo%20dudas%20antes%20de%20enviar%20mi%20caso%20a%20New%20Smile%20Dental%20Lab.",
  };
  return {
    Icon: XCircle, iconColor: "#ef4444", border: "rgba(239,68,68,0.25)", bg: "rgba(239,68,68,0.07)",
    badge: "Necesita preparación adicional",
    text: "Contáctanos para acompañarte en la preparación del caso.",
    wa: "Hola%2C%20necesito%20asesor%C3%ADa%20para%20preparar%20mi%20caso%20para%20New%20Smile%20Dental%20Lab.",
  };
}

export default function CaseReadiness() {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>(Array(questions.length).fill(null));

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-case-readiness", handler);
    return () => window.removeEventListener("open-case-readiness", handler);
  }, []);

  const answered = answers.filter(Boolean).length;
  const complete = answered === questions.length;
  const score = answers.reduce((acc, a) => acc + (a ? SCORE[a] : 0), 0);
  const res = complete ? result(score) : null;

  const reset = () => setAnswers(Array(questions.length).fill(null));

  return (
    <>
      {/* ── Tab trigger ── */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Verificar preparación del caso"
        style={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translateY(-50%) rotate(180deg)",
          zIndex: 60,
          background: "#255958",
          color: "white",
          border: "none",
          cursor: "pointer",
          padding: "0.9rem 0.7rem",
          borderRadius: "0 8px 8px 0",
          writingMode: "vertical-rl",
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontFamily: "inherit",
          boxShadow: "-4px 0 24px rgba(37,89,88,0.35)",
          animation: "tab-pulse 3s ease-in-out infinite",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#317573"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "#255958"; }}
      >
        ¿Listo para enviar?
      </button>

      {/* ── Mobile overlay ── */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 61,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ── Slide-in panel ── */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "clamp(320px, 100vw, 400px)",
          background: "#0a0a0a",
          borderLeft: "1px solid rgba(255,255,255,0.1)",
          zIndex: 62,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div style={{ padding: "1.5rem 1.5rem 1.25rem", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "1.25rem" }}>
            <div>
              <p style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#255958", margin: "0 0 0.5rem" }}>
                Diagnóstico rápido
              </p>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "white", letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0 }}>
                ¿Tu caso está listo<br />para laboratorio?
              </h2>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              style={{ background: "rgba(255,255,255,0.06)", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", borderRadius: "8px", padding: "0.4rem", display: "flex", flexShrink: 0, transition: "background 0.2s, color 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "white"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Progress dots */}
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {questions.map((_, i) => (
              <div
                key={i}
                style={{
                  height: "3px",
                  flex: 1,
                  borderRadius: "99px",
                  background: answers[i] ? "#255958" : "rgba(255,255,255,0.1)",
                  transition: "background 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* Questions */}
        <div style={{ flex: 1, padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {questions.map((q, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "12px",
                padding: "1rem",
                transition: "border-color 0.3s",
                ...(answers[i] ? { borderColor: "rgba(255,255,255,0.12)" } : {}),
              }}
            >
              <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.85)", fontWeight: 400, lineHeight: 1.45, margin: "0 0 0.75rem" }}>
                <span style={{ color: "rgba(37,89,88,0.8)", fontWeight: 600, fontSize: "0.7rem", marginRight: "0.4rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {q}
              </p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {(["si", "nose", "no"] as const).map((key) => {
                  const cfg = answerConfig[key];
                  const selected = answers[i] === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        const next = [...answers];
                        next[i] = key;
                        setAnswers(next);
                      }}
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        fontFamily: "inherit",
                        padding: "0.35rem 0.9rem",
                        borderRadius: "99px",
                        border: `1px solid ${selected ? cfg.border : "rgba(255,255,255,0.12)"}`,
                        background: selected ? cfg.bg : "transparent",
                        color: selected ? cfg.color : "rgba(255,255,255,0.4)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (!selected) {
                          e.currentTarget.style.borderColor = cfg.border;
                          e.currentTarget.style.color = cfg.color;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!selected) {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                          e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                        }
                      }}
                    >
                      {cfg.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Result */}
        {complete && res && (
          <div
            style={{
              margin: "0 1.5rem 1.5rem",
              padding: "1.25rem",
              background: res.bg,
              border: `1px solid ${res.border}`,
              borderRadius: "14px",
              flexShrink: 0,
              animation: "result-in 0.4s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            {/* Score + badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <res.Icon size={28} weight="duotone" color={res.iconColor} style={{ flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: res.iconColor, margin: "0 0 0.15rem" }}>
                  {res.badge}
                </p>
                <p style={{ fontSize: "1.6rem", fontWeight: 800, color: "white", lineHeight: 1, margin: 0, letterSpacing: "-0.03em" }}>
                  {score}<span style={{ fontSize: "0.9rem", fontWeight: 400, color: "rgba(255,255,255,0.35)", marginLeft: "0.2rem" }}>/10</span>
                </p>
              </div>
            </div>

            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.55, margin: "0 0 1rem" }}>
              {res.text}
            </p>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/527225123187?text=${res.wa}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                width: "100%",
                padding: "0.7rem",
                background: "#25D366",
                borderRadius: "10px",
                color: "white",
                fontWeight: 700,
                fontSize: "0.82rem",
                textDecoration: "none",
                fontFamily: "inherit",
                transition: "opacity 0.2s",
                marginBottom: "0.65rem",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              <WhatsappLogo size={18} weight="fill" />
              Contactar por WhatsApp
            </a>

            <button
              onClick={reset}
              style={{ display: "block", width: "100%", background: "none", border: "none", color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", cursor: "pointer", fontFamily: "inherit", transition: "color 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.3)"; }}
            >
              Reiniciar diagnóstico
            </button>
          </div>
        )}
      </aside>

      <style>{`
        @keyframes tab-pulse {
          0%, 100% { box-shadow: -4px 0 24px rgba(37,89,88,0.35); }
          50%       { box-shadow: -4px 0 36px rgba(37,89,88,0.65); }
        }
        @keyframes result-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

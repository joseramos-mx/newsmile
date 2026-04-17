"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Envelope, WhatsappLogo, CheckCircle, ArrowRight } from "@phosphor-icons/react";

const services = [
  "Alta Estética Cerámica",
  "Rehabilitación Bucodental",
  "Implantología Protésica",
  "Diseño de Sonrisa Digital",
  "Caso de alta especialización",
  "Consultoría y diagnóstico",
  "Otro servicio",
];

const contactInfo = [
  { Icon: MapPin,       label: "Ubicación", value: "Toluca, Estado de México" },
  { Icon: Envelope,     label: "Email",     value: "contacto@newsmilelab.mx"  },
  { Icon: WhatsappLogo, label: "WhatsApp",  value: "+52 722 000 0000"         },
];

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  return (
    <section
      ref={ref}
      id="form"
      className="section-pad"
      style={{ background: "var(--near-black)", position: "relative", overflow: "hidden" }}
    >
      {/* Background blobs */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], rotate: [0, 4, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "-15%",
          left: "-8%",
          width: "500px",
          height: "500px",
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
          background: "radial-gradient(circle, rgba(37,89,88,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "450px",
          height: "450px",
          borderRadius: "40% 60% 30% 70% / 60% 30% 70% 40%",
          background: "radial-gradient(circle, rgba(246,194,137,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "6rem", alignItems: "start" }}
          className="form-layout"
        >
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(246,194,137,0.12)",
                color: "var(--solar)",
                padding: "0.4rem 1rem",
                borderRadius: "100px",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--solar)", display: "inline-block" }} />
              Contacto
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontSize: "clamp(1.8rem, 3vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: "white",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
              }}
            >
              Tu aliado en{" "}
              <span style={{ color: "var(--solar)", fontWeight: 300, fontStyle: "normal" }}>
                cada diagnóstico
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.75,
                color: "rgba(250,247,243,0.5)",
                fontWeight: 300,
                marginBottom: "2.5rem",
              }}
            >
              ¿Tienes un caso de alta complejidad o necesitas consultoría? Escríbenos y te acompañamos desde el diagnóstico hasta el resultado final.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    background: "rgba(250,247,243,0.04)",
                    borderRadius: "16px",
                    border: "1px solid rgba(250,247,243,0.07)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: "rgba(37,89,88,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.Icon size={18} color="var(--arandano-light)" weight="duotone" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(250,247,243,0.35)", marginBottom: "0.2rem" }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(250,247,243,0.8)", fontWeight: 500 }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Form card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: "rgba(250,247,243,0.05)",
                  border: "1px solid rgba(250,247,243,0.1)",
                  borderRadius: "28px",
                  padding: "4rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "rgba(37,89,88,0.2)",
                    border: "1.5px solid var(--arandano-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle size={36} color="var(--arandano-light)" weight="duotone" />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "white", letterSpacing: "-0.01em" }}>
                  ¡Mensaje enviado!
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(250,247,243,0.55)", lineHeight: 1.7, fontWeight: 300 }}>
                  Nuestro equipo se pondrá en contacto contigo en breve. Estamos listos para ser tu aliado dental.
                </p>
                <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--solar)", fontWeight: 600 }}>
                  New Smile Dental Lab · Toluca, México
                </span>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "rgba(250,247,243,0.04)",
                  border: "1px solid rgba(250,247,243,0.08)",
                  borderRadius: "28px",
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.75rem",
                }}
              >
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "white", paddingBottom: "1.25rem", borderBottom: "1px solid rgba(250,247,243,0.08)" }}>
                  Solicitar cotización
                </div>

                {/* Row 1 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-row">
                  {[
                    { name: "name", label: "Nombre completo *", placeholder: "Dr. Juan Pérez", type: "text", required: true },
                    { name: "email", label: "Email *", placeholder: "doctor@clinica.com", type: "email", required: true },
                  ].map((f) => (
                    <div key={f.name}>
                      <label style={{ display: "block", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(250,247,243,0.35)", marginBottom: "0.5rem" }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={(form as Record<string, string>)[f.name]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        required={f.required}
                        style={{
                          background: "rgba(250,247,243,0.06)",
                          border: "1px solid rgba(250,247,243,0.1)",
                          borderRadius: "12px",
                          padding: "0.875rem 1rem",
                          width: "100%",
                          color: "white",
                          fontSize: "0.9rem",
                          fontFamily: "inherit",
                          outline: "none",
                          transition: "border-color 0.2s, background 0.2s",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "rgba(37,89,88,0.6)";
                          e.currentTarget.style.background = "rgba(250,247,243,0.08)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "rgba(250,247,243,0.1)";
                          e.currentTarget.style.background = "rgba(250,247,243,0.06)";
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(250,247,243,0.35)", marginBottom: "0.5rem" }}>
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+52 722 000 0000"
                      style={{
                        background: "rgba(250,247,243,0.06)",
                        border: "1px solid rgba(250,247,243,0.1)",
                        borderRadius: "12px",
                        padding: "0.875rem 1rem",
                        width: "100%",
                        color: "white",
                        fontSize: "0.9rem",
                        fontFamily: "inherit",
                        outline: "none",
                        transition: "border-color 0.2s, background 0.2s",
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(37,89,88,0.6)"; e.currentTarget.style.background = "rgba(250,247,243,0.08)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(250,247,243,0.1)"; e.currentTarget.style.background = "rgba(250,247,243,0.06)"; }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(250,247,243,0.35)", marginBottom: "0.5rem" }}>
                      Servicio de interés
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{
                        background: "rgba(250,247,243,0.06)",
                        border: "1px solid rgba(250,247,243,0.1)",
                        borderRadius: "12px",
                        padding: "0.875rem 1rem",
                        width: "100%",
                        color: form.service ? "white" : "rgba(250,247,243,0.35)",
                        fontSize: "0.9rem",
                        fontFamily: "inherit",
                        outline: "none",
                        cursor: "pointer",
                        appearance: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = "rgba(37,89,88,0.6)"}
                      onBlur={(e) => e.currentTarget.style.borderColor = "rgba(250,247,243,0.1)"}
                    >
                      <option value="" disabled style={{ background: "#1F2C43" }}>Seleccionar...</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: "#1F2C43", color: "white" }}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: "block", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(250,247,243,0.35)", marginBottom: "0.5rem" }}>
                    Descripción del caso
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu caso clínico, tipo de rehabilitación, materiales de preferencia o si necesitas consultoría..."
                    rows={4}
                    style={{
                      background: "rgba(250,247,243,0.06)",
                      border: "1px solid rgba(250,247,243,0.1)",
                      borderRadius: "12px",
                      padding: "0.875rem 1rem",
                      width: "100%",
                      color: "white",
                      fontSize: "0.9rem",
                      fontFamily: "inherit",
                      outline: "none",
                      resize: "none",
                      lineHeight: 1.65,
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(37,89,88,0.6)"; e.currentTarget.style.background = "rgba(250,247,243,0.08)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(250,247,243,0.1)"; e.currentTarget.style.background = "rgba(250,247,243,0.06)"; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: "var(--arandano)",
                    color: "white",
                    border: "none",
                    padding: "1.1rem 2rem",
                    borderRadius: "100px",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontFamily: "inherit",
                    transition: "transform 0.2s, box-shadow 0.2s, background 0.3s",
                    opacity: loading ? 0.7 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      const b = e.currentTarget as HTMLButtonElement;
                      b.style.transform = "translateY(-2px)";
                      b.style.boxShadow = "0 12px 32px rgba(37,89,88,0.4)";
                      b.style.background = "var(--arandano-light)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const b = e.currentTarget as HTMLButtonElement;
                    b.style.transform = "translateY(0)";
                    b.style.boxShadow = "none";
                    b.style.background = "var(--arandano)";
                  }}
                >
                  {loading ? "Enviando..." : <><span>Enviar solicitud</span><ArrowRight size={16} weight="bold" /></>}
                </button>

                <p style={{ fontSize: "0.7rem", color: "rgba(250,247,243,0.25)", lineHeight: 1.5, fontWeight: 300 }}>
                  Al enviar este formulario aceptas nuestra política de privacidad. Tu información es confidencial.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .form-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

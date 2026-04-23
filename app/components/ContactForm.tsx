"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ArrowRight, MapPin, Envelope, WhatsappLogo } from "@phosphor-icons/react";

const services = [
  "Alta Estética Cerámica",
  "Rehabilitación Bucodental",
  "Implantología Protésica",
  "Diseño de Sonrisa Digital",
  "Caso de alta especialización",
  "Consultoría y diagnóstico",
  "Otro servicio",
];

const fieldBase =
  "w-full bg-transparent border-b border-white/12 pb-3 pt-1 text-white/90 text-sm placeholder:text-white/20 outline-none transition-colors duration-200 focus:border-[#317573]/80 font-[inherit]";

const labelBase =
  "flex items-center gap-2 text-[0.58rem] font-bold tracking-[0.18em] uppercase mb-3 select-none";

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  return (
    <section
      ref={ref}
      id="form"
      className="relative overflow-hidden bg-[#070707] py-24 md:py-32"
    >
      {/* Ambient glow — brand color behind the card */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[700px] w-[700px] rounded-full bg-[#255958]/10 blur-[140px]" />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-[20%] h-[400px] w-[400px] rounded-full bg-[#F6C289]/4 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-5 md:px-10">

        {submitted ? (
          /* ── Success state ── */
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-md rounded-[28px] border border-white/8 bg-white/[0.04] backdrop-blur-2xl p-16 text-center flex flex-col items-center gap-6"
          >
            <CheckCircle size={52} color="#317573" weight="duotone" />
            <h3 className="text-2xl font-bold text-white tracking-tight">Solicitud enviada.</h3>
            <p className="text-sm text-white/40 leading-relaxed">
              Nuestro equipo te contactará en menos de 24 h. Estamos listos para acompañarte en cada caso.
            </p>
            <span className="text-[0.58rem] tracking-[0.2em] uppercase text-[#F6C289] font-bold">
              New Smile Dental Lab · Toluca, México
            </span>
          </motion.div>
        ) : (
          /* ── Main glass card ── */
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[28px] border border-white/8 bg-white/[0.04] backdrop-blur-2xl overflow-hidden"
            style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)" }}
          >
            <div className="grid md:grid-cols-[1fr_1.6fr]">

              {/* ── Left panel — brand info ── */}
              <div className="border-b md:border-b-0 md:border-r border-white/6 p-8 md:p-10 flex flex-col justify-between gap-10">
                <div>
                  {/* Badge */}
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#F6C289]/20 bg-[#F6C289]/8 px-3 py-1 text-[0.58rem] font-bold tracking-[0.18em] uppercase text-[#F6C289] mb-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F6C289]" />
                    Contacto
                  </span>

                  <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-4">
                    Tu aliado en{" "}
                    <span className="font-light text-[#317573]">cada diagnóstico</span>
                  </h2>

                  <p className="text-sm text-white/35 leading-relaxed font-light">
                    ¿Tienes un caso de alta complejidad? Escríbenos y te acompañamos desde el diagnóstico hasta el resultado final.
                  </p>
                </div>

                {/* Contact info — widget-style rows */}
                <div className="flex flex-col gap-3">
                  {[
                    { Icon: MapPin,       text: "Toluca, Estado de México" },
                    { Icon: Envelope,     text: "contacto@newsmilelab.mx" },
                    { Icon: WhatsappLogo, text: "+52 722 000 0000" },
                  ].map(({ Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#255958]/20">
                        <Icon size={15} color="#317573" weight="duotone" />
                      </div>
                      <span className="text-xs text-white/50 font-light">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right panel — form ── */}
              <form onSubmit={handleSubmit} className="p-8 md:p-10 flex flex-col gap-10">

                {/* Form header */}
                <div className="flex items-center justify-between border-b border-white/6 pb-6">
                  <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white/30">
                    Solicitar cotización
                  </span>
                  <span className="font-mono text-[0.6rem] text-white/15">NS — LAB</span>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className={labelBase}>
                      <span className="font-mono text-[#F6C289]/70">01</span>
                      <span className="text-white/25">Nombre completo *</span>
                    </label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="Dr. Juan Pérez" required className={fieldBase} />
                  </div>
                  <div>
                    <label className={labelBase}>
                      <span className="font-mono text-[#F6C289]/70">02</span>
                      <span className="text-white/25">Email *</span>
                    </label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="doctor@clinica.com" required className={fieldBase} />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className={labelBase}>
                      <span className="font-mono text-[#F6C289]/70">03</span>
                      <span className="text-white/25">WhatsApp</span>
                    </label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+52 722 000 0000" className={fieldBase} />
                  </div>
                  <div>
                    <label className={labelBase}>
                      <span className="font-mono text-[#F6C289]/70">04</span>
                      <span className="text-white/25">Servicio</span>
                    </label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className={`${fieldBase} cursor-pointer appearance-none`}
                      style={{ color: form.service ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.2)" }}
                    >
                      <option value="" disabled style={{ background: "#0d1117" }}>Seleccionar...</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: "#0d1117", color: "white" }}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3 — message */}
                <div>
                  <label className={labelBase}>
                    <span className="font-mono text-[#F6C289]/70">05</span>
                    <span className="text-white/25">Descripción del caso</span>
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                    placeholder="Tipo de rehabilitación, materiales, complejidad del caso..."
                    className={`${fieldBase} resize-none leading-relaxed`} />
                </div>

                {/* Submit row */}
                <div className="flex items-center justify-between gap-4 border-t border-white/6 pt-6">
                  <p className="text-[0.6rem] text-white/18 leading-relaxed max-w-[180px]">
                    Información confidencial. Política de privacidad aplicable.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex shrink-0 items-center gap-3 rounded-xl bg-[#255958] px-7 py-3.5 text-xs font-bold tracking-[0.1em] uppercase text-white transition-all duration-200 hover:bg-[#317573] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                    style={{ boxShadow: "0 0 24px rgba(37,89,88,0.3)" }}
                  >
                    {loading ? "Enviando..." : (
                      <>
                        <span>Enviar</span>
                        <ArrowRight size={14} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

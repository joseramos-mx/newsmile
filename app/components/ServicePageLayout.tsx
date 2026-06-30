import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import { WHATSAPP_URL } from "../lib/site";

const CaseReadiness = dynamic(() => import("./CaseReadiness"));
const FloatingButtons = dynamic(() => import("./FloatingButtons"));
const ContactForm = dynamic(() => import("./ContactForm"));
const Footer = dynamic(() => import("./Footer"));

export type FAQ = { q: string; a: string };

export type Section =
  | { kind: "prose"; title: string; body: React.ReactNode }
  | { kind: "list"; title: string; intro?: string; items: { title: string; body: string }[] };

export default function ServicePageLayout({
  eyebrow,
  h1,
  intro,
  sections,
  faqs,
}: {
  eyebrow: string;
  h1: React.ReactNode;
  intro: string;
  sections: Section[];
  faqs: FAQ[];
}) {
  return (
    <>
      <Navbar />
      <CaseReadiness />
      <FloatingButtons />

      <main>
        {/* ── Hero ── */}
        <section
          style={{
            background: "#000",
            color: "white",
            paddingTop: "clamp(7rem, 14vw, 11rem)",
            paddingBottom: "clamp(3rem, 6vw, 5rem)",
            paddingLeft: "clamp(1.25rem, 4vw, 3rem)",
            paddingRight: "clamp(1.25rem, 4vw, 3rem)",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            {/* Breadcrumb */}
            <nav
              aria-label="Migas de pan"
              style={{
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.5rem",
                letterSpacing: "0.02em",
              }}
            >
              <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
                Inicio
              </Link>{" "}
              <span style={{ opacity: 0.4 }}>/</span>{" "}
              <Link href="/#servicios" style={{ color: "inherit", textDecoration: "none" }}>
                Servicios
              </Link>
            </nav>

            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "18px",
                  height: "1px",
                  background: "#317573",
                }}
              />
              <span
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {eyebrow}
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.8rem)",
                fontWeight: 400,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                margin: "0 0 1.5rem",
                color: "white",
              }}
            >
              {h1}
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                lineHeight: 1.6,
                fontWeight: 300,
                color: "rgba(255,255,255,0.7)",
                maxWidth: "62ch",
                margin: 0,
                marginBottom: "2rem",
              }}
            >
              {intro}
            </p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "white",
                  color: "#0a0a0a",
                  padding: "0.7rem 1.4rem",
                  borderRadius: "8px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Cotizar un caso
              </a>
              <Link
                href="/#form"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  padding: "0.7rem 1.4rem",
                  borderRadius: "8px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Enviar mi caso
              </Link>
            </div>
          </div>
        </section>

        {/* ── Content sections ── */}
        <section
          style={{
            background: "var(--ivory, #FAF7F3)",
            paddingTop: "clamp(3rem, 6vw, 5rem)",
            paddingBottom: "clamp(3rem, 6vw, 5rem)",
            paddingLeft: "clamp(1.25rem, 4vw, 3rem)",
            paddingRight: "clamp(1.25rem, 4vw, 3rem)",
          }}
        >
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>
            {sections.map((s, i) => (
              <article
                key={i}
                style={{
                  marginBottom: "clamp(2.5rem, 4vw, 3.5rem)",
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.025em",
                    color: "var(--near-black, #1F2C43)",
                    lineHeight: 1.15,
                    margin: "0 0 1.25rem",
                  }}
                >
                  {s.title}
                </h2>

                {s.kind === "prose" && (
                  <div
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      color: "var(--mid-gray, #555864)",
                      fontWeight: 300,
                    }}
                  >
                    {s.body}
                  </div>
                )}

                {s.kind === "list" && (
                  <>
                    {s.intro && (
                      <p
                        style={{
                          fontSize: "1rem",
                          lineHeight: 1.7,
                          color: "var(--mid-gray, #555864)",
                          fontWeight: 300,
                          margin: "0 0 1.75rem",
                        }}
                      >
                        {s.intro}
                      </p>
                    )}
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "grid",
                        gap: "1.25rem",
                      }}
                    >
                      {s.items.map((it, k) => (
                        <li
                          key={k}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "2rem 1fr",
                            gap: "1rem",
                            alignItems: "start",
                            padding: "1.1rem 1.25rem",
                            border: "1px solid rgba(31,44,67,0.08)",
                            borderRadius: "10px",
                            background: "white",
                          }}
                        >
                          <span
                            aria-hidden="true"
                            style={{
                              fontFamily: "ui-monospace, monospace",
                              fontSize: "0.75rem",
                              color: "#255958",
                              paddingTop: "0.2rem",
                            }}
                          >
                            {String(k + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3
                              style={{
                                fontSize: "1rem",
                                fontWeight: 600,
                                color: "var(--near-black, #1F2C43)",
                                margin: "0 0 0.3rem",
                                lineHeight: 1.3,
                              }}
                            >
                              {it.title}
                            </h3>
                            <p
                              style={{
                                fontSize: "0.9rem",
                                color: "var(--mid-gray, #555864)",
                                lineHeight: 1.6,
                                margin: 0,
                                fontWeight: 300,
                              }}
                            >
                              {it.body}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </article>
            ))}

            {/* ── FAQ ── */}
            {faqs.length > 0 && (
              <article style={{ marginTop: "clamp(3rem, 5vw, 4rem)" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.025em",
                    color: "var(--near-black, #1F2C43)",
                    lineHeight: 1.15,
                    margin: "0 0 1.75rem",
                  }}
                >
                  Preguntas frecuentes
                </h2>

                <div
                  style={{
                    borderTop: "1px solid rgba(31,44,67,0.1)",
                  }}
                >
                  {faqs.map((f, i) => (
                    <details
                      key={i}
                      style={{
                        borderBottom: "1px solid rgba(31,44,67,0.1)",
                        padding: "1.1rem 0",
                      }}
                    >
                      <summary
                        style={{
                          cursor: "pointer",
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "var(--near-black, #1F2C43)",
                          lineHeight: 1.35,
                          listStyle: "none",
                        }}
                      >
                        {f.q}
                      </summary>
                      <p
                        style={{
                          fontSize: "0.92rem",
                          color: "var(--mid-gray, #555864)",
                          lineHeight: 1.65,
                          fontWeight: 300,
                          margin: "0.75rem 0 0",
                        }}
                      >
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </article>
            )}
          </div>
        </section>
      </main>

      <ContactForm />
      <Footer />
    </>
  );
}

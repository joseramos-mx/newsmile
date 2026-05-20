import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal · New Smile Dental Lab",
  description: "Política de Privacidad y Términos y Condiciones de New Smile Dental Lab.",
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: "3.5rem" }}>
      <h2 style={{ fontSize: "1.35rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1f2c43", marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(31,44,67,0.1)" }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
        {children}
      </div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "rgba(31,44,67,0.72)", fontWeight: 300 }}>
      {children}
    </p>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#1f2c43", marginTop: "0.5rem" }}>
      {children}
    </h3>
  );
}

export default function LegalPage() {
  const updated = "20 de mayo de 2026";

  return (
    <div style={{ background: "#FAF7F3", minHeight: "100vh" }}>

      {/* Top bar */}
      <div style={{ background: "#0f5355", padding: "1rem clamp(1.5rem,4vw,3rem)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}>
            ← Volver al inicio
          </Link>
          <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>New Smile Dental Lab · Aviso Legal</span>
        </div>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem clamp(1.5rem,4vw,3rem) 6rem" }}>

        {/* Page header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(37,89,88,0.6)", marginBottom: "0.75rem" }}>
            Aviso Legal
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#1f2c43", lineHeight: 1.1, marginBottom: "1rem" }}>
            Política de Privacidad &amp;<br />Términos y Condiciones
          </h1>
          <p style={{ fontSize: "0.85rem", color: "rgba(31,44,67,0.45)", fontWeight: 300 }}>
            Última actualización: {updated}
          </p>
        </div>

        {/* Index */}
        <nav style={{ background: "rgba(37,89,88,0.05)", border: "1px solid rgba(37,89,88,0.12)", borderRadius: "12px", padding: "1.5rem 2rem", marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(37,89,88,0.6)", marginBottom: "0.9rem" }}>Contenido</p>
          <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem", padding: 0, margin: 0 }}>
            {[
              ["#privacidad", "Política de Privacidad"],
              ["#terminos", "Términos y Condiciones"],
              ["#marcas", "Marcas y Logotipos de Terceros"],
              ["#contacto-legal", "Contacto Legal"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} style={{ fontSize: "0.88rem", color: "#255958", textDecoration: "none", fontWeight: 400 }}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ──────────────────────────────────────
            POLÍTICA DE PRIVACIDAD
        ────────────────────────────────────── */}
        <Section id="privacidad" title="Política de Privacidad">
          <P>
            New Smile Dental Lab ("nosotros", "nuestro" o "la empresa"), con domicilio en Sebastián Lerdo de Tejada #686, Toluca, México, C.P. 50040, es responsable del tratamiento de los datos personales que nos proporcione a través de este sitio web (<strong>newsmileld.vercel.app</strong>) de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.
          </P>

          <H3>Datos que recopilamos</H3>
          <P>
            Podemos recopilar los siguientes datos personales: nombre completo, correo electrónico, número de teléfono, nombre del consultorio o clínica, y cualquier información adicional que usted nos proporcione voluntariamente a través del formulario de contacto, formulario de envío de casos o suscripción al boletín.
          </P>

          <H3>Finalidad del tratamiento</H3>
          <P>
            Los datos recabados se utilizan exclusivamente para: (a) responder consultas y cotizaciones de servicios de laboratorio dental; (b) gestionar el seguimiento de casos clínicos enviados; (c) enviar comunicaciones comerciales sobre nuestros servicios, técnicas y materiales, únicamente si usted otorgó su consentimiento; y (d) cumplir con obligaciones legales aplicables.
          </P>

          <H3>Transferencia de datos</H3>
          <P>
            New Smile Dental Lab no vende, renta ni transfiere sus datos personales a terceros con fines comerciales, salvo en los casos previstos por la ley o cuando sea estrictamente necesario para la prestación del servicio contratado.
          </P>

          <H3>Derechos ARCO</H3>
          <P>
            Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercerlos, envíe una solicitud a <strong>ns.dental.laboratorio@gmail.com</strong> con el asunto "Derechos ARCO". Responderemos en un plazo máximo de 20 días hábiles.
          </P>

          <H3>Cookies y tecnologías de seguimiento</H3>
          <P>
            Este sitio web puede utilizar cookies de sesión para mejorar la experiencia de navegación. No utilizamos cookies de seguimiento publicitario ni compartimos datos de navegación con redes publicitarias de terceros.
          </P>

          <H3>Retención de datos</H3>
          <P>
            Conservamos sus datos personales durante el tiempo necesario para cumplir con las finalidades descritas y las obligaciones legales aplicables, o hasta que usted ejerza su derecho de cancelación.
          </P>

          <H3>Cambios a esta política</H3>
          <P>
            Nos reservamos el derecho de actualizar esta política en cualquier momento. Las modificaciones serán publicadas en esta misma página con la fecha de actualización correspondiente.
          </P>
        </Section>

        {/* ──────────────────────────────────────
            TÉRMINOS Y CONDICIONES
        ────────────────────────────────────── */}
        <Section id="terminos" title="Términos y Condiciones">
          <P>
            Al utilizar este sitio web o contratar los servicios de New Smile Dental Lab, usted acepta los presentes términos y condiciones en su totalidad. Si no está de acuerdo con alguna de las condiciones aquí descritas, le pedimos que se abstenga de utilizar nuestros servicios.
          </P>

          <H3>Descripción del servicio</H3>
          <P>
            New Smile Dental Lab es un laboratorio dental especializado en prótesis fija, cerámica de alta estética, implantología protésica y diseño de sonrisa digital, con sede en Toluca, Estado de México. Nuestros servicios son prestados exclusivamente a profesionales de la odontología debidamente acreditados.
          </P>

          <H3>Anticipo y forma de pago</H3>
          <P>
            Para iniciar cualquier caso clínico, se requiere un anticipo del 50% del costo total acordado. El saldo restante deberá cubrirse a la entrega del trabajo terminado. Nos reservamos el derecho de no entregar el trabajo mientras exista saldo pendiente.
          </P>

          <H3>Garantía</H3>
          <P>
            New Smile Dental Lab ofrece una garantía de 2 (dos) años por defectos de fabricación sobre todos los trabajos protésicos realizados, contados a partir de la fecha de entrega al profesional. Esta garantía no cubre daños derivados de mal uso, accidentes, falta de mantenimiento, o problemas oclusales del paciente que no hayan sido comunicados al laboratorio al momento del registro del caso.
          </P>

          <H3>Responsabilidad clínica</H3>
          <P>
            New Smile Dental Lab actúa como proveedor de servicios técnicos de laboratorio. La responsabilidad clínica, diagnóstica y de tratamiento recae exclusivamente en el profesional odontólogo que solicita el servicio. El laboratorio no asume responsabilidad alguna por decisiones clínicas, indicaciones de tratamiento o resultados estéticos que dependan del diagnóstico del profesional.
          </P>

          <H3>Propiedad intelectual</H3>
          <P>
            Todos los textos, imágenes, diseños, logotipos propios y demás contenidos publicados en este sitio web son propiedad exclusiva de New Smile Dental Lab o de sus respectivos autores, y están protegidos por la legislación mexicana e internacional en materia de derechos de autor y propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización expresa y por escrito.
          </P>

          <H3>Limitación de responsabilidad</H3>
          <P>
            New Smile Dental Lab no será responsable por daños indirectos, incidentales o consecuentes derivados del uso de este sitio web o de la información contenida en él. El sitio se ofrece "tal cual" y no garantizamos que esté libre de errores o interrupciones.
          </P>

          <H3>Legislación aplicable</H3>
          <P>
            Los presentes términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia derivada de su interpretación o cumplimiento será sometida a la jurisdicción de los tribunales competentes de la ciudad de Toluca, Estado de México, renunciando las partes a cualquier otro fuero que pudiera corresponderles.
          </P>
        </Section>

        {/* ──────────────────────────────────────
            MARCAS Y LOGOTIPOS DE TERCEROS
        ────────────────────────────────────── */}
        <Section id="marcas" title="Marcas y Logotipos de Terceros">
          <P>
            Los logotipos y marcas comerciales que aparecen en la sección de aliados y proveedores de este sitio web — incluyendo, de manera enunciativa mas no limitativa, <strong>Kulzer, HeraCeram, Ivoclar Vivadent, Dentsply Sirona, Anycubic</strong> y <strong>Elegoo</strong> — son propiedad exclusiva de sus respectivos titulares.
          </P>
          <P>
            Su aparición en este sitio tiene como única finalidad identificar los materiales y marcas que New Smile Dental Lab utiliza en sus procesos de fabricación, reflejando una relación de uso y preferencia técnica. <strong>New Smile Dental Lab no reclama ningún derecho de propiedad sobre dichas marcas</strong>, ni tiene ningún vínculo corporativo, de distribución exclusiva o de representación oficial con las empresas titulares, salvo que se indique expresamente lo contrario.
          </P>
          <P>
            Si usted es titular de alguna de las marcas aquí mencionadas y considera que su uso no se ajusta a los términos de su política de marca, le pedimos ponerse en contacto con nosotros en <strong>ns.dental.laboratorio@gmail.com</strong> para atender su solicitud a la brevedad.
          </P>
        </Section>

        {/* ──────────────────────────────────────
            CONTACTO LEGAL
        ────────────────────────────────────── */}
        <Section id="contacto-legal" title="Contacto Legal">
          <P>
            Para cualquier consulta relacionada con esta política de privacidad, términos y condiciones, derechos ARCO o uso de marcas de terceros, puede contactarnos a través de los siguientes medios:
          </P>
          <div style={{ background: "rgba(37,89,88,0.06)", border: "1px solid rgba(37,89,88,0.14)", borderRadius: "12px", padding: "1.5rem 1.75rem" }}>
            <p style={{ fontSize: "0.88rem", color: "#1f2c43", fontWeight: 600, marginBottom: "0.5rem" }}>New Smile Dental Lab</p>
            <p style={{ fontSize: "0.85rem", color: "rgba(31,44,67,0.6)", lineHeight: 1.75, fontWeight: 300 }}>
              Sebastián Lerdo de Tejada #686, Toluca, México, C.P. 50040<br />
              <a href="mailto:ns.dental.laboratorio@gmail.com" style={{ color: "#255958", textDecoration: "none" }}>ns.dental.laboratorio@gmail.com</a><br />
              <a href="https://wa.me/527225123187" style={{ color: "#255958", textDecoration: "none" }}>+52 722 512 3187</a>
            </p>
          </div>
        </Section>

      </div>
    </div>
  );
}

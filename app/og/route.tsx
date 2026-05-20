import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #0f5355 0%, #1a3d2e 60%, #0a2a1e 100%)",
          padding: "60px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            position: "absolute",
            top: "48px",
            right: "72px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "8px",
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", letterSpacing: "0.1em" }}>
            TOLUCA · MÉXICO
          </span>
        </div>

        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <div style={{ width: "24px", height: "1px", background: "rgba(255,255,255,0.4)" }} />
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Laboratorio Dental de Élite
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: "0 0 24px",
          }}
        >
          New Smile
          <br />
          <span style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>Dental Lab</span>
        </h1>

        {/* Services row */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "36px" }}>
          {["Coronas · Puentes", "Implantología Protésica", "Cerámica High End"].map((s) => (
            <div
              key={s}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "100px",
                padding: "8px 20px",
                color: "rgba(255,255,255,0.8)",
                fontSize: "16px",
                fontWeight: 400,
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* URL */}
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "15px", letterSpacing: "0.04em" }}>
          newsmileld.vercel.app
        </span>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

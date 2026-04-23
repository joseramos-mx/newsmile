"use client";


export default function Navbar() {
  return (
    <div style={{ padding: "1.5rem 4rem 0" }} >
      <nav
        className="liquid-glass backdrop-blur-lg backdrop-saturate-150"
        style={{
          borderRadius: "0.75rem",
          padding: "0.5rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
       <a href="/" className="text-white invert">
        <img src="logo.svg" alt="" className="h-5"/>
       </a>

        <div style={{ display: "flex", gap: "2rem", fontSize: "0.875rem" }} >
          {["Story", "Investing", "Building", "Advisory"].map((link) => (
            <a
              key={link}
              href="#"
              style={{ color: "#fff", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d1d5db")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            >
              {link}
            </a>
          ))}
        </div>

        <button
          style={{
            background: "#fff",
            color: "#000",
            padding: "0.5rem 1.5rem",
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#f3f4f6")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
        >
          Start a Chat
        </button>
      </nav>
    </div>
  );
}

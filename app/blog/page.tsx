import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { postsQuery } from "../../sanity/lib/queries";
import { urlFor } from "../../sanity/lib/image";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog · Artículos de Laboratorio Dental",
  description:
    "Técnicas, materiales y casos clínicos de alta especialización en cerámica dental, prótesis e implantología. Por New Smile Dental Lab, Toluca.",
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category?: string;
  excerpt?: string;
  mainImage?: { asset: unknown; alt?: string; hotspot?: unknown };
};

const categoryLabel: Record<string, string> = {
  tecnica: "Técnica",
  materiales: "Materiales",
  casos: "Casos Clínicos",
  noticias: "Noticias",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery).catch(() => []);

  return (
    <div style={{ background: "#faf9f7", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ background: "#0f5355", padding: "5rem clamp(1.5rem,5vw,4rem) 4rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(246,194,137,0.7)", marginBottom: "1rem" }}>
            New Smile Dental Lab
          </p>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700, color: "white", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1rem" }}>
            Blog y recursos
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", fontWeight: 300, maxWidth: "520px", lineHeight: 1.6 }}>
            Técnicas, materiales y casos clínicos de alta especialización para el dentista moderno.
          </p>
        </div>
      </div>

      {/* Posts grid */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem clamp(1.5rem,5vw,4rem)" }}>
        {posts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "6rem 0" }}>
            <p style={{ color: "#7A7D78", fontSize: "1rem" }}>
              Próximamente publicaremos el primer artículo.
            </p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #E0DDD7",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(31,44,67,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Image */}
                  <div style={{ position: "relative", height: "200px", background: "#E0DDD7" }}>
                    {post.mainImage?.asset ? (
                      <Image
                        src={urlFor(post.mainImage).width(640).height(400).url()}
                        alt={post.mainImage.alt ?? post.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 640px) 100vw, 380px"
                      />
                    ) : (
                      <div style={{ height: "100%", background: "linear-gradient(135deg,#255958,#0f5355)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "2rem" }}>NS</span>
                      </div>
                    )}
                    {post.category && (
                      <span style={{
                        position: "absolute", top: "1rem", left: "1rem",
                        background: "#255958", color: "white",
                        fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em",
                        textTransform: "uppercase", padding: "0.3rem 0.7rem", borderRadius: "100px",
                      }}>
                        {categoryLabel[post.category] ?? post.category}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div style={{ padding: "1.5rem" }}>
                    {post.publishedAt && (
                      <p style={{ fontSize: "0.7rem", color: "#7A7D78", marginBottom: "0.5rem" }}>
                        {formatDate(post.publishedAt)}
                      </p>
                    )}
                    <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1F2C43", letterSpacing: "-0.02em", lineHeight: 1.35, marginBottom: "0.65rem" }}>
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p style={{ fontSize: "0.85rem", color: "#7A7D78", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {post.excerpt}
                      </p>
                    )}
                    <span style={{ display: "inline-block", marginTop: "1rem", fontSize: "0.78rem", fontWeight: 600, color: "#255958", letterSpacing: "0.02em" }}>
                      Leer artículo →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

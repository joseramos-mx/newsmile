import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import { postBySlugQuery, postSlugsQuery } from "../../../sanity/lib/queries";
import { urlFor } from "../../../sanity/lib/image";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

type PostImage = { asset: SanityImageSource; alt?: string; hotspot?: unknown };

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category?: string;
  excerpt?: string;
  mainImage?: PostImage;
  body?: PortableTextBlock[];
};

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(postSlugsQuery).catch(() => []);
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(postBySlugQuery, { slug }).catch(() => null);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: post.mainImage?.asset
      ? { images: [{ url: urlFor(post.mainImage).width(1200).height(630).url() }] }
      : undefined,
  };
}

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

type ImageValue = { asset: SanityImageSource; alt?: string; caption?: string };

const portableComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1F2C43", letterSpacing: "-0.025em", margin: "2.5rem 0 1rem" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "#1F2C43", margin: "2rem 0 0.75rem" }}>
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p style={{ fontSize: "1.05rem", color: "#3d4a5c", lineHeight: 1.75, margin: "0 0 1.25rem" }}>
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote style={{ borderLeft: "3px solid #255958", paddingLeft: "1.25rem", margin: "1.5rem 0", color: "#7A7D78", fontStyle: "italic" }}>
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }: { value: ImageValue }) => (
      <figure style={{ margin: "2rem 0" }}>
        <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", aspectRatio: "16/9", background: "#E0DDD7" }}>
          <Image
            src={urlFor(value.asset).width(900).height(506).url()}
            alt={value.alt ?? ""}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 740px"
          />
        </div>
        {value.caption && (
          <figcaption style={{ textAlign: "center", fontSize: "0.78rem", color: "#7A7D78", marginTop: "0.5rem" }}>
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(postBySlugQuery, { slug });
  if (!post) notFound();

  return (
    <div style={{ background: "#faf9f7", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{ background: "#0f5355", padding: "4rem clamp(1.5rem,5vw,4rem) 3rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Link
            href="/blog"
            style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem", marginBottom: "2rem" }}
          >
            ← Blog
          </Link>
          {post.category && (
            <span style={{ display: "block", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F6C289", marginBottom: "1rem" }}>
              {categoryLabel[post.category] ?? post.category}
            </span>
          )}
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "white", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "1rem" }}>
            {post.title}
          </h1>
          {post.publishedAt && (
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
              {formatDate(post.publishedAt)}
            </p>
          )}
        </div>
      </div>

      {/* Main image */}
      {post.mainImage?.asset && (
        <div style={{ maxWidth: "900px", margin: "-2rem auto 0", padding: "0 clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
            <Image
              src={urlFor(post.mainImage.asset).width(900).height(506).url()}
              alt={post.mainImage.alt ?? post.title}
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
        </div>
      )}

      {/* Body */}
      <article style={{ maxWidth: "740px", margin: "0 auto", padding: "3rem clamp(1.5rem,5vw,4rem) 5rem" }}>
        {post.excerpt && (
          <p style={{ fontSize: "1.15rem", color: "#7A7D78", lineHeight: 1.65, borderLeft: "3px solid #F6C289", paddingLeft: "1.25rem", marginBottom: "2.5rem", fontWeight: 300 }}>
            {post.excerpt}
          </p>
        )}
        {post.body && (
          <PortableText value={post.body} components={portableComponents} />
        )}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #E0DDD7" }}>
          <Link href="/blog" style={{ fontSize: "0.85rem", fontWeight: 600, color: "#255958", textDecoration: "none" }}>
            ← Volver al blog
          </Link>
        </div>
      </article>
    </div>
  );
}

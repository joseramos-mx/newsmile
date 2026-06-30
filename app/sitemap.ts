import type { MetadataRoute } from "next";
import { client } from "../sanity/lib/client";
import { postSlugsQuery } from "../sanity/lib/queries";
import { SITE_URL } from "./lib/site";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs: { slug: string }[] = await client
    .fetch(postSlugsQuery)
    .catch(() => []);

  const posts: MetadataRoute.Sitemap = slugs.map(({ slug }) => ({
    url: `${SITE_URL}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // ── High-intent service landing pages ──
    {
      url: `${SITE_URL}/corona-disilicato-litio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/zirconia-dental`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    // ── Content ──
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/legal`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...posts,
  ];
}

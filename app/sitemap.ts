import type { MetadataRoute } from "next";
import { client } from "../sanity/lib/client";
import { postSlugsQuery } from "../sanity/lib/queries";

const SITE_URL = "https://newsmileld.vercel.app";

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
    { url: SITE_URL,              lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/blog`,    lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${SITE_URL}/legal`,   lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    ...posts,
  ];
}

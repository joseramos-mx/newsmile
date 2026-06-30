import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [32, 64, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
  },
  compress: true,
  allowedDevOrigins: ["192.168.68.57"],

  // ── 301 the Vercel preview/production subdomain to the canonical apex ──
  // Prevents Google from indexing newsmileld.vercel.app even if discovered.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "newsmileld.vercel.app" }],
        destination: "https://newsmileld.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

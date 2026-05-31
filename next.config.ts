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
};

export default nextConfig;

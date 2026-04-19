import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 100],
  },
  // Compress responses
  compress: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
  compress: true,
  allowedDevOrigins: ["192.168.68.57"],
};

export default nextConfig;

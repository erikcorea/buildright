import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 requires an explicit allowlist for any next/image
    // "quality" value other than the default 75; the hero and project
    // photos use 90.
    qualities: [75, 90],
  },
};

export default nextConfig;

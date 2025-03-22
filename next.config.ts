import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  images: {
    domains: ['api.microlink.io', 'assets.aceternity.com', 'images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
};

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.melikenagac.com',
      },
      {
        protocol: 'https',
        hostname: 'melikenagac.com',
      },
    ],
  },
};

export default nextConfig;

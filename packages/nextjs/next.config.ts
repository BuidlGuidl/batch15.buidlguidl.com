import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  // Ensure file system access works in production for the builders API route
  outputFileTracingIncludes: {
    "/api/builders": ["./app/builders/**/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "euc.li",
      },
      {
        protocol: "https",
        hostname: "**.ipfs.dweb.link",
      },
      {
        protocol: "https",
        hostname: "**.ipfs.cf-ipfs.com",
      },
      {
        protocol: "https",
        hostname: "buidlguidl.com",
      },
    ],
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

const isIpfs = process.env.NEXT_PUBLIC_IPFS_BUILD === "true";

if (isIpfs) {
  nextConfig.output = "export";
  nextConfig.trailingSlash = true;
  nextConfig.images = {
    unoptimized: true,
  };
}

module.exports = nextConfig;

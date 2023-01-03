/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/revamp",
  assetPrefix: "/revamp",
  images: {
    formats: ["image/webp"],
    unoptimized: true,
    path: "",
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    loader: "akamai",
    path: "",
  },
  images: {
    domains: ["via.placeholder.com"],
  },
};

module.exports = nextConfig;

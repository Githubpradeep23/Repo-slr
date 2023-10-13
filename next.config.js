/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  output: "standalone",
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", "localhost:3000", "https://githubpradeep23.github.io/web-slr/"],
  },
};

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

swcMinify: true,
images: {
unoptimized: true,
dangerouslyAllowSVG: true,

}
  trailingSlash: true,
reactStrictMode: true,
};

module.exports = nextConfig

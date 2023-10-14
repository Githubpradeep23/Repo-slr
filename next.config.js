/* @type {import ('next).NextConfig) */
module .exports = {
reactStrictMode: false, webpack5: true,
webpack: (config) -> R
config.resolve.fallback = { fs: false }:
return config;
},
};

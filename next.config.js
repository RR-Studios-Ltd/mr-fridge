/** @type {import('next').NextConfig} */

// Served from https://www.rr-studios.co/mr-fridge (GitHub Pages project site)
const basePath = '/mr-fridge';

const nextConfig = {
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

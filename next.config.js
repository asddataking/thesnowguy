/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@next/font']
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig

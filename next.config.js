import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@next/font']
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig

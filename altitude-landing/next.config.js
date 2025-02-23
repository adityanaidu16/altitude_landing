/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/altitude-landing',
    images: {
      unoptimized: true,
    },
    assetPrefix: '/altitude-landing',
  }
  
  module.exports = nextConfig
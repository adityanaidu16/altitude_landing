/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/altitude-landing',
    images: {
      unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/altitude-landing' : '',
  }
  
  module.exports = nextConfig
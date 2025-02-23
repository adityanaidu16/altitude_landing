/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // Only add basePath and assetPrefix when deploying to GitHub Pages
    ...(process.env.GITHUB_ACTIONS && {
      basePath: '/altitude-landing',
      assetPrefix: '/altitude-landing',
    })
  }
  
  module.exports = nextConfig
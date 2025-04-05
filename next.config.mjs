/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // Ensure environment variables are handled correctly
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  // Production settings
  ...(process.env.NODE_ENV === 'production' ? {
    // Base URL for static assets
    assetPrefix: 'https://storage.googleapis.com/sindbad-portfolio-frontend-bucket',
    // Ensure trailing slashes
    trailingSlash: true,
    // Use static HTML export
    distDir: 'out',
    // Disable image optimization
    images: {
      unoptimized: true
    }
  } : {})
};

export default nextConfig; 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['storage.googleapis.com']
  },
  // Ensure environment variables are handled correctly
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  // Production settings
  ...(process.env.NODE_ENV === 'production' ? {
    // Base path for all routes
    basePath: '',
    // Ensure trailing slashes
    trailingSlash: true,
    // Disable image optimization
    images: {
      unoptimized: true,
      domains: ['storage.googleapis.com']
    }
  } : {
    // Development settings
    images: {
      unoptimized: true
    }
  })
};

export default nextConfig; 
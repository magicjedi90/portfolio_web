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
  // Add basePath and assetPrefix for Cloud Storage only in production
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/sindbad-portfolio-frontend-bucket',
    assetPrefix: 'https://storage.googleapis.com/sindbad-portfolio-frontend-bucket',
    trailingSlash: true
  } : {})
};

export default nextConfig; 
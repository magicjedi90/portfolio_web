/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // Ensure environment variables are handled correctly
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  // Add debugging for env variables
  webpack: (config) => {
    console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);
    return config;
  },
  // Remove the production-specific settings and use a simpler approach
  trailingSlash: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    domains: ['storage.googleapis.com']
  }
};

export default nextConfig; 
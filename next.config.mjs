/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  // Ensure environment variables are handled correctly
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  // Add basePath and assetPrefix for Cloud Storage
  basePath: '',
  assetPrefix: 'https://storage.googleapis.com/sindbad-portfolio-frontend-bucket',
  // Ensure trailing slashes for static export
  trailingSlash: true
};

export default nextConfig; 
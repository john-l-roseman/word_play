/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone', // Added explicit output mode for better Vercel deployment
  images: {
    unoptimized: true,
  },
}

export default nextConfig

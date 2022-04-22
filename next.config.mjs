/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com', 'scontent-tpe1-1.cdninstagram.com'],
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
}

export default nextConfig

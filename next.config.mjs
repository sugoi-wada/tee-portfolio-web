/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com'],
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
}

export default nextConfig

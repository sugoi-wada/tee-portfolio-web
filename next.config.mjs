import withBundleAnalyzer from '@next/bundle-analyzer'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  onDemandEntries: {
    websocketPort: 3007,
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  i18n: {
    locales: ['en', 'ja', 'tw', 'zh-TW'],
    defaultLocale: 'en',
  },
  redirects: async () => [
    {
      source: '/zh-TW',
      destination: '/tw',
      permanent: true,
      locale: false,
    },
  ],
  experimental: {
    scrollRestoration: true,
  },
}

export default bundleAnalyzer(nextConfig)

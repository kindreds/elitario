const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com']
  },
  webpack: (config) => {
    config.plugins.push(new DuplicatePackageCheckerPlugin())
    return config
  }
})

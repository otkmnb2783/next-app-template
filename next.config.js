/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  webpack: (configuration) => {
    configuration.resolve.alias['@'] = path.join(__dirname, './src')
    return configuration
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: ['192.168.1.43:3000', '192.168.1.43:3001', 'localhost:3000', 'localhost:3001'],
  },
}

module.exports = nextConfig

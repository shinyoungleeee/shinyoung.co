/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_BASE_URL}/api/:path*`,
      },
    ]
  },
}

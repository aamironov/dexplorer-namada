/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NAMADA_RPC_URL: process.env.NAMADA_RPC_URL,
  },
}

module.exports = nextConfig

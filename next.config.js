/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.si.com"],
    remotePatterns: [
      {
        // only secure sourses add in this line in production
        protocol: "https",
        hostname: "**"
      },
      {
        // only secure sourses add in this line in production
        protocol: "http",
        hostname: "**"
      },
    ]
  }
}

module.exports = nextConfig

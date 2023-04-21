/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api",
        destination: "http://localhost:8080",
      },
    ];
  },
};

module.exports = nextConfig;

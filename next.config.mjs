/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/bitcion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

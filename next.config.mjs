/** @type {import('next').NextConfig} */
const nextConfig = {
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

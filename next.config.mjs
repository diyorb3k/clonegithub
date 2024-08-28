/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**", // Barcha yo'llarga ruxsat berish uchun
      },
    ],
  },
};

export default nextConfig;

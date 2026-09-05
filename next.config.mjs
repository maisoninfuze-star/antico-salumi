/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Redirections des anciennes routes.
  async redirects() {
    return [
      { source: "/accueil", destination: "/", permanent: true },
      { source: "/home", destination: "/en", permanent: true },
    ];
  },
};

export default nextConfig;

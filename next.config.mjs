/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Préserver l'équité SEO de Piccolo : rediriger les anciennes routes vers Antico Salumi.
  async redirects() {
    return [
      { source: "/piccolo", destination: "/", permanent: true },
      { source: "/accueil", destination: "/", permanent: true },
      { source: "/home", destination: "/en", permanent: true },
      { source: "/menu-piccolo", destination: "/menu", permanent: true },
      { source: "/piccolo-menu", destination: "/menu", permanent: true },
    ];
  },
};

export default nextConfig;

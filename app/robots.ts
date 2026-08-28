import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Démo pré-lancement : bloquer l'indexation. À la mise en ligne, autoriser "/".
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}

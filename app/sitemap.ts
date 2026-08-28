import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { allPaths } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const entries: MetadataRoute.Sitemap = [];
  for (const p of allPaths()) {
    const priority = p.key === "home" ? 1 : 0.8;
    entries.push({ url: `${base}${p.fr}`, changeFrequency: "weekly", priority,
      alternates: { languages: { "fr-CA": `${base}${p.fr}`, "en-CA": `${base}${p.en}` } } });
    entries.push({ url: `${base}${p.en}`, changeFrequency: "weekly", priority: priority - 0.1,
      alternates: { languages: { "fr-CA": `${base}${p.fr}`, "en-CA": `${base}${p.en}` } } });
  }
  return entries;
}

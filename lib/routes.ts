import type { Locale } from "@/data/site";

// Carte des pages du site — libellés + slugs localisés par langue.
// FR à la racine (/…), EN sous /en/…
export const PAGES = [
  { key: "home",     fr: { label: "Accueil",        slug: "" },         en: { label: "Home",     slug: "" } },
  { key: "story",    fr: { label: "Notre histoire", slug: "histoire" }, en: { label: "Our story", slug: "our-story" } },
  { key: "menu",     fr: { label: "Menu",           slug: "menu" },     en: { label: "Menu",     slug: "menu" } },
  { key: "catering", fr: { label: "Traiteur",       slug: "traiteur" }, en: { label: "Catering", slug: "catering" } },
  { key: "gallery",  fr: { label: "Galerie",        slug: "galerie" },  en: { label: "Gallery",  slug: "gallery" } },
  { key: "contact",  fr: { label: "Contact",        slug: "contact" },  en: { label: "Contact",  slug: "contact" } },
] as const;

export type PageKey = (typeof PAGES)[number]["key"];

export function pageHref(lang: Locale, key: PageKey): string {
  const p = PAGES.find((x) => x.key === key)!;
  const slug = p[lang].slug;
  if (lang === "fr") return slug ? `/${slug}` : "/";
  return slug ? `/en/${slug}` : "/en";
}

export function navLinks(lang: Locale) {
  return PAGES.filter((p) => p.key !== "home").map((p) => ({
    key: p.key,
    label: p[lang].label,
    href: pageHref(lang, p.key),
  }));
}

export function langSwitch(lang: Locale, key: PageKey) {
  const other: Locale = lang === "fr" ? "en" : "fr";
  return { lang: other, href: pageHref(other, key), label: other.toUpperCase() };
}

// Toutes les URL (chemins) pour le sitemap et les alternates hreflang.
export function allPaths(): { fr: string; en: string; key: PageKey }[] {
  return PAGES.map((p) => ({
    key: p.key,
    fr: pageHref("fr", p.key),
    en: pageHref("en", p.key),
  }));
}

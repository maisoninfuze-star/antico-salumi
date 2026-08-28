import type { Metadata } from "next";
import type { Locale } from "@/data/site";
import { pageHref, type PageKey } from "./routes";

type M = { title: string; description: string };

const META: Record<PageKey, { fr: M; en: M }> = {
  home: {
    fr: { title: "Antico Salumi Laval | Salumeria, Panini & Traiteur Italien",
      description: "Antico Salumi à Laval : charcuteries italiennes, panini préparés à l'ancienne, spécialités, bistro et traiteur. Anciennement Piccolo Laval." },
    en: { title: "Antico Salumi Laval | Italian Salumeria, Panini & Catering",
      description: "Antico Salumi in Laval: Italian cured meats, panini made the old way, specialties, bistro and catering. Formerly Piccolo Laval." },
  },
  story: {
    fr: { title: "Notre histoire", description: "L'histoire d'Antico Salumi, salumeria italienne à Laval — tradition italienne depuis 1934, anciennement Piccolo." },
    en: { title: "Our story", description: "The story of Antico Salumi, an Italian salumeria in Laval — Italian tradition since 1934, formerly Piccolo." },
  },
  menu: {
    fr: { title: "Menu — Panini & Salumi", description: "Le menu d'Antico Salumi : quinze panini italiens sur focaccia maison, charcuteries et spécialités, à Laval." },
    en: { title: "Menu — Panini & Salumi", description: "The Antico Salumi menu: fifteen Italian panini on house focaccia, cured meats and specialties, in Laval." },
  },
  catering: {
    fr: { title: "Traiteur italien à Laval", description: "Antico Traiteur : plateaux de charcuteries, plateaux de sandwichs, antipasti et événements privés à Laval." },
    en: { title: "Italian catering in Laval", description: "Antico Catering: charcuterie boards, sandwich platters, antipasti and private events in Laval." },
  },
  gallery: {
    fr: { title: "Galerie", description: "Un avant-goût de la maison Antico Salumi à Laval : panini, charcuteries et atmosphère de salumeria." },
    en: { title: "Gallery", description: "A taste of Antico Salumi in Laval: panini, cured meats and the salumeria atmosphere." },
  },
  contact: {
    fr: { title: "Contact & heures", description: "Adresse, heures et itinéraire — Antico Salumi, 1998 boulevard Curé-Labelle, Laval (QC)." },
    en: { title: "Contact & hours", description: "Address, hours and directions — Antico Salumi, 1998 boulevard Curé-Labelle, Laval (QC)." },
  },
};

export function pageMeta(lang: Locale, key: PageKey): Metadata {
  const m = META[key][lang];
  return {
    title: key === "home" ? { absolute: m.title } : m.title,
    description: m.description,
    alternates: {
      canonical: pageHref(lang, key),
      languages: { "fr-CA": pageHref("fr", key), "en-CA": pageHref("en", key) },
    },
    openGraph: {
      type: "website",
      locale: lang === "fr" ? "fr_CA" : "en_CA",
      title: m.title,
      description: m.description,
      images: [{ url: "/img/menu/03-charcutier.jpg", width: 1672, height: 941, alt: "Antico Salumi" }],
    },
  };
}

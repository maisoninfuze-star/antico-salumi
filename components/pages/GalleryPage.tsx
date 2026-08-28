import type { Locale } from "@/data/site";
import { getDict } from "@/data/dictionary";

import PageHero from "../PageHero";
import Gallery from "../Gallery";
import InstagramSection from "../Instagram";
import Quote from "../Quote";
import FinalCta from "../FinalCta";

export default function GalleryPage({ lang }: { lang: Locale }) {
  const t = getDict(lang);
  const h = t.pageHeaders.gallery;
  return (
    <>
      <PageHero eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle}
        image="/img/menu/01-mortadella.jpg" position="center 55%" />
      <Gallery t={t} />
      <Quote t={t} />
      <InstagramSection t={t} />
      <FinalCta t={t} lang={lang} />
    </>
  );
}

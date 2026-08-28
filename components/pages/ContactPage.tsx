import type { Locale } from "@/data/site";
import { getDict } from "@/data/dictionary";

import PageHero from "../PageHero";
import LocationSection from "../LocationSection";
import Reviews from "../Reviews";
import FinalCta from "../FinalCta";

export default function ContactPage({ lang }: { lang: Locale }) {
  const t = getDict(lang);
  const h = t.pageHeaders.contact;
  return (
    <>
      <PageHero eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle}
        image="/img/menu/09-salami.jpg" position="center 50%" />
      <LocationSection t={t} lang={lang} />
      <Reviews t={t} lang={lang} />
      <FinalCta t={t} lang={lang} />
    </>
  );
}

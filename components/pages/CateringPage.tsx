import type { Locale } from "@/data/site";
import { getDict } from "@/data/dictionary";

import PageHero from "../PageHero";
import Catering from "../Catering";
import CateringMenu from "../CateringMenu";
import FinalCta from "../FinalCta";

export default function CateringPage({ lang }: { lang: Locale }) {
  const t = getDict(lang);
  const h = t.pageHeaders.catering;
  return (
    <>
      <PageHero eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle}
        image="/img/menu/13-bresaola.jpg" position="center 40%" />
      <Catering t={t} />
      <CateringMenu t={t} lang={lang} />
      <FinalCta t={t} lang={lang} />
    </>
  );
}

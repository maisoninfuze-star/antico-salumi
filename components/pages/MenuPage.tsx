import type { Locale } from "@/data/site";
import { getDict } from "@/data/dictionary";

import PageHero from "../PageHero";
import MenuList from "../MenuList";
import ProductCategories from "../ProductCategories";
import FoodMoment from "../FoodMoment";
import FinalCta from "../FinalCta";

export default function MenuPage({ lang }: { lang: Locale }) {
  const t = getDict(lang);
  const h = t.pageHeaders.menu;
  return (
    <>
      <PageHero eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle}
        image="/img/menu/03-charcutier.jpg" position="58% center" />
      <MenuList t={t} lang={lang} />
      <FoodMoment t={t} />
      <ProductCategories t={t} lang={lang} />
      <FinalCta t={t} lang={lang} />
    </>
  );
}

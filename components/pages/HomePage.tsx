import type { Locale } from "@/data/site";
import { getDict } from "@/data/dictionary";
import { pageHref } from "@/lib/routes";

import Hero from "../Hero";
import Marquee from "../Marquee";
import HeritageStory from "../HeritageStory";
import ProductCategories from "../ProductCategories";
import FoodMoment from "../FoodMoment";
import MenuList from "../MenuList";
import PiccoloTransition from "../PiccoloTransition";
import Quote from "../Quote";
import Reviews from "../Reviews";
import InstagramSection from "../Instagram";
import FinalCta from "../FinalCta";

// Accueil : survol éditorial qui dirige vers les pages détaillées.
export default function HomePage({ lang }: { lang: Locale }) {
  const t = getDict(lang);
  return (
    <>
      <Hero t={t} lang={lang} />
      <Marquee />
      <HeritageStory t={t} id="decouvrir" moreHref={pageHref(lang, "story")} moreLabel={t.cta.story} />
      <ProductCategories t={t} lang={lang} />
      <FoodMoment t={t} />
      <MenuList t={t} lang={lang} limit={6} />
      <PiccoloTransition t={t} />
      <Quote t={t} />
      <Reviews t={t} lang={lang} />
      <InstagramSection t={t} />
      <FinalCta t={t} lang={lang} />
    </>
  );
}

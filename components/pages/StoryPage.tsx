import type { Locale } from "@/data/site";
import { getDict } from "@/data/dictionary";

import PageHero from "../PageHero";
import HeritageStory from "../HeritageStory";
import SalumeriaExperience from "../SalumeriaExperience";
import PaninoStory from "../PaninoStory";
import Quote from "../Quote";
import FinalCta from "../FinalCta";

export default function StoryPage({ lang }: { lang: Locale }) {
  const t = getDict(lang);
  const h = t.pageHeaders.story;
  return (
    <>
      <PageHero eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle}
        image="/img/mood/salumeria-counter.jpg" position="center 42%" />
      <HeritageStory t={t} />
      <SalumeriaExperience t={t} />
      <PaninoStory t={t} />
      <Quote t={t} />
      <FinalCta t={t} lang={lang} />
    </>
  );
}

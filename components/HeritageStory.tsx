import Image from "next/image";
import Link from "next/link";
import type { Dict } from "@/data/dictionary";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

export default function HeritageStory({
  t,
  id,
  moreHref,
  moreLabel,
}: {
  t: Dict;
  id?: string;
  moreHref?: string;
  moreLabel?: string;
}) {
  return (
    <section className="heritage bg-paper" id={id}>
      <span className="heritage-ghost" aria-hidden="true">Tradizione</span>
      <div className="heritage-grid wrap">
        <Reveal as="figure" className="frame heritage-frame">
          <span className="frame-mat">
            <Image src="/img/menu/07-porchetta.jpg" alt="" width={1672} height={941} sizes="(max-width:860px) 90vw, 44vw" />
          </span>
          <figcaption>La porchetta, rôtie aux herbes.</figcaption>
        </Reveal>

        <div className="heritage-copy">
          <Reveal><p className="eyebrow">{t.heritage.eyebrow}</p></Reveal>
          <Reveal delay={0.05}><h2 className="heritage-title">{t.heritage.title}</h2></Reveal>
          {t.heritage.body.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className={`heritage-p ${i === 0 ? "dropcap" : ""}`}>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <p className="heritage-accent">
              <em>{t.heritage.accent}</em>
              <span>{t.heritage.accentSub}</span>
            </p>
          </Reveal>
          {moreHref && moreLabel && (
            <Reveal delay={0.3}>
              <Link className="link-quiet heritage-more" href={moreHref}>
                {moreLabel} <ArrowUpRight />
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import type { Dict } from "@/data/dictionary";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";

export default function SalumeriaExperience({ t }: { t: Dict }) {
  return (
    <section className="salumeria">
      <div className="salumeria-bg">
        <Image src="/img/mood/salumeria-counter.jpg" alt="" fill sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 42%" }} />
      </div>
      <div className="salumeria-scrim" />
      <span className="salumeria-ghost" aria-hidden="true">Italia</span>

      <div className="salumeria-inner wrap">
        <Reveal><p className="eyebrow eyebrow-gold">{t.salumeria.eyebrow}</p></Reveal>
        <Reveal delay={0.05}><h2 className="salumeria-title">{t.salumeria.title}</h2></Reveal>
        {t.salumeria.body.map((p, i) => (
          <Reveal key={i} delay={0.1 + i * 0.05}><p className="salumeria-p">{p}</p></Reveal>
        ))}
        <Reveal delay={0.25}>
          <a className="btn btn-primary salumeria-cta" href={site.maps} target="_blank" rel="noopener">
            {t.salumeria.cta} <span className="btn-ico"><ArrowRight /></span>
          </a>
        </Reveal>
      </div>

      <figure className="frame salumeria-inset" aria-hidden="true">
        <span className="frame-mat">
          <Image src="/img/mood/espresso.jpg" alt="" width={1800} height={1170} sizes="320px" />
        </span>
      </figure>
    </section>
  );
}

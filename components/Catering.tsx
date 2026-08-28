import Image from "next/image";
import type { Dict } from "@/data/dictionary";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import { ArrowRight, Phone } from "./Icons";

export default function Catering({ t }: { t: Dict }) {
  return (
    <section className="catering bg-paper" id="traiteur">
      <div className="catering-grid wrap">
        <div className="catering-copy">
          <Reveal><p className="eyebrow">{t.catering.label}</p></Reveal>
          <Reveal delay={0.05}><h2 className="catering-title">{t.catering.title}</h2></Reveal>
          <Reveal delay={0.1}><p className="catering-body">{t.catering.body}</p></Reveal>

          <ul className="catering-services">
            {t.catering.services.map((s, i) => (
              <Reveal as="li" key={s.name} delay={0.12 + i * 0.05} className="catering-service">
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.3}>
            <div className="catering-ctas">
              <a className="btn btn-primary" href={site.phoneHref}>
                {t.catering.cta} <span className="btn-ico"><ArrowRight /></span>
              </a>
              <a className="link-quiet catering-call" href={site.phoneHref}>
                <Phone /> {t.catering.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal as="figure" className="frame catering-frame">
          <span className="frame-mat">
            <Image src="/img/menu/13-bresaola.jpg" alt="" width={1672} height={941} sizes="(max-width:860px) 90vw, 40vw" />
          </span>
        </Reveal>
      </div>
    </section>
  );
}

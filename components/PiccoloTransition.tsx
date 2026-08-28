import type { Dict } from "@/data/dictionary";
import Reveal from "./Reveal";

export default function PiccoloTransition({ t }: { t: Dict }) {
  return (
    <section className="piccolo bg-wood">
      <div className="piccolo-inner wrap">
        <Reveal><h2 className="piccolo-title">{t.piccolo.title}</h2></Reveal>
        <div className="piccolo-body">
          {t.piccolo.body.map((p, i) => (
            <Reveal key={i} delay={0.05 + i * 0.05}><p>{p}</p></Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="piccolo-accent">
            <em>{t.piccolo.accent}</em>
            <span>{t.piccolo.accentSub}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

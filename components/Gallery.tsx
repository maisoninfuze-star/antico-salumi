import Image from "next/image";
import type { Dict } from "@/data/dictionary";
import Reveal from "./Reveal";

// Galerie éditoriale : formats mêlés + mots italiens intercalés.
const SHOTS = [
  { src: "/img/menu/01-mortadella.jpg", tall: true },
  { src: "/img/menu/05-milanaise.jpg", tall: false },
  { src: "/img/menu/08-salsiccia.jpg", tall: false },
  { src: "/img/menu/14-poulet.jpg", tall: true },
  { src: "/img/menu/02-capicollo.jpg", tall: false },
  { src: "/img/menu/06-cotto.jpg", tall: true },
];

export default function Gallery({ t }: { t: Dict }) {
  return (
    <section className="gallery bg-wood" id="galerie">
      <div className="wrap gallery-head">
        <Reveal><p className="eyebrow eyebrow-gold">{t.gallery.eyebrow}</p></Reveal>
        <Reveal delay={0.05}><h2 className="gallery-title">{t.gallery.title}</h2></Reveal>
      </div>

      <div className="gallery-grid">
        {SHOTS.map((s, i) => (
          <Reveal as="figure" key={s.src} delay={(i % 3) * 0.06}
            className={`gallery-item ${s.tall ? "is-tall" : ""}`}>
            <Image src={s.src} alt="" width={1672} height={941}
              sizes="(max-width:860px) 45vw, 30vw" />
          </Reveal>
        ))}
      </div>

      <div className="gallery-words" aria-hidden="true">
        {t.gallery.words.map((w, i) => (
          <span key={w} className={i % 2 ? "is-outline" : ""}>{w}</span>
        ))}
      </div>
    </section>
  );
}

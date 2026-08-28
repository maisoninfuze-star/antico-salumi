import Image from "next/image";
import type { Dict } from "@/data/dictionary";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import { Instagram as IgIcon } from "./Icons";

const FEED = [
  "/img/menu/04-prosciuttino.jpg",
  "/img/menu/10-caprese.jpg",
  "/img/menu/07-porchetta.jpg",
  "/img/menu/12-spianata.jpg",
  "/img/menu/03-charcutier.jpg",
  "/img/menu/15-legumes.jpg",
];

export default function InstagramSection({ t }: { t: Dict }) {
  return (
    <section className="instagram bg-paper">
      <div className="wrap instagram-head">
        <Reveal>
          <a className="instagram-handle" href={site.social.instagram} target="_blank" rel="noopener">
            <IgIcon /> {t.instagram.handle}
          </a>
        </Reveal>
        <Reveal delay={0.05}><p className="instagram-line">{t.instagram.line}</p></Reveal>
      </div>

      <div className="instagram-grid">
        {FEED.map((src, i) => (
          <a key={src} className="instagram-cell" href={site.social.instagram} target="_blank" rel="noopener"
            style={{ ["--d" as string]: `${(i % 3) * 0.05}s` }}>
            <Image src={src} alt="" width={800} height={800} sizes="(max-width:860px) 33vw, 16vw" />
            <span className="instagram-cell-ig"><IgIcon /></span>
          </a>
        ))}
      </div>

      <div className="wrap instagram-foot">
        <Reveal>
          <a className="btn btn-primary" href={site.social.instagram} target="_blank" rel="noopener">
            {t.instagram.cta} <span className="btn-ico"><IgIcon /></span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

import type { Locale } from "@/data/site";
import type { Dict } from "@/data/dictionary";
import { cateringMenu } from "@/data/catering";
import Reveal from "./Reveal";

// Menu traiteur complet — sections repliables (<details> natif, sans JS).
export default function CateringMenu({ t, lang }: { t: Dict; lang: Locale }) {
  const fr = lang === "fr";
  return (
    <section className="cmenu bg-paper" id="menu-traiteur">
      <div className="wrap">
        <div className="cmenu-head">
          <Reveal><p className="eyebrow">{t.catering.menuEyebrow}</p></Reveal>
          <Reveal delay={0.05}><h2 className="cmenu-title">{t.catering.menuTitle}</h2></Reveal>
        </div>

        <div className="cmenu-sections">
          {cateringMenu.map((s) => {
            const note = fr ? s.noteFr : s.noteEn;
            return (
              <Reveal as="div" key={s.key} className="cmenu-block">
                <details open={s.open}>
                  <summary className="cmenu-summary">
                    <span className="cmenu-summary-title">{fr ? s.titleFr : s.titleEn}</span>
                    {note && <span className="cmenu-summary-note">{note}</span>}
                    <span className="cmenu-chevron" aria-hidden="true" />
                  </summary>
                  <ul className="cmenu-items">
                    {s.items.map((it, i) => {
                      const desc = fr ? it.descFr : it.descEn;
                      return (
                        <li className="cmenu-item" key={i}>
                          <div className="cmenu-item-row">
                            <span className="cmenu-item-name">{fr ? it.fr : it.en}</span>
                            {it.price && <span className="cmenu-leader" aria-hidden="true" />}
                            {it.price && <span className="cmenu-item-price">{it.price}</span>}
                          </div>
                          {desc && <p className="cmenu-item-desc">{desc}</p>}
                        </li>
                      );
                    })}
                  </ul>
                </details>
              </Reveal>
            );
          })}
        </div>

        <Reveal><p className="cmenu-note">{t.catering.menuNote}</p></Reveal>
      </div>
    </section>
  );
}

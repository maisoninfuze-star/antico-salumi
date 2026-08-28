import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/data/site";
import type { Dict } from "@/data/dictionary";
import { panini, groupLabels } from "@/data/menu";
import { pageHref } from "@/lib/routes";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";

// limit : n'affiche que les N premiers panini (aperçu sur l'accueil), sans en-têtes de groupe.
export default function MenuList({ t, lang, limit }: { t: Dict; lang: Locale; limit?: number }) {
  const groups = ["classici", "cucinati", "freschi"] as const;
  const teaser = typeof limit === "number";
  const shown = teaser ? panini.slice(0, limit) : panini;

  return (
    <section className="menu bg-paper" id="menu">
      <div className="wrap">
        <div className="menu-head">
          <Reveal><p className="eyebrow">{t.menu.eyebrow}</p></Reveal>
          <Reveal delay={0.05}><h2 className="menu-title">{t.menu.title}</h2></Reveal>
          <Reveal delay={0.1}><p className="menu-sub">{t.menu.sub}</p></Reveal>
        </div>

        {teaser ? (
          <ul className="menu-items">
            {shown.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 0.03} className="menu-item">
                <figure className="menu-item-media">
                  <Image src={p.img} alt={p.name} width={1672} height={941} sizes="(max-width:860px) 90vw, 30vw" />
                </figure>
                <div className="menu-item-body">
                  <span className="menu-item-no">№ {p.no}</span>
                  <h3 className="menu-item-name">{p.name}</h3>
                  <p className="menu-item-desc">{lang === "fr" ? p.descFr : p.descEn}</p>
                  {p.price && <span className="menu-item-price">{p.price}</span>}
                </div>
              </Reveal>
            ))}
          </ul>
        ) : (
          groups.map((g) => {
            const items = panini.filter((p) => p.group === g);
            return (
              <div className="menu-group" key={g}>
                <Reveal><h2 className="menu-group-title">{groupLabels[g][lang]}</h2></Reveal>
                <ul className="menu-items">
                  {items.map((p, i) => (
                    <Reveal as="li" key={p.slug} delay={i * 0.03} className="menu-item">
                      <figure className="menu-item-media">
                        <Image src={p.img} alt={p.name} width={1672} height={941} sizes="(max-width:860px) 90vw, 30vw" />
                      </figure>
                      <div className="menu-item-body">
                        <span className="menu-item-no">№ {p.no}</span>
                        <h3 className="menu-item-name">{p.name}</h3>
                        <p className="menu-item-desc">{lang === "fr" ? p.descFr : p.descEn}</p>
                        {p.price && <span className="menu-item-price">{p.price}</span>}
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            );
          })
        )}

        {teaser ? (
          <Reveal>
            <Link className="btn btn-primary menu-more" href={pageHref(lang, "menu")}>
              {t.cta.menuAll} <span className="btn-ico"><ArrowRight /></span>
            </Link>
          </Reveal>
        ) : (
          <Reveal><p className="menu-note">{t.menu.noteFr}</p></Reveal>
        )}
      </div>
    </section>
  );
}

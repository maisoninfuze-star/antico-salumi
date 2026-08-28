import Link from "next/link";
import type { Dict } from "@/data/dictionary";
import type { Locale } from "@/data/site";
import { pageHref, type PageKey } from "@/lib/routes";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

// Ancien href d'ancre → clé de page réelle.
const TO: Record<string, PageKey> = { "#menu": "menu", "#traiteur": "catering", "#contact": "contact" };

export default function ProductCategories({ t, lang }: { t: Dict; lang: Locale }) {
  return (
    <section className="products bg-paper">
      <div className="wrap">
        <div className="products-head">
          <Reveal><p className="eyebrow">{t.products.eyebrow}</p></Reveal>
          <Reveal delay={0.05}><h2 className="products-title">{t.products.title}</h2></Reveal>
        </div>

        <div className="products-list">
          {t.products.items.map((it, i) => (
            <Reveal key={it.key} delay={i * 0.04}>
              <Link className="product-row" href={pageHref(lang, TO[it.href] ?? "menu")}>
                <span className="product-index">0{i + 1}</span>
                <span className="product-name">{it.name}</span>
                <span className="product-desc">{it.desc}</span>
                <span className="product-cta">{it.cta} <ArrowUpRight /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

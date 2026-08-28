import Image from "next/image";
import Link from "next/link";
import type { Dict } from "@/data/dictionary";
import type { Locale } from "@/data/site";
import { site } from "@/data/site";
import { pageHref } from "@/lib/routes";
import { ArrowDown, ArrowRight } from "./Icons";

// Entrée animée en CSS pur (voir sections.css) — robuste, sans dépendance JS.
export default function Hero({ t, lang }: { t: Dict; lang: Locale }) {
  return (
    <section className="hero" id="accueil">
      <div className="hero-media">
        <div className="hero-media-inner">
          <Image
            src="/img/menu/03-charcutier.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 860px) 100vw, 54vw"
            style={{ objectFit: "cover", objectPosition: "58% center" }}
          />
        </div>
        <div className="hero-scrim" />
      </div>

      <div className="hero-body wrap">
        <p className="eyebrow hero-eyebrow anim" style={{ ["--d" as string]: "0.2s" }}>
          {t.hero.eyebrow}
        </p>

        <h1 className="hero-title">
          {t.hero.headline.map((l, i) => (
            <span className="hero-line" key={i}>
              <span className="hero-word" style={{ ["--d" as string]: `${0.35 + i * 0.12}s` }}>{l}</span>
            </span>
          ))}
        </h1>

        <p className="hero-support anim" style={{ ["--d" as string]: "0.7s" }}>{t.hero.support}</p>

        <div className="hero-ctas anim" style={{ ["--d" as string]: "0.85s" }}>
          <Link className="btn btn-primary" href={pageHref(lang, "menu")}>
            {t.hero.ctaPrimary} <span className="btn-ico"><ArrowRight /></span>
          </Link>
          <Link className="link-quiet" href={pageHref(lang, "contact")}>{t.hero.ctaSecondary}</Link>
        </div>

        <p className="hero-pillars anim" style={{ ["--d" as string]: "1s" }}>{t.hero.pillars}</p>
      </div>

      <a className="hero-scroll anim" style={{ ["--d" as string]: "1.2s" }} href="#decouvrir" aria-label={t.hero.scroll}>
        <span>{t.hero.scroll}</span>
        <ArrowDown />
      </a>

      <span className="sr-only">{site.name}</span>
    </section>
  );
}

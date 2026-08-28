import Image from "next/image";
import Link from "next/link";
import type { Dict } from "@/data/dictionary";
import type { Locale } from "@/data/site";
import { pageHref } from "@/lib/routes";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";

export default function FinalCta({ t, lang }: { t: Dict; lang: Locale }) {
  return (
    <section className="finalcta bg-wood">
      <div className="wrap finalcta-inner">
        <Reveal className="finalcta-logo">
          <Image src="/img/logo-mark.jpg" alt="Antico Salumi" width={1380} height={480}
            sizes="(max-width:860px) 80vw, 520px" />
        </Reveal>
        <Reveal delay={0.1}><h2 className="finalcta-it">{t.finalCta.it}</h2></Reveal>
        <Reveal delay={0.15}><p className="finalcta-support">{t.finalCta.support}</p></Reveal>
        <Reveal delay={0.2}>
          <div className="finalcta-ctas">
            <Link className="btn btn-primary" href={pageHref(lang, "menu")}>
              {t.finalCta.ctaPrimary} <span className="btn-ico"><ArrowRight /></span>
            </Link>
            <Link className="btn btn-ghost on-dark" href={pageHref(lang, "contact")}>{t.finalCta.ctaSecondary}</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

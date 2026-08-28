import Link from "next/link";
import type { Dict } from "@/data/dictionary";
import type { Locale } from "@/data/site";
import { site } from "@/data/site";
import { pageHref } from "@/lib/routes";
import { Menu, Pin, Phone } from "./Icons";

// Barre d'action collée en bas — critique pour la conversion mobile locale.
export default function MobileBar({ t, lang }: { t: Dict; lang: Locale }) {
  return (
    <nav className="mobilebar" aria-label={t.a11y.toMenu}>
      <Link href={pageHref(lang, "menu")}><Menu /> {t.a11y.toMenu}</Link>
      <a href={site.maps} target="_blank" rel="noopener"><Pin /> {t.a11y.directions}</a>
      <a href={site.phoneHref}><Phone /> {t.a11y.call}</a>
    </nav>
  );
}

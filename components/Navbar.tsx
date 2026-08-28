"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Dict } from "@/data/dictionary";
import type { Locale } from "@/data/site";
import { site } from "@/data/site";
import { navLinks, langSwitch, pageHref, type PageKey } from "@/lib/routes";

export default function Navbar({ t, lang, pageKey }: { t: Dict; lang: Locale; pageKey: PageKey }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const links = navLinks(lang);
  const other = langSwitch(lang, pageKey);
  const home = pageHref(lang, "home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-inner wrap">
          <Link href={home} className="nav-brand" aria-label={site.name}>
            <span className="nav-brand-name">Antico Salumi</span>
            <span className="nav-brand-sub">Laval · Depuis {site.founded}</span>
          </Link>

          <nav className="nav-links" aria-label="Navigation">
            {links.map((l) => (
              <Link key={l.key} href={l.href} className={l.key === pageKey ? "is-active" : ""}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <Link className="nav-lang" href={other.href} hrefLang={other.lang}>{other.label}</Link>
            <a className="btn btn-primary nav-order" href={site.phoneHref}>{t.nav.order}</a>
            <button
              className={`burger ${open ? "is-open" : ""}`}
              aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav className="overlay-links">
          {links.map((l) => (
            <Link key={l.key} href={l.href} onClick={() => setOpen(false)} className={l.key === pageKey ? "is-active" : ""}>
              {l.label}
            </Link>
          ))}
          <a className="overlay-order" href={site.phoneHref} onClick={() => setOpen(false)}>
            {t.nav.order} <span>{site.phoneDisplay}</span>
          </a>
          <Link className="overlay-lang" href={other.href} onClick={() => setOpen(false)}>{other.label}</Link>
        </nav>
      </div>
    </>
  );
}

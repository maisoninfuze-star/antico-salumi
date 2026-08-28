import Link from "next/link";
import type { Dict } from "@/data/dictionary";
import type { Locale } from "@/data/site";
import { site } from "@/data/site";
import { navLinks } from "@/lib/routes";
import { Instagram, Facebook } from "./Icons";

export default function Footer({ t, lang }: { t: Dict; lang: Locale }) {
  const links = navLinks(lang);
  return (
    <footer className="footer bg-wood">
      <div className="wrap">
        <p className="footer-giant">Antico Salumi</p>
        <p className="footer-tagline">{t.footer.tagline}</p>

        <div className="footer-cols">
          <nav className="footer-col">
            <p className="footer-col-title">{t.footer.navTitle}</p>
            <ul>
              {links.map((l) => (
                <li key={l.key}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <p className="footer-col-title">{t.footer.infoTitle}</p>
            <p className="footer-line">{t.footer.addressLabel}<br />
              <span>{site.address.street}, {site.address.city} ({site.address.provinceCode}) {site.address.postal}</span>
            </p>
            <p className="footer-line">{t.footer.phoneLabel}<br />
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </p>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">{t.footer.hoursLabel}</p>
            <ul className="footer-hours">
              {site.hours.map((h) => (
                <li key={h.dayFr}><span>{lang === "en" ? h.dayEn : h.dayFr}</span><span>{h.value}</span></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">{t.footer.followTitle}</p>
            <div className="footer-social">
              <a href={site.social.instagram} target="_blank" rel="noopener" aria-label="Instagram"><Instagram /> Instagram</a>
              <a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook"><Facebook /> Facebook</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {site.founded ? new Date().getFullYear() : ""} {t.footer.former}. {t.footer.rights}</p>
          <p className="footer-legal">
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

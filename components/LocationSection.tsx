import type { Dict } from "@/data/dictionary";
import type { Locale } from "@/data/site";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import { ArrowRight, Phone, Pin } from "./Icons";

export default function LocationSection({ t, lang }: { t: Dict; lang: Locale }) {
  return (
    <section className="location bg-paper" id="contact">
      <div className="location-grid wrap">
        <div className="location-copy">
          <Reveal><p className="eyebrow">{t.location.eyebrow}</p></Reveal>
          <Reveal delay={0.05}><h2 className="location-title">{t.location.title}</h2></Reveal>

          <Reveal delay={0.1}>
            <div className="location-block">
              <p className="location-name">{t.location.name}</p>
              <address className="location-address">
                {site.address.street}<br />
                {site.address.city} ({site.address.province}) &nbsp;{site.address.postal}
              </address>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="location-hours">
              <p className="location-hours-title">{t.location.hoursTitle}</p>
              <dl className="hours">
                {site.hours.map((h) => (
                  <div key={h.dayFr}>
                    <dt>{lang === "en" ? h.dayEn : h.dayFr}</dt>
                    <dd>{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="location-ctas">
              <a className="btn btn-primary" href={site.maps} target="_blank" rel="noopener">
                {t.location.directions} <span className="btn-ico"><ArrowRight /></span>
              </a>
              <a className="btn btn-ghost on-light" href={site.phoneHref}><Phone /> {t.location.call}</a>
            </div>
          </Reveal>
        </div>

        <Reveal className="location-map-wrap">
          <div className="location-map">
            <iframe
              src={site.mapsEmbed}
              title="Antico Salumi — Laval"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a className="location-map-pin" href={site.maps} target="_blank" rel="noopener" aria-label={t.location.directions}>
              <Pin />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

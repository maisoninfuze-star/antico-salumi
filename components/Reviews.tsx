import type { Locale } from "@/data/site";
import type { Dict } from "@/data/dictionary";
import { reviews, googleReviewsUrl } from "@/data/reviews";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

function Stars({ n }: { n: number }) {
  return (
    <span className="review-stars" aria-label={`${n} / 5`}>
      {"★★★★★".slice(0, n)}
      <span className="review-stars-empty">{"★★★★★".slice(0, 5 - n)}</span>
    </span>
  );
}

export default function Reviews({ t, lang }: { t: Dict; lang: Locale }) {
  const has = reviews.length > 0;
  return (
    <section className="reviews bg-paper">
      <div className="wrap">
        <div className="reviews-head">
          <Reveal><p className="eyebrow">{t.reviews.eyebrow}</p></Reveal>
          <Reveal delay={0.05}><h2 className="reviews-title">{t.reviews.title}</h2></Reveal>
        </div>

        {has ? (
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={i * 0.05} className="review-card">
                <Stars n={r.rating} />
                <p className="review-text">{lang === "fr" ? r.textFr : r.textEn}</p>
                <p className="review-name">{r.name}</p>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal><p className="reviews-empty">{t.reviews.empty}</p></Reveal>
        )}

        <Reveal delay={0.1}>
          <a className="link-quiet reviews-cta" href={googleReviewsUrl} target="_blank" rel="noopener">
            {t.reviews.cta} <ArrowUpRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

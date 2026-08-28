import type { Dict } from "@/data/dictionary";
import Reveal from "./Reveal";

export default function Quote({ t }: { t: Dict }) {
  return (
    <section className="quote bg-paper">
      <div className="wrap quote-inner">
        <Reveal><blockquote className="quote-it">{t.quote.it}</blockquote></Reveal>
        <Reveal delay={0.1}><p className="quote-fr">{t.quote.fr}</p></Reveal>
      </div>
    </section>
  );
}

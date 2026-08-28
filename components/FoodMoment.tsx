import Image from "next/image";
import type { Dict } from "@/data/dictionary";
import Reveal from "./Reveal";

// Parallaxe via CSS scroll-driven animation (animation-timeline: view()),
// sans JS — voir sections.css .foodmoment-bg.
export default function FoodMoment({ t }: { t: Dict }) {
  return (
    <section className="foodmoment">
      <div className="foodmoment-bg">
        <Image src="/img/menu/09-salami.jpg" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="foodmoment-scrim" />
      <div className="foodmoment-inner">
        <h2 className="foodmoment-big">
          {t.foodMoment.big.map((w, i) => (
            <Reveal as="span" key={i} delay={i * 0.12} className="foodmoment-word">{w}</Reveal>
          ))}
        </h2>
        <Reveal delay={0.4}><p className="foodmoment-line">{t.foodMoment.line}</p></Reveal>
      </div>
    </section>
  );
}

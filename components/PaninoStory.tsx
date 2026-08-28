"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/data/dictionary";

const IMAGES = [
  "/img/menu/11-dinde.jpg",     // il pane
  "/img/menu/03-charcutier.jpg",// i salumi
  "/img/menu/10-caprese.jpg",   // il formaggio
  "/img/menu/15-legumes.jpg",   // gli ingredienti
  "/img/menu/12-spianata.jpg",  // il panino
];

export default function PaninoStory({ t }: { t: Dict }) {
  const steps = t.panino.steps;
  const sentinels = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // L'étape active suit le sentinelle qui croise le centre du viewport.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.i);
            setActive(i);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    sentinels.current.forEach((s) => s && io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <section className="panino" style={{ height: `${steps.length * 100}vh` }}>
      <div className="panino-sticky">
        <div className="panino-media">
          {IMAGES.map((src, i) => (
            <div key={src} className={`panino-img ${i === active ? "is-active" : ""}`}>
              <Image src={src} alt="" fill sizes="(max-width:860px) 100vw, 55vw" style={{ objectFit: "cover" }} />
            </div>
          ))}
          <div className="panino-media-scrim" />
          <span className="panino-media-no" aria-hidden="true">{steps[active].no}</span>
        </div>

        <div className="panino-copy">
          <p className="eyebrow">{t.panino.eyebrow}</p>
          <h2 className="panino-title">{t.panino.title}</h2>
          <ol className="panino-steps">
            {steps.map((s, i) => (
              <li key={s.no} className={`panino-step ${i === active ? "is-active" : ""}`}>
                <span className="panino-step-no">{s.no}</span>
                <span className="panino-step-body">
                  <span className="panino-step-it">{s.it}</span>
                  <span className="panino-step-text">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Sentinelles réparties sur la hauteur pour piloter l'étape active */}
      <div className="panino-track" aria-hidden="true">
        {steps.map((_, i) => (
          <div key={i} data-i={i} ref={(el) => { sentinels.current[i] = el; }} className="panino-sentinel" />
        ))}
      </div>
    </section>
  );
}

"use client";

const WORDS = ["Mortadella", "Porchetta", "Capicollo", "Bresaola", "Salami", "Spianata", "Prosciuttino", "Caprese"];

export default function Marquee() {
  const seg = (
    <span className="marquee-seg">
      {WORDS.map((w, i) => (
        <span key={i}>{w} <em>❦</em> </span>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {seg}
        {seg}
      </div>
    </div>
  );
}

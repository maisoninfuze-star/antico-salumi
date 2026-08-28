import Image from "next/image";

// En-tête de page intérieure : image pleine largeur + voile + titre éditorial.
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  position = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  position?: string;
}) {
  return (
    <section className="pagehero">
      <div className="pagehero-bg">
        <Image src={image} alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: position }} />
      </div>
      <div className="pagehero-scrim" />
      <div className="pagehero-inner wrap">
        <p className="eyebrow eyebrow-gold pagehero-eyebrow">{eyebrow}</p>
        <h1 className="pagehero-title">{title}</h1>
        {subtitle && <p className="pagehero-sub">{subtitle}</p>}
      </div>
    </section>
  );
}

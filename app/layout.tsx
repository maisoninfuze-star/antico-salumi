import type { Metadata } from "next";
import { display, sans } from "@/lib/fonts";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import "./sections.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Antico Salumi Laval | Salumeria, Sandwichs & Traiteur Italien",
    template: "%s | Antico Salumi",
  },
  description:
    "Découvrez Antico Salumi à Laval : charcuteries que nous fabriquons sur place, sandwichs préparés à l’ancienne, spécialités italiennes, bistro et service traiteur.",
  keywords: [
    "Antico Salumi Laval", "salumeria Laval", "panini Laval", "traiteur italien Laval",
    "sandwicherie italienne Laval", "charcuterie italienne Laval", "restaurant italien Laval",
    "Italian deli Laval",
  ],
  alternates: {
    canonical: "/",
    languages: { "fr-CA": "/", "en-CA": "/en" },
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    siteName: "Antico Salumi",
    title: "Antico Salumi Laval | Salumeria, Sandwichs & Traiteur Italien",
    description:
      "Charcuteries italiennes, panini à l'ancienne et service traiteur à Laval. Tradition italienne depuis 1934.",
    images: [{ url: "/img/menu/03-charcutier.jpg", width: 1672, height: 941, alt: "Antico Salumi" }],
  },
  robots: { index: false, follow: false }, // démo pré-lancement — passer à true à la mise en ligne
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className={`${display.variable} ${sans.variable}`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

import { Playfair_Display, Jost } from "next/font/google";

// Sérif éditorial dramatique pour les grands titres (vitrine italienne).
export const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Sans lisible et élégant pour le corps de texte et l'interface.
export const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

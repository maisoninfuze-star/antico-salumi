// ─────────────────────────────────────────────────────────────
// Avis clients — NE JAMAIS inventer d'avis.
// Laisser ce tableau vide tant que de vrais avis Google ne sont pas
// fournis (ou branchés via l'API Google Places + Place ID).
// Quand le tableau est vide, la section affiche une invitation
// élégante à consulter les avis sur Google.
// ─────────────────────────────────────────────────────────────

export type Review = {
  name: string;
  rating: number; // 1–5
  textFr: string;
  textEn: string;
};

export const reviews: Review[] = [
  // Exemple de structure (à remplacer par de VRAIS avis) :
  // { name: "…", rating: 5, textFr: "…", textEn: "…" },
];

// Lien vers la fiche Google pour lire / laisser un avis.
export const googleReviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=Antico+Salumi+Laval";

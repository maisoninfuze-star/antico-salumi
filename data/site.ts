// ─────────────────────────────────────────────────────────────
// Coordonnées de l'établissement.
// Données VÉRIFIÉES (même adresse que le commerce précédent) :
//   adresse + téléphone confirmés par les fiches en ligne.
// À CONFIRMER par le client avant la mise en ligne : les heures
// (reprises des fiches en ligne) et les identifiants de réseaux sociaux.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Antico Salumi",
  founded: "1954",
  phoneDisplay: "450 978-6553",
  phoneHref: "tel:+14509786553",
  address: {
    street: "2002, boulevard Curé-Labelle",
    city: "Laval",
    province: "Québec",
    provinceCode: "QC",
    postal: "H7T 1L3",
    country: "CA",
  },
  geo: { lat: 45.5732, lng: -73.7411 }, // approx. Curé-Labelle, Laval — à préciser au besoin
  maps:
    "https://www.google.com/maps/search/?api=1&query=Antico+Salumi+2002+boulevard+Cur%C3%A9-Labelle+Laval+QC",
  mapsEmbed:
    "https://www.google.com/maps?q=2002+boulevard+Cur%C3%A9-Labelle,+Laval,+QC+H7T+1L3&output=embed",
  // Identifiants sociaux à créer/confirmer par le client.
  social: {
    instagram: "https://instagram.com/anticosalumi",
    instagramHandle: "@anticosalumi",
    facebook: "https://facebook.com/anticosalumi",
  },
  // Heures confirmées par le client (sept. 2026).
  hours: [
    { dayFr: "Lundi", dayEn: "Monday", value: "8 h – 19 h", valueEn: "8 a.m. – 7 p.m.", spec: "Mo 08:00-19:00" },
    { dayFr: "Mardi", dayEn: "Tuesday", value: "8 h – 19 h", valueEn: "8 a.m. – 7 p.m.", spec: "Tu 08:00-19:00" },
    { dayFr: "Mercredi", dayEn: "Wednesday", value: "8 h – 19 h", valueEn: "8 a.m. – 7 p.m.", spec: "We 08:00-19:00" },
    { dayFr: "Jeudi", dayEn: "Thursday", value: "8 h – 19 h", valueEn: "8 a.m. – 7 p.m.", spec: "Th 08:00-19:00" },
    { dayFr: "Vendredi", dayEn: "Friday", value: "8 h – 19 h", valueEn: "8 a.m. – 7 p.m.", spec: "Fr 08:00-19:00" },
    { dayFr: "Samedi", dayEn: "Saturday", value: "8 h – 19 h", valueEn: "8 a.m. – 7 p.m.", spec: "Sa 08:00-19:00" },
    { dayFr: "Dimanche", dayEn: "Sunday", value: "10 h – 19 h", valueEn: "10 a.m. – 7 p.m.", spec: "Su 10:00-19:00" },
  ],
  url: "https://anticosalumi.ca",
} as const;

export type Locale = "fr" | "en";

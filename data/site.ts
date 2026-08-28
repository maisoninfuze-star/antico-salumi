// ─────────────────────────────────────────────────────────────
// Coordonnées de l'établissement.
// Données VÉRIFIÉES (anciennement Piccolo Bistro, même adresse) :
//   adresse + téléphone confirmés par les fiches en ligne.
// À CONFIRMER par le client avant la mise en ligne : les heures
// (reprises des fiches Piccolo) et les identifiants de réseaux sociaux.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Antico Salumi",
  formerName: "Piccolo",
  founded: "1934",
  phoneDisplay: "450 978-6553",
  phoneHref: "tel:+14509786553",
  address: {
    street: "1998, boulevard Curé-Labelle",
    city: "Laval",
    province: "Québec",
    provinceCode: "QC",
    postal: "H7T 1L3",
    country: "CA",
  },
  geo: { lat: 45.5732, lng: -73.7411 }, // approx. Curé-Labelle, Laval — à préciser au besoin
  maps:
    "https://www.google.com/maps/search/?api=1&query=Antico+Salumi+1998+boulevard+Cur%C3%A9-Labelle+Laval+QC",
  mapsEmbed:
    "https://www.google.com/maps?q=1998+boulevard+Cur%C3%A9-Labelle,+Laval,+QC+H7T+1L3&output=embed",
  // Identifiants sociaux à créer/confirmer par le client.
  social: {
    instagram: "https://instagram.com/anticosalumi",
    instagramHandle: "@anticosalumi",
    facebook: "https://facebook.com/anticosalumi",
  },
  // Heures reprises des fiches Piccolo — À CONFIRMER.
  hours: [
    { dayFr: "Lundi", dayEn: "Monday", value: "9 h – 18 h", spec: "Mo 09:00-18:00" },
    { dayFr: "Mardi", dayEn: "Tuesday", value: "8 h – 18 h", spec: "Tu 08:00-18:00" },
    { dayFr: "Mercredi", dayEn: "Wednesday", value: "8 h – 18 h", spec: "We 08:00-18:00" },
    { dayFr: "Jeudi", dayEn: "Thursday", value: "8 h – 18 h", spec: "Th 08:00-18:00" },
    { dayFr: "Vendredi", dayEn: "Friday", value: "8 h – 18 h", spec: "Fr 08:00-18:00" },
    { dayFr: "Samedi", dayEn: "Saturday", value: "9 h – 17 h", spec: "Sa 09:00-17:00" },
    { dayFr: "Dimanche", dayEn: "Sunday", value: "9 h – 16 h", spec: "Su 09:00-16:00" },
  ],
  url: "https://anticosalumi.ca",
} as const;

export type Locale = "fr" | "en";

import { site } from "@/data/site";

// JSON-LD : Restaurant + LocalBusiness pour le SEO local.
export function restaurantSchema(locale: "fr" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    description:
      locale === "fr"
        ? "Salumeria, sandwicherie, bistro et traiteur italien à Laval. Charcuteries que nous fabriquons sur place et sandwichs préparés à l’ancienne."
        : "Italian salumeria, sandwich shop, bistro and catering in Laval. House-made cured meats and sandwiches made the old way.",
    servesCuisine: ["Italian", "Sandwiches", "Charcuterie"],
    priceRange: "$$",
    url: site.url,
    telephone: "+1-450-978-6553",
    image: `${site.url}/img/menu/03-charcutier.jpg`,
    foundingDate: site.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.provinceCode,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: site.hours.map((h) => {
      const [days, hours] = h.spec.split(" ");
      const [opens, closes] = hours.split("-");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayName(days),
        opens,
        closes,
      };
    }),
    sameAs: [site.social.instagram, site.social.facebook],
  };
}

function dayName(code: string): string {
  const map: Record<string, string> = {
    Mo: "Monday", Tu: "Tuesday", We: "Wednesday", Th: "Thursday",
    Fr: "Friday", Sa: "Saturday", Su: "Sunday",
  };
  return map[code] ?? code;
}

// ─────────────────────────────────────────────────────────────
// Données du menu — structure facile à modifier / brancher à un CMS.
// Les 15 panini proviennent des photographies réelles fournies par
// le client (numérotées comme au comptoir). AUCUN prix inventé :
// ajouter `price` quand le client le fournit.
// ─────────────────────────────────────────────────────────────

export type Panino = {
  no: string;
  slug: string;
  name: string;
  group: "classici" | "cucinati" | "freschi";
  descFr: string;
  descEn: string;
  img: string;
  price?: string; // à renseigner par le client
};

export const panini: Panino[] = [
  { no: "01", slug: "mortadella", name: "Mortadella", group: "classici",
    descFr: "Mortadelle, pistaches, stracciatella, pesto de basilic",
    descEn: "Mortadella, pistachio, stracciatella, basil pesto",
    img: "/img/menu/01-mortadella.jpg" },
  { no: "02", slug: "capicollo", name: "Capicollo", group: "classici",
    descFr: "Capicollo, provolone, roquette, oignons confits",
    descEn: "Capicollo, provolone, arugula, confit onions",
    img: "/img/menu/02-capicollo.jpg" },
  { no: "03", slug: "charcutier", name: "Charcutier", group: "classici",
    descFr: "Charcuteries généreuses, poivrons grillés, burrata",
    descEn: "Generous cured meats, grilled peppers, burrata",
    img: "/img/menu/03-charcutier.jpg" },
  { no: "04", slug: "prosciuttino", name: "Prosciuttino", group: "classici",
    descFr: "Prosciutto affiné, tomates confites, roquette",
    descEn: "Aged prosciutto, confit tomatoes, arugula",
    img: "/img/menu/04-prosciuttino.jpg" },
  { no: "05", slug: "milanaise", name: "Milanaise", group: "cucinati",
    descFr: "Escalope panée croustillante, poivrons rôtis, caponata",
    descEn: "Crisp breaded cutlet, roasted peppers, caponata",
    img: "/img/menu/05-milanaise.jpg" },
  { no: "06", slug: "cotto", name: "Cotto", group: "classici",
    descFr: "Jambon cuit, tomates, bocconcini, pousses fraîches",
    descEn: "Cooked ham, tomato, bocconcini, fresh greens",
    img: "/img/menu/06-cotto.jpg" },
  { no: "07", slug: "porchetta", name: "Porchetta", group: "classici",
    descFr: "Porchetta rôtie aux herbes, salsa verde, roquette",
    descEn: "Herb-roasted porchetta, salsa verde, arugula",
    img: "/img/menu/07-porchetta.jpg" },
  { no: "08", slug: "salsiccia", name: "Salsiccia", group: "cucinati",
    descFr: "Saucisse italienne grillée, poivrons, oignons fondants",
    descEn: "Grilled Italian sausage, peppers, sweet onions",
    img: "/img/menu/08-salsiccia.jpg" },
  { no: "09", slug: "salami", name: "Salami", group: "classici",
    descFr: "Salame de Gênes, provolone doux, roquette",
    descEn: "Genoa salame, mild provolone, arugula",
    img: "/img/menu/09-salami.jpg" },
  { no: "10", slug: "caprese", name: "Caprese", group: "freschi",
    descFr: "Fior di latte, tomates, pesto, radicchio croquant",
    descEn: "Fior di latte, tomato, pesto, crisp radicchio",
    img: "/img/menu/10-caprese.jpg" },
  { no: "11", slug: "dinde", name: "Dinde", group: "freschi",
    descFr: "Dinde rôtie tranchée fine, concombre, tomates",
    descEn: "Thinly sliced roast turkey, cucumber, tomato",
    img: "/img/menu/11-dinde.jpg" },
  { no: "12", slug: "spianata", name: "Spianata", group: "classici",
    descFr: "Spianata piquante, giardiniera, copeaux de grana",
    descEn: "Spicy spianata, giardiniera, grana shavings",
    img: "/img/menu/12-spianata.jpg" },
  { no: "13", slug: "bresaola", name: "Bresaola", group: "classici",
    descFr: "Bresaola, chicorée croquante, copeaux de fromage",
    descEn: "Bresaola, crisp chicory, cheese shavings",
    img: "/img/menu/13-bresaola.jpg" },
  { no: "14", slug: "poulet", name: "Poulet grillé", group: "cucinati",
    descFr: "Poulet grillé, courgettes et poivrons rôtis",
    descEn: "Grilled chicken, roasted zucchini and peppers",
    img: "/img/menu/14-poulet.jpg" },
  { no: "15", slug: "legumes", name: "Légumes grillés", group: "freschi",
    descFr: "Aubergines, courgettes, poivrons et oignon rouge grillés",
    descEn: "Grilled eggplant, zucchini, peppers and red onion",
    img: "/img/menu/15-legumes.jpg" },
];

export const groupLabels = {
  classici: { fr: "Salumi classici", en: "Classic salumi" },
  cucinati: { fr: "Cucinati", en: "Hot & cooked" },
  freschi: { fr: "Freschi", en: "Fresh" },
} as const;

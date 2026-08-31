// ─────────────────────────────────────────────────────────────
// Données du menu — noms, descriptions et PRIX RÉELS fournis par
// le client (Sandwiches.docx, août 2026). Photographies numérotées
// comme au comptoir. Prix en $ CA, taxes en sus.
// ─────────────────────────────────────────────────────────────

export type Panino = {
  no: string;
  slug: string;
  name: string;
  group: "classici" | "cucinati" | "freschi";
  descFr: string;
  descEn: string;
  img: string;
  price?: number; // $ CA
};

export const panini: Panino[] = [
  { no: "01", slug: "mortadella", name: "La Mortadelle", group: "classici", price: 16,
    descFr: "Mortadelle, crème de pistache, fromage stracciatella, pesto de basilic",
    descEn: "Mortadella, pistachio cream, stracciatella, basil pesto",
    img: "/img/menu/01-mortadella.jpg" },
  { no: "02", slug: "capicollo", name: "Le Capiccolo à l'ancienne", group: "classici", price: 14,
    descFr: "Capiccolo à l'ancienne, crème de cèpes, oignons confits, bébé roquette, provolone",
    descEn: "Slow-cured capicollo, porcini cream, confit onions, baby arugula, provolone",
    img: "/img/menu/02-capicollo.jpg" },
  { no: "03", slug: "charcutier", name: "Le Charcutier", group: "classici", price: 14,
    descFr: "Capiccolo, salami, mortadelle, poivron rôti, stracciatella et muffuletta",
    descEn: "Capicollo, salami, mortadella, roasted pepper, stracciatella and muffuletta",
    img: "/img/menu/03-charcutier.jpg" },
  { no: "04", slug: "prosciuttino", name: "Le Prosciuttino", group: "classici", price: 17,
    descFr: "Notre fameux prosciuttino artisanal, copeaux de parmesan, tomate séchée, chiffonnade de melon frais, bébé roquette, huile aux fines herbes et miel bio",
    descEn: "Our famous artisanal prosciuttino, shaved parmesan, sun-dried tomato, fresh melon, baby arugula, herb oil and organic honey",
    img: "/img/menu/04-prosciuttino.jpg" },
  { no: "05", slug: "milanaise", name: "La Milanaise", group: "cucinati", price: 14,
    descFr: "Escalope de poulet panée, gremolata maison, poivrons rôtis, huile aux fines herbes, miel et citron",
    descEn: "Breaded chicken cutlet, house gremolata, roasted peppers, herb oil, honey and lemon",
    img: "/img/menu/05-milanaise.jpg" },
  { no: "06", slug: "cotto", name: "Le Prosciutto Cotto", group: "classici", price: 16,
    descFr: "Prosciutto cotto, mozzarella di bufala, bébé roquette, tartinade de tomate de vigne rôtie, huile d'olive aux fines herbes",
    descEn: "Prosciutto cotto, buffalo mozzarella, baby arugula, roasted vine-tomato spread, herb olive oil",
    img: "/img/menu/06-cotto.jpg" },
  { no: "07", slug: "porchetta", name: "La Porchetta", group: "classici", price: 16,
    descFr: "Porchetta chaude, oignons caramélisés, mozzarella di bufala, salsa verde, bébé roquette",
    descEn: "Warm porchetta, caramelized onions, buffalo mozzarella, salsa verde, baby arugula",
    img: "/img/menu/07-porchetta.jpg" },
  { no: "08", slug: "salsiccia", name: "La Saucisse Calabrese", group: "cucinati", price: 13,
    descFr: "Saucisse fraîche, oignons caramélisés, poivrons doux rôtis",
    descEn: "Fresh sausage, caramelized onions, roasted sweet peppers",
    img: "/img/menu/08-salsiccia.jpg" },
  { no: "09", slug: "salami", name: "Le Genoa", group: "classici", price: 13,
    descFr: "Salami, provolone forte, bébé roquette",
    descEn: "Genoa salami, sharp provolone, baby arugula",
    img: "/img/menu/09-salami.jpg" },
  { no: "10", slug: "caprese", name: "La Caprese", group: "freschi", price: 17,
    descFr: "Mozzarella di bufala, tomates de vigne grillées, crème de balsamique à l'orange, julienne d'endives aux poires caramélisées",
    descEn: "Buffalo mozzarella, grilled vine tomatoes, orange balsamic cream, endive and caramelized-pear julienne",
    img: "/img/menu/10-caprese.jpg" },
  { no: "11", slug: "dinde", name: "La Dinde Fumée", group: "freschi", price: 16,
    descFr: "Dinde tranchée, fromage suisse, aïoli citronné, concombre mariné, tomate de vigne",
    descEn: "Sliced smoked turkey, swiss cheese, lemon aioli, marinated cucumber, vine tomato",
    img: "/img/menu/11-dinde.jpg" },
  { no: "12", slug: "spianata", name: "La Spianata", group: "classici", price: 14,
    descFr: "Soppressata calabrese, pecorino, muffuletta, poivrons rôtis",
    descEn: "Calabrese soppressata, pecorino, muffuletta, roasted peppers",
    img: "/img/menu/12-spianata.jpg" },
  { no: "13", slug: "bresaola", name: "La Bresaola", group: "classici", price: 17,
    descFr: "Bœuf séché à perfection, salade d'endives, bébé roquette, pesto de parmesan et basilic à l'ail confit, stracciatella",
    descEn: "Air-dried beef, endive salad, baby arugula, parmesan-basil pesto with confit garlic, stracciatella",
    img: "/img/menu/13-bresaola.jpg" },
  { no: "14", slug: "poulet", name: "Le Poulet Grillé", group: "cucinati", price: 16,
    descFr: "Poitrine de poulet grillée, légumes grillés, mayonnaise épicée, pesto de basilic",
    descEn: "Grilled chicken breast, grilled vegetables, spicy mayo, basil pesto",
    img: "/img/menu/14-poulet.jpg" },
  { no: "15", slug: "legumes", name: "Le Végétarien", group: "freschi", price: 15,
    descFr: "Courgettes, poivrons doux, aubergine, champignon portobello, oignons rouges, mayonnaise au pesto de basilic, fromage suisse",
    descEn: "Zucchini, sweet peppers, eggplant, portobello, red onions, basil-pesto mayo, swiss cheese",
    img: "/img/menu/15-legumes.jpg" },
];

export const groupLabels = {
  classici: { fr: "Salumi classici", en: "Classic salumi" },
  cucinati: { fr: "Cucinati", en: "Hot & cooked" },
  freschi: { fr: "Freschi", en: "Fresh" },
} as const;

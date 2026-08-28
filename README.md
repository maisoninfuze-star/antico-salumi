# Antico Salumi — site web

Site vitrine haut de gamme pour **Antico Salumi**, salumeria · sandwicherie · bistro · traiteur italien à Laval (QC). Rebranding de *Piccolo*.

Identité : héritage italien (oxblood, noyer, crème vieillie, or antique), typographie éditoriale (Playfair Display + Jost), photographie réelle des produits, storytelling cinématique. Bilingue FR (défaut) / EN.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (tokens dans `app/globals.css`) + CSS éditorial sur mesure
- **Lenis** — défilement inertiel doux
- **Animations** — CSS scroll-driven (`animation-timeline: view()`) + IntersectionObserver, **sans JS lourd**

> Note technique : la maquette initiale prévoyait GSAP + Framer Motion. Ils ont été
> remplacés par des animations CSS pilotées par le défilement + IntersectionObserver.
> Résultat : plus léger (First Load JS ≈ 112 kB), plus robuste (le contenu reste visible
> sans JS, les animations ne « gèlent » pas), et meilleur pour les Core Web Vitals.
> Le storytelling collant (« L'art del panino ») et les parallaxes sont conservés.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm start        # sert le build
```

## Pages (site complet, bilingue)

| Page | FR | EN |
|---|---|---|
| Accueil | `/` | `/en` |
| Notre histoire | `/histoire` | `/en/our-story` |
| Menu | `/menu` | `/en/menu` |
| Traiteur | `/traiteur` | `/en/catering` |
| Galerie | `/galerie` | `/en/gallery` |
| Contact | `/contact` | `/en/contact` |

Chaque page a son propre titre/description SEO (`lib/meta.ts`), ses alternates
`hreflang`, et un en-tête cinématique (`PageHero`). L'accueil est un survol qui
dirige vers les pages détaillées (aperçu du menu à 6 panini, liens croisés).
Le sélecteur FR/EN pointe toujours vers la page équivalente (`lib/routes.ts`).

## Structure

```
app/            layout + routes FR (/, /histoire, /menu, /traiteur, /galerie, /contact)
                et EN (/en, /en/our-story, /en/menu, /en/catering, /en/gallery, /en/contact),
                sitemap, robots, globals.css, sections.css
components/      Shell, Navbar, PageHero, Hero, HeritageStory, PiccoloTransition,
                ProductCategories, FoodMoment, MenuList, PaninoStory, SalumeriaExperience,
                Catering, Gallery, Quote, Reviews, Instagram, LocationSection, FinalCta,
                Footer, MobileBar, SmoothScroll, Reveal, Icons, SetLang
components/pages/  HomePage, StoryPage, MenuPage, CateringPage, GalleryPage, ContactPage
data/           site.ts (coordonnées), dictionary.ts (FR/EN), menu.ts (15 panini), reviews.ts
lib/            fonts.ts, schema.ts (JSON-LD), routes.ts (carte des pages), meta.ts (SEO)
public/img/     photographies (15 panini + enseigne + logo) ; /mood (comptoir, espresso — IA)
```

Le contenu est centralisé et facile à brancher sur un CMS plus tard :
copie → `data/dictionary.ts`, menu → `data/menu.ts`, coordonnées → `data/site.ts`,
pages/libellés/slugs → `lib/routes.ts`.

## À CONFIRMER / remplacer avant la mise en ligne

| Élément | État actuel | Action |
|---|---|---|
| **Indexation** | `noindex` actif (`app/robots.ts` + meta dans `layout.tsx`) | Passer en indexable au lancement |
| **Heures** | reprises des fiches Piccolo — non confirmées | Faire valider par le client (`data/site.ts`) |
| **Prix** | aucun (mention « affichés au comptoir ») | Ajouter `price` dans `data/menu.ts` si souhaité |
| **Avis Google** | aucun inventé — état « invitation » | Brancher l'API Google Places (Place ID) ou saisir de vrais avis dans `data/reviews.ts` |
| **Réseaux sociaux** | `instagram.com/anticosalumi`, Facebook — à créer/confirmer | Mettre les vrais liens (`data/site.ts`) |
| **Domaine** | `anticosalumi.ca` (placeholder dans `site.url`) | Mettre le domaine réel |
| **Descriptions des panini** | rédigées d'après les photos | Faire valider les garnitures exactes |
| **Coordonnées carte** | lat/lng approximatives | Préciser si besoin (`data/site.ts` → `geo`) |

## SEO & rebranding

- Balises title/description, OpenGraph, `hreflang` FR/EN, canonical.
- JSON-LD `Restaurant` + `LocalBusiness` (adresse, heures, géo).
- `sitemap.xml`, `robots.txt`.
- Redirections 301 des anciennes routes Piccolo dans `next.config.mjs`.
- Actions hors-code (côté client) : conserver la fiche Google Business, les avis et
  les backlinks Piccolo ; ne pas supprimer les pages bien classées sans redirection.

## Accessibilité / performance

- Thème chaud unique verrouillé, contrastes vérifiés (nav sur voile, texte sur crème/noyer).
- `prefers-reduced-motion` respecté (animations désactivées, contenu visible).
- Images `next/image` (AVIF/WebP, lazy), build 100 % statique.
- Barre d'action collée en bas sur mobile (Menu / Itinéraire / Appeler).

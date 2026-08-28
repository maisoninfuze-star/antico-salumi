import type { Locale } from "@/data/site";
import { getDict } from "@/data/dictionary";
import { restaurantSchema } from "@/lib/schema";
import type { PageKey } from "@/lib/routes";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileBar from "./MobileBar";
import SetLang from "./SetLang";

// Enveloppe commune à toutes les pages : nav + contenu + pied + barre mobile + JSON-LD.
export default function Shell({
  lang,
  pageKey,
  children,
}: {
  lang: Locale;
  pageKey: PageKey;
  children: React.ReactNode;
}) {
  const t = getDict(lang);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema(lang)) }}
      />
      {lang === "en" && <SetLang lang="en" />}
      <Navbar t={t} lang={lang} pageKey={pageKey} />
      <main>{children}</main>
      <Footer t={t} lang={lang} />
      <MobileBar t={t} lang={lang} />
    </>
  );
}

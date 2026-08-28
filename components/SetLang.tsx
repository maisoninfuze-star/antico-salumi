"use client";
import { useEffect } from "react";

// Aligne l'attribut lang du document pour la version anglaise.
export default function SetLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

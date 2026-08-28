import Shell from "@/components/Shell";
import MenuPage from "@/components/pages/MenuPage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("fr", "menu");

export default function Page() {
  return <Shell lang="fr" pageKey="menu"><MenuPage lang="fr" /></Shell>;
}

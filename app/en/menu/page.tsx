import Shell from "@/components/Shell";
import MenuPage from "@/components/pages/MenuPage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "menu");

export default function Page() {
  return <Shell lang="en" pageKey="menu"><MenuPage lang="en" /></Shell>;
}

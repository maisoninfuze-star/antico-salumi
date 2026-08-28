import Shell from "@/components/Shell";
import HomePage from "@/components/pages/HomePage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("fr", "home");

export default function Page() {
  return <Shell lang="fr" pageKey="home"><HomePage lang="fr" /></Shell>;
}

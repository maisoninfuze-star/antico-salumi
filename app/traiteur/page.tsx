import Shell from "@/components/Shell";
import CateringPage from "@/components/pages/CateringPage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("fr", "catering");

export default function Page() {
  return <Shell lang="fr" pageKey="catering"><CateringPage lang="fr" /></Shell>;
}

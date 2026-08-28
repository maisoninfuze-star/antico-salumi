import Shell from "@/components/Shell";
import ContactPage from "@/components/pages/ContactPage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("fr", "contact");

export default function Page() {
  return <Shell lang="fr" pageKey="contact"><ContactPage lang="fr" /></Shell>;
}

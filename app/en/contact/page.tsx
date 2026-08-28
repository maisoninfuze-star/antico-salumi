import Shell from "@/components/Shell";
import ContactPage from "@/components/pages/ContactPage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "contact");

export default function Page() {
  return <Shell lang="en" pageKey="contact"><ContactPage lang="en" /></Shell>;
}

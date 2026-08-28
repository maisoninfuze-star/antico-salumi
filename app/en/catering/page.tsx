import Shell from "@/components/Shell";
import CateringPage from "@/components/pages/CateringPage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "catering");

export default function Page() {
  return <Shell lang="en" pageKey="catering"><CateringPage lang="en" /></Shell>;
}

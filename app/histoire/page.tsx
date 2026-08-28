import Shell from "@/components/Shell";
import StoryPage from "@/components/pages/StoryPage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("fr", "story");

export default function Page() {
  return <Shell lang="fr" pageKey="story"><StoryPage lang="fr" /></Shell>;
}

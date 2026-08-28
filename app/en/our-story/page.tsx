import Shell from "@/components/Shell";
import StoryPage from "@/components/pages/StoryPage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "story");

export default function Page() {
  return <Shell lang="en" pageKey="story"><StoryPage lang="en" /></Shell>;
}

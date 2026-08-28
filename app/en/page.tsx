import Shell from "@/components/Shell";
import HomePage from "@/components/pages/HomePage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "home");

export default function Page() {
  return <Shell lang="en" pageKey="home"><HomePage lang="en" /></Shell>;
}

import Shell from "@/components/Shell";
import GalleryPage from "@/components/pages/GalleryPage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "gallery");

export default function Page() {
  return <Shell lang="en" pageKey="gallery"><GalleryPage lang="en" /></Shell>;
}

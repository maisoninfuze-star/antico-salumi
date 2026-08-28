import Shell from "@/components/Shell";
import GalleryPage from "@/components/pages/GalleryPage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("fr", "gallery");

export default function Page() {
  return <Shell lang="fr" pageKey="gallery"><GalleryPage lang="fr" /></Shell>;
}

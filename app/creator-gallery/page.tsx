import CreatorGalleryPageContent from "../../components/CreatorGalleryPageContent";
import CreatorGalleryPageScripts from "../../components/CreatorGalleryPageScripts";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata = {
  title: "Creator Gallery | Supreme Coach",
  description:
    "We're proud to support a diverse community of creators. Explore their storefronts and stories to get inspired!",
};

export default function CreatorGallery() {
  return (
    <>
      <Header />
      <CreatorGalleryPageContent />
      <CreatorGalleryPageScripts />
      <Footer />
    </>
  );
}

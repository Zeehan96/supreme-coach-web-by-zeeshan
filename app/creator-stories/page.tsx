import CreatorStoriesPageContent from "../../components/CreatorStoriesPageContent";
import CreatorStoriesPageScripts from "../../components/CreatorStoriesPageScripts";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata = {
  title: "Creator Gallery | Supreme Coach",
  description:
    "We're proud to support a diverse community of creators. Explore their storefronts and stories to get inspired!",
};

export default function CreatorStories() {
  return (
    <>
      <Header />
      <CreatorStoriesPageContent />
      <CreatorStoriesPageScripts />
      <Footer />
    </>
  );
}

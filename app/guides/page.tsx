import GuidePageContent from "../../components/GuidePageContent";
import GuidePageScripts from "../../components/GuidePageScripts";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata = {
  title: "The Supreme Coach Guides",
  description:
    "Everything anyone needs to know about the creator-life. From the team powering it.",
};

export default function Guides() {
  return (
    <>
      <Header />
      <GuidePageContent />
      <GuidePageScripts />
      <Footer />
    </>
  );
}


import CreatorPricingPageContent from "../../components/CreatorPricingPageContent";
import CreatorPricingPageScripts from "../../components/CreatorPricingPageScripts";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata = {
  title: "Creator Pricing | Supreme Coach",
  description: "Monetize your content. No out-of-pocket costs",
};

export default function CreatorPricing() {
  return (
    <>
      <Header />
      <CreatorPricingPageContent />
      <CreatorPricingPageScripts />
      <Footer />
    </>
  );
}

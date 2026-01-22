import PricingPageContent from "../../components/PricingPageContent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata = {
  title: "Pricing | Supreme Coach",
  description: "Designed for every stage of your journey. Start today for free.",
};

type SearchParams = {
  type?: string;
};

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const type = params.type === "firms" ? "firms" : "coach";

  return (
    <>
      <Header />
      <PricingPageContent type={type} />
      <Footer />
    </>
  );
}


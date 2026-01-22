import CreatorsOnAirPageContent from "../../components/CreatorsOnAirPageContent";
import CreatorsOnAirPageScripts from "../../components/CreatorsOnAirPageScripts";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata = {
  title: "Creators on Air | Supreme Coach",
  description:
    "We want you to hear this: you are not alone on your creator journey. These conversations are here to make you feel like you have other creators alongside you, because you do.",
};

export default function CreatorsOnAir() {
  return (
    <>
      <Header />
      <CreatorsOnAirPageContent />
      <CreatorsOnAirPageScripts />
      <Footer />
    </>
  );
}

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CreatorsPageContent from "../../components/CreatorsPageContent";
import CreatorsPageScripts from "../../components/CreatorsPageScripts";

export const metadata = {
  title: "Where creators do brand deals | Supreme Coach",
  description:
    "The all-in-one tool to help creators do more brand deals - easier, and faster.",
  openGraph: {
    title: "Where creators do brand deals | Supreme Coach",
    description:
      "The all-in-one tool to help creators do more brand deals - easier, and faster.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where creators do brand deals | Supreme Coach",
    description:
      "The all-in-one tool to help creators do more brand deals - easier, and faster.",
  },
};

export default function CreatorsPage() {
  return (
    <>
      <Header />
      <CreatorsPageContent />
      <Footer />
      <CreatorsPageScripts />
    </>
  );
}

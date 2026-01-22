import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePageContent from "../components/HomePageContent";
import Scripts from "../components/Scripts";
import HomePageScripts from "../components/HomePageScripts";

export const metadata: Metadata = {
  title: "Supreme Coach | The Ultimate Platform for Creators",
  description:
    "The ultimate platform for creators to monetize their content and grow their audience.",
  openGraph: {
    title: "Supreme Coach | The Ultimate Platform for Creators",
    description:
      "The ultimate platform for creators to monetize their content and grow their audience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supreme Coach | The Ultimate Platform for Creators",
    description:
      "The ultimate platform for creators to monetize their content and grow their audience.",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <HomePageContent />
      <Footer />
      <HomePageScripts />
      <Scripts />
    </>
  );
}

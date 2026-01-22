import SignupPageContent from "../../components/SignupPageContent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata = {
  title: "Get Started | Supreme Coach",
  description: "Pick your role to get started",
};

export default function SignupPage() {
  return (
    <>
      <Header />
      <SignupPageContent />
      <Footer />
    </>
  );
}


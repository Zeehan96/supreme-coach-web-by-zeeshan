import BlogPageContent from "../../components/BlogPageContent";
import BlogPageScripts from "../../components/BlogPageScripts";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata = {
    title: "The Supreme Coach Stories",
    description:
        "Everything anyone needs to know about the creator-life. From the team powering it.",
};

export default function Stories() {
    return (
        <>
            <Header />
            <BlogPageContent type="stories" />
            <BlogPageScripts type="stories" />
            <Footer />
        </>
    );
}



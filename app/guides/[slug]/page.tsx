import { Metadata } from "next";
import Header from "../../../components/Header";
import GuidePostPageContent from "../../../components/GuidePostPageContent";
import GuidePostPageScripts from "../../../components/GuidePostPageScripts";
import Footer from "../../../components/Footer";

// Static params for known guide posts
export function generateStaticParams() {
  return [{ slug: "getting-started-with-creator-marketing" }];
}

// Generate metadata for each guide post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Guide post metadata mapping
  const guideMetadata: Record<
    string,
    {
      title: string;
      description: string;
      image: string;
      publishedTime: string;
      modifiedTime: string;
    }
  > = {
    "getting-started-with-creator-marketing": {
      title:
        "Getting Started With Creator Marketing | Supreme Coach Guides",
      description:
        "Learn how to get started with creator marketing and build successful partnerships",
      image: "",
      publishedTime: "2024-03-05",
      modifiedTime: "2024-03-08",
    },
  };

  const metadata = guideMetadata[slug] || {
    title: "Guide Post | Supreme Coach",
    description: "Read our latest guide",
    image: "",
    publishedTime: "",
    modifiedTime: "",
  };

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "article",
      url: `https://www.supremecoach.xyz/guides/${slug}`,
      siteName: "Supreme Coach",
      images: metadata.image ? [{ url: metadata.image }] : [],
      publishedTime: metadata.publishedTime,
      modifiedTime: metadata.modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: metadata.image ? [metadata.image] : [],
    },
  };
}

export default async function GuidePost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <Header />
      <GuidePostPageContent slug={slug} />
      <GuidePostPageScripts />
      <Footer />
    </>
  );
}


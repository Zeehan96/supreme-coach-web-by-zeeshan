import { Metadata } from "next";
import Header from "../../../components/Header";
import BlogPostPageScripts from "../../../components/BlogPostPageScripts";
import Footer from "../../../components/Footer";

// Static params for known story posts
export function generateStaticParams() {
    return [{ slug: "5-tips-to-run-newsletter-marketing-campaigns" }];
}

// Generate metadata for each story post
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    // Story post metadata mapping
    const storyMetadata: Record<
        string,
        {
            title: string;
            description: string;
            image: string;
            publishedTime: string;
            modifiedTime: string;
        }
    > = {
        "5-tips-to-run-newsletter-marketing-campaigns": {
            title:
                "5 Tips to run Newsletter Marketing campaigns | Supreme Coach Stories",
            description:
                "Create successful newsletter marketing campaigns that convert more customers",
            image: "",
            publishedTime: "2024-03-05",
            modifiedTime: "2024-03-08",
        },
    };

    const metadata = storyMetadata[slug] || {
        title: "Story Post | Supreme Coach",
        description: "Read our latest story post",
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
            url: `https://www.supremecoach.xyz/stories/${slug}`,
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

export default async function StoryPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <>
            <Header />
            {/* <BlogPostPageContent slug={slug} /> */}
            <section className="section-blog-post-hero">
                <div className="page-padding">
                    <div className="padding-section-medium">
                        <article className="container-large">
                            <div className="post-hero_component">
                                <div className="post-hero_backlink">
                                    <div className="margin-bottom margin-custom1">
                                        <a href="/stories" className="backlink-wrapper w-inline-block">
                                            <img
                                                src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf93795aa0049_Backward%20Arrow.svg"
                                                loading="lazy"
                                                alt="Left arrow illustration"
                                                className="backlink_image"
                                            />
                                            <div className="text-style-label is-medium">
                                                back to stories
                                            </div>
                                        </a>
                                        <div className="w-embed">
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        "\n.blog-post-hero_image {\naspect-ratio: 16/9;\n\n}\n",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="margin-bottom margin-custom1">
                                    <div className="text-align-center">
                                        <h1 className="heading-style-h2 main-hero-heading">
                                            Implosions and Explosions: Rebuilding Advertising for the
                                            Fragmented Media Era
                                        </h1>
                                    </div>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <div className="content-meta_wrapper">
                                        <div className="text-style-label is-medium margin-right margin-xsmall">
                                            January 16, 2025
                                        </div>
                                        <div className="text-style-label is-medium margin-right margin-xsmall">
                                            •
                                        </div>
                                        <div className="text-style-label is-medium margin-right margin-xxsmall">
                                            10
                                        </div>
                                        <div className="text-style-label is-medium margin-right margin-xxsmall">
                                            min read
                                        </div>
                                    </div>
                                </div>
                                <div className="margin-bottom margin-medium">
                                    <div className="post-author_component">
                                        <img
                                            loading="lazy"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6385d209fa48883efa8cfcf7_Headshot2.avif"
                                            sizes="100vw"
                                            srcSet="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6385d209fa48883efa8cfcf7_Headshot2-p-500.avif 500w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6385d209fa48883efa8cfcf7_Headshot2-p-800.avif 800w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6385d209fa48883efa8cfcf7_Headshot2.avif 1697w"
                                            className="author_headshot margin-right margin-xsmall"
                                        />
                                        <div className="text-style-label is-medium margin-right margin-xxsmall">
                                            by
                                        </div>
                                        <div className="text-style-label is-medium margin-right margin-xxsmall">
                                            Filip
                                        </div>
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    width="Auto"
                                    alt="Implosions and Explosions: Rebuilding Advertising for the Fragmented Media Era"
                                    src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions.png"
                                    sizes="100vw"
                                    srcSet="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions-p-500.png 500w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions-p-800.png 800w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions-p-1080.png 1080w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions-p-1600.png 1600w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions-p-2000.png 2000w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions.png 2240w"
                                    className="post-hero_image"
                                />
                                <div className="w-embed">
                                    <style
                                        dangerouslySetInnerHTML={{
                                            __html: "\n.post-hero_image {\naspect-ratio: 16/9;\n}\n",
                                        }}
                                    />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <div className="section_stories-content">
                <div className="padding-global padding-section-medium blog">
                    <div className="container-large">
                        <div className="blog_outer">
                            <div className="stories_content">
                                <div className="stories_body">
                                    <div
                                        id="w-node-_00550585-1c19-edfb-0ee1-5fb25c7c294e-896bf3b3"
                                        className="stories_rich-text-wrapper"
                                    >
                                        <div
                                            fs-toc-offsettop="5rem"
                                            fs-toc-element="contents"
                                            className="stories_richtext w-richtext"
                                        >
                                            <p>
                                                Media is imploding and exploding - at the same time.
                                            </p>
                                            <p>
                                                In the past two decades, the cost of publishing has gone
                                                to near-zero - spawning an explosion of millions of
                                                grassroots creators. At the same time, traditional media
                                                outlets like CNN and The New York Times are imploding -
                                                unravelling into an exodus of old-media personalities
                                                going direct to consumer. Put these two together and the
                                                decade ahead looks to be radically different from the
                                                past 1,000 years of media: fragmented.
                                            </p>
                                            <p>
                                                What does the future of these digital media businesses
                                                look like?
                                            </p>
                                            <p>
                                                In this blog I dive into how we got here, what lies
                                                ahead, and why we need to re-build advertising to
                                                support the creators and media companies of the
                                                fragmented media era.
                                            </p>
                                            <p>‍</p>
                                            <div
                                                id="the-building-blocks-of-a-media-business"
                                                style={{ scrollMarginTop: "5rem" }}
                                            >
                                                <h2>The building blocks of a media business</h2>
                                                <p>
                                                    Before we begin, here's a quick primer on media.
                                                    Through all eras - the business of media has been the
                                                    same model built on these 4 building blocks:
                                                    production, distribution, content sales, and
                                                    advertising. Production and distribution to get your
                                                    media out there - direct sales and advertising to
                                                    monetize it.
                                                </p>
                                                <figure
                                                    style={{ maxWidth: "3840pxpx" }}
                                                    className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                                                >
                                                    <div>
                                                        <img
                                                            src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e6aa11c6093cd0c20f_67892dd6563185742965c6be_Group%252052585.png"
                                                            loading="lazy"
                                                            alt=""
                                                        />
                                                    </div>
                                                </figure>
                                                <p>
                                                    For example, here's how 3 typical newspaper, news
                                                    channel, and consumer streaming businesses work:
                                                </p>
                                                <figure
                                                    style={{ maxWidth: "3840pxpx" }}
                                                    className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                                                >
                                                    <div>
                                                        <img
                                                            src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e7aa11c6093cd0c27e_67892e0c9ad3a0aa0bfa1306_Group%252052590.png"
                                                            loading="lazy"
                                                            alt=""
                                                        />
                                                    </div>
                                                </figure>
                                                <p>Alright, let's go.</p>
                                                <p>‍</p>
                                            </div>
                                            {/* Rest of content continues exactly as in blog detail page */}
                                            <p>
                                                This is the same content structure as the blog detail
                                                page. The full content would continue here with all the
                                                sections, images, and formatting exactly as in the blog
                                                version.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="stories_sidebar">
                                <div className="sticky-toc-wrapper">
                                    <div className="fs-toc_sidebar toc">
                                        <div className="toc_header">On this page</div>
                                        <div className="fs-toc_link-content">
                                            <div className="fs-toc_link-wrapper is-h2">
                                                <a
                                                    href="#the-building-blocks-of-a-media-business"
                                                    className="fs-toc_link w-inline-block"
                                                >
                                                    <div fs-toc-element="link">
                                                        The building blocks of a media business
                                                    </div>
                                                </a>
                                                <div
                                                    fs-toc-element="ix-trigger"
                                                    id="w-node-_00550585-1c19-edfb-0ee1-5fb25c7c298b-896bf3b3"
                                                    className="fs-toc_h-trigger"
                                                />
                                            </div>
                                            {/* More TOC items would continue here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BlogPostPageScripts />
            <Footer />
        </>
    );
}

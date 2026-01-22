"use client";

import Link from "next/link";
import { useEffect } from "react";

interface GuidePostPageContentProps {
  slug: string;
}

// Guide post data - this would typically come from a CMS or database
const guidePosts: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    author: string;
    heroImage: string;
    content: string;
  }
> = {
  "getting-started-with-creator-marketing": {
    title: "Getting Started With Creator Marketing",
    date: "March 5, 2024",
    readTime: "6",
    author: "Supreme Coach Team",
    heroImage: "https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions.png",
    content: `
      <h2>Introduction</h2>
      <p>Creator marketing has become one of the most effective ways to reach and engage with your target audience. By partnering with content creators who align with your brand values, you can build authentic connections and drive meaningful results.</p>
      <p>‍</p>
      <h2>1. Understanding Creator Marketing</h2>
      <figure style="max-width:100%" class="w-richtext-align-center w-richtext-figure-type-image">
        <div><img src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions.png" loading="lazy" alt="Understanding Creator Marketing"/></div>
      </figure>
      <p>Creator marketing involves collaborating with content creators—including influencers, bloggers, podcasters, and newsletter writers—to promote your brand or products. Unlike traditional advertising, creator marketing leverages the trust and authenticity that creators have built with their audiences.</p>
      <p>Key benefits include:</p>
      <ul role="list">
        <li>Authentic brand storytelling</li>
        <li>Access to engaged, niche audiences</li>
        <li>Higher conversion rates than traditional ads</li>
        <li>Long-term brand partnerships</li>
      </ul>
      <p>‍</p>
      <h2>2. Finding the Right Creators</h2>
      <figure style="max-width:100%" class="w-richtext-align-center w-richtext-figure-type-image">
        <div><img src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions.png" loading="lazy" alt="Finding the Right Creators"/></div>
      </figure>
      <p>Not all creators are created equal. When selecting creators for your campaigns, consider:</p>
      <ul role="list">
        <li><strong>Audience alignment:</strong> Does the creator's audience match your target demographic?</li>
        <li><strong>Engagement rates:</strong> Look for creators with high engagement, not just large followings</li>
        <li><strong>Content quality:</strong> The creator's content should reflect your brand standards</li>
        <li><strong>Values alignment:</strong> Ensure the creator's values align with your brand</li>
      </ul>
      <p>‍</p>
      <h2>3. Building Successful Partnerships</h2>
      <figure style="max-width:100%" class="w-richtext-align-center w-richtext-figure-type-image">
        <div><img src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions.png" loading="lazy" alt="Building Successful Partnerships"/></div>
      </figure>
      <p>Successful creator partnerships are built on trust, clear communication, and mutual value. Here's how to foster strong relationships:</p>
      <ul role="list">
        <li><strong>Set clear expectations:</strong> Define deliverables, timelines, and compensation upfront</li>
        <li><strong>Give creative freedom:</strong> Trust creators to know their audience best</li>
        <li><strong>Provide resources:</strong> Share brand guidelines, product information, and assets</li>
        <li><strong>Measure and optimize:</strong> Track performance and provide feedback for future campaigns</li>
      </ul>
      <p>‍</p>
      <h2>4. Measuring Success</h2>
      <figure style="max-width:100%" class="w-richtext-align-center w-richtext-figure-type-image">
        <div><img src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions.png" loading="lazy" alt="Measuring Success"/></div>
      </figure>
      <p>To measure the success of your creator marketing campaigns, track these key metrics:</p>
      <ul role="list">
        <li>Reach and impressions</li>
        <li>Engagement rates (likes, comments, shares)</li>
        <li>Click-through rates (CTR)</li>
        <li>Conversion rates</li>
        <li>Return on investment (ROI)</li>
      </ul>
      <p>Use UTM parameters and dedicated landing pages to accurately attribute results to specific creator partnerships.</p>
      <p>‍</p>
      <h2>5. Best Practices</h2>
      <figure style="max-width:100%" class="w-richtext-align-center w-richtext-figure-type-image">
        <div><img src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions.png" loading="lazy" alt="Best Practices"/></div>
      </figure>
      <p>Follow these best practices to maximize your creator marketing success:</p>
      <ul role="list">
        <li><strong>Start small:</strong> Begin with a few creators and scale based on results</li>
        <li><strong>Diversify your portfolio:</strong> Work with creators across different platforms and niches</li>
        <li><strong>Build long-term relationships:</strong> Repeat partnerships often yield better results</li>
        <li><strong>Stay compliant:</strong> Ensure all partnerships follow FTC guidelines and disclosure requirements</li>
      </ul>
      <p>‍</p>
      <h2>Conclusion</h2>
      <p>Creator marketing offers a powerful way to connect with audiences authentically. By finding the right creators, building strong partnerships, and measuring your results, you can create successful campaigns that drive real business outcomes.</p>
      <p>Ready to get started? <a href="/get-access">Connect with top creators on Supreme Coach</a> and begin building your creator marketing strategy today.</p>
    `,
  },
};

// Related guides data
const relatedGuides = [
  {
    slug: "advanced-creator-marketing-strategies",
    title: "Advanced Creator Marketing Strategies",
    date: "April 10, 2024",
    readTime: "8",
    image: "https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions.png",
  },
  {
    slug: "measuring-creator-marketing-roi",
    title: "Measuring Creator Marketing ROI",
    date: "May 15, 2024",
    readTime: "5",
    image: "https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions.png",
  },
];

export default function GuidePostPageContent({
  slug,
}: GuidePostPageContentProps) {
  const post = guidePosts[slug];

  useEffect(() => {
    // Any DOM-dependent logic for the guide post
  }, []);

  if (!post) {
    return (
      <div className="page-wrapper">
        <div className="main-wrapper">
          <section className="section-blog-post-hero">
            <div className="page-padding">
              <div className="padding-section-medium">
                <article className="container-large">
                  <div className="text-align-center">
                    <h1 className="heading-style-h2">Guide not found</h1>
                    <p className="text-size-medium">
                      The requested guide could not be found.
                    </p>
                    <Link
                      href="/guides"
                      className="button-dark w-inline-block"
                      style={{ marginTop: "2rem", display: "inline-flex" }}
                    >
                      <div>Back to Guides</div>
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="global-styles w-embed">
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* Guide post specific styles */
          .blog-post-hero_image {
            aspect-ratio: 16/9;
          }
          
          .stories_richtext h2 {
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            font-size: 1.75rem;
            font-weight: 600;
          }
          
          .stories_richtext p {
            margin-bottom: 1rem;
            line-height: 1.7;
          }
          
          .stories_richtext ul {
            margin-bottom: 1rem;
            padding-left: 1.5rem;
          }
          
          .stories_richtext li {
            margin-bottom: 0.5rem;
            line-height: 1.7;
          }
          
          .stories_richtext figure {
            margin: 2rem 0;
          }
          
          .stories_richtext img {
            max-width: 100%;
            border-radius: 12px;
          }
          
          .stories_richtext a {
            color: var(--sc-orange);
            text-decoration: underline;
          }
          
          .stories_richtext a:hover {
            opacity: 0.8;
          }

          .blog_outer {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          @media (min-width: 992px) {
            .blog_outer {
              grid-template-columns: 1fr 300px;
            }
          }

          .stories_content {
            max-width: 100%;
          }

          .blog-collection_wrapper {
            margin-top: 4rem;
            padding-top: 4rem;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
          }

          .blog-collection_list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
          }

          .main-card_wrapper {
            display: block;
            text-decoration: none;
            border-radius: 12px;
            overflow: hidden;
            background: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .main-card_wrapper:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          }

          .blog-card_image-wrap {
            aspect-ratio: 16/9;
            overflow: hidden;
          }

          .blog-card_image-wrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .blog-card_content-wrap {
            padding: 1.5rem;
          }

          .content-meta_wrapper {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
          }

          .backlink-wrapper {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            color: inherit;
            opacity: 0.7;
            transition: opacity 0.2s ease;
          }

          .backlink-wrapper:hover {
            opacity: 1;
          }

          .post-author_component {
            display: flex;
            align-items: center;
          }
        `,
          }}
        />
      </div>

      <main className="main-wrapper">
        {/* Guide Post Hero Section */}
        <section className="section-blog-post-hero">
          <div className="page-padding">
            <div className="padding-section-medium">
              <article className="container-large">
                <div className="post-hero_component">
                  {/* Back to Guides Link */}
                  <div className="post-hero_backlink">
                    <div className="margin-bottom margin-custom1">
                      <Link
                        href="/guides"
                        className="backlink-wrapper w-inline-block"
                      >
                        <div className="text-style-label is-medium">
                          ← back to guides
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="margin-bottom margin-custom1">
                    <div className="text-align-center">
                      <h1 className="heading-style-h2 main-hero-heading">
                        {post.title}
                      </h1>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="margin-bottom margin-small">
                    <div
                      className="content-meta_wrapper"
                      style={{ justifyContent: "center" }}
                    >
                      <div className="text-style-label is-medium margin-right margin-xsmall">
                        {post.date}
                      </div>
                      <div className="text-style-label is-medium margin-right margin-xsmall">
                        •
                      </div>
                      <div className="text-style-label is-medium margin-right margin-xxsmall">
                        {post.readTime}
                      </div>
                      <div className="text-style-label is-medium margin-right margin-xxsmall">
                        min read
                      </div>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="margin-bottom margin-medium">
                    <div
                      className="post-author_component"
                      style={{ justifyContent: "center" }}
                    >
                      <div className="text-style-label is-medium margin-right margin-xxsmall">
                        by
                      </div>
                      <div className="text-style-label is-medium margin-right margin-xxsmall">
                        {post.author}
                      </div>
                    </div>
                  </div>

                  {/* Hero Image */}
                  <div className="margin-bottom margin-large">
                    <div
                      className="blog-post-hero_image"
                      style={{ borderRadius: "16px", overflow: "hidden" }}
                    >
                      <img
                        src={post.heroImage}
                        alt={post.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Guide Content Section */}
        <div className="section_stories-content">
          <div className="padding-global padding-section-medium blog">
            <div className="container-large">
              <div className="blog_outer">
                <div className="stories_content">
                  <div className="stories_body">
                    <div className="stories_rich-text-wrapper">
                      <div
                        className="stories_richtext w-richtext"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      />
                    </div>
                  </div>
                </div>

                {/* Table of Contents Sidebar (optional) */}
                <aside className="hide-tablet">
                  <div style={{ position: "sticky", top: "120px" }}>
                    <div className="text-style-label is-medium margin-bottom margin-small">
                      Table of Contents
                    </div>
                    <nav className="toc-nav">
                      {/* TOC items would be generated dynamically */}
                    </nav>
                  </div>
                </aside>
              </div>

              {/* Related Guides Section */}
              <div className="blog-collection_wrapper">
                <div className="margin-bottom margin-medium">
                  <h2 className="heading-style-h4">Related Guides</h2>
                </div>
                <div className="blog-collection_list" role="list">
                  {relatedGuides.map((relatedGuide) => (
                    <div
                      key={relatedGuide.slug}
                      role="listitem"
                      className="main-card-collection_item"
                    >
                      <Link
                        href={`/guides/${relatedGuide.slug}`}
                        className="main-card_wrapper w-inline-block"
                      >
                        <div className="blog-card_image-wrap">
                          <img
                            src={relatedGuide.image}
                            alt={relatedGuide.title}
                            loading="lazy"
                          />
                        </div>
                        <div className="blog-card_content-wrap">
                          <div className="blog-content_wrapper">
                            <div className="margin-bottom margin-xsmall">
                              <div className="margin-top margin-small">
                                <div className="content-meta_wrapper margin-bottom margin-xsmall">
                                  <div className="text-style-label is-small margin-right margin-xsmall">
                                    {relatedGuide.date}
                                  </div>
                                  <div className="text-style-label is-small margin-right margin-xsmall">
                                    •
                                  </div>
                                  <div className="text-style-label is-small margin-right margin-xxsmall">
                                    {relatedGuide.readTime}
                                  </div>
                                  <div className="text-style-label is-small">
                                    min read
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h3 className="heading-style-h5">
                              {relatedGuide.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


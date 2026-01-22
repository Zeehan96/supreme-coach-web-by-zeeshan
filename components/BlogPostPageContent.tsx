"use client";

import Link from "next/link";
import { useEffect } from "react";

interface BlogPostPageContentProps {
  slug: string;
}

// Blog post data - this would typically come from a CMS or database
const blogPosts: Record<
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
  "5-tips-to-run-newsletter-marketing-campaigns": {
    title: "5 Tips to run Newsletter Marketing campaigns",
    date: "March 5, 2024",
    readTime: "6",
    author: "Filip",
    heroImage: "/images/placeholder.png",
    content: `
      <h2>Introduction</h2>
      <p>Newsletter marketing is a great way to achieve high returns and additional brand benefits from being associated with quality media brands and creators. Many marketers use this channel to drive above-market returns (and lower CPMs). However, newsletter performance can take a lot of time, and results can vary. That's why we've collected 5 tips and best practices to help you master your newsletter marketing campaigns and publish the best newsletter ads in the game!</p>
      <p>‍</p>
      <h2>1. Set your targets and goals</h2>
      <figure style="max-width:100%" class="w-richtext-align-center w-richtext-figure-type-image">
        <div><img src="/images/placeholder.png" loading="lazy" alt="Set your targets and goals"/></div>
      </figure>
      <p>Before diving into any newsletter campaign, it's crucial to define your goals. Are you looking to increase brand awareness, drive traffic to your website, or generate leads?</p>
      <p>Setting clear, measurable targets will help you evaluate the success of your campaigns and make data-driven decisions. Consider factors like:</p>
      <ul role="list">
        <li>Target audience demographics</li>
        <li>Expected conversion rates</li>
        <li>Budget allocation</li>
        <li>Timeline for achieving results</li>
      </ul>
      <p>‍</p>
      <h2>2. Choose the right newsletters</h2>
      <figure style="max-width:100%" class="w-richtext-align-center w-richtext-figure-type-image">
        <div><img src="/images/placeholder.png" loading="lazy" alt="Choose the right newsletters"/></div>
      </figure>
      <p>Not all newsletters are created equal. When selecting newsletters for your campaign, consider:</p>
      <ul role="list">
        <li><strong>Audience alignment:</strong> Does the newsletter's readership match your target demographic?</li>
        <li><strong>Engagement rates:</strong> Look for newsletters with high open rates and click-through rates</li>
        <li><strong>Content quality:</strong> The newsletter's content should complement your brand message</li>
        <li><strong>Frequency:</strong> Consider how often the newsletter is sent and whether that aligns with your campaign goals</li>
      </ul>
      <p>‍</p>
      <h2>3. Craft compelling ad copy</h2>
      <figure style="max-width:100%" class="w-richtext-align-center w-richtext-figure-type-image">
        <div><img src="/images/placeholder.png" loading="lazy" alt="Craft compelling ad copy"/></div>
      </figure>
      <p>Your ad copy needs to grab attention and drive action. Here are some tips for creating effective newsletter ads:</p>
      <ul role="list">
        <li><strong>Hook them early:</strong> Start with an attention-grabbing headline</li>
        <li><strong>Keep it concise:</strong> Respect readers' time with clear, focused messaging</li>
        <li><strong>Include a clear CTA:</strong> Tell readers exactly what you want them to do</li>
        <li><strong>Match the tone:</strong> Align your copy style with the newsletter's voice</li>
      </ul>
      <p>‍</p>
      <h2>4. Track and measure results</h2>
      <figure style="max-width:100%" class="w-richtext-align-center w-richtext-figure-type-image">
        <div><img src="/images/placeholder.png" loading="lazy" alt="Track and measure results"/></div>
      </figure>
      <p>Measuring your campaign performance is essential for optimization. Key metrics to track include:</p>
      <ul role="list">
        <li>Click-through rates (CTR)</li>
        <li>Conversion rates</li>
        <li>Cost per acquisition (CPA)</li>
        <li>Return on ad spend (ROAS)</li>
        <li>Brand lift metrics</li>
      </ul>
      <p>Use UTM parameters and dedicated landing pages to accurately attribute results to specific newsletter placements.</p>
      <p>‍</p>
      <h2>5. Build long-term relationships</h2>
      <figure style="max-width:100%" class="w-richtext-align-center w-richtext-figure-type-image">
        <div><img src="/images/placeholder.png" loading="lazy" alt="Build long-term relationships"/></div>
      </figure>
      <p>The most successful newsletter marketing strategies are built on lasting partnerships. Consider:</p>
      <ul role="list">
        <li><strong>Negotiate package deals:</strong> Multi-placement commitments often come with better rates</li>
        <li><strong>Collaborate on content:</strong> Work with newsletter creators to develop native-feeling content</li>
        <li><strong>Share insights:</strong> Provide feedback that helps both parties improve</li>
        <li><strong>Stay consistent:</strong> Regular placements build familiarity and trust with the audience</li>
      </ul>
      <p>‍</p>
      <h2>Conclusion</h2>
      <p>Newsletter marketing offers a unique opportunity to reach engaged audiences in a trusted environment. By following these five tips—setting clear goals, choosing the right partners, crafting compelling copy, tracking results, and building relationships—you'll be well on your way to running successful newsletter campaigns.</p>
      <p>Ready to scale your newsletter marketing? <a href="/get-access">Get started with Supreme Coach</a> and connect with top newsletter creators today.</p>
    `,
  },
};

// Related posts data
const relatedPosts = [
  {
    slug: "how-chase-scales-brand-partnerships-seamlessly-with-Supreme-Coach",
    title: "How Chase Scales Brand Partnerships Seamlessly with Supreme Coach",
    date: "October 16, 2025",
    readTime: "3",
    image: "/images/placeholder.png",
  },
  {
    slug: "how-to-find-youtube-influencers",
    title: "How to Find YouTube Influencers for Your Brand",
    date: "September 24, 2024",
    readTime: "8",
    image: "/images/placeholder.png",
  },
  {
    slug: "how-to-find-podcast-sponsors",
    title: "How to Find Podcast Sponsors: A Complete Guide",
    date: "August 15, 2024",
    readTime: "10",
    image: "/images/placeholder.png",
  },
];

export default function BlogPostPageContent({
  slug,
}: BlogPostPageContentProps) {
  const post = blogPosts[slug];

  useEffect(() => {
    // Any DOM-dependent logic for the blog post
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
                    <h1 className="heading-style-h2">Blog post not found</h1>
                    <p className="text-size-medium">
                      The requested blog post could not be found.
                    </p>
                    <Link
                      href="/blog"
                      className="button-dark w-inline-block"
                      style={{ marginTop: "2rem", display: "inline-flex" }}
                    >
                      <div>Back to Blog</div>
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
          /* Blog post specific styles */
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
        {/* Blog Post Hero Section */}
        <section className="section-blog-post-hero">
          <div className="page-padding">
            <div className="padding-section-medium">
              <article className="container-large">
                <div className="post-hero_component">
                  {/* Back to Blog Link */}
                  <div className="post-hero_backlink">
                    <div className="margin-bottom margin-custom1">
                      <Link
                        href="/blog"
                        className="backlink-wrapper w-inline-block"
                      >
                        <div className="text-style-label is-medium">
                          ← back to blog
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

        {/* Blog Content Section */}
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

              {/* Related Posts Section */}
              <div className="blog-collection_wrapper">
                <div className="margin-bottom margin-medium">
                  <h2 className="heading-style-h4">Related Articles</h2>
                </div>
                <div className="blog-collection_list" role="list">
                  {relatedPosts.map((relatedPost) => (
                    <div
                      key={relatedPost.slug}
                      role="listitem"
                      className="main-card-collection_item"
                    >
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="main-card_wrapper w-inline-block"
                      >
                        <div className="blog-card_image-wrap">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            loading="lazy"
                          />
                        </div>
                        <div className="blog-card_content-wrap">
                          <div className="blog-content_wrapper">
                            <div className="margin-bottom margin-xsmall">
                              <div className="margin-top margin-small">
                                <div className="content-meta_wrapper margin-bottom margin-xsmall">
                                  <div className="text-style-label is-small margin-right margin-xsmall">
                                    {relatedPost.date}
                                  </div>
                                  <div className="text-style-label is-small margin-right margin-xsmall">
                                    •
                                  </div>
                                  <div className="text-style-label is-small margin-right margin-xxsmall">
                                    {relatedPost.readTime}
                                  </div>
                                  <div className="text-style-label is-small">
                                    min read
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h3 className="heading-style-h5">
                              {relatedPost.title}
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

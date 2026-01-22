"use client";

import Link from "next/link";
import { useEffect } from "react";

interface StoryPostPageContentProps {
  slug: string;
}

// Story post data - this would typically come from a CMS or database
const storyPosts: Record<
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
  "how-masters-of-work-runs-their-productivity-newsletter-ads-business-on-supreme-coach":
    {
      title:
        "How Masters of Work runs their productivity newsletter ads business on Supreme Coach",
      date: "January 10, 2024",
      readTime: "5",
      author: "Filip",
      heroImage:
        "https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions.png",
      content: `
      <h2>About Masters of Work</h2>
      <p>Masters of Work is an AI and productivity newsletter focused on sharing tools and tricks to help people automate their work, save time, and build better workflows.</p>
      <p>‍</p>
      <h2>How they use Supreme Coach</h2>
      <p>Masters of Work uses Supreme Coach to manage inbound sponsorship requests, streamline campaign workflows, and keep track of all creator–brand communication in one shared place.</p>
      <ul role="list">
        <li>Centralized campaign management</li>
        <li>Automated briefing and invoicing</li>
        <li>Clear performance tracking for each sponsor</li>
      </ul>
      <p>‍</p>
      <h2>The results</h2>
      <p>By moving their operations into Supreme Coach, Masters of Work reduced admin time per campaign and unlocked more inventory across their placements.</p>
    `,
    },
  "how-superpower-daily-makes-5-figures-with-supreme-coach": {
    title: "How Superpower Daily makes 5 figures with Supreme Coach",
    date: "February 5, 2024",
    readTime: "4",
    author: "Filip",
    heroImage:
      "https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/670e49ac377e95ea4640304d_Creative%2010.png",
    content: `
      <h2>About Superpower Daily</h2>
      <p>Superpower Daily is a ChatGPT extension and daily newsletter, offering the latest in AI news, tools, and innovations.</p>
      <p>‍</p>
      <h2>Scaling revenue with Supreme Coach</h2>
      <p>With Supreme Coach, Superpower Daily can package newsletter inventory, track sponsors, and run back-to-back campaigns with minimal manual work.</p>
      <ul role="list">
        <li>Automated sponsor onboarding</li>
        <li>Pre-built campaign templates</li>
        <li>Unified reporting across all placements</li>
      </ul>
      <p>‍</p>
      <h2>Revenue impact</h2>
      <p>Superpower Daily turned their sponsorship channel into a repeatable, five-figure revenue stream with clear visibility on performance.</p>
    `,
  },
  "how-superhuman-built-the-largest-newsletter-ads-business-in-ai-with-supreme-coach":
    {
      title:
        "How Superhuman built the largest newsletter ads business in AI with Supreme Coach",
      date: "March 15, 2024",
      readTime: "4",
      author: "Filip",
      heroImage:
        "https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/653c0e0e9c1210087a008868_Attio%20Thumbnail.png",
      content: `
      <h2>About Superhuman</h2>
      <p>Superhuman is one of the biggest and fastest-growing AI newsletters globally, helping over 450,000 readers stay ahead of what's happening in AI.</p>
      <p>‍</p>
      <h2>Why they chose Supreme Coach</h2>
      <p>Superhuman adopted Supreme Coach to run a high-volume sponsorship operation across multiple newsletters and placements without sacrificing quality or control.</p>
      <ul role="list">
        <li>Structured pipeline for sponsors</li>
        <li>Collaborative workflows across their team</li>
        <li>Clear overview of forecasted and booked inventory</li>
      </ul>
      <p>‍</p>
      <h2>Scaling the largest AI newsletter ads business</h2>
      <p>With Supreme Coach, Superhuman can confidently manage a large roster of sponsors, keep campaigns on track, and continue scaling their ad business.</p>
    `,
    },
};

// Related stories data
const relatedStories = [
  {
    slug: "how-superpower-daily-makes-5-figures-with-supreme-coach",
    title: "How Superpower Daily makes 5 figures with Supreme Coach",
    date: "February 5, 2024",
    readTime: "4",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/670e49ac377e95ea4640304d_Creative%2010.png",
  },
  {
    slug: "how-superhuman-built-the-largest-newsletter-ads-business-in-ai-with-supreme-coach",
    title:
      "How Superhuman built the largest newsletter ads business in AI with Supreme Coach",
    date: "March 15, 2024",
    readTime: "4",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/653c0e0e9c1210087a008868_Attio%20Thumbnail.png",
  },
];

export default function StoryPostPageContent({
  slug,
}: StoryPostPageContentProps) {
  const post = storyPosts[slug];

  useEffect(() => {
    // Any DOM-dependent logic for the story post
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
                    <h1 className="heading-style-h2">Story not found</h1>
                    <p className="text-size-medium">
                      The requested story could not be found.
                    </p>
                    <Link
                      href="/stories"
                      className="button-dark w-inline-block"
                      style={{ marginTop: "2rem", display: "inline-flex" }}
                    >
                      <div>Back to Stories</div>
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
          /* Story post specific styles */
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
        {/* Story Post Hero Section */}
        <section className="section-blog-post-hero">
          <div className="page-padding">
            <div className="padding-section-medium">
              <article className="container-large">
                <div className="post-hero_component">
                  {/* Back to Stories Link */}
                  <div className="post-hero_backlink">
                    <div className="margin-bottom margin-custom1">
                      <Link
                        href="/stories"
                        className="backlink-wrapper w-inline-block"
                      >
                        <div className="text-style-label is-medium">
                          ← back to stories
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

        {/* Story Content Section */}
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

              {/* Related Stories Section */}
              <div className="blog-collection_wrapper">
                <div className="margin-bottom margin-medium">
                  <h2 className="heading-style-h4">Related Stories</h2>
                </div>
                <div className="blog-collection_list" role="list">
                  {relatedStories.map((relatedStory) => (
                    <div
                      key={relatedStory.slug}
                      role="listitem"
                      className="main-card-collection_item"
                    >
                      <Link
                        href={`/stories/${relatedStory.slug}`}
                        className="main-card_wrapper w-inline-block"
                      >
                        <div className="blog-card_image-wrap">
                          <img
                            src={relatedStory.image}
                            alt={relatedStory.title}
                            loading="lazy"
                          />
                        </div>
                        <div className="blog-card_content-wrap">
                          <div className="blog-content_wrapper">
                            <div className="margin-bottom margin-xsmall">
                              <div className="margin-top margin-small">
                                <div className="content-meta_wrapper margin-bottom margin-xsmall">
                                  <div className="text-style-label is-small margin-right margin-xsmall">
                                    {relatedStory.date}
                                  </div>
                                  <div className="text-style-label is-small margin-right margin-xsmall">
                                    •
                                  </div>
                                  <div className="text-style-label is-small margin-right margin-xxsmall">
                                    {relatedStory.readTime}
                                  </div>
                                  <div className="text-style-label is-small">
                                    min read
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h3 className="heading-style-h5">
                              {relatedStory.title}
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



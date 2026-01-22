import { Metadata } from "next";
import Header from "../../../components/Header";
import BlogPostPageContent from "../../../components/BlogPostPageContent";
import BlogPostPageScripts from "../../../components/BlogPostPageScripts";
import Footer from "../../../components/Footer";

// Static params for known blog posts
export function generateStaticParams() {
  return [{ slug: "5-tips-to-run-newsletter-marketing-campaigns" }];
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Blog post metadata mapping
  const blogMetadata: Record<
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
        "5 Tips to run Newsletter Marketing campaigns | Supreme Coach Blog",
      description:
        "Create successful newsletter marketing campaigns that convert more customers",
      image: "",
      publishedTime: "2024-03-05",
      modifiedTime: "2024-03-08",
    },
  };

  const metadata = blogMetadata[slug] || {
    title: "Blog Post | Supreme Coach",
    description: "Read our latest blog post",
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
      url: `https://www.supremecoach.xyz/blog/${slug}`,
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

export default async function BlogPost({
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
                    <a href="/blog" className="backlink-wrapper w-inline-block">
                      <img
                        src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf93795aa0049_Backward%20Arrow.svg"
                        loading="lazy"
                        alt="Left arrow illustration"
                        className="backlink_image"
                      />
                      <div className="text-style-label is-medium">
                        back to blog
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
                          Before we begin, here’s a quick primer on media.
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
                          For example, here’s how 3 typical newspaper, news
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
                        <p>Alright, let’s go.</p>
                        <p>‍</p>
                      </div>
                      <div
                        id="the-oligopolistic-history-of-media"
                        style={{ scrollMarginTop: "5rem" }}
                      >
                        <h2>The oligopolistic history of media</h2>
                        <p>
                          Running a media business has always required assets
                          for production and distribution. In its earliest
                          forms, this quite literally meant owning a printing
                          factory and hiring distributors. Just like today -
                          people had stories and news to tell - but few had the
                          capital to both produce and distribute it.
                          Unfortunately this inequity of information production
                          would persist for centuries.
                        </p>
                        <p>
                          However, over time technology has been able to
                          innovate out some of the production and distribution
                          costs of media to make it more efficient to distribute
                          content <em>on a per person basis</em>. The most
                          notable technological revolutions included the
                          printing press, radio, and television. Concerningly,
                          looking at each of these 3 eras of innovation - each
                          still ended up captured by big media incumbents. Let’s
                          take a look at US Media in the 80s to early 2010s as
                          an example:
                        </p>
                        <figure
                          style={{ maxWidth: "3840pxpx" }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e7aa11c6093cd0c29f_6789330350d8677c101c3ee8_Concentration.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          As the visual above suggests, the US is one of the
                          worst examples. Radio control in the US has gone from
                          thousands of independent stations to 9 corporations
                          controlling 65% of US listeners. In television it’s
                          worse. In 1983, 90% of American Media was owned by 50
                          companies - by 2012 that number shrunk to 6. Despite
                          innovation, the oligopoly remained.
                        </p>
                        <p>Why?</p>
                        <p>
                          Despite great innovations to amplify distribution -
                          the production costs per listener were profitable -
                          but only at scale. The fixed costs of production were
                          still insurmountable for upstarts, and more
                          importantly: access to distribution was restricted.
                          Sorry to say, but regardless what stories your father
                          told you about ‘Rebel Radio’ broadcasting from a
                          basement in the 70s - without the proper licensing and
                          distribution agreements - big media ate them for
                          breakfast.
                        </p>
                        <figure
                          style={{ maxWidth: "1440pxpx" }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e7aa11c6093cd0c25b_6789333a636121e4c9044331_Succession.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                          <figcaption>
                            Big media’s opinion on grassroots radio stations
                          </figcaption>
                        </figure>
                        <p>
                          With this combination of cost base and distribution
                          control, being a media business in the 1900s entailed
                          either being a media empire - or being part of one.
                          However, in 1999 someone dropped a bomb at the castle
                          wall.
                        </p>
                        <p>Web 2.0.</p>
                        <p>‍</p>
                      </div>
                      <div
                        id="explosion-the-big-bang"
                        style={{ scrollMarginTop: "5rem" }}
                      >
                        <h2>Explosion - the big bang</h2>
                        <p>
                          <em>
                            If David Attenborough was a media fanatic - he’d
                            commentate this part.
                          </em>
                        </p>
                        <p>
                          The dawn of the internet and Web 2.0 plummeted the
                          fixed costs of media production - obliterating almost
                          any barriers to publishing in the developed world.
                          This gave birth to new life in media: content
                          creators.{" "}
                        </p>
                        <figure
                          style={{ maxWidth: "3840pxpx" }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e7aa11c6093cd0c227_6789353597c7464cf2758f34_Beast.jpeg"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          However, the impact of the internet wasn’t
                          instantaneous - creators didn’t storm big media like
                          the Bastille in 1789. Instead, the transition was
                          perhaps best described as a "leak in the big-media
                          dam".
                        </p>
                        <p>
                          However, within a decade of human creativity with
                          internet access, that leak turned into a full on
                          rapid.
                        </p>
                        <p>The big bang.</p>
                        <figure
                          style={{ maxWidth: "3840pxpx" }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e8aa11c6093cd0c300_678933c4e41a7905688a923d_Media%2520market%2520shift.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          The initial inhabitants of the new internet media
                          landscape were internet bloggers writing posts on
                          their self-hosted websites with the occasional JPEG.
                          However, as new enabling internet services and
                          platforms like Youtube, Instagram, Substack, and
                          Podcasts arrived - grassroots content creation
                          flourished. It’s impact on the average adult’s content
                          consumption was remarkable.
                        </p>
                        <p>
                          In 2005, as an American you would start your day
                          reading The New York Times for your morning coffee and
                          end it tuning in to NBC Nightly News with Brian
                          Williams after work. Today, that same American may
                          listen to a startup tech podcast on the subway to
                          work, and a Youtube breakdown of the intricacies of
                          the conflict in the Middle East while they cook.
                        </p>
                        <p>
                          Suddenly, Old Media’s grip on information and public
                          discourse was challenged with diversity of content at
                          unprecedented levels. From 9 television networks - you
                          could now go hyper-focused in any interest you have.
                          This great fragmentation of media happened on 2
                          dimensions: platform and topic. The video platform
                          that was television split into Youtube, Instagram,
                          TikTok, Twitter, and more. The same goes for written
                          formats - newspapers and magazines fragmented into
                          blogs, newsletters, and written social media. Within
                          these platforms the diversity of topics exploded -
                          exponentially increasing the variety of content
                          available to consumers.
                        </p>
                        <p>
                          When you map it out it looks like cell reproduction
                          and mutation - and it sort of was.
                        </p>
                        <figure
                          style={{ maxWidth: "6252pxpx" }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e8aa11c6093cd0c303_6789358ae3b424ad031cc2c5_Media%2520fragmentation.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          This fragmentation hasn’t happened just in news. It’s
                          everywhere, and led to some pretty wild niches. Here’s
                          some of my favorite examples:
                        </p>
                        <figure
                          style={{ maxWidth: "4168pxpx" }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e7aa11c6093cd0c2a2_678935e22d564932a271e31e_Examples.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>We went from 50 shades of grey to double rainbow.</p>
                        <p>‍</p>
                      </div>
                      <div
                        id="implosion-the-fall-of-big-media"
                        style={{ scrollMarginTop: "5rem" }}
                      >
                        <h2>Implosion - the fall of big media</h2>
                        <p>
                          As this access to a broader spectrum of information
                          reached the world in the 2010s - our public and media
                          institutions came under unprecedented scrutiny. Terms
                          like “Bought and paid for” became a death knell for
                          politicians and media houses alike. The people you saw
                          on TV weren’t telling you the news - they were giving
                          you their sponsors’ version of it. Worse yet, even if
                          they were telling the truth, nobody believed they
                          were. Thus began the implosion of American big media.
                        </p>
                        <figure
                          style={{ maxWidth: "1220pxpx" }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e6aa11c6093cd0c215_678936175abf17058d117f56_americans-trust-in-mass-media-1972-2023-.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          With this implosion - immensely talented people who
                          have spent their entire lives in journalism,
                          reporting, or broadcasting are facing a choice: stay
                          in the house that’s burning, or get out.
                        </p>
                        <p>They’re getting out.</p>
                        <p>
                          Tucker Carlson, Matt Taibi, Don Lemon, and Shannon
                          Sharpe all are examples of old media personalities who
                          fell at odds with the economic capture of their
                          previous institutions and went direct through
                          Newsletters, Podcasts, and Youtube channels. To many
                          people’s surprise - their audiences left Fox, CNN, and
                          the New York Times to go with them. Substack is even
                          founded on this premise.
                        </p>
                        <p>People follow people.</p>
                        <p>
                          This exodus of talent from old media into direct media
                          has added further fuel to the explosion and
                          fragmentation of media. The original grassroots
                          creators and the exodus of old media professionals are
                          now converging in what we call the Fragmented Media
                          Era.
                        </p>
                        <p>‍</p>
                      </div>
                      <div
                        id="the-persistence-of-scale-and-network-effects"
                        style={{ scrollMarginTop: "5rem" }}
                      >
                        <h2>The persistence of scale and network effects</h2>
                        <p>
                          Just like we learned with the dawn of Radio and
                          Television, this platform shift and wave of new
                          creators doesn’t mean that the inherent merits of
                          scale in media have disappeared.
                        </p>
                        <p>
                          The network effects of being a staple brand and their
                          impact on economics has introduced a new era of
                          digital-native media businesses such as Barstool,
                          MorningBrew, and 1440 to name a few. These initially
                          small single person shops found a core audience that
                          they served better than others, and were rewarded for
                          it. For example, today Barstool is valued at ~$600
                          million and was acquired by Disney (more to come on
                          this soon), similarly MorningBrew serves 4 million
                          subscribers doing over $50m in annual revenue. They’ve
                          swung into the network effect of brand and now behave
                          on very similar ways to old media - just on different
                          platforms.
                        </p>
                        <p>
                          So will network effects make the digital-era media
                          converge back to 9 big conglomerates?
                        </p>
                        <p>Probably not.</p>
                        <p>
                          Diversity of content mandates a need for authenticity.
                          The problem (or beauty) of passionate audiences is
                          that they’re passionate. If your content and partners
                          aren’t in line with your audience - you get discarded.
                          Penn Entertainment learned this when they were{" "}
                          <a href="https://variety.com/2023/digital/news/barstool-portnoy-gambling-licenses-denied-penn-1235691265/">
                            forced to sell Barstool back to Dave Portnoy
                          </a>{" "}
                          after Barstool’s content wasn’t suitable for their
                          regulated gambling interests.
                        </p>
                        <p>
                          Where exactly this media era will land on the scale of
                          consolidation and fragmentation is unsure - but it
                          will definitely be more fragmented than the media
                          we’ve seen the past centuries.
                        </p>
                        <p>‍</p>
                      </div>
                      <div
                        id="taking-a-step-back"
                        style={{ scrollMarginTop: "5rem" }}
                      >
                        <h2>Taking a step back</h2>
                        <p>
                          So 300 years have passed since the first newspaper -
                          and everything has changed. Yet, at the same time,
                          nothing has changed.{" "}
                        </p>
                        <p>
                          Media is an audience business. Throughout the shifts
                          of medium - the business has been the same: audiences.
                        </p>
                        <p>
                          <em>
                            So how do you finance these fragmented audience
                            businesses?
                          </em>
                        </p>
                        <p>‍</p>
                      </div>
                      <div
                        id="wherever-theres-an-audience-someone-will-pay-for-ads"
                        style={{ scrollMarginTop: "5rem" }}
                      >
                        <h2>
                          Wherever there’s an audience, someone will pay for ads
                        </h2>
                        <p>
                          Whether you were reading the Gazzetta Di Mantova (the
                          oldest newspaper in the world)&nbsp;or watching Mr.
                          Beast’s Youtube channel - a company will pay to get
                          your attention. The medium doesn’t matter, the
                          audience does. Take NASCAR as an example. The amount
                          of time spent looking at cars has rendered them
                          plastered in logos, and teams even being named after
                          sponsors. If people loved watching cows - there’d be
                          sponsors on them. If you’re curious, it would probably
                          look something like this:
                        </p>
                        <figure
                          style={{ maxWidth: "1024pxpx" }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e6aa11c6093cd0c212_6789366303f49f9ecf5e9b48_Cow.webp"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          Ads have historically been the easiest way to monetize
                          a media business - especially if your business doesn’t
                          reach critical mass. Our old friends at Gazzetta Di
                          Mantova today serve a meager audience of 20,000. Check
                          out how their front page looks today:
                        </p>
                        <figure
                          style={{ maxWidth: "3922pxpx" }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e7aa11c6093cd0c242_67893687337bad4c4982e70f_GAzzetta.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          “But ads suck - and destroy the experience. The
                          audience will leave.”
                        </p>
                        <p>
                          Yes, and no. Ads are annoying - but the average person
                          will go irrationally far out of their way to save
                          money - no matter the time or ads it costs.
                        </p>
                        <p>
                          Let’s look at the streaming wars of the past decade as
                          an example.
                        </p>
                        <p>‍</p>
                      </div>
                      <div
                        id="the-de-coupling-and-re-coupling-of-cable"
                        style={{ scrollMarginTop: "5rem" }}
                      >
                        <h2>The de-coupling and re-coupling of cable</h2>
                        <p>
                          <em>
                            Going direct and the subscriptionification of
                            everything.
                          </em>
                        </p>
                        <p>
                          In 2007 Netflix launched their DTC streaming service
                          with a catalog of merely 1,000 movies. And needless,
                          to say it was a pretty good idea.
                        </p>
                        <blockquote>
                          “Your profit is my opportunity” - Jeff Bezos
                        </blockquote>
                        <p>
                          The problem with good ideas is people want to join the
                          party. In the next 15 years, streaming has exploded
                          with Disney, HBO, Paramount, NBC, Amazon, CNN (may
                          they rest in peace), Discovery+, Hulu, and many more
                          wanting to get in on the action.
                        </p>
                        <p>
                          The problem: the consumer wallet only has a finite
                          carrying capacity.
                        </p>
                        <figure
                          style={{ maxWidth: "1586pxpx" }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e7aa11c6093cd0c25f_678936d8dd5804a5c6662b0b_CleanShot%25202025-01-16%2520at%252016.41.44%25402x.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          As a consumer, if you want to keep up with all
                          streaming content in the US today you’ll be paying
                          more than you previously did for cable. The promise of
                          direct streaming has ultimately fallen prey to siloed
                          IP library wars.
                        </p>
                        <figure
                          style={{ maxWidth: "768pxpx" }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e7aa11c6093cd0c22a_678936f39867fcc2f97cf01e_streamchurn.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          So how has this played out? Right now all the big
                          streamers are fighting high churn rates (4-12% per
                          month) which means they’ll be replacing their entire
                          user base every other year. Currently all providers
                          find themselves on a content spend and acquisition
                          re-cycling hamster wheel - and the only way out seems
                          to be consolidation. Being able to retain a customer
                          is hard when their wallet’s already strapped.
                          Streaming companies are therefore faced with the
                          predicament of spending more per customer - with no
                          top-line room in pricing.
                        </p>
                        <p>
                          So what does this mean? Streaming is converging back
                          to “cable”.
                        </p>
                        <p>
                          Fighting high churn and user replacement rates -{" "}
                          <a href="https://www.broadbandtvnews.com/2024/10/24/new-subscribers-taking-netflix-ads-tier-but-disney-gets-the-growth/">
                            Netflix and Disney are re-introducing an
                            ad-supported tier
                          </a>{" "}
                          to better monetize their content and capture the value
                          of the 50% of users that leave them every year. These
                          users want to watch Netflix - they’re just not willing
                          to pay out-of-pocket for it. So they’ll sell their
                          time and attention to some advertisers to pay for it.
                        </p>
                        <p>
                          Ok, so 400 years later and ads still exist - and
                          likely will continue to do so - especially for
                          fragmented media.
                        </p>
                        <p>‍</p>
                      </div>
                      <div
                        id="so-how-do-you-build-a-profitable-media-business-in-2025"
                        style={{ scrollMarginTop: "5rem" }}
                      >
                        <h2>
                          So how do you build a profitable media-business in
                          2025?
                        </h2>
                        <p>
                          The same lesson that Netflix is learning will hold
                          true for smaller creators: without a significant mass
                          of content and ability to retain subscribers -
                          ad-supported is the way to go. The problem for our
                          fragmented media friends is that the old guard like
                          Disney, HBO, and Fox have decades of advertiser
                          relationships, teams to uphold them, and systems to
                          run them.
                        </p>
                        <p>
                          <em>
                            So how does the future SMB media company build an
                            ads business?
                          </em>
                        </p>
                        <p>‍</p>
                      </div>
                      <div
                        id="the-ads-stack-for-new-media"
                        style={{ scrollMarginTop: "5rem" }}
                      >
                        <h2>The ads stack for new media</h2>
                        <p>
                          As seen in '
                          <a href="https://www.passionfroot.me/blog/creators-the-new-entrepreneurs">
                            Creators, The New Entrepreneurs'
                          </a>
                          , it takes a lot to compete with the media giants.
                          Fragmented media, means smaller audiences, which means
                          smaller revenues - hence smaller costs. These new
                          digital SMBs will need to do what larger companies do
                          operationally - but much cheaper.
                        </p>
                        <p>
                          Given publishing and distribution costs have largely
                          gone to near-zero - the last thing creators can do to
                          improve their cost position is make acquiring and
                          managing advertisers cheaper.
                        </p>
                        <p>
                          Initially, this has meant that these new media
                          businesses mortgage 50% of their business to platform
                          owners to subsidize their ads (Google Ads, AdSense,
                          Meta Ads). However, as they get larger they don’t want
                          to give 50% away to Google - they want to own their
                          ads business. This brings me to one of my favorite
                          features in the creator economy:
                        </p>
                        <figure
                          style={{ maxWidth: "1156pxpx" }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e7aa11c6093cd0c22d_6789372770b7afb3da67eb1e_paidpromo.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          The paid promotion tag is built into platforms. Big
                          tech has learned that for their creators to remain
                          happy, sharing profits on the platform’s ads isn’t
                          enough - they must allow them to own their ads
                          business too.
                        </p>
                        <p>
                          However, as any creator knows - running your own ads
                          business requires time, people, and tooling. So if you
                          really want to build a meaningful lean media business
                          in the 2020s - you need great tooling. At
                          Passionfroot, we believe the solution to this is a new
                          stack for ads tooling that is purpose-built for
                          creators and media companies.
                        </p>
                        <p>‍</p>
                        <div
                          id="why-were-bullish-on-the-fragmented-media-ad-space"
                          style={{ scrollMarginTop: "5rem" }}
                        >
                          <h3>
                            Why we’re bullish on the fragmented media ad space
                          </h3>
                          <p>
                            So, to recap: ads businesses are here to stay and
                            the media publishing landscape is more diverse than
                            ever. That’s great news for advertisers, consumers -
                            and the new publishers. Why?
                          </p>
                          <figure
                            style={{ maxWidth: "5760pxpx" }}
                            className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                          >
                            <div>
                              <img
                                src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e6aa11c6093cd0c20c_67893761be2465c9ab71f2e6_Eq1.png"
                                loading="lazy"
                                alt=""
                              />
                            </div>
                          </figure>
                          <p>
                            Diversity in content means ultra-focused audiences
                            and closer relationships. Rather than the Food
                            Network broadcasting you now have an abundance of
                            food creators. Cut and slice it by drinks, food,
                            country, budget, diet, or whatever you want -
                            there’s someone out there creating it.
                          </p>
                          <figure
                            style={{ maxWidth: "5760pxpx" }}
                            className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                          >
                            <div>
                              <img
                                src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/678937e7aa11c6093cd0c281_6789377552871edeb2de7217_Eq2.png"
                                loading="lazy"
                                alt=""
                              />
                            </div>
                          </figure>
                          <p>
                            People follow people, and they assign legitimacy to
                            the creators they follow. And more importantly, in
                            the{" "}
                            <a href="https://www.notion.so/Implosions-and-explosions-The-dawn-of-the-fragmented-media-era-11b3b198d2f64d3891b07ea53a9393ff?pvs=21">
                              Girardian theory
                            </a>
                            , they form their desires through them. The mimetic
                            nature of creator advertising and trust that they
                            hold is unique.
                          </p>
                          <blockquote>
                            “In 2024 - regardless what business you’re in - your
                            number 1 product is trust” - Mark Cuban on{" "}
                            <em>What Now? with Trevor Noah</em>
                          </blockquote>
                          <p>
                            You can’t trust Google Ads, Meta Ads, Linkedin Ads,
                            or Banner Ads - but you can trust a creator.
                          </p>
                          <p>
                            This is great news for creators. Doing bespoke
                            collabs and owning your ads business, creates better
                            value for your audience, and your sponsors. It’s
                            also great news for advertisers. Achieving
                            above-market returns on brand ad spend has never
                            been easier.
                          </p>
                          <figure
                            style={{ maxWidth: "5760pxpx" }}
                            className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                          >
                            <div>
                              <img
                                src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/67893eba57cf481bc9477437_6789379b03851b88d47752f3_Eq3.png"
                                loading="lazy"
                                alt=""
                              />
                            </div>
                          </figure>
                          <p>
                            Products are meant to enhance your life. Creators
                            that partner with the right brands and provide
                            actual value will be rewarded. At Passionfroot we
                            see this today - certain creators turn down 90% of
                            brand deals, and their audience’s love them for it.
                            The fragmented media era provides the biggest
                            opportunity to deliver value to consumers - if done
                            correctly.
                          </p>
                          <p>
                            Big dollars still go to the traditional channels,
                            but over time we believe <em>the smart dollars</em>{" "}
                            are and will continue to trickle down through the
                            diverse publisher base.
                          </p>
                          <p>
                            The problem here: advertisers can’t easily access
                            and deploy dollars in fragmented media at scale -
                            and creators don’t have time to manage their ads
                            business without jeopardizing their content. So we
                            just need one amendment to our formula above:
                          </p>
                          <figure
                            style={{ maxWidth: "3840pxpx" }}
                            className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                          >
                            <div>
                              <img
                                src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/67893bb60f5450e47ac09016_67893b280f5450e47abff8c6_Eq4.jpeg"
                                loading="lazy"
                                alt=""
                              />
                            </div>
                          </figure>
                          <p>
                            This is our proposition to creators and media
                            businesses: bring your advertiser acquisition cost
                            to zero, and automate your ad operations. Conversely
                            for advertisers: make creator advertisements as easy
                            as Google Ads.
                          </p>
                          <p>That’s it.</p>
                        </div>
                        <div
                          id="we-hope-to-see-you-out-there"
                          style={{ scrollMarginTop: "5rem" }}
                        >
                          <h3>We hope to see you out there!</h3>
                          <p>
                            At Passionfroot we’re here to help creators build
                            and own their ads business, and to help advertisers
                            access and deploy smart dollars in the new
                            fragmented media landscape.
                          </p>
                          <p>
                            If you’re a creator looking to automate and scale
                            your ads business - sign up to our waitlist{" "}
                            <a href="https://www.passionfroot.me/get-access">
                              here
                            </a>
                          </p>
                          <p>
                            If you’re an advertiser looking to build a leading
                            B2B or tech brand - sign up for Passionfroot{" "}
                            <a href="https://www.passionfroot.me/get-access-partner-network">
                              here
                            </a>
                            .
                          </p>
                          <p>See you soon.</p>
                          <p>‍</p>
                          <p>‍</p>
                          <p>‍</p>
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
                            {/*fs-toc-anchor*/}
                          </div>
                          <div className="fs-toc_link-wrapper is-h2">
                            <a
                              href="#the-oligopolistic-history-of-media"
                              className="fs-toc_link w-inline-block"
                            >
                              <div fs-toc-element="link">
                                The oligopolistic history of media
                              </div>
                            </a>
                            <div
                              fs-toc-element="ix-trigger"
                              id="w-node-_00550585-1c19-edfb-0ee1-5fb25c7c298b-896bf3b3"
                              className="fs-toc_h-trigger"
                            />
                            {/*fs-toc-anchor*/}
                          </div>
                          <div className="fs-toc_link-wrapper is-h2">
                            <a
                              href="#explosion-the-big-bang"
                              className="fs-toc_link w-inline-block"
                            >
                              <div fs-toc-element="link">
                                Explosion - the big bang
                              </div>
                            </a>
                            <div
                              fs-toc-element="ix-trigger"
                              id="w-node-_00550585-1c19-edfb-0ee1-5fb25c7c298b-896bf3b3"
                              className="fs-toc_h-trigger"
                            />
                            {/*fs-toc-anchor*/}
                          </div>
                          <div className="fs-toc_link-wrapper is-h2">
                            <a
                              href="#implosion-the-fall-of-big-media"
                              className="fs-toc_link w-inline-block"
                            >
                              <div fs-toc-element="link">
                                Implosion - the fall of big media
                              </div>
                            </a>
                            <div
                              fs-toc-element="ix-trigger"
                              id="w-node-_00550585-1c19-edfb-0ee1-5fb25c7c298b-896bf3b3"
                              className="fs-toc_h-trigger"
                            />
                            {/*fs-toc-anchor*/}
                          </div>
                          <div className="fs-toc_link-wrapper is-h2">
                            <a
                              href="#the-persistence-of-scale-and-network-effects"
                              className="fs-toc_link w-inline-block"
                            >
                              <div fs-toc-element="link">
                                The persistence of scale and network effects
                              </div>
                            </a>
                            <div
                              fs-toc-element="ix-trigger"
                              id="w-node-_00550585-1c19-edfb-0ee1-5fb25c7c298b-896bf3b3"
                              className="fs-toc_h-trigger"
                            />
                            {/*fs-toc-anchor*/}
                          </div>
                          <div className="fs-toc_link-wrapper is-h2">
                            <a
                              href="#taking-a-step-back"
                              className="fs-toc_link w-inline-block"
                            >
                              <div fs-toc-element="link">
                                Taking a step back
                              </div>
                            </a>
                            <div
                              fs-toc-element="ix-trigger"
                              id="w-node-_00550585-1c19-edfb-0ee1-5fb25c7c298b-896bf3b3"
                              className="fs-toc_h-trigger"
                            />
                            {/*fs-toc-anchor*/}
                          </div>
                          <div className="fs-toc_link-wrapper is-h2">
                            <a
                              href="#wherever-theres-an-audience-someone-will-pay-for-ads"
                              className="fs-toc_link w-inline-block"
                            >
                              <div fs-toc-element="link">
                                Wherever there’s an audience, someone will pay
                                for ads
                              </div>
                            </a>
                            <div
                              fs-toc-element="ix-trigger"
                              id="w-node-_00550585-1c19-edfb-0ee1-5fb25c7c298b-896bf3b3"
                              className="fs-toc_h-trigger"
                            />
                            {/*fs-toc-anchor*/}
                          </div>
                          <div className="fs-toc_link-wrapper is-h2">
                            <a
                              href="#the-de-coupling-and-re-coupling-of-cable"
                              className="fs-toc_link w-inline-block"
                            >
                              <div fs-toc-element="link">
                                The de-coupling and re-coupling of cable
                              </div>
                            </a>
                            <div
                              fs-toc-element="ix-trigger"
                              id="w-node-_00550585-1c19-edfb-0ee1-5fb25c7c298b-896bf3b3"
                              className="fs-toc_h-trigger"
                            />
                            {/*fs-toc-anchor*/}
                          </div>
                          <div className="fs-toc_link-wrapper is-h2">
                            <a
                              href="#so-how-do-you-build-a-profitable-media-business-in-2025"
                              className="fs-toc_link w-inline-block"
                            >
                              <div fs-toc-element="link">
                                So how do you build a profitable media-business
                                in 2025?
                              </div>
                            </a>
                            <div
                              fs-toc-element="ix-trigger"
                              id="w-node-_00550585-1c19-edfb-0ee1-5fb25c7c298b-896bf3b3"
                              className="fs-toc_h-trigger"
                            />
                            {/*fs-toc-anchor*/}
                          </div>
                          <div className="fs-toc_link-wrapper is-h2">
                            <a
                              href="#the-ads-stack-for-new-media"
                              className="fs-toc_link w-inline-block"
                            >
                              <div fs-toc-element="link">
                                The ads stack for new media
                              </div>
                            </a>
                            <div
                              fs-toc-element="ix-trigger"
                              id="w-node-_00550585-1c19-edfb-0ee1-5fb25c7c298b-896bf3b3"
                              className="fs-toc_h-trigger"
                            />
                            <div className="fs-toc_link-wrapper is-h3">
                              <a
                                href="#why-were-bullish-on-the-fragmented-media-ad-space"
                                className="fs-toc_link is-h3 w-inline-block"
                              >
                                <div fs-toc-element="link">
                                  Why we’re bullish on the fragmented media ad
                                  space
                                </div>
                              </a>
                            </div>
                            <div className="fs-toc_link-wrapper is-h3">
                              <a
                                href="#we-hope-to-see-you-out-there"
                                className="fs-toc_link is-h3 w-inline-block"
                              >
                                <div fs-toc-element="link">
                                  We hope to see you out there!
                                </div>
                              </a>
                            </div>
                            {/*fs-toc-anchor*/}
                          </div>
                          {/*fs-toc-anchor*/}
                        </div>
                      </div>
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

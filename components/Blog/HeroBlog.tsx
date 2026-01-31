import React from "react";

interface HeroBlogProps {
  type?: "blog" | "stories";
}

const HeroBlog = ({ type = "blog" }: HeroBlogProps) => {
  const basePath = type === "stories" ? "/stories" : "/blog";
  
  return (
    <div
      className="page-padding"
      style={{
        background: "#f96",
      }}
    >
      <div className="padding-section-medium is-blog">
        <div className="container-large">
          <div className="blog-hero_component">
            <h1>
              Supreme Coach{" "}
             
            </h1>
           
            <div className="" />
            {/* <img
              src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf9e67eaa0048_Blog%20Zap.svg"
              loading="lazy"
              alt="Zap illustration"
              className="blog-header_froot-zap"
            />
            <img
              src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf9bc47aa0032_Blog%20Feather.svg"
              loading="lazy"
              alt="Feather illustration"
              className="blog-header_froot-feather"
            />
            <img
              src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf999a0aa0037_Blog%20Images.svg"
              loading="lazy"
              alt="Blog image illustration"
              className="blog-header_froot-images"
            />
            <img
              src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf910ddaa0039_Blog%20Megaphone.svg"
              loading="lazy"
              alt="Blog megaphone illustration"
              className="blog-header_froot-megaphone"
            /> */}
          </div>
          <div className="blog-hero_text-section">
            <p className="text-size-large text-align-center">
              Everything you need to know about creators and brand partnerships.
              From the team powering it.
            </p>
            <div className="w-embed">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n.blog-card_card-image {\naspect-ratio: 16/9;\n}\n\n",
                }}
              />
            </div>
          </div>
          <div className="blog-collection_wrapper w-dyn-list">
            <div role="list" className="blog-collection_list w-dyn-items">
              <div
                role="listitem"
                className="main-card-collection_item w-dyn-item"
              >
                <a
                  href={`${basePath}/everything-you-need-to-know-about-youtube-influencer-marketing`}
                  className="main-card_wrapper is-featured w-inline-block"
                >
                  <div className="blog-card_content-wrap">
                    <div className="blog-card_top-content">
                      <img
                        src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/670e49ac377e95ea4640304d_Creative%2010.png"
                        loading="lazy"
                        alt=""
                        sizes="100vw"
                        srcSet="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/670e49ac377e95ea4640304d_Creative%2010-p-500.png 500w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/670e49ac377e95ea4640304d_Creative%2010-p-800.png 800w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/670e49ac377e95ea4640304d_Creative%2010-p-1080.png 1080w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/670e49ac377e95ea4640304d_Creative%2010-p-1600.png 1600w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/670e49ac377e95ea4640304d_Creative%2010-p-2000.png 2000w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/670e49ac377e95ea4640304d_Creative%2010-p-2600.png 2600w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/670e49ac377e95ea4640304d_Creative%2010-p-3200.png 3200w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/670e49ac377e95ea4640304d_Creative%2010.png 7887w"
                        className="blog-card_card-image"
                      />
                      <div className="margin-bottom margin-xsmall">
                        <div className="margin-top margin-small">
                          <div className="content-meta_wrapper margin-bottom margin-xsmall">
                            <div className="text-style-label is-small margin-right margin-xsmall">
                              October 15, 2024
                            </div>
                            <div className="text-style-label is-small margin-right margin-xsmall">
                              •
                            </div>
                            <div className="text-style-label is-small margin-right margin-xxsmall">
                              6
                            </div>
                            <div className="text-style-label is-small">
                              min read
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="heading-style-h5">
                        Everything You Need To Know About YouTube Influencer
                        Marketing
                      </h2>
                    </div>
                    <div className="blog-card_bottom-content">
                      <div className="button">
                        <div className="button-text">Read more</div>
                        <img
                          src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf94567a9ffdd_Arrow%20Frame.svg"
                          loading="lazy"
                          alt="right arrow illustration"
                          className="button-arrow"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                role="listitem"
                className="main-card-collection_item w-dyn-item"
              >
                <a
                  href={`${basePath}/how-munch-uses-passionfroot-to-fuel-creator-led-growth`}
                  className="main-card_wrapper is-featured w-inline-block"
                >
                  <div className="blog-card_content-wrap">
                    <div className="blog-card_top-content">
                      <img
                        src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/66b63a2c8ed1a7613146c17c_Frame%2010123166.avif"
                        loading="lazy"
                        alt=""
                        sizes="100vw"
                        srcSet="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/66b63a2c8ed1a7613146c17c_Frame%2010123166-p-500.avif 500w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/66b63a2c8ed1a7613146c17c_Frame%2010123166.avif 1280w"
                        className="blog-card_card-image"
                      />
                      <div className="margin-bottom margin-xsmall">
                        <div className="margin-top margin-small">
                          <div className="content-meta_wrapper margin-bottom margin-xsmall">
                            <div className="text-style-label is-small margin-right margin-xsmall">
                              September 30, 2024
                            </div>
                            <div className="text-style-label is-small margin-right margin-xsmall">
                              •
                            </div>
                            <div className="text-style-label is-small margin-right margin-xxsmall">
                              6
                            </div>
                            <div className="text-style-label is-small">
                              min read
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="heading-style-h5">
                        How Munch uses Suoreme Coach to fuel Creator-Led Growth
                      </h2>
                    </div>
                    <div className="blog-card_bottom-content">
                      <div className="button">
                        <div className="button-text">Read more</div>
                        <img
                          src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf94567a9ffdd_Arrow%20Frame.svg"
                          loading="lazy"
                          alt="right arrow illustration"
                          className="button-arrow"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                role="listitem"
                className="main-card-collection_item w-dyn-item"
              >
                <a
                  href={`${basePath}/how-attio-uses-passionfroot-to-discover-creators-and-fuel-product-led-growth`}
                  className="main-card_wrapper is-featured w-inline-block"
                >
                  <div className="blog-card_content-wrap">
                    <div className="blog-card_top-content">
                      <img
                        src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/653c0e0e9c1210087a008868_Attio%20Thumbnail.png"
                        loading="lazy"
                        alt=""
                        className="blog-card_card-image"
                      />
                      <div className="margin-bottom margin-xsmall">
                        <div className="margin-top margin-small">
                          <div className="content-meta_wrapper margin-bottom margin-xsmall">
                            <div className="text-style-label is-small margin-right margin-xsmall">
                              November 21, 2023
                            </div>
                            <div className="text-style-label is-small margin-right margin-xsmall">
                              •
                            </div>
                            <div className="text-style-label is-small margin-right margin-xxsmall">
                              4
                            </div>
                            <div className="text-style-label is-small">
                              min read
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="heading-style-h5">
                        How Attio uses Suoreme Coach to discover creators and
                        fuel product-led growth
                      </h2>
                    </div>
                    <div className="blog-card_bottom-content">
                      <div className="button">
                        <div className="button-text">Read more</div>
                        <img
                          src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf94567a9ffdd_Arrow%20Frame.svg"
                          loading="lazy"
                          alt="right arrow illustration"
                          className="button-arrow"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlog;

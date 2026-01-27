import React from "react";

const HeroGuide = () => {
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
              <span className="blog-illustration">
                <br />
                guides
              </span>
            </h1>
           
            <div className="blog-header_froots" />
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
              alt="Guide image illustration"
              className="blog-header_froot-images"
            />
            <img
              src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf910ddaa0039_Blog%20Megaphone.svg"
              loading="lazy"
              alt="Guide megaphone illustration"
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
                    "\n.guide-card_card-image {\naspect-ratio: 16/9;\n}\n\n",
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
                  href="/guides/getting-started-with-creator-marketing"
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
                        Getting Started With Creator Marketing
                      </h2>
                    </div>
                    <div className="blog-card_bottom-content">
                      <div className="button">
                        <div className="button-text">Download</div>
                       
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

export default HeroGuide;


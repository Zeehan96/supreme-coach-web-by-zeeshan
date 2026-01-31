"use client";

import Link from "next/link";
import { useEffect } from "react";
import HeroGuide from "./Guide/HeroGuide";

export default function GuidePageContent() {
  useEffect(() => {
    // Any DOM-dependent logic or initializations for the content can go here
  }, []);

  return (
    <>
      {/* Page-specific styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        ::selection {
          background-color: rgba(255, 153, 102, 1);
        }
        @media (min-width: 992px) {
          .intercom-banner-active .navbar_menu {
            top: 50px;
            transition: top 0.2s ease;
          }
        }
        .guide-card_card-image {
          aspect-ratio: 16/9;
        }
        .podcast-cms_thumbnail {
          aspect-ratio: 16/9;
        }
      `,
        }}
      />

      <main className="main-wrapper">
        <HeroGuide />
        <section className="section-podcast-episodes">
          <div className="page-padding">
            <div className="padding-section-medium">
              <div className="margin-bottom margin-medium">
                <div className="container-small">
                  <div className="margin-bottom margin-medium">
                    <div className="text-align-center">
                      <h2 className="heading-style-h3 blog">All guides</h2>
                    </div>
                  </div>
                  <div className="w-embed">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n.podcast-cms_thumbnail {\naspect-ratio: 16/9;}\n",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="container-large">
                <div className="blog-collection_wrapper w-dyn-list">
                  <div
                    fs-cmsfilter-element="list"
                    role="list"
                    className="blog-collection_list w-dyn-items"
                  >
                    <div
                      role="listitem"
                      className="main-card-collection_item w-dyn-item"
                    >
                      <a
                        href="/guides/getting-started-with-creator-marketing"
                        className="main-card_wrapper w-inline-block"
                      >
                        <div className="blog-card_content-wrap">
                          <div className="blog-content_wrapper">
                            <img
                              src="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions.png"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions-p-500.png 500w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions-p-800.png 800w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions-p-1080.png 1080w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions-p-1600.png 1600w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions-p-2000.png 2000w, https://cdn.prod.website-files.com/6340255dae4cf9a2b6a9ffba/6799521174e0389b4b4474a4_Implosions%20and%20Explosions.png 2240w"
                              className="blog-card_card-image"
                            />
                            <div className="margin-bottom margin-xsmall">
                              <div className="margin-top margin-small">
                                <div className="content-meta_wrapper margin-bottom margin-xsmall">
                                  <div className="text-style-label is-small margin-right margin-xsmall">
                                    January 16, 2025
                                  </div>
                                  <div className="text-style-label is-small margin-right margin-xsmall">
                                    •
                                  </div>
                                  <div className="text-style-label is-small margin-right margin-xxsmall">
                                    10
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
                        </div>
                      </a>
                      <div className="category-cms_filter-hidden w-dyn-list">
                        <div role="list" className="w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <div fs-cmsfilter-field="category">Marketing</div>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <div fs-cmsfilter-field="category">Guides</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-content-link">
          <div className="page-padding">
            <div className="padding-section-medium">
              <div className="container-large">
                <div className="margin-bottom margin-large">
                  <h2 className="heading-style-h3">
                    Content that gets your creative juices going
                  </h2>
                </div>
                <div className="w-layout-grid content-link_grid">
                  <a
                    id="w-node-c9b299c4-0cf9-829b-3e3f-086ae013c3e6-9dde2fc0"
                    href="/creators-on-air"
                    className="content-link_card-wrapper is-blue w-inline-block"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf90ae9aa0104_Pod%20Froot.svg"
                      loading="lazy"
                      alt="Blue podcasting froot"
                      className="content-link_froot"
                    />
                    <h3 className="content-link_title">
                      Creators <br />
                      on a<span className="content-link_podcast-icon">i</span>r
                    </h3>
                    <img
                      src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf96d99aa002e_Arrow%20Blue.svg"
                      loading="lazy"
                      alt="Blue right arrow"
                      className="content-link_arrow"
                    />
                  </a>
                  <a
                    id="w-node-_89bc98f9-4ebe-0598-933b-00395cf17f70-9dde2fc0"
                    href="/blog"
                    className="content-link_card-wrapper is-pink w-inline-block"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf93668aa0106_Newsletter%20Froot.svg"
                      loading="lazy"
                      alt="Newsletter froot scrolling laptop"
                      className="content-link_froot"
                    />
                    <h3 className="content-link_title">Blog</h3>
                    <img
                      src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf9093aaa0038_Yellow%20Arrow.svg"
                      loading="lazy"
                      alt="Yellow right arrow"
                      className="content-link_arrow"
                    />
                  </a>
                  <a
                    id="w-node-_9514747d-8c1e-3edc-fdf8-c81f137dd83d-9dde2fc0"
                    href="/guides"
                    className="content-link_card-wrapper is-green w-inline-block"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf97230aa002c_Green%20froot.svg"
                      loading="lazy"
                      alt="Green froot illustration"
                      className="content-link_froot"
                    />
                    <h3 className="content-link_title">
                      The
                      <br />
                      Guides
                    </h3>
                    <img
                      src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf946deaa002d_Green%20Arrow.svg"
                      loading="lazy"
                      alt="Green right arrow"
                      className="content-link_arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-product-cta">
          <div className="page-padding">
            <div className="padding-section-medium">
              <div className="container-large">
                <div className="footer-cta-flex">
                  <div className="cta-footer-wrap">
                    <div className="margin-bottom margin-small">
                      <img
                        src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf9600ea9ffe6_Stacking%20Creator.svg"
                        loading="lazy"
                        alt="supreme coach stacking creators"
                        className="footer-cta-image"
                      />
                    </div>
                    <div className="margin-bottom margin-medium">
                      <h2 className="heading-style-h3">
                        Get the tools you need to succeed as a creator.
                      </h2>
                    </div>
                    <a
                      id="w-node-b61da248-f52e-a83d-28e7-598506ba853c-06ba852d"
                      href="https://workspace.passionfroot.me/select-workspace"
                      target="_blank"
                      className="button w-inline-block"
                    >
                      <div className="button-text">Get access</div>
                      <img
                        src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf94567a9ffdd_Arrow%20Frame.svg"
                        loading="lazy"
                        alt="right arrow illustration"
                        className="button-arrow"
                      />
                    </a>
                  </div>
                  <div className="footer-cta-product hide-mobile-portrait">
                    <img
                      src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf9515aaa00f6_Increase%20UI.webp"
                      loading="lazy"
                      srcSet="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf9515aaa00f6_Increase%2520UI-p-500.png 500w, https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf9515aaa00f6_Increase%20UI.webp 518w"
                      sizes="(max-width: 518px) 100vw, 518px"
                      alt="Dashboard UI element"
                      className="ui-increase"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf9710baa00f5_Workflow.webp"
                      loading="lazy"
                      alt="Workflow UI element"
                      className="ui-workflow"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf94d21aa00ca_Cashflow.webp"
                      loading="lazy"
                      srcSet="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf94d21aa00ca_Cashflow-p-500.png 500w, https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf94d21aa00ca_Cashflow.webp 770w"
                      sizes="(max-width: 770px) 100vw, 770px"
                      alt="Cashflow dashboard"
                      className="ui-cashflow"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf992bdaa00f3_UI%20Component.webp"
                      loading="lazy"
                      alt="UI booking component"
                      className="ui-booking"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-social-media">
          <div className="page-padding">
            <div className="padding-section-medium">
              <div className="container-large">
                <div className="margin-bottom margin-large">
                  <div className="text-align-center">
                    <h2 className="heading-style-h3">Catch us on social </h2>
                  </div>
                </div>
                <div className="w-layout-grid social-media_grid">
                  <a
                    id="w-node-_2b60442b-59f9-6b3a-c1c3-a937cbba45c1-cbba45b8"
                    href="https://www.instagram.com/supremecoach/"
                    target="_blank"
                    className="social-media_link-wrapper is-pink end-left w-inline-block"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf960f5aa0035_IG.svg"
                      loading="lazy"
                      alt="Instagram icon"
                      className="social-mdeia_illustrated-icon"
                    />
                    <div className="text-align-center">
                      <div className="font-new-kansas heading-style-h5">
                        Check our Instagram
                      </div>
                    </div>
                  </a>
                  <a
                    id="w-node-_2b60442b-59f9-6b3a-c1c3-a937cbba45c6-cbba45b8"
                    href="https://www.youtube.com/@supremecoach"
                    target="_blank"
                    className="social-media_link-wrapper is-blue mobile-landscape-radius-right w-inline-block"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf924abaa003f_YT.svg"
                      loading="lazy"
                      alt="YouTube icon"
                      className="social-mdeia_illustrated-icon"
                    />
                    <div className="text-align-center">
                      <div className="font-new-kansas heading-style-h5">
                        Watch our YouTube
                      </div>
                    </div>
                  </a>
                  <a
                    id="w-node-_2b60442b-59f9-6b3a-c1c3-a937cbba45cb-cbba45b8"
                    href="https://twitter.com/passionfrootxyz"
                    target="_blank"
                    className="social-media_link-wrapper is-yellow mobile-landscape-radius-left w-inline-block"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf9baacaa0033_TW.svg"
                      loading="lazy"
                      alt="Twitter icon"
                      className="social-mdeia_illustrated-icon"
                    />
                    <div className="text-align-center">
                      <div className="font-new-kansas heading-style-h5">
                        Find us on Twitter
                      </div>
                    </div>
                  </a>
                  <a
                    id="w-node-_2b60442b-59f9-6b3a-c1c3-a937cbba45d0-cbba45b8"
                    href="https://www.linkedin.com/company/supremecoach/"
                    target="_blank"
                    className="social-media_link-wrapper is-green end-right w-inline-block"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6340255dae4cf92c2baa0034_IN.svg"
                      loading="lazy"
                      alt="Linkedin icon"
                      className="social-mdeia_illustrated-icon"
                    />
                    <div className="text-align-center">
                      <div className="font-new-kansas heading-style-h5">
                        Follow us on LinkedIn
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


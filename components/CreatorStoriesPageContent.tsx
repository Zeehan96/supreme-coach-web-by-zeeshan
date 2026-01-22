"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function CreatorStoriesPageContent() {
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
        .stories_image {
          background: linear-gradient(239deg, #FFD7BD 0.97%, #FCA164 100%);
        }
        .stories_image-cover.is-cyan {
          background: linear-gradient(255deg, #AEECF4 0%, #70E1F0 100%);
        }
        .stories_image-cover.is-purple {
          background: linear-gradient(254deg, #D3A9F9 0%, #B26BF5 102.08%);
        }
      `,
        }}
      />

      <main className="main-wrapper">
        {/* Hero Section */}
        <div className="section_creator_customer-hero">
          <div className="padding-global">
            <div className="container-xlarge">
              <div className="creator-hero_component">
                <div className="hero_texts-wrapper creator-stories">
                  <div className="margin-bottom margin-small">
                    <div className="text-style-label-kansas">
                      Creator Gallery
                    </div>
                  </div>
                  <h1 className="heading-style-h2 main-hero-heading">
                    Stories from the <br />
                    Supreme Coach community
                  </h1>
                  <div className="max-width-small creator-stories-para">
                    <div className="text-size-medium color-neutral-800">
                      We&apos;re proud to support a diverse community of
                      creators. Explore their storefronts and stories to get
                      inspired!
                    </div>
                  </div>
                  <div className="creator-stories_hero-buttons">
                    <Link
                      href="/get-access"
                      target="_blank"
                      className="button-dark long w-inline-block"
                    >
                      <div>Start for Free</div>
                      <div className="icon-embed-xxsmall w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 16 16"
                          fill="none"
                          preserveAspectRatio="xMidYMid meet"
                          aria-hidden="true"
                          role="img"
                        >
                          <path
                            className="arrow-line"
                            d="M2.349 7.23025C3.06607 7.21757 3.71403 7.1808 4.35755 7.29175C4.42539 7.30316 4.50401 7.26575 4.57565 7.2442C4.9288 7.13768 5.28321 7.1231 5.64269 7.21503C5.95526 7.29492 6.27417 7.22644 6.59054 7.2499C7.07873 7.28604 7.56438 7.15417 8.0494 7.17889C8.44439 7.19918 8.84381 7.19284 9.23627 7.25434C9.43535 7.28541 9.62365 7.29619 9.82717 7.24483C10.0484 7.18967 10.2678 7.32218 10.4973 7.32218C10.7497 7.32218 10.9982 7.38558 11.2404 7.45786C11.5117 7.53838 11.5802 7.78438 11.3824 7.98409C11.0806 8.28905 10.6863 8.42282 10.2779 8.48242C9.94002 8.53187 9.59512 8.56041 9.25466 8.57816C8.89454 8.59654 8.53188 8.72081 8.16669 8.60035C8.10392 8.57943 8.02594 8.57499 7.96254 8.59211C7.53775 8.70877 7.09585 8.63015 6.66789 8.71384C6.53602 8.73983 6.39146 8.73096 6.25705 8.71003C6.07065 8.68087 5.89186 8.68594 5.71433 8.74427C5.48736 8.81908 5.26165 8.72398 5.03404 8.72842C4.80389 8.73286 4.57565 8.7411 4.35755 8.79626C4.01455 8.88375 3.67345 8.83493 3.33933 8.79943C3.03754 8.76773 2.74653 8.79436 2.44918 8.80197C2.16831 8.80957 1.87476 8.83366 1.59833 8.78485C1.2845 8.72905 1.14818 8.44248 1.03343 8.18063C0.930717 7.94605 1.07527 7.77296 1.23314 7.60432C1.46582 7.35515 1.73401 7.22201 2.07955 7.24546C2.1924 7.25307 2.30716 7.23215 2.3509 7.22961L2.349 7.23025Z"
                            fill="currentColor"
                          />
                          <path
                            className="arrow-tip"
                            d="M11.1802 13.0869C10.782 13.0901 10.4764 12.7344 10.543 12.321C10.5867 12.0478 10.6869 11.7923 10.8644 11.5704C11.0007 11.3998 11.139 11.228 11.2512 11.0416C11.6424 10.3892 12.071 9.76533 12.5845 9.20233C12.6295 9.15288 12.6663 9.08884 12.6885 9.02544C12.821 8.64567 13.0866 8.35719 13.346 8.06555C13.5038 7.88803 13.5178 7.75615 13.3377 7.59892C13.0993 7.39033 12.9129 7.15194 12.7804 6.8641C12.6866 6.66121 12.4888 6.54329 12.3442 6.38161C12.1432 6.15654 12.0139 5.88138 11.8725 5.62207C11.6766 5.26258 11.3932 4.97601 11.1631 4.64759C10.931 4.31664 10.7364 3.9654 10.5956 3.58562C10.5639 3.50003 10.5417 3.40874 10.5328 3.31807C10.517 3.14689 10.621 3.04037 10.7548 2.95732C10.8809 2.8787 10.9944 2.91167 11.106 2.99473C11.3266 3.15893 11.5606 3.29905 11.7318 3.52983C11.9505 3.82401 12.284 4.01865 12.4736 4.34327C12.9732 4.62794 13.2134 5.14022 13.5545 5.56564C13.7549 5.81544 13.9996 6.03164 14.2348 6.25101C14.4244 6.4279 14.5791 6.62127 14.6476 6.87551C14.6875 7.02323 14.7763 7.14243 14.8587 7.2686C15.0553 7.56975 15.0426 7.87661 14.8498 8.17713C14.5652 8.62094 14.3293 9.09645 14.0066 9.51617C13.6718 9.95173 13.4499 10.4665 13.06 10.8647C12.8229 11.1069 12.6974 11.4182 12.5509 11.7181C12.3487 12.1321 12.1096 12.5252 11.7704 12.8447C11.5834 13.0203 11.4122 13.0856 11.1821 13.0876L11.1802 13.0869Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </Link>
                    <Link
                      href="/talk-to-us"
                      className="button-light is-outline w-inline-block"
                    >
                      <div>Contact Sales</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Creator Stories Grid */}
        <div className="section_creator_customer-stories">
          <div className="padding-global">
            <div className="container-large">
              <div className="stories_grid">
                {/* Story Card 1 */}
                <div className="stories_card">
                  <div className="stories_image"></div>
                  <div className="stories_content">
                    <div className="stories_header">
                      <div className="stories_name">Masters of Work</div>
                      <div className="stories_category">
                        AI &amp; Productivity
                      </div>
                    </div>
                    <div className="stories_description">
                      An AI and productivity newsletter focused on sharing tools
                      and tricks to help people automate their work.
                    </div>
                  </div>
                </div>

                {/* Story Card 2 */}
                <div className="stories_card">
                  <div className="stories_image-cover is-cyan"></div>
                  <div className="stories_content">
                    <div className="stories_header">
                      <div className="stories_name">Superpower Daily</div>
                      <div className="stories_category">AI &amp; News</div>
                    </div>
                    <div className="stories_description">
                      A ChatGPT extension and daily newsletter, offering the
                      latest in AI news, tools, and innovations.
                    </div>
                  </div>
                </div>

                {/* Story Card 3 */}
                <div className="stories_card">
                  <div className="stories_image-cover is-purple"></div>
                  <div className="stories_content">
                    <div className="stories_header">
                      <div className="stories_name">Superhuman</div>
                      <div className="stories_category">AI</div>
                    </div>
                    <div className="stories_description">
                      One of the biggest and fastest-growing AI newsletters
                      globally, helping over 450,000 readers stay ahead.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="section_creator_customer-articles">
          <div className="padding-global padding-section-medium">
            <div className="container-large">
              <div className="customer_articles">
              <Link
                href="/stories/how-masters-of-work-runs-their-productivity-newsletter-ads-business-on-supreme-coach"
                className="customer_card w-inline-block"
              >
                  <div className="customer_card-red">5 Min Read</div>
                  <div className="customer_card-title">
                    How Masters of Work runs their productivity newsletter ads
                    business on Supreme Coach
                  </div>
                  <div className="customer_card-description">
                    Masters of Work is an AI and productivity newsletter focused
                    on sharing tools and tricks to help people automate...
                  </div>
                  <div className="customer_card-details">
                    <div className="text-wrapper">
                      <div className="customer_card-author">Filip</div>
                      <div className="customer_card-role">
                        Chief Growth Officer
                      </div>
                    </div>
                  </div>
                </Link>

              <Link
                href="/stories/how-superpower-daily-makes-5-figures-with-supreme-coach"
                className="customer_card w-inline-block"
              >
                  <div className="customer_card-red">4 Min Read</div>
                  <div className="customer_card-title">
                    How Superpower Daily makes 5 figures with Supreme Coach
                  </div>
                  <div className="customer_card-description">
                    Superpower Daily is a ChatGPT extension and daily
                    newsletter, offering the latest in AI news, tools, and...
                  </div>
                  <div className="customer_card-details">
                    <div className="text-wrapper">
                      <div className="customer_card-author">Filip</div>
                      <div className="customer_card-role">
                        Chief Growth Officer
                      </div>
                    </div>
                  </div>
                </Link>

              <Link
                href="/stories/how-superhuman-built-the-largest-newsletter-ads-business-in-ai-with-supreme-coach"
                className="customer_card w-inline-block"
              >
                  <div className="customer_card-red">4 Min Read</div>
                  <div className="customer_card-title">
                    How Superhuman built the largest newsletter ads business in
                    AI with Supreme Coach
                  </div>
                  <div className="customer_card-description">
                    Superhuman is one of the biggest and fastest-growing AI
                    newsletters globally, helping over 450,000 readers from...
                  </div>
                  <div className="customer_card-details">
                    <div className="text-wrapper">
                      <div className="customer_card-author">Filip</div>
                      <div className="customer_card-role">
                        Chief Growth Officer
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pop-up Wrapper */}
        <div id="pop-up-wrapper" className="pop-up-wrapper">
          <div
            data-w-id="0fbe5cfd-a089-069d-8216-a23cf931abec"
            className="pop-up-back"
          ></div>
          <div className="pop-up-box">
            <a
              data-w-id="0fbe5cfd-a089-069d-8216-a23cf931abee"
              href="#"
              className="pop-up-exit-button w-inline-block"
            ></a>
            <div className="resources_mega-img-wrap popup"></div>
            <div className="sc-popup_texts">
              <div className="pop-up-text-box">
                <h2 className="pop-up-header">
                  Supreme Coach Sponsorship Pricing Guide
                </h2>
                <p className="pop-up-paragraph">
                  Learn how other creators are leveraging Supreme Coach to
                  monetize their content with brand partnerships.
                </p>
              </div>
              <div className="form w-form">
                <form
                  id="wf-form-Pricing-Guide-Access"
                  name="wf-form-Pricing-Guide-Access"
                  data-name="Pricing Guide Access"
                  method="get"
                  data-popup-form="form-el"
                  className="pop-up-form"
                >
                  <div className="form_item-wrap">
                    <div>Email address</div>
                    <input
                      className="form_input modal w-input"
                      maxLength={256}
                      name="email_address"
                      data-name="email_address"
                      placeholder="Enter your email"
                      type="email"
                      id="email_address-2"
                      required
                    />
                  </div>
                  <div className="radio_field-wrapper">
                    <div>What&apos;s your role?</div>
                    <div className="radio_buttons-wrapper">
                      <label className="modal_radio-wrapper w-radio">
                        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom modal_radio-el w-radio-input"></div>
                        <input
                          type="radio"
                          name="Role"
                          id="Creator"
                          data-name="Role"
                          required
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                          value="Creator"
                        />
                        <span className="radio_label w-form-label">
                          Creator
                        </span>
                      </label>
                      <label className="modal_radio-wrapper w-radio">
                        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom modal_radio-el w-radio-input"></div>
                        <input
                          type="radio"
                          name="Role"
                          id="Marketer"
                          data-name="Role"
                          required
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                          value="Marketer"
                        />
                        <span className="radio_label w-form-label">
                          Marketer
                        </span>
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="button-dark">
                    <div data-popup-form="button-text">Request a demo</div>
                  </button>
                </form>
                <div className="popup_form-success w-form-done">
                  <div>Thank you! Check your email for confirmation.</div>
                </div>
                <div className="popup_form-error w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

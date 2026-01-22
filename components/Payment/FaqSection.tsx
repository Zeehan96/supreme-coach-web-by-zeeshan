import React from "react";

const FaqSection = () => {
  return (
    <div className="section_faqs">
      <div className="padding-section-xmedium faq-creator">
        <div className="padding-global">
          <div className="container-xlarge">
            <div className="faqs_component">
              <div className="faqs_top-wrapper">
                <h2 className="heading-style-h3-v2">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="faq_grid flex-inners">
                <div className="faq_grid-side">
                  <div
                    data-delay={300}
                    data-hover="false"
                    className="faq-p w-dropdown"
                    style={{ height: "3.25rem", maxHeight: 527 }}
                  >
                    <div
                      open-by-default="toggle"
                      className="faq w-dropdown-toggle"
                      id="w-dropdown-toggle-4"
                      aria-controls="w-dropdown-list-4"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="accordian-icon-wrap">
                        <div className="faq-bg-gradient orange-gradient" />
                        <div
                          className="faq-bg-gradient obsidian-gradient"
                          style={{ opacity: 1 }}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 17 16"
                          fill="none"
                          className="faq-chevron-icon"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.73431 6.63422C5.04673 6.3218 5.55327 6.3218 5.86569 6.63422L8.5 9.26853L11.1343 6.63422C11.4467 6.3218 11.9533 6.3218 12.2657 6.63422C12.5781 6.94664 12.5781 7.45317 12.2657 7.76559L9.06569 10.9656C8.75327 11.278 8.24673 11.278 7.93431 10.9656L4.73431 7.76559C4.4219 7.45317 4.4219 6.94664 4.73431 6.63422Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="toggle-text">
                        Is Passionfroot free for creators?
                      </div>
                    </div>
                    <nav
                      className="faq-body w-dropdown-list"
                      id="w-dropdown-list-4"
                      aria-labelledby="w-dropdown-toggle-4"
                    >
                      <div className="faq-body-cont">
                        <p
                          className="faq-answer"
                          style={{ color: "rgba(255, 255, 255, 0)" }}
                        >
                          Yes, it’s free for creators to sign up and use
                          Passionfroot and there are no upfront costs to get
                          started. <br />‍<br />
                          Passionfroot adds a 2% fee on every transaction, which
                          the brand covers. When we match you with a brand, we
                          charge a 15% fee (incl. payment fees).
                        </p>
                        <img
                          width="Auto"
                          height="Auto"
                          alt="pricing comparison chart"
                          src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670ec724933c19980b0ae5d8_Fees.avif"
                          loading="lazy"
                          srcSet="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670ec724933c19980b0ae5d8_Fees-p-500.avif 500w, https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670ec724933c19980b0ae5d8_Fees.avif 1152w"
                          sizes="100vw"
                          className="faq_answer-in-img"
                        />
                      </div>
                    </nav>
                  </div>
                  <div
                    data-delay={300}
                    data-hover="false"
                    className="faq-p w-dropdown"
                    style={{ height: "3.25rem", maxHeight: 120 }}
                  >
                    <div
                      className="faq w-dropdown-toggle"
                      id="w-dropdown-toggle-5"
                      aria-controls="w-dropdown-list-5"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="accordian-icon-wrap">
                        <div className="faq-bg-gradient orange-gradient" />
                        <div
                          className="faq-bg-gradient obsidian-gradient"
                          style={{ opacity: 1 }}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 17 16"
                          fill="none"
                          className="faq-chevron-icon"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.73431 6.63422C5.04673 6.3218 5.55327 6.3218 5.86569 6.63422L8.5 9.26853L11.1343 6.63422C11.4467 6.3218 11.9533 6.3218 12.2657 6.63422C12.5781 6.94664 12.5781 7.45317 12.2657 7.76559L9.06569 10.9656C8.75327 11.278 8.24673 11.278 7.93431 10.9656L4.73431 7.76559C4.4219 7.45317 4.4219 6.94664 4.73431 6.63422Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="toggle-text">How do I get started?</div>
                    </div>
                    <nav
                      className="faq-body w-dropdown-list"
                      id="w-dropdown-list-5"
                      aria-labelledby="w-dropdown-toggle-5"
                    >
                      <div className="faq-body-cont">
                        <p
                          className="faq-answer"
                          style={{ color: "rgba(255, 255, 255, 0)" }}
                        >
                          Signing up is quick and easy. Just sign up to our
                          waitlist and you will get access right away. Set up
                          your profile with your offerings and audience
                          insights, and you’re ready to start receiving
                          collaboration requests from brands.
                        </p>
                      </div>
                    </nav>
                  </div>
                  <div
                    data-delay={0}
                    data-hover="false"
                    className="faq-p w-dropdown"
                    style={{ height: "3.25rem", maxHeight: 174 }}
                  >
                    <div
                      className="faq w-dropdown-toggle"
                      id="w-dropdown-toggle-6"
                      aria-controls="w-dropdown-list-6"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="accordian-icon-wrap">
                        <div className="faq-bg-gradient orange-gradient" />
                        <div
                          className="faq-bg-gradient obsidian-gradient"
                          style={{ opacity: 1 }}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 17 16"
                          fill="none"
                          className="faq-chevron-icon"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.73431 6.63422C5.04673 6.3218 5.55327 6.3218 5.86569 6.63422L8.5 9.26853L11.1343 6.63422C11.4467 6.3218 11.9533 6.3218 12.2657 6.63422C12.5781 6.94664 12.5781 7.45317 12.2657 7.76559L9.06569 10.9656C8.75327 11.278 8.24673 11.278 7.93431 10.9656L4.73431 7.76559C4.4219 7.45317 4.4219 6.94664 4.73431 6.63422Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="toggle-text">
                        How does Passionfroot help me find brand partnerships?
                      </div>
                    </div>
                    <nav
                      className="faq-body w-dropdown-list"
                      id="w-dropdown-list-6"
                      aria-labelledby="w-dropdown-toggle-6"
                    >
                      <div className="faq-body-cont">
                        <p
                          className="faq-answer"
                          style={{ color: "rgba(255, 255, 255, 0)" }}
                        >
                          Passionfroot matches you with B2B brands based on your
                          audience, content niche, and platform. Brands will
                          reach out to you for partnerships, and you can manage
                          everything from booking to payments on the platform.
                          <br />
                          Our Live Campaigns feature also lets you discover and
                          apply to brands who run active campaigns.
                        </p>
                      </div>
                    </nav>
                  </div>
                  <div
                    data-delay={0}
                    data-hover="false"
                    id="w-node-e3e93dea-109e-d2b7-6add-57790461f952-1bf54742"
                    className="faq-p w-dropdown"
                    style={{ height: "3.25rem", maxHeight: 92 }}
                  >
                    <div
                      className="faq w-dropdown-toggle"
                      id="w-dropdown-toggle-7"
                      aria-controls="w-dropdown-list-7"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="accordian-icon-wrap">
                        <div className="faq-bg-gradient orange-gradient" />
                        <div
                          className="faq-bg-gradient obsidian-gradient"
                          style={{ opacity: 1 }}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 17 16"
                          fill="none"
                          className="faq-chevron-icon"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.73431 6.63422C5.04673 6.3218 5.55327 6.3218 5.86569 6.63422L8.5 9.26853L11.1343 6.63422C11.4467 6.3218 11.9533 6.3218 12.2657 6.63422C12.5781 6.94664 12.5781 7.45317 12.2657 7.76559L9.06569 10.9656C8.75327 11.278 8.24673 11.278 7.93431 10.9656L4.73431 7.76559C4.4219 7.45317 4.4219 6.94664 4.73431 6.63422Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="toggle-text">Can I set my own rates?</div>
                    </div>
                    <nav
                      className="faq-body w-dropdown-list"
                      id="w-dropdown-list-7"
                      aria-labelledby="w-dropdown-toggle-7"
                    >
                      <div className="faq-body-cont">
                        <p
                          className="faq-answer"
                          style={{ color: "rgba(255, 255, 255, 0)" }}
                        >
                          Yes! As a creator, you have full control over your
                          pricing and what services you offer, such as
                          shoutouts, sponsored posts, or newsletter features.
                        </p>
                      </div>
                    </nav>
                  </div>
                  <div
                    data-delay={0}
                    data-hover="false"
                    className="faq-p w-dropdown"
                    style={{ height: "3.25rem", maxHeight: 92 }}
                  >
                    <div
                      className="faq w-dropdown-toggle"
                      id="w-dropdown-toggle-8"
                      aria-controls="w-dropdown-list-8"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="accordian-icon-wrap">
                        <div className="faq-bg-gradient orange-gradient" />
                        <div
                          className="faq-bg-gradient obsidian-gradient"
                          style={{ opacity: 1 }}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 17 16"
                          fill="none"
                          className="faq-chevron-icon"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.73431 6.63422C5.04673 6.3218 5.55327 6.3218 5.86569 6.63422L8.5 9.26853L11.1343 6.63422C11.4467 6.3218 11.9533 6.3218 12.2657 6.63422C12.5781 6.94664 12.5781 7.45317 12.2657 7.76559L9.06569 10.9656C8.75327 11.278 8.24673 11.278 7.93431 10.9656L4.73431 7.76559C4.4219 7.45317 4.4219 6.94664 4.73431 6.63422Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="toggle-text">How do payments work?</div>
                    </div>
                    <nav
                      className="faq-body w-dropdown-list"
                      id="w-dropdown-list-8"
                      aria-labelledby="w-dropdown-toggle-8"
                    >
                      <div className="faq-body-cont">
                        <p
                          className="faq-answer"
                          style={{ color: "rgba(255, 255, 255, 0)" }}
                        >
                          Payments are processed through the platform to ensure
                          timely and secure transfers. You can track all
                          invoices and payouts in your dashboard.
                        </p>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="faq_grid-side">
                  <div
                    data-delay={0}
                    data-hover="false"
                    id="w-node-e3e93dea-109e-d2b7-6add-57790461f97f-1bf54742"
                    className="faq-p w-dropdown"
                    style={{ height: "3.25rem", maxHeight: 120 }}
                  >
                    <div
                      className="faq w-dropdown-toggle"
                      id="w-dropdown-toggle-10"
                      aria-controls="w-dropdown-list-10"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="accordian-icon-wrap">
                        <div className="faq-bg-gradient orange-gradient" />
                        <div
                          className="faq-bg-gradient obsidian-gradient"
                          style={{ opacity: 1 }}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 17 16"
                          fill="none"
                          className="faq-chevron-icon"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.73431 6.63422C5.04673 6.3218 5.55327 6.3218 5.86569 6.63422L8.5 9.26853L11.1343 6.63422C11.4467 6.3218 11.9533 6.3218 12.2657 6.63422C12.5781 6.94664 12.5781 7.45317 12.2657 7.76559L9.06569 10.9656C8.75327 11.278 8.24673 11.278 7.93431 10.9656L4.73431 7.76559C4.4219 7.45317 4.4219 6.94664 4.73431 6.63422Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="toggle-text">
                        What type of brands will I work with?
                      </div>
                    </div>
                    <nav
                      className="faq-body w-dropdown-list"
                      id="w-dropdown-list-10"
                      aria-labelledby="w-dropdown-toggle-10"
                    >
                      <div className="faq-body-cont">
                        <p
                          className="faq-answer"
                          style={{ color: "rgba(255, 255, 255, 0)" }}
                        >
                          Passionfroot partners with leading B2B brands across
                          tech, SaaS, AI, finance, and more, helping you connect
                          with companies that align with your niche and
                          audience.
                        </p>
                      </div>
                    </nav>
                  </div>
                  <div
                    data-delay={0}
                    data-hover="false"
                    id="w-node-e3e93dea-109e-d2b7-6add-57790461f98c-1bf54742"
                    className="faq-p w-dropdown"
                    style={{ height: "3.25rem", maxHeight: 174 }}
                  >
                    <div
                      className="faq w-dropdown-toggle"
                      id="w-dropdown-toggle-11"
                      aria-controls="w-dropdown-list-11"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="accordian-icon-wrap">
                        <div className="faq-bg-gradient orange-gradient" />
                        <div
                          className="faq-bg-gradient obsidian-gradient"
                          style={{ opacity: 1 }}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 17 16"
                          fill="none"
                          className="faq-chevron-icon"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.73431 6.63422C5.04673 6.3218 5.55327 6.3218 5.86569 6.63422L8.5 9.26853L11.1343 6.63422C11.4467 6.3218 11.9533 6.3218 12.2657 6.63422C12.5781 6.94664 12.5781 7.45317 12.2657 7.76559L9.06569 10.9656C8.75327 11.278 8.24673 11.278 7.93431 10.9656L4.73431 7.76559C4.4219 7.45317 4.4219 6.94664 4.73431 6.63422Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="toggle-text">
                        How do I get more visibility with brands on the
                        platform?
                      </div>
                    </div>
                    <nav
                      className="faq-body w-dropdown-list"
                      id="w-dropdown-list-11"
                      aria-labelledby="w-dropdown-toggle-11"
                    >
                      <div className="faq-body-cont">
                        <p
                          className="faq-answer"
                          style={{ color: "rgba(255, 255, 255, 0)" }}
                        >
                          To increase visibility, keep your profile updated with
                          your latest audience stats, content examples, and
                          pricing. Brands can filter and discover creators based
                          on specific criteria, so the more detailed your
                          profile, the better.
                          <br />
                          <br />
                          Share your Passionfroot link across your own platforms
                          for inbound leads.
                        </p>
                      </div>
                    </nav>
                  </div>
                  <div
                    data-delay={0}
                    data-hover="false"
                    className="faq-p w-dropdown"
                    style={{ height: "3.25rem", maxHeight: 120 }}
                  >
                    <div
                      className="faq w-dropdown-toggle"
                      id="w-dropdown-toggle-12"
                      aria-controls="w-dropdown-list-12"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="accordian-icon-wrap">
                        <div className="faq-bg-gradient orange-gradient" />
                        <div
                          className="faq-bg-gradient obsidian-gradient"
                          style={{ opacity: 1 }}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 17 16"
                          fill="none"
                          className="faq-chevron-icon"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.73431 6.63422C5.04673 6.3218 5.55327 6.3218 5.86569 6.63422L8.5 9.26853L11.1343 6.63422C11.4467 6.3218 11.9533 6.3218 12.2657 6.63422C12.5781 6.94664 12.5781 7.45317 12.2657 7.76559L9.06569 10.9656C8.75327 11.278 8.24673 11.278 7.93431 10.9656L4.73431 7.76559C4.4219 7.45317 4.4219 6.94664 4.73431 6.63422Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="toggle-text">
                        How do I communicate with brands?
                      </div>
                    </div>
                    <nav
                      className="faq-body w-dropdown-list"
                      id="w-dropdown-list-12"
                      aria-labelledby="w-dropdown-toggle-12"
                    >
                      <div className="faq-body-cont">
                        <p
                          className="faq-answer"
                          style={{ color: "rgba(255, 255, 255, 0)" }}
                        >
                          Passionfroot provides a direct messaging feature,
                          allowing you to easily communicate with brands,
                          discuss campaign details, and exchange feedback
                          throughout the partnership.
                        </p>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;

import Link from "next/link";
import React from "react";

const SectionPricing = () => {
  return (
    <div className="section_pricing">
      <div className="padding-global">
        <div className="container-xlarge">
          <div className="pricing_component">
            {/* Pricing Header */}
            <div
              className="pricing_header-wrapper"
              style={{ textAlign: "center", marginBottom: "2rem" }}
            >
              <div className="margin-bottom margin-small">
                <h2
                  className="heading-style-h3"
                  style={{ textAlign: "center", marginTop: 60 }}
                >
                  Simple, transparent pricing
                </h2>
              </div>
              <div
                className="pricing_companies-wrapper"
                style={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="text-size-regular">
                  All the tools you need to run your creator business —
                  replacing:
                </div>
                <div className="pricing_companies-icons">
                  {/* Company icons placeholder */}
                </div>
              </div>
            </div>

            {/* Pricing Cards Grid */}
            <div
              className="pricing_creator-wrapper"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                gap: "2rem",
                justifyContent: "center",
                alignItems: "stretch",
                marginTop: "2rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {/* Plan 1: Free */}
              <div
                className="pricing_plan-outer is-priority"
                style={{
                  minWidth: 0,
                  width: "100%",
                  maxWidth: "370px",
                  margin: "0 auto",
                }}
              >
                <div className="pricing_plan-callout">
                  <div>Free</div>
                </div>
                <div className="pricing_plan-header">
                  <div className="text-style-label-kansas">Free</div>
                  <div className="pricing_price-details">
                    <div className="heading-style-h4-v2">$0</div>
                    <div className="text-size-regular-v2">
                      Helping creators get started
                    </div>
                  </div>
                </div>
                <div className="pricing_plan-body">
                  <div className="pricing_info">
                    <div className="text-size-regular-v2 text-weight-bold">
                      For all creators
                    </div>
                    <div className="pricing_grid-point-wrapper">
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Media kit with live stats</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Squarespace</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check2)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check2"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Calendar &amp; scheduling</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Calendly</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check3)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check3"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Automated workflows &amp; booking forms</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Typeform</div>
                            </div>
                            <div className="pricing_replaces-item">
                              <div>Google Form</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check4)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check4"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Streamlined payments</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Stripe</div>
                            </div>
                            <div className="pricing_replaces-item">
                              <div>PayPal</div>
                            </div>
                            <div className="pricing_replaces-item">
                              <div>Bank Transfer</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check5)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check5"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Messaging</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Whatsapp</div>
                            </div>
                            <div className="pricing_replaces-item">
                              <div>Email</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison-no-tool">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check6)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check6"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>
                            High quality brand deals from our ad network
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/get-access"
                    target="_blank"
                    className="button-dark w-inline-block"
                  >
                    <div>Start for free</div>
                  </Link>
                </div>
              </div>

              {/* Plan 2: Basic */}
              <div
                className="pricing_plan-outer is-priority"
                style={{
                  minWidth: 0,
                  width: "100%",
                  maxWidth: "370px",
                  margin: "0 auto",
                }}
              >
                <div className="pricing_plan-callout">
                  <div>Basic</div>
                </div>
                <div className="pricing_plan-header">
                  <div className="text-style-label-kansas">Basic</div>
                  <div className="pricing_price-details">
                    <div className="heading-style-h4-v2">$9</div>
                    <div className="text-size-regular-v2">
                      For growing creators
                    </div>
                  </div>
                </div>
                <div className="pricing_plan-body">
                  <div className="pricing_info">
                    <div className="text-size-regular-v2 text-weight-bold">
                      Everything in Free, plus:
                    </div>
                    <div className="pricing_grid-point-wrapper">
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Media kit with live stats</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Squarespace</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check2)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check2"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Calendar &amp; scheduling</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Calendly</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check3)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check3"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Automated workflows &amp; booking forms</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Typeform</div>
                            </div>
                            <div className="pricing_replaces-item">
                              <div>Google Form</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check4)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check4"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Streamlined payments</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Stripe</div>
                            </div>
                            <div className="pricing_replaces-item">
                              <div>PayPal</div>
                            </div>
                            <div className="pricing_replaces-item">
                              <div>Bank Transfer</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check5)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check5"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Messaging</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Whatsapp</div>
                            </div>
                            <div className="pricing_replaces-item">
                              <div>Email</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison-no-tool">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check6)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check6"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>
                            High quality brand deals from our ad network
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/get-access"
                    target="_blank"
                    className="button-dark w-inline-block"
                  >
                    <div>Start Basic</div>
                  </Link>
                </div>
              </div>

              {/* Plan 3: Pro */}
              <div
                className="pricing_plan-outer is-priority"
                style={{
                  minWidth: 0,
                  width: "100%",
                  maxWidth: "370px",
                  margin: "0 auto",
                }}
              >
                <div className="pricing_plan-callout">
                  <div>Pro</div>
                </div>
                <div className="pricing_plan-header">
                  <div className="text-style-label-kansas">Pro</div>
                  <div className="pricing_price-details">
                    <div className="heading-style-h4-v2">$29</div>
                    <div className="text-size-regular-v2">
                      For professional creators
                    </div>
                  </div>
                </div>
                <div className="pricing_plan-body">
                  <div className="pricing_info">
                    <div className="text-size-regular-v2 text-weight-bold">
                      Everything in Basic, plus:
                    </div>
                    <div className="pricing_grid-point-wrapper">
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Media kit with live stats</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Squarespace</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check2)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check2"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Calendar &amp; scheduling</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Calendly</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check3)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check3"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Automated workflows &amp; booking forms</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Typeform</div>
                            </div>
                            <div className="pricing_replaces-item">
                              <div>Google Form</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check4)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check4"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Streamlined payments</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Stripe</div>
                            </div>
                            <div className="pricing_replaces-item">
                              <div>PayPal</div>
                            </div>
                            <div className="pricing_replaces-item">
                              <div>Bank Transfer</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check5)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check5"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>Messaging</div>
                          <div className="pricing_replaces-wrapper">
                            <div>Replaces</div>
                            <div className="pricing_replaces-item">
                              <div>Whatsapp</div>
                            </div>
                            <div className="pricing_replaces-item">
                              <div>Email</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing_plan-point-wrapper is-comparison-no-tool">
                        <div className="pricing_check w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="url(#paint0_linear_pricing_check6)"
                            />
                            <path
                              d="M6.11108 10.5556L8.33331 12.7778L13.8889 7.22229"
                              stroke="currentColor"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_pricing_check6"
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="20"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B3D3D" />
                                <stop offset="1" stopColor="#191A1A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="pricing_plan-creator-text">
                          <div>
                            High quality brand deals from our ad network
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/get-access"
                    target="_blank"
                    className="button-dark w-inline-block"
                  >
                    <div>Start Pro</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPricing;

"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section_footer obsidian-gradient">
      <div className="padding-global">
        <div className="container-xlarge">
          <div className="footer_component-outer">
            <div className="footer_top-section" style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "2.5rem"
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%"
              }}>
                <Link
                  href="/"
                  aria-label="Supreme Coach-homepage-link"
                  className="footer-logo-link w-inline-block"
                >
                  <div className="pf-footer-logo w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 281 48"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                      role="img"
                    >
                      <text
                        x="0"
                        y="30"
                        fontFamily="new-kansas, Georgia, serif"
                        fontSize="34"
                        fontWeight="700"
                        fill="currentColor"
                      >
                        Supreme Coach
                      </text>
                    </svg>
                  </div>
                </Link>
                <div className="footer_socials-wrapper" style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center"
                }}>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-item"
                    aria-label="Twitter"
                  >
                    <div className="social-icon-footer w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 1.75a7.5 7.5 0 01-2.125 1.875c0 .125 0 .25-.062.375a10.5 10.5 0 01-3 4.125 10.5 10.5 0 01-4.5 2.625 10.5 10.5 0 01-5.25-.375 7.5 7.5 0 01-1.875-.75l-.375-.375a7.5 7.5 0 01-1.125-1.5l-.375-.75a7.5 7.5 0 01-.375-1.125c0-.25.062-.5.187-.75a7.5 7.5 0 01.75-1.5l.375-.375a7.5 7.5 0 011.5-1.125 7.5 7.5 0 011.875-.75 10.5 10.5 0 015.25-.375 7.5 7.5 0 014.5 2.625 7.5 7.5 0 012.125-1.875l.375.375a7.5 7.5 0 011.5 1.125l.75.75a7.5 7.5 0 01.75 1.5c.125.25.187.5.187.75z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-item"
                    aria-label="Instagram"
                  >
                    <div className="social-icon-footer w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.5"
                          y="1.5"
                          width="15"
                          height="15"
                          rx="4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <circle
                          cx="9"
                          cy="9"
                          r="3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <circle cx="13.5" cy="4.5" r="1" fill="currentColor" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-item"
                    aria-label="LinkedIn"
                  >
                    <div className="social-icon-footer w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 2.25C3.67157 2.25 3 2.92157 3 3.75C3 4.57843 3.67157 5.25 4.5 5.25C5.32843 5.25 6 4.57843 6 3.75C6 2.92157 5.32843 2.25 4.5 2.25Z"
                          fill="currentColor"
                        />
                        <path d="M3 6.75V15.75H6V6.75H3Z" fill="currentColor" />
                        <path
                          d="M8.25 6.75V15.75H11.25V11.25C11.25 9.75 12 9 13.5 9C15 9 15.75 9.75 15.75 11.25V15.75H18.75V10.5C18.75 7.5 17.25 6 15 6C13.5 6 12.75 6.75 12 7.5V6.75H8.25Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-item"
                    aria-label="YouTube"
                  >
                    <div className="social-icon-footer w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.5 2.5C19.5 1.5 18.75 0.75 17.75 0.75H2.25C1.25 0.75 0.5 1.5 0.5 2.5V11.5C0.5 12.5 1.25 13.25 2.25 13.25H17.75C18.75 13.25 19.5 12.5 19.5 11.5V2.5ZM8 9.5V4.5L13 7L8 9.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer_links-side">
                <div className="footer_links-grid">
                  <div className="footer_links-column">
                    <div className="footer-title">Resources</div>
                    <div className="footer_links-wrapper">
                      <Link href="/blog" className="footer-link">
                        Blog
                      </Link>
                      <Link href="/creators-on-air" className="footer-link">
                        Podcasts
                      </Link>
                      <div className="footer-link-wrap">
                        <Link href="/guides" className="footer-link">
                          Guides
                        </Link>
                        <div className="footer-badge-wrapper">
                          <div className="footer-badge-dot"></div>
                          <span className="footer-badge-text">New</span>
                        </div>
                      </div>
                      <div className="footer-link-wrap">
                        <Link href="/stories" className="footer-link">
                          Stories
                        </Link>
                        <div className="footer-badge-wrapper">
                          <div className="footer-badge-dot"></div>
                          <span className="footer-badge-text">New</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer_links-column">
                    <div className="footer-title">Company</div>
                    <div className="footer_links-wrapper">
                      <Link href="#" className="footer-link">
                        Product
                      </Link>
                      <Link href="/about" className="footer-link">
                        About
                      </Link>
                      <div className="footer-link-wrap">
                        <Link href="#" className="footer-link">
                          Careers
                        </Link>
                        <div className="footer-badge-wrapper">
                          <div className="footer-badge-dot"></div>
                          <span className="footer-badge-text">Hiring</span>
                        </div>
                      </div>
                      <Link href="#" className="footer-link">
                        Wall of Love
                      </Link>
                    </div>
                  </div>
                  <div className="footer_links-column">
                    <div className="footer-title">Industrys</div>
                    <div className="footer_links-wrapper">
                      <Link href="#" className="footer-link">
                        E-commerce
                      </Link>
                      <Link href="#" className="footer-link">
                        SaaS
                      </Link>
                      <Link href="#" className="footer-link">
                        Education
                      </Link>
                      <Link href="#" className="footer-link">
                        Health & Fitness
                      </Link>
                    </div>
                  </div>
                  <div className="footer_links-column">
                    <div className="footer-title">Support</div>
                    <div className="footer_links-wrapper">
                      <Link href="#" className="footer-link">
                        Contact Us
                      </Link>
                      <Link href="#" className="footer-link">
                        Documentation
                      </Link>
                      <Link href="#" className="footer-link">
                        API Reference
                      </Link>
                      <Link href="#" className="footer-link">
                        Status
                      </Link>
                    </div>
                  </div>
                  <div className="footer_links-column">
                    <div className="footer-title">Legal</div>
                    <div className="footer_links-wrapper">
                      <Link href="#" className="footer-link">
                        Terms of Service
                      </Link>
                      <Link href="/privacy-policy" className="footer-link">
                        Privacy Policy
                      </Link>
                      <Link href="/cookie-policy" className="footer-link">
                        Cookie Policy
                      </Link>
                      <Link href="#" className="footer-link">
                        GDPR
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="footer_bottom"
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "48px",
                width: "100%",
              }}
            >
              <div
                className="footer-description"
                style={{
                  maxWidth: "600px",
                }}
              >
                <div className="color-neutral-300">
                  <div
                    className="text-size-small text-weight-medium"
                    style={{ color: "#fff", lineHeight: 1.5 }}
                  >
                    Supreme Coach helps marketers to scale their go to market
                    with content partnerships
                    <br />
                    and creators to run and manage their brand partnerships in
                    one place.
                  </div>
                </div>
              </div>
              <div
                className="footer-bottom-legal"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "end",
                  gap: "10px",
                }}
              >
                <div
                  className="text-size-small text-weight-medium"
                  style={{ color: "#fff" }}
                >
                  © <span id="currentYear">2025</span> Supreme Coach GmbH. All
                  rights reserved.
                </div>
                <div className="footer-legal-links">
                  <Link href="/impressum" className="link w-inline-block">
                    <div
                      className="text-size-small text-weight-medium"
                      style={{ color: "#fff" }}
                    >
                      Impressum
                    </div>
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="link w-inline-block"
                  >
                    <div
                      className="text-size-small text-weight-medium"
                      style={{ color: "#fff" }}
                    >
                      Privacy policy
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

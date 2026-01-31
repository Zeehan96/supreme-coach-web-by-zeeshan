"use client";

import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const sidebarItems = [
  "Introduction",
  "Acceptance of Terms",
  "User Obligations",
  "Account & Registration",
  "Payment & Billing",
  "Subscription Terms",
  "Prohibited Conduct",
  "Intellectual Property",
  "Disclaimer of Warranties",
  "Limitation of Liability",
  "Governing Law",
  "Changes to Terms",
  "Contact"
];

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.current?.observe(section));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Header />
      <div className="section_privacy-policy" style={{ paddingTop: "120px", paddingBottom: "80px", backgroundColor: "#fff" }}>
        <div className="padding-global">
          <div className="container-large">
            <div className="privacy-content-wrapper" style={{ maxWidth: "1200px", margin: "0 auto" }}>

              {/* Header Section */}
              <div className="privacy-header" style={{ marginBottom: "60px" }}>
                <h1 className="heading-style-h1" style={{ fontSize: "3.5rem", fontWeight: "700", marginBottom: "24px", color: "#1a1a1a" }}>
                  Terms of Service
                </h1>
                <div className="author-info" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ display: "flex", flexDirection: "column", fontSize: "0.9rem", color: "#666" }}>
                    <span style={{ fontWeight: "600", color: "#333" }}>Last updated: 13 June, 2025</span>
                    <span>Effective date: 13 June, 2025</span>
                  </div>
                </div>
              </div>

              {/* Main Content Grid - Content First (Left), Sidebar Second (Right) */}
              <div className="privacy-grid" style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "80px" }}>

                {/* Content Area (Left) */}
                <div className="privacy-text-content">

                  <section id="introduction" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                    <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                      Introduction
                    </h2>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444", marginBottom: "20px" }}>
                      These Terms of Service ("Terms") govern your use of the Supreme Coach platform and services ("Service"). By accessing or using the Service you agree to be bound by these Terms. If you do not agree, do not use the Service.
                    </p>
                  </section>

                  <section id="acceptance-of-terms" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                    <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                      Acceptance of Terms
                    </h2>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                      By creating an account, or using the Service, you accept these Terms and the Privacy Policy. You confirm that you have the authority to enter into these Terms on behalf of yourself or the entity you represent.
                    </p>
                  </section>

                  <section id="user-obligations" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                    <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                      User Obligations
                    </h2>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                      You agree to provide accurate information, keep account credentials secure, and use the Service in compliance with applicable laws and these Terms.
                    </p>
                  </section>

                  <section id="account-registration" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                    <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                      Account & Registration
                    </h2>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                      Accounts are for individuals or entities. You are responsible for activity occurring under your account and for maintaining security of your account credentials.
                    </p>
                  </section>

                  <section id="payment-billing" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                    <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                      Payment & Billing
                    </h2>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                      Paid features are billed according to the plan you select. You agree to pay all fees and taxes associated with your account. Refunds are handled as described in the applicable plan terms.
                    </p>
                  </section>

                  <section id="subscription-terms" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                    <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                      Subscription Terms
                    </h2>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                      Subscriptions renew automatically unless cancelled. You may cancel at any time from your account settings; cancellation takes effect at the end of the current billing period.
                    </p>
                  </section>

                  <section id="prohibited-conduct" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                    <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                      Prohibited Conduct
                    </h2>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                      You must not misuse the Service, including but not limited to attempting to gain unauthorized access, reverse engineer the Service, or upload unlawful content.
                    </p>
                  </section>

                  <section id="intellectual-property" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                    <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                      Intellectual Property
                    </h2>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                      All content provided by the Service is the property of Supreme Coach or its licensors. You retain ownership of content you upload but grant us a license to operate the Service.
                    </p>
                  </section>

                  <section id="disclaimer-of-warranties" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                    <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                      Disclaimer of Warranties
                    </h2>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                      The Service is provided "as is" without warranties of any kind. To the fullest extent permitted by law, we disclaim all warranties, express or implied.
                    </p>
                  </section>

                  <section id="limitation-of-liability" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                    <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                      Limitation of Liability
                    </h2>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                      To the maximum extent permitted by law, our liability to you is limited. We are not liable for indirect or consequential damages arising from your use of the Service.
                    </p>
                  </section>

                  <section id="governing-law" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                    <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                      Governing Law
                    </h2>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                      These Terms are governed by the laws applicable where Supreme Coach is incorporated. Disputes will be resolved in the courts with jurisdiction over the company.
                    </p>
                  </section>

                  <section id="changes-to-terms" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                    <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                      Changes to Terms
                    </h2>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                      We may update these Terms from time to time. We will notify users of material changes by posting the updated terms and updating the effective date.
                    </p>
                  </section>

                  <section id="contact" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                    <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                      Contact
                    </h2>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                      For questions about these Terms, contact us at <a href="mailto:legal@supremecoach.me" style={{ color: "#D1552D", textDecoration: "underline" }}>legal@supremecoach.me</a>.
                    </p>
                  </section>

                </div>

                {/* Sidebar Navigation (Right) */}
                <div className="privacy-sidebar" style={{ position: "sticky", top: "120px", height: "fit-content" }}>
                  <div style={{ borderLeft: "2px solid #eee", display: "flex", flexDirection: "column" }}>
                    {sidebarItems.map((item, index) => {
                      const id = item.replace(/\s+/g, '-').toLowerCase();
                      const isActive = activeSection === id;
                      return (
                        <a
                          key={index}
                          href={`#${id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          style={{
                            textDecoration: "none",
                            color: isActive ? "#1a1a1a" : "#666",
                            fontWeight: isActive ? "600" : "400",
                            fontSize: "0.95rem",
                            padding: "8px 0 8px 24px",
                            borderLeft: isActive ? "2px solid #1a1a1a" : "2px solid transparent",
                            marginLeft: "-2px",
                            transition: "all 0.2s",
                            display: "block"
                          }}
                        >
                          {item}
                        </a>
                      )
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        @media (max-width: 991px) {
             .privacy-grid {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
             }
             .privacy-sidebar {
                display: none; 
             }
        }
      `}</style>
    </>
  );
}

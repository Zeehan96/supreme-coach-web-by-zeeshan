"use client";

import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const sidebarItems = [
    "Preamble",
    "Table of contents",
    "Controller",
    "Overview of processing operations",
    "Categories of Processed Data",
    "Categories of Data Subjects",
    "Purposes of Processing",
    "Legal Bases for the Processing",
    "National data protection regulations in Germany",
    "Transmission of Personal Data",
    "Data Processing in Third Countries",
    "Retention of Data"
];

export default function PrivacyPolicyPage() {
    const [activeSection, setActiveSection] = useState("preamble");
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
                                    Privacy Policy
                                </h1>
                                <div className="author-info" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                    <img
                                        src="https://static.intercomassets.com/avatars/7074571/square_128/lud-profile-1741862471.jpeg"
                                        alt="Ludwig Hedlund"
                                        style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
                                    />
                                    <div style={{ display: "flex", flexDirection: "column", fontSize: "0.9rem", color: "#666" }}>
                                        <span style={{ fontWeight: "600", color: "#333" }}>Written by Ludwig Hedlund</span>
                                        <span>Updated over 7 months ago</span>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content Grid - Content First (Left), Sidebar Second (Right) */}
                            <div className="privacy-grid" style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "80px" }}>

                                {/* Content Area (Left) */}
                                <div className="privacy-text-content">

                                    <section id="preamble" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                                        <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                                            Preamble
                                        </h2>
                                        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444", marginBottom: "20px" }}>
                                            With the following privacy policy we would like to inform you which types of your personal data (hereinafter also abbreviated as "Data") we process for which purposes and in which scope. The privacy statement applies to all processing of personal data carried out by Passionfroot (hereinafter referenced as "We" and "Us"), in the context of providing our services and in particular on our websites, and within external online presences, such as our social media profiles (hereinafter collectively referred to as "Online Services").
                                        </p>
                                        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                                            Last Update: 13 June, 2025
                                        </p>
                                    </section>

                                    <section id="table-of-contents" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                                        <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                                            Table of contents
                                        </h2>
                                        <ul style={{ paddingLeft: "1.5rem", fontSize: "1.05rem", lineHeight: "1.8", color: "#444" }}>
                                            <li>Preamble</li>
                                            <li>Controller</li>
                                            <li>Overview of processing operations</li>
                                            <li>Categories of Processed Data</li>
                                            <li>Categories of Data Subjects</li>
                                            <li>Purposes of Processing</li>
                                            <li>Legal Bases for the Processing</li>
                                            <li>Security Measures</li>
                                            <li>Transmission of Personal Data</li>
                                            <li>Data Processing in Third Countries</li>
                                            <li>Retention of Data</li>
                                        </ul>
                                    </section>

                                    <section id="controller" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                                        <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                                            Controller
                                        </h2>
                                        <div style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                                            <p style={{ marginBottom: "20px" }}>
                                                Passionfroot GmbH<br />
                                                Chausseestraße 40A<br />
                                                10115 Berlin
                                            </p>
                                            <p style={{ marginBottom: "5px" }}>
                                                E-mail address: <a href="mailto:legal@passionfroot.me" style={{ color: "#D1552D", textDecoration: "underline" }}>legal@passionfroot.me</a>
                                            </p>
                                            <p>
                                                Legal Notice: <a href="https://www.passionfroot.me/impressum" target="_blank" rel="noopener noreferrer" style={{ color: "#D1552D", textDecoration: "underline" }}>https://www.passionfroot.me/impressum</a>
                                            </p>
                                        </div>
                                    </section>

                                    <section id="overview-of-processing-operations" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                                        <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                                            Overview of processing operations
                                        </h2>
                                        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                                            The following summarises the types of data processed, the purposes for which they are processed and the concerned data subjects.
                                        </p>
                                    </section>

                                    <section id="categories-of-processed-data" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                                        <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                                            Categories of Processed Data
                                        </h2>
                                        <ul style={{ paddingLeft: "1.5rem", fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                                            <li>
                                                Event Data (Facebook) ("Event Data" is data that can be transmitted from us to Facebook, e.g. via Facebook pixels (via apps or other means) and relates to persons or their actions; the data includes, for example, information about visits to websites, interactions with content, functions, installations of apps, purchases of products, etc.; Event data is processed for the purpose of creating target groups for content and advertising information (Custom Audiences); Event Data does not include the actual content (such as written code), no login data and contact information, even if it is not encrypted).
                                            </li>
                                        </ul>
                                    </section>

                                    {/* Placeholders for remaining sections */}
                                    {sidebarItems.slice(5).map(item => {
                                        const id = item.replace(/\s+/g, '-').toLowerCase();
                                        return (
                                            <section key={id} id={id} style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                                                <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                                                    {item}
                                                </h2>
                                                <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                                                    [Content for {item} will be added here.]
                                                </p>
                                            </section>
                                        )
                                    })}

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

"use client";

import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const sidebarItems = [
    "What are cookies",
    "How we use cookies",
    "Types of cookies we use",
    "Managing cookies",
    "Third-party cookies",
    "Updates to this policy"
];

export default function CookiePolicyPage() {
    const [activeSection, setActiveSection] = useState("what-are-cookies");
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
            <div className="section_cookie-policy" style={{ paddingTop: "120px", paddingBottom: "80px", backgroundColor: "#fff" }}>
                <div className="padding-global">
                    <div className="container-large">
                        <div className="privacy-content-wrapper" style={{ maxWidth: "1200px", margin: "0 auto" }}>

                            {/* Header Section */}
                            <div className="privacy-header" style={{ marginBottom: "60px" }}>
                                <h1 className="heading-style-h1" style={{ fontSize: "3.5rem", fontWeight: "700", marginBottom: "24px", color: "#1a1a1a" }}>
                                    Cookie Policy
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

                                    <section id="what-are-cookies" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                                        <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                                            What are cookies?
                                        </h2>
                                        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444", marginBottom: "20px" }}>
                                            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                                        </p>
                                    </section>

                                    <section id="how-we-use-cookies" style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                                        <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                                            How we use cookies
                                        </h2>
                                        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444", marginBottom: "20px" }}>
                                            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                                        </p>
                                    </section>

                                    {/* Dynamically generate remaining sections */}
                                    {sidebarItems.slice(2).map(item => {
                                        const id = item.replace(/\s+/g, '-').toLowerCase();
                                        return (
                                            <section key={id} id={id} style={{ marginBottom: "60px", scrollMarginTop: "120px" }}>
                                                <h2 className="heading-style-h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "#1a1a1a" }}>
                                                    {item}
                                                </h2>
                                                <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }}>
                                                    [Detailed information about {item.toLowerCase()} will be provided here. We are committed to transparency in our data practices.]
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

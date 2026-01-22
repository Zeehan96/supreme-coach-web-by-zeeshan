"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function SignupPageContent() {
  const [selectedRole, setSelectedRole] = useState<"creator" | "partner" | null>(null);
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .signup-page-container {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 1rem;
          background: linear-gradient(180deg, rgba(255, 164, 102, 0.1) 0%, rgba(255, 255, 255, 1) 100%);
        }
        .signup-page-wrapper {
          position: relative;
          width: 100%;
          min-height: 100vh;
        }
        .back-to-pricing {
          position: fixed;
          top: 100px;
          left: 2rem;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #5d5d5b;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.2s;
          background: rgba(255, 255, 255, 0.9);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }
        .back-to-pricing:hover {
          color: #191A1A;
          background: rgba(255, 255, 255, 1);
        }
        .signup-card {
          background: white;
          border-radius: 16px;
          padding: 3rem;
          max-width: 800px;
          width: 100%;
          box-shadow: 0px 4px 24px rgba(25, 26, 26, 0.08);
        }
        .welcome-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .welcome-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 1rem;
          font-size: 2rem;
        }
        .role-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .role-card {
          padding: 2rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }
        .role-card:hover {
          transform: translateY(-4px);
          box-shadow: 0px 8px 24px rgba(25, 26, 26, 0.12);
        }
        .role-card.creator {
          background: linear-gradient(135deg, #fce4ec 0%, #f3e5f5 100%);
        }
        .role-card.creator:hover {
          border-color: #e91e63;
        }
        .role-card.creator.selected {
          border-color: #e91e63;
          border-width: 3px;
          box-shadow: 0px 8px 24px rgba(233, 30, 99, 0.2);
        }
        .role-card.partner {
          background: linear-gradient(135deg, #e3f2fd 0%, #e8f5e9 100%);
        }
        .role-card.partner:hover {
          border-color: #2196f3;
        }
        .role-card.partner.selected {
          border-color: #2196f3;
          border-width: 3px;
          box-shadow: 0px 8px 24px rgba(33, 150, 243, 0.2);
        }
        .role-illustration {
          width: 120px;
          height: 120px;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .role-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          text-align: center;
          color: #191A1A;
        }
        .role-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #5d5d5b;
          text-align: center;
        }
        .signup-button {
          width: 100%;
          padding: 1rem 2rem;
          background: #191A1A;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .signup-button:hover {
          background: #3B3D3D;
          transform: translateY(-2px);
          box-shadow: 0px 4px 12px rgba(25, 26, 26, 0.2);
        }
        @media (max-width: 768px) {
          .role-cards {
            grid-template-columns: 1fr;
          }
          .back-to-pricing {
            left: 1rem;
            top: 80px;
          }
          .signup-card {
            padding: 2rem 1.5rem;
          }
        }
      `,
        }}
      />
      <div className="signup-page-wrapper">
        <Link href="/pricing" className="back-to-pricing">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to pricing
        </Link>

        <div className="signup-page-container">
          <div className="signup-card">
            <div className="welcome-header">
              <div className="welcome-icon">👋</div>
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "#191A1A",
                }}
              >
                Welcome to Supreme Coach
              </h1>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#191A1A",
                }}
              >
                Pick your role to get started
              </h2>
            </div>

            <div className="role-cards">
              <div
                className={`role-card creator ${selectedRole === "creator" ? "selected" : ""}`}
                onClick={() => setSelectedRole("creator")}
              >
                <div className="role-illustration">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="50" r="15" stroke="#191A1A" strokeWidth="2" />
                    <circle cx="80" cy="50" r="15" stroke="#191A1A" strokeWidth="2" />
                    <path
                      d="M30 70 Q40 80 50 70"
                      stroke="#191A1A"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M70 70 Q80 80 90 70"
                      stroke="#191A1A"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect x="35" y="30" width="10" height="15" rx="2" stroke="#191A1A" strokeWidth="2" />
                    <rect x="75" y="30" width="10" height="15" rx="2" stroke="#191A1A" strokeWidth="2" />
                    <circle cx="40" cy="25" r="8" fill="#191A1A" />
                    <circle cx="80" cy="25" r="8" fill="#191A1A" />
                  </svg>
                </div>
                <div className="role-title">I&apos;m a Creator</div>
                <div className="role-description">
                  Get discovered by trusted B2B brands, manage collabs, and get paid — all in one place.
                </div>
              </div>

              <div
                className={`role-card partner ${selectedRole === "partner" ? "selected" : ""}`}
                onClick={() => setSelectedRole("partner")}
              >
                <div className="role-illustration">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="30" y="40" width="40" height="30" rx="4" stroke="#191A1A" strokeWidth="2" />
                    <rect x="35" y="45" width="30" height="20" fill="#191A1A" opacity="0.2" />
                    <line x1="40" y1="55" x2="60" y2="55" stroke="#191A1A" strokeWidth="2" />
                    <line x1="40" y1="60" x2="55" y2="60" stroke="#191A1A" strokeWidth="2" />
                    <circle cx="50" cy="30" r="12" stroke="#191A1A" strokeWidth="2" />
                    <path
                      d="M30 85 Q50 75 70 85"
                      stroke="#191A1A"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect x="70" y="50" width="25" height="40" rx="4" stroke="#191A1A" strokeWidth="2" />
                    <rect x="72" y="55" width="21" height="30" fill="#191A1A" opacity="0.2" />
                    <circle cx="82.5" cy="65" r="3" fill="#191A1A" />
                    <line x1="75" y1="75" x2="90" y2="75" stroke="#191A1A" strokeWidth="2" />
                  </svg>
                </div>
                <div className="role-title">I&apos;m a Partner</div>
                <div className="role-description">
                  Access a curated network of high-quality creators, manage campaigns, and track results in one place.
                </div>
              </div>
            </div>

            <button className="signup-button">
              {selectedRole === "creator"
                ? "Sign up as a Creator"
                : selectedRole === "partner"
                ? "Sign up as a Partner"
                : "Sign up as a Creator"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


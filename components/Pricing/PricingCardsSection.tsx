"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

type PricingCardsSectionProps = {
  type?: "coach" | "firms";
};

const PricingCardsSection = ({ type = "coach" }: PricingCardsSectionProps) => {
  const [selectedType, setSelectedType] = useState<"coach" | "firms">(type);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isCoach = selectedType === "coach";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Reset animation when type changes
  useEffect(() => {
    setIsInView(false);
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsInView(true);
              }
            });
          },
          {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px",
          }
        );
        observer.observe(sectionRef.current);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [selectedType]);

  const CheckIcon = () => (
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
  );

  const FeatureItem = ({
    text,
    replaces,
  }: {
    text: string;
    replaces?: string[];
  }) => (
    <div className="pricing_plan-point-wrapper is-comparison">
      <div className="pricing_check w-embed">
        <CheckIcon />
      </div>
      <div className="pricing_plan-creator-text">
        <div>{text}</div>
        {replaces && replaces.length > 0 && (
          <div className="pricing_replaces-wrapper">
            <div>Replaces</div>
            {replaces.map((item, idx) => (
              <div key={idx} className="pricing_replaces-item">
                <div>{item}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const PricingCard = ({
    name,
    price,
    description,
    callout,
    features,
    buttonText,
    isPriority = false,
  }: {
    name: string;
    price: string;
    description: string;
    callout?: string;
    features: Array<{ text: string; replaces?: string[] }>;
    buttonText: string;
    isPriority?: boolean;
  }) => (
    <div
      className={`pricing_plan-outer ${isPriority ? "is-priority" : ""}`}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {callout && (
        <div className="pricing_plan-callout">
          <div>{callout}</div>
        </div>
      )}
      <div className="pricing_plan-header">
        <div className="text-style-label-kansas">{name}</div>
        <div className="pricing_price-details">
          <div className="heading-style-h4-v2">{price}</div>
          <div className="text-size-regular-v2">{description}</div>
        </div>
      </div>
      <div className="pricing_plan-body">
        <div className="pricing_info">
          <div className="text-size-regular-v2 text-weight-bold">
            {name === "Free"
              ? isCoach
                ? "For all coaches"
                : "For all firms"
              : name === "Basic"
              ? "Everything in Free, plus:"
              : "Everything in Basic, plus:"}
          </div>
          <div className="pricing_grid-point-wrapper">
            {features.map((feature, idx) => (
              <FeatureItem
                key={idx}
                text={feature.text}
                replaces={feature.replaces}
              />
            ))}
          </div>
        </div>
        <Link
          href="/signup"
          className="button-dark w-inline-block"
        >
          <div>{buttonText}</div>
        </Link>
      </div>
    </div>
  );

  // Define plans for coaches
  const coachPlans = [
    {
      name: "Free",
      price: "$0",
      description: "Helping coaches get started",
      callout: "GET STARTED",
      features: [
        { text: "Media kit with live stats", replaces: ["Squarespace"] },
        { text: "Calendar & scheduling", replaces: ["Calendly"] },
        {
          text: "Automated workflows & booking forms",
          replaces: ["Typeform", "Google Form"],
        },
        {
          text: "Streamlined payments",
          replaces: ["Stripe", "PayPal", "Bank Transfer"],
        },
        { text: "Messaging", replaces: ["Whatsapp", "Email"] },
        { text: "High quality brand deals from our ad network" },
      ],
      buttonText: "Start for free",
      isPriority: true,
    },
    {
      name: "Basic",
      price: "$9",
      description: "For growing coaches",
      callout: "Basic",
      features: [
        { text: "Media kit with live stats", replaces: ["Squarespace"] },
        { text: "Calendar & scheduling", replaces: ["Calendly"] },
        {
          text: "Automated workflows & booking forms",
          replaces: ["Typeform", "Google Form"],
        },
        {
          text: "Streamlined payments",
          replaces: ["Stripe", "PayPal", "Bank Transfer"],
        },
        { text: "Messaging", replaces: ["Whatsapp", "Email"] },
        { text: "High quality brand deals from our ad network" },
      ],
      buttonText: "Start Basic",
      isPriority: true,
    },
    {
      name: "Pro",
      price: "$29",
      description: "For professional coaches",
      callout: "Pro",
      features: [
        { text: "Media kit with live stats", replaces: ["Squarespace"] },
        { text: "Calendar & scheduling", replaces: ["Calendly"] },
        {
          text: "Automated workflows & booking forms",
          replaces: ["Typeform", "Google Form"],
        },
        {
          text: "Streamlined payments",
          replaces: ["Stripe", "PayPal", "Bank Transfer"],
        },
        { text: "Messaging", replaces: ["Whatsapp", "Email"] },
        { text: "High quality brand deals from our ad network" },
      ],
      buttonText: "Start Pro",
      isPriority: true,
    },
  ];

  // Define plans for firms
  const firmsPlans = [
    {
      name: "Free",
      price: "$0",
      description: "Helping firms get started",
      callout: "GET STARTED",
      features: [
        { text: "Media kit with live stats", replaces: ["Squarespace"] },
        { text: "Calendar & scheduling", replaces: ["Calendly"] },
        {
          text: "Automated workflows & booking forms",
          replaces: ["Typeform", "Google Form"],
        },
        {
          text: "Streamlined payments",
          replaces: ["Stripe", "PayPal", "Bank Transfer"],
        },
        { text: "Messaging", replaces: ["Whatsapp", "Email"] },
        { text: "High quality brand deals from our ad network" },
      ],
      buttonText: "Start for free",
      isPriority: true,
    },
    {
      name: "Basic",
      price: "$9",
      description: "For growing firms",
      callout: "Basic",
      features: [
        { text: "Media kit with live stats", replaces: ["Squarespace"] },
        { text: "Calendar & scheduling", replaces: ["Calendly"] },
        {
          text: "Automated workflows & booking forms",
          replaces: ["Typeform", "Google Form"],
        },
        {
          text: "Streamlined payments",
          replaces: ["Stripe", "PayPal", "Bank Transfer"],
        },
        { text: "Messaging", replaces: ["Whatsapp", "Email"] },
        { text: "High quality brand deals from our ad network" },
      ],
      buttonText: "Start Basic",
      isPriority: true,
    },
    {
      name: "Pro",
      price: "$29",
      description: "For professional firms",
      callout: "Pro",
      features: [
        { text: "Media kit with live stats", replaces: ["Squarespace"] },
        { text: "Calendar & scheduling", replaces: ["Calendly"] },
        {
          text: "Automated workflows & booking forms",
          replaces: ["Typeform", "Google Form"],
        },
        {
          text: "Streamlined payments",
          replaces: ["Stripe", "PayPal", "Bank Transfer"],
        },
        { text: "Messaging", replaces: ["Whatsapp", "Email"] },
        { text: "High quality brand deals from our ad network" },
      ],
      buttonText: "Start Pro",
      isPriority: true,
    },
  ];

  const plans = isCoach ? coachPlans : firmsPlans;

  return (
    <div className="section_pricing" ref={sectionRef}>
      <div className="padding-global">
        <div className="container-xlarge">
          <div className={`pricing_component ${isInView ? "in-view" : ""}`}>
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
                  All the tools you need to run your{" "}
                  {isCoach ? "coaching" : "firm"} business — replacing:
                </div>
                <div className="pricing_companies-icons">
                  {/* Company icons placeholder */}
                </div>
              </div>
            </div>

            {/* Toggle Switch */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "3rem",
                marginTop: "2rem",
              }}
            >
              <button
                onClick={() => setSelectedType("coach")}
                style={{
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: isCoach ? 700 : 500,
                  borderRadius: "8px",
                  border: "1px solid rgba(25, 26, 26, 0.1)",
                  background: isCoach
                    ? "linear-gradient(73deg, #fca061, #ffc7a1)"
                    : "linear-gradient(#fbfbf8, #f7f5ee)",
                  color: isCoach ? "#191A1A" : "#5d5d5b",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow: isCoach
                    ? "0 2px 2px -1px #191a1a08, 0 4px 4px -2px #191a1a05"
                    : "0 2px 2px -1px #191a1a08, 0 4px 4px -2px #191a1a05",
                }}
              >
                Coaching Plan
              </button>
              <button
                onClick={() => setSelectedType("firms")}
                style={{
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: !isCoach ? 700 : 500,
                  borderRadius: "8px",
                  border: "1px solid rgba(25, 26, 26, 0.1)",
                  background: !isCoach
                    ? "linear-gradient(73deg, #fca061, #ffc7a1)"
                    : "linear-gradient(#fbfbf8, #f7f5ee)",
                  color: !isCoach ? "#191A1A" : "#5d5d5b",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow: !isCoach
                    ? "0 2px 2px -1px #191a1a08, 0 4px 4px -2px #191a1a05"
                    : "0 2px 2px -1px #191a1a08, 0 4px 4px -2px #191a1a05",
                }}
              >
                Firms Plan
              </button>
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
                width: "100%",
                maxWidth: "100%",
              }}
            >
              {plans.map((plan, idx) => (
                <PricingCard key={`${selectedType}-${idx}`} {...plan} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCardsSection;


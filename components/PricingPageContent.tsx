"use client";

import React from "react";
import PricingHeroSection from "./Pricing/PricingHeroSection";
import PricingCardsSection from "./Pricing/PricingCardsSection";
import FaqSection from "./Payment/FaqSection";

type PricingPageContentProps = {
  type?: "coach" | "firms";
};

export default function PricingPageContent({
  type = "coach",
}: PricingPageContentProps) {

  return (
    <>
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
        @media(min-width:767px){
          .swiper-slide.creators-slide{width: 13rem;}
        }
        .pricing_plan-callout {
          background: linear-gradient(180deg, #FFA466 0%, #FF9147 100%);
        }
        .pricing_plan-outer.is-priority {
          box-shadow: 0px 0px 0px 4px rgba(255, 154, 87, 0.20), 0px 2px 1px -1px rgba(25, 26, 26, 0.10), 0px 2px 4px 0px rgba(25, 26, 26, 0.06);
        }
        .pricing_plan-outer {
          border: 1px solid rgba(255, 154, 87, 0.3);
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          visibility: hidden;
          will-change: transform, opacity;
          transform: translate3d(0, 0, 0);
        }
        .pricing_component.in-view .pricing_plan-outer {
          visibility: visible;
        }
        .pricing_component.in-view .pricing_plan-outer:nth-child(1) {
          animation: slideInFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          animation-delay: 0.1s;
        }
        .pricing_component.in-view .pricing_plan-outer:nth-child(2) {
          animation: slideInFromBottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          animation-delay: 0.2s;
        }
        .pricing_component.in-view .pricing_plan-outer:nth-child(3) {
          animation: slideInFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          animation-delay: 0.3s;
        }
        .pricing_plan-outer:hover {
          transform: translate3d(0, -8px, 0) scale(1.02);
          box-shadow: 0px 8px 24px rgba(255, 154, 87, 0.25), 0px 0px 0px 4px rgba(255, 154, 87, 0.20), 0px 4px 8px rgba(25, 26, 26, 0.15);
          border-color: rgba(255, 154, 87, 0.5);
        }
        .pricing_plan-outer.is-priority:hover {
          box-shadow: 0px 8px 24px rgba(255, 154, 87, 0.3), 0px 0px 0px 4px rgba(255, 154, 87, 0.25), 0px 4px 8px rgba(25, 26, 26, 0.15);
        }
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translate3d(-30px, 15px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes slideInFromBottom {
          0% {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translate3d(30px, 15px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .pricing_replaces-item {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: linear-gradient(180deg, rgba(25, 26, 26, 0.11) 0%, rgba(25, 26, 26, 0.07) 48%, rgba(25, 26, 26, 0.09) 100%);
          box-shadow: 0px -1px 2px 0px rgba(255, 255, 255, 0.25) inset, 0px 1px 2px 0px rgba(255, 255, 255, 0.00) inset;
        }
        .pricing_plan-point-wrapper.is-comparison .pricing_replaces-wrapper {
          opacity: 0.55;
          transition: opacity 0.3s ease-in-out;
        }
        .pricing_plan-point-wrapper.is-comparison:hover .pricing_replaces-wrapper {
          opacity: 1;
        }
        .pricing_plan-outer .button-dark {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .pricing_plan-outer:hover .button-dark {
          transform: translateY(-2px);
          box-shadow: 0px 4px 12px rgba(25, 26, 26, 0.2);
        }
        .pricing_plan-outer:hover .pricing_plan-callout {
          transform: scale(1.02);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (max-width: 991px) {
          .pricing_creator-wrapper {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 992px) {
          .pricing_creator-wrapper {
            grid-template-columns: repeat(3, minmax(370px, 1fr)) !important;
            gap: 2rem !important;
            width: 100% !important;
            max-width: 100% !important;
            overflow: hidden;
          }
          .pricing_plan-outer {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
        body {
          overflow-x: hidden;
        }
      `,
        }}
      />
      <PricingHeroSection type={type as "coach" | "firms"} />
      <PricingCardsSection type={type as "coach" | "firms"} />
      <FaqSection />
    </>
  );
}


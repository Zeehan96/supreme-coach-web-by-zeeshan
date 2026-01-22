"use client";

import FaqSection from "./Payment/FaqSection";
import SectionPricing from "./Payment/SectionPricing";
import SectionHeroPay from "./Payment/SectionHeroPay";
import SectionCreators from "./Payment/SectionCreators";

export default function CreatorPricingPageContent() {
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
      `,
        }}
      />
      <SectionHeroPay />
      <SectionPricing />
      <SectionCreators />
      <FaqSection />
    </>
  );
}

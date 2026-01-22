import React from "react";

type PricingHeroSectionProps = {
  type?: "coach" | "firms";
};

const PricingHeroSection = ({ type = "coach" }: PricingHeroSectionProps) => {
  const isCoach = type === "coach";

  return (
    <div className="section_hero creators">
      <div className="padding-global hero">
        <div className="container-xxlarge">
          <div className="hero_component v2-centered">
            <div className="hero_texts-middle">
              <div className="hero_texts-heading-side">
                <h1 className="heading-style-h2-v2">
                  Designed for every stage of your journey. Start today for free.
                </h1>
              </div>
              <div className="buttons_hero-outer">
                <div className="text-size-medium-v2 text-weight-medium">
                  Supreme Coach is always free. We make money when you make money—through a small percentage of the sponsorship fee.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHeroSection;


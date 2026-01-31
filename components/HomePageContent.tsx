"use client";

import SectionHero from "./Home/SectionHero";
import SectionMainStats from "./Home/SectionMainStats";
import TraditionalMarketing from "./Home/TraditionalMarketing";
import SectionBento1 from "./Home/SectionBento1";
import SectionSingleReview from "./Home/SectionSingleReview";
import SectionBento2 from "./Home/SectionBento2";
import SectionBento3 from "./Home/SectionBento3";
import SectionModals from "./Home/SectionModals";
import SectionCta from "./Home/SectionCta";
import SectionCaseStudies from "./Home/SectionCaseStudies";
import FaqSection from "./Payment/FaqSection";

export default function HomePageContent() {
  return (
    <>
      <SectionHero />
      <SectionMainStats />
      <TraditionalMarketing />
      <SectionBento1 />
      <SectionSingleReview />
      <SectionBento2 />
      <SectionBento3 />
      <SectionModals />
      <SectionCta />
      <SectionCaseStudies />
      <FaqSection />
    </>
  );
}

"use client";

import { useEffect } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionHero from "./Home/SectionHero";
import SectionMainStats from "./Home/SectionMainStats";
import TraditionalMarketing from "./Home/TraditionalMarketing";
import SectionSingleReview from "./Home/SectionSingleReview";
import SectionBento2 from "./Home/SectionBento2";
import SectionBento3 from "./Home/SectionBento3";
import SectionModals from "./Home/SectionModals";
import SectionCta from "./Home/SectionCta";
import SectionCaseStudies from "./Home/SectionCaseStudies";
import FaqSection from "./Payment/FaqSection";

const SNAP_CLASS = "home-snap-scroll";

export default function HomePageContent() {
  useEffect(() => {
    document.documentElement.classList.add(SNAP_CLASS);
    document.body.classList.add(SNAP_CLASS);
    return () => {
      document.documentElement.classList.remove(SNAP_CLASS);
      document.body.classList.remove(SNAP_CLASS);
    };
  }, []);

  return (
    <>
      <AnimateOnScroll className="snap-section">
        <SectionHero />
      </AnimateOnScroll>
      <AnimateOnScroll className="snap-section">
        <SectionMainStats />
      </AnimateOnScroll>
      <AnimateOnScroll className="snap-section">
        <TraditionalMarketing />
      </AnimateOnScroll>
      <AnimateOnScroll className="snap-section">
        <SectionSingleReview />
      </AnimateOnScroll>
      <AnimateOnScroll className="snap-section">
        <SectionBento2 />
      </AnimateOnScroll>
      <AnimateOnScroll className="snap-section">
        <SectionBento3 />
      </AnimateOnScroll>
      <AnimateOnScroll className="snap-section">
        <SectionModals />
      </AnimateOnScroll>
      <AnimateOnScroll className="snap-section">
        <SectionCta />
      </AnimateOnScroll>
      <AnimateOnScroll className="snap-section">
        <SectionCaseStudies />
      </AnimateOnScroll>
      <AnimateOnScroll className="snap-section">
        <FaqSection />
      </AnimateOnScroll>
    </>
  );
}

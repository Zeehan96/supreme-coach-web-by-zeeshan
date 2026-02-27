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
        <SectionHero />
        <SectionMainStats />
        <TraditionalMarketing />
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

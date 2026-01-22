"use client";

import { useEffect } from "react";

export default function Scripts() {
  return (
    <>
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6340255dae4cf91cdda9ff9f"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
        async
      />
      {/* Removed CDN script, replaced with placeholder */}
      <img
        src="/images/placeholder.png"
        alt="placeholder"
        style={{ display: "none" }}
      />
      <script
        src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"
        async
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        async
      />
      <script
        src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"
        async
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/MotionPathPlugin.min.js"
        async
      />
      <script src="https://unpkg.com/split-type" async />
      <script defer src="https://player.vimeo.com/api/player.js" />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.min.js"
        async
      />
    </>
  );
}

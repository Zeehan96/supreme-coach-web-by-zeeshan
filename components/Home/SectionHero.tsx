import { Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

const SectionHero = () => {
  return (
    <div className="section_hero creators">
      <div className="padding-global hero">
        <div className="container-xxlarge">
          <div className="hero_component v2-centered">
            <div className="hero_texts-middle">
              <div className="hero_texts-heading-side">
                <div className="meta-text is-large">
                  THE LARGEST B2B INFLUENCER PLATFORM
                </div>
                <h1 className="heading-style-h2-v2">
                  Where B2B brands scale influencer marketing
                </h1>
              </div>
              <div className="buttons_hero-outer">
                <div className="text-size-medium-v2 text-weight-medium">
                  The fastest and easiest way to do influencer marketing at
                  scale.
                  <br />
                  Find the right creators on all platforms, book, collaborate,
                  and pay - all in one place.
                </div>
                <div className="hero_buttons-wrapper">
                  <Link
                    href="/get-access"
                    target="_blank"
                    className="button-dark w-inline-block"
                  >
                    <div>Request a demo</div>
                    <div className="icon-embed-xxsmall w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 16 16"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                        role="img"
                      >
                        <path
                          className="arrow-line"
                          d="M2.349 7.23025C3.06607 7.21757 3.71403 7.1808 4.35755 7.29175C4.42539 7.30316 4.50401 7.26575 4.57565 7.2442C4.9288 7.13768 5.28321 7.1231 5.64269 7.21503C5.95526 7.29492 6.27417 7.22644 6.59054 7.2499C7.07873 7.28604 7.56438 7.15417 8.0494 7.17889C8.44439 7.19918 8.84381 7.19284 9.23627 7.25434C9.43535 7.28541 9.62365 7.29619 9.82717 7.24483C10.0484 7.18967 10.2678 7.32218 10.4973 7.32218C10.7497 7.32218 10.9982 7.38558 11.2404 7.45786C11.5117 7.53838 11.5802 7.78438 11.3824 7.98409C11.0806 8.28905 10.6863 8.42282 10.2779 8.48242C9.94002 8.53187 9.59512 8.56041 9.25466 8.57816C8.89454 8.59654 8.53188 8.72081 8.16669 8.60035C8.10392 8.57943 8.02594 8.57499 7.96254 8.59211C7.53775 8.70877 7.09585 8.63015 6.66789 8.71384C6.53602 8.73983 6.39146 8.73096 6.25705 8.71003C6.07065 8.68087 5.89186 8.68594 5.71433 8.74427C5.48736 8.81908 5.26165 8.72398 5.03404 8.72842C4.80389 8.73286 4.57565 8.7411 4.35755 8.79626C4.01455 8.88375 3.67345 8.83493 3.33933 8.79943C3.03754 8.76773 2.74653 8.79436 2.44918 8.80197C2.16831 8.80957 1.87476 8.83366 1.59833 8.78485C1.2845 8.72905 1.14818 8.44248 1.03343 8.18063C0.930717 7.94605 1.07527 7.77296 1.23314 7.60432C1.46582 7.35515 1.73401 7.22201 2.07955 7.24546C2.1924 7.25307 2.30716 7.23215 2.3509 7.22961L2.349 7.23025Z"
                          fill="currentColor"
                        />
                        <path
                          className="arrow-tip"
                          d="M11.1802 13.0869C10.782 13.0901 10.4764 12.7344 10.543 12.321C10.5867 12.0478 10.6869 11.7923 10.8644 11.5704C11.0007 11.3998 11.139 11.228 11.2512 11.0416C11.6424 10.3892 12.071 9.76533 12.5845 9.20233C12.6295 9.15288 12.6663 9.08884 12.6885 9.02544C12.821 8.64567 13.0866 8.35719 13.346 8.06555C13.5038 7.88803 13.5178 7.75615 13.3377 7.59892C13.0993 7.39033 12.9129 7.15194 12.7804 6.8641C12.6866 6.66121 12.4888 6.54329 12.3442 6.38161C12.1432 6.15654 12.0139 5.88138 11.8725 5.62207C11.6766 5.26258 11.3932 4.97601 11.1631 4.64759C10.931 4.31664 10.7364 3.9654 10.5956 3.58562C10.5639 3.50003 10.5417 3.40874 10.5328 3.31807C10.517 3.14689 10.621 3.04037 10.7548 2.95732C10.8809 2.8787 10.9944 2.91167 11.106 2.99473C11.3266 3.15893 11.5606 3.29905 11.7318 3.52983C11.9505 3.82401 12.284 4.01865 12.4736 4.34327C12.9732 4.62794 13.2134 5.14022 13.5545 5.56564C13.7549 5.81544 13.9996 6.03164 14.2348 6.25101C14.4244 6.4279 14.5791 6.62127 14.6476 6.87551C14.6875 7.02323 14.7763 7.14243 14.8587 7.2686C15.0553 7.56975 15.0426 7.87661 14.8498 8.17713C14.5652 8.62094 14.3293 9.09645 14.0066 9.51617C13.6718 9.95173 13.4499 10.4665 13.06 10.8647C12.8229 11.1069 12.6974 11.4182 12.5509 11.7181C12.3487 12.1321 12.1096 12.5252 11.7704 12.8447C11.5834 13.0203 11.4122 13.0856 11.1821 13.0876L11.1802 13.0869Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    className="button-light is-outline w-inline-block"
                  >
                    <div>Contact Sales</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lottie_hero-wrapper">
              <div
                className="hero-image-card"
                style={{
                  background:
                    "linear-gradient(180deg, #ffa466 0%, #ff9147 100%)",
                  padding: "40px 20px 0 20px",
                  borderRadius: "24px",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  width: "130%",
                  marginLeft: "-15%",
                  minHeight: "380px",
                }}
              >
                <div
                  id="lottie-container"
                  className="hero_lottie"
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                  }}
                />
                <Sparkles
                  className="text-white absolute top-6 left-6 w-8 h-8 opacity-80"
                  style={{
                    position: "absolute",
                    top: "24px",
                    left: "24px",
                    color: "rgba(255, 255, 255, 0.6)",
                    width: "32px",
                    height: "32px",
                    transform: "rotate(-15deg)",
                  }}
                />
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Dashboard Preview"
                  style={{
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                    boxShadow: "0 -20px 50px rgba(0, 0, 0, 0.15)",
                    width: "65%",
                    height: "auto",
                    position: "relative",
                    zIndex: 10,
                  }}
                />
              </div>
            </div>
            <div className="hero_main-graphics" />
            <div className="hero_logos-outer">
              <div>
                Powering thousands of marketing teams at the fastest growing
                companies in tech
              </div>
              <div className="hero_logos-outer-wrap">
                <div className="w-embed">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n\n\n.marquee-track {\n  position: relative;\n  white-space: nowrap;\n  will-change: transform;\n  animation: marquee-horizontal 60s linear infinite;\n  /* manipulate the speed of the marquee by changing "s" line above*/\n}\n\n\n\n@keyframes marquee-horizontal {\n  0% { transform: translateX(0%); }\n  100% { transform: translateX(-50%); }\n}\n\n@media only screen and (min-width: 992px) {\n  .marquee-track:hover {\n    animation-play-state: paused;\n  }\n}\n\n',
                    }}
                  />
                </div>
                <div className="hero_logos-wrapper marquee-track">
                  <div className="hero_logos-track">
                    {/* TAVUS */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec5afa92c45dcee063bd_Tavus.png" alt="TAVUS" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                    {/* Rippling */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67ab9dcd0f694616a4ad44bf_Ripplinglogo.avif" alt="Rippling" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                    {/* Pika */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec3da0554e7583437e50_Pika.png" alt="Pika" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                    {/* Framer */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b720e278d278fe3721f5_framer.avif" alt="Framer" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                    {/* Image 80 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcdbe5ac9f5bee12bbe_image%2080.avif" alt="Logo" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                    {/* Replit */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b6e9b75902ba3cf186b8_replit.avif" alt="Replit" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                    {/* Frame-1 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcd1c59cbfc2851afc5_Frame-1.avif" alt="Logo" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                    {/* Image 75 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcdd593d7389f1e48a8_image%2075.avif" alt="Logo" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                  </div>
                  <div className="hero_logos-track">
                    {/* TAVUS */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec5afa92c45dcee063bd_Tavus.png" alt="TAVUS" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                    {/* Rippling */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67ab9dcd0f694616a4ad44bf_Ripplinglogo.avif" alt="Rippling" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                    {/* Pika */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec3da0554e7583437e50_Pika.png" alt="Pika" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                    {/* Framer */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b720e278d278fe3721f5_framer.avif" alt="Framer" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                    {/* Image 80 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcdbe5ac9f5bee12bbe_image%2080.avif" alt="Logo" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                    {/* Replit */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b6e9b75902ba3cf186b8_replit.avif" alt="Replit" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                    {/* Frame-1 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcd1c59cbfc2851afc5_Frame-1.avif" alt="Logo" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                    {/* Image 75 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
                      <img src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcdd593d7389f1e48a8_image%2075.avif" alt="Logo" width="120" height="48" style={{ objectFit: 'contain' }} />
                    </div>
                  </div>
                </div>
                <div className="hero_logos-overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default SectionHero;

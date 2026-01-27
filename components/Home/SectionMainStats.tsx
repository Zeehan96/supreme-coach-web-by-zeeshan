import React, { useState, useRef, useEffect } from "react";
import { Check, Bot, Zap, MessageSquare, Code2, ArrowRight } from "lucide-react";

const contentData: Record<string, any> = {
  linkedin: {
    title: "Ship faster, more reliable software",
    description:
      "Streamline the entire strategy.",
    checklist: [
      "Plan + execute the roadmap",
      "Identify + resolve bugs",
      "Integrate with AI coders",
    ],
    agents: [
      { text: "PRD Agent creates docs from voice notes", icon: Bot },
      { text: "Triage Agent prioritizes bugs", icon: Zap },
      { text: "Live Answers Agent keeps everyone informed", icon: MessageSquare },
      { text: "Codegen Agent produces quality code", icon: Code2 },
    ],
  },
  podcast: {
    title: "Launch and grow your podcast",
    description:
      "Manage guests, episodes, and sponsorship.",
    checklist: [
      "Coordinate guest schedules",
      "Track production pipeline",
      "Manage sponsor relationships",
    ],
    agents: [
      { text: "Guest Outreach Agent automates emails", icon: Bot },
      { text: "Scheduling Agent manages calendar", icon: Zap },
      { text: "Transcript Agent generates show notes", icon: MessageSquare },
      { text: "Clip Agent identifies highlights", icon: Code2 },
    ],
  },
  instagram: {
    title: "Scale your Instagram presence",
    description: "Plan visual content and engage with your community effortlessly.",
    checklist: [
      "Visual feed planning",
      "Automated engagement",
      "Analytics tracking"
    ],
    agents: [
      { text: "Content Agent suggests trends", icon: Bot },
      { text: "Reply Agent drafts responses", icon: MessageSquare },
      { text: "Hashtag Agent optimizes reach", icon: Zap },
      { text: "Bio Agent optimizes profile", icon: Code2 }
    ]
  },
  twitter: {
    title: "Master the Twitter/X algorithm",
    description: "Draft threads, schedule tweets, and grow your following.",
    checklist: [
      "Thread writer assistance",
      "Schedule optimization",
      "Growth analytics"
    ],
    agents: [
      { text: "Thread Agent structures ideas", icon: Bot },
      { text: "Viral Agent analyzes hooks", icon: Zap },
      { text: "Reply Agent engages leaders", icon: MessageSquare },
      { text: "Search Agent monitors topics", icon: Code2 }
    ]
  },
  tiktok: {
    title: "Viral short-form video workflow",
    description: "Script, record, and edit TikToks faster than ever.",
    checklist: [
      "Trend discovery",
      "Script generation",
      "Production checklist"
    ],
    agents: [
      { text: "Script Agent writes hooks", icon: Bot },
      { text: "Trend Agent finds sounds", icon: Zap },
      { text: "Edit Agent suggests cuts", icon: Code2 },
      { text: "Caption Agent generates tags", icon: MessageSquare }
    ]
  },
  newsletter: {
    title: "Monetize your newsletter",
    description: "Manage subscribers, content calendar, and sponsorships.",
    checklist: [
      "issue planning",
      "Sponsor management",
      "Subscriber growth"
    ],
    agents: [
      { text: "Draft Agent outlines issues", icon: Bot },
      { text: "Sponsor Agent finds leads", icon: Zap },
      { text: "Edit Agent proofs copy", icon: Code2 },
      { text: "Metrics Agent tracks opens", icon: MessageSquare }
    ]
  },
  youtube: {
    title: "Manage your YouTube empire",
    description: "From idea to upload.",
    checklist: [
      "Video ideation",
      "Production tracking",
      "Thumbnail A/B testing"
    ],
    agents: [
      { text: "Idea Agent brainstorms topics", icon: Bot },
      { text: "Script Agent outlines videos", icon: MessageSquare },
      { text: "SEO Agent optimizes details", icon: Zap },
      { text: "Comment Agent filters spam", icon: Code2 }
    ]
  }
};

const tabs = [
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'podcast', label: 'Podcast' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'twitter', label: 'Twitter' },
  { key: 'tiktok', label: 'TikTok' },
  { key: 'newsletter', label: 'Newsletter' },
  { key: 'youtube', label: 'YouTube' },
];

// Gradient colors mapping for each tab
const tabGradients: Record<string, string> = {
  linkedin: 'linear-gradient(180deg, #69bcfc 0%, #51b1fb 100%)',
  podcast: 'linear-gradient(180deg, #6ce49a 0%, #58df8c 100%)',
  instagram: 'linear-gradient(180deg, #c287f7 0%, #b26bf5 100%)',
  twitter: 'linear-gradient(180deg, #61daea 0%, #4ad5e8 100%)',
  tiktok: 'linear-gradient(180deg, #f89bda 0%, #f788d2 100%)',
  newsletter: 'linear-gradient(180deg, #ffa466 0%, #ff9147 100%)',
  youtube: 'linear-gradient(180deg, #ef6c79 0%, #ee5968 100%)',
};

const SectionMainStats = () => {
  const [activeTab, setActiveTab] = useState<string>('linkedin');
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  // Swiper initialization commented out - slider not needed for now
  // useEffect(() => {
  //   const initSwiper = () => {
  //     if (typeof window === "undefined") return;

  //     const Swiper = (window as any).Swiper;
  //     if (!Swiper) {
  //       setTimeout(initSwiper, 100);
  //       return;
  //     }

  //     const swiperElement = document.querySelector("#basic-swiper");
  //     if (!swiperElement) {
  //       setTimeout(initSwiper, 100);
  //       return;
  //     }

  //     // Check if already initialized
  //     if ((swiperElement as any).swiper) {
  //       return;
  //     }

  //     try {
  //       const mySwiper = new Swiper("#basic-swiper", {
  //         direction: "horizontal",
  //         slidesPerView: 4,
  //         loopAdditionalSlides: 15,
  //         spaceBetween: 24,
  //         grabCursor: true,
  //         allowTouchMove: true,
  //         centeredSlides: true,
  //         loop: true,
  //         autoplay: {
  //           delay: 3000,
  //           disableOnInteraction: false,
  //           pauseOnMouseEnter: true,
  //         },
  //         speed: 1000,
  //         breakpoints: {
  //           0: {
  //             slidesPerView: 1.1,
  //             slidesPerGroup: 1,
  //             spaceBetween: 16,
  //           },
  //           480: {
  //             slidesPerView: 2.3,
  //             slidesPerGroup: 1,
  //             spaceBetween: 16,
  //           },
  //           767: {
  //             slidesPerView: 2.2,
  //             slidesPerGroup: 1,
  //             spaceBetween: 16,
  //           },
  //           992: {
  //             slidesPerView: 6,
  //             slidesPerGroup: 1,
  //             spaceBetween: 32,
  //           },
  //         },
  //         touchEventsTarget: "container",
  //         touchReleaseOnEdges: true,
  //       });

  //       // Ensure autoplay starts
  //       if (mySwiper && mySwiper.autoplay) {
  //         mySwiper.autoplay.start();
  //       }
  //     } catch (error) {
  //       console.error("Error initializing swiper:", error);
  //     }
  //   };

  //   initSwiper();
  // }, []);

  return (
    <div className="section_main-stats">
      <div className="padding-section-xmedium">
        <div className="padding-global">
          <div className="container-xlarge">
            <div className="main_stats-slider-component">
              <div className="max-width-medium c_slide">
                <h2 className="heading-style-h4">
                  Get direct access to the top B2B creators in the world - on
                  all platforms
                </h2>
              </div>
              <div className="main_stats-component">
                <div className="main_stat-card">
                  <div className="heading-style-h4 stats">300 Million</div>
                  <div className="stati-info-text">
                    <div className="text-size-tiny stat">TARGET AUDIENCE</div>
                  </div>
                </div>
                <div className="main_stat-card">
                  <div className="heading-style-h4 stats">2 Billion</div>
                  <div className="stati-info-text">
                    <div className="text-size-tiny stat">
                      MONTHLY IMPRESSIONS
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="f3707bfc-cfc9-168f-b40c-f6463aa455ff"
                  className="main_stat-card"
                >
                  <div className="heading-style-h4 stats">60%</div>
                  <div className="stati-info-text">
                    <div className="text-size-tiny stat">
                      LOWER CPC THAN LINKEDIN ADS*
                    </div>
                  </div>
                  <div
                    style={{
                      opacity: "0",
                      WebkitTransform:
                        "translate3d(0, 5px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 5px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 5px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 5px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="stat-tooltip-wrapper"
                  >
                    <div>
                      In a study of 350 newsletter campaigns launched by
                      sponsors on Supreme Coach where sponsors achieved an
                      average $1.71 CPC compared to $5.58 on Linkedin Ads
                      (Source: DataBox)
                    </div>
                    <div className="tool-tip-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 10 28"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                        role="img"
                      >
                        <path
                          d="M9.48346 8.41429C9.48346 7.52339 8.40632 7.07722 7.77635 7.70718L1.70528 13.7782C1.31475 14.1688 1.31475 14.8019 1.70528 15.1925L7.77635 21.2635C8.40632 21.8935 9.48346 21.4473 9.48346 20.5564L9.48346 8.41429Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs - Static, above slides */}
              <div className="b2b_outer-component">
                <div className="tabs-static-wrapper">
                  <div className="tabs-static-container">
                    {tabs.map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => handleTabClick(tab.key)}
                        className={`tab-button-static ${activeTab === tab.key ? 'active' : ''}`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Swiper Slider - Commented out for now */}
              {/* <div className="b2b_outer-component">
                <div className="b2b_cards-outer">
                  <div
                    id="basic-swiper"
                    className="swiper-container basic-swiper-container"
                  >
                    <div className="swiper-wrapper basic-swiper-wrapper">
                      <div
                data-bg-gradient="blue-solid"
                className="swiper-slide b2b-swiper-slide"
              >
                <div className="b2b_slide-top">
                  <div>LinkedIn</div>
                  <div className="b2b-slide-channel-icon w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.182 8.52639C15.3381 7.68248 14.1935 7.20837 13 7.20837C11.8065 7.20837 10.6619 7.68248 9.81802 8.52639C8.97411 9.37031 8.5 10.5149 8.5 11.7084V16.9584H11.5V11.7084C11.5 11.3105 11.658 10.929 11.9393 10.6477C12.2206 10.3664 12.6022 10.2084 13 10.2084C13.3978 10.2084 13.7794 10.3664 14.0607 10.6477C14.342 10.929 14.5 11.3105 14.5 11.7084V16.9584H17.5V11.7084C17.5 10.5149 17.0259 9.37031 16.182 8.52639Z"
                        stroke="url(#paint0_linear_4064_40609)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.5 7.95837H2.5V16.9584H5.5V7.95837Z"
                        stroke="url(#paint1_linear_4064_40609)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 5.70837C4.82843 5.70837 5.5 5.0368 5.5 4.20837C5.5 3.37995 4.82843 2.70837 4 2.70837C3.17157 2.70837 2.5 3.37995 2.5 4.20837C2.5 5.0368 3.17157 5.70837 4 5.70837Z"
                        stroke="url(#paint2_linear_4064_40609)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4064_40609"
                          x1="10"
                          y1="2.70837"
                          x2="10"
                          y2="16.9584"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3B3D3D" />
                          <stop offset="1" stopColor="#191A1A" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_4064_40609"
                          x1="10"
                          y1="2.70837"
                          x2="10"
                          y2="16.9584"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3B3D3D" />
                          <stop offset="1" stopColor="#191A1A" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_4064_40609"
                          x1="10"
                          y1="2.70837"
                          x2="10"
                          y2="16.9584"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3B3D3D" />
                          <stop offset="1" stopColor="#191A1A" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif"
                  loading="lazy"
                  width="289.5"
                  alt="b2b-slider-image"
                  className="b2b_slide-img"
                />
                <div className="b2b_slide-overlay"></div>
              </div>
              <div
                data-bg-gradient="green-solid"
                className="swiper-slide b2b-swiper-slide"
              >
                <div className="b2b_slide-top">
                  <div>Podcast</div>
                  <div className="b2b-slide-channel-icon w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.53031 15.303C4.58877 14.598 3.82463 13.6831 3.2986 12.631C2.77256 11.5789 2.49912 10.4186 2.5 9.24239C2.5 5.0583 5.89167 1.66663 10.0758 1.66663C14.2599 1.66663 17.6515 5.0583 17.6515 9.24239C17.6524 10.4186 17.379 11.5789 16.8529 12.631C16.3269 13.6831 15.5628 14.598 14.6212 15.303M6.68789 12.2727C6.10288 11.6187 5.71967 10.8093 5.58454 9.94231C5.4494 9.0753 5.5681 8.1877 5.92632 7.38667C6.28453 6.58564 6.86695 5.90541 7.60326 5.42811C8.33956 4.9508 9.19829 4.69682 10.0758 4.69682C10.9532 4.69682 11.812 4.9508 12.5483 5.42811C13.2846 5.90541 13.867 6.58564 14.2252 7.38667C14.5834 8.1877 14.7021 9.0753 14.567 9.94231C14.4319 10.8093 14.0487 11.6187 13.4637 12.2727M10.0756 10.7575C10.4774 10.7575 10.8628 10.5979 11.1469 10.3137C11.4311 10.0296 11.5907 9.64422 11.5907 9.24237C11.5907 8.84053 11.4311 8.45515 11.1469 8.171C10.8628 7.88685 10.4774 7.72722 10.0756 7.72722C9.67371 7.72722 9.28832 7.88685 9.00418 8.171C8.72003 8.45515 8.5604 8.84053 8.5604 9.24237C8.5604 9.64422 8.72003 10.0296 9.00418 10.3137C9.28832 10.5979 9.67371 10.7575 10.0756 10.7575ZM8.61797 13.2447L9.2354 12.8333C9.48422 12.6675 9.77655 12.579 10.0756 12.579C10.3746 12.579 10.6669 12.6675 10.9157 12.8333L11.5331 13.2447C11.776 13.4066 11.9668 13.6353 12.0828 13.9031C12.1988 14.171 12.2349 14.4666 12.1869 14.7545L11.8013 17.0674C11.7423 17.421 11.5599 17.7423 11.2863 17.9741C11.0128 18.2059 10.6659 18.3332 10.3074 18.3333H9.84373C9.48507 18.3333 9.13801 18.2061 8.86432 17.9743C8.59062 17.7425 8.40803 17.4212 8.34903 17.0674L7.96418 14.7545C7.91615 14.4666 7.9523 14.171 8.06828 13.9031C8.18427 13.6353 8.37515 13.4066 8.61797 13.2447Z"
                        stroke="url(#paint0_linear_4064_40631)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4064_40631"
                          x1="10.0758"
                          y1="1.66663"
                          x2="10.0758"
                          y2="18.3333"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3B3D3D" />
                          <stop offset="1" stopColor="#191A1A" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif"
                  loading="lazy"
                  width="289.5"
                  alt="b2b-slider-image"
                  className="b2b_slide-img"
                />
                <div className="b2b_slide-overlay"></div>
              </div>
              <div
                data-bg-gradient="purple-solid"
                className="swiper-slide b2b-swiper-slide"
              >
                <div className="b2b_slide-top">
                  <div>Instagram</div>
                  <div className="b2b-slide-channel-icon w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.3529 5.64587H14.3608M6.2487 2.08337H13.7487C15.9348 2.08337 17.9154 4.06391 17.9154 6.25004V13.75C17.9154 15.9362 15.9348 17.9167 13.7487 17.9167H6.2487C4.06257 17.9167 2.08203 15.9362 2.08203 13.75V6.25004C2.08203 4.06391 4.06257 2.08337 6.2487 2.08337ZM13.1654 9.50129C13.2631 10.1602 13.1505 10.833 12.8438 11.4243C12.537 12.0155 12.0516 12.4949 11.4567 12.7944C10.8617 13.0938 10.1875 13.1981 9.52986 13.0922C8.87226 12.9864 8.26476 12.6759 7.79378 12.205C7.3228 11.734 7.01232 11.1265 6.9065 10.4689C6.80068 9.81127 6.90492 9.13704 7.20437 8.54209C7.50383 7.94713 7.98326 7.46175 8.57448 7.15498C9.16569 6.84821 9.83859 6.73567 10.4974 6.83337C11.1695 6.93303 11.7917 7.2462 12.2721 7.72662C12.7525 8.20703 13.0657 8.82923 13.1654 9.50129Z"
                        stroke="url(#paint0_linear_4064_40722)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4064_40722"
                          x1="9.9987"
                          y1="2.08337"
                          x2="9.9987"
                          y2="17.9167"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3B3D3D" />
                          <stop offset="1" stopColor="#191A1A" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif"
                  loading="lazy"
                  width="289.5"
                  alt="b2b-slider-image"
                  className="b2b_slide-img"
                />
                <div className="b2b_slide-overlay"></div>
              </div>
              <div
                data-bg-gradient="cyan-solid"
                className="swiper-slide b2b-swiper-slide"
              >
                <div className="b2b_slide-top">
                  <div>Twitter</div>
                  <div className="b2b-slide-channel-icon w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.83085 10.7279L8.82508 10.7345M8.82508 10.7345L3.30882 17.0403H4.3209L9.28992 11.3353M8.82508 10.7345L2.91797 3.09941H6.58116L10.5283 8.28688M8.82508 10.7345L9.28992 11.3353M9.28992 11.3353L13.6645 17.0403H17.0846L10.9736 8.86713M10.5283 8.28688L15.2513 2.95984H16.1419L10.9736 8.86713M10.5283 8.28688L10.9736 8.86713"
                        stroke="url(#paint0_linear_4064_40897)"
                        strokeWidth="1.5"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4064_40897"
                          x1="10.0013"
                          y1="2.95984"
                          x2="10.0013"
                          y2="17.0403"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3B3D3D" />
                          <stop offset="1" stopColor="#191A1A" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif"
                  loading="lazy"
                  width="289.5"
                  alt="b2b-slider-image"
                  className="b2b_slide-img"
                />
                <div className="b2b_slide-overlay"></div>
              </div>
              <div
                data-bg-gradient="pink-solid"
                className="swiper-slide b2b-swiper-slide"
              >
                <div className="b2b_slide-top">
                  <div>TikTok</div>
                  <div className="b2b-slide-channel-icon w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.91797 10C7.17629 10 6.45127 10.2199 5.83458 10.632C5.2179 11.044 4.73725 11.6297 4.45342 12.3149C4.16959 13.0002 4.09533 13.7542 4.24003 14.4816C4.38472 15.209 4.74187 15.8772 5.26632 16.4016C5.79077 16.9261 6.45895 17.2832 7.18638 17.4279C7.91381 17.5726 8.66781 17.4984 9.35303 17.2145C10.0383 16.9307 10.6239 16.4501 11.036 15.8334C11.448 15.2167 11.668 14.4917 11.668 13.75V2.5C12.0842 3.75 13.668 6.25 16.668 6.25"
                        stroke="url(#paint0_linear_4064_40771)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4064_40771"
                          x1="10.418"
                          y1="2.5"
                          x2="10.418"
                          y2="17.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3B3D3D" />
                          <stop offset="1" stopColor="#191A1A" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif"
                  loading="lazy"
                  width="289.5"
                  alt="b2b-slider-image"
                  className="b2b_slide-img"
                />
                <div className="b2b_slide-overlay"></div>
              </div>
              <div
                data-bg-gradient="orange-solid"
                className="swiper-slide b2b-swiper-slide"
              >
                <div className="b2b_slide-top">
                  <div>Newsletter</div>
                  <div className="b2b-slide-channel-icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 20 20"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                      role="img"
                    >
                      <path
                        d="M5.5 5.5H11.5M5.5 8.5H14.5M10.75 11.5H14.5M10.75 14.5H14.5M14.5003 2.5V5.05C14.5003 5.10909 14.512 5.16761 14.5346 5.22221C14.5572 5.2768 14.5904 5.32641 14.6321 5.3682C14.6739 5.40998 14.7235 5.44313 14.7781 5.46575C14.8327 5.48836 14.8913 5.5 14.9503 5.5H17.5003M2.5 17.05V2.95C2.5 2.83065 2.54741 2.71619 2.6318 2.6318C2.71619 2.54741 2.83065 2.5 2.95 2.5H14.689C14.8083 2.50011 14.9227 2.54758 15.007 2.632L17.368 4.993C17.41 5.03492 17.4432 5.08474 17.4659 5.13957C17.4886 5.1944 17.5001 5.25317 17.5 5.3125V17.05C17.5 17.1091 17.4884 17.1676 17.4657 17.2222C17.4431 17.2768 17.41 17.3264 17.3682 17.3682C17.3264 17.41 17.2768 17.4431 17.2222 17.4657C17.1676 17.4884 17.1091 17.5 17.05 17.5H2.95C2.89091 17.5 2.83239 17.4884 2.77779 17.4657C2.7232 17.4431 2.67359 17.41 2.6318 17.3682C2.59002 17.3264 2.55687 17.2768 2.53425 17.2222C2.51164 17.1676 2.5 17.1091 2.5 17.05ZM5.50034 14.5V11.5H7.75034V14.5H5.50034Z"
                        stroke="url(#paint0_linear_4064_40548)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4064_40548"
                          x1="10.0002"
                          y1="2.5"
                          x2="10.0002"
                          y2="17.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3B3D3D" />
                          <stop offset="1" stopColor="#191A1A" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif"
                  loading="lazy"
                  width="289.5"
                  alt="b2b-slider-image"
                  className="b2b_slide-img"
                />
                <div className="b2b_slide-overlay"></div>
              </div>
              <div
                data-bg-gradient="red-solid"
                className="swiper-slide b2b-swiper-slide"
              >
                <div className="b2b_slide-top">
                  <div>YouTube</div>
                  <div className="b2b-slide-channel-icon w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.70735 14.2829C1.09755 11.4051 1.09755 8.43154 1.70735 5.55379C1.78747 5.26155 1.94228 4.99519 2.15655 4.78092C2.37082 4.56665 2.63718 4.41184 2.92942 4.33171C7.61123 3.5561 12.3888 3.5561 17.0706 4.33171C17.3628 4.41184 17.6292 4.56665 17.8434 4.78092C18.0577 4.99519 18.2125 5.26155 18.2927 5.55379C18.9024 8.43154 18.9024 11.4051 18.2927 14.2829C18.2125 14.5751 18.0577 14.8415 17.8434 15.0558C17.6292 15.27 17.3628 15.4248 17.0706 15.505C12.3888 16.2807 7.61122 16.2807 2.92942 15.505C2.63718 15.4248 2.37082 15.27 2.15655 15.0558C1.94228 14.8415 1.78747 14.5751 1.70735 14.2829Z"
                        stroke="url(#paint0_linear_4064_40714)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.25418 12.5371L12.6187 9.91834L8.25418 7.29961V12.5371Z"
                        stroke="url(#paint1_linear_4064_40714)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4064_40714"
                          x1="10"
                          y1="3.75"
                          x2="10"
                          y2="16.0868"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3B3D3D" />
                          <stop offset="1" stopColor="#191A1A" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_4064_40714"
                          x1="10"
                          y1="3.75"
                          x2="10"
                          y2="16.0868"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3B3D3D" />
                          <stop offset="1" stopColor="#191A1A" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif"
                  loading="lazy"
                  width="289.5"
                  alt="b2b-slider-image"
                  className="b2b_slide-img"
                />
                <div className="b2b_slide-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
            </div>
          </div >

          {/* Content Section - Always visible with active tab content */}
          {
            contentData[activeTab] && (
              <div ref={detailsRef} className="tab-content-active">
                {/* Left Side */}
                <div className="tab-content-overview">
                  <h3 className="tab-heading">
                    {contentData[activeTab].title}
                    <span>{contentData[activeTab].description}</span>
                  </h3>

                  <div style={{ marginBottom: '1.5rem', color: '#999', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px' }}>
                    REPLACES
                    {/* Placeholder for icons */}
                    <span style={{ marginLeft: '10px', fontSize: '1.2rem' }}>❖ ❈ ▨ ▣</span>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {contentData[activeTab].checklist.map((item: string, idx: number) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#444' }}>
                        <Check size={18} style={{ marginRight: '10px', color: '#666' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side */}
                <div
                  className="tab-card-wrapper"
                  style={{
                    background: tabGradients[activeTab] || "#f8f9fa",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif"
                    alt="Agent illustration"
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      height: "auto",
                      borderRadius: "12px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            )
          }

        </div >
      </div >

      <style dangerouslySetInnerHTML={{
        __html: `
        .tabs-static-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        
        .tabs-static-container {
          display: flex;
          gap: 12px;
          padding: 8px 24px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .tab-button-static {
          position: relative;
          display: inline-flex;
          gap: 6px;
          justify-content: center;
          align-items: center;
          min-inline-size: -moz-fit-content;
          min-inline-size: fit-content;
          padding: 4px 12px;
          border: 2px dashed rgba(0, 0, 0, 0.1) !important;
          border-radius: 54px;
          background-color: rgba(0, 0, 0, 0);
          color: #646464;
          font-weight: 600;
          font-size: 14px;
          font-family: Inter, sans-serif;
          line-height: 20px;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .tab-button-static.active {
          border: 2px solid #0091ff;
          border-radius: 16px;
          background-color: #edf6fd;
          color: #0091ff;
          animation: borderPulse 0.4s ease;
        }
        
        @keyframes borderPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        
        .tab-content-active {
          position: relative;
          margin: auto;
          margin-top: 35px !important;
          -webkit-margin-before: 12px;
          margin-block-start: 12px;
          display: flex;
          border-radius: 32px;
          background-color: #f8f9fa;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          animation: fadeIn 0.3s ease-out;
          overflow: hidden;
        }
        
        .tab-content-overview {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          block-size: 100%;
          padding: 56px;
          flex: 1;
          background-color: #f8f9fa;
        }

        .tab-content-overview .tab-heading {
          max-inline-size: 507px;
          -webkit-margin-after: 8px;
          margin-block-end: 8px;
          color: #202020 !important;
          font-weight: 650 !important;
          font-size: 40px !important;
          font-family: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          letter-spacing: -1.6px;
        }

        .tab-content-overview .tab-heading span {
          display: block;
          color: #838383 !important;
        }
        
        .tab-card-wrapper {
          z-index: 3;
          flex: 1 1;
          padding: 56px;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 991px) {
          .tab-content-active {
            flex-direction: column;
          }
          
          .tab-content-overview,
          .tab-card-wrapper {
            padding: 32px;
          }
        }
        
        @media (max-width: 767px) {
          .tabs-static-container {
            gap: 8px;
            padding: 12px 16px;
          }
          
          .tab-button-static {
            font-size: 12px;
            padding: 4px 10px;
          }
          
          .tab-content-overview,
          .tab-card-wrapper {
            padding: 24px;
          }
        }
      `}} />
    </div >
  );
};

export default SectionMainStats;

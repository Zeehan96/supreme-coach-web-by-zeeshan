import React, { useState, useRef, useEffect } from "react";
import { X, Check, Bot, Zap, MessageSquare, Code2, ArrowRight } from "lucide-react";

const contentData: Record<string, any> = {
  linkedin: {
    title: "Ship faster, more reliable software",
    description:
      "Streamline the entire strategy + dev process in a single, connected workspace.",
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
      "Manage guests, episodes, and sponsorship deals in one place.",
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
    description: "From idea to upload, streamline your video production.",
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
  { key: 'linkedin', label: 'LinkedIn', color: '#0077B5', bgColor: '#E8F4F8' },
  { key: 'podcast', label: 'Podcast', color: '#14B8A6', bgColor: '#E0F7F4' },
  { key: 'instagram', label: 'Instagram', color: '#E4405F', bgColor: '#FDF2F4' },
  { key: 'twitter', label: 'Twitter', color: '#1DA1F2', bgColor: '#E8F5FE' },
  { key: 'tiktok', label: 'TikTok', color: '#FF0050', bgColor: '#FFF0F5' },
  { key: 'newsletter', label: 'Newsletter', color: '#FF9147', bgColor: '#FFF4ED' },
  { key: 'youtube', label: 'YouTube', color: '#FF0000', bgColor: '#FFE5E5' },
];

const SectionMainStats = () => {
  const [activeTab, setActiveTab] = useState<string>('linkedin');
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

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
              
              {/* Tabs Container */}
              <div className="b2b_outer-component">
                <div className="tabs-marquee-wrapper">
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
                        .tabs-marquee-track {
                          position: relative;
                          white-space: nowrap;
                          will-change: transform;
                          animation: tabs-marquee-horizontal 40s linear infinite;
                        }
                        
                        @keyframes tabs-marquee-horizontal {
                          0% { transform: translateX(0%); }
                          100% { transform: translateX(-50%); }
                        }
                        
                        @media only screen and (min-width: 992px) {
                          .tabs-marquee-track:hover {
                            animation-play-state: paused;
                          }
                        }
                      `,
                    }}
                  />
                  <div className="tabs-container-wrapper tabs-marquee-track">
                    <div className="tabs-container">
                      {tabs.map((tab) => (
                        <button
                          key={`tab-1-${tab.key}`}
                          onClick={() => handleTabClick(tab.key)}
                          className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
                          style={{
                            backgroundColor: activeTab === tab.key ? tab.bgColor : '#f5f5f5',
                            color: activeTab === tab.key ? tab.color : '#666',
                            border: activeTab === tab.key ? `2px solid ${tab.color}` : '2px solid transparent',
                          }}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                    <div className="tabs-container">
                      {tabs.map((tab) => (
                        <button
                          key={`tab-2-${tab.key}`}
                          onClick={() => handleTabClick(tab.key)}
                          className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
                          style={{
                            backgroundColor: activeTab === tab.key ? tab.bgColor : '#f5f5f5',
                            color: activeTab === tab.key ? tab.color : '#666',
                            border: activeTab === tab.key ? `2px solid ${tab.color}` : '2px solid transparent',
                          }}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Always visible with active tab content */}
          {contentData[activeTab] && (
            <div
              ref={detailsRef}
              className="details-section"
              style={{
                marginTop: '40px',
                background: '#fafafa',
                borderRadius: '24px',
                padding: '40px',
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                animation: 'fadeIn 0.3s ease-out'
              }}
            >
              {/* Left Side */}
              <div className="details-left">
                <h3 className="heading-style-h3" style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>
                  {contentData[activeTab].title}
                </h3>
                <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem', maxWidth: '400px' }}>
                  {contentData[activeTab].description}
                </p>

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
              <div className="details-right">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {contentData[activeTab].agents.map((agent: any, idx: number) => (
                    <div key={idx} style={{
                      background: '#fff',
                      borderRadius: '16px',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                      border: '1px solid #eee'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#f0f0f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <agent.icon size={20} color="#555" />
                      </div>
                      <span style={{ fontSize: '0.95rem', color: '#333', fontWeight: 500 }}>
                        {agent.text}
                      </span>
                    </div>
                  ))}

                  <button style={{
                    marginTop: '10px',
                    background: '#1c1c1c',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 24px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: 'fit-content'
                  }}>
                    Explore solution <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <style dangerouslySetInnerHTML={{__html: `
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(10px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @media (max-width: 991px) {
                  .details-section {
                    grid-template-columns: 1fr !important;
                    padding: 24px !important;
                  }
                }
              `}} />
            </div>
          )}

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .tabs-marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .tabs-container-wrapper {
          display: flex;
          width: fit-content;
        }
        
        .tabs-container {
          display: flex;
          gap: 20px;
          padding: 16px 24px;
          align-items: center;
        }
        
        .tab-button {
          padding: 14px 28px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          border: 2px solid transparent;
          background: #f5f5f5;
          color: #666;
          flex-shrink: 0;
        }
        
        .tab-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .tab-button.active {
          font-weight: 600;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        @media (max-width: 767px) {
          .tabs-container {
            gap: 16px;
            padding: 12px 16px;
          }
          
          .tab-button {
            padding: 12px 24px;
            font-size: 0.875rem;
          }
        }
      `}} />
    </div>
  );
};

export default SectionMainStats;

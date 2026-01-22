import React from "react";
import {
  Share2,
  Search,
  CheckSquare,
  Network,
  Link,
  Sparkles,
  Calendar,
  PenTool,
  Briefcase,
  Layout,
  Bell,
  PieChart,
  Flag,
  Milestone,
  FileInput,
  Folder,
  FileText,
  Timer,
  Disc,
  Pen,
  Zap,
  List,
  Clock,
  MessageCircle,
  ArrowUp,
  Calculator,
  Video,
  LayoutGrid,
  Mail,
  LayoutDashboard,
  Watch,
  SquareDashed,
  Plug,
  Tag,
  Headphones,
  CalendarClock,
  Table,
  Map,
  Inbox,
  BrainCircuit,
  MessageSquare,
  Code,
  Users,
  Hash,
} from "lucide-react";

const TraditionalMarketing = () => {
  return (
    <div className="section-grid-ui">
      <div className="padding-global">
        <div className="container-large">
          <div className="grid-wrapper">
            <div className="heading-wrapper">
              <h2 className="heading-style-h3-v2">
                All apps, AI Agents, <br /> and humans in Supreme Coach.
              </h2>
              <p className="subheading">
                100+ products to replace fragmented software & maximize human productivity.
              </p>
            </div>

            <div className="features-grid">

              {/* Row 1 Left */}
              <div className="feature-item"><div className="icon-wrapper"><Bell size={24} strokeWidth={1.5} /></div><span className="feature-name">Reminders</span></div>
              <div className="feature-item"><div className="icon-wrapper"><PieChart size={24} strokeWidth={1.5} /></div><span className="feature-name">Reporting</span></div>
              <div className="feature-item"><div className="icon-wrapper"><Flag size={24} strokeWidth={1.5} /></div><span className="feature-name">Goals</span></div>

              {/* Featured: Projects */}
              <div className="feature-item featured-item projects-card">
                <div className="featured-content">
                  <div className="mini-ui-projects">
                    <div className="ui-header"><div className="ui-badge yellow">Needs Update</div> <div className="ui-badge green">Closed</div></div>
                    <div className="ui-row"><div className="ui-avatar"></div> <div className="ui-bar"></div></div>
                  </div>
                  <div className="featured-label">
                    <Layout style={{ color: "#2F56EA", marginRight: "8px" }} size={24} strokeWidth={2} />
                    <span style={{ fontSize: "20px", fontWeight: "600", color: "#24223E" }}>Projects</span>
                  </div>
                </div>
              </div>

              {/* Featured: Docs */}
              <div className="feature-item featured-item docs-card">
                <div className="featured-content">
                  <div className="mini-ui-docs">
                    <div className="ui-title">Convergence Brief</div>
                    <div className="ui-lines">
                      <div className="ui-line long"></div>
                      <div className="ui-line medium"></div>
                      <div className="ui-line short"></div>
                    </div>
                  </div>
                  <div className="featured-label">
                    <FileText style={{ color: "#00A9FF", marginRight: "8px" }} size={24} strokeWidth={2} />
                    <span style={{ fontSize: "20px", fontWeight: "600", color: "#24223E" }}>Docs</span>
                  </div>
                </div>
              </div>

              {/* Row 1 Right */}
              <div className="feature-item"><div className="icon-wrapper"><Timer size={24} strokeWidth={1.5} /></div><span className="feature-name">Sprints</span></div>
              <div className="feature-item"><div className="icon-wrapper"><Disc size={24} strokeWidth={1.5} /></div><span className="feature-name">Custom Status</span></div>

              {/* Row 2 Left (Filling around featured items) */}
              <div className="feature-item"><div className="icon-wrapper"><Code size={24} strokeWidth={1.5} /></div><span className="feature-name">API Calls</span></div>
              <div className="feature-item"><div className="icon-wrapper"><Milestone size={24} strokeWidth={1.5} /></div><span className="feature-name">Milestones</span></div>
              <div className="feature-item"><div className="icon-wrapper"><FileInput size={24} strokeWidth={1.5} /></div><span className="feature-name">Forms</span></div>

              {/* Row 2 Right */}
              <div className="feature-item"><div className="icon-wrapper"><Zap size={24} strokeWidth={1.5} /></div><span className="feature-name">Automations</span></div>
              <div className="feature-item"><div className="icon-wrapper"><List size={24} strokeWidth={1.5} /></div><span className="feature-name">Custom Fields</span></div>


              {/* Row 3 Left */}
              <div className="feature-item"><div className="icon-wrapper"><MessageCircle size={24} strokeWidth={1.5} /></div><span className="feature-name">AI Q&A</span></div>
              <div className="feature-item"><div className="icon-wrapper"><ArrowUp size={24} strokeWidth={1.5} /></div><span className="feature-name">Priorities</span></div>
              <div className="feature-item"><div className="icon-wrapper"><Calculator size={24} strokeWidth={1.5} /></div><span className="feature-name">Time Estimates</span></div>

              {/* Featured: Brain */}
              <div className="feature-item featured-item brain-card">
                <div className="featured-content">
                  <div className="mini-ui-brain">
                    <div className="ui-chat-bubble">What did I miss last week?</div>
                    <div className="ui-search-bar"><Sparkles size={12} color="#D45894" /> Search</div>
                    <div className="ui-tag">OOH Campaign <span className="ui-badge pink">IN PROGRESS</span></div>
                  </div>
                  <div className="featured-label">
                    <BrainCircuit style={{ color: "#D45894", marginRight: "8px" }} size={24} strokeWidth={2} />
                    <span style={{ fontSize: "20px", fontWeight: "600", color: "#24223E" }}>Brain</span>
                  </div>
                </div>
              </div>

              {/* Featured: Chat */}
              <div className="feature-item featured-item chat-card">
                <div className="featured-content">
                  <div className="mini-ui-chat">
                    <div className="ui-msg-row"><div className="ui-avatar blue"></div><div className="ui-bubble"></div></div>
                    <div className="ui-msg-row"><div className="ui-avatar pink"></div><div className="ui-bubble"></div></div>
                    <div className="ui-reactions">🚀 🔥 💜</div>
                  </div>
                  <div className="featured-label">
                    <div className="hash-icon-box">
                      <Hash style={{ color: "#fff" }} size={16} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: "20px", fontWeight: "600", color: "#24223E" }}>Chat</span>
                  </div>
                </div>
              </div>

              {/* Row 3 Right */}
              <div className="feature-item"><div className="icon-wrapper"><Video size={24} strokeWidth={1.5} /></div><span className="feature-name">Clips</span></div>
              <div className="feature-item"><div className="icon-wrapper"><LayoutGrid size={24} strokeWidth={1.5} /></div><span className="feature-name">Everything view</span></div>

              {/* Row 4 Left */}
              <div className="feature-item"><div className="icon-wrapper"><Mail size={24} strokeWidth={1.5} /></div><span className="feature-name">Emails</span></div>
              <div className="feature-item"><div className="icon-wrapper"><LayoutDashboard size={24} strokeWidth={1.5} /></div><span className="feature-name">Dashboards</span></div>
              <div className="feature-item"><div className="icon-wrapper"><Watch size={24} strokeWidth={1.5} /></div><span className="feature-name">Time Tracking</span></div>

              {/* Row 4 Right */}
              <div className="feature-item"><div className="icon-wrapper"><SquareDashed size={24} strokeWidth={1.5} /></div><span className="feature-name">Kanban Boards</span></div>
              <div className="feature-item"><div className="icon-wrapper"><Plug size={24} strokeWidth={1.5} /></div><span className="feature-name">Integrations</span></div>


              {/* Row 5 - Bottom full row */}
              <div className="feature-item"><div className="icon-wrapper"><Tag size={24} strokeWidth={1.5} /></div><span className="feature-name">Tags</span></div>
              <div className="feature-item"><div className="icon-wrapper"><Headphones size={24} strokeWidth={1.5} /></div><span className="feature-name">24/7 Support</span></div>
              <div className="feature-item"><div className="icon-wrapper"><CheckSquare size={24} strokeWidth={1.5} /></div><span className="feature-name">Checklists</span></div>

              {/* More items to fill */}
              <div className="feature-item"><div className="icon-wrapper"><CalendarClock size={24} strokeWidth={1.5} /></div><span className="feature-name">Scheduling</span></div>
              <div className="feature-item"><div className="icon-wrapper"><Table size={24} strokeWidth={1.5} /></div><span className="feature-name">Spreadsheets</span></div>
              <div className="feature-item"><div className="icon-wrapper"><PenTool size={24} strokeWidth={1.5} /></div><span className="feature-name">Whiteboards</span></div>
              <div className="feature-item"><div className="icon-wrapper"><Map size={24} strokeWidth={1.5} /></div><span className="feature-name">Gantt Charts</span></div>
              <div className="feature-item"><div className="icon-wrapper"><Users size={24} strokeWidth={1.5} /></div><span className="feature-name">Roadmaps</span></div>
              <div className="feature-item"><div className="icon-wrapper"><Inbox size={24} strokeWidth={1.5} /></div><span className="feature-name">Inbox</span></div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-grid-ui {
          padding: 80px 0;
          background-color: #fff;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .container-large {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }
        .padding-global {
          padding-left: 2rem;
          padding-right: 2rem;
        }
        .heading-wrapper {
          text-align: center;
          margin-bottom: 60px;
        }
        .heading-style-h3-v2 {
            font-size: 3.5rem;
            line-height: 1.1;
            font-weight: 700;
            color: #24223e;
            margin-bottom: 16px;
        }
        .subheading {
            font-size: 1.125rem;
            color: #6b6b78;
            font-weight: 400;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr); /* Mobile Default */
          gap: 1px;
          background-color: #f0f0f0; /* Grid lines */
          border: 1px solid #f0f0f0;
        }

        .feature-item {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px 10px;
          min-height: 120px;
          position: relative;
          transition: all 0.2s;
        }

        .icon-wrapper {
          margin-bottom: 12px;
          color: #7c7c7c;
        }
        .feature-name {
          font-size: 13px;
          color: #7c7c7c;
          text-align: center;
          font-weight: 500;
        }
        
        .feature-item:hover {
           z-index: 5;
           border: 1px solid #1a1a1a;
           cursor: pointer;
        }
        .feature-item:hover .icon-wrapper, .feature-item:hover .feature-name {
           color: #24223e;
        }

        /* FEATURED ITEMS STYLES */
        .featured-item {
           grid-column: span 2;
           grid-row: span 2;
           padding: 0;
           overflow: hidden;
           display: flex;
           align-items: center;
           justify-content: center;
           background: #fff; /* Fallback */
        }
        
        .featured-content {
           width: 100%;
           height: 100%;
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: space-between;
           padding: 24px;
        }
        
        .featured-label {
           display: flex;
           align-items: center;
           margin-top: auto;
           background: #fff;
           padding: 8px 16px;
           border-radius: 50px;
           box-shadow: 0 2px 8px rgba(0,0,0,0.05);
           z-index: 2;
        }

        /* Projects Stylings */
        .projects-card { background: linear-gradient(135deg, #FFFCF5 0%, #FFF 100%); }
        .mini-ui-projects {
            width: 80%;
            background: #fff;
            border: 1px solid #eee;
            border-radius: 8px;
            padding: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.03);
            margin-bottom: 12px;
        }
        .ui-header { display: flex; gap: 4px; margin-bottom: 8px; }
        .ui-badge { font-size: 8px; padding: 2px 6px; border-radius: 4px; font-weight: 600; }
        .ui-badge.yellow { background: #FFF4D8; color: #B98900; }
        .ui-badge.green { background: #E6FAEA; color: #00875A; }
        .ui-row { display: flex; align-items: center; gap: 6px; }
        .ui-avatar { width: 16px; height: 16px; border-radius: 50%; background: #eee; }
        .ui-bar { height: 6px; width: 60%; background: #eee; border-radius: 3px; }

        /* Docs Stylings */
        .docs-card { background: linear-gradient(135deg, #F0F9FF 0%, #FFF 100%); }
        .mini-ui-docs {
            width: 70%;
            height: 80px;
            background: #fff;
            border: 1px solid #eee;
            border-radius: 4px;
            padding: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.03);
            margin-bottom: 12px;
            position: relative;
        }
        .ui-title { font-size: 10px; font-weight: 700; margin-bottom: 6px; color: #333; }
        .ui-lines { display: flex; flex-direction: column; gap: 4px; }
        .ui-line { height: 4px; background: #eee; border-radius: 2px; }
        .ui-line.long { width: 100%; }
        .ui-line.medium { width: 80%; }
        .ui-line.short { width: 40%; }

        /* Brain Stylings */
        .brain-card { background: linear-gradient(135deg, #FFF0F6 0%, #FFF 100%); }
        .mini-ui-brain { width: 90%; display: flex; flex-direction: column; align-items: center; gap: 6px; margin-bottom: 12px; }
        .ui-chat-bubble { font-size: 10px; background: #fff; padding: 6px 10px; border-radius: 12px 12px 12px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.03); color: #555; align-self: flex-start; }
        .ui-search-bar { width: 100%; background: #fff; border: 1px solid #eee; border-radius: 50px; padding: 6px 12px; font-size: 10px; color: #999; display: flex; align-items: center; gap: 4px; }
        .ui-tag { font-size: 9px; color: #333; display: flex; align-items: center; gap: 4px; margin-top: 4px; }
        .ui-badge.pink { background: #FF2D55; color: #fff; font-size: 8px; padding: 1px 4px; border-radius: 2px; }

        /* Chat Stylings */
        .chat-card { background: linear-gradient(135deg, #F5F3FF 0%, #FFF 100%); }
        .hash-icon-box { background: #7B68EE; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-right: 8px; }
        .mini-ui-chat { width: 80%; display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }
        .ui-msg-row { display: flex; gap: 6px; align-items: center; }
        .ui-avatar.blue { background: #00A9FF; }
        .ui-avatar.pink { background: #FF2D55; }
        .ui-bubble { height: 8px; width: 60%; background: #eee; border-radius: 4px; }
        .ui-reactions { font-size: 10px; background: #fff; padding: 2px 6px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); align-self: center; }

        /* DESKTOP GRID - 9 Columns */
        @media (min-width: 992px) {
            .features-grid {
                grid-template-columns: repeat(9, 1fr);
            }
            .feature-item {
                min-height: 110px;
                padding: 16px 8px;
            }
        }

        /* TABLET GRID - 4 Columns */
        @media (max-width: 991px) {
            .features-grid {
                grid-template-columns: repeat(4, 1fr);
            }
             .featured-item {
                 grid-column: span 2;
                 grid-row: span 2;
             }
        }

        /* MOBILE GRID - 2 Columns */
        @media (max-width: 479px) {
             .features-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            /* On mobile, maybe un-feature them to keep it simple, or keep 2x2. 2x2 on a 2-col grid is just full width. */
             .featured-item {
                 grid-column: span 2; /* Full width */
                 grid-row: span 1; /* Standard height or slightly taller */
                 height: auto;
                 min-height: 200px;
             }
        }
      `}</style>
    </div>
  );
};

export default TraditionalMarketing;

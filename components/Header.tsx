"use client";

import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Sparkles,
  Users,
  FileText,
  BookOpen,
  Star,
  MessageCircle,
  Newspaper,
  FileCheck,
  BarChart2,
  Trello,
  List,
  Hash,
  PhoneCall,
  Inbox,
  Video,
  PenTool,
  CheckSquare,
  Calendar,
  Clock,
  Zap,
  Timer,
  X,
  Wallet,
} from "lucide-react";
import { ReactNode } from "react";

type MegaItem = {
  label: string;
  icon: ReactNode;
  color?: string;
};

type MegaColProps = {
  items: MegaItem[];
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="section_hero">
      <div
        data-animation="default"
        data-sticky-nav="true"
        className="nav-element w-nav"
        data-easing2="linear"
        fs-scrolldisable-element="smart-nav"
        data-easing="ease"
        data-collapse="medium"
        data-w-id="285ab8f6-7c53-c0c1-5132-bb8735736349"
        role="banner"
        data-duration="400"
      >
        <div className="container-large">
          <div className="nav_component">
            <a
              href="/"
              aria-label="mobile-nav-logo"
              className="navbar_logo-mob w-nav-brand"
            >
              <div className="sc-logo-svg w-embed">
                <LogoSVG />
              </div>
            </a>

            {/* Mobile menu toggle */}
            <button
              aria-label="Toggle navigation"
              className={`w-nav-button navbar_burger ${isMenuOpen ? "w--open" : ""}`}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <div className="navbar_burger-lines" />
            </button>

            {/* Mobile menu overlay */}
            {isMenuOpen && (
              <div
                className="mobile-menu-overlay"
                onClick={() => setIsMenuOpen(false)}
              />
            )}

            <nav
              role="navigation"
              id="w-node-_285ab8f6-7c53-c0c1-5132-bb873573634e-35736349"
              className={`navbar_menu w-nav-menu ${isMenuOpen ? "w--nav-menu-open" : ""}`}
              style={isMenuOpen ? { display: "block" } : undefined}
              onClick={(e) => {
                const target = e.target as HTMLElement | null;
                const link = target?.closest("a") as HTMLAnchorElement | null;
                // Close mobile nav only when clicking a real navigation link
                if (link) {
                  const href = link.getAttribute("href");
                  if (href && href !== "#") {
                    setIsMenuOpen(false);
                  }
                }
                // Don't close if clicking dropdown toggle buttons
                if (target?.closest("button[type='button']")) {
                  e.stopPropagation();
                }
              }}
            >
              {/* Mobile menu header with logo and close button */}
              <div className="mobile-menu-header">
                <a
                  href="/"
                  aria-label="mobile-menu-logo"
                  className="mobile-menu-logo"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="sc-logo-svg w-embed">
                    <LogoSVG />
                  </div>
                </a>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="mobile-menu-close"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="navbar_links-block first">
                <a
                  href="/"
                  aria-label="nav-logo-link"
                  className="navbar_logo-desktop w-nav-brand"
                >
                  <div className="sc-logo-svg w-embed">
                    <LogoSVG />
                  </div>
                </a>

                <div className="nav-divider" />

                <div className="nav-links-wrapper">
                  <ForBrandsDropdown />
                  <ForCreatorsDropdown />
                  <ForProductsDropdown />
                </div>
              </div>

              <div className="navbar_links-block end">
                <div className="nav-links-wrapper">
                  <a href="/about" className="navbar-link">
                    About
                  </a>
                  <a href="/blog" className="navbar-link">
                    Blog
                  </a>
                  <a href="/guides" className="navbar-link">
                    Guides
                  </a>
                </div>
                <div className="nav-divider" />
                <a
                  href="/get-access"
                  target="_blank"
                  className="button-light is-small w-inline-block"
                >
                  <div>Contact Sales</div>
                </a>
                <a
                  href="/get-access"
                  target="_blank"
                  className="button-dark is-small w-inline-block"
                >
                  <div>Request a demo</div>
                  <div className="icon-embed-xxsmall w-embed">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 133 32"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      role="img"
    >
      <text
        x="0"
        y="22"
        fontFamily="new-kansas, Georgia, serif"
        fontSize="18"
        fontWeight="500"
        fill="currentColor"
      >
        Supreme Coach
      </text>
    </svg>
  );
}

function ForBrandsDropdown() {
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  return (
    <div
      data-delay="0"
      data-hover="true"
      data-dropdown-trigger="hover"
      className="navbar_menu-dropdown w-dropdown"
      onMouseEnter={() => setIsBrandsOpen(true)}
      onMouseLeave={() => setIsBrandsOpen(false)}
    >
      <button
        type="button"
        className="navdrop-toggle w-dropdown-toggle"
        aria-expanded={isBrandsOpen}
        onClick={(e) => {
          e.stopPropagation();
          setIsBrandsOpen((v) => !v);
        }}
      >
        <span className="navbar_menu-link">For Coach</span>
        <div
          className="dropdown-chevron w-embed"
          style={{
            transform: isBrandsOpen ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <nav
        className="nav_drop-list creators w-dropdown-list"
        style={{ display: isBrandsOpen ? "block" : "none" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile close button */}
        <div className="dropdown-mobile-header">
          <button
            type="button"
            aria-label="Close dropdown"
            className="dropdown-mobile-close"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsBrandsOpen(false);
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="nav_mega-list-wrapper">
          <div className="nav_mega-left">
            <div className="nav_mega-links">
              <a
                href="/"
                aria-label="nav-link"
                className="nav_mega-link w-inline-block"
              >
                <div className="nav-maga-icon w-embed">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="nav_m-link-texts">
                  <div className="nav-mega-head">Features</div>
                  <div className="text-size-small">
                    Find the right creators on all platforms, book &amp;
                    collaborate, pay quickly &amp; safely - all in one place.
                  </div>
                </div>
              </a>

              <a
                href="#"
                aria-label="nav-link"
                className="nav_mega-link w-inline-block"
              >
                <div className="nav-maga-icon w-embed">
                  <Users className="w-5 h-5" />
                </div>
                <div className="nav_m-link-texts">
                  <div className="nav-mega-head">Coaches</div>
                  <div className="text-size-small">
                    Discover how forward-thinking Coaches use Supreme Coach to
                    reach their growth goals.
                  </div>
                </div>
              </a>

              <a
                href="/pricing?type=coach"
                aria-label="nav-link"
                className="nav_mega-link w-inline-block"
              >
                <div className="nav-maga-icon w-embed">
                  <Wallet className="w-5 h-5" />
                </div>
                <div className="nav_m-link-texts">
                  <div className="nav-mega-head">Pricing</div>
                  <div className="text-size-small">
                    Designed for every stage of your journey. Start today for free.
                  </div>
                </div>
              </a>
            </div>

            <div className="mega_nav-bottom">
              <div className="mega_nav-head-wrap">
                <div>RESOURCES</div>
              </div>
              <a
                href="/blog"
                aria-label="nav-link"
                className="nav_mega-link is-small w-inline-block"
              >
                <div className="nav-maga-icon w-embed">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="nav_m-link-texts">
                  <div className="nav-mega-head">Blog</div>
                </div>
              </a>
              <a
                href="/influencer-pricing-guide"
                aria-label="nav-link"
                className="nav_mega-link is-small w-inline-block"
              >
                <div className="nav-maga-icon w-embed">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="nav_m-link-texts">
                  <div className="nav-mega-head">Influencer Pricing Guide</div>
                </div>
              </a>
            </div>
          </div>

          <div className="nav_mega-img-wrapper">
            {/* <img src="" alt="" className="nav_mega-img" loading="lazy" /> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

function ForCreatorsDropdown() {
  const [isCreatorsOpen, setIsCreatorsOpen] = useState(false);

  return (
    <div
      data-delay="0"
      data-hover="true"
      data-dropdown-trigger="hover"
      data-w-id="285ab8f6-7c53-c0c1-5132-bb8735736386"
      className="navbar_menu-dropdown w-dropdown"
      onMouseEnter={() => setIsCreatorsOpen(true)}
      onMouseLeave={() => setIsCreatorsOpen(false)}
    >
      <button
        type="button"
        className="navdrop-toggle w-dropdown-toggle"
        aria-expanded={isCreatorsOpen}
        onClick={(e) => {
          e.stopPropagation();
          setIsCreatorsOpen((v) => !v);
        }}
      >
        <span className="navbar_menu-link">For Firms</span>
        <div
          className="dropdown-chevron w-embed"
          style={{
            transform: isCreatorsOpen ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <nav
        className="nav_drop-list creators w-dropdown-list"
        style={{ display: isCreatorsOpen ? "block" : "none" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile close button */}
        <div className="dropdown-mobile-header">
          <button
            type="button"
            aria-label="Close dropdown"
            className="dropdown-mobile-close"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsCreatorsOpen(false);
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="nav_mega-list-wrapper">
          <div className="nav_mega-left">
            <div className="nav_mega-links">
              <a
                href="/creators"
                aria-label="nav-link"
                className="nav_mega-link w-inline-block"
              >
                <div className="nav-maga-icon w-embed">
                  <Star className="w-5 h-5" />
                </div>
                <div className="nav_m-link-texts">
                  <div className="nav-mega-head">Features</div>
                  <div className="text-size-small">
                    Manage sponsorships, invoicing, and payments - all in one
                    place built for creators.
                  </div>
                </div>
              </a>

              <a
                href="/creator-stories"
                aria-label="nav-link"
                className="nav_mega-link w-inline-block"
              >
                <div className="nav-maga-icon w-embed">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="nav_m-link-texts">
                  <div className="nav-mega-head">Firms</div>
                  <div className="text-size-small">
                    Discover how forward-thinking Firms use Supreme Coach to
                    reach their growth goals.
                  </div>
                </div>
              </a>

              <a
                href="/pricing?type=firms"
                aria-label="nav-link"
                className="nav_mega-link w-inline-block"
              >
                <div className="nav-maga-icon w-embed">
                  <Wallet className="w-5 h-5" />
                </div>
                <div className="nav_m-link-texts">
                  <div className="nav-mega-head">Pricing</div>
                  <div className="text-size-small">
                    Designed for every stage of your journey. Start today for free.
                  </div>
                </div>
              </a>
            </div>

            <div className="mega_nav-bottom">
              <div className="mega_nav-head-wrap">
                <div>RESOURCES</div>
              </div>
              <a
                href="/blog"
                aria-label="nav-link"
                className="nav_mega-link is-small w-inline-block"
              >
                <div className="nav-maga-icon w-embed">
                  <Newspaper className="w-5 h-5" />
                </div>
                <div className="nav_m-link-texts">
                  <div className="nav-mega-head">Blog</div>
                </div>
              </a>
              <a
                href="/sponsorship-pricing-guide"
                aria-label="nav-link"
                className="nav_mega-link is-small w-inline-block"
              >
                <div className="nav-maga-icon w-embed">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div className="nav_m-link-texts">
                  <div className="nav-mega-head">Sponsorship Pricing Guide</div>
                </div>
              </a>
            </div>
          </div>

          <div className="nav_mega-img-wrapper purple">
            {/* <img src="" alt="" className="nav_mega-img" loading="lazy" /> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

function ForProductsDropdown() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <div
      data-delay="0"
      data-hover="true"
      data-dropdown-trigger="hover"
      className="navbar_menu-dropdown w-dropdown"
      onMouseEnter={() => setIsProductsOpen(true)}
      onMouseLeave={() => setIsProductsOpen(false)}
    >
      <button
        type="button"
        className="navdrop-toggle w-dropdown-toggle"
        aria-haspopup="true"
        aria-expanded={isProductsOpen}
        onClick={(e) => {
          e.stopPropagation();
          setIsProductsOpen((v) => !v);
        }}
      >
        <span className="navbar_menu-link">Products</span>
        <span
          className="dropdown-chevron"
          style={{
            transform: isProductsOpen ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
            display: "inline-flex",
          }}
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>

      <nav
        className="nav_drop-list creators w-dropdown-list"
        style={{ display: isProductsOpen ? "block" : "none" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile close button */}
        <div className="dropdown-mobile-header">
          <button
            type="button"
            aria-label="Close dropdown"
            className="dropdown-mobile-close"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsProductsOpen(false);
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="nav_mega-list-wrapper flex gap-12">
          <MegaCol
            items={[
              { icon: <FileCheck />, label: "Tasks", color: "#22c55e" },
              { icon: <BarChart2 />, label: "Dashboards", color: "#ec4899" },
              { icon: <Trello />, label: "Board view", color: "#3b82f6" },
              { icon: <List />, label: "Gantt", color: "#ef4444" },
            ]}
          />

          <MegaCol
            items={[
              { icon: <Hash />, label: "Chat", color: "#a259ff" },
              { icon: <PhoneCall />, label: "SyncUp", color: "#14b8a6" },
              { icon: <Inbox />, label: "Inbox", color: "#f97316" },
              { icon: <Video />, label: "Clips", color: "#ef4444" },
            ]}
          />

          <MegaCol
            items={[
              { icon: <FileText />, label: "Docs", color: "#3b82f6" },
              { icon: <PenTool />, label: "Whiteboards", color: "#fbbf24" },
              { icon: <BookOpen />, label: "Wiki", color: "#a259ff" },
              { icon: <CheckSquare />, label: "Forms", color: "#a259ff" },
            ]}
          />

          <MegaCol
            items={[
              { icon: <Calendar />, label: "Calendar", color: "#ec4899" },
              { icon: <Clock />, label: "Scheduling", color: "#f97316" },
              { icon: <Zap />, label: "Automations", color: "#a259ff" },
              { icon: <Timer />, label: "Time tracking", color: "#14b8a6" },
            ]}
          />
        </div>
      </nav>
    </div>
  );
}

function MegaCol({ items }: MegaColProps) {
  return (
    <div className="nav_mega-col">
      <div className="nav_mega-links">
        {items.map((item, i) => (
          <div
            key={i}
            className="nav_mega-link w-inline-block text-left"
            style={{
              cursor: "pointer",
            }}
          >
            <span
              className="nav-maga-icon"
              style={{ color: item.color, marginTop: "-2px" }}
            >
              {item.icon}
            </span>

            <span className="nav-mega-head whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export { MegaCol };

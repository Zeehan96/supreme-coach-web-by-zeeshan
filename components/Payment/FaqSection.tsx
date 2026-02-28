import React, { useState } from "react";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  col?: number;
};

const faqItems: FaqItem[] = [
  {
    id: "faq-4",
    question: "Is Supreme Coach free for creators?",
    answer: "Yes, it’s free to sign up with no upfront costs. We add a 2% fee per transaction (brand covers it) and 15% when we match you with a brand.",
    col: 0,
  },
  {
    id: "faq-5",
    question: "How do I get started?",
    answer:
      "Sign up to our waitlist, set up your profile with offerings and audience insights, and you’re start receiving collaboration requests from brands.",
    col: 0,
  },
  {
    id: "faq-6",
    question: "How does Supreme Coach help me find brand partnerships?",
    answer:
      "We match you with B2B brands by audience and niche. You manage booking and payments on the platform; Live Campaigns lets you discover and apply to active campaigns.",
    col: 0,
  },
  {
    id: "faq-7",
    question: "Can I set my own rates?",
    answer:
      "Yes. You set your pricing and services (shoutouts, sponsored posts, newsletter, etc.).",
    col: 0,
  },
  // {
  //   id: "faq-8",
  //   question: "How do payments work?",
  //   answer:
  //     "Payments go through the platform. Track invoices and payouts in your dashboard.",
  //   col: 0,
  // },
  {
    id: "faq-10",
    question: "What type of brands will I work with?",
    answer:
      "B2B brands across tech, SaaS, AI, finance and more that fit your niche and audience.",
    col: 1,
  },
  {
    id: "faq-11",
    question: "How do I get more visibility with brands?",
    answer:
      "Keep your profile updated with audience stats, content examples and pricing. Share your link on your channels for more leads.",
    col: 1,
  },
  {
    id: "faq-12",
    question: "How do I communicate with brands?",
    answer:
      "Use the in-platform messaging to talk to brands, discuss campaigns and share feedback.",
    col: 1,
  },
];

const AccordionItem: React.FC<{
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div
      data-delay={0}
      data-hover="false"
      className="faq-p w-dropdown"
      style={{
        minHeight: "3.25rem",
        height: isOpen ? "auto" : undefined,
        transition: "height 0.3s ease-in-out",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Row 1: Arrow + Question (clickable) */}
      <button
        type="button"
        className="faq w-dropdown-toggle"
        aria-controls={`${item.id}-body`}
        aria-expanded={isOpen}
        onClick={onToggle}
        style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: "0.75rem", textAlign: "left" }}
      >
        <div className="accordian-icon-wrap" style={{ flexShrink: 0 }}>
          <div className="faq-bg-gradient orange-gradient" />
          <div className="faq-bg-gradient obsidian-gradient" style={{ opacity: 1 }} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 17 16"
            fill="none"
            className="faq-chevron-icon"
            style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.73431 6.63422C5.04673 6.3218 5.55327 6.3218 5.86569 6.63422L8.5 9.26853L11.1343 6.63422C11.4467 6.3218 11.9533 6.3218 12.2657 6.63422C12.5781 6.94664 12.5781 7.45317 12.2657 7.76559L9.06569 10.9656C8.75327 11.278 8.24673 11.278 7.93431 10.9656L4.73431 7.76559C4.4219 7.45317 4.4219 6.94664 4.73431 6.63422Z"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
          <div className="toggle-text">{item.question}</div>

          {/* Answer below question only, in a card */}
          <div
            className="faq-answer-content"
            style={{
              marginTop: isOpen ? "0.75rem" : 0,
              opacity: isOpen ? 1 : 0,
              height: isOpen ? "auto" : 0,
              overflow: "hidden",
              minHeight: isOpen ? undefined : 0,
              transition: "opacity 0.2s ease-in-out, margin 0.2s ease-in-out, height 0.2s ease-in-out",
            }}
          >
            <div
              className="faq-answer"
              style={{
                padding: "0.875rem 1rem",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                backgroundColor: "#f9fafb",
                fontSize: "0.9375rem",
                lineHeight: 1.5,
                color: "#374151",
              }}
            >
              {item.answer}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpenMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const leftItems = faqItems.filter((i) => (i.col ?? 0) === 0);
  const rightItems = faqItems.filter((i) => (i.col ?? 0) === 1);

  return (
    <div className="section_faqs">
      <div className="padding-section-xmedium faq-creator">
        <div className="padding-global">
          <div className="container-xlarge">
            <div className="faqs_component">
              <div className="faqs_top-wrapper">
                <h2 className="heading-style-h3-v2">Frequently Asked Questions</h2>
              </div>

              <div className="faq_grid flex-inners">
                <div className="faq_grid-side">
                  {leftItems.map((it) => (
                    <AccordionItem key={it.id} item={it} isOpen={!!openMap[it.id]} onToggle={() => toggle(it.id)} />
                  ))}
                </div>

                <div className="faq_grid-side">
                  {rightItems.map((it) => (
                    <AccordionItem key={it.id} item={it} isOpen={!!openMap[it.id]} onToggle={() => toggle(it.id)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
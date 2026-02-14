import React, { useState } from "react";

type FaqItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
  // optional image html
  image?: { src: string; alt?: string; srcSet?: string; sizes?: string };
  // which column: 0 = left, 1 = right
  col?: number;
  maxHeight?: number;
};

const faqItems: FaqItem[] = [
  {
    id: "faq-4",
    question: "Is Supreme Coach free for creators?",
    answer: (
      <>
        <p>
          Yes, it’s free for creators to sign up and use Supreme Coach and
          there are no upfront costs to get started.
          <br />
          <br />
          Supreme Coach adds a 2% fee on every transaction, which the brand
          covers. When we match you with a brand, we charge a 15% fee
          (incl. payment fees).
        </p>
      </>
    ),
    image: {
      src: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670ec724933c19980b0ae5d8_Fees.avif",
      alt: "pricing comparison chart",
      srcSet:
        "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670ec724933c19980b0ae5d8_Fees-p-500.avif 500w, https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670ec724933c19980b0ae5d8_Fees.avif 1152w",
      sizes: "100vw",
    },
    col: 0,
    maxHeight: 527,
  },
  {
    id: "faq-5",
    question: "How do I get started?",
    answer:
      "Signing up is quick and easy. Just sign up to our waitlist and you will get access right away. Set up your profile with your offerings and audience insights, and you’re ready to start receiving collaboration requests from brands.",
    col: 0,
    maxHeight: 120,
  },
  {
    id: "faq-6",
    question: "How does Supreme Coach help me find brand partnerships?",
    answer:
      "Supreme Coach matches you with B2B brands based on your audience, content niche, and platform. Brands will reach out to you for partnerships, and you can manage everything from booking to payments on the platform. Our Live Campaigns feature also lets you discover and apply to brands who run active campaigns.",
    col: 0,
    maxHeight: 174,
  },
  {
    id: "faq-7",
    question: "Can I set my own rates?",
    answer:
      "Yes! As a creator, you have full control over your pricing and what services you offer, such as shoutouts, sponsored posts, or newsletter features.",
    col: 0,
    maxHeight: 92,
  },
  {
    id: "faq-8",
    question: "How do payments work?",
    answer:
      "Payments are processed through the platform to ensure timely and secure transfers. You can track all invoices and payouts in your dashboard.",
    col: 0,
    maxHeight: 92,
  },
  {
    id: "faq-10",
    question: "What type of brands will I work with?",
    answer:
      "Supreme Coach partners with leading B2B brands across tech, SaaS, AI, finance, and more, helping you connect with companies that align with your niche and audience.",
    col: 1,
    maxHeight: 120,
  },
  {
    id: "faq-11",
    question: "How do I get more visibility with brands on the platform?",
    answer:
      "To increase visibility, keep your profile updated with your latest audience stats, content examples, and pricing. Brands can filter and discover creators based on specific criteria, so the more detailed your profile, the better. Share your Supreme Coach link across your own platforms for inbound leads.",
    col: 1,
    maxHeight: 174,
  },
  {
    id: "faq-12",
    question: "How do I communicate with brands?",
    answer:
      "Supreme Coach provides a direct messaging feature, allowing you to easily communicate with brands, discuss campaign details, and exchange feedback throughout the partnership.",
    col: 1,
    maxHeight: 120,
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
        height: isOpen ? (item.maxHeight ? `${item.maxHeight}px` : 'auto') : "3.25rem",
        transition: "height 0.3s ease-in-out",
        overflow: "hidden"
      }}
    >
      <button
        type="button"
        className="faq w-dropdown-toggle"
        aria-controls={`${item.id}-body`}
        aria-expanded={isOpen}
        onClick={onToggle}
        style={{ width: "100%", background: "none", border: "none", cursor: "pointer" }}
      >
        <div className="accordian-icon-wrap">
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

        <div className="toggle-text">{item.question}</div>
      </button>

      {/* Answer section - now inside the same card */}
      <div
        className="faq-answer-content"
        style={{ 
          padding: isOpen ? "1rem 1rem 1.5rem 1rem" : "0 1rem",
          opacity: isOpen ? 1 : 0,
          transition: "opacity 0.2s ease-in-out, padding 0.3s ease-in-out"
        }}
      >
        <div className="faq-answer">
          {item.answer}
        </div>
        
        {item.image && isOpen && (
          <img
            width="Auto"
            height="Auto"
            alt={item.image.alt ?? ""}
            src={item.image.src}
            loading="lazy"
            srcSet={item.image.srcSet}
            sizes={item.image.sizes}
            className="faq_answer-in-img"
            style={{ marginTop: "1rem" }}
          />
        )}
      </div>
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
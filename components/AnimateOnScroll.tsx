"use client";

import React, { useRef, useEffect, useState } from "react";

const defaultStyle: React.CSSProperties = {
  opacity: 0,
  transform: "translateY(28px)",
  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
};

const inViewStyle: React.CSSProperties = {
  opacity: 1,
  transform: "translateY(0)",
};

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export default function AnimateOnScroll({ children, className = "", delay = 0, once = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              timeoutId = setTimeout(() => setInView(true), delay);
            } else {
              setInView(true);
            }
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay, once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...defaultStyle,
        ...(inView ? { ...inViewStyle, transitionDelay: delay ? `${delay}ms` : undefined } : {}),
      }}
    >
      {children}
    </div>
  );
}

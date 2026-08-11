"use client";

import { useEffect, useRef, useState } from "react";

export default function QuoteSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{
        backgroundColor: "#3E1E07",
        borderTopLeftRadius: "36px",
        borderTopRightRadius: "36px",
        marginTop: "-36px",
        zIndex: 20,
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <style>{`
        @keyframes wiggle {
          0%,100% { transform: rotate(var(--r)); }
          50%      { transform: rotate(calc(var(--r) + 4deg)); }
        }
        .badge-tl { --r: -12deg; animation: wiggle 4s ease-in-out infinite; }
        .badge-tr { --r:  10deg; animation: wiggle 5s ease-in-out infinite; }
        .badge-bl { --r:   8deg; animation: wiggle 4.5s ease-in-out infinite; }
        .badge-br { --r: -10deg; animation: wiggle 3.8s ease-in-out infinite; }
      `}</style>

      <div
        className="relative mx-auto px-6 md:px-10"
        style={{ maxWidth: "1280px" }}
      >
        {/* Heart icon */}
        <div className="mb-4 flex justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F4E7D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        {/* Quote */}
        <h2
          className="text-center font-black uppercase"
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            color: "#F4E7D4",
            letterSpacing: "0.01em",
            lineHeight: 1.3,
          }}
        >
          THERE ARE THINGS<br />
          THAT LAST FOREVER.<br />
          BUT YOUR MORNING<br />
          DOESN&apos;T HAVE TO BE ONE OF THEM.
        </h2>

        {/* Badges */}
        <div className="badge-tl absolute" style={{ top: 0, left: "24px", opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.6s" }}>
          <span className="inline-block border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest" style={{ borderColor: "#F4E7D4", color: "#F4E7D4", letterSpacing: "0.12em", borderRadius: "8px" }}>
            SIMPLE
          </span>
        </div>

        <div className="badge-tr absolute" style={{ top: 0, right: "24px", opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.7s" }}>
          <span className="inline-block border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest" style={{ borderColor: "#F4E7D4", color: "#F4E7D4", letterSpacing: "0.12em", borderRadius: "8px" }}>
            DELICIOUS
          </span>
        </div>

        <div className="badge-bl absolute" style={{ bottom: 0, left: "24px", opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.8s" }}>
          <span className="inline-block border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest" style={{ borderColor: "#F4E7D4", color: "#F4E7D4", letterSpacing: "0.12em", borderRadius: "8px" }}>
            FAST
          </span>
        </div>

        <div className="badge-br absolute" style={{ bottom: 0, right: "24px", opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.9s" }}>
          <span className="inline-block border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest" style={{ borderColor: "#F4E7D4", color: "#F4E7D4", letterSpacing: "0.12em", borderRadius: "8px" }}>
            NATURAL
          </span>
        </div>
      </div>
    </section>
  );
}
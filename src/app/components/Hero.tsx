"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="flex w-full items-center justify-center px-6 md:px-10"
      style={{
        backgroundColor: "#3E1E07",
        minHeight: "95vh",
        paddingTop: "24px",
        paddingBottom: "60px",
      }}
    >
      {/* Card */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maxWidth: "1280px",
          borderRadius: "20px",
          minHeight: "clamp(500px, 75vw, 760px)",
        }}
      >
        {/* Background image — fills card */}
        <Image
          src="/images/hero-background.png"
          alt="Specialty coffee"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Text content */}
        <div
          className="relative flex h-full flex-col justify-center px-8 py-10 md:px-12 md:py-14"
          style={{ minHeight: "clamp(500px, 75vw, 760px)" }}
        >
          <div className="max-w-[260px] md:max-w-[320px]">
            {/* Big bold headline */}
            <h1
              className="font-black uppercase text-white"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "clamp(2.6rem, 7vw, 5.2rem)",
                letterSpacing: "-0.02em",
                lineHeight: 0.92,
              }}
            >
              GREAT<br />
              MORNINGS
            </h1>

            {/* Italic script */}
            <p
              className="font-playfair italic text-white"
              style={{
                fontSize: "clamp(1rem, 2.6vw, 1.7rem)",
                opacity: 0.9,
                marginTop: "0.3em",
                marginBottom: "0.1em",
              }}
            >
              start here
            </p>

            {/* Bold bottom word */}
            <p
              className="font-black uppercase text-white"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "clamp(2.4rem, 6.5vw, 4.8rem)",
                letterSpacing: "-0.02em",
                lineHeight: 0.92,
              }}
            >
              WITH US
            </p>

            {/* CTA button */}
            <Link
              href="#shop"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "#3E1E07",
                color: "#F2E8D5",
                letterSpacing: "0.12em",
                border: "1.5px solid rgba(242,232,213,0.35)",
              }}
            >
              VIEW CATALOG
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
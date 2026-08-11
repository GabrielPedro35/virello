"use client";

import { CardCarousel } from "@/components/ui/card-carousel";

export default function FeaturedProduct() {
  const carouselImages = [
    { src: "/images/espreso.png", alt: "Espresso Blend" },
    { src: "/images/latte.png", alt: "Latte Mix" },
    { src: "/images/americano.png", alt: "Americano" },
    { src: "/images/filtred-cofffe.png", alt: "Filtered Coffee" },
  ];

  return (
    <section
      className="relative w-full"
      style={{
        backgroundColor: "#F4E7D4",
        borderTopLeftRadius: "36px",
        borderTopRightRadius: "36px",
        marginTop: "-48px",
        zIndex: 10,
        paddingTop: "56px",
        paddingBottom: "72px",
      }}
    >
      <div
        className="mx-auto px-6 md:px-10"
        style={{ maxWidth: "1280px" }}
      >
        {/* Two-column: left = product info, right = carousel */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* LEFT — product info */}
          <div className="flex flex-col justify-center gap-5">
            {/* %80 Natural badge */}
            <div className="flex items-center gap-2">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border-2"
                style={{ borderColor: "#3E1E07" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3E1E07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"/>
                  <path d="M8 12l3 3 5-5"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3E1E07", letterSpacing: "0.14em" }}>%80</p>
                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "#7A5C3A", letterSpacing: "0.1em" }}>Natural</p>
              </div>
            </div>

            {/* Headline */}
            <h2
              className="font-black uppercase leading-tight"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                color: "#3E1E07",
                letterSpacing: "-0.01em",
                lineHeight: 1.05,
              }}
            >
              ORGANIC<br />
              COFFEE<br />
              FLAVOR TABLETS
            </h2>

            {/* Description */}
            <p className="text-sm leading-relaxed" style={{ color: "#5A3E28", maxWidth: "320px" }}>
              The perfect balance for rich, smooth specialty coffee. No artificial additives, only carefully sourced natural ingredients.
            </p>
          </div>

          {/* RIGHT — carousel */}
          <div>
            <CardCarousel
              images={carouselImages}
              autoplayDelay={2000}
              showPagination={true}
              showNavigation={true}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
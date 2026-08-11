import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#3E1E07",
        borderTopLeftRadius: "36px",
        borderTopRightRadius: "36px",
        marginTop: "-36px",
        zIndex: 40,
        paddingTop: "64px",
        paddingBottom: "48px",
      }}
    >
      <div
        className="relative mx-auto px-6 md:px-10"
        style={{ maxWidth: "1280px", zIndex: 1 }}
      >
        {/* Top row — logo + account + nav */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Logo */}
          <div className="shrink-0">
            <p
              className="font-black uppercase text-white"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
              }}
            >
              VIRELLO
            </p>
          </div>

          
          {/* Nav columns */}
          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A96E", letterSpacing: "0.14em" }}>Shop</p>
              {["Espresso", "Latte", "Filtered", "Americano"].map((item) => (
                <Link key={item} href="#" className="text-sm transition-opacity hover:opacity-60" style={{ color: "#F4E7D4" }}>{item}</Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A96E", letterSpacing: "0.14em" }}>Company</p>
              {["About", "Delivery", "Contact", "Recipes"].map((item) => (
                <Link key={item} href="#" className="text-sm transition-opacity hover:opacity-60" style={{ color: "#F4E7D4" }}>{item}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full" style={{ backgroundColor: "rgba(244,231,212,0.12)" }} />

        {/* Bottom row */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs" style={{ color: "rgba(244,231,212,0.4)" }}>
            © 2026 Virello. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(244,231,212,0.4)" }}>
            Specialty coffee, crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
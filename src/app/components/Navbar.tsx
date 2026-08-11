"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "SHOP", href: "#shop" },
  { label: "ABOUT", href: "#about" },
  { label: "DELIVERY", href: "#delivery" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [cartCount] = useState(2);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "#3E1E07" }}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center px-6 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 font-black uppercase leading-none tracking-tight text-white"
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
            lineHeight: 1.05,
          }}
          aria-label="Virello — go to homepage"
        >
          <span className="flex items-center gap-2">
            <Image
              src="/images/no backgroun cat 3.png"
              alt="Virello cat logo"
              width={36}
              height={36}
              className="object-contain"
              style={{ filter: "brightness(0) invert(1) sepia(1) saturate(0.3) brightness(1.1)" }}
            />
            VIRELLO
          </span>
        </Link>

        {/* Desktop nav links — centered in navbar */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-semibold tracking-widest transition-opacity hover:opacity-70"
                style={{ color: "#F2E8D5", letterSpacing: "0.12em" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart icon */}
        <div className="ml-auto flex items-center gap-4">
          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-opacity hover:opacity-70"
            style={{ borderColor: "#F2E8D5" }}
            aria-label={`Cart — ${cartCount} items`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F2E8D5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>

            {cartCount > 0 && (
              <span
                className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold"
                style={{ backgroundColor: "#C9A96E", color: "#3E1E07" }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className="block h-0.5 w-6 transition-all"
              style={{
                backgroundColor: "#F2E8D5",
                transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              className="block h-0.5 w-6 transition-all"
              style={{
                backgroundColor: "#F2E8D5",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 w-6 transition-all"
              style={{
                backgroundColor: "#F2E8D5",
                transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="border-t md:hidden"
          style={{ backgroundColor: "#2B1205", borderColor: "#5a2e10" }}
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-8 py-4 text-sm font-semibold tracking-widest transition-colors hover:opacity-70"
                  style={{ color: "#F2E8D5", letterSpacing: "0.12em" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Espresso Blend",
    subtitle: "Dark Roast · Single Origin",
    price: "₺989",
    image: "/images/espreso.png",
  },
  {
    id: 2,
    name: "Latte Mix",
    subtitle: "Medium Roast · Smooth",
    price: "₺879",
    image: "/images/latte.png",
  },
  {
    id: 3,
    name: "Filtered Coffee",
    subtitle: "Light Roast · Fruity",
    price: "₺850",
    image: "/images/filtred-cofffe.png",
  },
  {
    id: 4,
    name: "Americano",
    subtitle: "Bold Roast · Classic",
    price: "₺920",
    image: "/images/americano.png",
  },
];

function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-2xl"
      style={{ backgroundColor: "#3E1E07" }}
    >
      {/* Heart button */}
      <button
        onClick={() => setLiked((l) => !l)}
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full transition-opacity hover:opacity-80"
        style={{ backgroundColor: "rgba(244,231,212,0.15)" }}
        aria-label={liked ? "Remove from favourites" : "Add to favourites"}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={liked ? "#F4E7D4" : "none"}
          stroke="#F4E7D4"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

      {/* Product image */}
      <div className="relative w-full" style={{ height: "220px" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3
            className="font-black uppercase leading-tight"
            style={{
              color: "#F4E7D4",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            {product.name}
          </h3>
          <p
            className="mt-0.5 text-xs"
            style={{ color: "#C9A96E", letterSpacing: "0.04em" }}
          >
            {product.subtitle}
          </p>
        </div>

        {/* Price + cart */}
        <div className="mt-auto flex items-center justify-between">
          <span
            className="text-lg font-black"
            style={{ color: "#C9A96E" }}
          >
            {product.price}
          </span>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#F4E7D4" }}
            aria-label={`Add ${product.name} to cart`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3E1E07"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundColor: "#F4E7D4",
        borderTopLeftRadius: "36px",
        borderTopRightRadius: "36px",
        marginTop: "-36px",
        zIndex: 30,
        paddingTop: "56px",
        paddingBottom: "72px",
      }}
    >
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: "1280px" }}>
        {/* Header row */}
        <div className="mb-8 flex items-end justify-between">
          <h2
            className="font-black uppercase leading-tight"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              color: "#3E1E07",
              letterSpacing: "-0.02em",
              lineHeight: 1.0,
            }}
          >
            OUR<br />PRODUCTS
          </h2>

          <Link
            href="#shop"
            className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-60"
            style={{ color: "#3E1E07", letterSpacing: "0.1em" }}
          >
            All products
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
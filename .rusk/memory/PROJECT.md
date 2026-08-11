---
name: project
description: Virelloialty coffee single-page Next.js sitesi genel bilgisi
metadata:
  type: project
---

# Virelloialty Coffee Site

## Stack
- Next.js 15.4.4 (App Router)
- React 19
- Tailwind CSS v4 (config dosyası yok — `globals.css` içinde `@import "tailwindcss"` + `@theme` bloğu)
- TypeScript
- `next/font/google` ile Geist (mevcut) + Playfair Display (eklenecek)

## Görseller
Tümü `public/images/` altında: logo.png, latte.png, filtred-cofffe.png, espreso.png, americano.png

## Renk Tokenları (Tailwind v4 @theme)
- brand-bg: #0F0C09
- brand-card: #1A1410
- brand-dark: #2B1F14
- brand-gold: #C9A96E
- brand-cream: #F2E8D5
- brand-muted: #7A6A5A
- brand-footer: #0A0806

## Bileşenler
src/components/: Nav, Hero, About, Menu, ProductCard, QuoteBand, Gallery, Contact, Footer
src/lib/products.ts: 4 ürün verisi
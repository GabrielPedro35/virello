---
name: decisions
description: Kilitli teknik kararlar
metadata:
  type: project
---

# Kilitli Kararlar

## Tailwind v4
Config dosyası yok. Tüm token'lar `globals.css` içinde `@theme {}` bloğuyla tanımlanır.
Sınıf adları: `--color-brand-gold` → `bg-brand-gold` şeklinde çalışır.

## Font
Playfair Display: `next/font/google` ile, CSS variable `--font-playfair` olarak layout.tsx'e eklenir.
Body'ye `font-[family-name:var(--font-geist-sans)]` gibi inline style yerine Tailwind utility class tercih edildi.

## Görsel Yolları
`/images/logo.png` (public/ prefix yok — Next.js convention)
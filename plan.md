# Virello — Landing Page Plan

**Stack:** Next.js 15 (App Router) · Tailwind CSS v4 · Framer Motion · TypeScript  
**Font:** Inter (Google Fonts / next/font)  
**Palette:** `#3e1e07` (dark espresso) · `#f4e7d4` (cream) · `#ffffff` (white)  
**Theme:** Light  
**Language:** English  
**Scope:** Single landing page only

---

## 1. Tasarım Sistemi (Referans Görselden Birebir)

### Renk Kullanımı
- **Cream (`#f4e7d4`)** — sayfa ana arka planı, light section bg'leri
- **Espresso (`#3e1e07`)** — koyu section bg'leri, başlıklar, butonlar, badge'ler
- **White (`#ffffff`)** — kart yüzeyleri, input alanları

### Section Ayırma Stili — KRİTİK
Her section birbirinden şu özel yöntemle ayrılır:
- Koyu (`#3e1e07`) ve krem (`#f4e7d4`) sectionlar **dönüşümlü** sıralanır
- Bir sonraki section'ın üst köşeleri büyük **border-radius (32–40px)** ile
  önceki section'ın üzerine "biner" — **card stack / layered sections** efekti
- Teknik: `border-radius: 36px` üst köşelerde + `margin-top: -36px` + `relative z-index` artışı
- Bu efekt sayfaya **derinlik, hareket ve premium his** verir
- Tüm section geçişleri bu kuralla işler — tek düze değil, organik bir akış

### Tipografi (Inter)
- Hero başlık: **Inter Black (900)**, çok büyük, bazıları **italic**
- Section başlıkları: **Inter ExtraBold (800)**
- Body metin: **Inter Regular (400) / Medium (500)**
- Badge / tag: **Inter SemiBold (600)**, küçük uppercase veya mixed case
- Hiçbir şey keskin siyah değil — her şey espresso (`#3e1e07`) tonunda

### Border Radius & Kart Stili
- Büyük kartlar: `rounded-[32px]` veya `rounded-[40px]`
- Butonlar: `rounded-full` (pill shape)
- Badge/chip: `rounded-full`, espresso bg + cream text veya tersi
- Görseller kartın dışına taşabilir (overflow visible, positioned absolute)

### Genel Hissiyat
- Premium, organik, sıcak — soğuk değil
- Bolca white space
- Fotoğraflar büyük ve dominant
- Metin minimal ama etkili

---

## 2. Proje Dosya Yapısı

```
virello/
├── public/
│   ├── logo.png
│   ├── latte.png
│   ├── filtred-cofffe.png
│   ├── americano.png
│   ├── espreso.png
│   └── reference-website.png
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── globals.css
│       └── components/
│           ├── Navbar.tsx
│           ├── Hero.tsx
│           ├── ProductCard.tsx
│           ├── QuoteBanner.tsx
│           ├── HowItWorks.tsx
│           ├── WhyVirello.tsx
│           ├── GlobalReach.tsx
│           ├── Testimonials.tsx
│           ├── CTASection.tsx
│           └── Footer.tsx
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. Section-by-Section Plan

### 3.1 Navbar
- **Sticky** — scroll'da cream bg + blur backdrop
- Logo sol (`logo.png`), nav linkleri orta/sağ: About · Products · How It Works · Contact
- "Buy Now" pill butonu — espresso bg, cream text
- Scroll progress bar: navbar altında ince espresso çizgi
- Animasyon: scroll'da smooth background transition

---

### 3.2 Hero Section — Espresso bg (`#3e1e07`)
- **Tam ekran (100vh)**, koyu kahve arka plan
- Sol: büyük italic başlık cream renkte
  > *"Coffee, Reimagined."*
  > *"One tablet. Hot water. That's it."*
- Sağ: ürün görseli (`latte.png` veya `espreso.png`) — büyük, hafif döndürülmüş, floating bob animasyonu
- Alt sol: kısa tagline + "Explore" pill CTA butonu (cream bg, espresso text)
- **Alt köşe:** Sonraki section (cream) üste `border-radius: 36px` ile biner — layered efekti başlar
- Animasyonlar:
  - Hero text: word-by-word fade + slide up (Framer Motion, stagger)
  - Ürün görseli: floating bob (sonsuz, gentle)
  - Scroll indicator: bounce animasyonu

---

### 3.3 Product Card Section — Cream bg (`#f4e7d4`)
- Referanstaki gibi büyük **kart yapısı** (white bg, `rounded-[40px]`)
- Kart içinde sol: badge ("%80 Organic" chip) + yıldız rating + ürün adı + açıklama + fiyat + "Add to Cart" butonu
- Kart dışına taşan (overflow) ürün görseli — sağ tarafa positioned, büyük
- Ürün adı: "Virello Original" / fiyat: "$24.99"
- Circular badge: espresso bg, cream icon/text — ürünün üzerine konumlandırılmış
- **Alt köşe:** Sonraki section (espresso) üste `border-radius: 36px` ile biner
- Animasyonlar:
  - Kart scroll-triggered slide-up + fade
  - Ürün görseli parallax (hafif)
  - Buton hover: scale + shadow

---

### 3.4 Quote Banner — Espresso bg (`#3e1e07`)
- Tam genişlik, büyük centered quote, cream text, italic
  > *"There are things that stay forever — but breakfast shouldn't be one of them to sacrifice."*
- Virgül/tırnak dekoratif büyük tipografik element
- Minimal — sadece metin ve bg
- **Alt köşe:** Sonraki section (cream) üste biner
- Animasyon: text fade-in + slight scale on scroll

---

### 3.5 How It Works — Cream bg (`#f4e7d4`)
- Başlık: "Easy to Make" — büyük, espresso
- Alt başlık küçük badge: "Just follow these steps"
- **4 adım**, numbered grid (01 02 03 04):
  1. **Add Water** — Sıcak su hazırla
  2. **Drop the Tablet** — Virello tabletini bırak
  3. **Wait 30 Seconds** — Aromasını çıkarsın
  4. **Enjoy** — Taze demlenmiş kahvenin tadını çıkar
- Her adımda küçük ürün/sahne fotoğrafı (mevcut png'ler rotate edilir)
- Numara: büyük espresso renk, semitransparent
- **Alt köşe:** Sonraki section üste biner
- Animasyonlar:
  - Adımlar stagger slide-up (soldan sağa, 0.15s arayla)
  - Fotoğraflar hafif rotate + scale on hover

---

### 3.6 Why Virello — Espresso bg (`#3e1e07`)
- Başlık cream: "Why Virello?"
- 6 feature — 2×3 grid, her biri beyaz/cream kart (`rounded-[24px]`):
  - ✓ %80 Organic Ingredients
  - ✓ Zero Additives & Sweeteners
  - ✓ Fully Recyclable Packaging
  - ✓ Ready in Under a Minute
  - ✓ Same Aroma & Foam as a 10-Min Brew
  - ✓ Sold in 90+ Countries
- Kart: küçük icon + başlık + kısa açıklama
- **Alt köşe:** Sonraki section (cream) üste biner
- Animasyonlar: kartlar scale(0.85)→scale(1) + fade, stagger

---

### 3.7 Global Reach — Cream bg (`#f4e7d4`)
- **"Loved in 90+ Countries"** — büyük bold başlık
- Count-up animasyonu: 0 → 90 (scroll trigger)
- Dünya haritası SVG veya büyük tipografik "90+" dominant element
- Kısa açıklama metni
- **Alt köşe:** Sonraki section üste biner
- Animasyon: counter count-up (easeOut)

---

### 3.8 Testimonials — Espresso bg (`#3e1e07`)
- 3 müşteri yorumu kartı (cream/white bg, `rounded-[32px]`)
- Her kart: yıldız rating (5/5) + yorum + isim + şehir/ülke
- Yatay grid (desktop) / tek kolon (mobile)
- **Alt köşe:** Sonraki section (cream) üste biner
- Animasyonlar: kartlar sırayla slide-in

---

### 3.9 CTA Section — Cream bg (`#f4e7d4`)
- Büyük centered başlık: "Ready to change the way you drink coffee?"
- Espresso pill butonu: "Order Now →"
- Email signup input (opsiyonel, cream bg input + espresso border)
- Minimal, temiz
- Animasyon: fade-in + scale buton pulse on hover

---

### 3.10 Footer — Espresso bg (`#3e1e07`)
- Logo (`logo.png`) + kısa tagline cream renkte
- Nav linkleri yatay (cream renk)
- Sosyal medya ikonları (Instagram, Twitter/X, LinkedIn)
- "© 2026 Virello. All rights reserved."
- Minimal, koyu, net

---

## 4. Section Sırası & Renk Ritmi

```
Navbar          — cream (sticky)
Hero            — ESPRESSO  ──┐
Product Card    — CREAM    ←─┘ (border-radius overlap)
Quote Banner    — ESPRESSO  ──┐
How It Works    — CREAM    ←─┘
Why Virello     — ESPRESSO  ──┐
Global Reach    — CREAM    ←─┘
Testimonials    — ESPRESSO  ──┐
CTA             — CREAM    ←─┘
Footer          — ESPRESSO
```

Her geçişte bir sonraki section `border-top-left-radius: 36px; border-top-right-radius: 36px; margin-top: -36px` ile üsttekinin içine girer.

---

## 5. Animasyon Stratejisi

| Teknik | Kullanım Yeri |
|---|---|
| Framer Motion `useInView` | Her section entrance |
| Stagger children | Feature grid, How It Works, Testimonials |
| Parallax (`useScroll` + `useTransform`) | Hero görsel, Product Card görseli |
| Floating loop (`animate` repeat Infinity) | Hero ürün görseli |
| Count-up (custom hook) | Global Reach sayacı |
| Text reveal (word split) | Hero başlığı |
| Scroll progress bar | Navbar altı |
| Scale + fade | Feature kartlar |
| `prefers-reduced-motion` | Tüm animasyonlar için güvenli çıkış |

---

## 6. Teknik Detaylar

### Tailwind Custom Colors (`globals.css` / `tailwind.config.ts`)
```ts
colors: {
  espresso: '#3e1e07',
  cream:    '#f4e7d4',
}
```

### Bağımlılıklar
```
next@15
react@19
framer-motion@latest
tailwindcss@4
typescript
```

### SEO & Performans
- `next/font/google` ile Inter (weight: 400, 500, 600, 800, 900)
- `next/image` ile tüm görseller (lazy, WebP)
- OpenGraph meta (layout.tsx)
- Semantic HTML (nav, main, section, article, footer)

---

## 7. Uygulama Sırası

| Adım | İş |
|------|----|
| 1 | `npx create-next-app@latest` + bağımlılıklar |
| 2 | `tailwind.config.ts` + `globals.css` setup |
| 3 | `layout.tsx` — Inter font, meta, base styles |
| 4 | Navbar |
| 5 | Hero + animasyonlar |
| 6 | Product Card (layered section efekti ilk burada test edilir) |
| 7 | Quote Banner |
| 8 | How It Works |
| 9 | Why Virello |
| 10 | Global Reach |
| 11 | Testimonials |
| 12 | CTA + Footer |
| 13 | Responsive polish + animasyon fine-tune |
| 14 | Section overlap (border-radius) tüm geçişlerde test |

---

## 8. Kurulum Komutu

```bash
cd C:\Users\User\Documents\github\virello
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*" --no-turbopack
npm install framer-motion
```

> **"başla" dediğinde implementasyona geçilir.**

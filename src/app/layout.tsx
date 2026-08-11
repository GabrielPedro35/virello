import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/images/favicon.png",
  },
  title: "Virello · Specialty Coffee",
  description:
    "Virelloialty Coffee — Her yudumda bir hikâye. Özenle seçilmiş tek köken kahveler ve el yapımı blendler.",
  openGraph: {
    title: "Virello · Specialty Coffee",
    description: "Her yudumda bir hikâye. Specialty coffee, el yapımı.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-cream">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
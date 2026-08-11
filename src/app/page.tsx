import Hero from "./components/Hero";
import FeaturedProduct from "./components/FeaturedProduct";
import QuoteSection from "./components/QuoteSection";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <FeaturedProduct />
        <QuoteSection />
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}
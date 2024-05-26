import { Header } from "../components/header/Header";
import { Hero } from "../components/hero/Hero";
import { FeaturedProducts } from "../components/featuredProducts/FeaturedProducts";
import { Footer } from "../components/footer/Footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

import React, { useEffect } from "react";
import { Header } from "../components/header/Header";
import { Hero } from "../components/hero/Hero";
import { Footer } from "../components/footer/Footer";
import { ProductWidget } from "../components/products/productsWidget/ProductWidget";
import { CategoryWidget } from "../components/categories/categoryWidget/CategoryWidget";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CategoryWidget />
      <ProductWidget />
      <Footer />
    </div>
  );
};

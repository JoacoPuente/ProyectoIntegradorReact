import React from "react";
import { Header } from "../components/header/Header";
import { Hero } from "../components/hero/Hero";
import { Footer } from "../components/footer/Footer";
import { ProductWidget } from "../components/products/productsWidget/ProductWidget";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProductWidget />
      <Footer />
    </div>
  );
};

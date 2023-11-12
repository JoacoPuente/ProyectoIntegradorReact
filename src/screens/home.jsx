import React from "react";
import { Header } from "../layout/home/header";
import { Hero } from "../layout/home/hero";
import { Products } from "../layout/home/products";
import { Footer } from "../layout/home/footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

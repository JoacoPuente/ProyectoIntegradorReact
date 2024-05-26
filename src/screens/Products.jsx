import React from "react";
import { CategoryWidget } from "../components/categories/categoryWidget/CategoryWidget";
import { ProductWidget } from "../components/products/productsWidget/ProductWidget";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const Products = () => {
  return (
    <div>
      <Header />
      <CategoryWidget />
      <ProductWidget />
      <Footer />
    </div>
  );
};

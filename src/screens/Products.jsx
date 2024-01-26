import React from "react";
import { CategoryWidget } from "../components/categories/categoryWidget/CategoryWidget";
import { ProductWidget } from "../components/products/productsWidget/ProductWidget";

export const Products = () => {
  return (
    <div>
      <CategoryWidget />
      <ProductWidget />
    </div>
  );
};

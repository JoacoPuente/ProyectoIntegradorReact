import React from "react";
import { CategoryWidgetComponent } from "../components/categories/categoryWidget/CategoryWidgetComponent";
import { ProductWidgetComponent } from "../components/products/productsWidget/ProductWidgetComponent";

export const Products = () => {
  return (
    <div>
      <CategoryWidgetComponent />
      <ProductWidgetComponent />
    </div>
  );
};

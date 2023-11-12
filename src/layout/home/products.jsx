import React from "react";
import { TitleWithImageComponent } from "../../components/titleWithImage/TitleWithImageComponent";
import { CategoryWidgetComponent } from "../../components/categories/categoryWidget/CategoryWidgetComponent";
import { ProductWidgetComponent } from "../../components/products/productsWidget/ProductWidgetComponent";

export const Products = () => {
  return (
    <div>
      <TitleWithImageComponent />
      <CategoryWidgetComponent />
      <ProductWidgetComponent />
    </div>
  );
};

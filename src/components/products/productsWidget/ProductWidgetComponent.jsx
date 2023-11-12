import React from "react";
import { products } from "../../../data/products";
import { ProductCardComponent } from "../productsCard/ProductCardComponent";

export const ProductWidgetComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#EDF2FB]">
      <div className=" w-1/2 h-1 bg-[#ABC4FF] rounded-lg"></div>
      <div className="max-w-screen-xl px-8 ">
        <div className="flex flex-wrap justify-center my-16 gap-14">
          {products.map((item) => (
            <ProductCardComponent key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

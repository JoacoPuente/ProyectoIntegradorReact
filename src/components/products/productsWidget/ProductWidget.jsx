import React from "react";
import { Products, products } from "../../../data/products";
import { ProductCard } from "../productsCard/ProductCard";

export const ProductWidget = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-waikawa-gray-100">
      <div className="w-1/2 h-1 rounded-lg bg-waikawa-gray-500"></div>
      <div className="max-w-screen-xl px-8 ">
        <div className="flex flex-wrap justify-center gap-16 my-16">
          {Object.entries(Products).map(([, icecream]) =>
            icecream.map((icecream) => (
              <ProductCard key={icecream.id} {...icecream} />
            ))
          )}
          {/* {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

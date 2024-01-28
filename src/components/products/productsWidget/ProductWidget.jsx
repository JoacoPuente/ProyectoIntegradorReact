import React from "react";
// import { Products } from "../../../data/products";
import { ProductCard } from "../productsCard/ProductCard";
import { useSelector } from "react-redux";

export const ProductWidget = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="flex flex-col items-center justify-center bg-waikawa-gray-100">
      <div className="w-1/2 h-1 rounded-lg bg-waikawa-gray-500"></div>
      <div className="max-w-screen-xl px-8 ">
        <div className="flex flex-wrap justify-center gap-16 my-16">
          {Object.entries(products).map(([, icecream]) =>
            icecream.map((icecream) => (
              <ProductCard key={icecream.id} {...icecream} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

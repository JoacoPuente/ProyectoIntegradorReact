import React from "react";
// import { categories } from "../../../data/categories";
import { CategoryCard } from "../categoryCard/CategoryCard";
import { useSelector } from "react-redux";

export const CategoryWidget = () => {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <div className="flex flex-col items-center justify-center bg-waikawa-gray-100 ">
      <div className="w-1/2 h-1 rounded-lg bg-waikawa-gray-500"></div>
      <div className="max-w-screen-xl px-8 my-16">
        <h3 className="text-xl font-bold text-center sm:text-3xl text-waikawa-gray-500">
          Sabores
        </h3>
        <div className="flex flex-wrap justify-center mt-16">
          {categories.map((item) => (
            <CategoryCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

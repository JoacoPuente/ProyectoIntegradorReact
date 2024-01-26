import React from "react";
import { categories } from "../../../data/categories";
import { CategoryCard } from "../categoryCard/CategoryCard";

export const CategoryWidgetC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#EDF2FB] ">
      <div className=" w-1/2 h-1 bg-[#ABC4FF] rounded-lg"></div>
      <div className="max-w-screen-xl px-8 my-16">
        <h3 className="text-xl sm:text-3xl text-[#ABC4FF] font-bold text-center">
          Sabores
        </h3>
        <div className="flex flex-wrap justify-center mt-16 gap-14">
          {categories.map((item) => (
            <CategoryCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

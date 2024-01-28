import React from "react";

export const CategoryCard = ({ img, title, category }) => {
  return (
    <button className="relative w-48 h-48 overflow-hidden border-2 rounded-full shadow-xl border-waikawa-gray-400">
      <img
        src={img}
        alt={category}
        className="absolute inset-0 object-cover w-full h-full rounded-full"
      />
      <p className="absolute bottom-0 left-0 right-0 p-3 font-medium text-center rounded-full text-waikawa-gray-500 bg-waikawa-gray-50">
        {title}
      </p>
    </button>
  );
};

import React from "react";

export const CategoryCardComponent = ({ img, title, category }) => {
  return (
    <div className="relative overflow-hidden rounded-full w-48 h-48 border-[#CCDBFD] border-2 shadow-xl">
      <img
        src={img}
        alt={category}
        className="absolute inset-0 object-cover w-full h-full rounded-full"
      />
      <p className="absolute bottom-0 left-0 right-0 p-3 text-center rounded-full text-[#ABC4FF] bg-[#EDF2FB] font-medium ">
        {title}
      </p>
    </div>
  );
};

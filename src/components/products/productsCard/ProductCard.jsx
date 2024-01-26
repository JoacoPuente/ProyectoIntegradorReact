import React from "react";
3;

export const ProductCard = ({ img, title, desc, price }) => {
  return (
    <div className="overflow-hidden rounded-md shadow-md sm:max-w-md lg:max-w-xl xl:max-w-2xl bg-[#EDF2FB] border-[#CCDBFD] border-2 w-64">
      <img src={img} className="object-cover w-64 h-64 " alt={title} />
      <div className="flex flex-col p-4 text-[#ABC4FF] ">
        <h4 className="mb-3 text-xl font-bold h-14">{title}</h4>
        <p className="h-20">{desc}</p>
        <span className="text-lg">${price}</span>
        <a
          href="#"
          className="inline-block px-4 py-2 mt-2 text-center text-[#EDF2FB] bg-[#ABC4FF] rounded-md hover:bg-[#5C6B94]"
        >
          Sumar al carrito
        </a>
      </div>
    </div>
  );
};

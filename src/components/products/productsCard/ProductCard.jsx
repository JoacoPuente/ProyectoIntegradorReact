import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";

export const ProductCard = ({ img, title, desc, price, id }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ img, title, desc, price, id }));
  };

  return (
    <div className="w-64 overflow-hidden border-2 rounded-md shadow-md sm:max-w-md lg:max-w-xl xl:max-w-2xl bg-waikawa-gray-50 border-waikawa-gray-500">
      <img src={img} className="object-cover w-64 h-64" alt={title} />
      <div className="flex flex-col p-4 text-waikawa-gray-800">
        <h4 className="mb-3 text-xl font-bold h-14">{title}</h4>
        <p className="h-20">{desc}</p>
        <span className="text-lg">${price}</span>
        <button
          onClick={handleAddToCart}
          className="inline-block px-4 py-2 mt-2 text-center rounded-md text-waikawa-gray-50 bg-waikawa-gray-500 hover:bg-waikawa-gray-800"
        >
          Sumar al carrito
        </button>
      </div>
    </div>
  );
};

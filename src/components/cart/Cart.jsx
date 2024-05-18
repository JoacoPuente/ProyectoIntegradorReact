import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Cart = () => {
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <div>
      <button
        onClick={handleOpenCart}
        className="text-xl duration-300 text-waikawa-gray-500 hover:text-waikawa-gray-800 transition-color"
      >
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
      <div
        className={`flex flex-col fixed top-16 right-0 sm:w-1/2 h-screen bg-waikawa-gray-800 lg:w-1/3 w-screen px-4 pt-3 pb-24 sm:px-6 lg:px-8
        ${openCart ? "block" : "hidden"}`}
      >
        <div className="">
          <button
            onClick={handleOpenCart}
            className={` text-waikawa-gray-50 text-3xl  ${
              openCart ? "block" : "hidden"
            }`}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="mt-12">
          <h2 className="flex text-3xl font-extrabold text-waikawa-gray-50 md:text-4xl">
            Tu Carrito
          </h2>
          <div className="py-5 bg-red-500 sm:py-10 border-y border-waikawa-gray-50">
            <div>
              <img
                className="w-32"
                src="https://th.bing.com/th/id/OIG.H.5hkeMbUcuRvP4JEIyt"
                alt=""
              />
            </div>
            <div>
              <p>Bosque Colorido</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

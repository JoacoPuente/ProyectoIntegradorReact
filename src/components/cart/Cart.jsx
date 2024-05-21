import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, clearCart } from "../../redux/cart/cartSlice";

export const Cart = () => {
  const [openCart, setOpenCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  const handleIncrementQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
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
        className={`fixed top-16 right-0 h-screen w-screen sm:w-1/2 lg:w-1/3 bg-waikawa-gray-800 px-4 pt-3 pb-24 sm:px-6 lg:px-8 transition-transform duration-300 ${
          openCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-start">
          <button
            onClick={handleOpenCart}
            className="text-3xl text-waikawa-gray-50"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-extrabold text-center text-waikawa-gray-50 md:text-4xl">
            Tu Carrito
          </h2>

          <div className="mt-4 overflow-y-auto max-h-[70vh] ">
            {cartItems.length ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex py-3 border-y border-waikawa-gray-50"
                >
                  <img
                    className="w-20 rounded md:w-26"
                    src={item.img}
                    alt={item.title}
                  />
                  <div className="ml-4 font-bold ">
                    <p className=" text-waikawa-gray-50">{item.title}</p>
                    <div className="flex gap-3 mt-2 text-waikawa-gray-50">
                      <button className="px-2 text-xl rounded-md bg-waikawa-gray-500">
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => handleIncrementQuantity(item)}
                        className="px-2 text-xl rounded-md bg-waikawa-gray-500"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex justify-between mt-2 text-waikawa-gray-50">
                      <p>${item.price}</p>
                      <button>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="mt-1 text-xl hover:text-red-700"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white">Tu carrito está vacío</p>
            )}
          </div>
          <button onClick={handleClearCart}>VACIAR CARRITO</button>
        </div>
      </div>
    </div>
  );
};

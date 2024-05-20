import React from "react";
import Logo from "../../../src/assets/imgs/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { MenuButton } from "../menuButton/MenuButton";
import { Navbar } from "../navbar/Navbar";
import { Cart } from "../cart/Cart";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex justify-center w-full h-16 bg-waikawa-gray-100 drop-shadow-xl">
      <div className="container flex items-center justify-between max-w-screen-xl px-8 py-4 lg:justify-between">
        <MenuButton />
        <div className="inline-block mx-auto lg:mx-0">
          <img src={Logo} alt="Logo" className="w-12 rounded-lg" />
        </div>
        <Navbar />
        <div className="flex gap-5 ">
          <button className="text-xl duration-300 text-waikawa-gray-500 hover:text-waikawa-gray-800 transition-color">
            <FontAwesomeIcon icon={faUser} />
          </button>
          <Cart />
        </div>
      </div>
    </header>
  );
};

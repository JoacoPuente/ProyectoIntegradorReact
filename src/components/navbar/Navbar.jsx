import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../context/MenuContext";

export const Navbar = () => {
  const ctx = useContext(MenuContext);

  return (
    <nav
      className={`flex items-center justify-center fixed top-16 left-0 w-4/6 h-screen bg-waikawa-gray-800 lg:block lg:static lg:top-0 lg:w-auto lg:h-auto lg:bg-waikawa-gray-100
    ${ctx.isMenuOpen ? "block" : "hidden"} `}
    >
      <ul className="flex flex-col items-center m-4 text-2xl font-semibold gap-7 text-waikawa-gray-50 sm:text-3xl lg:flex-row lg:gap-6 lg:text-xl lg:text-waikawa-gray-500">
        <li>
          <Link
            to="/"
            className="relative lg:hover:text-waikawa-gray-800 group"
          >
            Inicio
            <span className="absolute w-full h-0.5 bg-[#5C6B94] bottom-0 left-1/2 transform -translate-x-1/2 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="relative lg:hover:text-waikawa-gray-800 group"
          >
            Nosotros
            <span className="absolute w-full h-0.5 bg-[#5C6B94] bottom-0 left-1/2 transform -translate-x-1/2 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="relative lg:hover:text-waikawa-gray-800 group"
          >
            Productos
            <span className="absolute w-full h-0.5 bg-[#5C6B94] bottom-0 left-1/2 transform -translate-x-1/2 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="relative lg:hover:text-waikawa-gray-800 group"
          >
            Contacto
            <span className="absolute w-full h-0.5 bg-[#5C6B94] bottom-0 left-1/2 transform -translate-x-1/2 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

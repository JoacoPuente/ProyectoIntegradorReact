import React from "react";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

export const Navbar = () => {
  const ctx = useContext(MenuContext);

  return (
    <nav
      className={`flex items-center justify-center ${
        ctx.isMenuOpen ? "translate-x-0" : "translate-x-full"
      } md:transform-none fixed top-20 right-0 bg-black w-1/2 p-12 transition-all duration-500 md:static md:w-auto md:p-0 ${
        ctx.isMenuOpen ? "block" : "hidden"
      } md:block`}
    >
      <ul className="flex flex-col items-center justify-center gap-12 md:flex-row">
        <li className="text-2xl text-white cursor-pointer hover:text-orange-600">
          Home
        </li>
        <li className="text-2xl text-white cursor-pointer hover:text-orange-600">
          About
        </li>
        <li className="text-2xl text-white cursor-pointer hover:text-orange-600">
          Services
        </li>
      </ul>
    </nav>
  );
};

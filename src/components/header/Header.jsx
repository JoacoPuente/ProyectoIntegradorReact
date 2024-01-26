import React from "react";
import Logo from "../../../src/assets/imgs/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faBars,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";
import { MenuButton } from "../menuButton/MenuButton";
import { Navbar } from "../navbar/Navbar";

export const Header = () => {
  return (
    <header className="fixed flex justify-center w-full h-16 bg-[#EDF2FB] z-50 top-0 drop-shadow-xl">
      <div className="container flex items-center justify-between max-w-screen-xl px-8 py-4 lg:justify-between">
        <MenuButton />
        <div className="inline-block mx-auto lg:mx-0">
          <img src={Logo} alt="Logo" className="w-12 rounded-lg" />
        </div>
        <Navbar />
        {/* <nav>
          <ul className="lg:flex gap-6 text-[#ABC4FF] font-semibold text-lg hidden">
            <li>
              <a
                href="#"
                className="relative hover:text-[#5C6B94] transition-color duration-300 group"
              >
                Inicio
                <span className="absolute w-full h-0.5 bg-[#5C6B94] bottom-0 left-0 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative hover:text-[#5C6B94] transition-color duration-300 group"
              >
                Nosotros
                <span className="absolute w-full h-0.5 bg-[#5C6B94] bottom-0 left-0 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative hover:text-[#5C6B94] transition-color duration-300 group"
              >
                Productos
                <span className="absolute w-full h-0.5 bg-[#5C6B94] bottom-0 left-0 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative hover:text-[#5C6B94] transition-color duration-300 group"
              >
                Contacto
                <span className="absolute w-full h-0.5 bg-[#5C6B94] bottom-0 left-0 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </li>
          </ul>
        </nav> */}
        <div className="flex gap-5 text-xl text-[#ABC4FF]">
          <a
            href="#"
            className="text-[#ABC4FF] hover:text-[#5C6B94] transition-color duration-300"
          >
            <FontAwesomeIcon icon={faUser} />
          </a>
          <a
            href="#"
            className="text-[#ABC4FF] hover:text-[#5C6B94] transition-color duration-300"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
        </div>
      </div>
    </header>
  );
};

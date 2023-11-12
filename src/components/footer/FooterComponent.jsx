import React from "react";
import Logo from "../../../src/assets/imgs/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const FooterComponent = () => {
  return (
    <div className="bg-[#ABC4FF] text-[#EDF2FB] w-full px-8 pb-8 pt-32">
      <div className="flex flex-col xl:justify-between xl:flex-row">
        <div>
          <img src={Logo} alt="Logo" className="w-12 rounded-md" />
          <p className="mt-8">Las mejores paletas de helado</p>
          <div className="flex text-[#EDF2FB] mt-8 text-2xl gap-8">
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
        <div className="flex flex-col xl:justify-between xl:gap-64 lg:gap-10 md:flex-row">
          <div className="flex justify-between mt-16 xl:mt-0">
            <div className="w-44">
              <p className="font-extrabold">Secciones</p>
              <ul>
                <li className="mt-4">
                  <a href="#">Inicio</a>
                </li>
                <li className="mt-4">
                  <a href="#">Nosotros</a>
                </li>
                <li className="mt-4">
                  <a href="#">Productos</a>
                </li>
                <li className="mt-4">
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>
            <div className="w-44">
              <p className="font-extrabold">Cuenta</p>
              <ul>
                <li className="mt-4">
                  <a href="#">Crear cuenta</a>
                </li>
                <li className="mt-4">
                  <a href="#">Iniciar sesion</a>
                </li>
                <li className="mt-4">
                  <a href="#">¿Olvidaste tu contraseña?</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between mt-16 xl:mt-0">
            <div className="w-44">
              <p className="font-extrabold">Compañía</p>
              <ul>
                <li className="mt-4">
                  <a href="#">Acerca de</a>
                </li>
                <li className="mt-4">
                  <a href="#">Blog</a>
                </li>
                <li className="mt-4">
                  <a href="#">Trabajos</a>
                </li>
                <li className="mt-4">
                  <a href="#">Socios</a>
                </li>
              </ul>
            </div>
            <div className="w-44">
              <p className="font-extrabold">Legal</p>
              <ul>
                <li className="mt-4">
                  <a href="#">Términos</a>
                </li>
                <li className="mt-4">
                  <a href="#">Condiciones</a>
                </li>
                <li className="mt-4">
                  <a href="#">Privacidad</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 border-t border-[#EDF2FB] pt-8">
        <p>&copy;2023 SaborWave. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

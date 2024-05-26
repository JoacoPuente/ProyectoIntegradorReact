import React from "react";
import PortadaProductos from "../../../src/assets/imgs/portadaProductos.jpg";

export const TitleWithImage = () => {
  return (
    <div className="flex items-center justify-center mt-16 bg-waikawa-gray-100">
      <div className="flex flex-col items-center justify-center max-w-screen-xl px-8 text-center xl:justify-between xl:flex-row xl:text-left">
        <div className="w-1/2 my-16">
          <h2 className="text-2xl font-bold sm:text-4xl text-waikawa-gray-800">
            Explora Nuestra Variedad de Sabores
          </h2>
          <p className="mt-10 text-lg font-semibold text-waikawa-gray-500">
            Sumérgete en una experiencia única con nuestras paletas de helado.
            Desde las cremosas delicias hasta las explosiones frutales, cada
            paleta es una obra maestra de sabor. Descubre clásicos
            reconfortantes y atrévete con nuestras innovadoras creaciones.
          </p>
        </div>
        <div className="container flex items-center justify-center w-1/2 my-8 sm:my-16 min-w-max">
          <img
            src={PortadaProductos}
            alt="PortadaProductos"
            className="w-64 rounded-md sm:w-96"
          />
        </div>
      </div>
    </div>
  );
};

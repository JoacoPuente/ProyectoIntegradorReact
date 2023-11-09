import React from "react";
import background from "../../../src/assets/imgs/portada.jpg";

export const HeroComponent = () => {
  return (
    <div className="h-[calc(100vh-4rem)] mt-16 relative flex justify-center items-center px-8 ">
      <div
        className="absolute inset-0 bg-center bg-cover blur-sm"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="relative text-center py-14 bg-[#EDF2FB] rounded-md px-8 max-w-screen-xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#ABC4FF] sm:text-6xl">
          Paletas de helado: Clásicas y sorprendentes🍦
        </h1>
        <p className="mt-6 text-xl leading-8 text-[#ABC4FF] font-semibold">
          Explora nuestra selección de paletas de helado, tradición y
          creatividad en cada mordisco. Deléitate con sabores para todos los
          gustos.
        </p>
        <button
          href="#"
          className="rounded-md bg-[#ABC4FF] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5C6B94] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-10"
        >
          Ver productos
        </button>
      </div>
    </div>
  );
};

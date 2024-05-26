import React from "react";
import chocolates from "../../assets/imgs/Chocolates.jpg";
import crema from "../../assets/imgs/PoteCrema.jpg";
import dulce from "../../assets/imgs/PoteDulce.jpg";
import fruta from "../../assets/imgs/Frutas.jpg";

export const AboutUs = () => {
  return (
    <div className="bg-waikawa-gray-100">
      <div className="grid items-center max-w-2xl grid-cols-1 px-4 py-24 mx-auto gap-x-8 gap-y-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-waikawa-gray-800 sm:text-4xl">
            Sobre Nosotros
          </h2>
          <p className="mt-4 text-waikawa-gray-500">
            Nuestras paletas de helado son hechas a mano en Argentina,
            utilizando solo los mejores ingredientes locales. Nos enorgullece
            ofrecer productos deliciosos y de alta calidad que deleitarán a
            todos.
          </p>

          <div className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="pt-4 border-t border-waikawa-gray-800">
              <dt className="font-medium text-waikawa-gray-800">Origen</dt>
              <dd className="mt-2 text-sm text-waikawa-gray-500">
                Hechas en Argentina con ingredientes locales.
              </dd>
            </div>
            <div className="pt-4 border-t border-waikawa-gray-800">
              <dt className="font-medium text-waikawa-gray-800">Materiales</dt>
              <dd className="mt-2 text-sm text-waikawa-gray-500">
                Paletas artesanales con frutas naturales y sin conservantes.
              </dd>
            </div>
            <div className="pt-4 border-t border-waikawa-gray-800">
              <dt className="font-medium text-waikawa-gray-800">Dimensiones</dt>
              <dd className="mt-2 text-sm text-waikawa-gray-500">
                Cada paleta mide aproximadamente 10cm x 5cm.
              </dd>
            </div>
            <div className="pt-4 border-t border-waikawa-gray-800">
              <dt className="font-medium text-waikawa-gray-800">Acabado</dt>
              <dd className="mt-2 text-sm text-waikawa-gray-500">
                Paletas cremosas y de alta calidad, perfectas para cualquier
                ocasión.
              </dd>
            </div>
            <div className="pt-4 border-t border-waikawa-gray-800">
              <dt className="font-medium text-waikawa-gray-800">Incluye</dt>
              <dd className="mt-2 text-sm text-waikawa-gray-500">
                Variedad de sabores para todos los gustos: frutales, cremosos y
                más.
              </dd>
            </div>
            <div className="pt-4 border-t border-waikawa-gray-800">
              <dt className="font-medium text-waikawa-gray-800">
                Consideraciones
              </dt>
              <dd className="mt-2 text-sm text-waikawa-gray-500">
                Elaboradas de manera artesanal, pueden variar ligeramente en
                forma y tamaño.
              </dd>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={chocolates}
            alt="Paleta de helado de frutas frescas."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src={crema}
            alt="Paletas de helado de varios sabores en un mostrador."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src={dulce}
            alt="Paleta de helado de chocolate con nueces."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src={fruta}
            alt="Persona disfrutando una paleta de helado en un día soleado."
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

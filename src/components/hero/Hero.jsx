import background from "../../../src/assets/imgs/portada.jpg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about");
  };

  return (
    <div className="h-[calc(100vh-4rem)] mt-16 relative flex justify-center items-center px-8 ">
      <div
        className="absolute inset-0 px-8 bg-center bg-cover blur-sm "
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="relative max-w-screen-xl px-8 text-center rounded-md py-14 bg-waikawa-gray-100">
        <h1 className="text-3xl font-extrabold tracking-tight text-waikawa-gray-500 sm:text-6xl">
          Paletas de helado: Clásicas y sorprendentes🍦
        </h1>
        <p className="mt-6 text-lg font-semibold leading-8 sm:text-xl text-waikawa-gray-500">
          Explora nuestra selección de paletas de helado, tradición y
          creatividad en cada mordisco. Deléitate con sabores para todos los
          gustos.
        </p>
        <button
          onClick={handleButtonClick}
          className="rounded-md bg-waikawa-gray-500 px-3.5 py-2.5 text-sm font-semibold text-waikawa-gray-50 shadow-sm hover:bg-waikawa-gray-800 mt-10"
        >
          Nosotros
        </button>
      </div>
    </div>
  );
};

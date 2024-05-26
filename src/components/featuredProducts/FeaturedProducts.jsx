import { useNavigate } from "react-router-dom";
import paleta1 from "../../assets/imgs/PaleteMarroc.jpg";
import paleta2 from "../../assets/imgs/PaletaCanelayMiel.jpg";
import paleta3 from "../../assets/imgs/PaletaCheesecake.jpg";
import paleta4 from "../../assets/imgs/PaletaTiramisu.jpg";

export const FeaturedProducts = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/products");
  };

  const products = [
    { id: 1, name: "Paleta de Marroc", imageUrl: paleta1 },
    { id: 2, name: "Paleta de Canela y Miel", imageUrl: paleta2 },
    { id: 3, name: "Paleta de Cheesecake con Frutos Rojos", imageUrl: paleta3 },
    { id: 4, name: "Paleta de Tiramisú", imageUrl: paleta4 },
  ];

  return (
    <div className="px-4 py-8 bg-waikawa-gray-100">
      <div className="mx-auto text-center max-w-7xl text-waikawa-gray-500">
        <h2 className="text-3xl font-extrabold">Productos Destacados</h2>
        <p className="mt-2">Descubre nuestros productos más populares</p>
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border-2 rounded-lg shadow-md bg-waikawa-gray-50 border-waikawa-gray-500 min"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="object-cover w-full h-48 rounded-t-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            onClick={handleButtonClick}
            className="inline-block px-6 py-3 text-lg rounded-full bg-waikawa-gray-500 text-waikawa-gray-50 hover:bg-waikawa-gray-800"
          >
            Ver todos los productos
          </a>
        </div>
      </div>
    </div>
  );
};

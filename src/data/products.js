import PaletadeCanelayMiel from "../assets/imgs/PaletadeCanelayMiel.jpg";
export const products = [
  {
    id: 1,
    title: "Paleta de Tiramisú",
    img: PaletadeCanelayMiel,
    desc: "Sabores de café, mascarpone y cacao en una paleta.",
    price: 3100,
    category: "Especiales",
  },
  {
    id: 2,
    title: "Paleta de Cheesecake con Frutos Rojos",
    img: PaletadeCanelayMiel,
    desc: "Deliciosa mezcla de cheesecake y frutas del bosque.",
    price: 3100,
    category: "Especiales",
  },
  {
    id: 3,
    title: "Paleta de Canela y Miel",
    img: PaletadeCanelayMiel,
    desc: "Mezcla de canela y miel para una paleta con un toque especiado y dulce.",
    price: 3100,
    category: "Especiales",
  },
  {
    id: 4,
    title: "Paleta de Marroc",
    img: PaletadeCanelayMiel,
    desc: "Suave helado de vainilla, con trozos de Marroc y cobertura de chocolate irresistible. ",
    price: 3100,
    category: "Especiales",
  },
];

export const TotalProdusct = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];
  return acc;
}, {});

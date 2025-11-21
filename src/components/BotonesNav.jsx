import React from "react";

const BotonesNav = () => {
  const ItemBoton = [
    {
      id: 1,
      url: "herramientas/contenido",

      nombre: "Contenido",
    },
    {
      id: 2,
      url: "herramientas/marketingseo",

      nombre: "Marketing/SEO",
    },
    {
      id: 3,
      url: "herramientas/audiovideo",

      nombre: "Audio/Video",
    },
    {
      id: 4,
      url: "herramientas/productividad",

      nombre: "Productividad",
    },
    {
      id: 5,
      url: "herramientas/venezuela-ia",
      nombre: "Para Venezuela",
    },
    {
      id: 6,
      url: "herramientas/imagen",
      nombre: "Imagenes IA",
    },
    {
      id: 7,
      url: "herramientas/estilovida",
      nombre: "Estilo de Vida",
    },
    {
      id: 8,
      url: "herramientas/robot-ia",
      nombre: "Robots Mascota",
    },
    {
      id: 9,
      url: "idea",
      nombre: "Blog Ideas...",
    },
    {
      id: 10,
      url: "herramientas/prompts",
      nombre: "Prompts Interesantes",
    },
    {
      id: 11,
      url: "herramientas/adulto-ia",
      nombre: "Adulto IA",
    },
  ];

  return (
    <>
      {ItemBoton.map(({ id, url, nombre }) => (
        <div
          key={id}
          className="flex justify-center"
        >
          <a
            href={`/${url}/`}
            className="w-full text-black bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl md:text-lg px-10 md:px-4 py-5"
          >
            {nombre}
          </a>
        </div>
      ))}
    </>
  );
};
export default BotonesNav;

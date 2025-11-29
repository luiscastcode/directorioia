import React from "react";

const BotonesNav = () => {
  const ItemBoton = [
    {
      id: 1,
      url: "aplicaciones/para-redactar-contenido",

      nombre: "Contenido",
    },
    {
      id: 2,
      url: "aplicaciones/en-el-marketing-seo",

      nombre: "Marketing/SEO",
    },
    {
      id: 3,
      url: "aplicaciones/para-audio-video",

      nombre: "Audio/Video",
    },
    {
      id: 4,
      url: "aplicaciones/en-los-negocios",

      nombre: "Productividad",
    },
    {
      id: 5,
      url: "aplicaciones/venezuela-ia",
      nombre: "Para Venezuela",
    },
    {
      id: 6,
      url: "aplicaciones/para-crear-imagenes",
      nombre: "Imagenes IA",
    },
    {
      id: 7,
      url: "aplicaciones/en-la-vida-cotidiana",
      nombre: "Estilo de Vida",
    },
    {
      id: 8,
      url: "aplicaciones/robot-ia",
      nombre: "Robots Mascota",
    },
    {
      id: 9,
      url: "blog",
      nombre: "Blog Ideas...",
    },
    {
      id: 10,
      url: "aplicaciones/prompts",
      nombre: "Prompts Interesantes",
    },
    {
      id: 11,
      url: "aplicaciones/adulto-ia",
      nombre: "Adulto IA",
    },
     {
      id: 12,
      url: "aplicaciones/en-la-agricultura",
      nombre: "En La Agricultura",
    },
  ];

  return (
    <div class="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-1 mb-1">
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
    </div>
  );
};
export default BotonesNav;

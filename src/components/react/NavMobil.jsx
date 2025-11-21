import { useState } from "react";

export function NavMobil() {
  const [nav, setNav] = useState(false);
  const ideas = [
    {
      id: 1,
      nombre: "Marketing/SEO",
      url: "herramientas/marketingseo",
    },
    {
      id: 2,
      nombre: "Productividad",
      url: "herramientas/productividad",
    },
    {
      id: 3,
      nombre: "Audio / Video",
      url: "/herramientas/audiovideo",
    },
    {
      id: 4,
      nombre: "Imagen",
      url: "herramientas/imagen",
    },
    {
      id: 5,
      nombre: "Contenido",
      url: "herramientas/contenido",
    },
    {
      id: 6,
      nombre: "Estilo de Vida",
      url: "herramientas/estilovida",
    },
    {
      id: 7,
      nombre: "Robots Mascota",
      url: "herramientas/robot-ia",
    },
    {
      id: 8,
      nombre: "Para Venezuela",
      url: "herramientas/venezuela-ia",
    },
    {
      id: 9,
      nombre: "Ideas de Negocios",
      url: "idea",
    },
    {
      id: 10,
      nombre: "Contacto",
      url: "contacto",
    },
  ];
  return (
    <>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-[1000] text-gray-500 md:hidden"
      >
        {nav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M10 10l4 4m0 -4l-4 4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        )}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute z-[999] text-6xl top-0 left-0 w-[1200px] h-[1600px] bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {ideas.map(({ id, nombre, url }) => (
            <li key={id} className="mb-20 font-bold text-6xl">
              <a href={`/${url}/`}>{nombre}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

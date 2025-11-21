 

import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { Dropdown } from "flowbite-react";
const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const links2 = [
    {
      id: 1,
      nombre: "Maketing/SEO",
      url: "marketingseo",
    },
    {
      id: 2,
      nombre: "venezuela ia",
      url: "venezuela-ia",
    },
    {
      id: 3,
      nombre: "audio/video",
      url: "audiovideo",
    },
    {
      id: 4,
      nombre: "imagen",
      url: "imagen",
    },
    {
      id: 5,
      nombre: "contenido",
      url: "contenido",
    },
    {
      id: 6,
      nombre: "estilo de vida",
      url: "estilovida",
    },
    {
      id: 7,
      nombre: "robots mascota",
      url: "robot-ia",
    },
    {
      id: 8,
      nombre: "productividad",
      url: "productividad",
    },
  ];
 
 
  return (
    <div className="hidden md:flex menudrop mr-6" ref={scope}>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 px-3 rounded  md:border-0 md:p-0 md:w-auto"
      >
        <span>Herramientas</span>  
        <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <nav
        className={`absolute z-[999] translate-y-10 rounded-lg w-44 ${
          isOpen ? "open" : "auto"
        }`}
      >
        <ul style={{
          backgroundColor: "#e2e8f0",
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}>
          {links2.map(({ id, nombre, url }) => (
            <li key={id} className="font-bold cursor-pointer mb-2 capitalize">
              <a href={`/herramientas/${url}/`}>{nombre}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MenuDropdown;

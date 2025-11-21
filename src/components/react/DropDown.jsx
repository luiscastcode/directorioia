import { Dropdown } from "flowbite-react";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("svg", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "Dropdown",
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
      "Dropdown.Item",
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

export default function NavDropDown() {
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
    <div id="nav-dropdown" className="hidden md:flex menudrop mr-6">
      
        <Dropdown label="Herramientas" dismissOnClick={false} className="py-2 px-3">
       
           {links2.map(({ id, nombre, url }) => (
            <Dropdown.Item key={id} className="font-bold mb-2 capitalize">
              <a href={`/herramientas/${url}/`}>{nombre}</a>
            </Dropdown.Item>
          ))}
          
        </Dropdown>
       
    </div>
  );
}

import React, { useState, useRef } from "react";

import { motion } from "framer-motion";
import Data from "../Data";
import { Pagination } from "./Pagination";

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  let results = [];
  if (!searchTerm) {
    results = Data;
  } else {
    results = Data.filter(
      (dato) =>
        dato.nombre.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        dato.categoria.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        dato.pago.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

  const totalIa = results.length;
  const [iaPorPagina, setIaPorPagina] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * iaPorPagina;
  const firstIndex = lastIndex - iaPorPagina;

  const modalRef = useRef(null);
  const [isActive, setIsActive] = useState(modalRef, false);
  const [activeItem, setActiveItem] = useState(null);
  const onClick = (result) => {
    setActiveItem(result);
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="bg-slate-300 border border-slate-600 p-4 rounded-md top-[262px] md:top-[480px]  ">
        <input
          className="placeholder:italic placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-md py-5 md:py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-4xl md:text-xl"
          name="buscar"
          type="text"
          placeholder="Busca tu IA, escribe por lo menos 3 letras"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-2 mt-10">
      {results
          .map((result) => (
            <div
              key={result.id}
              className="mb-4 rounded overflow-hidden shadow-inner bg-blue-200"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                  x: { duration: 1 },
                }}
              >
                 <img
                  className="w-full cursor-pointer"
                  src={`../../img/${result.img}.webp`}
                  width="1046"
                  height="571"
                  alt={result.nombre}
                />
              </motion.div>
              <div className="px-6 py-4">
                <div className="mb-4">
                  <h2 className="text-5xl md:text-xl text-gray-900">
                    {result.nombre}
                  </h2>
                </div>
                <span className="inline-block bg-gray-200 rounded-full px-6 py-2 md:px-3 md:py-1 text-3xl md:text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {result.categoria} 
                </span>
                <p className="descrip-texto text-sm text-justify">
                  {result.descrip} 
                  <span
                  className={`${result.bgdestacado} inline-block rounded-full px-5 py-2 md:px-2 md:py-1 text-3xl md:text-sm font-semibold ml-2`}
                >
                  {result.pago}
                </span>
                </p>
              </div>
             
              <div className="px-3 pb-4">
                <a
                  href={`${result.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center mx-auto text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-5xl md:text-xl px-8 py-10 md:py-2.5 text-center me-2 mb-2 w-full"
                >
                  Utilizar La IA
                </a>
              </div>
            </div>
          ))
          .slice(firstIndex, lastIndex)}
      </div>
      {/* FIN togle modal */}
      <Pagination
        iaPorPagina={iaPorPagina}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalIa={totalIa}
      />
    </>
  );
};
export default Buscador;

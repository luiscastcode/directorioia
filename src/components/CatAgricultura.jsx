import React, { useState } from "react";
import { motion } from "framer-motion";
import DataAgricultura from "../DataAgricultura";
import { Pagination } from "./Pagination";
import BotonesNav from "./BotonesNav";
 
const Plantilla = () => {
  let results = [];

  results = DataAgricultura;

  const totalIa = results.length;
  const [iaPorPagina, setIaPorPagina] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * iaPorPagina;
  const firstIndex = lastIndex - iaPorPagina;
  return (
    <>
      <div className="my-1">
        <h2 className="text-4xl mb-4 text-center capitalize text-slate-200">
          tipos de aplicaciones en la inteligencia artificial
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-1 mb-1">
          <BotonesNav />
        </div>
      </div>
      <div className="grid grid-col md:grid-cols-3 justify-center gap-2 mt-10">
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
                  className="w-auto md:w-96 cursor-pointer p-4 md:p-8"
                  src= {result.img}
                  alt={result.descrip}
                />
              </motion.div>
              <div className="px-6 py-4">
              <div className="mb-4">
                  <h2 className="text-5xl md:text-xl text-gray-900">
                    {result.nombre}
                  </h2>
                </div>
                <span className="inline-block bg-gray-900 px-6 py-2 md:px-3 md:py-1 text-3xl md:text-sm font-semibold text-gray-300 mr-2 mb-2">
                  {result.categoria}
                </span>
                <p className="descrip-texto text-xs md:text-sm">
                  {result.descrip}
                </p>
              </div>
              <div className="px-3 pb-4">
                <a
                  href={`${result.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center mx-auto text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-5xl md:text-xl px-8 py-10 md:py-2.5 text-center me-2 mb-2 w-full"
                >
                 Ver Aplicación IA
                </a>
              </div>
            </div>
          ))
          .slice(firstIndex, lastIndex)}
      </div>
      <Pagination
        iaPorPagina={iaPorPagina}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalIa={totalIa}
      />
    </>
  );
};
export default Plantilla;

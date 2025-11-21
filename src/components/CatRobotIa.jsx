import React, { useState, useRef } from "react";

import { motion } from "framer-motion";
import Data from "../Data";
import { Pagination } from "./Pagination";

const Productividad = () => {
  let results = [];

  results = Data.filter((c) => c.categoria === "Robot Asistente");

  const totalIa = results.length;
  const [iaPorPagina, setIaPorPagina] = useState(12);
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
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-1 mt-10">
        {results
          .map((result) => (
            <div
              key={result.id}
              className="mb-4 rounded overflow-hidden shadow-inner bg-slate-100 border border-amber-400"
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
                  src={`../../assets/amazon/${result.img}.jpg`}
                  alt={result.nombre}
                />
              </motion.div>
              <div className="px-6 py-4">
                <div className="mb-4">
                  <h2 className="text-5xl md:text-xl text-gray-900">
                    {result.nombre}
                  </h2>
                </div>
                <div className="flex flex-row items-center">
                  <span className="inline-block bg-gray-200 rounded-md px-6 py-2 md:px-3 md:py-1 text-3xl md:text-sm font-bold text-indigo-800 mr-2 mb-2">
                    {result.categoria}
                  </span>
                  <span className="bg-red-700 text-slate-200 font-bold rounded-md px-6 py-2 md:px-3 md:py-1">
                    {result.pago}
                  </span>
                </div>

                <p className="descrip-texto text-sm text-gray-900">
                  {result.descrip}
                </p>
              </div>
              <div className="px-3 pb-4">
                <a
                  id="amazon-btn"
                  href={`${result.url}`}
                  target="_blank"
                  rel="nofollow nooponer noreferrer"
                  className="flex justify-center mx-auto bg-gradient-to-r from-[#F7BE38] via-[#F7BE38]/90 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-lg text-5xl md:text-xl py-10 px-8 md:py-2.5 text-center me-2 mb-2 w-full"
                >
                  Ver En Amazon
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
export default Productividad;

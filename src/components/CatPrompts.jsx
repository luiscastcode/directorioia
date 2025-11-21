import React, { useState } from "react";
import { motion } from "framer-motion";
import DataPrompts from "../DataPrompts";
import { Pagination } from "./Pagination";

const Plantilla = () => {
  let results = [];

  results = DataPrompts 

  const totalIa = results.length;
  const [iaPorPagina, setIaPorPagina] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * iaPorPagina;
  const firstIndex = lastIndex - iaPorPagina;
  return (
    <>
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
                  className="w-full cursor-pointer"
                  src={`../../imgprompts/${result.img}`}
                  alt={result.descrip}
                />
              </motion.div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-900 rounded-full px-6 py-2 md:px-3 md:py-1 text-3xl md:text-sm font-semibold text-gray-300 mr-2 mb-2">
                  {result.categoria}
                </span>
                <p className="descrip-texto text-sm text-justify">
                  {result.descrip}
                </p>
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

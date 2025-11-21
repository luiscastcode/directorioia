import React, { useState } from "react";
import { motion } from "framer-motion";
import Data from "../Data";
import { Pagination } from "./Pagination";

const Plantilla = ({ categ, categ2 }) => {
  let results = [];

  results = Data.filter(
    (c) => c.categoria === `${categ}` || c.categoria === `${categ2}`
  );

  const totalIa = results.length;
  const [iaPorPagina, setIaPorPagina] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * iaPorPagina; 
  const firstIndex = lastIndex - iaPorPagina;
  return (
    <>
      <div
        id="cat"
        className="grid grid-cols-2 md:grid-cols-4 justify-center gap-2 mt-10"
      >
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
                <div className="flex flex-row items-center mb-2">
                  <span className="inline-block bg-gray-200 rounded-md px-6 py-2 md:px-3 md:py-1 text-3xl md:text-sm font-semibold text-gray-900 mr-2">
                    {result.categoria}
                  </span>
                  <span
                    className={`${result.bgdestacado} inline-block rounded-md px-5 py-2 md:px-2 md:py-1 text-3xl md:text-sm font-semibold ml-2`}
                  >
                    {result.pago}
                  </span>
                </div>

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
                  Utilizar La IA
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

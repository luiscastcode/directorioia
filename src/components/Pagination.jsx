import React from "react";

export function Pagination({
  totalIa,
  setCurrentPage,
  currentPage,
  iaPorPagina,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalIa / iaPorPagina); i++) {
    pageNumber.push(i);
  }

  const paginaPrevia = () => {
    setCurrentPage(currentPage - 1);
  };

  const paginaProx = () => {
    setCurrentPage(currentPage + 1);
  };

  const enPagina = (n) => {
    setCurrentPage(n);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mb-1">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          onClick={paginaPrevia}
          className={`relative ${
            currentPage === 1 ? "hidden" : ""
          } inline-flex items-center rounded-md border border-gray-300 bg-red-950 px-8 py-6 text-4xl md:text-sm font-medium text-gray-700 hover:bg-gray-50`}
        >
          Anterior
        </a>
        <a
          onClick={paginaProx}
          className={`relative ${
            currentPage >= pageNumber.length ? "hidden" : ""
          } ml-3 inline-flex items-center rounded-md border border-gray-300 bg-red-950 px-8 py-6 text-4xl md:text-sm font-medium text-slate-200 hover:bg-gray-50`}
        >
          Siguiente
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-xl md:text-lg text-gray-700">
            Total Apps IA:<span className="font-bold"> {totalIa}</span>
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              onClick={paginaPrevia}
              className={`relative ${
                currentPage === 1 ? "hidden" : ""
              }  inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
            >
              <span className="sr-only">Previo</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {pageNumber.map((noPage) => (
              <a
                key={noPage}
                onClick={() => enPagina(noPage)}
                href="#"
                className={`relative z-10 inline-flex items-center ${
                  noPage === currentPage
                    ? "bg-indigo-600 text-white"
                    : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                }  px-4 py-2 text-4xl md:text-sm font-semibold  cursor-pointer focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {noPage}
              </a>
            ))}
            <a
              onClick={paginaProx}
              className={`relative ${
                currentPage >= pageNumber.length ? "hidden" : ""
              } inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
            >
              <span className="sr-only text-4xl">Siguiente</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

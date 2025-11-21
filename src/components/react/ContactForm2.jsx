import React from "react";

import { useForm, ValidationError } from "@formspree/react";

function ContactForm2() {
  const [state, handleSubmit] = useForm("moqgnoao");
  if (state.succeeded) {
    return (
      <h4 className="bg-amber-500 p-2">
        <a url="/"> Gracias, lo publicaré!</a>
      </h4>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <input
        id="nombre"
        name="nombre"
        type="text"
        className="bg-gray-100 placeholder:text-5xl placeholder:md:text-xl text-gray-900 border-0 rounded-md p-8 md:p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        placeholder="Nombre de la IA"
      />
      <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
      <input
        id="email"
        name="email"
        type="email"
        className="bg-gray-100 placeholder:text-5xl placeholder:md:text-xl text-gray-900 border-0 rounded-md p-8 md:p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        placeholder="Email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input
        id="url"
        name="url"
        type="text"
        className="bg-gray-100 placeholder:text-5xl placeholder:md:text-xl text-gray-900 border-0 rounded-md p-8 md:p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        placeholder="Url"
      />
      <ValidationError prefix="Url" field="url" errors={state.errors} />
      <textarea
        id="descripcion"
        name="cover_letter"
        className="bg-gray-100 placeholder:text-5xl placeholder:md:text-xl text-gray-900 border-0 rounded-md p-8 md:p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        placeholder="Breve Descripción"
      ></textarea>
      <input
        type="hidden"
        id="g-recaptcha-response"
        name="g-recaptcha-response"
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="invert hover:rotate-2 brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600"
      >
        <div className="text-3xl md:text-xl px-6 py-8 md:py-2 backdrop-blur-xl bg-black/80 rounded-xl font-bold w-full h-full">
          <div className="group-hover:scale-100 flex group-hover:text-yellow-500 text-yellow-600 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              className="w-6 h-6 stroke-yellow-600 group-hover:stroke-yellow-500 group-hover:stroke-{1.99}"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              ></path>
            </svg>
            Enviar
          </div>
        </div>
      </button>
    </form>
  );
}
export default ContactForm2;

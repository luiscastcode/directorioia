import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xpzvjpgl");
  if (state.succeeded) {
    return (
      <h4 className="bg-amber-500 p-2 text-6xl">
        <a url="/"> Gracias por Contactarme!</a>
      </h4>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-6">
        <label
          htmlFor="nombre"
          className="block text-gray-700 mb-2 text-3xl md:text-xl"
        >
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          className="shadow appearance-none border rounded w-full py-6 md:py-2 px-3 text-gray-700 leading-tight focus:ring-indigo-600"
        />
        <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-gray-700 mb-2 text-3xl md:text-xl"
        >
          Direccion de Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-6 md:py-2 px-3 text-gray-700 leading-tight focus:ring-indigo-600"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 mb-2 text-3xl md:text-xl"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          className="shadow appearance-none border rounded w-full py-6 md:py-2 px-3 text-gray-700 leading-tight focus:ring-indigo-600"
        />
        <ValidationError
          prefix="Mensaje"
          field="mensaje"
          errors={state.errors}
        />
      </div>

      <input
        type="hidden"
        id="g-recaptcha-response"
        name="g-recaptcha-response"
      />
      <button
        class="g-recaptcha text-3xl md:text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 md:py-2 px-8 md:px-4 rounded focus:outline-none focus:shadow-outline"
        data-sitekey="6Le0waIpAAAAAMpTFe6UCPexsg1AvQycbqNJdq5p"
        data-callback="onSubmit"
        data-action="submit"
        disabled={state.submitting}
      >
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;

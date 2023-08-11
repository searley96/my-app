import React, { useState } from "react";
import { useEffect } from "react";
import './ContactForm.css'; // Import the custom CSS file


const FORM_ENDPOINT = "https://public.herotofu.com/v1/65dbf400-0b10-11ee-8267-d3eb100789b4";

const ContactForm = () => {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href =
        "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (

    <div className="flex justify-center">
      <div className="max-w-sm w-full p-4">
      
            
        <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
          <div className="mb-3 pt-0">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="px-2 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-xs border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="px-2 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-xs border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <textarea
              placeholder="Message"
              name="message"
              className="px-2 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-xs border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
           <div className="mb-3 pt-0 flex justify-center">
            <button
              className="bg-green-500 text-white active:bg-green-500 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Send
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;



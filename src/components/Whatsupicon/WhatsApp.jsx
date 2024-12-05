
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/your-phone-number"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:bottom-4 bottom-0 md:right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 "
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsApp;

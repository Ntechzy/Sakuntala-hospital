import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

const Whatsapp = () => {
    const [msg, setMsg] = useState("Hello!");
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(!open);
    };

    const handleWA = () => {
        setOpen(false);
        window.location.href = `https://api.whatsapp.com/send?phone=8528012822&text=${encodeURIComponent(msg)}`;
    };

    const handleChange = (e) => {
        setMsg(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleWA();
        }
    };

    return (
        <div className="fixed bottom-6  right-0 z-50">
            {/* WhatsApp Icon */}
            <div
                className={`fixed bottom-10 right-9 flex items-center justify-center bg-green-500 w-14 h-14 md:w-16 md:h-16 text-white rounded-full cursor-pointer shadow-lg ${
                    open ? "hidden" : "block"
                }`}
                onClick={() => setOpen(true)}
            >
                <IoLogoWhatsapp size={50} className="bg-green-500 rounded-full size-10 md:size-[50px]" />
            </div>

            {/* Chat Dialog */}
            <div
                className={`transition-transform transform ${
                    open ? "scale-100" : "scale-0"
                } w-80 bg-white rounded-lg shadow-xl p-4 relative`}
            >
                {/* Close Icon */}
                <div
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
                    onClick={handleClose}
                >
                    <IoMdCloseCircle size={25} />
                </div>

                {/* Chat Header */}
                <div className="text-lg font-bold text-green-500 mb-2">
                    Hey! How can I help you?
                </div>

                {/* Message Input */}
                <div className="flex items-center border rounded-lg overflow-hidden">
                    <input
                        type="text"
                        value={msg}
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        className="flex-grow p-2 outline-none"
                        placeholder="Type your message..."
                    />
                    <button
                        onClick={handleWA}
                        className=" text-white p-2 flex items-center justify-center bg-green-600 transition-colors"
                    >
                        <IoSend size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Whatsapp;

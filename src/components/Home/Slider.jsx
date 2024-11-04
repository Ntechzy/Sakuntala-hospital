import React, { useState } from "react";

const images = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Welcome to Our Hospital",
    description: "Providing quality healthcare for over 50 years.",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Advanced Medical Technology",
    description: "State-of-the-art equipment for accurate diagnosis.",
  },
  {
    id: 3,
    src: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Expert Doctors",
    description: "Our team of specialists is here to care for you.",
  },
  {
    id: 4,
    src: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Comprehensive Care",
    description: "We offer a range of services for every medical need.",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-[100%] h-screen overflow-hidden">
      {/* Slide Images */}
      <div className="w-[95%] h-full flex overflow-hidden relative">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `100%`,
          }}
        >
          {images.map((image) => (
            <div key={image.id} className="w-full h-full flex-shrink-0 relative">
              <img
                src={image.src}
                alt={`Slide ${image.id}`}
                className="w-full h-full object-cover bg-no-repeat border-2 shadow-2xl"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white text-center p-6">
                <h1 className="text-4xl font-bold mb-4">{image.title}</h1>
                <p className="text-lg mb-6">{image.description}</p>
                <div className="space-x-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Learn More
                  </button>
                  <button className="bg-transparent hover:bg-white text-white hover:text-black font-bold py-2 px-4 border border-white rounded">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute md:bottom-5 bottom-0 right-0 flex justify-center items-center md:flex-col flex-row space-y-2 before:content-['_'] before:text-3xl before:h-52 before:bg-black before:w-[1px] before:opacity-20 before:gap-9 before:text-gray-300 after:content-['_'] after:text-3xl after:h-24 after:bg-black after:w-[1px] after:opacity-20 after:text-gray-300">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`md:w-16 p-6 mt-3 md:h-16 w-7 h-7 rounded-full border-2 text-3xl border-gray-300 flex items-center justify-center transition duration-300 ${
              currentSlide === index
                ? "bg-blue-500 border-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;

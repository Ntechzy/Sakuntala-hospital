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
      <div className="md:w-[95%] h-full flex overflow-hidden relative">
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
                  <button className="bg-[#A83679]-500 hover:bg-[#A83679]-700 text-white font-bold py-2 px-4 rounded">
                    Learn More
                  </button>
                  <button className="bg-[#A83679] hover:bg-[#82265c] text-white hover:text-white font-bold py-2 px-4 border border-white rounded">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute md:bottom-5 bottom-0  md:w-auto m-auto w-full md:gap-0 gap-4 md:right-0 flex justify-center items-center md:flex-col flex-row space-y-2 md:before:content-['_'] md:before:text-3xl md:before:h-52 md:before:bg-black md:before:w-[1px] md:before:opacity-20 md:before:gap-9 md:before:text-gray-300 md:after:content-['_'] md:after:text-3xl md:after:h-24 md:after:bg-black md:after:w-[1px] md:after:opacity-20 md:after:text-gray-300">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`md:w-16 p-6 mt-3 md:h-16 w-7 h-7 rounded-full border-2 text-3xl border-gray-300 flex items-center justify-center transition duration-300 ${currentSlide === index
              ? "bg-[#A83679] border-[#A83679] text-white"
              : "bg-white text-"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

    </div >
  );
};

export default Slider;

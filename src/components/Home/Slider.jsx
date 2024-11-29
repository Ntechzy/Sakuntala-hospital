import React, { useState } from "react";

const images = [
  {
    id: 1,
    src: "/assets/homebanner.jpg",
    title: "Welcome to Our Hospital",
    description: "Providing quality healthcare for over 50 years.",
  },
  {
    id: 2,
    src: "/assets/homebanner.jpg",
    title: "Advanced Medical Technology",
    description: "State-of-the-art equipment for accurate diagnosis.",
  },
  {
    id: 3,
    src: "/assets/homebanner.jpg",
    title: "Expert Doctors",
    description: "Our team of specialists is here to care for you.",
  },
  {
    id: 4,
    src: "/assets/homebanner.jpg",
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
                className="w-full h-full object-cover p-11 bg-no-repeat border-2 shadow-2xl"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col pt-60 items-center justify-center text-white text-center p-6">
                {/* <h1 className="text-4xl font-bold mb-4">{image.title}</h1>
                <p className="text-lg mb-6">{image.description}</p> */}
                <div className="space-x-4">
                  <button className="bg-[#A83679]-500 hover:bg-[#A83679]-700 text-black border-2 font-bold py-2 px-4 rounded">
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

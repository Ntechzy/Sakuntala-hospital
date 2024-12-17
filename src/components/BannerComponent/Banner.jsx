import React from 'react';

const Banner = ({CapitalPagename,pagename}) => {
  return (
    <div
      className="relative w-full h-96 flex items-center justify-center pt-[270px] md:pt-[300px] md:pl-24 md:bg-cover bg-contain bg-no-repeat bg-center md:bg-[url('/assets/commonbanner.avif')] bg-[url('/assets/commonbanner.JPG')]"
     
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-pink-900 opacity-60"></div>
      
      {/* Content */}
      <div className="relative  z-10 p-8  bg-opacity-90 rounded-lg max-w-xl text-center">
        <h1 className="md:text-4xl text-2xl text-white font-bold mb-2">{CapitalPagename}</h1>
        <div className="flex items-center justify-center text-white text-sm">
          <span className="mr-2">🏠</span>
          <span className="text-white">Home</span> 
          <span className="mx-1">/</span>
          <span>{pagename}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;

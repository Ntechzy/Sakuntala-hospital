import React, { useEffect, useState } from "react";
import logos from "./data.json";  // Import the JSON file

const CashlessContent = () => {
//   const [logos, setLogos] = useState([]);

//   useEffect(() => {
//     setLogos(logosData);  // Set logos data from JSON file
//   }, []);

  return (
  <div>
      <div className="grid md:grid-cols-4 grid-cols-3 gap-4 p-4">
      {logos.map((logo) => (
        <div key={logo.id} className="flex justify-center items-center">
          <img src={logo.url} alt={logo.id} className="w-32 h-32 object-contain" />
        </div>
      ))}
    </div>
    {/* <div className="flex flex-col justify-center items-center mt-9">
  <p className="text-2xl font-bold text-center p-8 ">  Ayushman Bharat</p>
    <img src="/assets/AyushmanBharat.avif"alt="Ayushman Bharat" className="w-32 h-32 object-contain ml-9" />
    </div> */}
    <div>
        <hr className="border-t border-gray-300 mt-9" />
    </div>
  </div>
  );
};

export default CashlessContent;

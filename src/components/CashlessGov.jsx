import React from "react";

const CashlessGov = () => {
//   const [logos, setLogos] = useState([]);

//   useEffect(() => {
//     setLogos(logosData);  // Set logos data from JSON file
//   }, []);

  return (
  <div>
    
    <div className="flex flex-col justify-center items-center mt-9">
  <p className="text-2xl font-bold text-center p-8 ">  Ayushman Bharat</p>
    <img src="/assets/AyushmanBharat.avif"alt="Ayushman Bharat" className="w-32 h-32 object-contain ml-9" />
    </div>
    <div>
        <hr className="border-t border-gray-300 mt-9" />
    </div>
  </div>
  );
};

export default CashlessGov;

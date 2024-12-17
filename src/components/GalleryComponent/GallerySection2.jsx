import React, { useState, useEffect } from 'react';
import { headings, ClinicalInfrastructure, All, Facilities, Rooms } from './gallerydata';

const GallerySection2 = () => {
  const [selected, setSelected] = useState('All');
  const [data, setData] = useState([]);

  // Function to change data based on selected category
  const changeData = () => {
    let newData = [];
    
    switch (selected) {
      case 'ClinicalInfrastructure':
        newData = ClinicalInfrastructure;
        break;
      
      case 'All':
        newData = All;
        break;
      case 'Facilities':
        newData = Facilities;
        break;
      case 'Rooms':
        newData = Rooms;
        break;
      default:
        console.log('No matching case found.');
        break;
    }
    
    setData(newData);
  };

  useEffect(() => {
    changeData();
  }, [selected]);

  return (
    <section className="bg-[url('/assets/props/line-wave.svg')] bg-no-repeat bg-center bg-cover w-[90%] m-auto">
      <div className="flex flex-col gap-10 m-auto">
        <div className="w-full flex flex-wrap justify-center m-auto">
          {headings.map((heading, i) => (
            <div
              key={i}
              onClick={() => setSelected(heading.name)}
              className={`flex justify-between mx-5 font-semibold bg-white p-2 relative cursor-pointer ${
                selected === heading.name
                  ? 'before:absolute before:left-0 before:h-1 before:w-full before:bg-blue-900 before:-bottom-2'
                  : ''
              }`}
            >
              {heading.name}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex justify-center bg-gold p-1 rounded-md relative w-full max-w-[400px] h-[320px] overflow-hidden"
            >
              <img className="w-full h-full object-cover rounded-md" src={item.img} alt="" />
              
              {item.type === 'vid' && (
                <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 m-auto">
                  {/* Ping circle */}
                  <div className="absolute inline-flex h-14 w-14 rounded-full bg-white opacity-75 animate-ping"></div>

                  {/* Play Button */}
                  <a
                    href={item.link}
                    className="relative flex m-auto z-10 bg-red-500 text-white font-bold capitalize p-5 rounded-full text-lg"
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection2;

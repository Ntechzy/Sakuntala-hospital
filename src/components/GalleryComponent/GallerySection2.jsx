import React, { useState, useEffect } from 'react';
import { headings, ClinicalInfrastructure, All, Facilities } from './gallerydata';

const GallerySection2 = () => {
  const [selected, setSelected] = useState('All');
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [showMore, setShowMore] = useState(false); // Toggle Show More

  // Function to change data based on selected category
  const changeData = () => {
    let newData = [];
    setIsLoading(true); // Start loading when changing data
    
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
      // case 'Rooms':
      //   newData = Rooms;
      //   break;
      default:
        console.log('No matching case found.');
        break;
    }

    setTimeout(() => {
      setData(newData);
      setDisplayedData(newData.slice(0, 8)); 
      setIsLoading(false); 
    }, 1500); 
  };

  useEffect(() => {
    changeData();
  }, [selected]);

  // Show more images when clicked
  const handleShowMore = () => {
    setShowMore(true);
    setDisplayedData(data); // Show all data
  };

  // Show less images when clicked
  const handleShowLess = () => {
    setShowMore(false);
    setDisplayedData(data.slice(0, 8)); // Show only 8 images again
  };

  return (
    <section className="bg-[url('/assets/props/line-wave.svg')] bg-no-repeat bg-center bg-cover w-[90%] m-auto">
      <div className="flex flex-col gap-10 m-auto">
        <div className="w-full flex flex-wrap justify-center m-auto">
          {headings.map((heading, i) => (
            <div
              key={i}
              onClick={() => setSelected(heading.name)}
              className={`flex justify-between mx-5 font-semibold bg-white p-[10px] relative cursor-pointer ${
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
          {isLoading ? (
            // Loader animation
            <div className="flex justify-center items-center col-span-4 py-5">
              <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
          ) : (
            displayedData.map((item, i) => (
              <div
                key={i}
                className="flex justify-center bg-gold p-1 rounded-md relative w-full max-w-[400px] h-[320px] overflow-hidden"
              >
                <img className="w-full h-full object-cover rounded-md" src={item.img} alt="Loading..." />
                
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
            ))
          )}
        </div>

        {/* Show More / Show Less Button */}
        {data.length > 8 && (
          <div className="flex justify-center mt-5">
            {showMore ? (
              <button
                onClick={handleShowLess}
                className="px-4 py-2 text-white bg-blue-600 rounded-md"
              >
                Show Less
              </button>
            ) : (
              <button
                onClick={handleShowMore}
                className="px-4 py-2 text-white bg-blue-600 rounded-md"
              >
                Show More
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection2;

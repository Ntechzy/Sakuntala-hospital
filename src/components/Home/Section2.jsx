import React, { useState } from 'react';

const Section2 = () => {
  const [more, setMore] = useState(false);

  const handleToggle = () => {
    setMore(!more);
  };

  const text = "What is the formula to provide the best fertility treatment to patients? Ask Indira IVF, and we will say that 290+ specialist doctors, 150+ IVF centres, cutting-edge ART (Assisted Reproductive Technology) facilities, affordable treatment plans for all patients, and a lot more go into making the best fertility solution. With the help of all these, we have helped more than 1,50,000+ couples conceive and eventually complete their family. If you are looking for the best fertility centre in Kanpur, visit Indira IVF today. Take the first step in your fertility journey, through our free consultation. Call 18003091975.";

  const truncatedText = text.substring(0, 150) + '...'; 

  return (
    <>
    <div className='text-center text-black md:flex md:flex-row md:gap-9 items-center border-b border-t border-gray-400'>
      <div className='text-3xl font-bold md:w-[50%] m-9 text-center'>
        Best IVF Centre In Jaunpur
      </div>
      <div className='text-xl md:w-[60%] m-9'>
        {more ? text : truncatedText}
        {more ?  <button
     onClick={handleToggle}
     className='text-pink-500'
   >
     Read Less
   </button> :  <button
     onClick={handleToggle}
     className='text-pink-500'
   >
     Read More
   </button>}
      </div>
     
    </div>
    
   </>
  );
};

export default Section2;

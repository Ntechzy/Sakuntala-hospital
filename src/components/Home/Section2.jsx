import React, { useState } from 'react';

const Section2 = () => {
  const [more, setMore] = useState(false);

  const handleToggle = () => {
    setMore(!more);
  };

  const text = "Are you searching for an advanced fertility clinic in the city with world-class technology and expert doctors’ support? If yes, then visit the Shakunt ala IVF Centre. In partnership with one of India’s largest fertility chain hospitals - Indira IVF, Shakuntala IVF Centre is at the forefront of offering the best infertility treatment in Jaunpur. If you are facing recurrent pregnancy loss, azoospermia (nil sperm count), advanced age-related fertility problems, or any male or female factor infertility, then we are your reliable treatment partners.We follow standardised procedures and best treatment protocols to give our patients optimal outcomes. The treatment processes at Shakuntala IVF Centre are technology-driven and highly personalised to suit the unique needs of each patient. At our IVF hospital in Jaunpur, compassionate doctors and staff will help you navigate through your difficult phase and support you on your journey to parenthood. Book a consultation with our specialists today. Call: 18003092323.";

  const truncatedText = text.substring(0, 260) + '...';

  return (
    <>
      <div className='text-center text-black md:flex  md:flex-row md:gap-9 items-center py-[30px]'>
        <div className='md:text-3xl text-xl font-bold md:w-[50%] mt-4  text-center'>
          Best IVF Centre In Jaunpur
        </div>
        <div className='md:text-xl md:w-[60%] md:m-9 my-2 mx-4'>
          {more ? text : truncatedText}
          {more ? <button
            onClick={handleToggle}
            className='text-pink-500'
          >
            Read Less
          </button> : <button
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

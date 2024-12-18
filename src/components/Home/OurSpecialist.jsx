import React from 'react';
import DoctorCard from '../Card/DoctorCard';

const doctors = [
  {
    id: 1,
    name: "Dr. Ram Avadh Yadav",
    type: "M.B.B.S., D.C.H (Ex. C.M.O)",
    details: [
      "M.B.B.S - 1978",
      "D.C.H - 1980"
    ],
    photo: "/assets/gallery/ramawadh.png"
  },
  {
    id: 2,
    name: "Dr. Anand Vardhan",
    type: "M.B.B.S., M.S",
    details: [
      "M.B.B.S - 2012",
      "M.S - 2019"
    ],
    photo: "/assets/gallery/dranand.png"
  },
  {
    id: 3,
    name: "Dr. Anshu Kumari",
    type: "M.B.B.S., D.N.B (Medicine)",
    details: [
      "M.B.B.S - 2012",
      "D.N.B - 2016"
    ],
    photo: "/assets/gallery/dranshu.png"
  },
];



const OurSpecialist = () => {
  return (
    <div className=" bg-[#f8e9f23e] md:p-8 pt-7">
      {/* <h1 className="text-3xl font-bold text-center mb-4">Our Specialist</h1> */}

      <div className='mb-[55px] md:w-[58.33%] m-auto flex-col text-center'>
        <h3 className='text-[12px] md:text-[16px] font-bold text-[#2b8bb1] mb-[20px]'>
          Our Specilist
        </h3>
        <div className='flex flex-col justify-center items-center gap-5'>
          <h1 className='text-[#0a2042] mb-[18px] font-[700] text-[24px] md:text-[42px] leading-[1.25em]'>
            Expert care from our specialist doctors.
          </h1>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center md:gap-8">
        {doctors.map((doctor) => (

          <DoctorCard doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default OurSpecialist;

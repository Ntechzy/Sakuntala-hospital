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
    photo: "https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
  },
  {
    id: 2,
    name: "Dr. Anand Vardhan",
    type: "M.B.B.S., M.S",
    details: [
      "M.B.B.S - 2012",
      "M.S - 2019"
    ],
    photo: "https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
  },
  {
    id: 3,
    name: "Dr. Anshu Kumari",
    type: "M.B.B.S., D.N.B (Medicine)",
    details: [
      "M.B.B.S - 2012",
      "D.N.B - 2016"
    ],
    photo: "https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
  },




];



const OurSpecialist = () => {
  return (
    <div className=" bg-[#f5eaf1] md:p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Our Specialist</h1>
      <h2 className="text-xl text-center mb-8">
        We provide a range of services for every medical need.
      </h2>
      <div className="flex md:flex-wrap justify-center gap-8">
        {doctors.map((doctor) => (
          
          <DoctorCard doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default OurSpecialist;

import React from 'react'
import DoctorCard from '../Card/DoctorCard'
const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      type: "Cardiologist",
      photo: "https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
    },
    {
      id: 2,
      name: "Dr. Emily Johnson",
      type: "Dermatologist",
      photo: "https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
    },
    {
      id: 3,
      name: "Dr. Michael Brown",
      type: "Pediatrician",
      photo: "https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
    },
    {
      id: 4,
      name: "Dr. Sarah Davis",
      type: "Orthopedic Surgeon",
 photo: "https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
    }
  ];
const OurSpecialist = () => {
  return (
   <div className='mt-5 bg-slate-100 p-8'>
     <h1 className='text-3xl font-bold text-center'>Our Specialist</h1>
     <h2 className='text-xl text-center'>We provide a range of services for every medical need.</h2>
     <DoctorCard doctors={doctors}/>

   </div>
  )
}

export default OurSpecialist
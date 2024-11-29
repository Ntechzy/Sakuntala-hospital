import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-1/3 mx-auto mb-6">
      <img
        src={doctor.photo}
        alt={doctor.name}
        className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-center">{doctor.name}</h3>
      <p className="text-center text-gray-700">{doctor.type}</p>
      <ul className="mt-2 text-gray-600 text-center">
        {doctor.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorCard;

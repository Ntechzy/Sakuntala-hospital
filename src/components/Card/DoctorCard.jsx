import React from 'react';

// Sample doctor data


const DoctorCard = ({ doctors }) => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {doctors.map(doctor => (
        <div key={doctor.id} className="bg-white rounded-lg shadow-lg p-4">
          <img 
            src={doctor.photo} 
            alt={doctor.name} 
            className="w-full h-72 object-cover rounded-t-lg hover:transform hover:scale-105 transition-transform duration-300" 
          />
          <h3 className="text-xl font-semibold mt-2">{doctor.name}</h3>
          <p className="text-gray-600">{doctor.type}</p>
        </div>
      ))}
    </div>
  );
};

export default DoctorCard;

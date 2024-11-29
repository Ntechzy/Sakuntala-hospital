import React from 'react';

const Facilities = () => {
  const facilities = [
    { id: 1, name: 'General Ward (BLOCK-A)', beds: 17 },
    { id: 2, name: 'General Ward (BLOCK-B)', beds: 10 },
    { id: 3, name: 'General Ward (BLOCK-C)', beds: 10 },
    { id: 4, name: 'General Ward', beds: 3 },
    { id: 5, name: 'Private Room - Non AC', beds: 6 },
    { id: 6, name: 'Private AC – Single Room', beds: 5 },
    { id: 7, name: 'DELUXE ROOM', beds: 2 },
    { id: 8, name: 'SEMI PRIVATE', beds: 18 },
    { id: 9, name: 'ICU', beds: 6 },
    { id: 10, name: 'DAY CARE', beds: 2 },
    { id: 11, name: 'LABOUR ROOM', beds: 2 },
    { id: 12, name: 'EMERGENCY', beds: 3 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Hospital Facilities</h1>
      
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-gray-600 font-medium">Sr. No.</th>
            <th className="px-6 py-3 text-left text-gray-600 font-medium">Facilities</th>
            <th className="px-6 py-3 text-left text-gray-600 font-medium">No. of Beds</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {facilities.map((facility) => (
            <tr key={facility.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-3">{facility.id}</td>
              <td className="px-6 py-3">{facility.name}</td>
              <td className="px-6 py-3">{facility.beds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Facilities;

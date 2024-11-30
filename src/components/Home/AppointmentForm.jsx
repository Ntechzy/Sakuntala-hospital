import React from 'react';

const AppointmentForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen mt-3 bg-[#ebc4db] p-6 gap-9">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://www.shutterstock.com/image-photo/smiling-brunette-female-doctor-talking-600nw-2323460383.jpg" // replace with actual image URL
          alt="Nurse on call"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 bg-[#bb89a6bb] text-white p-8 space-y-6">
        <h1 className="text-4xl font-bold">Make An Appointment</h1>
        
        {/* Name and Doctor Name */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-1 px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:ring focus:ring-[#a1256ebb]"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium">Choose Doctor Name</label>
            <select className="w-full mt-1 px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:ring focus:ring-[#a1256ebb]">
              <option>Choose Doctor Name</option>
              <option>Barbara Ybarra</option>
              <option>Barbara Ybarra</option>
              <option>Barbara Ybarra</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* Email and Department */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mt-1 px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:ring focus:ring-[#a1256ebb]"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium">Select Department</label>
            <select className="w-full mt-1 px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:ring focus:ring-[#a1256ebb]">
              <option>Select Department</option>
              <option>Cardiologists</option>
              <option>Cardiologists</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* Phone and Date */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full">
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              placeholder="**********"
              className="w-full mt-1 px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:ring focus:ring-[#a1256ebb]"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium">Date</label>
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              className="w-full mt-1 px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:ring focus:ring-[#a1256ebb]"
            />
          </div>
        </div>

        {/* Appointment Note */}
        <div>
          <label className="block text-sm font-medium">Appointment Note</label>
          <textarea
            placeholder="Write your note here..."
            className="w-full mt-1 px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:ring focus:ring-[#a1256ebb]"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full py-3 bg-slate-900 text-white rounded-lg hover:bg-gray-900 transition">
          Make an appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentForm;

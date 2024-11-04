import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission & Vision</h2>
          <p className="mt-4 text-gray-600">
            We strive to achieve excellence in all our endeavors.
          </p>
        </div>

        {/* Mission and Vision Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {/* Mission Card */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaBullseye className="text-blue-500 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              To deliver innovative solutions that empower businesses and individuals to achieve their goals. We are committed to excellence, integrity, and customer satisfaction in everything we do.
            </p>
          </div>

          {/* Vision Card */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaEye className="text-green-500 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              To be a global leader in our industry, recognized for our innovative approach and unwavering commitment to quality. We aim to create lasting value for our stakeholders and make a positive impact on the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

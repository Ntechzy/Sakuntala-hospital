import React from "react";

const WhyChoose = () => {
    const features = [
        {
            id: 1,
            text: "Expert Medical Professionals",
            description: "Our team of specialists is here to care for you. Our hospital is equipped with the latest technology and staffed by experienced professionals dedicated to your health and well-being."
        },
        {
            id: 2,
            text: "State-of-the-Art Facilities",
            description: "We offer a range of services for every medical need. Our team of specialists is here to care for you."
        },
        {
            id: 3,
            text: "Comprehensive Patient Care",
            description: "Our hospital is equipped with the latest technology and staffed by experienced professionals dedicated to your health and well-being."
        }
    ];

    return (
        <div className="relative flex flex-col md:flex-row mt-5 w-full md:p-5 bg-slate-50">
            {/* Left section */}
            <div className="flex relative flex-col bg-gradient-to-r  rounded-l-lg overflow-hidden p-9 w-full md:w-[70%]">
                {/* Wrapper div for all the content */}
                <div className="z-10">
                    <h1 className="font-bold text-4xl text-blue-800">Why Choose Us</h1>
                    <p className="font-semibold text-lg text-gray-800 mt-2">
                        Your health is our priority. We provide exceptional care and support for every patient.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Our hospital is equipped with the latest technology and staffed by experienced professionals dedicated to your health and well-being.
                    </p>
                </div>

                <div className="md:ml-8 flex flex-col space-y-4 mt-6">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex flex-row items-start space-x-4 ">
                            <span className="flex justify-center items-center font-bold text-2xl w-16 h-16 text-center rounded-full pt-2 bg-blue-100 text-blue-600 shadow">
                                {feature.id}
                            </span>
                            <div>
                                <span className="text-lg text-blue-600 font-semibold">{feature.text}</span>
                                <p className="text-gray-700">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right section */}
            <div className="flex-1">
                <img
                    src="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
                    alt="Hospital Facilities"
                    className="h-full object-cover rounded-lg rounded-l-none shadow-md"
                />
            </div>
        </div>
    );
};

export default WhyChoose;

import React from "react";

const WhyChoose = () => {
    const features = [
        {
            id: 1,
            text: "Use of Latest Technology",
            description: "World class laboratries with 24X7 Cloud Monitoring."
        },
        {
            id: 2,
            text: "Trusted Fertility Chain",
            description: "Awarded by Economic Times, Zee Hindustan, Inext Dainik Jagran, India New."
        },
        {
            id: 3,
            text: "Experienced Fertility Doctors",
            description: "Using Automated RI witness technology to avoid sperm or egg mix up"
        }
    ];

    return (
        <div className="relative flex flex-col md:flex-row w-full md:p-5 bg-[#f7eff5]">
            {/* Left section */}
            <div className="flex relative flex-col bg-gradient-to-r  rounded-l-lg overflow-hidden p-9 w-full md:w-[70%]">
                {/* Wrapper div for all the content */}
                <div className="z-10">
                    <h1 className="font-bold text-4xl text-gray-900">Why Choose Us</h1>
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
                            <span className="flex justify-center items-center font-bold text-2xl w-16 h-16 text-center rounded-full pt-2 bg-[#A83679] text-white shadow">
                                {feature.id}
                            </span>
                            <div>
                                <span className="text-lg text-[#A83679] font-semibold">{feature.text}</span>
                                <p className="text-gray-700">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right section */}
            <div className="flex-1">
                <img
                    src="/assets/whychoose.png"
                    alt="Hospital Facilities"
                    className="h-full object-cover rounded-lg rounded-l-none shadow-md"
                />
            </div>
        </div>
    );
};

export default WhyChoose;

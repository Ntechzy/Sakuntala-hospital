import React from "react";

const HomeBanner = () => {
  return (
    <div className="max-w-screen md:h-screen mx-auto bg-white rounded-lg overflow-hidden">
      {/* Header Section */}
      
      {/* Doctor Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-24 bg-[#bc5490bb] space-y-4 md:space-y-0">
        {/* Doctor's Image */}

        {/* Details */}
        <div className="w-full md:w-1/2 px-4 md:px-7 flex flex-col text-center md:text-left py-4 md:py-7 md:ml-28">
          {/* Advanced Fertility Care Section */}
          <div className="text-center mb-9 bg-[#a41d6cbb] p-4">
            <h2 className="text-white font-bold text-4xl md:text-5xl p-5">
              Advanced Fertility Care
            </h2>
            <p className="text-white text-xl md:text-2xl">अब जौनपुर में भी</p>
          </div>

          {/* Doctor's Name and Specialty */}
          <p className="text-white font-semibold text-3xl md:text-4xl">Meet</p>
          <h3 className="text-white text-4xl md:text-6xl font-bold">
            Dr. Shakuntala Yadav
          </h3>
          <p className="text-white text-xl md:text-2xl pt-5">
            Gynaecologist & IVF Specialist <br />
            Jaunpur Centre
          </p>
        </div>

        {/* Doctor's Image */}
        <div className="w-full md:w-1/3 h-full md:h-auto">
          <img
            src="/assets/image1.png"
            alt="Dr. Shakuntala Yadav"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white text-center p-4 gap-2 md:text-lg flex flex-col md:flex-row justify-center md:gap-11 px-4 md:px-0">
        <p> Indira IVF & Shakuntala IVF Centre </p>
        <p> एक ही छत के नीचे Fertility इलाज की सारी सुविधाएं पाएं</p>
        <p>📞 1800 309 1975 </p>
        <p>
          Indira IVF & Shakuntala IVF Centre विशेश्वर, पंचहटिया, जौनपुर
          (उत्तरप्रदेश)
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;

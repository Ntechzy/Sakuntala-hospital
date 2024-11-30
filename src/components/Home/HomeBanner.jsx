import React from "react";

const HomeBanner = () => {
  return (
    <div className="max-w-screen md:h-screen mx-auto bg-white rounded-lg  overflow-hidden">
      {/* Header Section */}

      {/* Doctor Section */}
      <div className="flex flex-col md:flex-row items-center mt-24 bg-[#bc5490bb]  space-y-4 md:space-y-0">
        {/* Doctor's Image */}

        {/* Details */}
        <div className="w-1/2 md:w-1/2 m-auto flex flex-col p-7">
          {/* This part will contain the new section with "Advanced Fertility Care" */}
          <div className="text-center mb-9 bg-[#a41d6cbb] p-4">
            <h2 className="text-white font-bold text-5xl p-5">
              Advanced Fertility Care
            </h2>
            <p className="text-white text-2xl">अब जौनपुर में भी</p>
          </div>

          {/* Doctor's Name and Specialty */}
          <p className="text-white font-semibold text-4xl">Meet</p>
          <h3 className="text-white text-6xl font-bold">
            Dr. Shakuntala Yadav
          </h3>
          <p className="text-white text-2xl pt-5">
            Gynaecologist & IVF Specialist <br />
            Jaunpur Centre
          </p>
        </div>
        <div className="w-full md:w-1/3 h-full">
          <img
            src="/assets/image1.png"
            alt="Dr. Shakuntala Yadav"
            className=" object-cover w-full h-full"
          />
        </div>
      </div>
      {/* #5f0137bb */}
      {/* QR and Contact Section */}
      {/* <div className="bg-[#5f0137bb]  text-white p-6 flex flex-col md:flex-row-reverse items-center justify-center shadow-white"> */}
      {/* <div className="flex items-start space-x-44"> */}
      {/* QR Code */}
      {/* <div className="bg-white  rounded-lg shadow">
            <img
              src="/path-to-qr-code.png"
              alt="Scan QR Code"
              className="w-20 h-20"
            />
          </div> */}
      {/* Address */}
      {/* <div>
          <div className="mt-4 md:mt-0 flex flex-col space-x-9">
          <div className="text-lg font-bold">📞📞 1800 309 1975</div>
            <p className="font-semibold">Indira IVF & Shakuntala IVF Centre</p>
            <p>विशेश्वर, पंचहटिया, जौनपुर (उत्तरप्रदेश)</p>
        </div>
          </div> */}
      {/* </div> */}
      {/* Contact */}

      {/* </div> */}

      {/* Footer */}
      <div className="bg-gray-800 text-white text-center py-5 text-lg flex flex-row justify-center gap-11">
        <p> Indira IVF & Shakuntala IVF Centre </p>
        <p> एक ही छत के नीचे Fertility इलाज की सारी सुविधाएं पाएं</p>
        <p>📞 1800 309 1975 </p>
        <p>
          {" "}
          Indira IVF & Shakuntala IVF Centre विशेश्वर, पंचहटिया, जौनपुर
          (उत्तरप्रदेश)
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;

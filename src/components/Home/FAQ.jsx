import React from 'react';

const FAQ = () => {
  const data = [
    {
      parameter: "पहली मुलाकात कब करें?",
      fertilityCheckup: "पीरियड के 18वें दिन",
      iui: "पीरियड के 18वें दिन",
      ivfIcs: "पीरियड के 18वें दिन",
    },
    {
      parameter: "पहली मुलाकात की अवधि?",
      fertilityCheckup: "चेक-अप के लिए 1 दिन",
      iui: "चेक-अप के लिए 1 दिन",
      ivfIcs: "चेक-अप के लिए 1 दिन",
    },
    {
      parameter: "दूसरी मुलाकात (इलाज शुरू करना) कब करें?",
      fertilityCheckup: "N/A",
      iui: "पीरियड के 9वें दिन",
      ivfIcs: "पीरियड के 2वें दिन",
    },
    {
      parameter: "इलाज की कुल अवधि",
      fertilityCheckup: "1 दिन",
      iui: "1 माह",
      ivfIcs: "2-3 माह",
    },
  ];

  return (
    <div className="bg-[#f8e9f2] p-6 rounded-lg mt-9 shadow-md *:mb-9">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">अक्सर पूछे जाने वाले सवाल</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#cf6ba5] text-white">
              <th className="p-3 text-left">पैरामीटर्स</th>
              <th className="p-3 text-left">फर्टिलिटी चेक-अप</th>
              <th className="p-3 text-left">आईयूआई</th>
              <th className="p-3 text-left">आईवीएफ  / आईसीएसआई </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-[#c9a2b8]"
                } text-gray-700`}
              >
                <td className="p-3 border">{row.parameter}</td>
                <td className="p-3 border">{row.fertilityCheckup}</td>
                <td className="p-3 border">{row.iui}</td>
                <td className="p-3 border">{row.ivfIcs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FAQ;

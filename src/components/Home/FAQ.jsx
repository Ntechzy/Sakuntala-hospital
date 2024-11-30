import React from 'react';

const FAQ = () => {
  const data = [
    {
      parameter: "When to do 1st visit?",
      fertilityCheckup: "18th day of Period",
      iui: "18th day of Period",
      ivfIcs: "18th day of Period",
    },
    {
      parameter: "Duration of 1st visit?",
      fertilityCheckup: "1 day for check-up",
      iui: "1 day for check-up",
      ivfIcs: "1 day for check-up",
    },
    {
      parameter: "When to do 2nd visit (Start Treatment)?",
      fertilityCheckup: "N/A",
      iui: "9th day of Period",
      ivfIcs: "2nd day of Period",
    },
    {
      parameter: "Total duration of treatment",
      fertilityCheckup: "1 Day",
      iui: "1 Month",
      ivfIcs: "2-3 Months",
    },
  ];

  return (
    <div className="bg-[#eecde0] p-6 rounded-lg mt-9 shadow-md *:mb-9">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Frequently Asked Questions</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#cf6ba5] text-white">
              <th className="p-3 text-left">Parameters</th>
              <th className="p-3 text-left">Fertility Check-up</th>
              <th className="p-3 text-left">IUI</th>
              <th className="p-3 text-left">IVF / ICSI</th>
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

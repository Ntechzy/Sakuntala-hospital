import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

// JSON Data for FAQ questions and answers
const faqData = [
  {
    question: "When to choose IVF",
    answer: [
      "Blocked or Damaged Fallopian Tubes",
      "Male Infertility",
      "Advanced Maternal Age",
      "Endometriosis",
      "Previous Unsuccessful Treatments",
      "Fertility Preservation",
      "Recurrent Miscarriages",
      "Unexplained Infertility",
    ],
  },
  {
    question: "Our Affordable IVF Packages Include:",
    answer: [
      "Injections & Stimulation",
      "Multiple Consultations with the fertility specialist",
      "Multiple Ultrasounds (For Follicular Monitoring)",
      "Ovum Pickup",
      "Semen Processing",
      "Embryo Transfer",
      "IVF-ICSI",
      "Day-Care Ward Rent",
      "OT charges & consumables",
    ],
  },
  {
    question: "How IVF Benefits Aspiring Couples?",
    answer: [
      "IVF works where other infertility treatments fail",
      "Improves the chances of conception",
      "Has a higher success rate when compared to other fertility treatments",
    ],
  },
];

const IVFInfo = () => {
  return (
    <div className="text-white py-5 px-4 md:mt-6 md:ml-11 ">
      <div className="shadow-lg rounded-lg p-6 w-[90%] m-auto gap-8 items-center h-[60%] ">
        {/* FAQ Section */}
        <div className="mb-8">
          {/* <h1 className="text-xl font-bold mb-2 text-center text-gray-950">IVF Information</h1> */}
          
          <div className="space-y-4">
            {/* Render FAQ Questions */}
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="group bg-[#bc5490bb] p-4 rounded cursor-pointer transition-opacity duration-500 ease-in-out"
              >
                <p className="font-bold">{faq.question}</p>
                <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-screen">
                  <ul className="p-4 rounded">
                    {/* Render each answer as a list item */}
                    {faq.answer.map((point, i) => (
                      <li key={i} className="list-disc ml-5">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IVFInfo;

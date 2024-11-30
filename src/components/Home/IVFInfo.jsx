import React from 'react';
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
      "Unexplained Infertility"
    ]
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
      "OT charges & consumables"
    ]
  },
  {
    question: "How IVF Benefits Aspiring Couples?",
    answer: [
      "IVF works where other infertility treatments fail",
      "Improves the chances of conception",
      "Has a higher success rate when compared to other fertility treatments"
    ]
  },
];

const IVFInfo = () => {
  return (
    <div className='text-white py-5 px-4'>
      <div className='border-2 rounded-lg p-6 w-[50%] m-auto gap-8 items-center'>
        {/* FAQ Section */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold mb-2 text-center'>FAQ'S</h1>
          <h2 className='text-xl font-semibold mb-4 text-center'>Our Expert Answers</h2>
          <div className='space-y-4'>
            {/* Render FAQ Questions */}
            {faqData.map((faq, index) => (
              <div key={index} className='group bg-pink-800 p-4 rounded cursor-pointer transition-opacity duration-500 ease-in-out'>
                <p className='font-bold'>{faq.question}</p>
                <div className='max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-screen'>
                  <ul className='p-4 rounded'>
                    {/* Render each answer as a list item */}
                    {faq.answer.map((point, i) => (
                      <li key={i} className='list-disc ml-5'>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TrustPilot Section */}
        {/* <div className='flex flex-col items-center justify-center'>
          <div className='mb-4'>
            <img src='/assets/faq.png' alt='TrustPilot' className='w-full h-full object-cover rounded-lg' data-aos="flip-up"/>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='text-lg font-semibold'>TrustPilot</div>
            <div className='flex flex-row text-2xl font-bold text-red-400' data-aos="flip-up">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <div className='text-sm text-gray-400' data-aos="flip-up">Over 4.8 rating from our clients</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default IVFInfo;

import React from "react";
import { FaHandHoldingMedical, FaSyringe, FaDna, FaBaby, FaHeartbeat, FaFemale, FaHeart, FaStethoscope } from "react-icons/fa";

const IVFProcess = () => {
  const steps = [
    {
      title: "Ovarian Stimulation",
      description:
        "The woman receives fertility medications to stimulate multiple egg production.",
      bg: "bg-[#a83679]",
      icon: <FaSyringe className="text-white text-2xl" />
    },
    {
      title: "Egg Retrieval",
      description:
        "Eggs are collected from the ovaries using a minimally invasive procedure.",
      bg: "bg-[#a83679]",
      icon: <FaHandHoldingMedical className="text-white text-2xl" />
    },
    {
      title: "Sperm Collection",
      description:
        "The male partner provides a sperm sample or donor sperm is used.",
      bg: "bg-[#a83679]",
      icon: <FaDna className="text-white text-2xl" />
    },
    {
      title: "Fertilization",
      description:
        "Eggs and sperm are combined in the laboratory to facilitate fertilization.",
      bg: "bg-[#a83679]",
      icon: <FaHeartbeat className="text-white text-2xl" />
    },
    {
      title: "Embryo Culture",
      description:
        "Fertilized eggs (embryos) are cultured for a few days to develop further.",
      bg: "bg-[#a83679]",
      icon: <FaBaby className="text-white text-2xl" />
    },
    {
      title: "Transfer",
      description:
        "One or more embryos are carefully placed into the woman's uterus.",
      bg: "bg-[#a83679]",
      icon: <FaFemale className="text-white text-2xl" />
    },
    {
      title: "Support",
      description: "Hormonal support is given to aid embryo implantation.",
      bg: "bg-[#a83679]",
      icon: <FaHeart className="text-white text-2xl" />
    },
    {
      title: "Pregnancy Test",
      description:
        "A blood test is performed to determine if pregnancy has occurred.",
      bg: "bg-[#a83679]",
      icon: <FaStethoscope className="text-white text-2xl" />
    },
  ];


  return (
    <div className="bg-[#ffffff] p-8 mx-auto md:my-4 md:mt-8">

      <div className='mb-[10px] md:w-[58.33%] m-auto flex-col text-center'>
        <h3 className='text-[12px] md:text-[16px] font-bold text-[#a83679] mb-[20px]'>
          Step By Step IVF Process
        </h3>
        <div className='flex flex-col justify-center items-center gap-5'>
          <h1 className='text-[#491031] mb-[18px] font-[700] text-[24px] md:text-[42px] leading-[1.25em]'>
            Turning your dream of parenthood into reality, one step at a time.
          </h1>
        </div>
      </div>


      <section className="bg-[url('/assets/props/line.svg')] flex flex-wrap justify-center m-auto gap-6 pt-5">
        <div className="grid grid-cols-2 items-end md:grid-cols-4 w-full">
          {steps.map((item, key) => (
            <div
              key={key}
              className={`w-full transition-transform transform sm:-translate-x-4 ${key % 2 === 0
                ? 'translate-y-0'
                : 'md:translate-y-3 md:mt-[60px]'
                }`}
            >
              <div className=' flex flex-col justify-center items-center mb-[40px] gap-2 '>
                <div className={`h-[50px] sm:h-[100px] w-[50px] sm:w-[100px] rounded-full ${item.bg} relative overflow-hidden`}>
                  <h1 className='text-[#0000004d] absolute z-[5] right-0 sm:-right-[5px] sm:top-2 font-semibold text-5xl sm:text-[80px]'>
                    {key + 1}
                  </h1>
                  <div className='flex justify-center z-[999] items-center m-auto h-full text-white text-4xl font-thin'>
                    {item.icon}
                  </div>

                </div>
                <h1 className='text-secondary font-[600] text-lg md:text-[22px] text-center'>
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </section >
    </div>
  );
};

export default IVFProcess;

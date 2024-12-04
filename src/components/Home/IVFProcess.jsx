import React from "react";

const IVFProcess = () => {
  const steps = [
    {
      title: "Ovarian Stimulation",
      description:
        "The woman receives fertility medications to stimulate multiple egg production.",
    },
    {
      title: "Egg Retrieval",
      description:
        "Eggs are collected from the ovaries using a minimally invasive procedure.",
    },
    {
      title: "Sperm Collection",
      description:
        "The male partner provides a sperm sample or donor sperm is used.",
    },
    {
      title: "Fertilization",
      description:
        "Eggs and sperm are combined in the laboratory to facilitate fertilization.",
    },
    {
      title: "Embryo Culture",
      description:
        "Fertilized eggs (embryos) are cultured for a few days to develop further.",
    },
    {
      title: "Transfer",
      description:
        "One or more embryos are carefully placed into the woman's uterus.",
    },
    {
      title: "Support",
      description: "Hormonal support is given to aid embryo implantation.",
    },
    {
      title: "Pregnancy Test",
      description:
        "A blood test is performed to determine if pregnancy has occurred.",
    },
  ];

  return (
    <div className="bg-[#ffffff] border-black-200 p-8 shadow-lg max-w-3xl mx-auto md:my-4 md:mt-8">
      <h1 className="text-[#A9377A] text-xl font-bold text-center mb-6">
        IVF Process Step by Step
      </h1>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-[#A9377A] font-semibold">{step.title}</h2>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IVFProcess;

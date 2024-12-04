import React from 'react';
import { FaHeartbeat, FaUserMd, FaChild, FaFlask, FaMicroscope, FaStethoscope, FaFemale, FaCogs, FaBaby, FaSyringe, FaLightbulb, FaSnowflake, FaUsers, FaDna, FaVials } from 'react-icons/fa';

const services = [
  { id: 1, title: "Anesthesia", subtitle: "(बेहोशी)", icon: <FaStethoscope /> },
  { id: 2, title: "General Surgery", subtitle: "(जनरल सर्जरी)", icon: <FaUserMd /> },
  { id: 3, title: "General Medicine", subtitle: "(सामान्य चिकित्सा)", icon: <FaHeartbeat /> },
  { id: 4, title: "Obstetric & Gynaecology", subtitle: "(स्त्री और प्रसूति रोग)", icon: <FaFemale /> },
  { id: 5, title: "Pediatrics & Neonatology", subtitle: "(बाल रोग व नवजात गहन चिकित्सा)", icon: <FaChild /> },
  { id: 6, title: "Pathology", subtitle: "(पैथोलॉजी)", icon: <FaMicroscope /> },
  { id: 7, title: "Sonology", subtitle: "(सोनोलोजी)", icon: <FaFlask /> },
  { id: 8, title: "Physiotherapy", subtitle: "(फिज़ियोथेरेपी)", icon: <FaCogs /> },
  { id: 9, title: "IVF", subtitle: "(आईवीएफ)", icon: <FaBaby /> },
  { id: 10, title: "ICSI", subtitle: "(इक्सी)", icon: <FaSyringe /> },
  { id: 11, title: "Laser Assisted Hatching", subtitle: "(लेजर असिस्टेड हैचिंग)", icon: <FaLightbulb /> },
  { id: 12, title: "Laparoscopy & Hysteroscopy", subtitle: "(लेपरोस्कॉपी एवं हायस्टेरोस्कॉपी)", icon: <FaMicroscope /> },
  { id: 13, title: "Cryopreservation", subtitle: "(क्रायोप्रिज़र्वेशन)", icon: <FaSnowflake /> },
  { id: 14, title: "Donor Program", subtitle: "(डोनर प्रोग्राम)", icon: <FaUsers /> },
  { id: 15, title: "PGT", subtitle: "(पीजीटी)", icon: <FaDna /> },
  { id: 16, title: "Infertility Test", subtitle: "(निःसंतानता परामर्श एवं जाँच)", icon: <FaVials /> },
];


const HomeServices = () => {
  return (
    <div className="bg-[#f8e9f2] p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <div className="text-[#A9377A] text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;

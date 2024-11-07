import React from "react";

const ContactDetails = () => {
  return (
    <div>
      {/* Map Section */}
      <div className="mx-10 p-11" >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.178403704428!2d82.79931207485603!3d25.764670208483484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39903100115d4b9d%3A0x48699baaa5b89ac1!2sDr%20Shakuntala%20Ayurvedic%20College%20Jaunpur!5e0!3m2!1sen!2sin!4v1730966029906!5m2!1sen!2sin"
          width="100%"
          height="450"
         
          allowFullScreen=""
        
        ></iframe>
      </div>

      {/* Contact Information Section */}
      <div className="flex flex-row justify-between p-11  w-[70%] items-center m-auto relative ">
        <div className="">
          <h1 className="font-bold text-2xl mb-4">Contact Information</h1>
          <p> <span className="font-medium">ADDRESS:</span> 1224 Woodmont LN. MK #2255, Atlanta, GA, 20304</p>
          <p><span className="font-medium">EMAIL US:</span> info@bexi.com</p>
          <p><span className="font-medium">PHONE: </span>1-885-665-2024</p>
        </div>

        {/* Opening Hours Section */}
        <div className=' before:content-["_"] before:absolute before:top-0 before:left-52 before:w-[1px] before:h-full before:bg-gray-500'>
          <h1>Opening Hours</h1>
          <p>Saturday–Thursday: 8:00 AM – 8:00 PM</p>
          <p>Saturday–Thursday: 10:00 AM – 10:00 PM</p>
          <p>Sunday: 8:00 AM – 3:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

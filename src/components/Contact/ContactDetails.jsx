import React from "react";

const ContactDetails = () => {
  return (
    <div>
      {/* Map Section */}
      <div className="mx-10 md:p-11" >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28747.6358158354!2d82.71086700000001!3d25.755548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39903baeee55acd9%3A0xcde86bba96cccc5a!2sIndira%20IVF%20and%20Shakuntala%20IVF%20Centre-%20Best%20Fertility%20Centre%20in%20Jaunpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1733313162526!5m2!1sen!2sin"
          width="100%"
          height="450"
         
          allowFullScreen=""
        
        ></iframe>
      </div>

      {/* Contact Information Section */}
      <div className="flex md:flex-row flex-col justify-between md:p-11  md:w-[70%] items-center m-auto relative ">
        <div className="">
          <h1 className="font-bold text-2xl md:mb-4 p-2">Contact Information</h1>
          <p className="md:w-96 p-3"> <span className="font-medium">ADDRESS:</span> 702, PANCHAHATIA AZAMGARH ROAD, Vishesharpur, Jaunpur, Uttar Pradesh 222001</p>
          <p><span className="font-medium p-3">EMAIL US:</span> info@bexi.com</p>
          <p><span className="font-medium p-3">PHONE: </span>1-885-665-2024</p>
        </div>

        {/* Opening Hours Section */}
        <div className=''>
          <h1 className="font-bold text-2xl mb-4">Opening Hours</h1>
          <p>Saturday–Thursday: 8:00 AM – 8:00 PM</p>
          <p>Saturday–Thursday: 10:00 AM – 10:00 PM</p>
          <p>Sunday: 8:00 AM – 3:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

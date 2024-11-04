import React from 'react';
import Slider from 'react-slick';
import { FaQuoteRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Ralph Gonzales',
    role: 'Patient',
    photo: 'https://via.placeholder.com/100', // Replace with actual image URL
    text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.',
  },
  {
    name: 'Jane Doe',
    role: 'Client',
    photo: 'https://via.placeholder.com/100', // Another placeholder or actual URL
    text: 'Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust the delay (in milliseconds) as desired
    arrows: false, // Hide the default arrows
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://www.shutterstock.com/image-photo/smiling-brunette-female-doctor-talking-600nw-2323460383.jpg')",
      }}
    >
      <div className="absolute top-8 left-8 max-w-lg bg-white p-8 shadow-md rounded-lg border-red-900">
        <h3 className="text-blue-700 text-2xl font-semibold mb-2">OUR CLIENTS</h3>
        <h2 className="text-2xl font-bold mb-4">Our happy clients say about us</h2>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-700 italic relative">
                {/* <FaQuoteRight className="text-blue-500 text-3xl absolute right-0" /> */}
                “{testimonial.text}”
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

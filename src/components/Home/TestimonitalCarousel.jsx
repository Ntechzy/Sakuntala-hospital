import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { testimonials } from './data';
// import Headings from '../ui_element/Heading';
// import { testimonials } from '../../data/testimonial';


const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // For screens smaller than 768px
                settings: {
                    slidesToShow: 1, // Show only one slide
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className='bg-[#f8e2f2] py-[100px]'>

            <div
                className="w-full relative md:max-w-[1140px] sm:max-w-[720px] m-auto"

            >
                <div>

                    {/* <Headings title="We served over 5000+ Patients" /> */}
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">We served over 5000+ Patients</h2>
                </div>

                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-[30px] mb-[20px] rounded-lg bg-white">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.photo}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-black text-lg">{testimonial.name}</h4>
                                    <p className="text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>

                            <p className="font-[18px] leading-[30px] relative">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
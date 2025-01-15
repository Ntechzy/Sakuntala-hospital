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
        <div className='sm:py-[100px]'>

            <div
                className="w-full relative md:max-w-[1140px] sm:max-w-[720px] m-auto"

            >
                <div className='mb-[55px] md:w-[58.33%] m-auto flex-col text-center '>
                    <h3 className='text-[12px] md:text-[16px] font-bold text-[#2b8bb1] mb-[20px]'>
                        Testimonials
                    </h3>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <h1 className='text-[#0a2042] mb-[18px] font-[700] text-[24px] md:text-[42px] leading-[1.25em]'>
                            We provide a range of services for every medical need.
                        </h1>
                    </div>
                </div>

                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-[30px] mb-[20px] rounded-lg bg-white border-2">
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
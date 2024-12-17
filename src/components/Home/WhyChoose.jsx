import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const WhyChoose = () => {
    const features = [
        {
            id: 1,
            text: "Use of Latest Technology",
            description: "World-class laboratories with 24X7 Cloud Monitoring."
        },
        {
            id: 2,
            text: "Trusted Fertility Chain",
            description: "Awarded by Economic Times, Zee Hindustan, Inext Dainik Jagran, India New."
        },
        {
            id: 3,
            text: "Experienced Fertility Doctors",
            description: "Using Automated RI witness technology to avoid sperm or egg mix-up."
        }
    ];

    // Sample images for carousel, you can replace this with your actual JSON data
    const images = [
        { id: 1, src: "/assets/technology.avif", alt: "Hospital Room" },
        { id: 2, src: "/assets/operation.avif", alt: "Advanced Equipment" },
        { id: 3, src: "/assets/whychoose3.avif", alt: "Doctors Team" }
    ];

    // Slick settings for the carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <div className="relative flex flex-col md:flex-row w-full md:p-5 bg-[#ffffff]">
            {/* Left section with Features */}
            <div className="flex flex-col w-full md:w-[70%] p-6">
                {/* Wrapper div for all the content */}
                <div className="z-10">
                    <h1 className="font-bold text-4xl text-gray-900">Why Choose Us</h1>
                    <p className="font-semibold text-lg text-gray-800 mt-2">
                        Your health is our priority. We provide exceptional care and support for every patient.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Our hospital is equipped with the latest technology and staffed by experienced professionals dedicated to your health and well-being.
                    </p>
                </div>

                <div className="md:ml-8 flex flex-col space-y-4 mt-6">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex flex-row items-start space-x-4">
                            <span className="flex justify-center items-center md:font-bold shrink-0 md:text-2xl text-xl md:w-16 md:h-16 w-11 h-11 text-center rounded-full md:pt-2 bg-[#A83679] text-white shadow">
                                {feature.id}
                            </span>
                            <div>
                                <span className="text-lg text-[#A83679] font-semibold">{feature.text}</span>
                                <p className="text-gray-700">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right section with Carousel */}
            <div className="w-full md:w-[30%] md:flex-1 p-6">
                <Slider {...settings}>
                    {images.map((image) => (
                        <div key={image.id}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-80 object-cover rounded-lg shadow-md"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default WhyChoose;

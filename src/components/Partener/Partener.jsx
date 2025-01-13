import React from "react";
import Slider from "react-slick";
import brand1 from "../assets/partener/1.png";
import brand2 from "../assets/partener/2.png";
import brand3 from "../assets/partener/3.png";
import brand4 from "../assets/partener/4.png";
import brand5 from "../assets/partener/5.png";

const Partener = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div
      data-aos="zoom-out"
      className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-gray-600"
    >
      <div className="container mx-auto px-4">
        <Slider {...settings} className="partner-slider">
          {[brand1, brand2, brand3, brand4, brand5].map((brand, index) => (
            <div key={index} className="flex items-center justify-center h-24">
              <img 
                src={brand} 
                alt={`Brand ${index + 1}`} 
                className="w-[80px] object-contain mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Add this CSS either in your stylesheet or as a style tag */}
      <style>{`
        .partner-slider .slick-track {
          display: flex !important;
          align-items: center !important;
        }
        
        .partner-slider .slick-slide {
          height: inherit !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
      `}</style>
    </div>
  );
};

export default Partener;
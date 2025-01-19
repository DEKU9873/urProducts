import React from "react";
import Slider from "react-slick";
import brand1 from "../assets/partener/1.png";
import brand2 from "../assets/partener/2.png";
import brand3 from "../assets/partener/3.png";
import brand4 from "../assets/partener/4.png";
import brand5 from "../assets/partener/5.png";
import brand6 from "../assets/partener/6.png";
import brand7 from "../assets/partener/7.png";
import brand8 from "../assets/partener/8.png";
import brand9 from "../assets/partener/9.png";
import brand10 from "../assets/partener/10.png";
import brand11 from "../assets/partener/11.png";
import brand12 from "../assets/partener/12.png";
import brand13 from "../assets/partener/13.png";
import brand14 from "../assets/partener/14.png";
import brand15 from "../assets/partener/15.png";
import brand16 from "../assets/partener/16.png";
import brand17 from "../assets/partener/17.png";
import brand19 from "../assets/partener/19.png";
import brand20 from "../assets/partener/20.png";
import brand21 from "../assets/partener/21.png";
import brand22 from "../assets/partener/22.png";
import brand24 from "../assets/partener/24.png";
import brand25 from "../assets/partener/25.png";
import brand26 from "../assets/partener/26.png";

const partners = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
  brand16,
  brand17,
  brand19,
  brand20,
  brand21,
  brand22,
  brand24,
  brand25,
  brand26,
];

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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div
      data-aos="zoom-out"
      className="py-8 mt-24 bg-gray-200 dark:bg-gray-400"
    >
      <div className="mx-auto px-4">
        <Slider {...settings} className="partner-slider">
          {partners.map((brand, index) => (
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

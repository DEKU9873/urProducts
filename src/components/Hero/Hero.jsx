import React from "react";
import Slider from "react-slick";
import Image1 from "../assets/systems/Logo.svg";
import Image2 from "../assets/systems/palm recognition.png";
import Image3 from "../assets/systems/ERP.png";
import Button from "../Shared/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate

const HeroSlide = [
  {
    id: 1,
    image: Image2,
    title: "UR Palm Solution",
    titleAr: "نظام التحقق الحيوي اور",
    link: "/urpalm",
    scale: "sm:scale-105 lg:scale-150",
  },
  {
    id: 2,
    image: Image1,
    title: "National Bank of Obsolete Materials",
    titleAr: "البنك الوطني للمواد الراكدة",
    link: "/nationalbank",
    scale: "sm:scale-105 lg:scale-120",
  },
  {
    id: 3,
    image: Image3,
    title: "ERP System",
    titleAr: " ERP نظام ",
    link: "/ERP",
    scale: "sm:scale-105 lg:scale-120",
  },
];

const Hero = () => {
  const { i18n } = useTranslation(); // استخدم i18n لتحديد اللغة
  const navigate = useNavigate(); // استخدم useNavigate للتنقل

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div id="/" className="mx-3 pt-2">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px]
      sm:min-h-[650px] hero-bg-colo flex justify-center
      items-center"
      >
        <div className="container pb-8 sm:pb-0">
          {/* Hero Section */}
          <Slider {...settings}>
            {HeroSlide.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div
                    className="flex flex-col justify-center
                  gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1
                  relative z-10"
                  >
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {i18n.language === "ar" ? data.titleAr : data.title}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        text={
                          i18n.language === "ar"
                            ? "رؤية التفاصيل"
                            : "See Details"
                        }
                        bgColor="bg-primary"
                        textColor="text-white"
                        handler={() => navigate(data.link)}
                      />
                    </div>
                  </div>
                  {/* Img section */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.image}
                        alt=""
                        className={`w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] ${data.scale}  
                  object-contain mx-auto
                  drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;

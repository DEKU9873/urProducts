import React from "react";
import { useTranslation } from "react-i18next"; 
import Heading from "../Shared/Heading";
import img1 from "../assets/allaplication/1.jpg";
import img2 from "../assets/allaplication/2.jpg";
import img3 from "../assets/allaplication/3.jpg";
import img4 from "../assets/allaplication/4.jpg";
import img5 from "../assets/allaplication/5.jpg";
import img6 from "../assets/allaplication/6.jpg";
import { Link, useNavigate } from "react-router-dom";
const BiogData = [
  {
    id: 1,
    dec: "GPS-Based logistics tracking applications",
    decAr: " تطبيقات تتبع الخدمات اللوجستية عبر GPS",
    img: img1,
    aosDelay: "0",
  },
  {
    id: 2,
    dec: "Applications and programs for electronic payment operations of all kinds, subscriptions and payment lists",
    decAr:
      "التطبيقات والبرامج للعمليات الدفع الإلكتروني بجميع أنواعها، الاشتراكات وقوائم الدفع",
    img: img2,
    aosDelay: "100",
  },
  {
    id: 3,
    dec: "Applications and programs for electronic marketing, order management, distribution, sales and e-commerce",
    decAr:
      "التطبيقات والبرامج للتسويق الإلكتروني، إدارة الطلبات، التوزيع، المبيعات والتجارة الإلكترونية",
    img: img3,
    aosDelay: "200",
  },
  {
    id: 4,
    dec: "Cybersecurity and data/information security software systems.",
    decAr: "برامجيات الامن السيبراني وامن البيانات والمعلومات.",
    img: img4,
    aosDelay: "200",
  },
  {
    id: 5,
    dec: "Applications and programs for all transactions of the Ministry of Justice and the courts",
    decAr: "التطبيقات والبرامج لجميع معاملات وزارة العدل والمحاكم",
    img: img5,
    aosDelay: "200",
  },
  {
    id: 6,
    dec: "Applications and programs for centralized connectivity of parking lots, vehicle tracking and tracking, and port management.",
    decAr:
      "التطبيقات والبرامج للربط المركزي لمواقف السيارات، تتبع المركبات وإدارتها، وإدارة الموانئ.",
    img: img6,
    aosDelay: "200",
  },
];

const Biogs = () => {
  const { t, i18n } = useTranslation(); 
  const navigate = useNavigate();
  return (
    <div className="my-12">
      <div className="container">
        {/* Header section */}
        <Heading
          title={t("Heading.Application and Software")} 
          subtitle={t("Subtitle.Explore our Application and Software")} 
        />
        {/* Biogs section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6
        gap-y-8 sm:gap-4 md:gap-7"
        >
          {/* Biog Card */}
          {BiogData.map((data, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={index}
              className="bg-white dark:bg-gray-900"
            >
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.img}
                  alt=""
                  className="w-full h-[220px] object-cover
                    rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p
                  className="line-clamp-2 text-sm text-balck
                    dark:text-gray-400"
                >
                  {i18n.language === "ar" ? data.decAr : data.dec}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Read More Button */}
        <div className="flex justify-center items-center text-center mt-8">
          <button
            onClick={() => {
              navigate("/allaplication");
            }}
          >
            <div className="flex justify-center items-center px-8 py-3 w-[200px] bg-primary text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
              {t("View More")}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Biogs;

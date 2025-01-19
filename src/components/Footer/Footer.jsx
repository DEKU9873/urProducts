import React from "react";
import {
  FaLocationArrow,
  FaMobileAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Logo from "../assets/logo.png";

const FooterLinks = [
  {
    title: {
      en: "Home",
      ar: "الرئيسية"
    },
    link: "/#",
  },
  {
    title: {
      en: "About Us",
      ar: "معلومات عنا"
    },
    link: "/#About Us",
  },
  {
    title: {
      en: "Our Services",
      ar: "خدماتنا"
    },
    link: "/#Our Services",
  },
  {
    title: {
      en: "Applications and software",
      ar: "التطبيقات والبرامج"
    },
    link: "/#Applications and software",
  },
];

const Footer = () => {
  const { t, i18n } = useTranslation(); // استخدام الترجمة

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-6">
          {/* Address Section */}
          <div className="col-span-4 grid grid-cols-1 gap-8 sm:grid-cols-4 md:pl-10">
            <div className="col-span-2 sm:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                {i18n.language === "ar" ? "العنوان" : "Address"} {/* الترجمة حسب اللغة الحالية */}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <FaLocationArrow className="mt-1 flex-shrink-0" />
                  <p className="text-m">{i18n.language === "ar" ? "تفاصيل العنوان" : "Address Details"}</p>
                </div>

                {/* Phone Numbers */}
                <div className="space-y-2">
                  {["+9647800009498", "+9647700009498", "5959"].map((phone) => (
                    <div
                      key={phone}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <FaMobileAlt className="flex-shrink-0" />
                      <p className="text-m hover:text-gray-900 dark:hover:text-white transition-colors">
                        {phone}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <MdOutlineMail className="flex-shrink-0" />
                  <p className="text-m hover:text-gray-900 dark:hover:text-white transition-colors">
                    info@urproducts.iq
                  </p>
                </div>

                {/* Social Media */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {[ 
                    { Icon: FaInstagram, color: "hover:text-[#E4405F]", link: "https://www.instagram.com/ur_products__/" },
                    { Icon: FaFacebook, color: "hover:text-[#1877F2]", link: "https://www.facebook.com/Ur.company12" },
                    { Icon: FaLinkedin, color: "hover:text-[#0A66C2]", link: "https://www.linkedin.com/in/ur-products-66b475258/" },
                    { Icon: FaTiktok, color: "hover:text-black dark:hover:text-white", link: "https://www.tiktok.com/@ur_products._?lang=en" },
                    { Icon: FaYoutube, color: "hover:text-[#FF0000]", link: "https://www.youtube.com/channel/UCqxvnDwzJC6x0coluorZf2g" },
                  ].map(({ Icon, color, link }, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 transition-all duration-300 ${color} hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-2 sm:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                {i18n.language === "ar" ? "الروابط السريعة" : "Quick Links"}
              </h2>
              <ul className="space-y-4">
                {FooterLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-m"
                    >
                      {i18n.language === "ar" ? link.title.ar : link.title.en} {/* اختيار الترجمة حسب اللغة */}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logo Section */}
          <div className="col-span-2 flex items-center justify-center">
            <img
              src={Logo}
              alt="logo"
              className="max-w-[300px] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa"; // استيراد أيقونة Globe
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // استيراد useTranslation

const Menulinks = [
  {
    id: 1,
    name: "Home",
    nameAr: "الصفحة الرئيسية", // الترجمة العربية
    link: "/#",
  },
  {
    id: 2,
    name: "About US",
    nameAr: "عن الشركة", // الترجمة العربية
    link: "/#About US",
  },
  {
    id: 3,
    name: "Our Service",
    nameAr: "خدماتنا", // الترجمة العربية
    link: "/#Our Service",
  },
  {
    id: 4,
    name: "Application and Software",
    nameAr: "التطبيقات والبرمجيات", // الترجمة العربية
    link: "/#about",
  },
  {
    id: 5,
    name: "Data Center Service",
    nameAr: "خدمات مركز البيانات", // الترجمة العربية
    link: "/#Data Center Service",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "UR Palm",
    nameAr: "نظام بصمة الشرايين اور", // الترجمة العربية
    link: "/urpalm",
  },
  {
    id: 2,
    name: "National Bank for Obsolete Materials",
    nameAr: "البنك الوطني للمواد البالية", // الترجمة العربية
    link: "/nationalbank",
  },
];

const Navbar = () => {
  const { t, i18n } = useTranslation(); // استخدام useTranslation

  // دالة لتغيير اللغة
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log("Current language:", i18n.language); // تحقق من اللغة الحالية
  };

  // تحديد الأيقونة بناءً على اللغة
  const isArabic = i18n.language === "ar";

  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white
    duration-200 relative z-40"
    >
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <Link
              to="/"
              className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl"
            >
              {t("Logo")}
            </Link>
          </div>

          {/* Menu Items Section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              {Menulinks.map((data, index) => (
                <li key={index}>
                  <Link
                    to={data.link}
                    className="inline-block px-4 font-semibold text-gray-500
        hover:text-black dark:hover:text-white
        duration-200" 
                  >
                    {t(isArabic ? data.nameAr : data.name)} {/* استخدام الترجمة */}
                  </Link>
                </li>
              ))}
              {/* Dropdown */}
              <li className="relative cursor-pointer group">
                <a
                  href="#"
                  className="flex items-center gap-[2px] 
                  font-semibold text-gray-500 dark:hover:text-white py-2"
                >
                  {t(isArabic ? "أنظمة" : "Systems")} {/* استخدام الترجمة */}
                  <span>
                    <FaCaretDown
                      className="group-hover:rotate-180 
                    duration-300"
                    />
                  </span>
                </a>
                {/* Dropdown Links */}
                <div
                  className="absolute z-[9999] hidden group-hover:block w-[200px]
                  rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black 
                  dark:text-white "
                >
                  <ul className="space-y-2">
                    {DropdownLinks.map((data, index) => (
                      <li key={index}>
                        <Link
                          className="text-gray-500 hover:text-black
                        dark:hover:text-white duration-200 inline-block 
                        w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                          to={data.link}
                        >
                          {t(isArabic ? data.nameAr : data.name)} {/* استخدام الترجمة */}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Translation Icon */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => changeLanguage(isArabic ? "en" : "ar")} // التبديل بين اللغتين
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <FaGlobe size={20} /> {/* أيقونة Globe */}
            </button>

            {/* Dark Mode Section */}
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

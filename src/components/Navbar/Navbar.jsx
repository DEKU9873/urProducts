import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';  // استخدام HashLink
import { useTranslation } from "react-i18next";
import translationLogo from "../assets/translation.png";

const Menulinks = [
  {
    id: 1,
    name: "Home",
    nameAr: "الصفحة الرئيسية",
    link: "/#home",
  },
  {
    id: 2,
    name: "About Us",
    nameAr: "عن الشركة",
    link: "/#about",
  },
  {
    id: 3,
    name: "Our Service",
    nameAr: "خدماتنا",
    link: "/#service",  // تعديل الرابط ليكون معرفًا لعنصر
  },
  {
    id: 4,
    name: "Application and Software",
    nameAr: "التطبيقات والبرمجيات",
    link: "/#application",
  },
  {
    id: 5,
    name: "Data Center Service",
    nameAr: "خدمات مركز البيانات",
    link: "/#datacenter",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "National Bank for Obsolete Materials",
    nameAr: "البنك الوطني للمواد الراكدة",
    link: "/nationalbank",
  },
  {
    id: 2,
    name: "UR Palm Solution",
    nameAr: "نظام التحقق الحيوي اور",
    link: "/urpalm",
  },
  {
    id: 3,
    name: "ERP System",
    nameAr: "نظام ERP",
    link: "/ERP",
  },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log("Current language:", i18n.language);
  };

  const isArabic = i18n.language === "ar";

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 dark:text-white
        duration-200 z-50 "
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
                {Menulinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block px-4 font-semibold text-[17px] text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {t(isArabic ? data.nameAr : data.name)}
                    </Link>
                  </li>
                ))}
                {/* Dropdown */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] 
                    font-semibold text-gray-500 dark:hover:text-white py-2 text-[17px]"
                  >
                    {t(isArabic ? "أنظمة" : "Systems")}
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
                    dark:text-white"
                  >
                    <ul className="space-y-2">
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <Link
                            className="text-gray-500 hover:text-black
                            dark:hover:text-white duration-200 inline-block 
                            w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            to={data.link}
                          >
                            {t(isArabic ? data.nameAr : data.name)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li >
                    <Link
                      to="#contact"
                      className="inline-block px-4 font-semibold text-[17px] text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {t("Heading.Contact Us")}
                    </Link>
                  </li>
              </ul>
            </div>

            {/* Translation Icon */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => changeLanguage(isArabic ? "en" : "ar")}
                className="px-4 py-2"
              >
                <img
                  src={translationLogo}
                  alt="Translation"
                  className="w-10 invert dark:invert-0"
                />
              </button>

              {/* Dark Mode Section */}
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Spacer div to prevent content from going under navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;

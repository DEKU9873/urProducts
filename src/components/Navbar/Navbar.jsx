import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri"; // إضافة أيقونة القائمة
import { IoClose } from "react-icons/io5"; // إضافة أيقونة الإغلاق
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import translationLogo from "../assets/translation.png";

import logo from "../assets/logo.png";

const Menulinks = [
  {
    id: 1,
    name: "Home",
    nameAr: "الصفحة الرئيسية",
    link: "/#",
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
    link: "/#service",
  },
  {
    id: 4,
    name: "Application and Software",
    nameAr: "التطبيقات والبرمجيات",
    link: "/#application",
  },
  {
    id: 5,
    name: "Data Center",
    nameAr: "مركز البيانات",
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSystemsOpen, setIsSystemsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log("Current language:", i18n.language);
  };

  const isArabic = i18n.language === "ar";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSystems = () => {
    setIsSystemsOpen(!isSystemsOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 dark:text-white duration-200 z-50">
        <div className="py-4">
          <div className="mx-8 flex justify-between items-center">
            {/* Logo Section */}
            <div>
              <Link to="/">
                <img src={logo} alt="Logo" className="h-12 sm:h-14 sm:mr-12" />
              </Link>
            </div>

            {/* Desktop Menu */}
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
                {/* Desktop Dropdown */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2 text-[17px]"
                  >
                    {t(isArabic ? "أنظمة" : "Systems")}
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <Link
                            className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            to={data.link}
                          >
                            {t(isArabic ? data.nameAr : data.name)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    to="/#contact"
                    className="inline-block px-4 font-semibold text-[17px] text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  >
                    {t("Heading.Contact Us")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => changeLanguage(isArabic ? "en" : "ar")}
                className="px-2 py-2"
              >
                <img
                  src={translationLogo}
                  alt="Translation"
                  className="w-8 invert dark:invert-0"
                />
              </button>
              <DarkMode />

              {/* Hamburger Menu Button */}
              <button className="lg:hidden text-2xl" onClick={toggleMenu}>
                {isMenuOpen ? <IoClose /> : <RiMenu3Fill />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-[4.5rem] left-0 w-full bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-[150%]"
          }`}
        >
          <ul className="p-4 space-y-4">
            {Menulinks.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  className="block font-semibold text-[17px] text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(isArabic ? data.nameAr : data.name)}
                </Link>
              </li>
            ))}
            {/* Mobile Systems Dropdown */}
            <li>
              <button
                onClick={toggleSystems}
                className="w-full text-left flex items-center justify-between font-semibold text-gray-500 dark:hover:text-white text-[17px]"
              >
                {t(isArabic ? "أنظمة" : "Systems")}
                <FaCaretDown
                  className={`transition-transform duration-300 ${
                    isSystemsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`mt-2 space-y-2 ${
                  isSystemsOpen ? "block" : "hidden"
                }`}
              >
                {DropdownLinks.map((data) => (
                  <Link
                    key={data.id}
                    to={data.link}
                    className="block pl-4 py-2 text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(isArabic ? data.nameAr : data.name)}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link
                to="/#contact"
                className="block font-semibold text-[17px] text-gray-500 hover:text-black dark:hover:text-white duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("Heading.Contact Us")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Spacer div */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;

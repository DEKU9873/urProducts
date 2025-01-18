import React from "react";
import { FaLocationArrow, FaMobileAlt, FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Logo from "../assets/logo.png"


const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About Us",
    link: "/#About Us",
  },
  {
    title: "Our Services",
    link: "/#Our Services",
  },
  {
    title: "Applications and software",
    link: "/#Applications and software",
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-6">
          {/* Address Section */}
          <div className="col-span-4 grid grid-cols-1 gap-8 sm:grid-cols-4 md:pl-10">
            <div className="col-span-2 sm:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                {t("Footer.Address")}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <FaLocationArrow className="mt-1 flex-shrink-0" />
                  <p className="text-m">{t("Footer.Address Details")}</p>
                </div>
                
                {/* Phone Numbers */}
                <div className="space-y-2">
                  {["+9647800009498", "+9647700009498", "5959"].map((phone) => (
                    <div key={phone} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
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
                    { Icon: FaInstagram, color: "hover:text-[#E4405F]" },
                    { Icon: FaFacebook, color: "hover:text-[#1877F2]" },
                    { Icon: FaLinkedin, color: "hover:text-[#0A66C2]" },
                    { Icon: FaTiktok, color: "hover:text-black dark:hover:text-white" },
                    { Icon: FaYoutube, color: "hover:text-[#FF0000]" },
                    { Icon: FaTwitter, color: "hover:text-[#1DA1F2]" },
                  ].map(({ Icon, color }, index) => (
                    <a
                      key={index}
                      href="#"
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
                {t("Footer.Quick Links")}
              </h2>
              <ul className="space-y-4">
                {FooterLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-m"
                    >
                      {link.title}
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
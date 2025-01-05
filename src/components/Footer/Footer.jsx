import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#About",
  },
  {
    title: "Contact",
    link: "/#Contact",
  },
  {
    title: "Blog",
    link: "/#Blog",
  },
];
const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest
            text-2xl  
            sm:text-3xl"
            >
              URProduct
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae a
              accusantium illum
            </p>
            <p className="text-gray-500 mt-4">Made with ❤️ by URProduct</p>
            <a
              href=""
              target="_blank"
              className="inline-block bg-primary/90 text-white
            py-2 px-4 text-sm rounded-full"
            >
              visit our youtbe channel
            </a>
          </div>

          {/* fotter links */}
          <div
            className="col-span-2 grid grid-cols-2
          sm:grid-cols-4 md:pl-10"
          >
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 ">
                Importent Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black
                            duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 ">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black
                            duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company address */}
            <div className=" py-8 px-4 col-span-2 sm:col-span-auto">
            <h1 className="text-xl font-bold sm:text-left mb-3 ">
                Address
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>123456789</p>
                </div>
                {/* social media links */}
                <div className="flex items-center gap-3 mt-6">
                    <a href="">
                        <FaInstagram className="text-3xl 
                        hover:text-primary duration-300"/>
                    </a>
                    <a href="">
                        <FaFacebook className="text-3xl 
                        hover:text-primary duration-300"/>
                    </a>
                    <a href="">
                        <FaLinkedin className="text-3xl 
                        hover:text-primary duration-300"/>
                    </a>
                </div>
              </div>
            </div>    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

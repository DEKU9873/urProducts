import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Menulinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 1,
    name: "About US",
    link: "/#About US",
  },
  {
    id: 3,
    name: "Our Service",
    link: "/#Our Service",
  },

  {
    id: 4,
    name: "Application and Software",
    link: "/#about",
  },
  {
    id: 5,
    name: "Data Center Service",
    link: "/#Data Center Service",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "UR Palm",
    link: "/#",
  },
  {
    id: 2,
    name: "National Bank for Obsolete Materials",
    link: "/#",
  },
];
const Navbar = () => {
  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white
    duration-200 relative z-40"
    >
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <div>
              <Link
                to="/"
                className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl"
              >
                URProduct
              </Link>
            </div>
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
                    {data.name}
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
                  Systems
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
                        <a
                          className="text-gray-500 hover:text-black
                             dark:hover:text-white duration-200 inline-block 
                             w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Dark Mode Section */}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

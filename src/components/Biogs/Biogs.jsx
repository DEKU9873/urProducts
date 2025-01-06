import React from "react";
import Heading from "../Shared/Heading";
import img1 from "../assets/allaplication/1.jpg";
import img2 from "../assets/allaplication/2.jpg";
import img3 from "../assets/allaplication/3.jpg";
import { Link } from "react-router-dom";

const BiogData = [
  {
    id: 1,
    dec: "Applications and programs for managing warehouses, supply and shipping operations, and GPS tracking of logistics services",
    img: img1,
    aosDelay: "0",
  },
  {
    id: 2,
    dec: "Applications and programs for electronic payment operations of all kinds, subscriptions and payment lists",
    img: img2,
    aosDelay: "100",
  },
  {
    id: 3,
    dec: "Applications and programs for electronic marketing, order management, distribution, sales and e-commerce",
    img: img3,
    aosDelay: "200",
  },
];

const Biogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header section */}
        <Heading
          title="Application and Software"
          subtitle="Explore our Application and Software"
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
                {/* <p className="font-bold line-clamp-1">{data.title}</p> */}
                <p
                  className="line-clamp-2 text-sm text-gray-600
                    dark:text-gray-400"
                >
                  {data.dec}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Read More Button */}
        <Link to={"/allaplication"}>
          <div className="flex justify-center items-center text-center mt-8">
            <div className="flex justify-center items-center px-8 py-3 w-[200px] bg-primary text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
              View More
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Biogs;

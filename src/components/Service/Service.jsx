import React from "react";
import { FaCarSide } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    desc: "From all orders over $50.00",
  },
  {
    id: 2,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Support 24/7",
    desc: "Shop with an expert",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Money back",
    desc: "100% money back guarantee",
  },
  {
    id: 4,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    desc: "100% secure payment",
  },
];
const Service = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 ">
          {ServiceData.map((data, index) => (
            <div
              key={data.id}
              className="flex flex-col items-start sm:flex-row
              gap-4"
            >
              {data.icon}
              <div className="">
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.desc}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Service;

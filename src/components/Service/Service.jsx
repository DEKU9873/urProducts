import React from "react";
import { GrCloudSoftware } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { MdEngineering } from "react-icons/md";
import { MdOutlineNetworkWifi3Bar } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { LuHandHelping } from "react-icons/lu";
import Heading from "../Shared/Heading";

const ServiceData = [
  {
    id: 1,
    icon: <GrCloudSoftware className="text-4xl md:text-5xl text-primary" />,
    title: "Modern software manufacturing",
    desc: "According to the needs of the beneficiaries",
  },
  {
    id: 2,
    icon: <GoProjectSymlink className="text-4xl md:text-5xl text-primary" />,
    title: "Implementation of integrated projects",
    desc: "Specializing in the transfer of knowledge and modern technology",
  },
  {
    id: 3,
    icon: <MdEngineering className="text-4xl md:text-5xl text-primary" />,
    title: "Providing training services",
    desc: "covering the fields of information and communication technology",
  },
  {
    id: 4,
    icon: <MdOutlineNetworkWifi3Bar className="text-4xl md:text-5xl text-primary" />,
    title: "Implementation of network projects",
    desc: "From design, preparation of supplies and implementation",
  },
  {
    id: 5,
    icon: <FaHandsHelping className="text-4xl md:text-5xl text-primary" />,
    title: "Advice",
    desc: "In the field of physical components",
  },
  {
    id: 6,
    icon: <LuHandHelping className="text-4xl md:text-5xl text-primary" />,
    title: "Providing consultations",
    desc: "In the field of information technology and development of automated work systems",
  },
];
const Service = () => {
  return (
    <div>
      
      <div className="container my-14 md:my-10">
      <Heading title="Our Services" subtitle="Explore our services" />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 ">
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
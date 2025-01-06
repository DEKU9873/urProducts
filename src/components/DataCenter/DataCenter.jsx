import React from 'react';
import Heading from '../Shared/Heading';
import { Link } from 'react-router-dom';

const DataCenterData = [
  {
    id: 1,
    title: "Data Center Planning and Design",
    dec: "We provide comprehensive services for planning and designing data centers that ensure achieving the highest levels of performance and security. This includes site selection, infrastructure design, and optimal distribution planning of equipment and resources.",
  },
  {
    id: 2,
    title: "Infrastructure Construction and Development",
    dec: "We build the infrastructure for data centers, including cooling systems, power distribution, networks, and security systems. We ensure the use of the latest technologies to guarantee sustainability and high efficiency.",
  },
  {
    id: 3,
    title: "Provision and Installation of Specialized Equipment",
    dec: "We provide the latest specialized equipment for data centers, including servers, storage devices, routing and switching devices, and network solutions. We ensure that each component is equipped to guarantee optimal performance.",
  },
];

const DataCenter = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center p-6">
      <Heading
          title="Data Center Services"
          subtitle="Explore our Data Center Services"
        />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {DataCenterData.map((item) => (
          <div
            key={item.id}
            className="bg-white border  rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h2>
            <p className="text-gray-600">{item.dec}</p>
          </div>
        ))}
      </div>
      <Link to={"/alldatacenter"}>
          <div className="flex justify-center items-center text-center mt-8">
            <div className="flex justify-center items-center px-8 py-3 w-[200px] bg-primary text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
              View More
            </div>
          </div>
        </Link>
    </div>
  );
};

export default DataCenter;

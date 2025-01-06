import React from 'react'
import { Link } from 'react-router-dom';
import Heading from '../Shared/Heading';
const DataCenterData = [

    {
        id: 1,
        title: "Data Center Planning and Design",
        dec: "We provide comprehensive services for planning and designing data centers that ensure achieving the highest levels of performance and security. This includes site selection, infrastructure design, and optimal distribution planning of equipment and resources."
    }, 
    {
        id: 2,
        title: "Infrastructure Construction and Development",
        dec: "We build the infrastructure for data centers, including cooling systems, power distribution, networks, and security systems. We ensure the use of the latest technologies to guarantee sustainability and high efficiency."
    },
    {
        id: 3,
        title: "Provision and Installation of Specialized Equipment",
        dec: "We provide the latest specialized equipment for data centers, including servers, storage devices, routing and switching devices, and network solutions. We ensure that each component is equipped to guarantee optimal performance. "
    },
    {
        id: 4,
        title: "System Programming and Operation",
        dec: "We install and program the equipment and systems in data centers to ensure smooth and efficient operation. This includes configuring systems to meet specific client needs and providing advanced solutions for performance monitoring and resource management."
    },
    {
        id: 5,
        title: "System Qualification and Development",
        dec: "We work on qualifying and upgrading existing systems in data centers to align with the latest standards and technologies, enhancing performance and extending the lifespan of the systems. "
    },
    {
        id: 6,
        title: "Maintenance and Technical Support",
        dec: "We provide regular and preventive maintenance services for data centers to ensure continuous efficient operation. This includes 24/7 technical support."
    },
]

const AllDataCenter = () => {
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
        </div>
      );
}

export default AllDataCenter

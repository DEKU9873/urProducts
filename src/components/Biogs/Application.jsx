import React from 'react'
import img1 from "../assets/allaplication/1.jpg";
import img2 from "../assets/allaplication/2.jpg";
import img3 from "../assets/allaplication/3.jpg";
import img4 from "../assets/allaplication/4.jpg";
import img5 from "../assets/allaplication/5.jpg";
import img6 from "../assets/allaplication/6.jpg";
import img7 from "../assets/allaplication/7.jpg";
import img8 from "../assets/allaplication/8.jpg";
import img9 from "../assets/allaplication/9.jpg";
import img10 from "../assets/allaplication/10.jpg";
import img11 from "../assets/allaplication/11.jpg";
import img12 from "../assets/allaplication/12.jpg";
import img14 from "../assets/allaplication/13.jpg";
import img15 from "../assets/allaplication/14.jpg";
import img16 from "../assets/allaplication/16.jpg";
import img17 from "../assets/allaplication/17.jpg";
import img18 from "../assets/allaplication/18.jpg";
import Heading from '../Shared/Heading';


const ApplicationData = [
  {
    id: 1,
    dec:"Applications and programs for managing warehouses, supply and shipping operations, and GPS tracking of logistics services",
    img: img1
  },
  {
    id: 2,
    dec:"Applications and programs for electronic payment operations of all kinds, subscriptions and payment lists",
    img: img2
  },
  {
    id: 3,
    dec:"Applications and programs for electronic marketing, order management, distribution, sales and e-commerce",
    img: img3
  },
  {
    id: 4,
    dec:"Applications and software for data security, cyber security, reputation management (ORM), data warehouses, business automation and data mining.",
    img: img4
  },
  {
    id: 5,
    dec:"Applications and programs for all transactions of the Ministry of Justice and the courts",
    img: img5
  },
  {
    id: 6,
    dec:"Applications and programs for centralized connectivity of parking lots, vehicle tracking and tracking, and port management.",
    img: img6
  },
  {
    id: 7,
    dec:"Applications and programs for e-government, one-stop shop",
    img: img7
  },
  {
    id: 8,
    dec:"Applications and programs for financial and banking transactions, electronic wallet, production and extraction of digital currencies, and bank management",
    img: img8
  },
  {
    id: 9,
    dec:"Applications and software for property, real estate, asset, project, and investment management",
    img: img9
  },
  {
    id: 10,
    dec:"Applications and software for managing healthcare institutions of all types and related services",
    img: img10
  },
  {
    id: 11,
    dec:"Applications and software for employee performance management, tracking, and performance analysis for institutions (ERP)",
    img: img11
  },
  {
    id: 12,
    dec:"General and specialized applications and software on all platforms (iOS, Android, PC)",
    img: img12
  },
  {
    id: 13,
    dec:"Applications and software for surveillance cameras, radar systems, traffic management, and all related processes",
    img: img17
  },
  {
    id: 14,
    dec:"Educational applications and software: e-learning systems, blended learning, and virtual labs",
    img: img14
  },
  {
    id: 15,
    dec:"Applications and software for production processes, manufacturing, factory management, and industrial automation",
    img: img16
  },
  {
    id: 16,
    dec:"Applications and software for governorates, municipal departments, and Baghdad Municipality services",
    img: img18
  },


] 

const Application = () => {
  return (
    <div className="mx-auto py-8 px-4">
      <Heading
          title="Application and Software"
          subtitle="Explore our Application and Software"
        />
      <div className=" container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ApplicationData.map((app) => (
          <div
            key={app.id}
            className="bg-white dark:bg-gray-600 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={app.img}
              alt="Application"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700 dark:text-white text-justify text-sm">{app.dec}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Application;
import React, {  useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Service from "../components/Service/Service";
import Banner from "../components/Banner/Banner";
import headphone from "../components/assets/hero/headphone.png";
import smartwatch from "../components/assets/category/smartwatch2-removebg-preview.png";
import Products from "../components/Products/Products";
import Biogs from "../components/Biogs/Biogs";
import Partener from "../components/Partener/Partener";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css"
import DataCenter from "../components/DataCenter/DataCenter";

const BannerData = {
  discount: "30% off",
  title: "Fine Smile",
  date: "30th June, 2022",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% off",
  title: "Fine Smile",
  date: "30th June, 2022",
  image: smartwatch,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  bgColor: "#2dcc6f",
};

const HomePage = () => {
    useEffect(() => {
        AOS.init(
          {
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
            offset: 100,
          }
        );
        AOS.refresh();
      }, []);
      return (
        <div
          className="bg-white dark:bg-gray-900 dark:text-white
        duration-200 overflow-hidden"
        >
          <Hero />
          <Service />
          <Biogs />
          <DataCenter/>
          <Partener />
        </div>
      );
}
export default HomePage

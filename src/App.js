import React, { use, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Service from "./components/Service/Service";
import Banner from "./components/Banner/Banner";
import headphone from "./components/assets/hero/headphone.png";
import smartwatch from "./components/assets/category/smartwatch2-removebg-preview.png";
import Products from "./components/Products/Products";
import Biogs from "./components/Biogs/Biogs";
import Partener from "./components/Partener/Partener";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./Pages/HomePage";
import AllService from "./components/Biogs/Application";
import Application from "./components/Biogs/Application";
import AllDataCenter from "./components/DataCenter/AllDataCenter";
import UrPalm from "./components/Systems/UrPalm";
import NationalBank from "./components/Systems/NationalBank";

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
const App = () => {

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
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allaplication" element={<Application />} />
          <Route path="/alldatacenter" element={<AllDataCenter />} />
          <Route path="/urpalm" element={<UrPalm />} />
          <Route path="/nationalbank" element={<NationalBank />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
};

export default App;



      
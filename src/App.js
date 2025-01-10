import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

import headphone from "./components/assets/hero/headphone.png";
import smartwatch from "./components/assets/category/smartwatch2-removebg-preview.png";

import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'



import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./Pages/HomePage";
import Application from "./components/Biogs/Application";
import AllDataCenter from "./components/DataCenter/AllDataCenter";
import UrPalm from "./components/Systems/UrPalm";
import NationalBank from "./components/Systems/NationalBank";


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



      
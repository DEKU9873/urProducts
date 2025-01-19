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
import Erp from "./components/Systems/Erp";
import ScrollToTop from "./components/ScrollToTop";
import FirstApp from "./components/ApplicationDetails/FirstApp";
import SecondApp from "./components/ApplicationDetails/SecondApp";
import ThirdApp from "./components/ApplicationDetails/ThirdApp";
import FourthApp from "./components/ApplicationDetails/FourthApp";
import FifthApp from "./components/ApplicationDetails/FifthApp";
import SixthApp from "./components/ApplicationDetails/SixthApp";
import SeventhApp from "./components/ApplicationDetails/SeventhApp";
import EighthApp from "./components/ApplicationDetails/EighthApp";
import NinthApp from "./components/ApplicationDetails/NinthApp";
import TenthApp from "./components/ApplicationDetails/TenthApp";
import EleventhApp from "./components/ApplicationDetails/EleventhApp";
import TwelfthApp from "./components/ApplicationDetails/TwelfthApp";
import ThirteenthApp from "./components/ApplicationDetails/ThirteenthApp";
import ForteenthApp from "./components/ApplicationDetails/ForteenthApp";
import FifteenthApp from "./components/ApplicationDetails/FifteenthApp";
import SixteenthApp from "./components/ApplicationDetails/SixteenthApp";


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
      <ScrollToTop/>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allaplication" element={<Application />} />
          <Route path="/alldatacenter" element={<AllDataCenter />} />
          <Route path="/urpalm" element={<UrPalm />} />
          <Route path="/nationalbank" element={<NationalBank />} />
          <Route path="/ERP" element={<Erp />} />


          <Route path="/firstapp" element={<FirstApp />} />
          <Route path="/secondapp" element={<SecondApp />} />
          <Route path="/thirdapp" element={<ThirdApp />} />
          <Route path="/fourthapp" element={<FourthApp />} />
          <Route path="/fifthapp" element={<FifthApp />} />
          <Route path="/sixthapp" element={<SixthApp />} />

          <Route path="/seventhapp" element={<SeventhApp />} />
          <Route path="/eighthapp" element={<EighthApp />} />
          <Route path="/ninthapp" element={<NinthApp />} />
          <Route path="/tenthapp" element={<TenthApp />} />
          <Route path="/eleventhapp" element={<EleventhApp />} />
          <Route path="/twelfthapp" element={<TwelfthApp />} />
          <Route path="/thirteenthapp" element={<ThirteenthApp />} />
          <Route path="/fourteenthapp" element={<ForteenthApp />} />
          <Route path="/fifteenthapp" element={<FifteenthApp />} />
          <Route path="/sixteenthapp" element={<SixteenthApp />} />

          
          
        </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
};

export default App;



      
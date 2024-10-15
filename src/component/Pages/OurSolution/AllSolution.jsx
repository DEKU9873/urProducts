import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CardSolution from "./CardSolution";
import AOS from "aos";
import "aos/dist/aos.css";
import "./solution.css";
import { Button } from "@mui/material";

function AllSolution() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div>
      <section id="solution">
        <div className="container" data-aos="fade-up">
          <div className=" mb-3">
            
          </div>

          <div className="card-container ">
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />

            <div className=" mb-3">
            
          </div>
            
            
          </div>

    
        </div>
      </section>
    </div>
  );
}

export default AllSolution;

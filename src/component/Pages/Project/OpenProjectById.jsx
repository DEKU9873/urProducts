import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackendUrl } from "../api/api";
import "../Event/Event.css";
import { useTranslation } from "react-i18next";
function OpenProjectById() {
  const [DataProject, setDataProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/Projects/${id}`);
        console.log(response);
        setDataProject(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData(); // Call fetchData function inside useEffect
  }, [id]); // Add id as dependency
  const { t } = useTranslation();
  const [direction, setDirection] = useState("");
  useEffect(() => {
    setDirection(localStorage.getItem("language"));
  }, [t, useTranslation]);
  return (
    <div className="we-help-section m-4 p-4">
      <div className="m-4 p-4 ">
        <div
          className="row justify-content-between"
          dir={direction === "ar" ? "rtl" : ""}
        >
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1">
                {DataProject?.image && <img src={DataProject?.image} />}
              </div>
              <div className="grid grid-2">
                {DataProject?.image1 && <img src={DataProject?.image1} />}
              </div>
              <div className="grid grid-3">
                {DataProject?.image2 && <img src={DataProject?.image2} />}
              </div>
              <div className="grid grid-4">
                {DataProject?.image3 && <img src={DataProject?.image3} />}
              </div>
              <div className="grid grid-5">
                {DataProject?.image4 && <img src={DataProject?.image4} />}
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h2 className="section-title mb-4">
              {direction === "ar" ? DataProject?.name_ar : DataProject?.name}
            </h2>
            <p>
              {" "}
              {direction === "ar"
                ? DataProject?.description_ar
                : DataProject?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenProjectById;

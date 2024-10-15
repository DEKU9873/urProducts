import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackendUrl } from "../api/api";
import "./Event.css";
import { useTranslation } from "react-i18next";
function EventDetails() {
  const [Event, setEvent] = useState({});
  const { id } = useParams();
  const { t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/Events/${id}`);
        console.log(response);
        setEvent(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
    console.log(Event);
  }, []);
  const [direction, setDirection] = useState();
  useEffect(() => {
    setDirection(localStorage.getItem("language"));
  }, [t, useTranslation]);

  return (
    <div className="we-help-section m-4 p-4">
      <div className="m-4 p-4">
        <div
          className="row justify-content-between"
          dir={direction === "ar" ? "rtl" : ""}
        >
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1">
                {Event?.image && <img src={Event?.image} />}
              </div>
              <div className="grid grid-2">
                {Event?.image2 && <img src={Event?.image1} />}
              </div>
              <div className="grid grid-3">
                {Event?.image2 && <img src={Event?.image2} />}
              </div>
              <div className="grid grid-4">
                {Event?.image3 && <img src={Event?.image3} />}
              </div>
              <div className="grid grid-5">
                {Event?.image4 && <img src={Event?.image4} />}
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h2 className="section-title mb-4">
              {direction === "ar" ? Event?.name_ar : Event?.name}
            </h2>
            <p>
              {" "}
              {direction === "ar" ? Event?.description_ar : Event?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;

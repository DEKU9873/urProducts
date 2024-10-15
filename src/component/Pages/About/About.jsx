import React, { useEffect, useState } from "react";
import "./about.css";
import "./about2.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [direction, setDirection] = useState("");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    setDirection(localStorage.getItem("language"));
  }, [t, useTranslation]);
  return (
    <>
      <section
        id="about"
        className="about section  w-100"
        dir={direction === "ar" ? "rtl" : ""}
      >
        <div className="section-title mb-3">
          <div className="d-flex justify-content-center mb-3 ">
            <h2>
              <a href="#" className="mb-3">
                {" "}
                {/* {t("About.title")} */}
              </a>
            </h2>
          </div>
        </div>
        {/* --------------------------------------------------------------------------- */}
        <div className="container" >
          <div className=" card-wrapper">
              <div className="custom-container">
                <div className="custom-content">
                  {/* <img
                    src="image/photoLogoUR.jpg"
                    alt="No Image"
                    className="custom-image"
                  /> */}
                  <div className="custom-text">
                    <h3>{t("About.subTitle")}</h3>
                    <p className="fst-italic">{t("About.text1")}</p>
                  </div>
                </div>
              </div>

              <div className="custom-container">
                <div className="custom-content">
                  {/* <img
                    src="image/vision.jpg"
                    alt="No Image"
                    className="custom-image"
                  /> */}
                  <div className="custom-text">
                    <h3>{t("About.subTitle2")}</h3>
                    <p className="fst-italic">{t("About.text2")}</p>
                  </div>
                </div>
              </div>

              <div className="custom-container">
                <div className="custom-content">
                  {/* <img
                    src="image/value.jpg"
                    alt="No Image"
                    className="custom-image"
                  /> */}
                  <div className="custom-text">
                    <h3>{t("About.subTitle3")}</h3>
                    <p className="fst-italic">{t("About.text3")}</p>
                  </div>
                </div>
              </div>
              <div className="custom-container">
                <div className="custom-content">
                  {/* <img
                    src="image/mission2.png"
                    alt="No Image"
                    className="custom-image"
                  /> */}
                  <div className="custom-text">
                    <h3>{t("About.subTitle4")}</h3>
                    <p className="fst-italic">{t("About.text4")}</p>
                  </div>
                </div>
              </div>
            {/* <div
              className="col-lg-4 about-images"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <img src="ImageCompany/logo.png" className="img-fluid" alt="" />
            </div> */}
          </div>
        </div>
      </section>
      {/*
       */}
    </>
  );
}

export default About;

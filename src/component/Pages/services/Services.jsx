import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faRotate,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
function Services() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div>
      <section
        id="services"
        className="services section-bg d-flex justify-content-center align-item-center"
      >
        <div className="container" data-aos="fade-up">
          <div className="section-title mb-3">
            <div className="d-flex justify-content-center mb-3 ">
              <h2>
                <a href="#" className="mb-3">
                  {" "}
                  {t("Services.title")}
                </a>
              </h2>
            </div>
          </div>
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box iconbox-blue">
                <div className="icon">
                  <i>
                    <FontAwesomeIcon
                      icon={faGear}
                      style={{ color: "#450061fe" }}
                    />{" "}
                  </i>
                </div>
                <h4>
                  <a href=""> {t("Services.Maintenance")}</a>
                </h4>
                <p>{t("Services.MaintenanceText")}</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box iconbox-orange ">
                <div className="icon">
                  <i>
                    <FontAwesomeIcon
                      icon={faWandMagicSparkles}
                      style={{ color: "#450061fe" }}
                    />{" "}
                  </i>
                </div>
                <h4>
                  <a href="">{t("Services.Installation")}</a>
                </h4>
                <p>{t("Services.InstallationText")}</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box iconbox-pink">
                <div className="icon">
                  <i>
                    <FontAwesomeIcon
                      icon={faRotate}
                      style={{ color: "#450061fe" }}
                    />
                  </i>
                </div>
                <h4>
                  <a href="">{t("Services.Supplying")}</a>
                </h4>
                <p>{t("Services.SupplyingText")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Services;

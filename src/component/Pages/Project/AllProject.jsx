import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ColorButton } from "../Config/contact";
import { BackendUrl } from "../api/api";
import "../Style/Style.css";
import { useTranslation } from "react-i18next";
import './Project.css'
function Project() {
  const [dataProject, setDataProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/Projects/`);
        setDataProject(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const openProjectDetails = (id) => {
    navigate(`/project/ProjectDetails/${id}`);
  };

  const { t } = useTranslation();
  const [direction, setDirection] = useState("");
  useEffect(() => {
    setDirection(localStorage.getItem("language"));
  }, [t]);

  return (
    <div>
      <div className="Project" id="Project">
        <div className="section-title mb-3">
          <div className="d-flex justify-content-center mb-3">
            <h2>
              <a href="#" className="mb-3">
                {t("project.title")}
              </a>
            </h2>
          </div>
        </div>

        <div className="container" dir={direction === "ar" ? "rtl" : ""}>
          {dataProject.length > 0 ? (
            dataProject.map((item) => (
              <div className="custom-card" key={item.id} data-aos="zoom-in">
                <img
                  className="custom-card-image"
                  src={item.image || "https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"}
                  alt={direction === "ar" ? item.name_ar : item.name}
                />
                <div className="custom-card-content">
                  <h5 className="custom-card-title">
                    {direction === "ar" ? item.name_ar : item.name}
                  </h5>
                  <p className="custom-card-description"> 
                    {direction === "ar" ? item.description_ar : item.description}
                  </p>
                  <ColorButton className="custom-card-button"   style={{position: 'absolute', bottom: '5px', right:'30%' , width:' 30%' , backgroundColor: '#2E8CF7'}}  
                     onClick={() => openProjectDetails(item.id)}>
                    {t("About.btnRedMore")}
                  </ColorButton>
                </div>
              </div>
            ))
          ) : (
            <div>No Data</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;

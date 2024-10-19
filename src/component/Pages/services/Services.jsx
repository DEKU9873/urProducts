import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import "./services.css";

function Services() {
  const { t, i18n } = useTranslation(); // Added i18n to get current language
  const [services, setServices] = useState([]);
  const [isArabic, setIsArabic] = useState(i18n.language === "ar"); // Set initial state based on current language

  // Function to simulate fetching data
  const fetchServiceData = async () => {
    const fakeServicesData = [
      {
        id: 1,
        name: "Web Development",
        name_ar: "تطوير المواقع",
        image: "/image/app.png",
      },
      {
        id: 2,
        name: "Graphic Design",
        name_ar: "تصميم جرافيك",
        image: "/image/service.png",
      },
      {
        id: 3,
        name: "Digital Marketing",
        name_ar: "التسويق الرقمي",
        image: "/image/database.png",
      },
      {
        id: 4,
        name: "Digital Marketing",
        name_ar: "التسويق الرقمي",
        image: "/image/app.png",
      },
      {
        id: 5,
        name: "Digital Marketing",
        name_ar: "التسويق الرقمي",
        image: "/image/service.png",
      },
      {
        id: 6,
        name: "Digital Marketing",
        name_ar: "التسويق الرقمي",
        image: "/image/database.png",
      },
    ];

    setServices(fakeServicesData); // Set fake data into state
  };

  useEffect(() => {
    fetchServiceData(); // Simulate API call on component mount
  }, []);

  useEffect(() => {
    setIsArabic(i18n.language === "ar"); // Update state when language changes
  }, [i18n.language]);

  if (!services.length) {
    return <div>Loading...</div>;
  }

  return (
    <section id="services" className={`services-section ${isArabic ? 'text-right' : ''}`}>
      <div className="services-container" data-aos="fade-up">
        <div className="d-flex justify-content-center mb-3 " style={{marginTop:"100px"}}>
          <h2>
            <a href="#" className="mb-3 hi"  >
              {" "}
              {t("Services.title")}
            </a>
          </h2>
        </div>
        <div className="services-grid-container">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={isArabic ? service.name_ar : service.name}
              image={service.image} // Pass the fake image URL
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ title, image }) => (
  <div className="services-card" data-aos="zoom-in">
    <div className="services-image-container">
      <img src={image} alt={title} className="services-image" /> {/* Render image from fake data */}
    </div>
    <div className="services-card-content">
      <p className="services-card-title">{title}</p>
    </div>
    <div className="services-underline"></div>
  </div>
);

export default Services;

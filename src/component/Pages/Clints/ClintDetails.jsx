import { Container, Row } from "react-bootstrap";
import CategoryCard from "./Clint";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios to make API calls
import { BackendUrl } from "../api/api";


const HomeCategory = () => {
  const { t } = useTranslation();
  const [direction, setDirection] = useState("");
  const [clients, setClients] = useState([]); // State to hold clients data

  useEffect(() => {
    // Get language direction from local storage
    setDirection(localStorage.getItem("language"));

    // Fetch data from the API
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/Clients/`);
        setClients(response.data); // Assuming response.data is an array of clients
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients(); // Call the fetch function
  }, []);

  return (
    <Container>
      <div className="section-title ">
        <div className="d-flex justify-content-center">
          <h2>
            <a href="#" className="">
              {t("header.OurClinents")}
            </a>
          </h2>
        </div>
      </div>
      <Row className="my-2 d-flex justify-content-between">
        {clients.map((client) => (
          <CategoryCard
            key={client.id} // Use a unique key for each card
            title={direction === "ar" ? client.name_ar : client.name_en} // Determine the title based on language direction
            img="/image/image.png" // Keep the image path as is or update it accordingly
          />
        ))}
      </Row>
    </Container>
  );
};

export default HomeCategory;

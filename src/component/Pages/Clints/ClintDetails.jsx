import { Container, Row } from "react-bootstrap";
import CategoryCard from "./Clint";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";




const HomeCategory = () => {
    const { t } = useTranslation();
  const [direction, setDirection] = useState("");
  useEffect(() => {
    setDirection(localStorage.getItem("language"));
  }, [t, useTranslation]);

    return (
        <Container>
            <div className="section-title ">
          <div className="d-flex justify-content-center  ">
            <h2>
              <a href="#" className="">
                {" "}
                {t("header.OurClinents")}
              </a>
            </h2>
          </div>
        </div>
            <Row className="my-2 d-flex justify-cibtebt-between">
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                <CategoryCard title="اسم الجهة" img="/image/image.png"  />
                
                
            </Row>
        </Container>
    );
};

export default HomeCategory;

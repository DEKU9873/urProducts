import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./productUr.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate

const ProductUr = () => {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate(); // استخدام useNavigate للتنقل

  useEffect(() => {
    AOS.init();

    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/categories/");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/products/${category.id}`); // الانتقال إلى صفحة جديدة مع معرف الفئة
  };

  return (
    <div>
      <section id="Product">
        <div className="container" data-aos="fade-up">
          <div className="section-title mb-3">
            <div className="d-flex justify-content-center mb-3">
              <h2>
                <a href="#" className="mb-3">
                  {t("Product.title")}
                </a>
              </h2>
            </div>
          </div>

          <div className="product-grid">
            {products.map((category) => (
              <div key={category.id} className="">
                <ProductCard
                  category={category}
                  onClick={() => handleCategoryClick(category)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductUr;

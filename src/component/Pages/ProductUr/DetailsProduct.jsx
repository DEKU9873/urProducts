import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailsCard from "./DetailsCard"; 
import "./productUr.css";


const ProductsPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/categories/${categoryId}/`);
        const productUrls = response.data.products;

        const productDetails = await Promise.all(
          productUrls.map(async (url) => {
            const productResponse = await axios.get(url);
            return productResponse.data;
          })
        );

        setProducts(productDetails);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    
        
    <div className="mx-4 mt-4">
      <div className="products-list ">
        
        {products.map((product) => (
          <DetailsCard key={product.id} product={product} /> 
        ))}
      </div>
    </div>
   
  );
};

export default ProductsPage;
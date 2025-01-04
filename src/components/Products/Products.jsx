import React from "react";
import Heading from "../Shared/Heading";
import ProductsCard from "./ProductsCard";
import image1 from "../assets/product/p-1.jpg";
import image2 from "../assets/product/p-2.jpg";
import image3 from "../assets/product/p-3.jpg";
import image4 from "../assets/product/p-4.jpg";

const ProductsData = [
  {
    id: 1,
    image: image1,
    title: "Wireless Headphone",
    price: "120.00",
    aosDelay: "100",
  },
  {
    id: 2,
    image: image2,
    title: "Wireless Headphone",
    price: "$ 120.00",
    aosDelay: "100",
  },
  {
    id: 3,
    image: image3,
    title: "Wireless Headphone",
    price: "$ 120.00",
    aosDelay: "100",
  },
  {
    id: 4,
    image: image4,
    title: "Wireless Headphone",
    price: "$ 120.00",
    aosDelay: "100",
  },
];

const Products = () => {
  return (
    <div>
      <di className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle="Explore our products" />
        {/* Body section */}
        <ProductsCard data={ProductsData} />
        <ProductsCard data={ProductsData} />
      </di>
    </div>
  );
};
export default Products;

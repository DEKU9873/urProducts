import MainPage from "./component/Pages/MainPage.jsx";
import Root from "./component/Pages/Root.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutDetails from "./component/Pages/About/aboutDiteals.jsx";
import EventDetails from "./component/Pages/Event/EventDetails.jsx";
import ProductList from "./component/Pages/Product/TypeProduct/ProductType.jsx";
import ProductDetails from "./component/Pages/Product/TypeProduct/Product.jsx";
import SitemapManager from "./sitmap.jsx";
import ViewAllProject from "./component/Pages/Project/AllProject.jsx";
import OpenProjectById from "./component/Pages/Project/OpenProjectById.jsx";
import AllSolution from "./component/Pages/OurSolution/AllSolution.jsx";
import ProductsPage from "./component/Pages/ProductUr/DetailsProduct.jsx";
import ProductUr from "./component/Pages/ProductUr/ProductUr.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="/AboutDetails" element={<AboutDetails />} />
      <Route path="/EventDetails/:id" element={<EventDetails />} />
      <Route path="/ProductList/:id" element={<ProductList />} />
      <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      <Route path="/SitemapManager" element={<SitemapManager />} />
      <Route path="/ViewAllProject" element={<ViewAllProject />} />
      <Route path="/project/ProjectDetails/:id" element={<OpenProjectById />} />
      <Route path="/AllSolution" element={<AllSolution />} />
      <Route path="/products/:categoryId" element={<ProductsPage />} />
      <Route path="/products/" element={<ProductUr />} />
    </Route>
  )
);
function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  });

  return (
    <>
      {loading ? (
        <div className="dispalyLoding ">
          <div className="preloader"></div>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;

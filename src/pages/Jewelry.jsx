import React from "react";
import { useState, useEffect } from "react";
import productService from "../Service";
import ProductList from '../copmponents/ProductList';


const Jewelry = () => {
  const [jewelryProducts, setJewelryProducts] = useState([]);

  useEffect(() => {
    productService.getJewelry().then((data) => setJewelryProducts(data));
  });

  return (
    <div>
        <ProductList products={jewelryProducts} />;
    </div>
  );
};

export default Jewelry;

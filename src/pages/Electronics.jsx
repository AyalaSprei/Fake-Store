import React from "react";
import { useState, useEffect } from "react";
import productService from "../Service";
import ProductList from '../copmponents/ProductList';

function Electronics() {
  const [electronicsProducts, setElectronicsProducts] = useState([]);
   
  useEffect(() => {
    productService.getElectronics().then((data) => setElectronicsProducts(data));
  });
  return (
    <div>
       <ProductList products={electronicsProducts} />;
    </div>
  );

}

export default Electronics;

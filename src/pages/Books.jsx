import React from "react";
import { useState, useEffect } from "react";
import productService from "../Service";
import ProductList from '../copmponents/ProductList';

function Books() {
  const [BooksProducts, setBooksProducts] = useState([]);
   
  useEffect(() => {
    productService.getBooks().then((data) => setBooksProducts(data));
  });
  return (
    <div>
       <ProductList products={BooksProducts} />;
    </div>
  );

}

export default Books;

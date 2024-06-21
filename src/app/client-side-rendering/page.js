"use client";
import React, { useEffect, useState } from "react";

const ClientSideRendering = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products); // Assuming the API returns an object with a "products" array
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientSideRendering;

import { ProductsIndex } from "./ProductsIndex";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsNew } from "./ProductsNew";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params, successCallback) => {
    console.log("handleCreateProduct", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      successCallback();
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <ProductsNew onCreateProduct={handleCreateProduct} />
      <ProductsIndex products={products} />
    </div>
  );
}
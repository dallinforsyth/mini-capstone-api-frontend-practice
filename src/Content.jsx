import { ProductsIndex } from "./ProductsIndex";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsNew } from "./ProductsNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";

export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisable, setIsProductsShowVisable] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params, successCallback) => {
    console.log("handleCreateProduct", params);
    axios
      .post("http://localhost:3000/products.json", params)
      .then((response) => {
        successCallback();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  const handleShowProduct = (product) => {
    console.log("handleShowProdcut", product);
    setIsProductsShowVisable(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log("handleCloseProduct");
    setIsProductsShowVisable(false);
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <ProductsNew onCreateProduct={handleCreateProduct} />
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
      <Modal show={isProductsShowVisable} onClose={handleClose}>
        <ProductsShow product={currentProduct} />
      </Modal>
    </div>
  );
}

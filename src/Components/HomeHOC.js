import axios from "axios";
import React, { useState } from "react";

function UpdatedComponent(OriginalComponent) {
  function NewComponent() {
    const [productData, setProductsData] = useState([]);
    const fetchProducts = (url) => {
      axios
        .get(url)
        .then((resp) => {
          setProductsData(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <OriginalComponent
        productData={productData}
        fetchProducts={fetchProducts}
      />
    );
  }
  return NewComponent;
}
export default UpdatedComponent;

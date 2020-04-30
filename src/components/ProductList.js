import React from "react";

import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

function ProductList(props) {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <div className="flex-container">
        {props.products.map((product, i) => (
          <div key={i}>
            <ProductItem product={product} cart={cart} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductList;

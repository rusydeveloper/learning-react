import React from "react";

import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

function ProductList(props) {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <div class="flex-container">
        {props.products.map((product) => (
          <div>
            <ProductItem product={product} cart={cart} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductList;

import React from "react";

import ProductItem from "../components/ProductItem";

function ProductList(props) {
  return (
    <div>
      <div class="flex-container">
        {props.products.map((product) => (
          <div>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductList;

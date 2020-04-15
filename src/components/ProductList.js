import React from "react";

import { Card, Row, Col, Image, Button } from "react-bootstrap";
import defaultProductImage from "../assets/open-box.png";
import { addCart } from "../actions";
import { useDispatch } from "react-redux";
import { server } from "../constants/server";

function ProductList(props) {
  const dispatch = useDispatch();
  const server_url = server + "/";

  return (
    <div>
      <div class="flex-container">
        {props.products.map((product) => (
          <div class="card card-product">
            {product.image ? (
              <img
                class="card-img-top product-icon"
                src={server_url + product.image}
                alt="Card image cap"
              />
            ) : (
              <img
                class="card-img-top product-icon"
                src={defaultProductImage}
                alt="Card image cap"
              />
            )}

            <div class="card-body">
              <p class="card-text">
                <div className="product-title">{product.name}</div>
                <div className="product-price">
                  Rp{" "}
                  {product.buying_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </div>
                <br />
                <Button
                  size="sm"
                  variant="warning"
                  block
                  onClick={() => dispatch(addCart(product))}
                >
                  pesan
                </Button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductList;

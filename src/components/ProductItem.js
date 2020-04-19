import React, { useState } from "react";

import { Button } from "react-bootstrap";
import defaultProductImage from "../assets/open-box.png";
import { addCart } from "../actions";
import { useDispatch } from "react-redux";
import { server } from "../constants/server";

function ProductItem(props) {
  const dispatch = useDispatch();
  const server_url = server + "/";
  const [count, setCount] = useState(0);

  return (
    <div class="card card-product">
      {props.product.image ? (
        <div>
          {" "}
          <img
            class="card-img-top product-icon image-fit "
            src={server_url + props.product.image}
            alt=""
            onError={(e) => {
              e.target.src = defaultProductImage;
            }}
          />
        </div>
      ) : (
        <img
          class="card-img-top product-icon"
          src={defaultProductImage}
          alt=""
        />
      )}

      <div class="card-body">
        <p class="card-text">
          <div className="product-title">{props.product.name}</div>
          <div className="product-price">
            Rp{" "}
            {props.product.buying_price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </div>
          <br />
          {/* {count > 0 ? (
            <div>
              <Button
                size="sm"
                variant="light"
                onClick={() => {
                  dispatch(minusCart(props.product));
                  setCount(count - 1);
                }}
              >
                -{" "}
              </Button>
              <span class="count-product-order">{count}</span>
              <Button
                size="sm"
                variant="warning"
                onClick={() => {
                  dispatch(plusCart(props.product));
                  setCount(count + 1);
                }}
              >
                +{" "}
              </Button>
            </div>
          ) : (
            <div>
              <Button
                size="sm"
                variant="warning"
                block
                onClick={() => {
                  dispatch(addCart(props.product));
                  setCount(count + 1);
                }}
              >
                pesan
              </Button>
            </div>
          )} */}
          <div>
            <Button
              size="sm"
              variant="warning"
              block
              onClick={() => {
                dispatch(addCart(props.product));
                setCount(count + 1);
              }}
            >
              pesan
            </Button>
          </div>
        </p>
      </div>
    </div>
  );
}
export default ProductItem;

import React, { useState } from "react";

import { Button } from "react-bootstrap";
import defaultProductImage from "../assets/open-box.png";
import { addCart } from "../actions";
import { useDispatch } from "react-redux";
import { server } from "../constants/server";
import { Mixpanel } from "../components/Mixpanel";

function ProductItem(props) {
  const dispatch = useDispatch();
  const server_url = server + "/";
  const [count, setCount] = useState(0);

  return (
    <div className="card card-product">
      {props.product.image ? (
        <div>
          {" "}
          <img
            className="card-img-top product-icon image-fit "
            src={server_url + props.product.image}
            alt="image"
            onError={(e) => {
              e.target.src = defaultProductImage;
              e.target.alt = "broken";
            }}
          />
        </div>
      ) : (
        <img
          className="card-img-top product-icon"
          src={defaultProductImage}
          alt="no link"
        />
      )}

      <div className="card-body">
        <div className="card-text">
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
              <span className="count-product-order">{count}</span>
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
                dispatch(addCart(props.product, ""));
                setCount(count + 1);
                Mixpanel.track("click add product to cart button");
              }}
            >
              pesan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;

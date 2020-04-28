import React from "react";

import { Card, Row, Col, Button } from "react-bootstrap";
import defaultProductImage from "../assets/open-box.png";
import { removeCart, plusCart, minusCart } from "../actions";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { server } from "../constants/server";

function OrderItem(props) {
  const dispatch = useDispatch();
  const server_url = server + "/";

  return (
    <div>
      <Card className="product-card">
        <Card.Body>
          <Row>
            <Col xs={6} s={6} md={6} lg={6} style={{ textAlign: "right" }}>
              {props.cart.image ? (
                <div>
                  {" "}
                  <img
                    class="card-img-top product-icon image-fit "
                    src={server_url + props.cart.image}
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
            </Col>
            <Col>
              {" "}
              <small className="product-title">{props.cart.name}</small>
              <br />
              <small className="product-price">
                {props.cart.totalSubitem} x Rp{" "}
                {props.cart.buying_price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </small>
              <br></br>
              <small className="product-price">
                Subtotal:<br></br>
                {props.cart.totalSubamount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </small>
              <br />
            </Col>
          </Row>
          <Row>
            <Col size="3">
              <Button
                size="sm"
                variant="outline-dark"
                onClick={() => dispatch(removeCart(props.cart, props.index))}
              >
                <FaTrashAlt />
              </Button>
            </Col>
            <Col size="9">
              <div>
                <Button
                  size="sm"
                  variant="light"
                  onClick={() => {
                    dispatch(minusCart(props.cart));
                  }}
                >
                  -{" "}
                </Button>
                <span class="count-product-order">
                  {props.cart.totalSubitem}
                </span>
                <Button
                  size="sm"
                  variant="warning"
                  onClick={() => {
                    dispatch(plusCart(props.cart));
                  }}
                >
                  +{" "}
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
export default OrderItem;

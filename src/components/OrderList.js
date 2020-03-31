import React from "react";

import { Card, Row, Col, Image, Button } from "react-bootstrap";
import defaultProductImage from "../assets/open-box.png";
import { addCart, removeCart } from "../actions";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

function OrderList(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Konfirmasi Pesanan</h4>
      {props.products.map((product, index) => (
        <Card className="product-card">
          <Card.Body>
            <Row>
              <Col xs={3} s={3} md={3} lg={3} style={{ textAlign: "right" }}>
                <Image
                  className="product-icon"
                  src={defaultProductImage}
                  rounded
                />
              </Col>
              <Col>
                {" "}
                {index}
                <small className="product-title">
                  {product.name.toLowerCase()}
                </small>
                <br />
                <small className="product-price">
                  Rp{" "}
                  {product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </small>
                <br />
                <Row>
                  <Col size="3">
                    <Button
                      size="sm"
                      variant="outline-dark"
                      onClick={() => dispatch(removeCart(product, index))}
                    >
                      <FaTrashAlt />
                    </Button>
                  </Col>
                  <Col size="9">
                    <Button
                      size="sm"
                      variant="outline-danger"
                      block
                      onClick={() => dispatch(addCart(product))}
                    >
                      tambah
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
export default OrderList;

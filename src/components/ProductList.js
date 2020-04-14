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
      {props.products.map((product) => (
        <Card className="product-card">
          <Card.Body>
            <Row>
              <Col xs={3} s={3} md={3} lg={3} style={{ textAlign: "right" }}>
                {product.image ? (
                  <Image
                    className="product-icon"
                    src={server_url + product.image}
                    rounded
                  />
                ) : (
                  <Image
                    className="product-icon"
                    src={defaultProductImage}
                    rounded
                  />
                )}
              </Col>
              <Col>
                {" "}
                <small className="product-title">{product.name}</small>
                <br />
                <small className="product-price">
                  Rp{" "}
                  {product.buying_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </small>
                <br />
                <Button
                  size="sm"
                  variant="warning"
                  block
                  onClick={() => dispatch(addCart(product))}
                >
                  pesan
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
export default ProductList;

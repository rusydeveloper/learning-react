import React, { Component } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import defaultProductImage from "../assets/open-box.png";

class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.products.map(product => (
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
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
export default ProductList;

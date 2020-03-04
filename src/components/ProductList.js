import React, { Component } from "react";
import { Card } from "react-bootstrap";

class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.products.map(product => (
          <Card className="product-card">
            <Card.Body>
              <small className="product-title">
                {product.name.toLowerCase()}
              </small>
              <br />
              <small className="product-price">
                Rp{" "}
                {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </small>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
export default ProductList;

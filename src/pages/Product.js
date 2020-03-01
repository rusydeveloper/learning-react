import React, { Component } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("https://www.warung-makan.com/api/product").then(response => {
      this.setState({
        products: response.data
      });
    });
  }
  render() {
    return (
      <div>
        {" "}
        <ProductList products={this.state.products} />{" "}
      </div>
    );
  }
}
export default Product;

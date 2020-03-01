import React, { Component } from "react";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h3> Products </h3>
        <table>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
          </tr>

          {this.props.products.map(product => (
            <tr>
              <td>{product.name}</td> <td>Rp {product.price}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default ProductList;

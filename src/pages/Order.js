import React from "react";

import { useSelector, useDispatch } from "react-redux";
import OrderList from "../components/OrderList";
import { push } from "connected-react-router";
import { Button } from "react-bootstrap";

function Order() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div>
      <OrderList carts={cart.items} />{" "}
      <div className="checkout-container">
        <div className="checkout-title">
          <span className="darkgrey-text">TOTAL: </span>
          <br />
          Rp {cart.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </div>
        <small>harga belum termasuk biaya kirim</small>
        <Button
          size="sm"
          variant="warning"
          block
          onClick={() => dispatch(push("/checkout"))}
        >
          Selesai
        </Button>
      </div>
    </div>
  );
}
export default Order;

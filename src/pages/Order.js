import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import OrderList from "../components/OrderList";
import { Button } from "react-bootstrap";
import { checkout } from "../actions";

function Order() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const business = useSelector((state) => state.business);

  const [paymentMethod, setPaymentMethod] = useState("Transfer");

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

        <div className="form-group">
          <label>Pilih metode bayar:</label>

          <select
            className="form-control"
            onChange={(event) => setPaymentMethod(event.target.value)}
          >
            <option value="Transfer" selected>
              Transfer
            </option>
          </select>
        </div>

        <Button
          size="sm"
          variant="warning"
          block
          onClick={() =>
            dispatch(
              checkout(
                cart.items,
                cart.totalItem,
                cart.totalAmount,
                user.id,
                user.name,
                user.phone,
                business.id,
                business.name,
                business.address,
                paymentMethod
              )
            )
          }
        >
          Selesai
        </Button>
      </div>
    </div>
  );
}
export default Order;

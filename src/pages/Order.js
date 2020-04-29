import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import OrderList from "../components/OrderList";

import { Button, Col, Row } from "react-bootstrap";
import { checkout, checkLoginBeforeCart, checkBalance } from "../actions";

function Order() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const business = useSelector((state) => state.business);
  const wallet = useSelector((state) => state.wallet);

  useEffect(() => {
    dispatch(checkBalance(user.id));
  }, [dispatch]);

  const [paymentMethod, setPaymentMethod] = useState("Transfer");

  const unique_number = Math.floor(100 + Math.random() * 900);

  var creditPayment = 0;

  if (wallet.balance > cart.totalAmount + unique_number) {
    creditPayment = cart.totalAmount + unique_number;
  } else {
    creditPayment = wallet.balance;
  }
  if (!user.id) {
    creditPayment = 0;
    dispatch(checkLoginBeforeCart(user.id));
  }

  const final_invoice = cart.totalAmount + unique_number - creditPayment;

  return (
    <div>
      <OrderList carts={cart.items} />{" "}
      <div className="checkout-container checkout-text">
        <Row>
          <Col>Subtotal</Col>
          <Col>
            <div class="text-right">
              {cart.totalAmount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>Kode Unik</Col>
          <Col>
            <div class="text-right">
              {unique_number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            Saldo Kredit{" "}
            <b>
              (Rp{" "}
              {wallet.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")})
            </b>
          </Col>

          <Col>
            <div class="text-right">
              <span class="red-text">
                -{" "}
                {creditPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </span>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>Total Akhir</Col>
          <Col>
            <div class="text-right">
              <b>
                Rp{" "}
                {final_invoice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </b>
            </div>
          </Col>
        </Row>
      </div>
      <small>harga belum termasuk biaya kirim</small>
      <div class="form-group">
        <label>Pilih metode bayar:</label>

        <select
          class="form-control"
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
              paymentMethod,
              unique_number,
              creditPayment
            )
          )
        }
      >
        Selesai
      </Button>
    </div>
  );
}
export default Order;

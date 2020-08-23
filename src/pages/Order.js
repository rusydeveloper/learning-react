import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";

import OrderList from "../components/OrderList";

import { Button, Col, Row } from "react-bootstrap";
import {
  checkout,
  checkLoginBeforeCart,
  checkBalance,
  checkEmptyCart,
} from "../actions";
import Help from "../components/Help";
import ReactGA from "react-ga";
import { Mixpanel } from "../components/Mixpanel";
import HeaderNavSelectedSupplier from "../components/HeaderNavSelectedSupplier";

function Order() {
  const dispatch = useDispatch();
  Mixpanel.track("view order page");

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const business = useSelector((state) => state.business);
  const wallet = useSelector((state) => state.wallet);
  const selectedSupplier = useSelector((state) => state.selectedSupplier);
  const [paymentMethod, setPaymentMethod] = useState("Transfer");
  const unique_number = Math.floor(100 + Math.random() * 900);

  var creditPayment = 0;
  useEffect(() => {
    dispatch(checkBalance(user.id));
    dispatch(checkLoginBeforeCart(user.id));
    dispatch(checkEmptyCart(cart));

    ReactGA.pageview("/order");
  }, [dispatch, user, cart, selectedSupplier]);
  if (wallet.balance > cart.totalAmount + unique_number) {
    creditPayment = cart.totalAmount + unique_number;
  } else {
    creditPayment = wallet.balance;
  }
  if (!user.id) {
    creditPayment = 0;
  }
  const final_invoice =
    cart.totalAmount +
    unique_number +
    (cart.totalAmount * 3) / 100 -
    creditPayment;

  return (
    <div className="page-container">
      <HeaderNavSelectedSupplier title="Keranjang"></HeaderNavSelectedSupplier>
      <Help
        phone="08211-777-0072"
        wa="6282117770072"
        message="Saya mau bertanya tentang program belanja bersama"
      ></Help>
      <OrderList carts={cart.items} />{" "}
      <Button
        type="submit"
        value="Submit"
        variant="outline-danger"
        onClick={() => dispatch(push("/"))}
        block
      >
        Tambah Produk
      </Button>
      <div className="section-label">
        <label>Total Belanja</label>
      </div>
      <div className="checkout-container checkout-text checkout-calculation">
        <Row>
          <Col>Subtotal</Col>
          <Col>
            <div className="text-right">
              {cart.totalAmount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            Biaya Administrasi (3%)
            <ul>
              <li>
                <small>Termasuk biaya pengantaran, pengemasan dan jasa</small>
              </li>
            </ul>
          </Col>
          <Col>
            <div className="text-right">
              {((cart.totalAmount * 3) / 100)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>Kode Unik</Col>
          <Col>
            <div className="text-right">
              {unique_number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </div>
          </Col>
        </Row>
        {wallet.balance ? (
          <div>
            <Row>
              <Col>
                Saldo Kredit{" "}
                <b>
                  (Rp{" "}
                  {wallet.balance
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  )
                </b>
              </Col>

              <Col>
                <div className="text-right">
                  <span className="red-text">
                    -{" "}
                    {creditPayment
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div></div>
        )}

        <hr />
        <Row>
          <Col>
            <b>Total Akhir</b>
          </Col>
          <Col>
            <div className="text-right">
              <b>
                Rp{" "}
                {final_invoice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </b>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <ul>
              <li>
                <small>
                  Minimal pemesanan{" "}
                  <span className="red-text">
                    Rp{" "}
                    {(500000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </span>
                </small>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="form-group">
        <div className="section-label">
          <label>Pilih metode bayar</label>
        </div>
        <select
          className="form-control"
          onChange={(event) => setPaymentMethod(event.target.value)}
        >
          <option value="Transfer" selected>
            Transfer
          </option>
        </select>
      </div>
      {cart.totalAmount >= 500000 ? (
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
      ) : (
        <Button size="sm" variant="danger" block disabled>
          Pemesanan tidak mencapai Rp{" "}
          {(500000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </Button>
      )}
    </div>
  );
}
export default Order;

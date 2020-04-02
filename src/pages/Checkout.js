import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../actions";

function Checkout() {
  const cart = useSelector(state => state.cart);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Potong Gaji");

  const dispatch = useDispatch();

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Keterangan Pembeli</Card.Title>
          <Card.Text>
            <input
              type="text"
              onChange={event => setName(event.target.value)}
              placeholder="Nama Lengkap"
              required
            />
            <hr />

            <input
              type="text"
              onChange={event => setPhone(event.target.value)}
              placeholder="Nomor handphone"
              required
            />

            <hr />
            <label>Alamat Lengkap:</label>
            <br />
            <textarea
              onChange={event => setAddress(event.target.value)}
              placeholder="Alamat"
              required
            ></textarea>

            <hr />

            <div class="form-group">
              <label>Pilih metode bayar:</label>

              <select
                class="form-control"
                onChange={event => setPaymentMethod(event.target.value)}
              >
                <option value="Potong Gaji" selected>
                  Potong Gaji
                </option>
                <option value="Transfer">Transfer</option>
                <option value="Cash">Tunai</option>
              </select>
            </div>
          </Card.Text>
          <Button
            type="submit"
            value="Submit"
            onClick={() =>
              dispatch(
                checkout(
                  cart.items,
                  cart.totalItem,
                  cart.totalAmount,
                  name,
                  phone,
                  address,
                  paymentMethod
                )
              )
            }
          >
            Kirim
          </Button>
        </Card.Body>
        <h4> </h4>
      </Card>
    </div>
  );
}

export default Checkout;

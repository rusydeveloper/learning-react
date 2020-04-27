import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../actions";

function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const [cooperative, setCooperative] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h3>
        Silahkan mendaftarkan diri{" "}
        <span class="textHighlight">jika belum memiliki akun</span>
      </h3>
      <Card>
        <Card.Body>
          <Card.Title>Keterangan Akun</Card.Title>
          <Card.Text>
            <input
              type="text"
              onChange={(event) => setName(event.target.value)}
              placeholder="Nama Lengkap"
              required
            />
            <hr />
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
            />
            <hr />
            <input
              type="text"
              onChange={(event) => setCooperative(event.target.value)}
              placeholder="Nama Koperasi"
              required
            />
            <hr />

            <input
              type="phone"
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Nomor handphone"
              required
            />

            <hr />
            <label>Alamat Lengkap:</label>
            <br />
            <textarea
              onChange={(event) => setAddress(event.target.value)}
              placeholder="Alamat"
              required
            ></textarea>
            <hr />
          </Card.Text>
          <Button
            type="submit"
            value="Submit"
            onClick={() =>
              dispatch(signup(name, email, phone, address, cooperative))
            }
          >
            Kirim
          </Button>
        </Card.Body>
      </Card>
      <h3>
        Silahkan masuk/ login{" "}
        <span class="textHighlight">jika sudah memiliki akun</span>
      </h3>
      <Card>
        <Card.Body>
          <Card.Title>Keterangan Pembeli</Card.Title>
          <Card.Text>
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
            />
            <hr />
            <input
              type="text"
              onChange={(event) => setCooperative(event.target.value)}
              placeholder="Nama Koperasi"
              required
            />
            <hr />

            <input
              type="phone"
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Nomor handphone"
              required
            />

            <hr />
            <label>Alamat Lengkap:</label>
            <br />
            <textarea
              onChange={(event) => setAddress(event.target.value)}
              placeholder="Alamat"
              required
            ></textarea>
            <hr />
          </Card.Text>
          <Button
            type="submit"
            value="Submit"
            onClick={() =>
              dispatch(signup(name, email, phone, address, cooperative))
            }
          >
            Kirim
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default User;

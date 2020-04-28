import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { login, signup, logout } from "../actions";

function User() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerRepassword, setRegisterRepassword] = useState("");

  const [cooperative, setCooperative] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const business = useSelector((state) => state.business);

  return (
    <div>
      {user.name ? (
        <div>
          <hr></hr>
          <p>
            <b>Data Pribadi</b>
          </p>
          <p>{user.name}</p>
          <p>{user.phone}</p>
          <p>{user.email}</p>
          <hr></hr>
          <p>
            <b>Data Koperasi</b>
          </p>
          <p>{business.name}</p>
          <p>{business.address}</p>
          <Button
            type="submit"
            value="Submit"
            variant="outline-warning"
            onClick={() => dispatch(logout())}
            block
          >
            Keluar
          </Button>
        </div>
      ) : (
        <div>
          <hr />
          <b>
            Silahkan masuk{" "}
            <span class="textHighlight">jika sudah memiliki akun</span>
          </b>
          <Card>
            <Card.Body>
              <Card.Title>Masuk</Card.Title>
              <Card.Text>
                <label>email: </label>
                <br />
                <input
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="email"
                  required
                />
                <br />
                <label>Password:</label>
                <br />
                <input
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="password"
                  required
                />
                <br />
              </Card.Text>
              <Button
                type="submit"
                value="Submit"
                onClick={() => dispatch(login(email, password))}
                block
                variant="warning"
              >
                Masuk
              </Button>
            </Card.Body>
          </Card>
          <hr />
          <b>
            Silahkan mendaftarkan diri{" "}
            <span class="textHighlight">jika belum memiliki akun</span>
          </b>
          <Card>
            <Card.Body>
              <Card.Title>Pendaftaran Akun</Card.Title>
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
                  onChange={(event) => setRegisterEmail(event.target.value)}
                  placeholder="Email"
                  required
                />
                <hr />
                <input
                  type="password"
                  onChange={(event) => setRegisterPassword(event.target.value)}
                  placeholder="Password"
                  required
                />
                <hr />
                <input
                  type="password"
                  onChange={(event) =>
                    setRegisterRepassword(event.target.value)
                  }
                  placeholder="Ulangi Password"
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
                variant="warning"
                onClick={() =>
                  dispatch(
                    signup(
                      name,
                      registerEmail,
                      phone,
                      address,
                      cooperative,
                      registerPassword,
                      registerRepassword
                    )
                  )
                }
                block
              >
                Daftar
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}

export default User;
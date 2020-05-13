import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { login, signup, logout } from "../actions";
import Help from "../components/Help";
import ReactGA from "react-ga";
import { Mixpanel } from "../components/Mixpanel";

function Login() {
  Mixpanel.track("view login page");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerRepassword, setRegisterRepassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("password tidak sama");

  const [validName, setValidName] = useState(false);
  const [validRegisterEmail, setValidRegisterEmail] = useState(false);
  const [validRegisterPassword, setValidRegisterPassword] = useState(false);
  const [validRegisterRepassword, setValidRegisterRepassword] = useState(false);
  const [validMatchPassword, setValidMatchPassword] = useState(false);

  const [errorName, setErrorName] = useState("wajib diisi");
  const [errorRegisterEmail, setErrorRegisterEmail] = useState("wajib diisi");
  const [errorRegisterPassword, setErrorRegisterPassword] = useState(
    "wajib diisi, minimal 6 karakter"
  );
  const [errorRegisterRepassword, setErrorRegisterRepassword] = useState(
    "wajib diisi, minimal 6 karakter"
  );

  const [cooperative, setCooperative] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [validCooperative, setValidCooperative] = useState(false);
  const [validAddress, setValidAddress] = useState(false);
  const [validPhone, setValidPhone] = useState(false);

  const [errorCooperative, setErrorCooperative] = useState("wajib diisi");
  const [errorAddress, setErrorAddress] = useState("wajib diisi");
  const [errorPhone, setErrorPhone] = useState("wajib diisi");

  const [validForm, setValidForm] = useState(false);

  const [tnc, setTnc] = useState(1);
  const dispatch = useDispatch();
  ReactGA.pageview("/login");

  const user = useSelector((state) => state.user);
  const business = useSelector((state) => state.business);
  const cart = useSelector((state) => state.cart);

  function checkName(name) {
    if (name) {
      setErrorName("");
      setValidName(true);
    } else {
      setErrorName("wajib diisi");
      setValidName(false);
      setValidForm(false);
    }
  }

  function checkRegisterEmail(email) {
    if (email) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setErrorRegisterEmail("");
        setValidRegisterEmail(true);
      } else {
        setErrorRegisterEmail("email salah");
        setValidRegisterEmail(false);
        setValidForm(false);
      }
    } else {
      setErrorRegisterEmail("wajib diisi");
      setValidRegisterEmail(false);
      setValidForm(false);
    }
  }

  function checkPassword(password) {
    if (password) {
      if (password.length > 5) {
        setErrorRegisterPassword("");
        setValidRegisterPassword(true);
      } else {
        setErrorRegisterPassword("password minimal 6 karakter");
        setValidRegisterPassword(false);
        setValidForm(false);
      }
    } else {
      setErrorRegisterPassword("wajib diisi");
      setValidRegisterPassword(false);
      setValidForm(false);
    }
  }

  function checkRepassword(repassword) {
    if (repassword) {
      if (repassword.length > 5) {
        setErrorRegisterRepassword("");
        setValidRegisterRepassword(true);
      } else {
        setErrorRegisterRepassword("ulangi password minimal 6 karakter. ");
        setValidRegisterRepassword(false);
        setValidForm(false);
      }
    } else {
      setErrorRegisterRepassword("wajib diisi");
      setValidRegisterRepassword(false);
      setValidForm(false);
    }
  }

  function checkMatchPassword(password, repassword) {
    if (password === repassword) {
      setMatchPassword("");
      setValidMatchPassword(true);
    } else {
      setMatchPassword("password tidak sama");
      setValidMatchPassword(false);
      setValidForm(false);
    }
  }

  function checkPhone(phone) {
    if (phone) {
      if (phone.length > 10) {
        setErrorPhone("");
        setValidPhone(true);
      } else {
        setErrorPhone("nomor handphone salah");
        setValidPhone(false);
        setValidForm(false);
      }
    } else {
      setErrorPhone("wajib diisi");
      setValidPhone(false);
      setValidForm(false);
    }
  }

  function checkCooperative(cooperative) {
    if (cooperative) {
      setErrorCooperative("");
      setValidCooperative(true);
    } else {
      setErrorCooperative("wajib diisi");
      setValidCooperative(false);
      setValidForm(false);
    }
  }

  function checkAddress(address) {
    if (address) {
      setErrorAddress("");
      setValidAddress(true);
    } else {
      setErrorAddress("wajib diisi");
      setValidAddress(false);
      setValidForm(false);
    }
  }

  function checkForm(
    validName,
    validRegisterEmail,
    validRegisterPassword,
    validRegisterRepassword,
    validPhone,
    validCooperative,
    validAddress,
    validMatchPassword
  ) {
    if (
      (validName && validRegisterEmail && validRegisterPassword,
      validRegisterRepassword &&
        validPhone &&
        validCooperative &&
        validAddress &&
        validMatchPassword)
    ) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }

  return (
    <div className="page-container">
      <Help
        phone="08211-777-0072"
        wa="6282117770072"
        message="Saya mau bertanya tentang program belanja bersama"
      ></Help>
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
                  className="input-box"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="email"
                  required
                />
                <hr />
                <label>Password:</label>
                <input
                  type="password"
                  className="input-box"
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="password"
                  required
                />
                <hr />
              </Card.Text>
              <Button
                type="submit"
                value="Submit"
                onClick={() => dispatch(login(email, password, cart.totalItem))}
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
                  className="input-box"
                  onChange={(event) => {
                    setName(event.target.value);
                    checkName(event.target.value);
                    checkForm(
                      validName,
                      validRegisterEmail,
                      validRegisterPassword,
                      validRegisterRepassword,
                      validPhone,
                      validCooperative,
                      validAddress,
                      validMatchPassword
                    );
                  }}
                  placeholder="Nama Lengkap"
                  required
                />
                <br />
                <span className="error-text">{errorName}</span>
                <hr />
                <input
                  type="email"
                  className="input-box"
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                    checkRegisterEmail(event.target.value);
                    checkForm(
                      validName,
                      validRegisterEmail,
                      validRegisterPassword,
                      validRegisterRepassword,
                      validPhone,
                      validCooperative,
                      validAddress,
                      validMatchPassword
                    );
                  }}
                  placeholder="Email"
                  required
                />
                <br />
                <span className="error-text">{errorRegisterEmail}</span>
                <hr />
                <input
                  type="password"
                  className="input-box"
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                    checkPassword(event.target.value);
                    checkMatchPassword(event.target.value, registerRepassword);
                    checkForm(
                      validName,
                      validRegisterEmail,
                      validRegisterPassword,
                      validRegisterRepassword,
                      validPhone,
                      validCooperative,
                      validAddress,
                      validMatchPassword
                    );
                  }}
                  placeholder="Password"
                  required
                />
                <br />
                <span className="error-text">{errorRegisterPassword}</span>
                <hr />
                <input
                  type="password"
                  className="input-box"
                  onChange={(event) => {
                    setRegisterRepassword(event.target.value);
                    checkRepassword(event.target.value);
                    checkMatchPassword(registerPassword, event.target.value);
                    checkForm(
                      validName,
                      validRegisterEmail,
                      validRegisterPassword,
                      validRegisterRepassword,
                      validPhone,
                      validCooperative,
                      validAddress,
                      validMatchPassword
                    );
                  }}
                  placeholder="Ulangi Password"
                  required
                />
                <br />
                <span className="error-text">
                  {errorRegisterRepassword}
                </span>{" "}
                <span className="error-text">{matchPassword}</span>
                <hr />
                <input
                  type="text"
                  className="input-box"
                  onChange={(event) => {
                    setCooperative(event.target.value);
                    checkCooperative(event.target.value);
                    checkForm(
                      validName,
                      validRegisterEmail,
                      validRegisterPassword,
                      validRegisterRepassword,
                      validPhone,
                      validCooperative,
                      validAddress,
                      validMatchPassword
                    );
                  }}
                  placeholder="Nama Koperasi"
                  required
                />
                <br />
                <span className="error-text">{errorCooperative}</span>
                <hr />
                <input
                  type="phone"
                  className="input-box"
                  onChange={(event) => {
                    setPhone(event.target.value);
                    checkPhone(event.target.value);
                    checkForm(
                      validName,
                      validRegisterEmail,
                      validRegisterPassword,
                      validRegisterRepassword,
                      validPhone,
                      validCooperative,
                      validAddress,
                      validMatchPassword
                    );
                  }}
                  placeholder="Nomor handphone"
                  required
                />
                <br />
                <span className="error-text">{errorPhone}</span>
                <hr />
                <label>Alamat Koperasi</label>
                <br />
                <textarea
                  onChange={(event) => {
                    setAddress(event.target.value);
                    checkAddress(event.target.value);
                    checkForm(
                      validName,
                      validRegisterEmail,
                      validRegisterPassword,
                      validRegisterRepassword,
                      validPhone,
                      validCooperative,
                      validAddress,
                      validMatchPassword
                    );
                  }}
                  placeholder="Alamat"
                  required
                ></textarea>
                <span className="error-text">{errorAddress}</span>
                <hr />
              </Card.Text>
              <div className="flex-container-nowrap">
                <div>
                  <input
                    type="checkbox"
                    id="tnc"
                    className="checkbox-tnc"
                    name="tnc"
                    value={tnc}
                    onChange={(event) => setTnc(event.target.value)}
                    required
                    checked
                  />
                </div>
                <div>
                  <label for="tnc">
                    <small className="tnc-text">
                      Dengan mengklik tombol daftar saya menyetujui{" "}
                      <a
                        href="https://www.nectico.com/syarat-dan-ketentuan-belanja-bersama/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        syarat dan ketentuan
                      </a>{" "}
                      yang berlaku
                    </small>
                  </label>
                </div>
              </div>
              {validForm ? (
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
                        registerRepassword,
                        cart.totalItem,
                        tnc
                      )
                    )
                  }
                  block
                >
                  Daftar
                </Button>
              ) : (
                <Button
                  type="submit"
                  value="Submit"
                  variant="danger"
                  block
                  disabled
                >
                  Isi Formulir dengan Benar
                </Button>
              )}
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Login;

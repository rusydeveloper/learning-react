import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Button, Card } from "react-bootstrap";

import { Mixpanel } from "../../components/Mixpanel";

import HeaderNav from "../../components/HeaderNav";

function Record() {
  Mixpanel.track("view feedback page");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("wajib diisi");
  const [validName, setValidName] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [recordType, setRecordType] = useState("");

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

  function checkForm(validName) {
    if (validName) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }

  useEffect(() => {
    // dispatch(checkFeedbackLogin(user.id));
  }, [dispatch, user]);

  return (
    <div className="page-container">
      <HeaderNav title="Catat Pembelian"></HeaderNav>
      <Card>
        <Card.Body>
          <select
            className="form-control"
            onChange={(event) => setRecordType(event.target.value)}
          >
            <option value="" selected>
              Belum Memilih
            </option>
            <option value="new">Produk Baru</option>
          </select>
        </Card.Body>
      </Card>
      <hr />
      <Card>
        <Card.Body>
          <Card.Text>
            <input
              type="text"
              className="input-box"
              onChange={(event) => {
                setName(event.target.value);
                checkName(event.target.value);
                checkForm(validName);
              }}
              placeholder="Nama Produk"
              required
            />
            <br />
            <span className="error-text">{errorName}</span>
            <hr />
            <input
              type="text"
              className="input-box"
              onChange={(event) => {
                setName(event.target.value);
                checkName(event.target.value);
                checkForm(validName);
              }}
              placeholder="Brand/ Merk Produk"
              required
            />
            <br />
            <span className="error-text">{errorName}</span>
            <hr />
            <input
              type="number"
              className="input-box"
              onChange={(event) => {
                setName(event.target.value);
                checkName(event.target.value);
                checkForm(validName);
              }}
              placeholder="Jumlah"
              required
            />
            <br />
            <span className="error-text">{errorName}</span>
            <hr />
            <input
              type="text"
              className="input-box"
              onChange={(event) => {
                setName(event.target.value);
                checkName(event.target.value);
                checkForm(validName);
              }}
              placeholder="Satuan"
              required
            />
            <br />
            <span className="error-text">{errorName}</span>
            <hr />

            <input
              type="date"
              className="input-box"
              onChange={(event) => {
                setName(event.target.value);
                checkName(event.target.value);
                checkForm(validName);
              }}
              placeholder="Tanggal Pencatatan"
              required
            />
            <br />
            <span className="error-text">{errorName}</span>
            <hr />
          </Card.Text>

          {validForm ? (
            <Button
              type="submit"
              value="Submit"
              variant="warning"
              onClick={() => dispatch()}
              block
            >
              Catat
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
  );
}
export default Record;

import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { recordPurchasing, checkInventoryLogin } from "../../actions";
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

  const [brand, setBrand] = useState("");
  const [errorBrand, setErrorBrand] = useState("wajib diisi");
  const [validBrand, setValidBrand] = useState(false);

  const [quantity, setQuantity] = useState(0);
  const [errorQuantity, setErrorQuantity] = useState("wajib diisi");
  const [validQuantity, setValidQuantity] = useState(false);

  const [unit, setUnit] = useState("");
  const [errorUnit, setErrorUnit] = useState("wajib diisi");
  const [validUnit, setValidUnit] = useState(false);

  const [price, setPrice] = useState(0);
  const [errorPrice, setErrorPrice] = useState("wajib diisi");
  const [validPrice, setValidPrice] = useState(false);

  const [recordedDate, setRecordedDate] = useState("");
  const [errorRecordedDate, setErrorRecordedDate] = useState("wajib diisi");
  const [validRecordedDate, setValidRecordedDate] = useState(false);

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

  function checkBrand(brand) {
    if (brand) {
      setErrorBrand("");
      setValidBrand(true);
    } else {
      setErrorBrand("wajib diisi");
      setValidBrand(false);
      setValidForm(false);
    }
  }

  function checkQuantity(quantity) {
    if (quantity) {
      setErrorQuantity("");
      setValidQuantity(true);
    } else {
      setErrorQuantity("wajib diisi");
      setValidQuantity(false);
      setValidForm(false);
    }
  }

  function checkPrice(price) {
    if (price) {
      setErrorPrice("");
      setValidPrice(true);
    } else {
      setErrorPrice("wajib diisi");
      setValidPrice(false);
      setValidForm(false);
    }
  }

  function checkUnit(unit) {
    if (unit) {
      setErrorUnit("");
      setValidUnit(true);
    } else {
      setErrorUnit("wajib diisi");
      setValidUnit(false);
      setValidForm(false);
    }
  }

  function checkRecordedDate(recordedDate) {
    if (recordedDate) {
      setErrorRecordedDate("");
      setValidRecordedDate(true);
    } else {
      setErrorRecordedDate("wajib diisi");
      setValidRecordedDate(false);
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
    dispatch(checkInventoryLogin(user.id));
  }, [dispatch, user]);

  return (
    <div className="page-container">
      <HeaderNav title="Catat Pembelian"></HeaderNav>
      <Card>
        <Card.Body>
          <label>Pilih produk</label>
          <select
            className="form-control"
            onChange={(event) => setRecordType(event.target.value)}
          >
            <option value="" selected>
              Belum Memilih
            </option>
            <option value="new">Buat Produk Baru</option>
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
                setBrand(event.target.value);
                checkBrand(event.target.value);
                checkForm(
                  validName,
                  validBrand,
                  validQuantity,
                  validUnit,
                  validPrice,
                  validRecordedDate
                );
              }}
              placeholder="Brand/ Merk Produk"
              required
            />
            <br />
            <span className="error-text">{errorBrand}</span>
            <hr />
            <input
              type="number"
              className="input-box"
              onChange={(event) => {
                setQuantity(event.target.value);
                checkQuantity(event.target.value);
                checkForm(
                  validName,
                  validBrand,
                  validQuantity,
                  validUnit,
                  validPrice,
                  validRecordedDate
                );
              }}
              placeholder="Jumlah"
              required
            />
            <br />
            <span className="error-text">{errorQuantity}</span>
            <hr />
            <input
              type="text"
              className="input-box"
              onChange={(event) => {
                setUnit(event.target.value);
                checkUnit(event.target.value);
                checkForm(
                  validName,
                  validBrand,
                  validQuantity,
                  validUnit,
                  validPrice,
                  validRecordedDate
                );
              }}
              placeholder="Satuan"
              required
            />
            <br />
            <span className="error-text">{errorUnit}</span>
            <hr />
            <input
              type="number"
              className="input-box"
              onChange={(event) => {
                setPrice(event.target.value);
                checkPrice(event.target.value);
                checkForm(
                  validName,
                  validBrand,
                  validQuantity,
                  validUnit,
                  validPrice,
                  validRecordedDate
                );
              }}
              placeholder="Harga Satuan"
              required
            />
            <br />
            <span className="error-text">{errorPrice}</span>
            <hr />
            <label>Tanggal Pencatatan</label>
            <input
              type="date"
              className="input-box"
              onChange={(event) => {
                setRecordedDate(event.target.value);
                checkRecordedDate(event.target.value);
                checkForm(
                  validName,
                  validBrand,
                  validQuantity,
                  validUnit,
                  validPrice,
                  validRecordedDate
                );
              }}
              placeholder="Tanggal Pencatatan"
              required
            />
            <br />
            <span className="error-text">{errorRecordedDate}</span>
            <hr />
          </Card.Text>

          {validForm ? (
            <Button
              type="submit"
              value="Submit"
              variant="warning"
              onClick={() =>
                dispatch(
                  recordPurchasing(
                    user.id,
                    recordType,
                    name,
                    brand,
                    quantity,
                    unit,
                    price,
                    recordedDate
                  )
                )
              }
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

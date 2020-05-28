import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  recordPurchasing,
  checkInventoryLogin,
  loadInventoryList,
  loadInventoryItem,
  clearInventoryItem,
  editFormInventoryName,
  editFormInventoryBrand,
  editFormInventoryUnit,
  formValidTrue,
  formValidFalse,
} from "../../actions";
import { Button, Card } from "react-bootstrap";

import { Mixpanel } from "../../components/Mixpanel";

import HeaderNav from "../../components/HeaderNav";
import InventoryHistoryList from "../../components/InventoryHistoryList";

function Record() {
  const dispatch = useDispatch();
  Mixpanel.track("view record inventory page");
  const user = useSelector((state) => state.user);
  const inventory = useSelector((state) => state.recordInventory.items);
  const inventorySelect = useSelector((state) => state.selectedInventory);
  const [errorName, setErrorName] = useState("wajib diisi");
  const [validName, setValidName] = useState(false);

  const [errorBrand, setErrorBrand] = useState("wajib diisi");
  const [validBrand, setValidBrand] = useState(false);

  const [quantity, setQuantity] = useState(0);
  const [errorQuantity, setErrorQuantity] = useState("wajib diisi");
  const [validQuantity, setValidQuantity] = useState(false);

  const [errorUnit, setErrorUnit] = useState("wajib diisi");
  const [validUnit, setValidUnit] = useState(false);

  const [price, setPrice] = useState(0);
  const [errorPrice, setErrorPrice] = useState("wajib diisi");
  const [validPrice, setValidPrice] = useState(false);

  const [recordedDate, setRecordedDate] = useState("");
  const [errorRecordedDate, setErrorRecordedDate] = useState("wajib diisi");
  const [validRecordedDate, setValidRecordedDate] = useState(false);

  const [recordType, setRecordType] = useState("");

  function checkName(name) {
    if (name) {
      setErrorName("");
      setValidName(true);
    } else {
      setErrorName("wajib diisi");
      setValidName(false);
      dispatch(formValidFalse());
    }
  }

  function checkBrand(brand) {
    if (brand) {
      setErrorBrand("");
      setValidBrand(true);
    } else {
      setErrorBrand("wajib diisi");
      setValidBrand(false);
      dispatch(formValidFalse());
    }
  }

  function checkQuantity(quantity) {
    if (quantity) {
      setErrorQuantity("");
      setValidQuantity(true);
    } else {
      setErrorQuantity("wajib diisi");
      setValidQuantity(false);
      dispatch(formValidFalse());
    }
  }

  function checkPrice(price) {
    if (price) {
      setErrorPrice("");
      setValidPrice(true);
    } else {
      setErrorPrice("wajib diisi");
      setValidPrice(false);
      dispatch(formValidFalse());
    }
  }

  function checkUnit(unit) {
    if (unit) {
      setErrorUnit("");
      setValidUnit(true);
    } else {
      setErrorUnit("wajib diisi");
      setValidUnit(false);
      dispatch(formValidFalse());
    }
  }

  function checkRecordedDate(recordedDate) {
    if (recordedDate) {
      setErrorRecordedDate("");
      setValidRecordedDate(true);
    } else {
      setErrorRecordedDate("wajib diisi");
      setValidRecordedDate(false);
      dispatch(formValidFalse());
    }
  }

  function checkForm(
    validName,
    validBrand,
    validQuantity,
    validUnit,
    validPrice,
    validRecordedDate
  ) {
    if (
      validName &&
      validBrand &&
      validQuantity &&
      validUnit &&
      validPrice &&
      validRecordedDate
    ) {
      dispatch(formValidTrue());
    } else {
      dispatch(formValidFalse());
    }
  }

  useEffect(() => {
    dispatch(checkInventoryLogin(user.id));
    dispatch(loadInventoryList(user.id));
  }, [dispatch, user]);

  function selectedInventory(product) {
    if (product === "new" || product === "") {
      dispatch(clearInventoryItem());
      dispatch(editFormInventoryName(""));
      setErrorName("wajib diisi");
      setValidName(false);
      dispatch(editFormInventoryBrand(""));
      setErrorBrand("wajib diisi");
      setValidBrand(false);
      dispatch(editFormInventoryUnit(""));
      setErrorUnit("wajib diisi");
      setValidUnit(false);
      dispatch(formValidFalse());
    } else {
      dispatch(loadInventoryItem(product));

      setErrorName("");
      setValidName(true);
      setErrorBrand("");
      setValidBrand(true);
      setErrorUnit("");
      setValidUnit(true);
    }
  }

  return (
    <div className="page-container">
      <HeaderNav title="Catat Pembelian"></HeaderNav>
      <Card>
        <Card.Body>
          <label>Pilih produk</label>
          <select
            className="form-control"
            onChange={(event) => {
              setRecordType(event.target.value);
              selectedInventory(event.target.value);
            }}
          >
            <option value="">Belum Memilih</option>
            <option value="new">Buat Produk Baru</option>
            {inventory
              ? inventory.map((inventoryItem, i) => (
                  <option key={i} value={inventoryItem.id}>
                    {inventoryItem.name}
                  </option>
                ))
              : null}
          </select>
        </Card.Body>
      </Card>
      <hr />
      {recordType !== "" ? (
        <Card>
          <Card.Body>
            <Card.Text>
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
              <input
                type="text"
                className="input-box"
                onChange={(event) => {
                  dispatch(editFormInventoryName(event.target.value));
                  checkName(event.target.value);
                  checkForm(
                    validName,
                    validBrand,
                    validQuantity,
                    validUnit,
                    validPrice,
                    validRecordedDate
                  );
                }}
                placeholder="Nama Produk"
                defaultValue={inventorySelect.form_edit_name}
                value={inventorySelect.form_edit_name}
                required
              />
              <br />
              <span className="error-text">{errorName}</span>
              <hr />
              <input
                type="text"
                className="input-box"
                onChange={(event) => {
                  checkBrand(event.target.value);
                  dispatch(editFormInventoryBrand(event.target.value));
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
                defaultValue={inventorySelect.form_edit_brand}
                value={inventorySelect.form_edit_brand}
                required
              />
              <br />
              <span className="error-text">{errorBrand}</span>
              <hr />
              <table>
                <tr>
                  <td>
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
                  </td>
                  <td className="text-right">
                    <input
                      type="text"
                      className="input-box text-right"
                      onChange={(event) => {
                        checkUnit(event.target.value);
                        checkForm(
                          validName,
                          validBrand,
                          validQuantity,
                          validUnit,
                          validPrice,
                          validRecordedDate
                        );
                        dispatch(editFormInventoryUnit(event.target.value));
                      }}
                      placeholder="Satuan"
                      defaultValue={inventorySelect.form_edit_unit}
                      value={inventorySelect.form_edit_unit}
                      required
                    />
                    <br />
                    <span className="error-text">{errorUnit}</span>
                  </td>
                </tr>
              </table>

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
            </Card.Text>

            {inventorySelect.form_valid ? (
              <Button
                type="submit"
                value="Submit"
                variant="warning"
                onClick={() => {
                  dispatch(
                    recordPurchasing(
                      user.id,
                      recordType,
                      inventorySelect.form_edit_name,
                      inventorySelect.form_edit_brand,
                      quantity,
                      inventorySelect.form_edit_unit,
                      price,
                      recordedDate
                    )
                  );
                  Mixpanel.track("click submit purchasing record");
                }}
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
      ) : null}
      <hr />

      {inventorySelect.history.length > 0 ? (
        <div>
          <small>Riwayat Pencatatan</small>
          <InventoryHistoryList
            inventoryHistories={inventorySelect.history}
            unit={inventorySelect.unit}
          ></InventoryHistoryList>
        </div>
      ) : null}
    </div>
  );
}
export default Record;

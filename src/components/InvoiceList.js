import React from "react";

import { useDispatch } from "react-redux";

import InvoiceItem from "./InvoiceItem";
import noInvoice from "../assets/no-invoice.png";
import { push } from "connected-react-router";
import { Button } from "react-bootstrap";

function InvoiceList(props) {
  const dispatch = useDispatch();
  return (
    <div>
      {props.invoices.length > 0 ? (
        <div className="flex-container">
          {props.invoices.map((invoice, i) => (
            <div key={i}>
              <InvoiceItem invoice={invoice} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="no-invoice-container">
            <img src={noInvoice} className="no-invoice" alt="logo" />
          </div>
          <Button
            type="submit"
            value="Submit"
            variant="danger"
            onClick={() => dispatch(push("/"))}
            block
          >
            Tambah Pesanan
          </Button>
        </div>
      )}
    </div>
  );
}
export default InvoiceList;

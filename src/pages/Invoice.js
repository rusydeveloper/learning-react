import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import InvoiceList from "../components/InvoiceList";

import { loadInvoices } from "../actions";

function Invoice() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInvoices());
  }, [dispatch]);

  const invoices = useSelector((state) => state.invoice.items);

  return (
    <div>
      <InvoiceList invoices={invoices} />{" "}
    </div>
  );
}
export default Invoice;

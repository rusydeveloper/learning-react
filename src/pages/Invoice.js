import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import InvoiceList from "../components/InvoiceList";
import Help from "../components/Help";

import { loadInvoices } from "../actions";

function Invoice() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadInvoices(user.id));
  }, [dispatch]);

  const invoices = useSelector((state) => state.invoice.items);

  return (
    <div>
      <Help
        phone="081-325-368-885"
        wa="6281325368885"
        message="Saya mau bertanya tentang cara pembayaran program belanja bersama"
      ></Help>
      <InvoiceList invoices={invoices} />{" "}
    </div>
  );
}
export default Invoice;

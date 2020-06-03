import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import InvoiceList from "../components/InvoiceList";
import Help from "../components/Help";

import { loadInvoices } from "../actions";
import ReactGA from "react-ga";
import { Mixpanel } from "../components/Mixpanel";
import HeaderNav from "../components/HeaderNav";
import BottomNav from "../components/BottomNav";

function Invoice() {
  Mixpanel.track("view invoice page");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadInvoices(user.id));
    ReactGA.pageview("/invoice");
  }, [dispatch, user]);

  const invoices = useSelector((state) => state.invoice.items);

  return (
    <div className="page-container">
      <HeaderNav title="Pesanan"></HeaderNav>
      <Help
        phone="081-325-368-885"
        wa="6281325368885"
        message="Saya mau bertanya tentang cara pembayaran program belanja bersama"
      ></Help>
      <InvoiceList invoices={invoices} /> <BottomNav></BottomNav>
    </div>
  );
}
export default Invoice;

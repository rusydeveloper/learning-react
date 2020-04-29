import React from "react";

import InvoiceItem from "./InvoiceItem";
import { useSelector } from "react-redux";

function InvoiceList(props) {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <div class="flex-container">
        {props.invoices.map((invoice) => (
          <div>
            <InvoiceItem invoice={invoice} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default InvoiceList;

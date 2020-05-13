import React from "react";

import InvoiceItem from "./InvoiceItem";

function InvoiceList(props) {
  return (
    <div>
      <div className="flex-container">
        {props.invoices.map((invoice, i) => (
          <div key={i}>
            <InvoiceItem invoice={invoice} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default InvoiceList;

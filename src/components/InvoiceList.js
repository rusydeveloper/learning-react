import React from "react";

import InvoiceItem from "./InvoiceItem";

function InvoiceList(props) {
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

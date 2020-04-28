const initialInvoiceState = {
  items: [],
};

const invoiceReducer = (state = initialInvoiceState, action) => {
  switch (action.type) {
    case "LOAD_INVOICE":
      return {
        ...state,
        items: action.payload.data,
      };

    case "LOAD_INVOICE_FAILED":
      return "FAILED";
    default:
      return state;
  }
};
export default invoiceReducer;

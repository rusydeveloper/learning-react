const initialOrderState = {
  items: [],
  totalItem: 0,
  totalAmount: 0,
  buyer: {},
};

const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case "CHECKOUT_SUCCESS":
      return {
        ...state,
        items: action.payload,
        totalItem: action.totalItem,
        totalAmount: action.totalAmount,
        buyer: action.buyer,
      };
    case "CHECKOUT_FAILED":
      return "FAILED";

    case "PRODUCT_ORDERED":
      return null;
    case "PRODUCT_EMPTY":
      return null;
    default:
      return state;
  }
};
export default orderReducer;

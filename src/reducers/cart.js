const initialCartState = {
  items: [],
  totalItem: 0,
  totalAmount: 0,
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        items: [...state.items, action.payload],
        totalItem: state.totalItem + 1,
        totalAmount: state.totalAmount + action.payload.buying_price,
      };
    case "ADD_CAMPAIGN_ORDER":
      return {
        ...state,
        items: [...state.items, action.payload],
        totalItem: state.totalItem + 1,
        totalAmount: state.totalAmount + action.payload.buying_price,
      };

    case "PLUS":
      var i;
      for (i = 0; i < state.items.length; i++) {
        if (action.payload.id === state.items[i].id) {
          state.items[i].totalSubitem += 1;
          state.items[i].totalSubamount += state.items[i].buying_price;
        }
      }

      return {
        ...state,
        items: state.items,
        totalItem: state.totalItem + 1,
        totalAmount: state.totalAmount + action.payload.buying_price,
      };

    case "MINUS":
      var j;
      for (j = 0; j < state.items.length; j++) {
        if (action.payload.id === state.items[j].id) {
          if (state.items[j].totalSubitem > 1) {
            state.items[j].totalSubitem -= 1;
            state.items[j].totalSubamount -= state.items[j].buying_price;
            return {
              ...state,
              items: state.items,
              totalItem: state.totalItem - 1,
              totalAmount: state.totalAmount - action.payload.buying_price,
            };
          } else {
            state.items[j].totalSubitem -= 1;
            state.items[j].totalSubamount -= state.items[j].buying_price;

            return {
              ...state,
              items: [...state.items.slice(0, j), ...state.items.slice(j + 1)],
              totalItem: state.totalItem - 1,
              totalAmount: state.totalAmount - action.payload.buying_price,
            };
          }
        }
      }

      break;

    case "REMOVE":
      return {
        ...state,
        items: [
          ...state.items.slice(0, action.position),
          ...state.items.slice(action.position + 1),
        ],
        totalItem: state.totalItem - action.payload.totalSubitem,
        totalAmount: state.totalAmount - action.payload.totalSubamount,
      };
    case "CLEAR":
      return {
        ...state,
        items: [],
        totalItem: 0,
        totalAmount: 0,
      };
    case "CART_IS_EMPTY":
      return state;
    case "CART_NOT_EMPTY":
      return state;
    default:
      return state;
  }
};
export default cartReducer;

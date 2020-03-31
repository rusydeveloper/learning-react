const initialCartState = {
  items: [],
  totalItem: 0,
  totalAmount: 0
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD":
      // console.log(action.payload);
      // return state.push(action.payload);
      return {
        ...state,
        items: [...state.items, action.payload],
        totalItem: state.totalItem + 1,
        totalAmount: state.totalAmount + action.payload.price
      };
    case "REMOVE":
      console.log(action.payload);
      console.log(action.position);

      return {
        ...state,
        items: [
          ...state.items.slice(0, action.position),
          ...state.items.slice(action.position + 1)
        ],
        totalItem: state.totalItem - 1,
        totalAmount: state.totalAmount - action.payload.price
      };
    case "CLEAR":
      return state - 1;
    default:
      return state;
  }
};
export default cartReducer;

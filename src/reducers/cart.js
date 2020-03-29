const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    case "REMOVE":
      return state - 1;
    case "CLEAR":
      return state - 1;
    default:
      return state;
  }
};
export default cartReducer;

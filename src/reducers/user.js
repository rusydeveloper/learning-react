const userReducer = (state = [], action) => {
  switch (action.type) {
    case "SAVING":
      return (state = action.payload);
    case "REMOVE":
      return (state = []);
    default:
      return state;
  }
};
export default userReducer;

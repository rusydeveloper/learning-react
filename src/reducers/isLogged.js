const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return (state = true);
    case "LOGIN_FAILED":
      return (state = false);
    case "LOGOUT":
      return (state = false);
    default:
      return state;
  }
};
export default loggedReducer;

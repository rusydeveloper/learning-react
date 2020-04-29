const initialUserState = {};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "LOAD_USER":
      return (state = action.payload.data.user);
    case "SIGNUP_SUCCESS":
      return (state = action.payload.data.user);
    case "LOGOUT_USER":
      return (state = {});
    case "LOAD_USER_FROM_STORAGE":
      return (state = JSON.parse(action.payload));
    default:
      return state;
  }
};
export default userReducer;

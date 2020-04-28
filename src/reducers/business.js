const initialBusinessState = {};

const businessReducer = (state = initialBusinessState, action) => {
  switch (action.type) {
    case "LOAD_BUSINESS":
      return (state = action.payload.data.business);
    case "REMOVE_BUSINESS":
      return (state = {});
    default:
      return state;
  }
};
export default businessReducer;

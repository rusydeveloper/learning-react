const initialBusinessState = {};

const businessReducer = (state = initialBusinessState, action) => {
  switch (action.type) {
    case "LOAD_BUSINESS":
      return (state = action.payload.data.business);
    case "REMOVE_BUSINESS":
      return (state = {});

    case "LOAD_BUSINESS_FROM_STORAGE":
      return (state = JSON.parse(action.payload));
    default:
      return state;
  }
};
export default businessReducer;

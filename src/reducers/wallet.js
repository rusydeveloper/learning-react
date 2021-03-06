const initialWalletState = {};

const businessReducer = (state = initialWalletState, action) => {
  switch (action.type) {
    case "LOAD_WALLET":
      return (state = action.payload.data.wallet);

    case "CHECK_WALLET":
      return (state = action.payload.data);
    case "REMOVE_WALLET":
      return (state = {});
    default:
      return state;
  }
};
export default businessReducer;

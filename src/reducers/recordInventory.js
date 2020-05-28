const initialInventoryRecordState = {
  items: [],
};

const inventoryRecordReducer = (
  state = initialInventoryRecordState,
  action
) => {
  switch (action.type) {
    case "LOAD_INVENTORY_LIST":
      return {
        ...state,
        items: action.payload.data,
      };

    case "PURCHASE_RECORDING_ALLOWED":
      return null;
    case "PURCHASE_RECORD_SUCCESS":
      return null;
    case "PURCHASE_RECORD_FAILED":
      return null;
    case "PURCHASE_RECORD":
      return null;
    default:
      return state;
  }
};
export default inventoryRecordReducer;

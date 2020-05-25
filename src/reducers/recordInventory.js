const initialInventoryRecordState = {
  items: [],
};

const inventoryRecordReducer = (
  state = initialInventoryRecordState,
  action
) => {
  switch (action.type) {
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

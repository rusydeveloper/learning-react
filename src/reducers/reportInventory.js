const initialInventoryReportState = {
  items: [],
};

const inventoryReportReducer = (
  state = initialInventoryReportState,
  action
) => {
  switch (action.type) {
    case "LOAD_INVENTORY_REPORT":
      console.log(action.payload.data);
      return {
        ...state,
        items: action.payload.data,
      };

    default:
      return state;
  }
};
export default inventoryReportReducer;

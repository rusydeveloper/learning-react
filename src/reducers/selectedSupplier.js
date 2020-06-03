const initialSelectedSupplierState = {
  id: "",
  supplier: {},
};

const selectedSupplierReducer = (
  state = initialSelectedSupplierState,
  action
) => {
  switch (action.type) {
    case "ADD_SELECTED_SUPPLIERID":
      return {
        ...state,
        id: action.payload,
      };
    case "LOAD_SELECTED_SUPPLIER":
      return {
        ...state,
        supplier: action.payload.data,
      };

    case "CURRENT_SELECTED_SUPPLIERID":
      return state;
    case "CLEAR_SELECTED_SUPPLIERID":
      return {
        ...state,
        id: "",
        supplier: {},
      };
    default:
      return state;
  }
};
export default selectedSupplierReducer;

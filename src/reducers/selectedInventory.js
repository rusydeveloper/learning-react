const initialSelectedInventoryState = {
  name: "",
  brand: "",
  unit: "",
  form_edit_name: "",
  form_edit_unit: "",
  form_edit_brand: "",
  form_valid: false,
  history: [],
};

const selectedInventoryReducer = (
  state = initialSelectedInventoryState,
  action
) => {
  switch (action.type) {
    case "LOAD_INVENTORY_ITEM":
      return {
        ...state,
        name: action.payload.data.name,
        brand: action.payload.data.brand,
        unit: action.payload.data.unit,
        history: action.payload.data.inventory_history,
      };

    case "CURRENT_INVENTORY_ITEM":
      return state;

    case "FORM_INVENTORY_NAME":
      console.log(action.payload);
      return { ...state, form_edit_name: action.payload };

    case "FORM_INVENTORY_UNIT":
      return { ...state, form_edit_unit: action.payload };

    case "FORM_INVENTORY_BRAND":
      return { ...state, form_edit_brand: action.payload };

    case "FORM_VALID_TRUE":
      return { ...state, form_valid: true };
    case "FORM_VALID_FALSE":
      return { ...state, form_valid: false };

    case "CLEAR_INVENTORY_ITEM":
      return {
        ...state,
        name: "",
        brand: "",
        unit: "",
        history: [],
        form_edit_name: "",
        form_edit_unit: "",
        form_edit_brand: "",
      };
    default:
      return state;
  }
};
export default selectedInventoryReducer;
